import { motion } from "motion/react";
import { Shield, Sparkles, Droplets, Wind } from "lucide-react";

const services = [
  {
    icon: <Shield className="w-8 h-8 text-[#00f0ff]" />,
    title: "Керамика",
    description: "Надежная защита кузова от царапин, реагентов и выгорания с гидрофобным эффектом до 3 лет.",
    price: "от 25 000 ₽"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#00f0ff]" />,
    title: "Полировка",
    description: "Многоэтапное восстановление ЛКП, удаление голограмм и возвращение глубокого блеска.",
    price: "от 15 000 ₽"
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#00f0ff]" />,
    title: "Химчистка",
    description: "Глубокая очистка салона с использованием премиальной гипоаллергенной химии.",
    price: "от 10 000 ₽"
  },
  {
    icon: <Wind className="w-8 h-8 text-[#00f0ff]" />,
    title: "Оклейка пленкой",
    description: "Бронирование кузова полиуретановой пленкой для максимальной защиты от сколов.",
    price: "от 40 000 ₽"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          Наши <span className="text-[#00f0ff]">Услуги</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto"
        >
          Мы используем только сертифицированные материалы и передовые технологии для достижения идеального результата.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl glass-panel overflow-hidden hover:border-[#00f0ff]/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-flex w-fit border border-white/10 group-hover:border-[#00f0ff]/30 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="text-sm font-medium text-white/40 uppercase tracking-wider">Стоимость</span>
                <span className="font-display font-bold text-xl text-[#00f0ff]">{service.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
