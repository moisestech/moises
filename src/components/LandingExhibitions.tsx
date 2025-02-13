'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      <div className="w-full px-6 pb-10">
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

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: position }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {exhibitions.map((exhibition, index) => (
              <div
                key={exhibition.id}
                className="flex-none w-[580px] flex flex-col"
              >
                <div className="w-full relative mb-4">
                  <div className="w-full relative pt-[56.25%]">
                    <Image
                      src={exhibition.imageUrl}
                      alt={exhibition.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-none">
                  <h3 className="text-xl md:text-2xl font-['MoMA_Sans'] font-bold">
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
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
