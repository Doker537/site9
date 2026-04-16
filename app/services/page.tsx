"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../_components/SectionTitle";

const services = [
  {
    id: "complex",
    icon: "🚀",
    title: "Сайт + Бот",
    tagline: "Комплексное решение — максимум конверсии",
    description:
      "Полная digital-экосистема для вашего бизнеса. Сайт привлекает трафик, боты конвертируют и обрабатывают заявки — автоматически, без вашего участия. Идеально для продаж, услуг и автоматизации.",
    features: [
      "Сайт под ключ (React / Next.js)",
      "Telegram-бот для обработки заявок",
      "VK-бот по желанию",
      "Полная воронка продаж",
      "CRM-интеграция",
      "Единая аналитика",
      "Сопровождение 3 месяца",
    ],
    price: "от 45 000 ₽",
    time: "14–21 день",
    color: "#facc15",
    popular: true,
    span: "large",
  },
  {
    id: "website",
    icon: "🌐",
    title: "Создание сайтов",
    tagline: "Лендинги, многостраничные, магазины",
    description:
      "Современные сайты на React / Next.js с адаптивным дизайном и SEO-оптимизацией.",
    features: [
      "Лендинги и многостраничные сайты",
      "Интернет-магазины",
      "Адаптивный mobile-first дизайн",
      "SEO-оптимизация",
      "Высокая скорость загрузки",
    ],
    price: "от 25 000 ₽",
    time: "7–14 дней",
    color: "#60a5fa",
  },
  {
    id: "telegram",
    icon: "✈️",
    title: "Telegram-боты",
    tagline: "Автоматизация продаж 24/7",
    description:
      "Боты любой сложности: от FAQ до CRM с платёжными интеграциями.",
    features: [
      "Боты для продаж и воронок",
      "Запись и бронирование",
      "Приём платежей внутри бота",
      "Рассылки и уведомления",
    ],
    price: "от 15 000 ₽",
    time: "5–10 дней",
    color: "#229ED9",
  },
  {
    id: "vk",
    icon: "💬",
    title: "VK-боты",
    tagline: "Продажи и поддержка в ВКонтакте",
    description:
      "Чат-боты, рассылки, автоворонки и интеграция с VK Shop.",
    features: [
      "Боты для бизнес-сообществ",
      "Автоворонки продаж",
      "Рассылки по базе подписчиков",
      "Аналитика и отчёты",
    ],
    price: "от 12 000 ₽",
    time: "5–10 дней",
    color: "#4680C2",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Услуги" subtitle="Полный цикл разработки — от дизайна до запуска и поддержки" />

        {/* Bento layout: large card top-left, 3 small on the right / below */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Large card — Сайт + Бот */}
          {(() => {
            const svc = services[0];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="service-card-accent group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:col-span-2 md:row-span-2"
                style={{ "--sc-color": svc.color } as React.CSSProperties}
                onMouseEnter={() => setActive(svc.id)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Popular badge */}
                <div className="absolute right-6 top-6 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 px-3 py-1 text-[0.65rem] font-black uppercase tracking-wide text-black">
                  Популярно
                </div>

                <span className="text-5xl leading-none">{svc.icon}</span>
                <h3 className="mt-6 text-2xl font-bold text-white">{svc.title}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-500">{svc.tagline}</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">{svc.description}</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ color: svc.color }} className="shrink-0">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Mock code preview */}
                <div className="mt-8 flex-1 rounded-2xl border border-white/8 bg-black/30 p-5 font-mono text-[0.78rem] leading-relaxed backdrop-blur-sm">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">solution</span> = <span className="text-zinc-500">&#123;</span></p>
                  <p className="pl-4">site: <span className="text-green-400">&quot;Next.js + адаптив + SEO&quot;</span>,</p>
                  <p className="pl-4">bot: <span className="text-green-400">&quot;Telegram / VK заявки&quot;</span>,</p>
                  <p className="pl-4">result: <span className="text-yellow-400">&quot;sales++&quot;</span>,</p>
                  <p><span className="text-zinc-500">&#125;</span></p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                  <div>
                    <span className="text-lg font-bold" style={{ color: svc.color }}>{svc.price}</span>
                    <span className="ml-3 text-xs text-zinc-600">⏱ {svc.time}</span>
                  </div>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{ background: svc.color }}
                  >
                    Заказать
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })()}

          {/* Small cards */}
          {services.slice(1).map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="service-card-accent group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              style={{ "--sc-color": svc.color } as React.CSSProperties}
              onMouseEnter={() => setActive(svc.id)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="text-4xl leading-none">{svc.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{svc.title}</h3>
              <p className="mt-1 text-xs font-medium text-zinc-500">{svc.tagline}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{svc.description}</p>

              <ul className="mt-4 flex flex-1 flex-col gap-1.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" style={{ color: svc.color }} className="shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                <div>
                  <span className="text-sm font-bold" style={{ color: svc.color }}>{svc.price}</span>
                  <div className="text-xs text-zinc-600">⏱ {svc.time}</div>
                </div>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ background: svc.color }}
                >
                  Заказать
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
