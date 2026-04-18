import type { Metadata } from 'next'
import LearnAiCurriculumPageClient from '@/components/page/LearnAiCurriculumPageClient'
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop'

const title = 'Curriculum — Learn AI Without Losing Yourself | Moises Sanabria'
const description =
  'Public curriculum outline for the workshop: opening through writing, research, brainstorming, synthetic assistance, systems thinking, and closing — objectives and key ideas without presenter script.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI workshop curriculum',
    'AI literacy',
    'prompting',
    'critical AI',
    'Moises Sanabria',
    'teaching',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: LEARN_AI_WORKSHOP_HERO_IMAGE, alt: 'Learn AI Without Losing Yourself — workshop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [LEARN_AI_WORKSHOP_HERO_IMAGE],
  },
}

export default function LearnAiCurriculumPage() {
  return <LearnAiCurriculumPageClient />
}
