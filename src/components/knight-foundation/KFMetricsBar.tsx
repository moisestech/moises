import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeonText } from '../shared/NeonText';

const metrics = [
  { value: '120+', label: 'Workshop Participants', info: "Miami's creative community, engaged and growing!" },
  { value: '4', label: 'Free Clinics', info: 'Zero-cost, high-impact learning sprints.' },
  { value: '3', label: 'Partner Venues', info: "From Little Haiti to Downtown, we're everywhere." },
  { value: '100%', label: 'Bilingual Content', info: 'English & Spanish, no one left behind.' }
];

export function KFMetricsBar() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#A4FF4E] drop-shadow-lg mb-2">
          Pilot Impact at a Glance
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Our pilot isn't just a plan—it's already making waves. Here's what Knight's support is powering in Miami:
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, type: 'spring', stiffness: 200, damping: 10 }}
            whileHover={{ scale: 1.12, boxShadow: '0 0 48px #A4FF4E', borderColor: '#A4FF4E' }}
            className="relative px-8 py-6 rounded-2xl border-2 border-[#A4FF4E] bg-black/80 text-center cursor-pointer group overflow-hidden card-neon"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ transition: 'border-color 0.3s' }}
          >
            <div className="mb-1">
              <NeonText text={metric.value} size="sm" />
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
            {/* Tooltip on hover */}
            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 text-[#A4FF4E] px-4 py-2 rounded-lg shadow-lg text-sm z-20 border border-[#A4FF4E]/40"
                >
                  {metric.info}
                </motion.div>
              )}
            </AnimatePresence>
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