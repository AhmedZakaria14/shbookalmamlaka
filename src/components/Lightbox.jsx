import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[110]"
          onClick={onClose}
        >
          <X size={32} />
        </motion.button>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="relative max-w-4xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
