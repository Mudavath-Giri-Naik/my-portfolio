'use client';
import { motion } from 'framer-motion';

export default function DSAPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        Added soon......
      </motion.h1>
    </div>
  );
} 