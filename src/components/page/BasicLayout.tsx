'use client'

import { useState, useEffect, Suspense } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import { Sun, Moon } from 'lucide-react'
import dynamic from 'next/dynamic'
import { GlassDecorativeDivider } from '@/components/dminti/glass-decorative-divider'
import { DMINTINav } from '@/components/dminti/dminti-nav'

// Dynamically import Three.js canvas
const ThreeCanvas = dynamic(() => import('@/components/three-canvas'), {
  loading: () => (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading 3D Scene...</div>
      </div>
    </div>
  )
})

// Dynamically import components with loading states
const EventDetails = dynamic(() => import('@/components/dminti/event-details').then(mod => ({ default: mod.EventDetails })), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading Event Details...</div>
      </div>
    </div>
  )
})

const FeaturedWorks = dynamic(() => import('@/components/dminti/featured-works').then(mod => ({ default: mod.FeaturedWorks })), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading Featured Works...</div>
      </div>
    </div>
  )
})

const Gallery = dynamic(() => import('@/components/dminti/gallery').then(mod => ({ default: mod.Gallery })), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading Gallery...</div>
      </div>
    </div>
  )
})

const DMINTIPartners = dynamic(() => import('@/components/dminti/dminti-partners').then(mod => ({ default: mod.DMINTIPartners })), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading Partners...</div>
      </div>
    </div>
  )
})

const Introduction = dynamic(() => import('@/components/dminti/introduction').then(mod => ({ default: mod.Introduction })), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading Introduction...</div>
      </div>
    </div>
  )
})

export default function BasicLayout() {
  const { theme, toggleTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('[BasicLayout] Component mounted')
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => {
      console.log('[BasicLayout] Component unmounting')
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
          <div className="relative px-8 py-4 text-sm">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <main className="relative w-full min-h-screen">
      {/* Top gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4D9DE0]/20 via-[#41E079]/10 to-transparent h-[200px] pointer-events-none z-10" />

      {/* Navigation */}
      <DMINTINav />

      {/* Three.js Scene */}
      <div className="w-full h-[80vh] relative z-10">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
              <div className="relative px-8 py-4 text-sm">Loading 3D Scene...</div>
            </div>
          </div>
        }>
          <ThreeCanvas />
        </Suspense>
      </div>

      <GlassDecorativeDivider variant="default" />

      {/* Introduction Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading Introduction...</div>
          </div>
        </div>
      }>
        <Introduction />
      </Suspense>
      <GlassDecorativeDivider variant="reverse" />

      {/* Gallery Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading Gallery...</div>
          </div>
        </div>
      }>
        <Gallery />
      </Suspense>
      <GlassDecorativeDivider variant="reverse" />

      {/* Featured Works Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading Featured Works...</div>
          </div>
        </div>
      }>
        <FeaturedWorks />
      </Suspense>
      <GlassDecorativeDivider variant="stacked" />

      {/* Event Details Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading Event Details...</div>
          </div>
        </div>
      }>
        <EventDetails />
      </Suspense>
      <GlassDecorativeDivider variant="overlap" />

      {/* DMINTI Partners Section */}
      <Suspense fallback={
        <div className="w-full py-20 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading Partners...</div>
          </div>
        </div>
      }>
        <DMINTIPartners />
      </Suspense>
    </main>
  )
} 