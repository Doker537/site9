import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

export function BookingForm() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-bg-card rounded-2xl p-10 text-center space-y-4 border border-brand-primary/20">
        <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-brand-primary" />
        </div>
        <h3 className="text-2xl font-bold">Заявка принята!</h3>
        <p className="text-gray-400">Мы перезвоним вам в течение 15 минут для уточнения деталей.</p>
        <button onClick={() => setStatus('idle')} className="text-brand-primary font-medium hover:underline">
          Отправить еще одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg-card rounded-2xl p-8 space-y-6 border border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Ваше имя</label>
          <input
            required
            type="text"
            placeholder="Иван Иванов"
            className="w-full bg-bg-muted border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Телефон</label>
          <input
            required
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className="w-full bg-bg-muted border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Услуга</label>
          <select className="w-full bg-bg-muted border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none">
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
            <option value="other">Другое</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Марка автомобиля</label>
          <input
            type="text"
            placeholder="Например: Toyota Camry"
            className="w-full bg-bg-muted border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Комментарий</label>
        <textarea
          rows={3}
          placeholder="Опишите проблему или укажите удобное время..."
          className="w-full bg-bg-muted border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
        ></textarea>
      </div>

      <button
        disabled={status === 'loading'}
        className={cn(
          "w-full btn-primary h-14",
          status === 'loading' && "opacity-70 cursor-not-allowed"
        )}
      >
        {status === 'loading' ? 'Отправка...' : 'Записаться на сервис'}
        <Send className="w-5 h-5" />
      </button>

      <p className="text-[10px] text-gray-500 text-center">
        Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности.
      </p>
    </form>
  );
}
