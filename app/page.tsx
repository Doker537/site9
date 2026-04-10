"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./_components/Button";
import SectionTitle from "./_components/SectionTitle";
import ProjectCard from "./_components/ProjectCard";
import { projects } from "./_data/projects";

const stats = [
  {
    value: "30+",
    label: "Проектов сдано",
    description: "Сайты, боты, веб-приложения для бизнеса разного масштаба.",
  },
  {
    value: "3 в 1",
    label: "Всё в одном месте",
    description: "Дизайн, разработка, запуск и поддержка — берусь за весь цикл.",
  },
  {
    value: "2+ года",
    label: "Опыт разработки",
    description: "Знаю все актуальные инструменты и best practices этого рынка.",
  },
];

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-sm font-medium text-yellow-300">
                Открыт к новым проектам
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl"
            >
              Разработка{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  сайтов и ботов
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-yellow-400/0 via-yellow-400/60 to-yellow-400/0" />
              </span>
              <br />
              под ключ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400"
            >
              Воплощаю ваши задачи в работающие цифровые решения — быстро,
              современно, надёжно.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="https://t.me/" external>
                Оставить заявку
              </Button>
              <Button href="/portfolio" variant="outline">
                Посмотреть работы
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md"
                >
                  <p className="text-xl font-bold text-yellow-400">{stat.value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-white">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Iceberg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow behind iceberg */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/8 blur-[80px]" />

            <div className="relative w-full max-w-sm">
              {/* Water line */}
              <div className="absolute left-0 right-0 top-[38%] h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
              <div className="absolute -left-4 right-0 top-[38%] text-[10px] font-medium uppercase tracking-widest text-yellow-400/60">
                ~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~&nbsp;~
              </div>

              {/* Tip — what client sees */}
              <div className="relative mb-1 flex flex-col items-center">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-zinc-500">Что видит клиент</p>

                {/* Iceberg tip shape */}
                <div className="relative flex h-28 w-40 items-center justify-center overflow-hidden rounded-t-[2rem] border border-b-0 border-yellow-400/20 bg-gradient-to-b from-yellow-400/15 to-yellow-400/5 backdrop-blur-sm">
                  <div className="absolute -top-6 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-2xl" />
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="text-xl">🌐</span>
                    <span className="text-xs font-semibold text-white">Красивый сайт</span>
                    <span className="text-[10px] text-zinc-400">Работает быстро</span>
                  </div>
                </div>
              </div>

              {/* Underwater — real work */}
              <div className="relative">
                <p className="mb-3 mt-2 text-center text-[10px] font-medium uppercase tracking-widest text-zinc-500">Что стоит за этим</p>

                <div className="flex flex-col gap-2">
                  {[
                    { icon: "📐", label: "Проектирование архитектуры" },
                    { icon: "🎨", label: "UI/UX дизайн и прототипы" },
                    { icon: "⚙️", label: "Фронтенд-разработка (React/Next.js)" },
                    { icon: "🔌", label: "Интеграция API и баз данных" },
                    { icon: "🤖", label: "Разработка ботов (Telegram/VK)" },
                    { icon: "🧪", label: "Тестирование и отладка" },
                    { icon: "🚀", label: "Деплой и настройка сервера" },
                    { icon: "🛡️", label: "SEO, безопасность, оптимизация" },
                    { icon: "🔧", label: "Поддержка и обновления" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                      className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-2.5 backdrop-blur-sm"
                      style={{ opacity: 1 - i * 0.06 }}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs text-zinc-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Advantages — bento grid */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Почему я" subtitle="То, что отличает мой подход" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Row 1 — large card: Современный стек */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20 md:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-yellow-400/5 blur-3xl transition-all group-hover:bg-yellow-400/10" />

              {/* Mock chat UI */}
              <div className="relative mb-6 flex flex-col gap-2">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-xs font-bold text-yellow-300">C</div>
                  <div className="rounded-2xl rounded-tl-sm bg-white/8 px-3.5 py-2.5 backdrop-blur-sm">
                    <p className="text-xs text-zinc-300">Нужен новый сайт для бизнеса</p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">10:34</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">X</div>
                  <div className="rounded-2xl rounded-tl-sm border border-yellow-400/20 bg-yellow-400/8 px-3.5 py-2.5 backdrop-blur-sm">
                    <p className="text-xs text-zinc-200">Отлично! Расскажите подробнее о задаче...</p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">10:35</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-xs font-bold text-yellow-300">C</div>
                  <div className="rounded-2xl rounded-tl-sm bg-white/8 px-3.5 py-2.5 backdrop-blur-sm">
                    <p className="text-xs text-zinc-300">Без лишних задержек и правок...</p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">10:36</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <h3 className="text-xl font-bold text-white">Все задачи в срок</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  Вы всегда знаете, на каком этапе ваш проект — без задержек и сюрпризов.
                </p>
              </div>
            </motion.div>

            {/* Row 1 — stat card: 30+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/8 blur-3xl transition-all group-hover:bg-yellow-400/15" />

              {/* Chip decoration */}
              <div className="relative mb-4 flex items-center justify-center">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-yellow-400/20 bg-black/40 backdrop-blur-sm">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-yellow-400/10 to-transparent" />
                  {/* circuit lines */}
                  <div className="absolute left-0 top-1/3 h-px w-4 bg-yellow-400/30" />
                  <div className="absolute right-0 top-1/3 h-px w-4 bg-yellow-400/30" />
                  <div className="absolute left-0 top-2/3 h-px w-4 bg-yellow-400/20" />
                  <div className="absolute right-0 top-2/3 h-px w-4 bg-yellow-400/20" />
                  <div className="absolute bottom-0 left-1/3 h-4 w-px bg-yellow-400/30" />
                  <div className="absolute bottom-0 left-2/3 h-4 w-px bg-yellow-400/20" />
                  <div className="absolute left-1/3 top-0 h-4 w-px bg-yellow-400/30" />
                  <span className="relative text-3xl font-black text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
                    30+
                  </span>
                </div>
              </div>

              <div className="relative text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">Проектов</p>
                <h3 className="mt-1 text-base font-bold text-white">Реальный опыт</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Сайты и боты для бизнеса разного масштаба.
                </p>
              </div>
            </motion.div>

            {/* Row 2 — card: Современный стек */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20"
            >
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400/5 to-transparent" />
              <h3 className="relative text-base font-bold text-white">
                ⚡ Современный стек
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                React, Next.js, TypeScript — быстрые и масштабируемые решения.
              </p>
              {/* Mini tech badges */}
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {["React", "Next.js", "TS"].map((t) => (
                  <span key={t} className="rounded-full border border-yellow-400/20 bg-yellow-400/8 px-2.5 py-1 text-xs text-yellow-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative mt-4 flex gap-1.5">
                <div className="h-16 flex-1 rounded-xl bg-black/40 flex items-center justify-center text-2xl">⚛️</div>
                <div className="h-16 flex-1 rounded-xl bg-black/40 flex items-center justify-center text-2xl">🔷</div>
                <div className="h-16 flex-1 rounded-xl bg-black/40 flex items-center justify-center text-2xl">▲</div>
              </div>
            </motion.div>

            {/* Row 2 — card: Адаптивность */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20"
            >
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-400/5 to-transparent" />
              <h3 className="relative text-base font-bold text-white">
                📱 Адаптивность
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                Идеальное отображение на любом устройстве.
              </p>
              {/* Device mockups */}
              <div className="relative mt-4 flex items-end justify-center gap-3">
                <div className="h-20 w-12 rounded-xl border border-white/10 bg-black/50 flex items-center justify-center">
                  <div className="h-14 w-8 rounded-lg bg-white/5 flex flex-col gap-1 p-1.5">
                    <div className="h-1.5 w-full rounded-full bg-yellow-400/30" />
                    <div className="h-1 w-4/5 rounded-full bg-white/10" />
                    <div className="h-1 w-3/5 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="h-24 w-16 rounded-xl border border-yellow-400/20 bg-black/50 flex items-center justify-center">
                  <div className="h-18 w-12 rounded-lg bg-white/5 flex flex-col gap-1 p-2">
                    <div className="h-1.5 w-full rounded-full bg-yellow-400/40" />
                    <div className="h-1 w-4/5 rounded-full bg-white/15" />
                    <div className="h-1 w-3/5 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Row 2 — card: Поддержка */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/20"
            >
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400/5 to-transparent" />
              <h3 className="relative text-base font-bold text-white">
                🛠️ Поддержка
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                Помогу с обновлениями и доработками после запуска.
              </p>
              <div className="relative mt-4 space-y-2">
                {["Технические правки", "Новый функционал", "Консультации"].map((item, i) => (
                  <div key={item} className="flex items-center gap-2.5 rounded-xl bg-black/30 px-3 py-2">
                    <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-green-400" : i === 1 ? "bg-yellow-400" : "bg-zinc-600"}`} />
                    <span className="text-xs text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            title="Избранные работы"
            subtitle="Некоторые из моих последних проектов"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-yellow-400 transition-colors hover:text-yellow-300"
            >
              Все работы &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
