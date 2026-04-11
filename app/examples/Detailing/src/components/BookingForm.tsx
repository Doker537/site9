import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  service: z.string().min(1, "Выберите услугу"),
});

type FormData = z.infer<typeof formSchema>;

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 md:p-12 rounded-[2.5rem] glass-panel relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Запись на <span className="text-[#00f0ff]">Услуги</span>
            </h2>
            <p className="text-white/60">
              Оставьте свои данные, и наш менеджер свяжется с вами для уточнения деталей.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 className="w-20 h-20 text-[#00f0ff] mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2">Заявка принята!</h3>
              <p className="text-white/60">Мы свяжемся с вами в ближайшее время.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                  Ваше имя
                </label>
                <input
                  {...register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all"
                  placeholder="Александр"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                  Телефон
                </label>
                <input
                  {...register("phone")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all"
                  placeholder="+7 (999) 000-00-00"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-2">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                  Интересующая услуга
                </label>
                <select
                  {...register("service")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all appearance-none"
                >
                  <option value="" className="bg-[#0a0a0a]">Выберите услугу</option>
                  <option value="ceramic" className="bg-[#0a0a0a]">Керамическое покрытие</option>
                  <option value="polishing" className="bg-[#0a0a0a]">Полировка кузова</option>
                  <option value="cleaning" className="bg-[#0a0a0a]">Химчистка салона</option>
                  <option value="film" className="bg-[#0a0a0a]">Оклейка пленкой</option>
                  <option value="other" className="bg-[#0a0a0a]">Другое / Консультация</option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-2">{errors.service.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest bg-white text-black overflow-hidden rounded-xl transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 mt-8"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00f0ff] to-[#0080ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  {isSubmitting ? "Отправка..." : "Оставить заявку"}
                </span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
