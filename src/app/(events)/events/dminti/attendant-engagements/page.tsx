import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { ThemeProvider } from "@/contexts/ThemeContext"
import DMINTIClient from "@/components/page/DMINTIClient"

const DMINTIClientComponent = dynamic(() => import('@/components/page/DMINTIClient'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Notions of Home | DMINTI Exhibition',
  description: 'A digital dialogue with Laurie Simmons and Peter Wheelwright\'s Kaleidoscope (...Bigger) House featuring works by Frank Lepkowski, Ana María Caballero, Carla Gannis, SamJ, and more.',
}

export default function AttendantEngagementsPage() {
  return (
    <ThemeProvider>
      <DMINTIClient />
    </ThemeProvider>
  )
} 