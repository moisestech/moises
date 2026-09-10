'use client'

import {
  getTrustChapter,
  getTrustChapterIndex,
  TRUST_CHAPTER_BANNER,
  TRUST_CHAPTERS,
  TRUST_LEARN_BASE,
  TRUST_PLACEHOLDERS,
  trustBannerCopyForPath,
  type TrustPlaceholder,
} from '@/content/workshops/trust-is-not-a-vibe'
import { BannerTitle, TrustBannerBackdrop } from './TrustLabBanner'

/**
 * Present-only chapter open. Full-stage visual break before The idea.
 * Not a rail item, not a packet portion, not a route. Course language is HTML.
 */
export function TrustPresentTransition({ slug }: { slug: string }) {
  const chapter = getTrustChapter(slug)
  if (!chapter) return null

  const asset = TRUST_CHAPTER_BANNER[chapter.id]
  const copy = trustBannerCopyForPath(`${TRUST_LEARN_BASE}/${slug}`)
  const index = getTrustChapterIndex(slug)
  const src = (TRUST_PLACEHOLDERS[asset] as TrustPlaceholder).src
  const progress = `${index + 1} of ${TRUST_CHAPTERS.length}`

  return (
    <div
      data-trust-present-transition
      data-trust-present-transition-slug={slug}
      className="relative h-[calc(100dvh-var(--trust-course-bar-height,3.25rem)-1rem)] w-full overflow-hidden"
      aria-label={`Chapter ${progress}: ${chapter.title}`}
    >
      <TrustBannerBackdrop asset={asset} />
      <div className="absolute inset-0 z-[1]">
        <BannerTitle copy={copy} tone={src ? 'light' : 'dark'} progress={progress} />
      </div>
    </div>
  )
}
