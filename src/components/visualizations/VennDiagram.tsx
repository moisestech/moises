'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface VennSection {
  id: string;
  label: string;
  description: string;
  color: string;
  darkColor: string;
}

const sections: VennSection[] = [
  {
    id: 'community',
    label: 'Community Needs',
    description: 'Local organizations seeking digital presence and impact measurement',
    color: 'rgba(59, 130, 246, 0.7)',
    darkColor: 'rgba(59, 130, 246, 0.4)'
  },
  {
    id: 'technology',
    label: 'Technology Solutions',
    description: 'Modern web platforms and automation tools',
    color: 'rgba(147, 51, 234, 0.7)',
    darkColor: 'rgba(147, 51, 234, 0.4)'
  }
];

const intersection = {
  label: 'Our Solution',
  description: 'Empowering nonprofits with accessible technology and measurable impact',
  items: [
    'User-friendly platform',
    'Automated workflows',
    'Impact tracking',
    'Community engagement'
  ]
};

export default function VennDiagram() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const handleHover = (id: string | null) => {
    setActiveSection(id);
  };

  return (
    <div className="relative h-[500px] w-full">
      {/* Left Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => handleHover('community')}
        onHoverEnd={() => handleHover(null)}
        className={`absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
          activeSection === 'community' ? 'z-20' : 'z-10'
        }`}
        style={{
          backgroundColor: theme === 'dark' ? sections[0].darkColor : sections[0].color,
          opacity: activeSection && activeSection !== 'community' ? 0.5 : 1
        }}
      >
        <div className="text-center p-6">
          <h3 className="font-bold text-white mb-2">{sections[0].label}</h3>
          {activeSection === 'community' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-white"
            >
              {sections[0].description}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Right Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onHoverStart={() => handleHover('technology')}
        onHoverEnd={() => handleHover(null)}
        className={`absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
          activeSection === 'technology' ? 'z-20' : 'z-10'
        }`}
        style={{
          backgroundColor: theme === 'dark' ? sections[1].darkColor : sections[1].color,
          opacity: activeSection && activeSection !== 'technology' ? 0.5 : 1
        }}
      >
        <div className="text-center p-6">
          <h3 className="font-bold text-white mb-2">{sections[1].label}</h3>
          {activeSection === 'technology' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-white"
            >
              {sections[1].description}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Intersection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onHoverStart={() => handleHover('intersection')}
        onHoverEnd={() => handleHover(null)}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 text-center ${
          activeSection === 'intersection' ? 'z-30' : 'z-20'
        }`}
      >
        <h3 className={`font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{intersection.label}</h3>
        {activeSection === 'intersection' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm"
          >
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {intersection.description}
            </p>
            <ul className={`mt-2 space-y-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
            }`}>
              {intersection.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xs"
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 