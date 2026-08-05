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

const title = 'Art & Technology Workshops — Bookable Institutional Offerings | Moises Sanabria'
const description =
  'Three bookable offerings: Vibe Coding and Digital Presence, AI and Automation for the Artist Studio, and Creative Technology Prototyping—plus deeper workshop programs from Oolite Arts practice.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
  },
}

export default function WorkshopsHubPage() {
  return <WorkshopHubClient />
}
