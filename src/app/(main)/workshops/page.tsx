import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const WorkshopHubClient = dynamic(() => import('@/components/page/WorkshopClient'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 text-zinc-500 text-sm dark:bg-black dark:text-zinc-400">
      Loading…
    </div>
  ),
})

const title = 'Art & Technology Workshops — Catalog & Institutional Pilots | Moises Sanabria'
const description =
  'Bookable workshops for artists and institutions: digital presence, SEO, vibe coding, AI literacy, documentation, and creative-technology pilots from Oolite Digilab practice.'

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
  return <WorkshopHubClient />
}
