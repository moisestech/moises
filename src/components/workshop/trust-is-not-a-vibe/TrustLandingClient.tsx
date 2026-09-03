'use client'

import Link from 'next/link'
import {
  TRUST_OVERVIEW_SECTIONS,
  TRUST_REHEARSE_HREF,
  type TrustOverviewSection as TrustOverviewSectionData,
  type TrustOverviewSectionId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustClockList, TrustVocabGrid } from './TrustLandingInteract'
import { TrustOverviewSpec, TrustOverviewVerdicts, TrustOverviewWhy } from './TrustOverviewBands'
import { TrustOverviewContents, TrustOverviewRail } from './TrustOverviewRail'
import { TrustOverviewSection } from './TrustOverviewSection'
import { TrustPresentationBar } from './TrustPresentationBar'
import { TrustQuestionBreak } from './TrustQuestionBreak'
import { TrustSeatStudio } from './TrustSeatSection'
import { trust } from './trust-tokens'

const SECTION = Object.fromEntries(TRUST_OVERVIEW_SECTIONS.map((item) => [item.id, item])) as Record<
  TrustOverviewSectionId,
  TrustOverviewSectionData
>

export function TrustLandingClient() {
  return (
    <main className={cn(trust.shell, 'overflow-x-clip pb-20 sm:pb-24')}>
      <div className={trust.main}>
        <TrustPresentationBar className="mb-6" />
        <TrustOverviewContents className="mb-10" />

        <div className="lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-x-10">
          <TrustOverviewRail />

          <div className="space-y-10 sm:space-y-14">
            <TrustOverviewSection section={SECTION['what-this-is']}>
              <TrustOverviewSpec />
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['the-question']}>
              <div className="space-y-6">
                <TrustQuestionBreak />
                <TrustOverviewVerdicts />
              </div>
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['why-it-matters']}>
              <TrustOverviewWhy />
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['the-path']}>
              <TrustClockList />
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['your-seat']}>
              <TrustSeatStudio />
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION.vocabulary}>
              <TrustVocabGrid />
            </TrustOverviewSection>
          </div>
        </div>

        <p className="mt-16 text-xs text-stone-400">
          <Link href="/workshops" className={trust.link}>
            Workshops
          </Link>
          {' · '}
          <Link href={TRUST_REHEARSE_HREF} className="text-stone-400 underline-offset-2 hover:underline">
            Facilitator
          </Link>
        </p>
      </div>
    </main>
  )
}
