import { Metadata } from 'next'
import LandingPagesClient from '@/components/workshop/LandingPagesClient'

export const metadata: Metadata = {
  title: 'Landing Pages Example | Digital Presence Workshop',
  description: 'Example collection of landing page templates for your digital presence.'
}

export default function LandingPagesExamplePage() {
  return <LandingPagesClient />
} 