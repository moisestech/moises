import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '120+', label: 'Workshop Participants' },
  { value: '4', label: 'Free Clinics' },
  { value: '3', label: 'Partner Venues' },
  { value: '100%', label: 'Bilingual Content' }
];

export function KFMetricsBar() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 10 }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px #A4FF4E' }}
            className="relative px-8 py-6 rounded-2xl border-2 border-[#A4FF4E] bg-black/80 text-center cursor-pointer group overflow-hidden"
          >
            <div className="text-3xl font-extrabold text-[#A4FF4E] mb-1 tracking-widest">
              {metric.value}
            </div>
            <div className="text-base text-gray-200 font-mono mb-1">
              {metric.label}
            </div>
            {/* ASCII underline ticker */}
            <motion.div
              className="text-[#A4FF4E]/60 text-xs font-mono mt-2"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            >
              {'======' + ' '.repeat(index * 2) + '======' }
            </motion.div>
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 60% 40%, #A4FF4E33 0%, transparent 80%)',
                filter: 'blur(24px)',
                opacity: 0.5,
              }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 