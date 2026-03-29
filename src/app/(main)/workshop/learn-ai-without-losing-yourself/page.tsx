import type { Metadata } from 'next'
import LearnAiWithoutLosingYourselfPageClient from '@/components/page/LearnAiWithoutLosingYourselfPageClient'
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop'

const title = 'Learn AI Without Losing Yourself | Moises Sanabria'
const description =
  'A live workshop-performance on practical AI, burnout culture, and staying human in the loop. Learn how to use AI for writing, research, and creative work without losing your voice, judgment, or taste.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI workshop',
    'AI literacy',
    'burnout',
    'creative writing AI',
    'Miami',
    'Moises Sanabria',
    'teaching',
    'critical AI',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: LEARN_AI_WORKSHOP_HERO_IMAGE, alt: 'Learn AI Without Losing Yourself — workshop hero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [LEARN_AI_WORKSHOP_HERO_IMAGE],
  },
}

export default function LearnAiWithoutLosingYourselfPage() {
  return <LearnAiWithoutLosingYourselfPageClient />
}
