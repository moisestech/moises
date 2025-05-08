'use client'

import { useState, Suspense, useRef, lazy, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { EventDetails } from "@/components/dminti/event-details"
import { FeaturedWorks } from "@/components/dminti/featured-works"
import { Introduction } from "@/components/dminti/introduction"
import { DMINTIPartners } from "@/components/dminti/dminti-partners"
import { DecorativeBackground } from "@/components/dminti/decorative-background"
import { GlassDecorativeDivider } from '@/components/dminti/glass-decorative-divider'
import { Gallery } from '@/components/dminti/gallery'
import { ErrorBoundary } from '@/components/error-boundary'
import { DMINTINav } from '@/components/dminti/dminti-nav'

interface DMINTIClientProps {
  skipThreeJS?: boolean;
}

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

// Lazy load sections that are not immediately visible
const LazyEventDetails = lazy(() => import('@/components/dminti/event-details').then(mod => ({ default: mod.EventDetails })))
const LazyFeaturedWorks = lazy(() => import('@/components/dminti/featured-works').then(mod => ({ default: mod.FeaturedWorks })))
const LazyDMINTIPartners = lazy(() => import('@/components/dminti/dminti-partners').then(mod => ({ default: mod.DMINTIPartners })))

export default function DMINTIClient({ skipThreeJS = false }: DMINTIClientProps) {
  console.log('[DMINTIClient] Initializing component with skipThreeJS:', skipThreeJS)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    console.log('[DMINTIClient] Component mounted')
    return () => {
      console.log('[DMINTIClient] Component unmounting')
    }
  }, [])

  return (
    <ErrorBoundary>
      <main className="relative w-full min-h-screen">
        {/* Decorative Background */}
        <DecorativeBackground />

        {/* Top gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4D9DE0]/20 via-[#41E079]/10 to-transparent h-[200px] pointer-events-none" />

        {/* Navigation */}
        <DMINTINav />

        {/* Introduction Section */}
        <Introduction />
        <GlassDecorativeDivider variant="default" />

        {/* Gallery Section */}
        <Gallery />
        <GlassDecorativeDivider variant="reverse" />

        {/* Featured Works Section */}
        <ErrorBoundary>
          <Suspense fallback={
            <div className="w-full py-20 flex items-center justify-center">
              <div className="animate-pulse">Loading Featured Works...</div>
            </div>
          }>
            <LazyFeaturedWorks />
          </Suspense>
        </ErrorBoundary>
        <GlassDecorativeDivider variant="stacked" />

        {/* Event Details Section */}
        <ErrorBoundary>
          <Suspense fallback={
            <div className="w-full py-20 flex items-center justify-center">
              <div className="animate-pulse">Loading Event Details...</div>
            </div>
          }>
            <LazyEventDetails />
          </Suspense>
        </ErrorBoundary>
        <GlassDecorativeDivider variant="overlap" />

        {/* DMINTI Partners Section */}
        <ErrorBoundary>
          <Suspense fallback={
            <div className="w-full py-20 flex items-center justify-center">
              <div className="animate-pulse">Loading Partners...</div>
            </div>
          }>
            <LazyDMINTIPartners />
          </Suspense>
        </ErrorBoundary>
      </main>
    </ErrorBoundary>
  )
} 