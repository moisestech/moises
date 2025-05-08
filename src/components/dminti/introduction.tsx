'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { GlassmorphicPanel } from "@/components/glassmorphic-panel"
import { useState, useEffect } from "react"

interface Artist {
  name: string
  handle: string
  color: string
}

interface Partner {
  name: string
  url: string
  color: string
}

const ArtistLink = ({ artist }: { artist: Artist }) => {
  const { theme } = useTheme()
  return (
    <a
      href={`https://instagram.com/${artist.handle.replace('@', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-all duration-300"
      style={{
        color: artist.color,
        opacity: theme === 'dark' ? 0.9 : 0.8,
        textShadow: 'none',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.textShadow = `0 0 15px ${artist.color}80`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = theme === 'dark' ? '0.9' : '0.8'
        e.currentTarget.style.textShadow = 'none'
      }}
    >
      {artist.name}
    </a>
  )
}

const PartnerLink = ({ partner }: { partner: Partner }) => {
  const { theme } = useTheme()
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-all duration-300"
      style={{
        color: partner.color,
        opacity: theme === 'dark' ? 0.9 : 0.8,
        textShadow: 'none',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.textShadow = `0 0 15px ${partner.color}80`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = theme === 'dark' ? '0.9' : '0.8'
        e.currentTarget.style.textShadow = 'none'
      }}
    >
      {partner.name}
    </a>
  )
}

export function Introduction() {
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

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

  const partners: Partner[] = [
    { name: "Miami Design District", url: "https://www.miamidesigndistrict.net", color: "#4D9DE0" },
    { name: "Florida International University", url: "https://www.fiu.edu", color: "#41E079" },
    { name: "MUD Foundation", url: "https://mud.foundation", color: "#E041B5" }
  ]

  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`}>
      <div className="w-full max-w-7xl px-4 mx-auto">
        <GlassmorphicPanel className={`p-8 mb-24 border ${theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative inline-block mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-xl rounded-lg" />
              <h1 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
                ATTENDANT ENGAGEMENTS No. 1
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6"
            >
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                We are deeply grateful to our collaborators at {partners.map((partner, index) => (
                  <span key={partner.name}>
                    <PartnerLink partner={partner} />
                    {index < partners.length - 2 ? ', ' : index === partners.length - 2 ? ', and ' : ''}
                  </span>
                ))}, whose support made this project possible.
              </p>

              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                The artists featured in this exhibition—{artists.map((artist, index) => (
                  <span key={artist.name}>
                    <ArtistLink artist={artist} />
                    {index < artists.length - 1 ? ', ' : ''}
                  </span>
                ))}—have each created original works in dialogue with Laurie Simmons' practice, reflecting on identity, memory, digital culture, and the architecture of the self.
              </p>

              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                We are thrilled to bring this constellation of voices together in the Melin Atrium in the heart of the Miami Design District, and to mark the closing of The Kaleidoscope (...Bigger) House by foregrounding new, community-rooted digital artworks shaped in its wake.
              </p>
            </motion.div>
          </motion.div>
        </GlassmorphicPanel>
      </div>
    </section>
  )
} 