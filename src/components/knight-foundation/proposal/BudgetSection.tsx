'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { DollarSign, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function BudgetSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const budgetItems = [
    {
      category: 'Hardware & Infrastructure',
      items: [
        { description: 'LaserCube projectors (3 × $1,200)', amount: 3600 },
        { description: 'Raspberry Pi 5s (3 × $150)', amount: 450 },
        { description: 'IR beam counters (3 × $50)', amount: 150 },
        { description: 'Year-1 hosting (3 × $99 × 3)', amount: 891 }
      ]
    },
    {
      category: 'Software Development',
      items: [
        { description: 'WebApp MVP (40 hours × $75)', amount: 3000 },
        { description: 'LMS micro-courses (20 hours × $75)', amount: 1500 },
        { description: 'Analytics & reporting (10 hours × $75)', amount: 750 }
      ]
    },
    {
      category: 'Content & Training',
      items: [
        { description: 'Video tutorials (10 × $200)', amount: 2000 },
        { description: 'Mentor stipends (3 × $500)', amount: 1500 },
        { description: 'Translation (EN/ES/HT)', amount: 1000 }
      ]
    },
    {
      category: 'Marketing & Outreach',
      items: [
        { description: 'Social media ads', amount: 500 },
        { description: 'Event flyers & signage', amount: 300 },
        { description: 'Press kit & media outreach', amount: 400 }
      ]
    }
  ];

  const totalBudget = budgetItems.reduce((total, category) => {
    return total + category.items.reduce((sum, item) => sum + item.amount, 0);
  }, 0);

  return (
    <section id="budget" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className={`w-8 h-8 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Budget
            </h2>
          </div>

          <div className="space-y-8">
            {budgetItems.map((category) => (
              <div key={category.category}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                }`}>
                  {category.category}
                </h3>
                <div className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {category.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                        <span>{item.description}</span>
                      </div>
                      <span className="font-mono">${item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 p-6 rounded-xl border-2 ${
            isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
          } shadow-neon`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Total Budget
              </h3>
              <span className={`text-2xl font-mono font-bold ${
                isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
              }`}>
                ${totalBudget.toLocaleString()}
              </span>
            </div>
            <p className={`mt-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              This budget covers all hardware, software development, content creation, and marketing 
              expenses for the first year. The project is designed to be self-sustaining after the 
              initial investment, with revenue from hosting fees and premium features covering ongoing 
              costs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 