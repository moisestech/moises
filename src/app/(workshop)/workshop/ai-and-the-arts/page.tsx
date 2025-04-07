import dynamic from 'next/dynamic'
import { Metadata } from 'next'

// Use dynamic import to load the client component
const AIArtsClient = dynamic(() => import('@/components/page/AIArtsClient'), {
  ssr: false // Disable server-side rendering
})

export const metadata: Metadata = {
  title: 'AI and the Arts | Moises Sanabria',
  description: 'Explore the intersection of artificial intelligence and creative expression with our innovative workshop series.',
}

export default function AIArtsPage() {
  return <AIArtsClient />
} 