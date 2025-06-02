import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "120+", label: "Learners" },
  { value: "6", label: "Screens" },
  { value: "3", label: "Venues" },
  { value: "100%", label: "Bilingual" }
];

export function ImpactBar() {
  return (
    <div className="sticky top-0 bg-black/80 backdrop-blur-sm z-30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-[#A4FF4E] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 