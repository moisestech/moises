import type { Metadata } from 'next'
import ArtOfAIAgentsClientPage from './ArtOfAIAgentsClientPage'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'

const title = 'The Art of AI Agents | Moises Sanabria'
const description =
  'Learn how to build and deploy AI agents for artists and creatives with our comprehensive workshop.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: ART_OF_AI_AGENTS_HERO_IMAGE, alt: 'The Art of AI Agents — Locust Projects, The Dill 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ART_OF_AI_AGENTS_HERO_IMAGE],
  },
}

export default function ArtOfAIAgentsPage() {
  return <ArtOfAIAgentsClientPage />;
} 