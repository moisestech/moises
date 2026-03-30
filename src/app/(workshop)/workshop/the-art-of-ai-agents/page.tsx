import type { Metadata } from 'next'
import ArtOfAIAgentsIntro from '@/components/page/ArtOfAIAgentsIntro'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'

const title = 'The Art of AI Agents | Moises Sanabria'
const description =
  'Artist task automation — n8n, AI agents, and workflow design. Introductory hub with chapter navigation; full legacy workshop available.'

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
  return <ArtOfAIAgentsIntro />
}
