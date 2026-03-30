import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const WorkshopHubClient = dynamic(() => import('@/components/page/WorkshopClient'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-black text-white text-sm">
      Loading…
    </div>
  ),
})

const title = 'Art & Technology Workshops | Talk Hub — Moises Sanabria & Fabiola Larios'
const description =
  'Automation workshop + partnerships. Artist task automation, institutional consulting, and workshops by Moises Sanabria (Technical Director of Digital, Oolite Arts) and Fabiola Larios.'

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
