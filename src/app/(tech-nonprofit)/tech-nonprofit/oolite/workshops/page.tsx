import { Metadata } from 'next'
import OoliteWorkshopsClientPage from './OoliteWorkshopsClientPage'

export const metadata: Metadata = {
  title: 'Workshops - Oolite Digital Arts Lab',
  description: 'Comprehensive digital arts workshops and training programs. Learn from industry experts in 3D modeling, AI art, motion graphics, VR/AR development, and more.',
  keywords: ['workshops', 'digital arts', 'training', '3D modeling', 'AI art', 'motion graphics', 'VR/AR', 'oolite', 'miami'],
}

export default function OoliteWorkshopsPage() {
  return <OoliteWorkshopsClientPage />
} 