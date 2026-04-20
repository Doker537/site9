import { NavLink } from 'react-router-dom';
import { Gauge, Phone, MapPin, Mail, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-card border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Gauge className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">AUTOPRO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональный автосервис в Москве. Ремонт любой сложности с гарантией результата.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4">
              {[
                { label: 'Главная', href: '/' },
                { label: 'Услуги', href: '/services' },
                { label: 'О компании', href: '/about' },
                { label: 'Контакты', href: '/contacts' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <NavLink to={href} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Услуги</h4>
            <ul className="space-y-4">
              {[
                { label: 'Компьютерная диагностика', href: '/services/diagnostics' },
                { label: 'Техническое обслуживание', href: '/services/maintenance' },
                { label: 'Ремонт двигателя', href: '/services/engine-repair' },
                { label: 'Тормозная система', href: '/services/brakes' },
                { label: 'Электрика', href: '/services/electrical' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <NavLink to={href} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/services" className="text-brand-primary text-sm hover:underline">
                  Все услуги →
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-gray-400 text-sm">Москва, ул. Авторемонтная, д. 24, стр. 1</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="tel:+79991234567" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="mailto:info@autopro-service.ru" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  info@autopro-service.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} AUTOPRO. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
