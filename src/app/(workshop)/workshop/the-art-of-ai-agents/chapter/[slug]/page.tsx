import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getArtOfAiAgentsChapter,
  ART_OF_AI_AGENTS_CHAPTERS,
} from '@/config/art-of-ai-agents-chapters'
import { ArtOfAIAgentsChapterContent } from '@/components/workshop/art-of-ai-agents/ArtOfAIAgentsChapterContent'
import { ArtOfAIAgentsChapterNav } from '@/components/workshop/art-of-ai-agents/ArtOfAIAgentsChapterNav'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return ART_OF_AI_AGENTS_CHAPTERS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ch = getArtOfAiAgentsChapter(params.slug)
  if (!ch) return { title: 'Chapter | The Art of AI Agents' }
  return {
    title: `${ch.title} | The Art of AI Agents — Moises Sanabria`,
    description: ch.description,
  }
}

export default function ArtOfAIAgentsChapterPage({ params }: Props) {
  const chapter = getArtOfAiAgentsChapter(params.slug)
  if (!chapter) notFound()

  return (
    <div>
      <ArtOfAIAgentsChapterContent slug={chapter.slug} />
      <ArtOfAIAgentsChapterNav slug={chapter.slug} />
    </div>
  )
}
