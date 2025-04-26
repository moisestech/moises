'use client';

import Day1Session1Introduction from '@/components/workshop/Day1Session1Introduction';
import { motion } from 'framer-motion';

const hoverEffect = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut"
  }
}

const hoverCardStyle = "hover:shadow-2xl hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-200"

export default function IntroductionPage() {
  return <Day1Session1Introduction />;
} 