'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TrustChapterFrame } from './TrustChapterFrame'
import { TrustGoDeeper } from './TrustGoDeeper'
import { TRUST_SCROLL_MT, TRUST_STICKY_TOP } from './trust-tokens'

function PacketStep({
  step,
  label,
  className,
  children,
}: {
  step: number
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      className={cn(
        'rounded-lg border border-stone-200 bg-white px-3 py-3 dark:border-stone-700 dark:bg-stone-900',
        TRUST_SCROLL_MT,
        className
      )}
    >
      <p className="font-space-mono text-[11px] uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
        {step} · {label}
      </p>
      <div className="mt-2">{children}</div>
    </section>
  )
}

/**
 * The repeatable chapter packet. DOM order is the mobile learning order —
 * where you are, the goal, the case, your seat and instruction, the exercise,
 * feedback, then optional depth. On large screens the orientation block moves
 * into a sticky task rail beside the workspace.
 *
 * The packet owns layout and orientation. Each chapter owns its own exercise.
 */
export function TrustLessonPacket({
  where,
  idea,
  seeIt,
  tryIt,
  checkIt,
  job,
  doNow,
  doneWhen,
  seat,
  deeper,
  deeperHint,
  announce,
}: {
  where: string
  idea: string
  seeIt: ReactNode
  tryIt: ReactNode
  checkIt?: ReactNode
  job: ReactNode
  doNow: string
  doneWhen: string
  seat?: ReactNode
  deeper?: ReactNode
  deeperHint?: string
  announce?: string
}) {
  // The rail spans the workspace rows so its inner block can stick within them.
  const railSpan = checkIt ? 'lg:row-span-4' : 'lg:row-span-3'

  return (
    // Items stretch by design: the rail cell must fill the rows it spans, or its sticky child cannot travel.
    <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <header
        className={cn(
          'rounded-lg border border-stone-200 bg-white px-3 py-3 lg:col-start-1 dark:border-stone-700 dark:bg-stone-900',
          TRUST_SCROLL_MT
        )}
      >
        <p className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">{where}</p>
        <p className="mt-1 text-base font-semibold leading-snug text-stone-950 dark:text-stone-50">1 · The idea</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-800 dark:text-stone-200">{idea}</p>
      </header>

      <PacketStep step={2} label="See it" className="lg:col-start-1">
        {seeIt}
      </PacketStep>

      <div className={cn('lg:col-start-2 lg:row-start-1', railSpan)}>
        <div
          className={cn(
            'space-y-3 rounded-xl border border-stone-200 bg-white p-3 lg:sticky dark:border-stone-700 dark:bg-stone-900',
            TRUST_STICKY_TOP
          )}
        >
          {seat ? (
            <div>
              <p className="font-space-mono text-[10px] uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
                Your seat
              </p>
              <div className="mt-1">{seat}</div>
            </div>
          ) : null}
          <TrustChapterFrame compact hideWhereGoal where={where} goal={idea} job={job} doNow={doNow} doneWhen={doneWhen} />
        </div>
      </div>

      <PacketStep step={3} label="Try it" className="lg:col-start-1">
        {tryIt}
      </PacketStep>

      {checkIt ? (
        <PacketStep step={4} label="Check it" className="lg:col-start-1">
          {checkIt}
        </PacketStep>
      ) : null}

      {announce ? (
        <div className="sr-only" aria-live="polite">
          {announce}
        </div>
      ) : null}

      {deeper ? (
        <div className="lg:col-span-2 lg:col-start-1">
          <TrustGoDeeper hint={deeperHint}>{deeper}</TrustGoDeeper>
        </div>
      ) : null}
    </section>
  )
}
