'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GradientBannerProps {
  seed?: string;
  className?: string;
}

const gradients = [
  'from-blue-500 via-purple-500 to-pink-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-violet-500 via-indigo-500 to-blue-500',
  'from-rose-500 via-pink-500 to-purple-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-lime-500 via-green-500 to-emerald-500',
  'from-yellow-500 via-amber-500 to-orange-500',
];

export function GradientBanner({ seed, className = '' }: GradientBannerProps) {
  const [gradientClass, setGradientClass] = useState(gradients[0]);

  useEffect(() => {
    // Generate a consistent gradient index based on the seed
    const getGradientIndex = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return Math.abs(hash) % gradients.length;
    };

    const gradientIndex = seed ? getGradientIndex(seed) : Math.floor(Math.random() * gradients.length);
    setGradientClass(gradients[gradientIndex]);
  }, [seed]);

  return (
    <div className="relative h-32 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`h-full w-full bg-gradient-to-r ${gradientClass} ${className}`}
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
} 