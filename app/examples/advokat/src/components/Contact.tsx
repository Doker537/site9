import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-accent/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Свяжитесь <span className="text-gold-accent italic font-light">со мной</span>
            </h2>
            <p className="text-gray-400 font-light">
              Оставьте ваши данные, и я свяжусь с вами в ближайшее время для обсуждения вашей ситуации.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 ml-1">Имя</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-accent/50 focus:ring-1 focus:ring-gold-accent/50 transition-all font-light"
                  placeholder="Иван Иванов"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400 ml-1">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-accent/50 focus:ring-1 focus:ring-gold-accent/50 transition-all font-light"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 ml-1">Краткое описание ситуации (необязательно)</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-accent/50 focus:ring-1 focus:ring-gold-accent/50 transition-all font-light resize-none"
                placeholder="Опишите суть вопроса..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting || isSubmitted}
              type="submit"
              className="w-full py-4 bg-gold-accent text-dark-bg font-medium rounded-xl text-lg tracking-wide hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-dark-bg/30 border-t-dark-bg rounded-full animate-spin" />
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Заявка отправлена</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Отправить заявку</span>
                </>
              )}
            </motion.button>
            
            <p className="text-center text-xs text-gray-500 font-light mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
