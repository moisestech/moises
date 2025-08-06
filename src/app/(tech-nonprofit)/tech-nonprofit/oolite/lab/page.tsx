import { Metadata } from 'next'
import OoliteDigitalLabClientPage from './OoliteDigitalLabClientPage'

export const metadata: Metadata = {
  title: 'Digital Arts Lab - Oolite',
  description: 'Explore the Digital Arts Lab setup, equipment, and creative possibilities for Miami\'s art-tech community.',
  keywords: ['digital arts lab', 'oolite', 'miami', 'art-tech', 'creative technology', 'workshop space'],
}

export default function OoliteDigitalLabPage() {
  return <OoliteDigitalLabClientPage />
} 