import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hand, Map, Globe, Film } from 'lucide-react';

const clinics = [
  {
    title: "Zero-Budget AI Storyboarding",
    venue: "Bakehouse",
    icon: Hand,
    backText: "🤟 ASL"
  },
  {
    title: "Archive-to-AI Mural Mapping",
    venue: "Edge Zones",
    icon: Map,
    backText: "🤟 ASL"
  },
  {
    title: "AI on the Terrace",
    venue: "PAMM",
    icon: Globe,
    backText: "🤟 ASL"
  },
  {
    title: "No-GPU Short-Film Pipeline",
    venue: "NWSA",
    icon: Film,
    backText: "🤟 ASL"
  }
];

export function ClinicsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
      {clinics.map((clinic, index) => (
        <motion.div
          key={clinic.title}
          className="relative h-[300px] perspective-1000"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <motion.div
            className="w-full h-full relative preserve-3d transition-transform duration-500"
            animate={{
              rotateY: hoveredIndex === index ? 180 : 0
            }}
          >
            {/* Front */}
            <div className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col justify-between
              ${hoveredIndex === index ? 'border-[#A4FF4E]' : 'border-gray-800'} 
              border-2 bg-gray-900`}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center mb-4">
                  {React.createElement(clinic.icon, {
                    className: 'w-6 h-6 text-[#A4FF4E]'
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{clinic.title}</h3>
                <p className="text-gray-400">{clinic.venue}</p>
              </div>
              <div className="text-sm text-gray-500">
                Hover to flip
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rounded-xl p-6 flex items-center justify-center
              border-2 border-[#A4FF4E] bg-gray-900 rotate-y-180"
            >
              <div className="text-4xl">{clinic.backText}</div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
} 