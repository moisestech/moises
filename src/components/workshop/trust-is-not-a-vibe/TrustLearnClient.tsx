'use client'

import { getTrustChapter } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustChapterNav } from './TrustChapterNav'
import { TrustFourLensesLesson } from './TrustFourLensesLesson'
import { TrustLooksRightLesson } from './TrustLooksRightLesson'
import { TrustPresentationBar } from './TrustPresentationBar'
import { TrustPresentationProvider, useTrustPresentation } from './TrustPresentation'
import { TrustPresentTransition } from './TrustPresentTransition'
import { TrustSeededFailuresLesson } from './TrustSeededFailuresLesson'
import { TrustTheHarnessLesson } from './TrustTheHarnessLesson'
import { TrustTheLoopLesson } from './TrustTheLoopLesson'
import { TrustTransferLesson } from './TrustTransferLesson'
import { TRUST_PAGE_GUTTER, TRUST_PRESENT_GUTTER, trust } from './trust-tokens'

export function TrustLearnClient({ slug, embedded = false }: { slug: string; embedded?: boolean }) {
  const chapter = getTrustChapter(slug)
  if (!chapter) return null

  return (
    <TrustPresentationProvider slug={chapter.slug} stepping={!embedded} root={!embedded}>
      <TrustLearnBody slug={slug} embedded={embedded} />
    </TrustPresentationProvider>
  )
}

function TrustLearnBody({ slug, embedded }: { slug: string; embedded: boolean }) {
  const { present, transitionActive } = useTrustPresentation()
  const chapter = getTrustChapter(slug)

  if (!chapter) return null

  const showTransition = present && transitionActive && !embedded

  const body = (() => {
    switch (chapter.id) {
      case 'looks-right':
        return <TrustLooksRightLesson />
      case 'four-lenses':
        return <TrustFourLensesLesson />
      case 'seeded-failures':
        return <TrustSeededFailuresLesson />
      case 'the-loop':
        return <TrustTheLoopLesson />
      case 'the-harness':
        return <TrustTheHarnessLesson />
      case 'transfer':
        return <TrustTransferLesson />
      default:
        return null
    }
  })()

  const Shell = embedded ? 'section' : 'main'

  return (
    <Shell className={cn(embedded ? '' : cn(trust.shell, 'overflow-x-clip', !present && 'pb-20'))}>
      {embedded ? null : <TrustPresentationBar />}
      {showTransition ? (
        <div data-trust-present-gutter className={cn(TRUST_PRESENT_GUTTER, "py-4 font-['MoMA_Sans']")}>
          <TrustPresentTransition slug={chapter.slug} />
        </div>
      ) : null}
      <div
        data-trust-learn-column
        data-trust-present-gutter={present && !showTransition ? true : undefined}
        hidden={showTransition || undefined}
        className={
          embedded
            ? 'space-y-6'
            : cn(present ? TRUST_PRESENT_GUTTER : TRUST_PAGE_GUTTER, "font-['MoMA_Sans']", present ? 'py-4' : 'pb-16 pt-3')
        }
      >
        {body}
        {embedded ? null : <TrustChapterNav slug={chapter.slug} />}
      </div>
    </Shell>
  )
}
