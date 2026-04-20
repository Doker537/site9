import { useState } from "react";
import { motion } from "motion/react";
import { SERVICES } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Building2, Car, TrendingUp, Map, Flame, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Building2,
  Car,
  TrendingUp,
  Map,
  Flame,
};

const SERVICE_PHOTOS: Record<string, string> = {
  judicial:     'https://picsum.photos/seed/courtroom-scales-law/800/320',
  construction: 'https://picsum.photos/seed/building-concrete-site/800/320',
  auto:         'https://picsum.photos/seed/highway-car-road/800/320',
  valuation:    'https://picsum.photos/seed/realestate-property-value/800/320',
  land:         'https://picsum.photos/seed/greenfield-survey-land/800/320',
  fire:         'https://picsum.photos/seed/fire-safety-inspection/800/320',
};

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = SERVICES.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="container mx-auto px-10">
        <div className="max-w-3xl mb-12 space-y-4">
          <h1 className="text-[36px] font-extrabold tracking-tight text-primary leading-tight">Услуги бюро экспертиз</h1>
          <p className="text-muted-foreground text-[16px] leading-[1.6]">
            Выполняем полный комплекс независимых экспертиз и исследований. Все заключения имеют статус официального документа и соответствуют ФЗ №73.
          </p>

          <div className="relative max-w-sm pt-4">
            <Search className="absolute left-3 top-1/2 translate-y-[-2px] w-4 h-4 text-slate-400" />
            <Input
              placeholder="Поиск номенклатуры..."
              className="pl-10 h-10 rounded-sm border-[#E2E8F0] bg-white text-[13px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Scale;
            const photo = SERVICE_PHOTOS[service.id];
            return (
              <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
            <Card className="rounded-none bg-white border-[#E2E8F0] shadow-none hover:border-accent hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
                {photo && (
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={photo}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <CardContent className="p-6 space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-primary text-white rounded-sm flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {service.categories.map(cat => (
                        <span key={cat} className="border border-[#E2E8F0] px-2 py-0.5 text-[9px] uppercase font-bold text-accent tracking-widest">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[16px] font-bold text-primary group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-[12px] leading-[1.4] line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-y border-[#F1F5F9] py-3 space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400 font-bold uppercase tracking-wider">Срок:</span>
                      <span className="font-extrabold text-primary">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400 font-bold uppercase tracking-wider">Цена:</span>
                      <span className="font-extrabold text-primary">{service.priceFrom}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-[11px] h-10 rounded-sm" asChild>
                    <Link to="/contacts">Заказать расчет экспертизы</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-500">По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска или свяжитесь с нами.</p>
            <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2 text-primary">Сбросить поиск</Button>
          </div>
        )}
      </div>
    </div>
  );
}
