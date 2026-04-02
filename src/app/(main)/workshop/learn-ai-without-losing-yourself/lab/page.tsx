import type { Metadata } from 'next'
import LearnAiLabPageClient from '@/components/page/LearnAiLabPageClient'
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop'

const title = 'Inside the Workshop — Learn AI Without Losing Yourself | Moises Sanabria'
const description =
  'Session architecture for Learn AI Without Losing Yourself: run of show, skills, critiques, humor strategy, visual brief, proof roadmap, and version expansion — a living workshop blueprint.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: LEARN_AI_WORKSHOP_HERO_IMAGE, alt: 'Learn AI Without Losing Yourself — workshop artwork' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [LEARN_AI_WORKSHOP_HERO_IMAGE],
  },
}

export default function LearnAiLabPage() {
  return <LearnAiLabPageClient />
}
