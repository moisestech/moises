'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Users, Target, Globe, Sparkles } from 'lucide-react';

const impactMetrics = [
  {
    icon: Users,
    value: "500+",
    label: "Workshop Participants",
    description: "Across 4 skill clinics"
  },
  {
    icon: Target,
    value: "24",
    label: "Community Events",
    description: "In 6 neighborhoods"
  },
  {
    icon: Globe,
    value: "4",
    label: "Partner Institutions",
    description: "Including museums & galleries"
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Open Source",
    description: "Creative Commons licensed"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function ImpactBar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isDark ? 'from-black via-black to-[#1a1a1a]' : 'from-white via-gray-50 to-gray-100'
      } z-0`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] ${
          isDark ? 'opacity-10' : 'opacity-5'
        }`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${
          isDark ? 'from-[#A4FF4E]/5' : 'from-blue-500/5'
        } to-transparent`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${
                  isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
                } shadow-neon relative overflow-hidden group`}
              >
                <div className={`w-12 h-12 mb-4 rounded-full ${
                  isDark ? 'bg-[#A4FF4E]/20' : 'bg-blue-100'
                } flex items-center justify-center`}>
                  {React.createElement(metric.icon, {
                    className: isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                  })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                }`}>
                  {metric.value}
                </div>
                <h3 className={`text-lg font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {metric.label}
                </h3>
                <p className={`${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 