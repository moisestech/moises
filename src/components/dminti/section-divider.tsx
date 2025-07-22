'use client'

import { motion, easeInOut, easeOut } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export function SectionDivider() {
  const { theme } = useTheme()

  // Animation variants for shapes
  const shapeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  }

  // Floating animation for shapes
  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut
    }
  }

  return (
    <div className="relative w-full h-32 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black/95 to-black/95' 
          : 'bg-gradient-to-b from-white/95 to-white/95'
      }`} />

      {/* Glass effect container */}
      <div className={`absolute inset-0 backdrop-blur-xl ${
        theme === 'dark' 
          ? 'bg-black/20 border-y border-white/10' 
          : 'bg-white/20 border-y border-black/10'
      }`} />

      {/* Abstract Glass House */}
      <div className="absolute inset-0">
        {/* Base structure - transparent rectangle */}
        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 ${
            theme === 'dark' 
              ? 'bg-white/5 border border-white/20' 
              : 'bg-black/5 border border-black/20'
          } backdrop-blur-sm mix-blend-overlay`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={shapeVariants}
          animate={floatingAnimation}
          style={{ transformOrigin: 'center' }}
        />

        {/* Roof - triangle */}
        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-16 w-0 h-0 ${
            theme === 'dark' 
              ? 'border-l-[60px] border-r-[60px] border-b-[40px] border-l-transparent border-r-transparent border-b-white/20' 
              : 'border-l-[60px] border-r-[60px] border-b-[40px] border-l-transparent border-r-transparent border-b-black/20'
          } mix-blend-overlay`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={shapeVariants}
          animate={{
            ...floatingAnimation,
            y: [0, -15, 0],
            rotate: [0, -5, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: easeInOut
            }
          }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Windows - overlapping circles */}
        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-x-12 w-16 h-16 rounded-full ${
            theme === 'dark' 
              ? 'bg-[#4D9DE0]/20 border border-[#4D9DE0]/30' 
              : 'bg-[#4D9DE0]/10 border border-[#4D9DE0]/20'
          } backdrop-blur-sm mix-blend-soft-light`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={shapeVariants}
          animate={{
            ...floatingAnimation,
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: easeInOut
            }
          }}
          style={{ transformOrigin: 'center' }}
        />

        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-12 w-16 h-16 rounded-full ${
            theme === 'dark' 
              ? 'bg-[#E041B5]/20 border border-[#E041B5]/30' 
              : 'bg-[#E041B5]/10 border border-[#E041B5]/20'
          } backdrop-blur-sm mix-blend-soft-light`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={shapeVariants}
          animate={{
            ...floatingAnimation,
            y: [0, -15, 0],
            rotate: [0, -10, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: easeInOut
            }
          }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Door - rectangle with gradient */}
        <motion.div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-8 w-12 h-16 ${
            theme === 'dark' 
              ? 'bg-gradient-to-b from-[#41E079]/20 to-[#41E079]/10 border border-[#41E079]/30' 
              : 'bg-gradient-to-b from-[#41E079]/10 to-[#41E079]/5 border border-[#41E079]/20'
          } backdrop-blur-sm mix-blend-soft-light`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={shapeVariants}
          animate={{
            ...floatingAnimation,
            y: [0, -10, 0],
            rotate: [0, 5, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: easeInOut
            }
          }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Reflective overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          theme === 'dark'
            ? 'from-white/5 via-transparent to-white/5'
            : 'from-black/5 via-transparent to-black/5'
        } mix-blend-overlay`} />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
        </div>

        {/* Light beams */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(77,157,224,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, rgba(224,65,181,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, rgba(77,157,224,0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: easeInOut
          }}
          style={{ mixBlendMode: 'soft-light' }}
        />
      </div>
    </div>
  )
} 