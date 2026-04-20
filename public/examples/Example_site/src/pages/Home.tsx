import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, Zap, Scale, Building2, Car, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES, BLOG_POSTS, CASES } from '@/constants';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Building2,
  Car,
  TrendingUp,
};

const CASE_IMAGES: Record<string, string> = {
  '1': 'https://picsum.photos/seed/concrete-building-expert/600/250',
  '2': 'https://picsum.photos/seed/car-road-accident/600/250',
  '3': 'https://picsum.photos/seed/warehouse-storage-water/600/250',
  '4': 'https://picsum.photos/seed/field-land-survey/600/250',
};

export default function Home() {
  const [blogIndex, setBlogIndex] = useState(0);
  const postsToShow = 3;

  const handleNextBlog = () => {
    setBlogIndex((prev) => (prev + 1) % BLOG_POSTS.length);
  };

  const handlePrevBlog = () => {
    setBlogIndex((prev) => (prev - 1 + BLOG_POSTS.length) % BLOG_POSTS.length);
  };

  const visiblePosts = Array.from({ length: postsToShow }).map((_, i) => {
    return BLOG_POSTS[(blogIndex + i) % BLOG_POSTS.length];
  });

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] overflow-x-hidden">
      {/* Hero banner */}
      <div className="relative h-[260px] lg:h-[340px] overflow-hidden">
        <img
          src="https://picsum.photos/seed/expert-bureau-office-hero/1600/700"
          alt="Бюро Экспертиз"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-10 space-y-3">
            <p className="text-accent text-[11px] font-bold uppercase tracking-[0.3em]">Независимое экспертное бюро</p>
            <h2 className="text-white font-extrabold text-[28px] lg:text-[38px] leading-tight max-w-xl">
              Профессиональная экспертиза<br />для защиты ваших интересов
            </h2>
            <p className="text-white/70 text-[14px] max-w-md leading-relaxed">
              Более 12 лет. Более 5 200 заключений. 98% успешных дел.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 lg:px-10 py-[30px] lg:py-[60px] grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-20">
        {/* Left Column: Hero & Stats */}
        <section className="flex flex-col justify-between space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-[36px] sm:text-[42px] font-heading font-extrabold leading-[1.05] text-primary break-words hyphens-auto">
              Профессиональная независимая экспертиза
            </h1>
            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-muted-foreground max-w-md">
              Более 12 лет обеспечиваем правовую и техническую поддержку в сложнейших судебных спорах.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-[15px]">
            {[
              { num: '12+', label: 'Лет на рынке' },
              { num: '5.2k', label: 'Заключений' },
              { num: '24', label: 'Экспертов' },
              { num: '98%', label: 'Успешных дел' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-[15px] border-l-[3px] border-accent shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className="text-[24px] font-extrabold text-primary">{stat.num}</div>
                <div className="text-[11px] font-semibold uppercase text-muted-foreground tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {SERVICES.slice(0, 4).map((service, index) => {
            const Icon = iconMap[service.icon] || Scale;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 28 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full bg-white border border-[#E2E8F0] rounded-none hover:border-accent shadow-none group transition-all duration-300 overflow-hidden">
                  <CardContent className="p-[25px] flex flex-col h-full justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase text-accent mb-2 tracking-widest">{service.categories[0]}</div>
                      <Link to="/services" className="block">
                        <h4 className="text-[18px] font-bold text-primary mb-2.5 hover:text-accent transition-colors cursor-pointer">{service.title}</h4>
                      </Link>
                      <p className="text-muted-foreground text-[13px] leading-[1.4] mb-4">{service.description}</p>
                    </div>

                    <div className="mt-[15px] pt-[15px] border-t border-[#E2E8F0] flex justify-between items-center">
                      <span className="text-[14px] font-extrabold text-primary whitespace-nowrap">от {service.priceFrom}</span>
                      <Link to={`/services`} className="text-[12px] font-bold text-accent uppercase tracking-wider hover:underline">
                        Подробнее →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </section>
      </main>

      {/* Infinite Blog Carousel Section */}
      <section className="py-20 lg:py-32 bg-white border-t overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] leading-none">Блог и новости</h2>
              <h3 className="text-[32px] font-heading font-extrabold text-primary leading-tight">Актуальные статьи и исследования</h3>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevBlog}
                className="rounded-none border-primary hover:bg-primary hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextBlog}
                className="rounded-none border-primary hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post, idx) => (
                <motion.div
                  key={`${post.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 220, damping: 26 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="rounded-none border-[#E2E8F0] shadow-none hover:shadow-lg overflow-hidden h-full group transition-shadow duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/blog-slider-${post.id}/800/500`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="outline" className="rounded-none text-[9px] font-bold uppercase text-accent border-accent">{post.category}</Badge>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{post.date}</span>
                      </div>
                      <Link to="/blog">
                        <CardTitle className="text-[18px] font-bold text-primary hover:text-accent transition-colors leading-snug cursor-pointer">
                          {post.title}
                        </CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-[13px] text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <Link to="/blog" className="text-[12px] font-bold text-primary uppercase tracking-wider flex items-center hover:text-accent transition-colors">
                        Подробнее <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-24 bg-[#F8FAFC] border-t">
        <div className="container mx-auto px-10">
          <div className="text-left mb-16 space-y-4">
            <h2 className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Наши кейсы</h2>
            <h3 className="text-[32px] font-heading font-extrabold text-primary">Результаты нашей работы</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASES.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 28 }}
                className="group"
              >
                <Card className="rounded-none border-[#E2E8F0] shadow-sm hover:shadow-xl transition-shadow duration-500 bg-white h-full overflow-hidden">
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={CASE_IMAGES[item.id] || `https://picsum.photos/seed/case-home-${item.id}/600/250`}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardHeader className="p-8">
                    <Badge className="w-fit rounded-none mb-4 bg-accent text-white border-none text-[10px] uppercase font-bold tracking-widest leading-none py-1">
                      {item.category}
                    </Badge>
                    <CardTitle className="text-[20px] font-bold text-primary leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 space-y-4">
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Задача:</span>
                      <p className="text-[13px] text-slate-700">{item.challenge}</p>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Решение:</span>
                      <p className="text-[13px] text-slate-700 font-medium">{item.solution}</p>
                    </div>
                    <div className="border-l-[3px] border-accent pl-4 py-1.5 mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent block mb-1">Итог</span>
                      <p className="text-[14px] font-bold text-primary leading-snug">{item.result}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-10 font-bold uppercase text-[12px] h-12">
              <Link to="/cases">Смотреть все кейсы</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4 text-left">
                <h2 className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Почему выбирают нас</h2>
                <h3 className="text-[32px] font-extrabold text-primary leading-tight">Ваш надежный партнер <br /> в мире экспертизы</h3>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Независимость и объективность', desc: 'Строго соблюдаем закон об экспертной деятельности №73-ФЗ.', icon: ShieldCheck },
                  { title: 'Квалифицированные кадры', desc: 'Все эксперты имеют профильное образование и стаж от 10 лет.', icon: Users },
                  { title: 'Оперативность', desc: 'Приступаем к работе в день обращения. Собственные мобильные лаборатории.', icon: Zap },
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="bg-primary p-2.5 rounded-sm h-fit shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold mb-1.5 text-primary">{item.title}</h4>
                      <p className="text-muted-foreground text-[14px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video">
              <img
                src="https://picsum.photos/seed/expert-lab-analysis/1200/800"
                alt="Laboratory"
                className="w-full h-full object-cover border border-[#E2E8F0]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
