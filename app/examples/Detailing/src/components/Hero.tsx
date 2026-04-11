import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="w-[800px] h-[800px] rounded-full border border-[#00f0ff]/20 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[#00f0ff]/30 animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-widest text-[#00f0ff]">Премиальный уход</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Искусство <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white glow-text">
            Детейлинга
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light"
        >
          Безупречный блеск, защита и внимание к каждой детали. 
          Мы возвращаем вашему автомобилю первозданный вид.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="#booking"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest bg-white text-black overflow-hidden rounded-full transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00f0ff] to-[#0080ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative group-hover:text-white transition-colors duration-300">Записаться сейчас</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
