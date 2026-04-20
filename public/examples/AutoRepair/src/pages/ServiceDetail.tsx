import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { BookingForm } from '../components/BookingForm';
import { ChevronRight, Clock, History, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-32 flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-bold">Услуга не найдена</h2>
        <button onClick={() => navigate('/services')} className="btn-primary">
          <ArrowLeft className="w-5 h-5" />
          Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <NavLink to="/services" className="hover:text-white transition-colors duration-200">Услуги</NavLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{service.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-display font-bold">{service.title}</h1>
              <p className="text-xl text-gray-400 leading-relaxed">{service.fullDescription}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-bg-card border border-white/5 space-y-3">
                <div className="flex items-center gap-3 text-brand-primary font-bold">
                  <Clock className="w-5 h-5" />
                  Время выполнения
                </div>
                <p className="text-gray-300 text-lg">{service.duration}</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-card border border-white/5 space-y-3">
                <div className="flex items-center gap-3 text-brand-secondary font-bold">
                  <History className="w-5 h-5" />
                  Когда требуется?
                </div>
                <p className="text-gray-300 text-lg">При первых признаках неисправности или по регламенту.</p>
              </div>
            </div>

            {service.faq && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  {service.faq.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="p-6 rounded-2xl bg-bg-muted border border-white/5 space-y-2"
                    >
                      <h4 className="font-bold text-lg text-white">{item.question}</h4>
                      <p className="text-gray-400">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-8 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-white">Важно знать</h4>
                <p className="text-gray-400">Стоимость может варьироваться в зависимости от марки автомобиля и сложности работ. Итоговая цена озвучивается после диагностики.</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="bg-bg-card rounded-3xl p-8 border border-white/5 space-y-6">
                <div>
                  <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Стоимость</span>
                  <div className="text-4xl font-display font-bold text-white mt-1">
                    от {service.priceFrom.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
