import React from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Cpu, Wrench, Cog, Activity, Disc, Zap, Car, Wind } from 'lucide-react';
import { Service } from '../types';

const iconMap = {
  Cpu,
  Wrench,
  Cog,
  Activity,
  Disc,
  Zap,
  Car,
  Wind,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      <NavLink
        to={`/services/${service.slug}`}
        className="group flex flex-col h-full p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-brand-primary/50 transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-xl bg-bg-muted flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-300">
            <Icon className="w-7 h-7 text-brand-primary" />
          </div>
          <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {service.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
          <span className="text-sm font-semibold text-white">от {service.priceFrom.toLocaleString('ru-RU')} ₽</span>
          <span className="text-xs text-gray-500">{service.duration}</span>
        </div>
      </NavLink>
    </motion.div>
  );
};
