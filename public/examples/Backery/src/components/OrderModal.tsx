import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { formatPhone, isValidPhone } from '../lib/utils';
import HeartsBurst from './HeartsBurst';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const todayStr = new Date().toISOString().split('T')[0];

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 - 14:00');
  const [wishes, setWishes] = useState('');
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; date?: string }>({});

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setName(''); setPhone(''); setDate(''); setTime('10:00 - 14:00');
        setWishes(''); setFileName(''); setErrors({});
        setIsSuccess(false); setIsSubmitting(false); setShowHearts(false);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  function validate(): boolean {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = 'Введите ваше имя';
    if (!isValidPhone(phone)) errs.phone = 'Формат: +7 (XXX) XXX-XX-XX';
    if (!date) errs.date = 'Выберите дату';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setShowHearts(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowHearts(false);
    }, 1600);
  }

  const fieldClass = (err?: string) =>
    `w-full bg-white border rounded-xl px-6 py-4 focus:outline-none focus:ring-2 transition-all ${
      err ? 'border-red-300 focus:ring-red-200' : 'border-[#E0D7D0] focus:ring-accent/20'
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative bg-bg w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden font-sans"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-ink/5 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-12 md:p-20 text-center space-y-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-black">Заказ принят!</h2>
                <p className="text-muted text-lg">
                  Спасибо за ваш выбор. Наш менеджер свяжется с вами в течение 30 минут для уточнения деталей.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="bg-ink text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs"
                >
                  Закрыть
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-4xl font-serif font-black mb-2">Оформить заказ</h2>
                  <p className="text-sm text-muted font-bold uppercase tracking-widest">
                    Заполните форму, и мы создадим для вас шедевр
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-muted ml-4 font-bold">Имя</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: undefined })); }}
                        className={fieldClass(errors.name)}
                        placeholder="Ваше имя"
                      />
                      {errors.name && <p className="text-red-400 text-xs ml-4 mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-muted ml-4 font-bold">Телефон</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => { setPhone(formatPhone(e.target.value)); setErrors(p => ({ ...p, phone: undefined })); }}
                        className={fieldClass(errors.phone)}
                        placeholder="+7 (___) ___-__-__"
                      />
                      {errors.phone && <p className="text-red-400 text-xs ml-4 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-muted ml-4 font-bold">Дата получения</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={date}
                          min={todayStr}
                          onChange={(e) => { setDate(e.target.value); setErrors(p => ({ ...p, date: undefined })); }}
                          className={`${fieldClass(errors.date)} pr-12 appearance-none`}
                        />
                        <CalendarIcon size={18} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
                      </div>
                      {errors.date && <p className="text-red-400 text-xs ml-4 mt-1">{errors.date}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-muted ml-4 font-bold">Время</label>
                      <div className="relative">
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full bg-white border border-[#E0D7D0] rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all pr-12 appearance-none"
                        >
                          <option>10:00 - 14:00</option>
                          <option>14:00 - 18:00</option>
                          <option>18:00 - 21:00</option>
                        </select>
                        <Clock size={18} className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-muted ml-4 font-bold">Пожелания по декору и вкусу</label>
                    <textarea
                      rows={3}
                      value={wishes}
                      onChange={(e) => setWishes(e.target.value)}
                      className="w-full bg-white border border-[#E0D7D0] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      placeholder="Например: Цвет крема нежно-голубой, надпись 'С днем рождения!'..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-muted ml-4 font-bold">Есть референс? (фото)</label>
                    <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#E0D7D0] rounded-2xl cursor-pointer hover:border-accent/50 bg-white/50 transition-colors">
                      <Upload className="text-accent mb-2" size={24} />
                      <span className="text-xs text-muted font-bold uppercase tracking-widest truncate max-w-full px-4 text-center">
                        {fileName || 'Нажмите для загрузки'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                      />
                    </label>
                  </div>

                  <div className="relative">
                    <HeartsBurst active={showHearts} />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full bg-ink text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors shadow-xl disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? 'Отправка...' : 'Подтвердить заказ'}
                    </motion.button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
