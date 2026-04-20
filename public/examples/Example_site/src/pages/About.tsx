import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="py-12 bg-[#F8FAFC] space-y-24">
      {/* Intro */}
      <section className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">
          <div className="space-y-8 text-left">
            <Badge className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase rounded-none">О компании</Badge>
            <h1 className="text-[42px] font-extrabold tracking-tight text-primary leading-tight">Лидеры рынка <br /> независимой экспертизы</h1>
            <p className="text-[16px] text-muted-foreground leading-relaxed max-w-xl">
              Мы — команда профессиональных экспертов, юристов и оценщиков.
              Наша миссия — предоставление максимально точных и объективных данных для разрешения споров любой сложности.
            </p>
            <div className="grid grid-cols-2 gap-8 text-left border-t border-[#E2E8F0] pt-8">
              <div className="space-y-1">
                <p className="text-[32px] font-black text-primary">12+</p>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Лет работы</p>
              </div>
              <div className="space-y-1">
                <p className="text-[32px] font-black text-primary">30+</p>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Штатных экспертов</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-white border border-[#E2E8F0] overflow-hidden p-2">
              <img
                src="https://picsum.photos/seed/office-expert/800/1000"
                alt="Our Office"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 border-y border-[#E2E8F0]">
        <div className="container mx-auto px-10">
          <div className="text-left mb-12 space-y-2">
            <h2 className="text-[24px] font-extrabold text-primary uppercase tracking-tight">Наши основные принципы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0] divide-x divide-[#E2E8F0]">
            {[
              { title: 'Независимость', desc: 'Мы не зависим от сторон спора и государственных структур.', icon: ShieldCheck },
              { title: 'Квалификация', desc: 'У каждого эксперта есть все необходимые допуски и сертификаты.', icon: Award },
              { title: 'Доказательность', desc: 'Используем только современное поверенное оборудование.', icon: BookOpen },
            ].map((v, i) => (
              <div key={i} className="p-10 space-y-4 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 bg-primary text-white flex items-center justify-center">
                  <v.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[18px] font-bold text-primary">{v.title}</h4>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="container mx-auto px-10 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-[#E2E8F0] pb-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-[24px] font-extrabold text-primary uppercase">Лицензии и допуски</h2>
            <p className="text-muted-foreground text-[14px]">Вся наша деятельность лицензирована. Мы состоим в профильных СРО.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-[3/4] bg-white border border-[#E2E8F0] overflow-hidden group relative p-1.5">
              <img
                src={`https://picsum.photos/seed/license-${i}/400/600`}
                alt={`License ${i}`}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4 bg-white p-3 border border-[#E2E8F0] shadow-sm translate-y-2 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Документ №{i}000-ФЗ</p>
                <p className="text-[9px] text-muted-foreground">Действителен до 2029 г.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
