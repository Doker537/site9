import { motion } from 'motion/react';
import { Shield, Briefcase, Users, FileText, Landmark, Lock } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Уголовное право',
    description: 'Защита на всех стадиях уголовного процесса. Представление интересов потерпевших и свидетелей.',
  },
  {
    icon: Briefcase,
    title: 'Корпоративные споры',
    description: 'Разрешение конфликтов между акционерами, защита бизнеса от рейдерских захватов, арбитраж.',
  },
  {
    icon: Users,
    title: 'Семейное право',
    description: 'Бракоразводные процессы, раздел имущества, споры о детях с максимальной деликатностью.',
  },
  {
    icon: FileText,
    title: 'Договорное право',
    description: 'Разработка и экспертиза сложных контрактов, минимизация правовых рисков сделок.',
  },
  {
    icon: Landmark,
    title: 'Недвижимость',
    description: 'Сопровождение сделок с элитной недвижимостью, проверка чистоты объектов, споры.',
  },
  {
    icon: Lock,
    title: 'Защита репутации',
    description: 'Защита чести, достоинства и деловой репутации в суде и информационном пространстве.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Ключевые <span className="text-gold-accent italic font-light">компетенции</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-accent mx-auto" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 glow-box-hover group"
            >
              <service.icon className="w-10 h-10 text-gold-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
