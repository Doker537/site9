import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function Contacts() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Контакты</h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Мы всегда на связи и готовы ответить на ваши вопросы. 
                Позвоните нам или оставьте заявку, и мы перезвоним в удобное для вас время.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <Phone className="w-5 h-5" />
                  <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Телефон</h3>
                </div>
                <div className="space-y-1">
                  <a href="tel:+78005553535" className="text-xl font-bold hover:text-primary transition-colors">+7 (800) 555-35-35</a>
                  <p className="text-sm text-slate-500">Бесплатно по России</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Email</h3>
                </div>
                <div className="space-y-1">
                  <a href="mailto:info@expert-buro.ru" className="text-xl font-bold hover:text-primary transition-colors">info@expert-buro.ru</a>
                  <p className="text-sm text-slate-500">Для запросов и документов</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Офис</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  г. Москва, ул. Экспертная, <br /> д. 10, оф. 305
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">График</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-600 font-medium">Пн — Пт: 09:00 - 19:00</p>
                  <p className="text-sm text-slate-500">Суббота: По записи</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="aspect-video w-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative group grayscale hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-12 h-12 text-primary mx-auto animate-bounce" />
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Интерактивная карта</p>
                  </div>
               </div>
               <img
                 src="https://picsum.photos/seed/map/1200/800"
                 alt="Map view"
                 className="w-full h-full object-cover opacity-50"
                 referrerPolicy="no-referrer"
                 loading="lazy"
                 decoding="async"
               />
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32">
              <ContactForm />
              
              <Card className="mt-8 border-none bg-slate-50">
                <CardContent className="p-8 flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Работаем по всей России</h4>
                    <p className="text-sm text-slate-500">Дистанционное консультирование и выездные экспертизы.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
