import { motion } from 'motion/react';

const HEARTS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  dx: (Math.random() - 0.5) * 140,
  dy: -(55 + Math.random() * 110),
  rotate: (Math.random() - 0.5) * 55,
  size: 10 + Math.floor(Math.random() * 8),
  delay: i * 0.06,
  color: `hsl(${335 + Math.random() * 25}, 78%, ${60 + Math.random() * 16}%)`,
}));

export default function HeartsBurst({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <>
      {HEARTS.map((h) => (
        <motion.span
          key={h.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0.2 }}
          animate={{ opacity: 0, x: h.dx, y: h.dy, scale: 1, rotate: h.rotate }}
          transition={{ duration: 1.2, delay: h.delay, ease: [0.2, 0.8, 0.3, 1] }}
          className="absolute pointer-events-none select-none bottom-1/2 left-1/2 leading-none"
          style={{ fontSize: h.size, color: h.color, zIndex: 50 }}
        >
          ♥
        </motion.span>
      ))}
    </>
  );
}
