'use client'

import Link from 'next/link'
import {
  TRUST_PROBLEM_NAME,
  TRUST_REHEARSE_HREF,
  TRUST_SECONDARY_LINE,
  TRUST_INSTRUCTOR_CLIPS,
  trustIncompleteRequired,
  trustOptionalStills,
  trustInstructorGroupStatus,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import {
  TrustAloneStudio,
  TrustClockList,
  TrustIslandMoment,
  TrustVocabGrid,
} from './TrustLandingInteract'
import { TrustSeatStudio } from './TrustSeatSection'
import { TrustSection } from './TrustSection'
import { TrustMissingStillBadge } from './TrustMissingStill'
import { TrustQuestionBreak } from './TrustQuestionBreak'
import { trust } from './trust-tokens'

export function TrustLandingClient() {
  return (
    <main className={cn(trust.shell, 'overflow-x-clip pb-20 sm:pb-24')}>
      <div className={trust.main}>
        <TrustQuestionBreak className="mt-4" />

        <TrustSection
          kind="inspect"
          title={TRUST_SECONDARY_LINE}
          note="Hover a line. Three jobs. One harness."
        >
          <TrustIslandMoment />
        </TrustSection>

        <TrustSection
          kind="read"
          title={TRUST_PROBLEM_NAME}
          note="Hover a goal. The picture changes."
        >
          <TrustAloneStudio />
        </TrustSection>

        <TrustSection
          kind="pick"
          title="Four seats, one case"
          note="Choose a seat. It stays with you through the lab."
        >
          <TrustSeatStudio />
        </TrustSection>

        <TrustSection
          kind="inspect"
          title="Field vocabulary"
          note="Tap a term for the meaning, then follow it into the chapter that teaches it."
        >
          <TrustVocabGrid />
        </TrustSection>

        <TrustSection kind="clock" title="The path">
          <TrustClockList />
        </TrustSection>
        {trustIncompleteRequired().length > 0 || trustOptionalStills().length > 0 ? (
          <section className="mt-10 rounded-xl border border-dashed border-amber-400/70 bg-amber-50/50 p-4 dark:border-amber-500/50 dark:bg-amber-950/20">
            <h2 className="text-sm font-bold text-amber-950 dark:text-amber-50">Register · outstanding media</h2>
            <p className="mt-1 max-w-2xl text-xs text-amber-900/80 dark:text-amber-100/80">
              Derived from the same register as Surfaces. Interactive exercises stay authoritative. A poster is not a
              finished recording.
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {trustIncompleteRequired().map(([, item]) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-1 rounded-lg border border-amber-300/60 bg-white/70 px-3 py-2 dark:border-amber-800 dark:bg-stone-950/40"
                >
                  <TrustMissingStillBadge status={item.status} filename={item.surfaceFilename} />
                  <p className="text-xs font-semibold text-stone-800 dark:text-stone-100">{item.label}</p>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    {item.kind}
                    {item.reusedFrom ? ` · reused from ${item.reusedFrom}` : ''} · {item.depiction}
                  </p>
                </li>
              ))}
              {trustOptionalStills().map(([, item]) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-1 rounded-lg border border-stone-200 bg-white/70 px-3 py-2 dark:border-stone-700 dark:bg-stone-950/40"
                >
                  <TrustMissingStillBadge status={item.status} filename={item.surfaceFilename} />
                  <p className="text-xs font-semibold text-stone-800 dark:text-stone-100">{item.label}</p>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Optional · {item.kind} · {item.depiction}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-amber-900/80 dark:text-amber-100/80">
              Instructor clips · {trustInstructorGroupStatus()} · {TRUST_INSTRUCTOR_CLIPS.length} chapters. Complete only
              with mp4 + WebVTT.
            </p>
          </section>
        ) : null}

        <p className="mt-8 text-xs text-stone-400">
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
