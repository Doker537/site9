import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'О компании', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
              <Gauge className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">AUTOPRO</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-brand-primary",
                    isActive ? "text-brand-primary" : "text-gray-400"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>+7 (999) 123-45-67</span>
            </a>
            <NavLink to="/contacts" className="btn-primary py-2 px-5 text-sm">
              Записаться
            </NavLink>
          </div>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-bg-card border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <a href="tel:+79991234567" className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span>+7 (999) 123-45-67</span>
                </a>
                <NavLink
                  to="/contacts"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full"
                >
                  Записаться на сервис
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
