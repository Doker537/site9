import { PORTFOLIO } from '../constants';
import { motion } from 'motion/react';

export function Portfolio() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-bold text-brand-primary uppercase tracking-widest"
          >
            Результаты
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Наши работы
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Демонстрация мастерства и реальные результаты нашего труда.
          </motion.p>
        </div>

        <div className="grid gap-16 lg:gap-24">
          {PORTFOLIO.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className="space-y-8 [direction:ltr]">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
                  {work.category}
                </div>
                <h2 className="text-4xl font-display font-bold">{work.title}</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {work.description}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-3">
                    <span className="text-xs text-gray-500 uppercase font-bold">Проблема</span>
                    <p className="text-sm font-medium text-gray-300">Износ критических узлов, потеря мощности и посторонние звуки.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs text-gray-500 uppercase font-bold">Результат</span>
                    <p className="text-sm font-medium text-gray-300">Полное восстановление характеристик до заводских значений.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 [direction:ltr]">
                <div className="space-y-2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden grayscale opacity-50">
                    <img src={work.beforeImageUrl} alt={`${work.title} — до`} loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-center text-[10px] uppercase tracking-widest font-bold text-gray-600">До</p>
                </div>
                <div className="space-y-2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-brand-primary">
                    <img src={work.afterImageUrl} alt={`${work.title} — после`} loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-center text-[10px] uppercase tracking-widest font-bold text-brand-primary">После</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
