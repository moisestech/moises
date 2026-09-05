'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TrustChapterFrame } from './TrustChapterFrame'
import { TrustGoDeeper } from './TrustGoDeeper'
import { TrustPageContents, TrustPageRail } from './TrustPageRail'
import { useRegisterTrustStep, useTrustPresentation } from './TrustPresentation'
import { TRUST_SCROLL_MT, trustLesson } from './trust-tokens'

function PacketStep({
  step,
  label,
  deck,
  className,
  children,
}: {
  step: number
  label: string
  deck?: string
  className?: string
  children: ReactNode
}) {
  const { ref, current, focused, select } = useRegisterTrustStep(label)

  return (
    <section
      className={cn(
        'rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
        current && 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950',
        className
      )}
    >
      <button
        ref={ref}
        type="button"
        tabIndex={-1}
        data-trust-step
        data-trust-step-current={current || undefined}
        aria-expanded={focused}
        onClick={select}
        className={cn(
          'flex w-full flex-col items-start px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
          TRUST_SCROLL_MT
        )}
      >
        <p className={trustLesson.eyebrow}>{step}</p>
        <p className={cn(trustLesson.title, 'mt-1')}>{label}</p>
        {deck ? <p className={trustLesson.deck}>{deck}</p> : null}
      </button>
      {focused ? (
        <div className="border-t border-stone-200 px-3 py-3 dark:border-stone-700">{children}</div>
      ) : null}
    </section>
  )
}

/**
 * The repeatable chapter packet. One portion is open at a time. The left rail
 * and the presentation arrows share the same step list. Seat, job, and do-now
 * live in a closed accordion above The idea so a chapter opens on the claim.
 */
export function TrustLessonPacket({
  where,
  idea,
  ideaBody,
  seeIt,
  seeCaption,
  tryIt,
  tryCaption,
  checkIt,
  checkCaption,
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
  /** Richer idea copy. When omitted, `idea` is the single paragraph. */
  ideaBody?: ReactNode
  seeIt: ReactNode
  seeCaption?: string
  tryIt: ReactNode
  tryCaption?: string
  checkIt?: ReactNode
  checkCaption?: string
  job: ReactNode
  doNow: string
  doneWhen: string
  seat?: ReactNode
  deeper?: ReactNode
  deeperHint?: string
  announce?: string
}) {
  const { ref: ideaRef, current: ideaCurrent, focused: ideaFocused, select: selectIdea } =
    useRegisterTrustStep('The idea')
  const { focusIndex, releaseFocus } = useTrustPresentation()
  const [briefOpen, setBriefOpen] = useState(false)

  useEffect(() => {
    if (focusIndex >= 0) setBriefOpen(false)
  }, [focusIndex])

  const toggleBrief = () => {
    if (briefOpen) {
      setBriefOpen(false)
      selectIdea()
      return
    }
    setBriefOpen(true)
    releaseFocus()
  }

  return (
    <div className="lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-x-10">
      <TrustPageRail />
      <div className="min-w-0 space-y-3">
        <TrustPageContents className="mb-4" />

        <section
          className={cn(
            'rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
            briefOpen && 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950'
          )}
        >
          <button
            type="button"
            data-trust-brief
            aria-expanded={briefOpen}
            onClick={toggleBrief}
            className={cn(
              'flex w-full flex-col items-start px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
              TRUST_SCROLL_MT
            )}
          >
            <p className={trustLesson.eyebrow}>On this chapter</p>
            <p className={cn(trustLesson.title, 'mt-1')}>Your seat</p>
            {briefOpen ? null : (
              <p className={trustLesson.deck}>Seat, job, and what to do now</p>
            )}
          </button>
          {briefOpen ? (
            <div className="border-t border-stone-200 px-3 py-3 dark:border-stone-700">
              {seat ? <div className="mb-3">{seat}</div> : null}
              <TrustChapterFrame
                compact
                hideWhereGoal
                where={where}
                goal={idea}
                job={job}
                doNow={doNow}
                doneWhen={doneWhen}
              />
            </div>
          ) : null}
        </section>

        <section
          className={cn(
            'rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
            ideaCurrent && 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950'
          )}
        >
          <button
            ref={ideaRef}
            type="button"
            tabIndex={-1}
            data-trust-step
            data-trust-step-current={ideaCurrent || undefined}
            aria-expanded={ideaFocused}
            onClick={selectIdea}
            className={cn(
              'flex w-full flex-col items-start px-3 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset',
              TRUST_SCROLL_MT
            )}
          >
            <p className={trustLesson.eyebrow}>{where}</p>
            <p className={cn(trustLesson.title, 'mt-1')}>The idea</p>
          </button>
          {ideaFocused ? (
            <div className={cn('space-y-3 border-t border-stone-200 px-3 py-3 dark:border-stone-700', trustLesson.body)}>
              {ideaBody ?? <p>{idea}</p>}
            </div>
          ) : null}
        </section>

        <PacketStep step={2} label="See it" deck={seeCaption}>
          {seeIt}
        </PacketStep>

        <PacketStep step={3} label="Try it" deck={tryCaption}>
          {tryIt}
        </PacketStep>

        {checkIt ? (
          <PacketStep step={4} label="Check it" deck={checkCaption}>
            {checkIt}
          </PacketStep>
        ) : null}

        {announce ? (
          <div className="sr-only" aria-live="polite">
            {announce}
          </div>
        ) : null}

        {deeper ? <TrustGoDeeper hint={deeperHint}>{deeper}</TrustGoDeeper> : null}
      </div>
    </div>
  )
}
