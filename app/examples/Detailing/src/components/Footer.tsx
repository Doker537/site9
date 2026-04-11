import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/5 bg-[#030303] py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#00f0ff]" />
            <span className="font-display font-bold text-xl tracking-widest uppercase">
              Lumina<span className="text-[#00f0ff]">Detail</span>
            </span>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Премиальная детейлинг-студия. Мы создаем идеальный облик вашего автомобиля и защищаем его на долгие годы.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Контакты</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li>+7 (999) 123-45-67</li>
            <li>info@luminadetail.ru</li>
            <li>г. Москва, ул. Примерная, д. 1</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Режим работы</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li>Пн-Вс: 10:00 - 22:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-wider">
        <p>© 2026 Lumina Detail. Все права защищены.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#00f0ff] transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
