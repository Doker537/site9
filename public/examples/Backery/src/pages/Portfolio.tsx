import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera } from 'lucide-react';
import { cn } from '../lib/utils';

type FilterType = 'all' | 'wedding' | 'kids' | 'events' | 'mini';

const ITEMS = [
  { id: 1, type: 'wedding', image: './images/portfolio-1.jpg', title: 'Свадьба Натальи и Павла' },
  { id: 2, type: 'kids', image: './images/product-cupcake1.jpg', title: 'День рождения Артема' },
  { id: 3, type: 'events', image: './images/portfolio-3.jpg', title: 'Корпоратив Альфа-Банк' },
  { id: 4, type: 'wedding', image: './images/portfolio-4.jpg', title: 'Минималистичный белый' },
  { id: 5, type: 'mini', image: './images/portfolio-5.jpg', title: 'Кэнди-бар в розовых тонах' },
  { id: 6, type: 'kids', image: './images/portfolio-6.jpg', title: 'Космический торт' },
  { id: 7, type: 'wedding', image: './images/product-cake2.jpg', title: 'Торт с живыми цветами' },
  { id: 8, type: 'mini', image: './images/portfolio-8.jpg', title: 'Набор праздничных капкейков' },
];

const FILTERS: { id: FilterType; name: string }[] = [
  { id: 'all', name: 'Все работы' },
  { id: 'wedding', name: 'Свадебные' },
  { id: 'kids', name: 'Детские' },
  { id: 'events', name: 'Мероприятия' },
  { id: 'mini', name: 'Мини-десерты' },
];

const spring = { type: 'spring', stiffness: 320, damping: 22 } as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredItems = filter === 'all' ? ITEMS : ITEMS.filter(item => item.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-deep-brown">Наше Портфолио</h1>
        <p className="max-w-xl mx-auto opacity-70 leading-relaxed italic text-lg text-gold-accent">
          Галерея выполненных заказов — наше вдохновение и гордость
        </p>
      </motion.header>

      <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-deep-brown/10 pb-4">
        {FILTERS.map((f) => (
          <motion.button
            key={f.id}
            onClick={() => setFilter(f.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className={cn(
              'text-xs font-display uppercase tracking-[0.2em] transition-colors relative pb-2 px-2 cursor-pointer',
              filter === f.id ? 'text-gold-accent' : 'text-deep-brown/50 hover:text-deep-brown'
            )}
          >
            {f.name}
            {filter === f.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02, transition: spring }}
              transition={{ duration: 0.5 }}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-8">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-display uppercase tracking-widest text-gold-accent mb-2 block">
                      {FILTERS.find(f => f.id === item.type)?.name}
                    </span>
                    <h4 className="font-serif text-xl">{item.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 bg-pastal-pink p-12 md:p-24 rounded-[4rem] text-center space-y-10"
      >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-gold-accent shadow-lg">
          <Camera size={28} />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif">Больше работ в нашем Instagram</h2>
        <p className="text-lg opacity-70 max-w-xl mx-auto">
          Подписывайтесь, чтобы следить за новинками, процессами приготовления и эксклюзивными акциями.
        </p>
        <div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="inline-block bg-deep-brown text-white px-12 py-5 rounded-full font-display uppercase tracking-widest text-sm hover:bg-gold-accent hover:text-deep-brown transition-colors shadow-xl"
          >
            @dolce_vita_patisserie
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
