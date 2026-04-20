import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import { BookingForm } from '../components/BookingForm';

export function Contacts() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold">Контакты</h1>
          <p className="text-xl text-gray-400">Мы всегда на связи и готовы помочь вашему автомобилю.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <ContactItem 
                icon={Phone} 
                title="Телефон" 
                content="+7 (999) 123-45-67" 
                subContent="Прием звонков 9:00 - 21:00"
                href="tel:+79991234567"
              />
              <ContactItem 
                icon={Mail} 
                title="E-mail" 
                content="info@autopro-service.ru" 
                subContent="Для коммерческих предложений"
                href="mailto:info@autopro-service.ru"
              />
              <ContactItem 
                icon={MapPin} 
                title="Адрес" 
                content="Москва, ул. Авторемонтная, 24" 
                subContent="БЦ 'Технопарк'"
              />
              <ContactItem 
                icon={Clock} 
                title="Режим работы" 
                content="Пн-Вс: 09:00 - 21:00" 
                subContent="Без выходных"
              />
            </div>

            <div className="p-8 rounded-2xl bg-bg-card border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold">Как до нас добраться?</h3>
              <p className="text-gray-400">Наш автосервис находится в 5 минутах от метро "Технопарк". Удобный заезд с ТТК.</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-outline">
                  <Navigation className="w-5 h-5 text-brand-primary" />
                  Яндекс Навигатор
                </button>
                <button className="btn-outline">
                  <MessageCircle className="w-5 h-5 text-brand-secondary" />
                  Написать в WhatsApp
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-bg-muted rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
               <img src="https://picsum.photos/seed/map/1200/800" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
               <div className="relative z-10 bg-bg-main/80 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 text-center">
                  <MapPin className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                  <span className="font-bold">Карта загрузится здесь</span>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-2 bg-white/5 rounded-2xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, content, subContent, href }: any) {
  return (
    <div className="space-y-3">
      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-brand-primary" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{title}</h4>
        {href ? (
          <a href={href} className="text-lg font-bold hover:text-brand-primary transition-colors">{content}</a>
        ) : (
          <p className="text-lg font-bold">{content}</p>
        )}
        <p className="text-sm text-gray-500">{subContent}</p>
      </div>
    </div>
  );
}
