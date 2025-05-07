'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { GlassmorphicPanel } from "@/components/glassmorphic-panel"
import { ArtistCard } from "@/components/artist-card"

interface Artist {
  id: number
  name: string
  handle: string
  title: string
  description: string
  visual: string
  date: string
  color: string
  image?: string
}

export function FeaturedWorks() {
  const { theme } = useTheme()
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  const artists: Artist[] = [
    {
      id: 1,
      name: "Frank Lepkowski",
      handle: "@frank.gl",
      title: "838",
      description: "Empty rooms still echo the ones who lived in them.",
      visual: "Hover shows walls/furniture fading in.",
      date: "May 20",
      color: "#4D9DE0",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645734/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png"
    },
    {
      id: 2,
      name: "Amber Martinez",
      handle: "@ambermartinez",
      title: "Unreality",
      description: "Home is sometimes the laughter that follows a fight.",
      visual: "Overlapping family photos with a poetic typewriter effect.",
      date: "May 20",
      color: "#41E079",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645732/DMINTI/dminti-may20-unreality-amber-martinez_y3ttrw.png"
    },
    {
      id: 3,
      name: "Carla Gannis",
      handle: "@carlagannis",
      title: "Am I the Machine? Am I the Home?",
      description: "Where does the body end and the upload begin?",
      visual: "Play 5-second loop of the 3D animated USB portal.",
      date: "May 20",
      color: "#E0D241",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645745/DMINTI/dminti-may20-amithemachineamithehome-carla-gannis_n0dyjv.png"
    },
    {
      id: 4,
      name: "SamJ",
      handle: "@samjstudios",
      title: "After Hours",
      description: "We are made of others — memories, flavors, ghosts.",
      visual: "Hover shows shifting liquid silhouettes of faces.",
      date: "May 20",
      color: "#E08541",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645737/DMINTI/dminti-may20-afterhours-samj_psml0w.png"
    },
    {
      id: 5,
      name: "Moises Sanabria & Fabiola Larios",
      handle: "@moisesdsanabria + @fabiolalariosm",
      title: "Bones and Robots",
      description: "Memory is the echo of who we were, whispered into what we've become.",
      visual: "Dual-channel GIF (skeleton and robot facing each other with glitch effect).",
      date: "May 20",
      color: "#E041B5",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645740/DMINTI/dminti-may20-bonesnrobots-moisessanabria-fabiolalarios_dlnugy.png"
    },
    {
      id: 6,
      name: "Sheyenne Peltrau",
      handle: "@sheyennepeltrau",
      title: "Secret Garden",
      description: "A digital exploration of nature's hidden beauty.",
      visual: "Interactive garden visualization with particle effects.",
      date: "May 20",
      color: "#9941E0",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645742/DMINTI/dminti-may20-secretgarden-sheyenne-peltrau_h2ygd5.png"
    },
    {
      id: 7,
      name: "Stigmata Linique Noel",
      handle: "@stigmatanoel",
      title: "Digital Echoes",
      description: "Exploring the intersection of digital and physical spaces.",
      visual: "Dynamic spatial audio-visual experience.",
      date: "May 20",
      color: "#E041B5",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746645748/DMINTI/dminti-may20-stigmata-linique-noel_aihbst.png"
    }
  ]

  const scrollToArtist = (artistId: number) => {
    const element = document.getElementById(`artist-${artistId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      element.classList.add('highlight')
      setTimeout(() => element.classList.remove('highlight'), 2000)
    }
  }

  return (
    <section className={`relative w-full py-20 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`} id="featured-works">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <GlassmorphicPanel className={`p-8 mb-24 border ${theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <motion.div
                key={artist.title}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative aspect-[4/3] rounded-xl overflow-hidden border ${
                  theme === 'dark' ? 'border-white/20' : 'border-black/20'
                } transition-all duration-300 group-hover:border-opacity-50 group-hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'group-hover:shadow-[#4D9DE0]/20' 
                    : 'group-hover:shadow-[#4D9DE0]/30'
                }`}>
                  <Image
                    src={artist.image || ''}
                    alt={artist.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' 
                      ? 'from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100' 
                      : 'from-white/80 via-white/50 to-transparent opacity-0 group-hover:opacity-100'
                  } transition-opacity duration-300`} />
                </div>
                <div className={`absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{artist.title}</h3>
                  <p className="text-sm opacity-90">{artist.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassmorphicPanel>
      </div>

      {/* Artist Detail Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md`}
            onClick={() => setSelectedArtist(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative p-8 backdrop-blur-xl ${theme === 'dark' ? 'bg-black/30 border-white/10' : 'bg-white/30 border-black/10'} border rounded-2xl overflow-hidden`}
                style={{
                  boxShadow: `0 0 40px ${selectedArtist.color}40`,
                  background: `linear-gradient(135deg, ${selectedArtist.color}10, ${theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'})`,
                }}
              >
                <button
                  onClick={() => setSelectedArtist(null)}
                  className={`absolute top-4 right-4 ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
                >
                  ✕
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className={`w-full md:w-1/2 aspect-square bg-gradient-to-br ${theme === 'dark' ? 'from-black/20 to-black/40 border-white/10' : 'from-white/20 to-white/40 border-black/10'} rounded-xl overflow-hidden border`}>
                    {selectedArtist.image && (
                      <Image
                        src={selectedArtist.image}
                        alt={selectedArtist.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className={`text-xs font-medium ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} mb-2`}>
                      {selectedArtist.date}
                    </div>
                    <h2 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {selectedArtist.title}
                    </h2>
                    <h3 className={`text-lg mb-4 ${theme === 'dark' ? 'text-white/90' : 'text-black/90'}`}>
                      {selectedArtist.name}
                    </h3>
                    <p className={`mb-6 text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                      {selectedArtist.description}
                    </p>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                      <p>{selectedArtist.visual}</p>
                    </div>
                    <div className="mt-6">
                      <a 
                        href="#" 
                        className={`text-xs ${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
                      >
                        {selectedArtist.handle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 