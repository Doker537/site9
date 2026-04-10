export type ProjectCategory = "sites" | "site-bot" | "bots";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "7",
    title: "Сайт для барбершопа",
    description:
      "Стильный лендинг для барбершопа с прайс-листом, галереей работ и онлайн-записью.",
    image:
      "/examples/barbershop5/slpbi9k2xy0mPA_p3RbiL4n00anSIHAO48wsXKMp5P7EiUh53eyFMWNi0qRokX_aPsUJD16-ghyTei1usV84B4LH.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "sites",
    link: "/examples/barbershop5/index.html",
  },
  {
    id: "8",
    title: "Свадебное приглашение",
    description:
      "Элегантная онлайн-страница свадебного приглашения с деталями торжества и формой подтверждения присутствия.",
    image:
      "/examples/wedding/wrYIEu4QQi477yPZVBlZ9UfsOp5y8V2OusrO-aOOo41VXabHmI7TqRShaQxESl_WzCSeFcWiySFFpi0TqWEBORDA.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "sites",
    link: "/examples/wedding/index.html",
  },
  {
    id: "9",
    title: "Свадебное приглашение v2",
    description:
      "Альтернативный дизайн свадебного приглашения — другая стилистика, анимации и структура подачи информации.",
    image:
      "/examples/wedding9/gJfODKeiX2XRrWC7AO-DzO3P4SJcsS0bCkk0Qy18zITp9G4d27oW04MUerf6zcugFZqatGUXK90e6DxyzY8PIv2P.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "sites",
    link: "/examples/wedding9/index.html",
  },
  {
    id: "1",
    title: "Интернет-магазин TechStore",
    description:
      "Полнофункциональный интернет-магазин электроники с каталогом, корзиной и онлайн-оплатой.",
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    category: "sites",
    link: "#",
  },
  {
    id: "2",
    title: "Лендинг для фитнес-студии",
    description:
      "Современный одностраничник с анимациями, расписанием занятий и формой записи.",
    image: "/projects/placeholder.svg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    category: "sites",
    link: "#",
  },
  {
    id: "3",
    title: "Сайт + Telegram-бот для доставки еды",
    description:
      "Сайт-каталог с меню и Telegram-бот для оформления заказов, отслеживания статуса и уведомлений.",
    image: "/projects/placeholder.svg",
    tags: ["Next.js", "Node.js", "Telegram Bot API", "MongoDB"],
    category: "site-bot",
    link: "#",
  },
  {
    id: "4",
    title: "Корпоративный сайт + VK бот",
    description:
      "Корпоративный сайт с интегрированным VK-ботом для автоматической обработки заявок клиентов.",
    image: "/projects/placeholder.svg",
    tags: ["React", "VK Bot API", "Express", "PostgreSQL"],
    category: "site-bot",
    link: "#",
  },
  {
    id: "5",
    title: "Telegram-бот для записи на услуги",
    description:
      "Бот с интерактивным календарём, напоминаниями и интеграцией с Google Calendar.",
    image: "/projects/placeholder.svg",
    tags: ["Node.js", "Telegram Bot API", "Google Calendar API"],
    category: "bots",
    link: "#",
  },
  {
    id: "6",
    title: "VK-бот для информирования",
    description:
      "Автоматизированный бот для рассылки новостей, ответов на FAQ и сбора обратной связи.",
    image: "/projects/placeholder.svg",
    tags: ["Node.js", "VK Bot API", "Redis"],
    category: "bots",
    link: "#",
  },
];

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "Все",
  sites: "Сайты",
  "site-bot": "Сайт + Бот",
  bots: "Боты",
};
