import { Phone, MapPin, Award, Shield, FileCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-[#E2E8F0] h-auto lg:h-[80px] flex items-center py-6 lg:py-0">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E2E8F0] rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#718096]" />
            </div>
            <div className="text-[12px] font-semibold text-muted-foreground leading-[1.2]">
              Государственная<br />аккредитация
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E2E8F0] rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-[#718096]" />
            </div>
            <div className="text-[12px] font-semibold text-muted-foreground leading-[1.2]">
              Членство в СРО<br />проектировщиков
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E2E8F0] rounded-full flex items-center justify-center">
              <FileCheck className="w-4 h-4 text-[#718096]" />
            </div>
            <div className="text-[12px] font-semibold text-muted-foreground leading-[1.2]">
              Сертифицированные<br />лаборатории
            </div>
          </div>
        </div>

        <div className="text-[12px] font-semibold text-muted-foreground lg:text-right leading-[1.4] space-y-1">
          <div className="flex lg:justify-end items-center">
            <MapPin className="w-3 h-3 mr-2 opacity-50" />
            г. Москва, ул. Пресненская наб., 12
          </div>
          <div className="flex lg:justify-end items-center">
            <Phone className="w-3 h-3 mr-2 opacity-50" />
            +7 (495) 000-00-00
          </div>
          <div className="text-[10px] opacity-50 mt-1">© {currentYear} Эксперт-Групп</div>
        </div>
      </div>
    </footer>
  );
}
