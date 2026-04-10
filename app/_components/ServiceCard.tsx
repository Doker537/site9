"use client";

import { motion } from "framer-motion";
import Button from "./Button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.05)]"
    >
      <span className="text-4xl">{icon}</span>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-0.5 text-yellow-400">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button href="https://t.me/" external>
          Заказать
        </Button>
      </div>
    </motion.div>
  );
}
