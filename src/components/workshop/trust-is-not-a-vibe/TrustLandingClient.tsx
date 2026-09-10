'use client'

import Link from 'next/link'
import {
  TRUST_OVERVIEW_SECTIONS,
  TRUST_OVERVIEW_SPEC,
  TRUST_REHEARSE_HREF,
  type TrustOverviewSection as TrustOverviewSectionData,
  type TrustOverviewSectionId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustCourseMap } from './TrustCourseMap'
import { TrustGoDeeper } from './TrustGoDeeper'
import { TrustClockList, TrustVocabGrid } from './TrustLandingInteract'
import {
  TrustOverviewFact,
  TrustOverviewPath,
  TrustOverviewQuestion,
  TrustOverviewSpec,
  TrustOverviewWhy,
  trustOverviewQuestionChildren,
  trustOverviewWhyChildren,
} from './TrustOverviewBands'
import { TrustOverviewContents, TrustOverviewRail } from './TrustOverviewRail'
import { TrustOverviewSection } from './TrustOverviewSection'
import { TrustQuestionBreak } from './TrustQuestionBreak'
import { TrustPresentationBar } from './TrustPresentationBar'
import { TrustPresentationProvider, useTrustPresentation } from './TrustPresentation'
import { TrustSeatStudio } from './TrustSeatSection'
import { TRUST_PRESENT_GUTTER, trust } from './trust-tokens'

const SECTION = Object.fromEntries(TRUST_OVERVIEW_SECTIONS.map((item) => [item.id, item])) as Record<
  TrustOverviewSectionId,
  TrustOverviewSectionData
>

export function TrustLandingClient() {
  return (
    <TrustPresentationProvider>
      <TrustLandingBody />
    </TrustPresentationProvider>
  )
}

function TrustLandingBody() {
  const { present } = useTrustPresentation()

  return (
    <main className={cn(trust.shell, 'overflow-x-clip', !present && 'pb-20 sm:pb-24')}>
      <TrustPresentationBar />
      <div
        data-trust-present-gutter={present || undefined}
        className={cn(trust.main, present && [TRUST_PRESENT_GUTTER, 'pb-4 pt-4 sm:pb-4 sm:pt-4'])}
      >
        <TrustOverviewContents className="mb-10" />

        <div className="lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-x-10">
          <TrustOverviewRail />

          <div className={present ? undefined : 'space-y-10 sm:space-y-14'}>
            <TrustOverviewSection section={SECTION['what-this-is']}>
              <TrustOverviewSpec>
                {TRUST_OVERVIEW_SPEC.map((row) => (
                  <TrustOverviewFact key={row.label} label={row.label} value={row.value} />
                ))}
              </TrustOverviewSpec>
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['the-question']} lead={<TrustQuestionBreak />}>
              <TrustOverviewQuestion>{trustOverviewQuestionChildren()}</TrustOverviewQuestion>
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['why-it-matters']}>
              <TrustOverviewWhy>{trustOverviewWhyChildren()}</TrustOverviewWhy>
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['the-path']} hideDeck>
              <TrustOverviewPath />
              <TrustClockList />
              <TrustGoDeeper className="mt-6" hint="How the six chapters sit on one eval cycle.">
                <TrustCourseMap />
              </TrustGoDeeper>
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION['your-seat']}>
              <TrustSeatStudio />
            </TrustOverviewSection>

            <TrustOverviewSection section={SECTION.vocabulary}>
              <TrustVocabGrid />
            </TrustOverviewSection>
          </div>
        </div>

        {present ? null : (
          <p className="mt-16 text-xs text-stone-400">
            <Link href="/workshops" className={trust.link}>
              Workshops
            </Link>
            {' · '}
            <Link href={TRUST_REHEARSE_HREF} className="text-stone-400 underline-offset-2 hover:underline">
              Facilitator
            </Link>
          </p>
        )}
      </div>
    </main>
  )
}
