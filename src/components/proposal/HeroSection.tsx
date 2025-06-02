import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(164,255,78,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(164,255,78,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="text-[#A4FF4E]">AI24</span> Community Screens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Plug-n-play digital signage that puts community first. 
            Built for accessibility, powered by open source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#impact"
              className="px-8 py-4 bg-[#A4FF4E] text-black font-bold rounded-lg hover:bg-[#A4FF4E]/90 transition-colors"
            >
              View Impact
            </a>
            <a
              href="#timeline"
              className="px-8 py-4 border-2 border-[#A4FF4E] text-[#A4FF4E] font-bold rounded-lg hover:bg-[#A4FF4E]/10 transition-colors"
            >
              See Timeline
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
} 