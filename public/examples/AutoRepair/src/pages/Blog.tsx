import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-bold text-brand-primary uppercase tracking-widest"
          >
            Советы экспертов
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Блог
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Полезные статьи об уходе за автомобилем от наших экспертов.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="group space-y-6 bg-bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-bg-muted">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    5 мин. чтения
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold group-hover:text-brand-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-brand-primary font-bold group/btn pt-2">
                  Читать полностью
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
