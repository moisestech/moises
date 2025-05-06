import dynamic from 'next/dynamic'
import { Metadata } from 'next'

// Use dynamic import to load the client component
const TechNonprofitClient = dynamic(() => import('@/components/page/TechNonprofitClientOolite'), {
  ssr: false // Disable server-side rendering
})

export const metadata: Metadata = {
  title: 'Scale Tech Non-Profits | Moises Sanabria',
  description: 'Transform your non-profit\'s impact through technology with our comprehensive workshop series.',
}

export default function TechNonprofitPage() {
  return <TechNonprofitClient />
} 