import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { formatPhone, isValidPhone } from '../lib/utils';
import HeartsBurst from '../components/HeartsBurst';

export default function Contacts() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  function validate(): boolean {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = 'Введите ваше имя';
    if (!isValidPhone(phone)) errs.phone = 'Формат: +7 (XXX) XXX-XX-XX';
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
    }, 1500);
  }

  const fieldClass = (err?: string) =>
    `w-full bg-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all font-sans ${
      err ? 'ring-1 ring-red-300 focus:ring-red-200' : 'focus:ring-gold-accent/20'
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-deep-brown mb-8">Контакты</h1>
        <p className="max-w-2xl mx-auto opacity-70 leading-relaxed font-sans text-lg">
          Всегда рады общению. Свяжитесь с нами любым удобным способом для консультации или заказа.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-12"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold-accent">
                <Phone size={20} />
                <h4 className="font-serif text-xl text-deep-brown">Позвонить</h4>
              </div>
              <p className="opacity-70 text-lg">+7 (999) 123-45-67</p>
              <p className="opacity-40 text-xs uppercase tracking-widest">Ежедневно с 9:00 до 21:00</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold-accent">
                <MessageSquare size={20} />
                <h4 className="font-serif text-xl text-deep-brown">Мессенджеры</h4>
              </div>
              <div className="flex flex-col space-y-3">
                <a href="#" className="flex items-center space-x-3 bg-[#25D366] text-white px-5 py-3 rounded-2xl text-sm font-sans font-bold hover:opacity-90 hover:shadow-lg transition-all shadow-md">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="flex items-center space-x-3 bg-[#0088cc] text-white px-5 py-3 rounded-2xl text-sm font-sans font-bold hover:opacity-90 hover:shadow-lg transition-all shadow-md">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold-accent">
                <MapPin size={20} />
                <h4 className="font-serif text-xl text-deep-brown">Приехать</h4>
              </div>
              <p className="opacity-70 text-lg">ул. Кондитерская, 15, Москва</p>
              <p className="opacity-40 text-xs uppercase tracking-widest">Вход со стороны парка</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold-accent">
                <Mail size={20} />
                <h4 className="font-serif text-xl text-deep-brown">Написать</h4>
              </div>
              <p className="opacity-70 text-lg">order@dolcevita.ru</p>
              <p className="opacity-40 text-xs uppercase tracking-widest">Отвечаем в течение часа</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-pastal-pink p-12 rounded-[3.5rem] shadow-sm"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-4 py-8"
              >
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-serif text-deep-brown">Сообщение отправлено!</h3>
                <p className="opacity-70">Мы свяжемся с вами в ближайшее время.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-3xl font-serif mb-8 text-deep-brown">Оставьте заявку</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest opacity-40 ml-4">Имя</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: undefined })); }}
                        className={fieldClass(errors.name)}
                        placeholder="Как вас зовут?"
                      />
                      {errors.name && <p className="text-red-400 text-xs ml-4 mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest opacity-40 ml-4">Телефон</label>
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
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest opacity-40 ml-4">Ваше пожелание</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-gold-accent/20 transition-all font-sans resize-none"
                      placeholder="Расскажите о вашем событии или какой десерт вы хотите заказать..."
                    />
                  </div>
                  <div className="relative">
                    <HeartsBurst active={showHearts} />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full bg-deep-brown text-white py-5 rounded-2xl font-display uppercase tracking-widest text-sm hover:bg-gold-accent hover:text-deep-brown transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-60 cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Отправка...' : 'Отправить сообщение'}</span>
                      {!isSubmitting && <Send size={18} />}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[600px] lg:h-auto rounded-[4rem] overflow-hidden shadow-2xl skew-y-1"
        >
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin size={48} className="mx-auto text-gold-accent" />
              <p className="font-serif text-xl">Карта загружается...</p>
              <p className="text-xs opacity-50 font-display uppercase tracking-widest">ул. Кондитерская, 15, Москва</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.509745121415!2d37.61749!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuOSJF!5e0!3m2!1sen!2sru!4v1234567890"
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map"
          />

          <div className="absolute top-10 right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs space-y-4 hidden md:block">
            <h5 className="font-serif text-lg">Как нас найти?</h5>
            <p className="text-sm opacity-70 leading-relaxed">
              Мы находимся в уютном дворике за старым парком. Возле входа висит золотая вывеска "Dolce Vita".
            </p>
            <div className="flex items-center space-x-2 text-gold-accent">
              <Clock size={16} />
              <span className="text-xs font-display uppercase tracking-widest">9:00 - 21:00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
