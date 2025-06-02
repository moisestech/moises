import React from 'react';
import { motion } from 'framer-motion';

interface NeonTextProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-6xl'
};

export const NeonText: React.FC<NeonTextProps> = ({ 
  text, 
  className = '', 
  size = 'md' 
}) => {
  return (
    <motion.h2
      className={`neon-glow ${sizeClasses[size]} font-bold ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h2>
  );
}; 