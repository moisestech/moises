import { Metadata } from 'next'
import LandingClient from '@/components/workshop/LandingClient'

export const metadata: Metadata = {
  title: 'Landing Page Example | Digital Presence Workshop',
  description: 'Example of a landing page to create an impactful first impression.'
}

export default function LandingExamplePage() {
  return <LandingClient />
} 