import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-bg py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-gold-accent" />
            <span className="font-serif text-xl text-white tracking-wide">Адвокатский <span className="text-gold-accent italic">Кабинет</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-light text-gray-400">
            <a href="#" className="hover:text-gold-accent transition-colors">Услуги</a>
            <a href="#" className="hover:text-gold-accent transition-colors">Обо мне</a>
            <a href="#" className="hover:text-gold-accent transition-colors">Контакты</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light">
          <p>© {new Date().getFullYear()} Все права защищены.</p>
          <p>Конфиденциальность гарантируется адвокатской тайной.</p>
        </div>
      </div>
    </footer>
  );
}
