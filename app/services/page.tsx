import SectionTitle from "../_components/SectionTitle";
import Button from "../_components/Button";

export default function ServicesPage() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Услуги" subtitle="Что я могу предложить" />

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

          {/* Large card — сайты */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-yellow-400/30 md:col-span-2 md:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl transition-all group-hover:bg-yellow-400/10" />

            <div className="relative z-10 flex h-full flex-col">
              <span className="text-5xl">🌐</span>
              <h3 className="mt-6 text-2xl font-bold text-white">
                Создание сайтов
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                Лендинги, многостраничные сайты, интернет-магазины. Современный
                стек, адаптивный дизайн, SEO-оптимизация — всё под ключ.
              </p>

              <ul className="mt-6 flex flex-col gap-2">
                {[
                  "React / Next.js",
                  "Адаптивная верстка под любые устройства",
                  "SEO-оптимизация",
                  "Высокая скорость загрузки",
                  "Интеграция с CMS при необходимости",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-yellow-400">✓</span> {f}
                  </li>
                ))}
              </ul>

              {/* Mock UI preview */}
              <div className="mt-8 flex-1 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 flex-1 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-600">
                    yoursite.ru
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-2/3 rounded-full bg-white/10" />
                  <div className="h-2 w-full rounded-full bg-white/5" />
                  <div className="h-2 w-4/5 rounded-full bg-white/5" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-7 w-24 rounded-full bg-yellow-400/20" />
                    <div className="h-7 w-20 rounded-full bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button href="https://t.me/" external>
                  Заказать сайт
                </Button>
              </div>
            </div>
          </div>

          {/* Card — Сайт + Бот */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/30">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/5 blur-2xl transition-all group-hover:bg-amber-500/10" />
            <div className="relative z-10">
              <span className="text-4xl">🔗</span>
              <h3 className="mt-4 text-lg font-bold text-white">Сайт + Бот</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Комплексное решение: сайт с Telegram или VK ботом для
                автоматизации заявок и уведомлений.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {["Сайт под ключ", "Telegram / VK бот", "Автообработка заявок", "Уведомления"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="text-yellow-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button href="https://t.me/" external className="text-xs px-4 py-2">
                  Заказать
                </Button>
              </div>
            </div>
          </div>

          {/* Card — Бот */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-yellow-400/30">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-yellow-400/5 blur-2xl transition-all group-hover:bg-yellow-400/10" />
            <div className="relative z-10">
              <span className="text-4xl">🤖</span>
              <h3 className="mt-4 text-lg font-bold text-white">Бот отдельно</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Telegram или VK бот как самостоятельный продукт — для заказов,
                FAQ, рассылок или записи.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {["Интерактивные меню", "Интеграция с API", "Аналитика", "Поддержка"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="text-yellow-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Button href="https://t.me/" external className="text-xs px-4 py-2">
                  Заказать
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
