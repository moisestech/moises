'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface TechItem {
  name: string;
  description: string;
  category: string;
  icon: string;
}

const techData: TechItem[] = [
  {
    name: 'Next.js',
    description: 'React framework for production-grade applications',
    category: 'Frontend',
    icon: '⚛️'
  },
  {
    name: 'TypeScript',
    description: 'Type-safe JavaScript for better development',
    category: 'Language',
    icon: '📝'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    category: 'Styling',
    icon: '🎨'
  },
  {
    name: 'Framer Motion',
    description: 'Production-ready animation library',
    category: 'Animation',
    icon: '✨'
  },
  {
    name: 'PostgreSQL',
    description: 'Robust relational database',
    category: 'Database',
    icon: '🗄️'
  },
  {
    name: 'Prisma',
    description: 'Type-safe database ORM',
    category: 'Backend',
    icon: '🔗'
  },
  {
    name: 'Vercel',
    description: 'Cloud platform for static sites and serverless functions',
    category: 'Deployment',
    icon: '☁️'
  },
  {
    name: 'GitHub Actions',
    description: 'CI/CD automation',
    category: 'DevOps',
    icon: '🔄'
  }
];

const categories = Array.from(new Set(techData.map(item => item.category)));

export default function TechStack() {
  const { theme } = useTheme();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className={`p-6 rounded-lg ${
            theme === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{category}</h3>
          <div className="space-y-4">
            {techData
              .filter(item => item.category === category)
              .map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.1) }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>{item.name}</h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 