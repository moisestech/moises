'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

interface Artist {
  id: number
  name: string
  handle: string
  time?: string
  title: string
  description: string
  visual: string
  date: string
  color: string
}

interface ArtistVisualProps {
  artist: Artist
}

export function ArtistVisual({ artist }: ArtistVisualProps) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full relative"
    >
      {/* Placeholder for actual visual content */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'}`}
        style={{
          background: `linear-gradient(135deg, ${artist.color}20, ${theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'})`,
        }}
      >
        <p className={`text-center p-4 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
          {artist.visual}
        </p>
      </div>
      
      {/* Visual overlay effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, transparent 30%, ${artist.color}10 100%)`,
        }}
      />
    </motion.div>
  )
} 