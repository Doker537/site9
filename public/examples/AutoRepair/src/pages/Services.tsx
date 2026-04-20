import { SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function Services() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-bold text-brand-primary uppercase tracking-widest"
          >
            Всё для вашего автомобиля
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Наши услуги
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Широкий спектр услуг по ремонту и обслуживанию автомобилей всех марок с гарантией до 1 года.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 pt-12">
          <div className="bg-bg-card rounded-2xl p-10 border border-white/5 space-y-6 hover:border-white/10 transition-colors duration-300">
            <h3 className="text-2xl font-bold">Особые условия для компаний</h3>
            <p className="text-gray-400 leading-relaxed">
              Специальные программы обслуживания для корпоративных автопарков. Индивидуальные тарифы, приоритетная запись и полный комплект закрывающих документов.
            </p>
            <ul className="space-y-3">
              {[
                'Скидки от 15% на запчасти',
                'Обслуживание вне очереди',
                'Работа по договору с НДС',
                'Персональный менеджер',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-card rounded-2xl p-10 border border-white/5 flex flex-col justify-center items-center text-center space-y-6 hover:border-white/10 transition-colors duration-300">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-brand-primary" />
            </div>
            <h3 className="text-2xl font-bold">Не нашли нужную услугу?</h3>
            <p className="text-gray-400">
              Позвоните нам — проконсультируем по любому вопросу ремонта и обслуживания.
            </p>
            <a href="tel:+79991234567" className="text-3xl font-display font-bold text-brand-primary tracking-tight hover:text-red-400 transition-colors duration-200">
              +7 (999) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
