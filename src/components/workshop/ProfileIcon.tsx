'use client';

import { motion } from 'framer-motion';

interface ProfileIconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colors = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-amber-500',
  'bg-orange-500',
  'bg-violet-500',
  'bg-indigo-500',
  'bg-rose-500',
  'bg-lime-500',
];

const sizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
};

export function ProfileIcon({ name, size = 'md', className = '' }: ProfileIconProps) {
  // Generate a consistent color based on the name
  const getColorIndex = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % colors.length;
  };

  const colorClass = colors[getColorIndex(name)];
  const sizeClass = sizes[size];
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${colorClass} ${sizeClass} ${className} rounded-full flex items-center justify-center text-white font-medium`}
    >
      {initials}
    </motion.div>
  );
} 