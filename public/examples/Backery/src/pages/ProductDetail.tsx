import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Info, Calendar, Weight, Layers, CheckCircle2, Clock } from 'lucide-react';
import { PRODUCTS } from '../data/mock';
import { useEffect, useState } from 'react';
import { useOrder } from '../App';

export default function ProductDetail() {
  const { openOrderModal } = useOrder();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedWeight, setSelectedWeight] = useState(product?.minWeight || 1.5);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-3xl font-serif mb-8">Извините, товар не найден</h2>
        <Link to="/catalog" className="text-gold-accent font-display uppercase tracking-widest border-b border-gold-accent">
          Вернуться в меню
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <Link to="/catalog" className="inline-flex items-center text-xs font-display uppercase tracking-widest text-deep-brown hover:text-gold-accent transition-colors mb-12">
        <ChevronLeft size={16} className="mr-1" /> Назад в меню
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white shadow-2xl"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Info */}
        <div className="flex flex-col space-y-10">
          <div>
            <span className="text-gold-accent font-display uppercase tracking-widest text-xs mb-4 block">
              {product.category === 'cakes' ? 'Классические торты' : 'Авторский десерт'}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{product.name}</h1>
            <p className="text-xl opacity-70 leading-relaxed font-sans">
              {product.description}
            </p>
          </div>

          <div className="flex items-baseline space-x-4">
            <span className="text-3xl font-serif text-deep-brown">от {product.price} ₽</span>
            <span className="text-sm opacity-40">/ кг</span>
          </div>

          {/* Configuration */}
          <div className="space-y-8 py-8 border-y border-deep-brown/10">
            {product.minWeight && (
              <div className="space-y-4">
                <label className="text-xs font-display uppercase tracking-widest flex items-center">
                  <Weight size={14} className="mr-2" /> Вес торта
                </label>
                <div className="flex space-x-3">
                  {[product.minWeight, product.minWeight + 1, product.minWeight + 2].map(w => (
                    <motion.button
                      key={w}
                      onClick={() => setSelectedWeight(w)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                      className={`px-6 py-2 rounded-full text-sm font-sans border cursor-pointer ${
                        selectedWeight === w
                          ? 'bg-deep-brown text-white border-deep-brown shadow-md'
                          : 'bg-transparent border-deep-brown/20 hover:border-deep-brown transition-colors'
                      }`}
                    >
                      {w} кг
                    </motion.button>
                  ))}
                  <div className="flex-grow">
                     <input 
                       type="number" 
                       placeholder="Другой..."
                       className="w-full h-10 px-4 rounded-full border border-deep-brown/20 text-sm focus:outline-none focus:border-gold-accent"
                       onChange={(e) => setSelectedWeight(Number(e.target.value))}
                     />
                  </div>
                </div>
              </div>
            )}

            {product.fillings && (
              <div className="space-y-4">
                <label className="text-xs font-display uppercase tracking-widest flex items-center">
                  <Layers size={14} className="mr-2" /> Доступные начинки
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {product.fillings.map(f => (
                    <div key={f} className="flex items-center space-x-2 text-sm opacity-70">
                      <CheckCircle2 size={14} className="text-gold-accent" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex items-start space-x-3 text-sm">
                <Clock className="text-gold-accent shrink-0" size={18} />
                <div>
                  <h5 className="font-semibold mb-1">Срок изготовления</h5>
                  <p className="opacity-60">От 2 до 5 дней в зависимости от сложности декора.</p>
                </div>
             </div>
             <div className="flex items-start space-x-3 text-sm">
                <Info className="text-gold-accent shrink-0" size={18} />
                <div>
                  <h5 className="font-semibold mb-1">Индивидуальный дизайн</h5>
                  <p className="opacity-60">Можем изменить цвет, добавить надпись или фигурки.</p>
                </div>
             </div>
          </div>

          <div className="pt-6">
            <motion.button
              onClick={openOrderModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="w-full bg-deep-brown text-white py-5 rounded-2xl font-display uppercase tracking-widest text-sm hover:bg-gold-accent shadow-xl transition-colors cursor-pointer"
            >
              Заказать онлайн
            </motion.button>
            <p className="text-center mt-6 text-[10px] uppercase opacity-40 tracking-widest">
              Бесплатная консультация при заказе
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Section (Simple) */}
      <section className="mt-32 pt-20 border-t border-deep-brown/5">
        <h2 className="text-3xl font-serif mb-12">Вам также может понравиться</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(p => (
             <Link key={p.id} to={`/catalog/${p.id}`} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                   <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-serif group-hover:text-gold-accent transition-colors">{p.name}</h4>
                <p className="text-xs opacity-40 mt-1 uppercase tracking-widest">от {p.price} ₽</p>
             </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
