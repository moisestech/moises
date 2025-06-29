'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface MiamiLocationsImageProps {
  className?: string;
}

// Image data with descriptions
const carouselImages = [
  {
    src: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750277607/ai24/app/ai24-locations-miami_c06kri.png",
    alt: "AI24 Locations in Miami",
    title: "AI24 Miami Network",
    description: "Strategic locations across Miami's art districts for maximum community impact",
    hotspots: [
      { name: "Bakehouse", position: "top-1/4 left-1/4", color: "bg-[#A4FF4E]/60" },
      { name: "Edge Zones", position: "top-1/3 right-1/3", color: "bg-[#3B82F6]/60" },
      { name: "Locust Projects", position: "bottom-1/3 left-1/3", color: "bg-[#EC4899]/60" }
    ]
  },
  {
    src: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299637/ai24/app/ai24-mobile-ai-laboratory_uzh0jo.png",
    alt: "AI24 Mobile AI Laboratory",
    title: "Mobile AI Laboratory",
    description: "Portable innovation lab bringing AI education to communities across Miami",
    hotspots: [
      { name: "Smart Signs", position: "top-1/4 left-1/4", color: "bg-[#A4FF4E]/60" },
      { name: "Learning Stations", position: "top-1/3 right-1/3", color: "bg-[#3B82F6]/60" },
      { name: "Projector Setup", position: "bottom-1/3 left-1/3", color: "bg-[#EC4899]/60" }
    ]
  }
];

export function MiamiLocationsImage({ className = '' }: MiamiLocationsImageProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      setProgress(0);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (8000 / 50)); // Update every 50ms to complete in 8 seconds
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentImageIndex]);

  const currentImage = carouselImages[currentImageIndex];

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative group cursor-pointer">
        {/* Main Image with Carousel */}
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-[500px] object-cover object-center"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        </AnimatePresence>
        
        {/* Sheen Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{
               boxShadow: isDark 
                 ? '0 0 40px rgba(164, 255, 78, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)' 
                 : '0 0 40px rgba(37, 99, 235, 0.4), 0 0 80px rgba(79, 70, 229, 0.2)'
             }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
          <motion.div 
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isDark ? 'bg-[#A4FF4E]/90 text-black' : 'bg-blue-500/90 text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🧪 AI Lab
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
          <motion.div 
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isDark ? 'bg-[#3B82F6]/90 text-white' : 'bg-purple-500/90 text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            📺 Smart Signs
          </motion.div>
        </div>
        
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
          <motion.div 
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isDark ? 'bg-[#EC4899]/90 text-white' : 'bg-indigo-500/90 text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🎓 Classroom
          </motion.div>
        </div>
        
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500">
          <motion.div 
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isDark ? 'bg-[#00FF88]/90 text-black' : 'bg-green-500/90 text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            💻 LMS
          </motion.div>
        </div>

        {/* Interactive Hotspots */}
        <div className="absolute inset-0">
          {currentImage.hotspots.map((hotspot, index) => (
          <motion.div 
              key={hotspot.name}
              className={`absolute ${hotspot.position} w-4 h-4 ${hotspot.color} rounded-full cursor-pointer`}
            whileHover={{ scale: 2, backgroundColor: 'rgba(164, 255, 78, 0.9)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-8 -left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                isDark ? 'bg-[#A4FF4E] text-black' : 'bg-blue-500 text-white'
              }`}>
                  {hotspot.name}
              </div>
            </div>
          </motion.div>
          ))}
              </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImageIndex(index);
                setProgress(0);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-[#A4FF4E] scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Caption */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
      >
        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
          isDark ? 'text-[#A4FF4E]' : 'text-blue-400'
        }`}>
              {currentImage.title}
        </h3>
        <p className="text-white/90 text-sm md:text-base">
              {currentImage.description}
        </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <motion.div
          className="h-full bg-gradient-to-r from-[#A4FF4E] to-[#00FF88]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-[#A4FF4E]/40' : 'bg-blue-400/40'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
} 