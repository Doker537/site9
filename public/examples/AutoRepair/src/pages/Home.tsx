import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { SERVICES, ADVANTAGES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { BookingForm } from '../components/BookingForm';
import {
  ShieldCheck, Clock, Award, ArrowRight,
  TrendingUp, Users, Star, Wrench,
  CheckCircle2, Phone, MessageSquare,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const STATS = [
  { value: '15+', label: 'лет на рынке', icon: TrendingUp },
  { value: '12 000+', label: 'автомобилей', icon: Wrench },
  { value: '98%', label: 'довольных клиентов', icon: Users },
  { value: '4.9', label: 'средняя оценка', icon: Star },
];

const STEPS = [
  { num: '01', title: 'Заявка', desc: 'Оставьте заявку онлайн или позвоните — ответим за 15 минут.' },
  { num: '02', title: 'Диагностика', desc: 'Бесплатно проверяем автомобиль и называем точную стоимость.' },
  { num: '03', title: 'Ремонт', desc: 'Выполняем работы в согласованные сроки с оригинальными запчастями.' },
  { num: '04', title: 'Гарантия', desc: 'Выдаём письменную гарантию до 1 года на все виды работ.' },
];

export function Home() {
  return (
    <div className="space-y-32 pb-32">
      <Hero />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-muted border border-white/5"
            >
              <stat.icon className="w-6 h-6 text-brand-primary mb-3" />
              <span className="text-3xl md:text-4xl font-display font-bold text-white">{stat.value}</span>
              <span className="text-sm text-gray-400 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Почему выбирают нас</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Наши преимущества</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col p-6 rounded-2xl bg-bg-muted border border-white/5 space-y-4 hover:border-brand-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-bold text-lg">{adv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Что мы делаем</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Наши услуги</h3>
          </div>
          <NavLink to="/services" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 shrink-0">
            Все услуги
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </NavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 4).map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Просто и быстро</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Как это работает</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex flex-col gap-5"
              >
                {/* Номер + линия к следующему шагу */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-base font-display font-bold text-brand-primary">{step.num}</span>
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-white/10"></div>
                  )}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl overflow-hidden bg-linear-to-r from-brand-primary/20 to-brand-secondary/20 border border-white/10 p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-bg-muted/60 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
                Акция
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold">
                Бесплатная диагностика <br className="hidden md:block" />при любом ремонте
              </h3>
              <p className="text-gray-400 max-w-lg">
                Запишитесь сегодня и получите полную компьютерную диагностику бесплатно. Предложение действует при заказе любой услуги.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <NavLink to="/contacts" className="btn-primary text-base px-8 whitespace-nowrap">
                Записаться
                <ArrowRight className="w-4 h-4" />
              </NavLink>
              <a href="tel:+79991234567" className="btn-outline text-base px-8 whitespace-nowrap">
                <Phone className="w-4 h-4" />
                Позвонить
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-bg-muted border border-white/5 py-20 px-8 lg:px-16">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <img src="https://picsum.photos/seed/engine2/1000/1000" alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Запишитесь на <br />
                <span className="text-brand-primary">бесплатную</span> диагностику
              </h2>
              <p className="text-xl text-gray-400 max-w-md">
                Оставьте заявку — мастер перезвонит за 15 минут, проконсультирует и запишет на удобное время.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: 'Перезвоним за 15 минут' },
                  { icon: ShieldCheck, text: 'Гарантия на все работы' },
                  { icon: CheckCircle2, text: 'Прозрачная смета до начала работ' },
                  { icon: MessageSquare, text: 'Онлайн-отчёт о ходе ремонта' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-brand-primary w-5 h-5" />
                    </div>
                    <span className="text-gray-300 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
