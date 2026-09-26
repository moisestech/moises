import type { Metadata } from 'next'
import { WorkshopsIndex } from '@/components/workshops/WorkshopsIndex'

const title = 'Workshops | Moises Sanabria'
const description =
  'Workshops for artists and the institutions that host them. Presence, literacy, making, and systems, plus a working proposal for an Artist Infrastructure Lab.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
  },
  alternates: {
    canonical: 'https://moises.tech/workshops',
  },
}

export default function WorkshopsHubPage() {
  return <WorkshopsIndex />
}
