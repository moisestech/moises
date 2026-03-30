import type { ReactNode } from 'react'
import { ArtOfAIAgentsWorkshopLayout } from '@/components/workshop/art-of-ai-agents/ArtOfAIAgentsWorkshopLayout'

export default function TheArtOfAIAgentsLayout({ children }: { children: ReactNode }) {
  return <ArtOfAIAgentsWorkshopLayout>{children}</ArtOfAIAgentsWorkshopLayout>
}
