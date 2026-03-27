import { Metadata } from 'next'
import BrokenAccelerationPageClient from '@/components/page/BrokenAccelerationPageClient'

export const metadata: Metadata = {
  title: 'Broken Acceleration — Slowing in the Age of Continuity',
  description:
    'Mobile public sculpture: a STOP sign on a self-balancing two-wheel base. Civic command meets technological acceleration in Miami-Dade pedestrian space.',
  keywords: [
    'public sculpture',
    'Miami art',
    'WaveMaker',
    'STOP sign',
    'automation',
    'pedestrian',
    'civic',
    'Moises Sanabria',
  ],
  openGraph: {
    title: 'Broken Acceleration — Moises Sanabria',
    description:
      'A civic object that misfires: full-size STOP sign, self-balancing base, aluminum claw arm. Proposed public activations in Miami-Dade.',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
        alt: 'Broken Acceleration — proposed sculpture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
    ],
  },
}

export default function BrokenAccelerationPage() {
  return <BrokenAccelerationPageClient />
}
