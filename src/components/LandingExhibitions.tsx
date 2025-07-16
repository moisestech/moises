'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { exhibitions } from '@/constants/exhibitions';

export default function LandingExhibitions() {
  const [position, setPosition] = useState(0);
  const slideWidth = 580; // Width of each slide
  const gap = 24; // Gap between slides

  const nextSlide = () => {
    setPosition((prev) =>
      Math.max(
        -(exhibitions.length - 2) * (slideWidth + gap),
        prev - (slideWidth + gap)
      )
    );
  };

  const prevSlide = () => {
    setPosition((prev) => Math.min(0, prev + (slideWidth + gap)));
  };

  return (
    <section id="exhibitions">
      <div className="w-full px-2 sm:px-4 md:px-6 pb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-['MoMA_Sans'] font-bold">
            Exhibitions
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              disabled={position === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              disabled={
                position <= -(exhibitions.length - 2) * (slideWidth + gap)
              }
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto md:overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: position }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ minWidth: 0 }}
          >
            {exhibitions.map((exhibition, index) => (
              <div
                key={exhibition.id}
                className="flex-none w-[calc(100vw-1rem)] sm:w-[420px] md:w-[580px] flex flex-col"
              >
                <motion.a
                  href={exhibition.link || '#'}
                  target={exhibition.link && exhibition.link.startsWith('http') ? '_blank' : undefined}
                  rel={exhibition.link && exhibition.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="relative block group focus:outline-none"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  tabIndex={0}
                >
                  <motion.div
                    whileHover={{ scale: 1.04, boxShadow: '0 0 32px #22d3ee', borderColor: '#22d3ee' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="aspect-video relative overflow-hidden border-2 border-transparent group-hover:border-cyan-400 transition-all duration-300"
                  >
                    <Image
                      src={exhibition.imageUrl}
                      alt={exhibition.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {exhibition.link && exhibition.link.startsWith('http') && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/60 rounded-full px-2 py-1">
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs text-cyan-200 hidden group-hover:inline">External</span>
                      </div>
                    )}
                    {/* Animated gradient pulse overlay */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle at 60% 40%, #22d3ee33 0%, transparent 80%)',
                        filter: 'blur(24px)',
                        opacity: 0.3,
                      }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    />
                  </motion.div>
                  <div className="py-4 flex flex-col gap-2 items-start">
                    <h3 className="font-['MoMA_Sans'] font-bold text-3xl mb-2 text-left">
                      {exhibition.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="font-bold">{exhibition.date}</span>
                      {exhibition.location && (
                        <span className="text-gray-600 dark:text-gray-400">
                          {exhibition.location}
                        </span>
                      )}
                      {/* {exhibition.description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                          {exhibition.description}
                        </p>
                      )} */}
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
