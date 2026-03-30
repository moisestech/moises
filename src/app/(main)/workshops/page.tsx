import type { Metadata } from 'next'
import WorkshopsIndexPageClient from '@/components/page/WorkshopsIndexPageClient'

export const metadata: Metadata = {
  title: 'Workshops | Moises Sanabria',
  description:
    'Workshops and live sessions on art, technology, AI literacy, and public teaching — Moises Sanabria, Miami.',
}

export default function WorkshopsIndexPage() {
  return <WorkshopsIndexPageClient />
}
