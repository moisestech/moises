import React from 'react';
import { motion } from 'framer-motion';

interface ChromeButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: string;
}

export const ChromeButton: React.FC<ChromeButtonProps> = ({ 
  text, 
  onClick, 
  className = '',
  icon
}) => {
  return (
    <motion.button
      className={`chrome-button ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <i className={`fas fa-${icon} mr-2`} />}
      {text}
    </motion.button>
  );
}; 