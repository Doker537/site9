"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ContactForm = { name: string; contact: string; service: string; message: string };
const serviceOptions = ["Сайт", "Telegram-бот", "VK-бот", "Комплексное решение", "Не определился"];

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: "", contact: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSent(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или напишите нам в Telegram / VK напрямую.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Обсудим ваш проект</h2>
          <p className="mt-3 text-zinc-400">Оставьте заявку — ответим в течение 2 часов</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">

          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="pointer-events-none absolute -left-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-[80px]" />

            <p className="text-lg leading-relaxed text-zinc-400">
              Расскажите о задаче — подберём решение и пришлём предложение
              в течение 2&nbsp;часов. Без предоплаты, с договором.
            </p>

            {/* Channels */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Или напишите напрямую
              </p>
              {[
                { icon: "✈️", name: "Telegram", handle: "@charex", href: "https://t.me/", accent: "#229ED9" },
                { icon: "💬", name: "ВКонтакте", handle: "vk.com/charex", href: "https://vk.com/", accent: "#4680C2" },
              ].map((ch) => (
                <a
                  key={ch.name}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: ch.accent + "20", border: `1px solid ${ch.accent}30` }}>
                    {ch.icon}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{ch.name}</div>
                    <div className="text-xs text-zinc-500">{ch.handle}</div>
                  </div>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                    className="ml-auto text-zinc-600 transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Promises */}
            <div className="flex flex-col gap-3">
              {[
                "Ответим в течение 2 часов",
                "Бесплатная консультация",
                "Без предоплаты · Договор на каждый проект",
              ].map((p) => (
                <div key={p} className="flex items-center gap-2.5 text-sm text-zinc-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="shrink-0">
                    <path d="M5 13l4 4L19 7" stroke="#6dffb3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-400/10 blur-[60px]" />

            {sent ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <span className="text-5xl">🎉</span>
                <h3 className="text-xl font-bold text-white">Заявка отправлена!</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Свяжемся с вами в течение 2 часов. Ждите сообщения!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Ваше имя *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-yellow-400/50 focus:bg-yellow-400/5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Telegram или телефон *</label>
                  <input
                    name="contact"
                    type="text"
                    placeholder="@username или +7 900 000-00-00"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-yellow-400/50 focus:bg-yellow-400/5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Что нужно?</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="rounded-xl border border-white/10 bg-[#0e0e16] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-yellow-400/50 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                      paddingRight: "36px",
                    }}
                  >
                    <option value="">Выберите услугу</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">О проекте</label>
                  <textarea
                    name="message"
                    placeholder="Расскажите о задаче, бюджете или задайте вопрос..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-yellow-400/50 focus:bg-yellow-400/5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-6 py-4 text-sm font-bold text-black transition-all duration-200 hover:bg-yellow-300 hover:shadow-[0_0_24px_rgba(250,204,21,0.35)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                        className="transition-transform duration-200 group-hover:translate-x-0.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-zinc-600">
                  Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
