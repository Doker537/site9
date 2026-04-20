import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-50 [will-change:transform]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg-main/70 via-bg-main/90 to-bg-main"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Принимаем заявки — работаем без выходных
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Ремонт авто <br />
              <span className="text-brand-primary">профессионально</span>
              <span className="text-white/40"> с гарантией</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Профессиональный автосервис в Москве. Бесплатная диагностика при ремонте. Честные цены, квалифицированные мастера и гарантия до 1 года.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <NavLink to="/contacts" className="btn-primary text-lg px-10">
                Записаться бесплатно
                <ArrowRight className="w-5 h-5" />
              </NavLink>
              <a href="tel:+79991234567" className="btn-outline text-lg px-10">
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
              {[
                'Гарантия до 1 года',
                'Запчасти в наличии',
                'Опытные мастера',
                'Срочный ремонт',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
