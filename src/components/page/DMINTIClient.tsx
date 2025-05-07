'use client'

import { useState, Suspense, useRef, lazy } from "react"
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Instagram, Twitter, ExternalLink, Sun, Moon } from "lucide-react"
import { ArtistCard } from "@/components/artist-card"
import { ArtistCredit } from "@/components/artist-credit"
import { CountdownTimer } from "@/components/countdown-timer"
import { GlassmorphicPanel } from "@/components/glassmorphic-panel"
import { TechnicalDetails } from "@/components/technical-details"
import { ArtistVisual } from "@/components/artist-visual"
import { useTheme } from "@/contexts/ThemeContext"
import Image from "next/image"
import { EventDetails } from "@/components/dminti/event-details"
import { FeaturedWorks } from "@/components/dminti/featured-works"
import { Introduction } from "@/components/dminti/introduction"
import { DMINTIPartners } from "@/components/dminti/dminti-partners"
import { DecorativeBackground } from "@/components/dminti/decorative-background"
import { GlassDecorativeDivider } from '@/components/dminti/glass-decorative-divider'
import { Gallery } from '@/components/dminti/gallery'

// Dynamically import Three.js components with no SSR and loading state
const ThreeCanvas = dynamic(
  () => import('@/components/three-canvas').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
          <div className="relative px-8 py-4 text-sm">Loading Experience...</div>
        </div>
      </div>
    )
  }
)

// Lazy load sections that are not immediately visible
const LazyEventDetails = lazy(() => import('@/components/dminti/event-details').then(mod => ({ default: mod.EventDetails })))
const LazyFeaturedWorks = lazy(() => import('@/components/dminti/featured-works').then(mod => ({ default: mod.FeaturedWorks })))
const LazyDMINTIPartners = lazy(() => import('@/components/dminti/dminti-partners').then(mod => ({ default: mod.DMINTIPartners })))

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
  image?: string
}

export default function DMINTIClient() {
  const [showExperience, setShowExperience] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()

  const artists: Artist[] = [
    {
      id: 1,
      name: "Frank Lepkowski",
      handle: "@franklepkowski",
      time: "8:38 PM",
      title: "Empty rooms still echo the ones who lived in them.",
      description: "Empty rooms still echo the ones who lived in them.",
      visual: "Hover shows walls/furniture fading in.",
      date: "Dec 3",
      color: "#4D9DE0",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639320/DMINTI/Screenshot_20250507_121642_Instagram_r2t7vk.jpg"
    },
    {
      id: 2,
      name: "Ana María Caballero",
      handle: "@poemequalsart",
      title: "MONUMENT",
      description: "Home is sometimes the laughter that follows a fight.",
      visual: "Overlapping family photos with a poetic typewriter effect.",
      date: "Dec 4",
      color: "#41E079",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639318/DMINTI/Screen_Shot_2025-05-07_at_12.21.12_PM_puizbj.png"
    },
    {
      id: 3,
      name: "Carla Gannis",
      handle: "@carlagannis",
      title: "Am I the Machine? Am I the Home?",
      description: "Where does the body end and the upload begin?",
      visual: "Play 5-second loop of the 3D animated USB portal.",
      date: "Dec 5",
      color: "#E0D241",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639316/DMINTI/Screen_Shot_2025-05-07_at_12.20.57_PM_tnqy0z.png"
    },
    {
      id: 4,
      name: "SamJ",
      handle: "@thesamj",
      title: "After Ours",
      description: "We are made of others — memories, flavors, ghosts.",
      visual: "Hover shows shifting liquid silhouettes of faces.",
      date: "Dec 6",
      color: "#E08541",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639313/DMINTI/Screenshot_20250507_121623_Instagram_zdc32q.jpg"
    },
    {
      id: 5,
      name: "Moises Sanabria & Fabiola Larios",
      handle: "@moises.tech + @fabiblu",
      title: "Bones and Robots",
      description: "Memory is the echo of who we were, whispered into what we've become.",
      visual: "Dual-channel GIF (skeleton and robot facing each other with glitch effect).",
      date: "Dec 7-8",
      color: "#E041B5",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639311/DMINTI/Screenshot_20250507_121603_Instagram_deeqan.jpg"
    }
  ]

  const galleryImages = [
    "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639308/DMINTI/Screenshot_20250507_121546_Instagram_tkjqsv.jpg",
    "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639306/DMINTI/Screenshot_20250507_121527_Instagram_fk9o2r.jpg"
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative w-full min-h-screen">
      {/* Decorative Background */}
      <DecorativeBackground />

      {/* Top gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4D9DE0]/20 via-[#41E079]/10 to-transparent h-[200px] pointer-events-none" />

      {/* DMINTI Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Image
          src={theme === 'dark' 
            ? "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/DMINTI-logo_white_ugmdhq.webp"
            : "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641800/DMINTI/DMINTI-logo_black_f4ydxe.png"
          }
          alt="DMINTI Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
          priority
          unoptimized
        />
      </div>

      {/* Theme toggle */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20 text-white'
              : 'bg-black/10 hover:bg-black/20 text-black'
          }`}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Hero Section with 3D Canvas */}
      <section className="relative w-full h-screen">
        <div className="w-full h-full">
          <ThreeCanvas />
        </div>
      </section>

      {/* Introduction Section */}
      <Introduction />
      <GlassDecorativeDivider />

      {/* Gallery Section */}
      <Gallery />
      <GlassDecorativeDivider />

      {/* Featured Works Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="animate-pulse">Loading Featured Works...</div>
        </div>
      }>
        <LazyFeaturedWorks />
      </Suspense>
      <GlassDecorativeDivider />

      {/* Event Details Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="animate-pulse">Loading Event Details...</div>
        </div>
      }>
        <LazyEventDetails />
      </Suspense>
      <GlassDecorativeDivider />

      {/* DMINTI Partners Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="animate-pulse">Loading Partners...</div>
        </div>
      }>
        <LazyDMINTIPartners />
      </Suspense>

      {/* Artist Detail Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
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
                className="relative p-8 backdrop-blur-xl bg-background/30 border border-foreground/10 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: `0 0 40px ${selectedArtist.color}40`,
                  background: `linear-gradient(135deg, ${selectedArtist.color}10, transparent)`,
                }}
              >
                <button
                  onClick={() => setSelectedArtist(null)}
                  className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
                >
                  ✕
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 aspect-square bg-gradient-to-br from-background/20 to-background/40 rounded-xl overflow-hidden border border-foreground/10">
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
                    <div className="text-xs font-medium text-foreground/60 mb-2">
                      {selectedArtist.date} {selectedArtist.time && `• ${selectedArtist.time}`}
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-foreground">{selectedArtist.title}</h2>
                    <h3 className="text-lg mb-4 text-foreground/90">{selectedArtist.name}</h3>
                    <p className="text-foreground/80 mb-6 text-sm">{selectedArtist.description}</p>
                    <div className="text-xs text-foreground/60">
                      <p>{selectedArtist.visual}</p>
                    </div>
                    <div className="mt-6">
                      <a href="#" className="text-xs text-foreground/70 hover:text-foreground">
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
    </main>
  )
} 