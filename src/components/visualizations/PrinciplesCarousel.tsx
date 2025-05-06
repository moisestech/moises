'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { BookOpen, Wrench, FileText, BarChart, Share2, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface Principle {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const principles: Principle[] = [
  {
    title: "Teach First, Buy Later",
    description: "We prototype workflows with free or EDU tiers. If adoption > 60% we upgrade; if not, we pivot before sunk cost.",
    icon: BookOpen,
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Swap-ability Over Spec-Sheet-Lust",
    description: "We choose gear with standard connectors & open APIs; any part can be replaced without rewriting the stack.",
    icon: Wrench,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Budget for Documentation",
    description: "5-10% of every grant line-item funds video walk-throughs, READMEs and captioned screen-casts.",
    icon: FileText,
    color: "from-pink-500 to-red-500"
  },
  {
    title: "Transparent KPI Loops",
    description: "Pop-up TVs + our React dashboard show live metrics at each event. Participants see their impact grow, funders see ROI in real time.",
    icon: BarChart,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "License-back to Community",
    description: "Every template, prompt-library or signage-widget we build goes out under a Creative Commons or tiered white-label license.",
    icon: Share2,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Community-Driven Development",
    description: "We involve our community in every step of the process, from ideation to implementation.",
    icon: Users,
    color: "from-yellow-500 to-green-500"
  }
];

export default function PrinciplesCarousel() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % principles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const navigate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % principles.length;
      }
      return prev === 0 ? principles.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const principle = principles[currentIndex];

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate(-1)}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate(1)}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={`absolute inset-0 flex items-center justify-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              <div className="text-center px-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center`}
                >
                  {React.createElement(principle.icon, {
                    className: "w-12 h-12 text-white"
                  })}
                </motion.div>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold mb-4"
                >
                  {principle.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-xl max-w-2xl mx-auto ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {principle.description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {principles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                    : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 