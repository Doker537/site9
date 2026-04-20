import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export function ConsultationFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:flex fixed bottom-10 right-10 z-50 flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-[300px]"
          >
            <ContactForm isOverlay />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center hover:bg-accent transition-colors duration-300 cursor-pointer"
      >
        {isOpen
          ? <X className="w-6 h-6 text-white" />
          : <MessageCircle className="w-6 h-6 text-white" />
        }
      </motion.button>
    </div>
  );
}
