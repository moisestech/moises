import React from 'react';
import { motion } from 'framer-motion';

interface MicroMotifProps {
  type: 'wiggle' | 'binary' | 'plusMinus';
  className?: string;
}

const motifs = {
  wiggle: "M0,10 Q5,0 10,10 T20,10",
  binary: "M0,0 L10,20 M10,0 L20,20 M20,0 L30,20",
  plusMinus: "M0,10 H20 M10,0 V20"
};

export const MicroMotif: React.FC<MicroMotifProps> = ({ type, className = '' }) => {
  const path = motifs[type];
  const animationClass = `motif-${type}`;

  return (
    <motion.svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      className={`${animationClass} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </motion.svg>
  );
}; 