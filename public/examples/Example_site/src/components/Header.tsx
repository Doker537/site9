import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Услуги', path: '/services' },
  { name: 'О компании', path: '/about' },
  { name: 'Кейсы', path: '/cases' },
  { name: 'Статьи', path: '/blog' },
  { name: 'Контакты', path: '/contacts' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-[70px] items-center justify-between mx-auto px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-3 -ml-2 lg:-ml-4">
          <div className="bg-primary w-9 h-9 flex items-center justify-center shrink-0 border border-accent/40">
              <span className="text-accent font-black text-[13px] leading-none tracking-tighter select-none">БЭ</span>
            </div>
          <span className="font-heading font-extrabold text-[20px] uppercase tracking-wider text-primary leading-none">
            Бюро Экспертиз
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-[30px] h-full ml-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-[0.5px] transition-all duration-300",
                location.pathname === item.path ? "text-primary border-b-2 border-primary h-full flex items-center" : "text-foreground hover:text-primary h-full flex items-center"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild className="bg-primary text-white text-[12px] font-bold uppercase py-[10px] px-5 h-auto rounded-[4px] border-none">
            <Link to="/contacts">Связаться с экспертом</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    location.pathname === item.path ? "text-primary" : "text-foreground/60"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-4">
                <a href="tel:+78005553535" className="flex items-center text-lg font-medium">
                  <Phone className="w-5 h-5 mr-3 text-primary" /> +7 (800) 555-35-35
                </a>
                <a href="mailto:info@expert-buro.ru" className="flex items-center text-lg font-medium">
                  <Mail className="w-5 h-5 mr-3 text-primary" /> info@expert-buro.ru
                </a>
                <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/contacts">Заказать экспертизу</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
