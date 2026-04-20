import { motion } from 'motion/react';
import { ChevronRight, Star, Clock, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, REVIEWS } from '../data/mock';
import { useOrder } from '../App';

const spring = { type: 'spring', stiffness: 320, damping: 22 } as const;

export default function Home() {
  const { openOrderModal } = useOrder();

  return (
    <div className="space-y-32 pb-32">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./images/hero-background.jpg"
            alt="Bakery Hero"
            fetchPriority="high"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block text-accent font-sans uppercase tracking-[0.2em] text-xs mb-6 font-bold">
              Искусство изысканных десертов
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-hero mb-8 leading-tight">
              Искусство в каждом кусочке.
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed font-sans max-w-lg">
              Авторские торты и десерты из натуральных ингредиентов с доставкой по Москве от 24 часов.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={openOrderModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
                className="bg-ink text-white px-10 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-deep-brown transition-colors text-center"
              >
                Заказать сейчас
              </motion.button>
              <Link
                to="/catalog"
                className="text-white border-b-2 border-white pb-1 font-sans font-bold uppercase tracking-widest text-xs hover:text-accent hover:border-accent transition-colors text-center inline-block self-center"
              >
                Смотреть меню
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-float"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest mb-2">Листайте вниз</span>
            <div className="w-px h-12 bg-white/20" />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { Icon: Heart, title: 'С любовью и душой', text: 'Каждый десерт создается вручную нашими мастерами с особым вниманием к деталям.' },
            { Icon: Star, title: 'Только натуральное', text: 'Мы используем сливки, сливочное масло, бельгийский шоколад и только свежие фрукты.' },
            { Icon: Clock, title: 'Быстро и вовремя', text: 'Соблюдаем сроки изготовления и доставляем ваши заказы точно в назначенное время.' },
          ].map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -4, transition: spring }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center space-y-6 p-8 rounded-3xl cursor-default"
            >
              <div className="w-16 h-16 bg-pastal-pink rounded-full flex items-center justify-center mx-auto text-gold-accent">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-serif">{title}</h3>
              <p className="opacity-70 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-xl">
            <span className="text-gold-accent font-display uppercase tracking-widest text-xs mb-4 block">Наш ассортимент</span>
            <h2 className="text-4xl md:text-5xl font-serif">Популярные категории</h2>
          </div>
          <Link to="/catalog" className="text-sm font-display uppercase tracking-widest flex items-center text-gold-accent hover:opacity-70 transition-opacity">
            Смотреть всё меню <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: spring }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-display uppercase tracking-widest">
                  От {product.price} ₽
                </div>
              </div>
              <h4 className="text-xl font-serif mb-2">{product.name}</h4>
              <p className="text-sm opacity-60 line-clamp-2 mb-4">{product.description}</p>
              <Link
                to={`/catalog/${product.id}`}
                className="text-xs font-display uppercase tracking-widest border-b border-deep-brown pb-1 hover:text-gold-accent hover:border-gold-accent transition-colors"
              >
                Подробнее
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-deep-brown py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <Award className="text-gold-accent mb-8" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif mb-8 max-w-3xl">
            Мечтаете об особенном торте для вашего торжества?
          </h2>
          <p className="text-lg opacity-70 mb-12 max-w-xl">
            Мы поможем подобрать идеальную начинку, разработаем уникальный дизайн и сделаем ваш праздник незабываемым.
          </p>
          <motion.button
            onClick={openOrderModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="bg-gold-accent text-deep-brown px-12 py-5 rounded-full font-display uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors"
          >
            Обсудить дизайн
          </motion.button>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-gold-accent font-display uppercase tracking-widest text-xs mb-4 block">Отзывы клиентов</span>
          <h2 className="text-4xl md:text-5xl font-serif">Говорят о нас</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: spring }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col space-y-6"
            >
              <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.userName} loading="lazy" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h5 className="font-serif text-lg">{review.userName}</h5>
                  <div className="flex text-gold-accent space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic opacity-80 leading-relaxed font-serif text-lg">
                "{review.text}"
              </p>
              <span className="text-xs font-display opacity-40 uppercase tracking-widest">
                {review.date}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
