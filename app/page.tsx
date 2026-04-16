"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Button from "./_components/Button";
import SectionTitle from "./_components/SectionTitle";

/* ─── Lazy-loaded below-the-fold sections ───────────────── */
const PortfolioSection = dynamic(() => import("./_components/PortfolioSection"), {
  loading: () => <div className="py-20" />,
});
const ContactSection = dynamic(() => import("./_components/ContactSection"), {
  loading: () => <div className="py-20" />,
});

/* ─── Hero stats ─────────────────────────────────────── */
const heroStats = [
  { value: "30+", label: "проектов сдано" },
  { value: "3 года", label: "на рынке" },
  { value: "98%", label: "клиентов довольны" },
];

/* ─── Services data ──────────────────────────────────── */
const services = [
  {
    id: "complex",
    icon: "🚀",
    title: "Сайт + Бот",
    tagline: "Сайт + Telegram или VK бот = максимум конверсии",
    description:
      "Полная digital-экосистема: сайт привлекает трафик, бот конвертирует и обрабатывает заявки — автоматически, без вашего участия.",
    features: [
      "Сайт + Telegram-бот",
      "Сайт + VK-бот",
      "Полная воронка продаж",
      "Автообработка заявок 24/7",
      "Единая аналитика",
      "Сопровождение 3 месяца",
    ],
    price: "от 7 500 ₽",
    time: "14–21 день",
    color: "#facc15",
    popular: true,
  },
  {
    id: "website",
    icon: "🌐",
    title: "Создание сайтов",
    tagline: "Лендинги, корпоративные сайты, магазины",
    description:
      "Современные сайты на React / Next.js — загружаются за секунду и конвертируют посетителей в клиентов.",
    features: [
      "Лендинги и многостраничные сайты",
      "Интернет-магазины",
      "Адаптивный mobile-first дизайн",
      "SEO-оптимизация",
      "Высокая скорость загрузки",
      "Интеграция с CMS при необходимости",
    ],
    price: "от 5 000 ₽",
    time: "7–14 дней",
    color: "#60a5fa",
  },
  {
    id: "telegram",
    icon: "✈️",
    title: "Telegram-боты",
    tagline: "Автоматизация продаж и поддержки 24/7",
    description:
      "Боты любой сложности: от FAQ до CRM-систем с платёжными интеграциями и аналитикой.",
    features: [
      "Боты для продаж и воронок",
      "Техническая поддержка 24/7",
      "Запись и бронирование",
      "Приём платежей внутри бота",
      "Рассылки и уведомления",
      "Интеграция с базами данных",
    ],
    price: "от 2 500 ₽",
    time: "5–10 дней",
    color: "#229ED9",
  },
  {
    id: "vk",
    icon: "💬",
    title: "VK-боты",
    tagline: "Продажи и поддержка в ВКонтакте",
    description:
      "Чат-боты для VK-сообществ, рассылки, автоворонки и интеграция с магазином ВКонтакте.",
    features: [
      "Боты для бизнес-сообществ",
      "Автоворонки продаж",
      "Рассылки по базе подписчиков",
      "Интеграция с VK Shop",
      "Конкурсы и активации",
      "Аналитика и отчёты",
    ],
    price: "от 2 500 ₽",
    time: "5–10 дней",
    color: "#4680C2",
  },
];

/* ─── Advantages data ────────────────────────────────── */
const advantages = [
  {
    icon: "⚡",
    title: "Современный стек",
    desc: "React, Next.js, TypeScript — быстрые и масштабируемые решения.",
    tags: ["React", "Next.js", "TS"],
  },
  {
    icon: "📱",
    title: "Адаптивность",
    desc: "Идеальное отображение на любом устройстве без компромиссов.",
  },
  {
    icon: "🛠️",
    title: "Поддержка после сдачи",
    desc: "Технические правки, новый функционал и консультации.",
  },
  {
    icon: "🚀",
    title: "Скорость запуска",
    desc: "Средний срок — 7–21 день от брифа до работающего продукта.",
  },
  {
    icon: "🎯",
    title: "Под задачу бизнеса",
    desc: "Разрабатываю под вашу нишу, а не по шаблону.",
  },
  {
    icon: "📊",
    title: "Прозрачность",
    desc: "Вы всегда знаете, на каком этапе ваш проект.",
  },
];

export default function Home() {
  return (
    <>
      {/* ════ HERO ════ */}
      <section id="hero" className="relative flex min-h-screen items-center px-6">
        <div className="hero-grid absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#6dffb3] animate-pulse-green" />
              <span className="text-sm font-medium text-yellow-300">
                Принимаем новые проекты
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Создаём сайты и ботов,{" "}
              <span className="bg-linear-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                которые продают
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-lg text-xl leading-relaxed text-zinc-300"
            >
              Разрабатываем современные сайты, Telegram и VK боты для автоматизации
              продаж. Комплексный подход — от идеи до работающего продукта за 7–21 день.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <div className="relative inline-block">
                <Button href="https://t.me/" external arrow>
                  Получить предложение
                </Button>
                <motion.div
                  className="pointer-events-none absolute -right-4 -top-5"
                  initial={{ opacity: 0, scale: 0.6, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.5, type: "spring", bounce: 0.55 }}
                >
                  <span
                    className="animate-wiggle inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-black text-black shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
                    style={{ animationDelay: "2.8s" }}
                  >
                    🔥 Скидка 10% до 19.04
                  </span>
                </motion.div>
              </div>
              <Button href="#portfolio" variant="outline">
                Смотреть работы
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex gap-8 border-t border-white/10 pt-8"
            >
              {heroStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-yellow-400">{s.value}</span>
                  <span className="text-sm text-zinc-500">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating code cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{ height: 420 }}
          >
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/8 blur-[80px]" />

            <div className="animate-float-1 absolute left-0 right-14 top-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="font-mono text-[0.8rem] leading-[1.85]">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">buildProject</span> = <span className="text-purple-400">async</span> () =&gt; &#123;</p>
                <p className="pl-4"><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> <span className="text-blue-400">develop</span>(&#123;</p>
                <p className="pl-8">design: <span className="text-green-400">&quot;modern&quot;</span>,</p>
                <p className="pl-8">speed: <span className="text-green-400">&quot;fast&quot;</span>,</p>
                <p className="pl-8">result: <span className="text-green-400">&quot;sales++&quot;</span>,</p>
                <p className="pl-4">&#125;)</p>
                <p className="pl-4"><span className="text-purple-400">return</span> result.success <span className="text-zinc-600">{'// true ✓'}</span></p>
                <p>&#125;</p>
              </div>
            </div>

            <div className="animate-float-2 absolute bottom-14 right-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <div className="text-lg font-black text-yellow-400">+340%</div>
                  <div className="text-xs text-zinc-500">рост заявок</div>
                </div>
              </div>
            </div>

            <div className="animate-float-3 absolute bottom-0 left-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur-xl">
              <div className="flex items-center gap-2.5 whitespace-nowrap text-sm text-zinc-300">
                <span className="text-lg">🤖</span>
                Бот обработал 1&nbsp;200 заявок за день
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Услуги"
            subtitle="Полный цикл разработки — от дизайна до запуска и поддержки"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="service-card-accent group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20"
                style={{ "--sc-color": svc.color } as React.CSSProperties}
              >
                {svc.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 px-3 py-1 text-[0.65rem] font-black uppercase tracking-wide text-black">
                    Популярно
                  </div>
                )}

                <span className="text-4xl leading-none">{svc.icon}</span>
                <h3 className="mt-5 text-lg font-bold text-white">{svc.title}</h3>
                <p className="mt-1 text-xs font-medium text-zinc-500">{svc.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{svc.description}</p>

                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" className="mt-0.5 shrink-0" style={{ color: svc.color }}>
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold" style={{ color: svc.color }}>{svc.price}</span>
                    <span className="text-xs text-zinc-600">⏱ {svc.time}</span>
                  </div>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-black transition-all duration-200 hover:brightness-110"
                    style={{ background: svc.color }}
                  >
                    Заказать
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ ADVANTAGES ════ */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle title="Почему ChareX" subtitle="То, что отличает мой подход" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Chat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20 sm:col-span-2 lg:col-span-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 via-transparent to-transparent" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-yellow-400/5 blur-3xl transition-all group-hover:bg-yellow-400/10" />
              <div className="relative mb-5 flex flex-col gap-2">
                {[
                  { from: "C", text: "Нужен сайт + бот для обработки заявок", time: "10:34", yellow: true },
                  { from: "X", text: "Отлично! Расскажите подробнее о задаче — подберём оптимальное решение.", time: "10:35", yellow: false },
                  { from: "C", text: "Хочу всё под ключ, без лишних задержек", time: "10:36", yellow: true },
                ].map((msg, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${msg.yellow ? "bg-yellow-400/20 text-yellow-300" : "bg-white/10 text-white"}`}>
                      {msg.from}
                    </div>
                    <div className={`rounded-2xl rounded-tl-sm px-3.5 py-2.5 ${msg.yellow ? "bg-white/8" : "border border-yellow-400/20 bg-yellow-400/8"}`}>
                      <p className="text-xs text-zinc-300">{msg.text}</p>
                      <p className="mt-0.5 text-[10px] text-zinc-600">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white">Все задачи в срок</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  Вы всегда знаете, на каком этапе ваш проект — без задержек и сюрпризов.
                </p>
              </div>
            </motion.div>

            {/* 30+ stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20 flex flex-col items-center justify-center text-center"
            >
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/8 blur-3xl group-hover:bg-yellow-400/15 transition-all" />
              <span className="relative text-5xl font-black text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">30+</span>
              <p className="relative mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">проектов</p>
              <p className="relative mt-1 text-sm text-zinc-400">Сайты и боты для бизнеса разного масштаба</p>
            </motion.div>

            {/* Small advantage tiles */}
            {advantages.slice(0, 3).map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20"
              >
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-yellow-400/5 to-transparent" />
                <h3 className="relative text-base font-bold text-white">
                  {adv.icon} {adv.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{adv.desc}</p>
                {adv.tags && (
                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {adv.tags.map((t) => (
                      <span key={t} className="rounded-full border border-yellow-400/20 bg-yellow-400/8 px-2.5 py-1 text-xs text-yellow-300">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PORTFOLIO ════ */}
      <PortfolioSection />

      {/* ════ CONTACT ════ */}
      <ContactSection />
    </>
  );
}
