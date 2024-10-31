import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center p-4"
      role="status"
    >
      <div className="w-8 h-8 border-4 border-[#FF6B35] border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </motion.div>
  );
}