import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
              Искусство <br />
              <span className="text-gold-accent italic font-light">правовой защиты</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold-accent mb-8" />
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                В мире сложных юридических коллизий успех зависит от деталей, которые незаметны на первый взгляд. Моя задача — увидеть эти детали и обратить их в вашу пользу.
              </p>
              <p>
                Более 15 лет я представляю интересы доверителей в самых запутанных и резонансных делах. Мой подход основан на глубоком анализе, нестандартном мышлении и абсолютной преданности интересам клиента.
              </p>
              <p>
                Я не просто решаю юридические проблемы. Я создаю правовую безопасность для вашего бизнеса и личной жизни.
              </p>
            </div>
            
            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-3xl font-serif text-white mb-1">15+</div>
                <div className="text-xs uppercase tracking-widest text-gold-accent">Лет практики</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-white mb-1">98%</div>
                <div className="text-xs uppercase tracking-widest text-gold-accent">Успешных дел</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-white mb-1">24/7</div>
                <div className="text-xs uppercase tracking-widest text-gold-accent">Поддержка</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl glass-panel p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 to-transparent opacity-50" />
              
              <blockquote className="relative z-10">
                <span className="text-6xl font-serif text-gold-accent/30 absolute -top-8 -left-4">"</span>
                <p className="text-2xl md:text-3xl font-serif text-white leading-snug italic mb-8 relative z-10">
                  Закон суров, но его применение требует ювелирной точности и стратегического расчета.
                </p>
                <footer className="text-gray-400 font-light tracking-wide">
                  — Ваш Адвокат
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
