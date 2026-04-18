import type { Metadata } from 'next'
import LearnAiRehearsePageClient from '@/components/page/LearnAiRehearsePageClient'

const title = 'Presenter cue sheet — Learn AI Without Losing Yourself'
const description =
  'Private rehearsal view: slide-by-slide cue sheet for Learn AI Without Losing Yourself. Not indexed for search.'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: 'website',
  },
}

export default function LearnAiRehearsePage() {
  return <LearnAiRehearsePageClient />
}
