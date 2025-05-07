'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { Instagram, ExternalLink } from 'lucide-react'
import { useState } from 'react'

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

interface ArtistCardProps {
  artist: Artist
  onClick: () => void
  onNameHover: () => void
}

export function ArtistCard({ artist, onClick, onNameHover }: ArtistCardProps) {
  const { theme } = useTheme()
  const [showPopover, setShowPopover] = useState(false)

  const handleNameHover = () => {
    setShowPopover(true)
    onNameHover()
  }

  const handleNameLeave = () => {
    setShowPopover(false)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer group relative"
    >
      <div
        className={`relative p-6 backdrop-blur-xl ${theme === 'dark' ? 'bg-black/30 border-white/10' : 'bg-white/30 border-black/10'} border rounded-xl overflow-hidden transition-all duration-300 hover:border-foreground/20`}
        style={{
          boxShadow: `0 0 20px ${artist.color}20`,
          background: `linear-gradient(135deg, ${artist.color}05, ${theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'})`,
        }}
      >
        <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mb-2`}>
          {artist.date} {artist.time && `• ${artist.time}`}
        </div>
        
        {/* Artist Name with Enhanced Hover Effects */}
        <div className="relative">
          <h3 
            className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-all duration-300 group-hover:text-[${artist.color}]`}
            onMouseEnter={handleNameHover}
            onMouseLeave={handleNameLeave}
          >
            <span className="relative inline-block">
              {artist.title}
              <span className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/0 via-[#E041B5]/20 to-[#41E079]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </span>
          </h3>
          
          {/* Popover */}
          <AnimatePresence>
            {showPopover && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`absolute z-50 left-0 mt-2 p-3 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}
                style={{
                  boxShadow: `0 0 20px ${artist.color}40`,
                }}
              >
                <div className="flex items-center gap-2">
                  <a
                    href={`https://instagram.com/${artist.handle.replace('@', '').split(' + ')[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm ${theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-black/90 hover:text-black'} transition-colors`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram className="w-4 h-4" />
                    {artist.handle}
                  </a>
                  <ExternalLink className={`w-3 h-3 ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h4 
          className={`text-lg mb-4 ${theme === 'dark' ? 'text-white/90' : 'text-black/90'} group-hover:text-[${artist.color}] transition-colors duration-300`}
          onMouseEnter={handleNameHover}
          onMouseLeave={handleNameLeave}
        >
          {artist.name}
        </h4>
        
        <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
          {artist.description}
        </p>
        <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
          <p>{artist.visual}</p>
        </div>
        <div className="mt-4">
          <a 
            href={`https://instagram.com/${artist.handle.replace('@', '').split(' + ')[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm ${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'} transition-colors`}
            onClick={(e) => e.stopPropagation()}
          >
            <Instagram className="w-4 h-4" />
            {artist.handle}
          </a>
        </div>
      </div>
    </motion.div>
  )
} 