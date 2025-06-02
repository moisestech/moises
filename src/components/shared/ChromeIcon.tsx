import React from 'react';
import { motion } from 'framer-motion';

interface ChromeIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export const ChromeIcon: React.FC<ChromeIconProps> = ({ 
  icon, 
  size = 24, 
  className = '' 
}) => {
  return (
    <motion.div
      className={`chrome-icon ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className={`fas fa-${icon}`} style={{ fontSize: size }} />
    </motion.div>
  );
}; 