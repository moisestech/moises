import React from 'react';
import { motion } from 'framer-motion';

const manifestos = [
  "TECH SHOULD SERVE PEOPLE",
  "SCREENS SHOULD SPEAK COMMUNITY",
  "ETHICS BEFORE ALGORITHMS",
  "LICENSE → RE-FUEL → REPEAT",
  "BILINGUAL OR IT DIDN'T HAPPEN"
];

export function ManifestoStrip() {
  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...manifestos, ...manifestos].map((text, index) => (
          <div key={index} className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-wider mx-8">
              {text}
            </span>
            <span className="text-[#A4FF4E] text-2xl">▌</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
} 