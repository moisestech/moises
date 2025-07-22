'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export function DecorativeBackground() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main gradient background */}
      <div 
        className={`absolute inset-0 opacity-30 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-[#4D9DE0]/20 via-[#E041B5]/10 to-[#41E079]/20' 
            : 'bg-gradient-to-br from-[#4D9DE0]/10 via-[#E041B5]/5 to-[#41E079]/10'
        }`}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${
          theme === 'dark' 
            ? 'bg-[#4D9DE0]/20' 
            : 'bg-[#4D9DE0]/10'
        }`}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full ${
          theme === 'dark' 
            ? 'bg-[#E041B5]/20' 
            : 'bg-[#E041B5]/10'
        }`}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className={`absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full ${
          theme === 'dark' 
            ? 'bg-[#41E079]/20' 
            : 'bg-[#41E079]/10'
        }`}
      />

      {/* Glass effect overlay */}
      <div 
        className={`absolute inset-0 backdrop-blur-[100px] ${
          theme === 'dark' 
            ? 'bg-black/5' 
            : 'bg-white/5'
        }`}
      />

      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 opacity-[0.03] ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]'
        } bg-[size:4rem_4rem]`}
      />

      {/* Animated noise texture */}
      <div 
        className={`absolute inset-0 opacity-[0.02] ${
          theme === 'dark' 
            ? 'bg-[url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")]' 
            : 'bg-[url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")]'
        }`}
      />
    </div>
  )
} 