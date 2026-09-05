'use client'

import { getTrustChapter } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustChapterNav } from './TrustChapterNav'
import { TrustFourLensesLesson } from './TrustFourLensesLesson'
import { TrustLooksRightLesson } from './TrustLooksRightLesson'
import { TrustPresentationBar } from './TrustPresentationBar'
import { TrustPresentationProvider } from './TrustPresentation'
import { TrustSeededFailuresLesson } from './TrustSeededFailuresLesson'
import { TrustTheHarnessLesson } from './TrustTheHarnessLesson'
import { TrustTheLoopLesson } from './TrustTheLoopLesson'
import { TrustTransferLesson } from './TrustTransferLesson'
import { trust } from './trust-tokens'

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
  const chapter = getTrustChapter(slug)

  if (!chapter) return null

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
    <Shell className={cn(embedded ? '' : cn(trust.shell, 'overflow-x-clip pb-20'))}>
      {embedded ? null : <TrustPresentationBar />}
      <div className={embedded ? 'space-y-6' : cn(trust.gutter, "pb-16 pt-3 font-['MoMA_Sans']")}>
        {body}
        {embedded ? null : <TrustChapterNav slug={chapter.slug} />}
      </div>
    </Shell>
  )
}
