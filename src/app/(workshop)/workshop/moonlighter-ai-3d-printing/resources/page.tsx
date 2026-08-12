import type { Metadata } from 'next'
import { MoonlighterResourcesClient } from '@/components/workshop/moonlighter/MoonlighterResourcesClient'

export const metadata: Metadata = {
  title: 'Resources | From Image to Object',
  description: 'Post-class curriculum, recovery policy, and archive checklist for the Moonlighter workshop.',
}

export default function MoonlighterResourcesPage() {
  return <MoonlighterResourcesClient />
}
