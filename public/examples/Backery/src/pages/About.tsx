import { motion } from 'motion/react';
import { Heart, Sparkles, Coffee, User } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="bg-pastal-pink py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-accent font-display uppercase tracking-widest text-xs mb-6 block"
          >
            История нашего бренда
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 text-deep-brown"
          >
            Создаем праздники <br /> своими руками
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-70 leading-relaxed italic"
          >
            "Dolce Vita — это не просто кондитерская, а место, где оживают сладкие мечты. Наша миссия — радовать вас безупречным качеством и изысканным дизайном."
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl skew-y-2">
            <img 
              src="./images/about-process.jpg"
              alt="Pastry Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white p-6 rounded-[2rem] shadow-xl hidden lg:block -rotate-6">
            <img
              src="./images/about-chef.jpg"
              alt="Chef"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Наша Философия</h2>
            <p className="opacity-70 leading-relaxed text-lg font-sans">
              Мы верим, что десерт должен быть не только вкусным, но и красивым. Каждый заказ для нас особенный, поэтому мы не используем заготовки — всё готовится индивидуально под клиента из самых лучших ингредиентов.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { Icon: Heart, title: 'Натурально', text: 'Никаких маргаринов и растительных сливок. Только фермерские продукты.' },
              { Icon: Sparkles, title: 'Авторски', text: 'Собственные рецептуры и техники, отработанные годами практики.' },
              { Icon: Coffee, title: 'Уютно', text: 'Мы стремимся создать дружескую атмосферу общения с каждым клиентом.' },
              { Icon: User, title: 'Лично', text: 'Контролируем каждый этап: от первой заявки до момента отдачи заказа.' },
            ].map(({ Icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="space-y-4 p-6 rounded-2xl cursor-default"
              >
                <Icon className="text-gold-accent" size={32} />
                <h4 className="font-serif text-xl">{title}</h4>
                <p className="text-sm opacity-60">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Process CTA */}
      <section className="bg-pastal-cream py-32 px-4">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif">Загляните в нашу мастерскую</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[1, 2, 3, 4].map(i => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-md"
                  >
                     <img src={`./images/about-workshop-${i}.jpg`} alt="Process" loading="lazy" className="w-full h-full object-cover" />
                  </motion.div>
               ))}
            </div>
            <p className="text-lg opacity-70 italic">
               Мы работаем каждый день, чтобы делать ваше утро и праздники слаще. Посетите нашу галерею, чтобы увидеть больше работ.
            </p>
            <div className="pt-8">
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.97 }}
                 transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                 className="bg-deep-brown text-white px-10 py-4 rounded-full font-display uppercase tracking-widest text-sm hover:bg-gold-accent hover:text-deep-brown transition-colors cursor-pointer"
               >
                 Связаться с нами
               </motion.button>
            </div>
         </div>
      </section>
    </div>
  );
}
