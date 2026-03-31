import type { Metadata } from 'next'
import ArtOfAIAgentsIntro from '@/components/page/ArtOfAIAgentsIntro'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'

const title = 'Workshop materials | The Art of AI Agents | Moises Sanabria'
const description =
  'Chapter hub for The Art of AI Agents — n8n, AI agents, and workflow materials. Start here after the overview; legacy full-page version linked below.'

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

export default function ArtOfAIAgentsCourseHubPage() {
  return <ArtOfAIAgentsIntro />
}
