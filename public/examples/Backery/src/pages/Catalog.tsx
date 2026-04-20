import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/mock';
import { Category } from '../types';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const CATEGORIES: { id: Category | 'all'; name: string }[] = [
  { id: 'all', name: 'Все' },
  { id: 'cakes', name: 'Торты' },
  { id: 'wedding', name: 'Свадебные' },
  { id: 'kids', name: 'Детские' },
  { id: 'cupcakes', name: 'Капкейки' },
  { id: 'macarons', name: 'Макаруны' },
  { id: 'sets', name: 'Наборы' },
];

const spring = { type: 'spring', stiffness: 320, damping: 22 } as const;

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-deep-brown">Наше Меню</h1>
        <p className="max-w-2xl mx-auto opacity-70 leading-relaxed font-sans text-lg">
          Каждый десерт может быть адаптирован под ваши пожелания. Мы поможем выбрать идеальный вкус и оформление для вашего события.
        </p>
      </motion.header>

      <div className="flex flex-wrap justify-center gap-4 mb-20 font-sans">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className={cn(
              'px-8 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest border cursor-pointer',
              activeCategory === cat.id
                ? 'bg-accent text-white border-accent shadow-lg'
                : 'bg-white text-ink border-[#E0D7D0] hover:border-accent hover:text-accent'
            )}
          >
            {cat.name}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6, transition: spring }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 bg-pastal-pink transition-shadow duration-500 group-hover:shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={`/catalog/${product.id}`}
                    className="bg-ink text-white px-8 py-4 rounded-full font-sans font-bold text-[12px] tracking-widest uppercase flex items-center shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-serif font-black">{product.name}</h3>
                  <div className="text-lg font-serif font-bold text-accent">от {product.price} ₽</div>
                </div>
                <p className="text-sm text-muted line-clamp-2 leading-relaxed">{product.description}</p>
                <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent/60">
                  {CATEGORIES.find(c => c.id === product.category)?.name}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 space-y-4">
          <p className="text-xl opacity-40 italic">Здесь пока ничего нет...</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="text-gold-accent font-display uppercase text-xs tracking-widest border-b border-gold-accent pb-1"
          >
            Вернуться ко всем
          </button>
        </div>
      )}
    </div>
  );
}
