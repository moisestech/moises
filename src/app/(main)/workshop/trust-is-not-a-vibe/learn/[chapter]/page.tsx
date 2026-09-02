import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TrustLearnClient } from '@/components/workshop/trust-is-not-a-vibe/TrustLearnClient'
import { getTrustChapter, TRUST_CHAPTERS, TRUST_TITLE } from '@/content/workshops/trust-is-not-a-vibe'

type PageProps = { params: Promise<{ chapter: string }> }

export function generateStaticParams() {
  return TRUST_CHAPTERS.map((chapter) => ({ chapter: chapter.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chapter: slug } = await params
  const chapter = getTrustChapter(slug)
  if (!chapter) return { title: `Chapter | ${TRUST_TITLE}` }
  return {
    title: `${chapter.title} — ${TRUST_TITLE} | Moises Sanabria`,
    description: chapter.summary,
  }
}

export default async function TrustLearnChapterPage({ params }: PageProps) {
  const { chapter: slug } = await params
  const chapter = getTrustChapter(slug)
  if (!chapter) notFound()
  return <TrustLearnClient slug={chapter.slug} />
}

export const dynamicParams = false
