import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/constants";
import { motion } from "motion/react";

export default function Blog() {
  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="container mx-auto px-10">
        <div className="max-w-3xl mb-12 space-y-4">
          <Badge className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase rounded-none">Блог бюро</Badge>
          <h1 className="text-[36px] font-extrabold tracking-tight text-primary leading-tight">Профессиональные материалы</h1>
          <p className="text-muted-foreground text-[16px] leading-[1.6]">Делимся экспертным опытом, разбираем сложные юридические кейсы и даем технические рекомендации.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="flex flex-col"
            >
              <Card className="rounded-none border-[#E2E8F0] shadow-none bg-white overflow-hidden group transition-shadow duration-300 hover:shadow-lg flex flex-col">
                {/* Fixed-height image */}
                <div className="h-[200px] w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={`https://picsum.photos/seed/blog-${post.id}/800/600`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <CardHeader className="p-6 space-y-3 flex-shrink-0">
                  {/* Date + author row — truncated so long names don't wrap */}
                  <div className="flex justify-between items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <span className="flex items-center shrink-0">
                      <Clock className="w-3 h-3 mr-1 opacity-50" /> {post.date}
                    </span>
                    <span className="flex items-center min-w-0">
                      <User className="w-3 h-3 mr-1 opacity-50 shrink-0" />
                      <span
                        className="truncate cursor-pointer hover:text-primary transition-colors"
                        title={post.author}
                      >
                        {post.author}
                      </span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="rounded-none text-[9px] font-bold uppercase text-accent border-accent tracking-widest">{post.category}</Badge>
                    {/* Clamped to 2 lines — prevents height differences */}
                    <CardTitle className="text-[18px] font-bold text-primary group-hover:text-accent transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </div>

                  <CardDescription className="text-[13px] leading-[1.6] line-clamp-2 text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0 mt-auto">
                  <Button variant="ghost" className="p-0 h-auto font-bold text-[11px] uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                    Читать материал <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
