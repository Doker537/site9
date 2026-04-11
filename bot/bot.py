from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, field_validator
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import html
import json
import os
import requests
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables from .env if it exists
load_dotenv()

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Restrict CORS to your production domain.
# During development you can add "http://localhost:3000" here.
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

# VK Configuration (set these in your .env file)
VK_TOKEN = os.getenv("VK_TOKEN")
VK_PEER_ID = os.getenv("VK_PEER_ID")

# Telegram Configuration (set these in your .env file)
TG_TOKEN = os.getenv("TG_TOKEN")
TG_CHAT_ID = os.getenv("TG_CHAT_ID")

MAX_NAME_LEN = 100
MAX_CONTACT_LEN = 200
MAX_SERVICE_LEN = 100
MAX_MESSAGE_LEN = 2000


class ContactForm(BaseModel):
    name: str
    contact: str
    service: str
    message: str

    @field_validator("name")
    @classmethod
    def validate_name(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("name is required")
        if len(v) > MAX_NAME_LEN:
            raise ValueError(f"name must be at most {MAX_NAME_LEN} characters")
        return v

    @field_validator("contact")
    @classmethod
    def validate_contact(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("contact is required")
        if len(v) > MAX_CONTACT_LEN:
            raise ValueError(f"contact must be at most {MAX_CONTACT_LEN} characters")
        return v

    @field_validator("service")
    @classmethod
    def validate_service(cls, v: str) -> str:
        v = v.strip()
        if len(v) > MAX_SERVICE_LEN:
            raise ValueError(f"service must be at most {MAX_SERVICE_LEN} characters")
        return v

    @field_validator("message")
    @classmethod
    def validate_message(cls, v: str) -> str:
        v = v.strip()
        if len(v) > MAX_MESSAGE_LEN:
            raise ValueError(f"message must be at most {MAX_MESSAGE_LEN} characters")
        return v


BACKUP_DIR = "backups"
if not os.path.exists(BACKUP_DIR):
    os.makedirs(BACKUP_DIR)


def send_to_vk(data: ContactForm):
    if not VK_TOKEN or not VK_PEER_ID:
        print("VK config missing! Skipping VK notification.")
        return True

    text = (
        f"Новая заявка с сайта!\n\n"
        f"Имя: {data.name}\n"
        f"Контакт: {data.contact}\n"
        f"Услуга: {data.service}\n"
        f"О проекте: {data.message}"
    )

    url = "https://api.vk.com/method/messages.send"
    params = {
        "access_token": VK_TOKEN,
        "peer_id": VK_PEER_ID,
        "message": text,
        "random_id": 0,
        "v": "5.131"
    }

    try:
        response = requests.post(url, data=params, timeout=10)
        response.raise_for_status()
        res_json = response.json()
        if "error" in res_json:
            print(f"VK API error: {res_json['error']['error_msg']}")
            return False
        return True
    except Exception as e:
        print(f"Error sending to VK: {e}")
        return False


def send_to_telegram(data: ContactForm):
    if not TG_TOKEN or not TG_CHAT_ID:
        print("Telegram config missing! Skipping TG notification.")
        return True

    # Use HTML parse mode and escape all user-supplied content to prevent injection
    name = html.escape(data.name)
    contact = html.escape(data.contact)
    service = html.escape(data.service)
    message = html.escape(data.message)

    text = (
        f"<b>Новая заявка с сайта!</b>\n\n"
        f"<b>Имя:</b> {name}\n"
        f"<b>Контакт:</b> <code>{contact}</code>\n"
        f"<b>Услуга:</b> {service}\n"
        f"<b>О проекте:</b> {message}"
    )

    url = f"https://api.telegram.org/bot{TG_TOKEN}/sendMessage"
    params = {
        "chat_id": TG_CHAT_ID,
        "text": text,
        "parse_mode": "HTML"
    }

    try:
        response = requests.post(url, data=params, timeout=10)
        response.raise_for_status()
        res_json = response.json()
        if not res_json.get("ok"):
            print(f"Telegram API error: {res_json.get('description')}")
            return False
        return True
    except Exception as e:
        print(f"Error sending to Telegram: {e}")
        return False


def save_backup(data: ContactForm):
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    filename = os.path.join(BACKUP_DIR, f"submission_{timestamp}.json")

    submission_dict = data.model_dump()
    submission_dict["timestamp"] = datetime.now().isoformat()

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(submission_dict, f, ensure_ascii=False, indent=2)

    log_file = os.path.join(BACKUP_DIR, "all_submissions.jsonl")
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(json.dumps(submission_dict, ensure_ascii=False) + "\n")


@app.post("/api/submit")
@limiter.limit("5/minute")
async def handle_submit(request: Request, data: ContactForm):
    try:
        save_backup(data)
    except Exception as e:
        print(f"Failed to save backup: {e}")

    vk_ok = send_to_vk(data)
    tg_ok = send_to_telegram(data)

    if not vk_ok or not tg_ok:
        # Return generic error — don't reveal which services are used
        raise HTTPException(status_code=502, detail="Failed to deliver notification. Please try again later.")

    return {"status": "success", "message": "Form submitted successfully"}


@app.get("/")
async def root():
    return {"message": "OK"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
