'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { Instagram, ExternalLink } from 'lucide-react'

interface Artist {
  name: string
  handle: string
  color: string
}

export function ArtistList() {
  const { theme } = useTheme()

  const artists: Artist[] = [
    { name: "Frank Lepkowski", handle: "@frank.gl", color: "#4D9DE0" },
    { name: "Ana María Caballero", handle: "@anamariacaballero", color: "#41E079" },
    { name: "Carla Gannis", handle: "@carlagannis", color: "#E0D241" },
    { name: "SamJ", handle: "@samjstudios", color: "#E08541" },
    { name: "Fabiola Larios", handle: "@fabiolalariosm", color: "#E041B5" },
    { name: "Moises Sanabria", handle: "@moisesdsanabria", color: "#E041B5" },
    { name: "L'nique Noel", handle: "@lniquenoel", color: "#9941E0" },
    { name: "Amber Martinez", handle: "@ambermartinez", color: "#41E0D2" },
    { name: "Sheyenne Peltrau", handle: "@sheyennepeltrau", color: "#E0418F" },
    { name: "Leyla Morris", handle: "@leylamorris", color: "#41E079" },
    { name: "Alessandra Henriquez", handle: "@alessandrahenriquez", color: "#E0D241" }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {artists.map((artist, index) => (
        <motion.div
          key={artist.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <a
            href={`https://instagram.com/${artist.handle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-black/20 text-white/90 hover:text-white' 
                : 'bg-white/20 text-black/90 hover:text-black'
            } backdrop-blur-sm border ${
              theme === 'dark' ? 'border-white/10' : 'border-black/10'
            } hover:border-current/30`}
            style={{
              boxShadow: `0 0 0 0 ${artist.color}40`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${artist.color}40`
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 0 ${artist.color}40`
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <span className="relative">
              {artist.name}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-current/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${artist.color}40, transparent)` }}
              />
            </span>
            <Instagram className="w-3.5 h-3.5" />
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      ))}
    </div>
  )
} 