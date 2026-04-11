import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 p-4 rounded-full bg-dark-surface border border-gold-accent/20 glow-box">
            <Scale className="w-8 h-8 text-gold-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
            Защита ваших интересов <br />
            <span className="text-gold-accent italic font-light glow-text">на высшем уровне</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Безупречная репутация. Строгая конфиденциальность. <br className="hidden md:block" />
            Индивидуальный подход к каждому делу.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gold-accent text-dark-bg font-medium rounded-full text-lg tracking-wide hover:bg-gold-400 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Записаться на консультацию
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Вниз</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
}
