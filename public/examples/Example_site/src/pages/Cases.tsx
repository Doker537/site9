import { CASES } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

export default function Cases() {
  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="container mx-auto px-10">
        <div className="max-w-3xl mb-12 space-y-4">
          <Badge className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase rounded-none">Наши кейсы</Badge>
          <h1 className="text-[36px] font-extrabold tracking-tight text-primary leading-tight">Результаты экспертиз</h1>
          <p className="text-muted-foreground text-[16px] leading-[1.6]">Разбираем реальные задачи, в которых наша экспертная работа помогла добиться справедливости.</p>
        </div>

        <div className="space-y-6">
          {CASES.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-[#E2E8F0] bg-white rounded-none shadow-none group transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                  {/* Photo */}
                  <div className="lg:col-span-4 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/case-${item.id}/600/800`}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Category badge over photo */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-5">
                      <Badge variant="outline" className="rounded-none border-accent text-accent font-bold text-[9px] uppercase tracking-widest bg-transparent">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 flex flex-col">
                    {/* Title */}
                    <div className="px-10 pt-8 pb-6 border-b border-[#E2E8F0]">
                      <h3 className="text-[22px] font-extrabold text-primary leading-tight">{item.title}</h3>
                    </div>

                    {/* Body */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_260px]">
                      {/* Problem + Solution */}
                      <div className="px-10 py-8 space-y-7 border-r border-[#E2E8F0]">
                        {/* Problem — dramatic */}
                        <div className="relative">
                          <span className="absolute -top-3 -left-1 text-[72px] text-primary/8 font-black leading-none select-none pointer-events-none">"</span>
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-400 mb-2">Ситуация клиента</p>
                          <p className="text-[15px] font-semibold text-slate-800 leading-[1.65] italic">
                            {item.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="pl-4 border-l-[3px] border-accent">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-accent mb-2">Наш подход</p>
                          <p className="text-[14px] text-primary font-medium leading-relaxed">
                            {item.solution}
                          </p>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="bg-primary px-8 py-8 flex flex-col justify-center">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">Итог дела</p>
                        <p className="text-white font-extrabold text-[16px] leading-snug">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
