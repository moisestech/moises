import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LearnClient } from '@/components/workshop/artist-infrastructure-lab/LearnClient'
import {
  LAB_CHAPTERS,
  LAB_TITLE,
  getLabChapter,
} from '@/content/workshops/artist-infrastructure-lab'

type PageProps = { params: Promise<{ chapter: string }> }

export function generateStaticParams() {
  return LAB_CHAPTERS.map((chapter) => ({ chapter: chapter.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chapter: slug } = await params
  const chapter = getLabChapter(slug)
  if (!chapter) return { title: `Chapter | ${LAB_TITLE}` }
  return {
    title: `${chapter.title} — ${LAB_TITLE} | Moises Sanabria`,
    description: chapter.question,
    robots: { index: true, follow: true },
  }
}

export default async function ArtistInfrastructureLabChapterPage({ params }: PageProps) {
  const { chapter: slug } = await params
  const chapter = getLabChapter(slug)
  if (!chapter) notFound()
  return <LearnClient chapterId={chapter.id} />
}

export const dynamicParams = false
