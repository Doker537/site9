import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/mock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { isValidEmail } from '../lib/utils';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError('Введите корректный email');
      return;
    }
    setEmailError('');
    setEmailSuccess(true);
    setEmail('');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <span className="text-gold-accent font-display uppercase tracking-widest text-xs mb-4 block">Полезно и вкусно</span>
        <h1 className="text-5xl md:text-7xl font-serif text-deep-brown mb-8">Наш Блог</h1>
        <p className="max-w-2xl mx-auto opacity-70 leading-relaxed font-sans text-lg">
          Делимся секретами кондитерского мастерства, советами по выбору десертов и самыми свежими трендами.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {BLOG_POSTS.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-display uppercase tracking-widest text-deep-brown">
                {post.date}
              </div>
            </div>

            <div className="space-y-6 px-4">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight group-hover:text-gold-accent transition-colors duration-300">
                {post.title}
              </h2>
              <p className="opacity-60 leading-relaxed line-clamp-3 italic text-lg">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-xs font-display uppercase tracking-[0.2em] text-deep-brown group-hover:text-gold-accent transition-colors duration-300"
              >
                Читать статью
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <section className="mt-32 border-t border-deep-brown/10 pt-32 pb-16">
        <div className="max-w-4xl mx-auto bg-deep-brown text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-accent/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pastal-pink/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <h2 className="text-3xl md:text-5xl font-serif">Подпишитесь на рецепты счастья</h2>
            <p className="opacity-70 text-lg max-w-xl mx-auto">
              Оставьте свой email, и мы будем присылать вам идеи для ваших праздников и специальные предложения.
            </p>

            {emailSuccess ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-gold-accent font-display uppercase tracking-widest text-sm"
              >
                Отлично! Вы подписаны 🎉
              </motion.p>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubscribe}>
                <div className="flex-grow space-y-1">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                    placeholder="Ваш email"
                    className={`w-full bg-white/10 border rounded-full px-8 py-4 text-white focus:outline-none transition-colors placeholder:text-white/50 ${
                      emailError ? 'border-red-400' : 'border-white/20 focus:border-gold-accent'
                    }`}
                  />
                  {emailError && <p className="text-red-400 text-xs ml-4">{emailError}</p>}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gold-accent text-deep-brown px-10 py-4 rounded-full font-display uppercase tracking-widest text-sm hover:bg-white transition-colors shrink-0"
                >
                  Подписаться
                </motion.button>
              </form>
            )}

            <p className="text-[10px] opacity-40 uppercase tracking-widest">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
