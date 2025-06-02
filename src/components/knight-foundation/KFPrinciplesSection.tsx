import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target } from 'lucide-react';

const principles = [
  {
    title: 'Human-Centric',
    description: "Technology that amplifies human efforts, not replaces them",
    icon: Heart,
    ascii: '<3'
  },
  {
    title: 'Community-Driven',
    description: "Built with and for Miami's creative ecosystem",
    icon: Users,
    ascii: '(@)'
  },
  {
    title: 'Sustainable Impact',
    description: "Self-sustaining model through license revenue",
    icon: Target,
    ascii: '->'
  }
];

export function KFPrinciplesSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Principles</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Core values that guide our approach
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px #A4FF4E' }}
            className="relative p-6 rounded-xl border-2 border-transparent bg-gray-900/80 group overflow-hidden"
            style={{
              borderImage: 'linear-gradient(120deg, #A4FF4E 0%, #3B82F6 100%) 1',
            }}
          >
            {/* Animated ASCII/pixel-art motif */}
            <motion.div
              className="absolute top-4 right-4 text-[#A4FF4E]/30 text-3xl font-mono select-none pointer-events-none"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              {principle.ascii}
            </motion.div>
            <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
              {React.createElement(principle.icon, {
                className: 'text-[#A4FF4E] w-7 h-7 drop-shadow-lg'
              })}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#A4FF4E] transition-colors">
              {principle.title}
            </h3>
            <p className="text-gray-300">
              {principle.description}
            </p>
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(120deg, #A4FF4E22 0%, #3B82F622 100%)',
                filter: 'blur(32px)',
                opacity: 0.5,
              }}
              animate={{ opacity: [0.5, 0.7, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 