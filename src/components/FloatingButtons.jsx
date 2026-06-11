import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/966554202751"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all group"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
      </motion.a>

      <motion.a
        href="tel:0554202751"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#17382f] text-white p-4 rounded-full shadow-xl hover:bg-[#0f2a24] transition-all group"
      >
        <Phone size={28} className="group-hover:rotate-12 transition-transform" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
