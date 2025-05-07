'use client'

import { motion } from 'framer-motion'

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

interface ArtistCreditProps {
  artist: Artist
  onClick: () => void
}

export function ArtistCredit({ artist, onClick }: ArtistCreditProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex-none w-72 cursor-pointer"
    >
      <div
        className="p-4 backdrop-blur-xl bg-background/30 border border-foreground/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-foreground/20"
        style={{
          boxShadow: `0 0 15px ${artist.color}20`,
          background: `linear-gradient(135deg, ${artist.color}05, transparent)`,
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
            style={{ backgroundColor: `${artist.color}20` }}
          >
            {artist.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium">{artist.name}</h3>
            <p className="text-sm text-foreground/60">{artist.handle}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-foreground/70">{artist.title}</p>
        </div>
      </div>
    </motion.div>
  )
} 