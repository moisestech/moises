import React from 'react';
import { motion, useInView } from 'framer-motion';

const milestones = [
  "Finalize UI skin & order Pi kits",
  "Install 3 pilot screens • soft launch",
  "First 2 clinics • stream & archive",
  "Ship UX tweaks • up to 6 screens",
  "Run last 2 clinics • live KPI dash",
  "Open-source repo • first paid license"
];

export function TimelineVertical() {
  // Create refs and inView states for each milestone
  const refs = React.useMemo(() => milestones.map(() => React.createRef<HTMLDivElement>()), []);
  const inViews = refs.map(ref => useInView(ref, { once: true }));

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#A4FF4E]/20" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              ref={refs[index]}
              initial={{ opacity: 0, x: -20 }}
              animate={inViews[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-16 mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-6 w-4 h-4 rounded-full bg-[#A4FF4E] transform -translate-x-1/2 mt-2" />

              {/* Content */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#A4FF4E] font-bold">0{index + 1}</span>
                  <h3 className="text-xl font-bold text-white">
                    {milestone}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 