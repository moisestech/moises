import type { Metadata } from 'next'
import ArtOfAIAgentsOverviewPageClient from '@/components/page/ArtOfAIAgentsOverviewPageClient'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'

const title = 'The Art of AI Agents | Moises Sanabria'
const description =
  'Artist-facing automation — n8n, AI agents, integrations, and deployment. Workshop overview, formats, and entry to chapter materials.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'n8n',
    'AI agents',
    'artist automation',
    'workflow',
    'workshop',
    'Miami',
    'Moises Sanabria',
    'teaching',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: ART_OF_AI_AGENTS_HERO_IMAGE, alt: 'The Art of AI Agents — Locust Projects, The Dill 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ART_OF_AI_AGENTS_HERO_IMAGE],
  },
}

export default function ArtOfAIAgentsOverviewPage() {
  return <ArtOfAIAgentsOverviewPageClient />
}
