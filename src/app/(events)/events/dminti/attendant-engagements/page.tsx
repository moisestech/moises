import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { ThemeProvider } from "@/contexts/ThemeContext"

// Dynamically import the client component with no SSR
const DMINTIClient = dynamic(() => import('@/components/page/DMINTIClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading Experience...</div>
      </div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'Notions of Home | DMINTI Exhibition',
  description: 'A digital dialogue with Laurie Simmons and Peter Wheelwright\'s Kaleidoscope (...Bigger) House featuring works by Frank Lepkowski, Ana María Caballero, Carla Gannis, SamJ, and more.',
}

export default function AttendantEngagementsPage() {
  return (
    <ThemeProvider>
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading Experience...</div>
          </div>
        </div>
      }>
        <DMINTIClient />
      </Suspense>
    </ThemeProvider>
  )
} 