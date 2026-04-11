import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass-panel border-b-0 border-white/5"
    >
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-[#00f0ff]" />
        <span className="font-display font-bold text-xl tracking-widest uppercase">
          Lumina<span className="text-[#00f0ff]">Detail</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-white/70">
        <a href="#services" className="hover:text-[#00f0ff] transition-colors">Услуги</a>
        <a href="#booking" className="hover:text-[#00f0ff] transition-colors">Запись</a>
        <a href="#contacts" className="hover:text-[#00f0ff] transition-colors">Контакты</a>
      </div>

      <a 
        href="#booking"
        className="hidden md:flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest border border-[#00f0ff]/30 rounded-full hover:bg-[#00f0ff]/10 transition-all glow-border"
      >
        Оставить заявку
      </a>
    </motion.nav>
  );
}
