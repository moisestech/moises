import type { Metadata } from 'next'
import ArtOfAIAgentsClientPage from '../ArtOfAIAgentsClientPage'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'

const title = 'The Art of AI Agents — Full workshop | Moises Sanabria'
const description =
  'Full single-page workshop: n8n, AI agents, integrations, and deployment. Prefer chapter mode? Start from the workshop intro.'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    images: [{ url: ART_OF_AI_AGENTS_HERO_IMAGE, alt: 'The Art of AI Agents — Locust Projects, The Dill 2026' }],
  },
}

export default function ArtOfAIAgentsFullPage() {
  return <ArtOfAIAgentsClientPage />
}
