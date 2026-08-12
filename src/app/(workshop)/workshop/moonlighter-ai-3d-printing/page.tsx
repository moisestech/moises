import type { Metadata } from 'next'
import { MoonlighterLandingClient } from '@/components/workshop/moonlighter/MoonlighterLandingClient'
import { workshopPromise } from '@/content/workshops/moonlighter-ai-3d-printing'

export const metadata: Metadata = {
  title: `${workshopPromise.title} | Moonlighter Workshop`,
  description: workshopPromise.short,
  openGraph: {
    title: workshopPromise.title,
    description: workshopPromise.short,
    type: 'website',
    url: 'https://moises.tech/workshop/moonlighter-ai-3d-printing',
  },
}

export default function MoonlighterWorkshopPage() {
  return <MoonlighterLandingClient />
}
