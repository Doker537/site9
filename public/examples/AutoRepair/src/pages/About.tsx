import { Users, Shield, Gauge, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const stats = [
    { label: 'Лет опыта', value: '15+' },
    { label: 'Мастеров', value: '15' },
    { label: 'Клиентов', value: '12 000+' },
    { label: 'Гарантия', value: '1 год' },
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Intro */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">Наша история</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold">О компании</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              AUTOPRO — команда профессионалов, увлечённых своим делом. Мы начали в 2009 году с небольшого бокса и выросли в полноценный сервисный центр, оснащённый по последнему слову техники.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Наша миссия — качественный сервис, который не просто устраняет поломки, но и обеспечивает владельцу спокойствие и уверенность на дороге.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-1"
                >
                  <div className="text-3xl font-display font-bold text-brand-primary">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <img
              src="./images/services/service-about.jpg"
              alt="Автосервис AUTOPRO"
              loading="eager"
              className="w-full h-full object-cover [will-change:transform]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg-main via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Наши ценности</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Почему нам доверяют</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <ValueCard
              icon={Shield}
              title="Честность"
              description="Никогда не навязываем лишние услуги. Согласовываем каждый этап ремонта и показываем замененные детали."
            />
            <ValueCard
              icon={Gauge}
              title="Качество"
              description="Только проверенные запчасти и высокоточное оборудование. Контроль качества на каждом этапе работ."
            />
            <ValueCard
              icon={CheckSquare}
              title="Ответственность"
              description="Несём полную ответственность за результат. Исправляем любые недочёты по гарантии без лишних вопросов."
            />
          </div>
        </section>

        {/* Team */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest">Команда</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Наши эксперты</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <TeamMember
              name="Михаил Волков"
              role="Старший механик"
              experience="15 лет опыта"
              imageUrl="./images/team/team-mikhail.jpg"
            />
            <TeamMember
              name="Денис Антонов"
              role="Диагност"
              experience="10 лет опыта"
              imageUrl="./images/team/team-denis.jpg"
            />
            <TeamMember
              name="Артем Морозов"
              role="Моторист"
              experience="12 лет опыта"
              imageUrl="./images/team/team-artem.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }: { icon: React.FC<any>; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col p-10 rounded-3xl bg-bg-card border border-white/5 space-y-6 hover:border-brand-primary/30 transition-colors duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-brand-primary" />
      </div>
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

function TeamMember({ name, role, experience, imageUrl }: { name: string; role: string; experience: string; imageUrl: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="group space-y-6"
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:border-white/15">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 [will-change:transform]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/15 text-[10px] font-bold text-white/70 uppercase tracking-widest">
          Пример фото
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-brand-primary text-sm font-medium">{role}</p>
        <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{experience}</p>
      </div>
    </motion.div>
  );
}
