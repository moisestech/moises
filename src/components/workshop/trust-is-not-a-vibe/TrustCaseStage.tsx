'use client'

import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import type { TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustSpecimen } from './TrustSpecimen'
import { usePresentationMode } from './TrustPresentation'
import { trustPresentChrome } from './trust-tokens'

function trustCaseStageGrid(present: boolean) {
  return present
    ? 'grid items-start gap-8 md:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)]'
    : 'grid items-start gap-6 md:grid-cols-[minmax(16rem,38ch)_minmax(0,1fr)]'
}

const PEEK_FRAME = {
  self: 'h-64 max-h-64',
  present: 'h-[min(28rem,48dvh)] max-h-[min(28rem,48dvh)]',
} as const

function CardFrame({
  peeking,
  reserve,
  present,
  children,
}: {
  peeking: boolean
  reserve: boolean
  present: boolean
  children?: ReactNode
}) {
  const height = present ? PEEK_FRAME.present : PEEK_FRAME.self

  return (
    <div
      data-trust-card-frame
      data-trust-card-peek={peeking || undefined}
      className={cn('w-full min-w-0', peeking && 'relative overflow-hidden', peeking && height, reserve && height)}
    >
      {reserve ? (
        <div
          className={cn(
            'flex h-full w-full items-start rounded-2xl bg-stone-900 p-2.5 ring-1 ring-stone-950/10 sm:p-3 dark:bg-stone-800 dark:ring-white/10',
            height
          )}
          aria-hidden
        >
          <p className="px-1 font-space-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300/70">
            Specimen
          </p>
        </div>
      ) : (
        <>
          <div className={cn(peeking && 'pointer-events-none select-none')} aria-hidden={peeking || undefined}>
            {children}
          </div>
          {peeking ? (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-stone-950"
              aria-hidden
            />
          ) : null}
        </>
      )}
    </div>
  )
}

/**
 * See it / Try it stage: words on the left, the enrollment specimen on the
 * right. Isolated preview hides the words so the card can use the full stage.
 * Pass `peek` to crop the specimen until View the card, and to hold the card
 * column so isolate does not stretch the object.
 */
export function TrustCaseStage({
  copy,
  caseData,
  underneathUnlocked,
  lockedNote,
  peek = false,
  reserve = false,
}: {
  copy: ReactNode
  caseData: TrustCase
  underneathUnlocked?: boolean
  lockedNote?: string
  /** Cropped sneak peek until View the card. Holds column width on isolate. */
  peek?: boolean
  /** Keep the card column as an empty frame (Four Lenses seat mode). */
  reserve?: boolean
}) {
  const { present } = usePresentationMode()
  const [alone, setAlone] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const stageId = useId()
  const holdWidth = peek || reserve
  const peeking = peek && !alone && !reserve

  useEffect(() => {
    if (!alone) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      setAlone(false)
      toggleRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [alone])

  const toggle = reserve ? null : (
    <button
      ref={toggleRef}
      type="button"
      data-trust-card-preview
      aria-pressed={alone}
      aria-controls={stageId}
      onClick={() => setAlone((open) => !open)}
      className={cn(
        present
          ? cn(trustPresentChrome.control, 'h-11 px-4 text-base sm:h-12 sm:px-5 sm:text-lg')
          : 'text-sm font-semibold text-cyan-800 underline decoration-1 underline-offset-2 dark:text-cyan-300'
      )}
    >
      {alone ? 'Back to the text' : 'View the card'}
    </button>
  )

  return (
    <div
      data-trust-card-stage
      data-trust-card-isolated={alone || undefined}
      className={cn(alone && present && !holdWidth && 'space-y-6')}
    >
      {alone && toggle ? <div className={present ? 'mb-6' : 'mb-3'}>{toggle}</div> : null}
      <div
        id={stageId}
        className={cn(alone && !holdWidth ? 'block' : trustCaseStageGrid(present))}
      >
        {alone && !holdWidth ? null : (
          <div
            data-trust-card-copy
            className={cn(
              'min-w-0',
              alone && holdWidth && 'hidden md:block md:invisible',
              present && 'max-h-[min(72dvh,44rem)] overflow-y-auto pr-1'
            )}
            aria-hidden={alone && holdWidth ? true : undefined}
          >
            {alone && holdWidth ? null : (
              <>
                {toggle ? <div className={present ? 'mb-5' : 'mb-3'}>{toggle}</div> : null}
                {copy}
              </>
            )}
          </div>
        )}
        <div data-trust-card-object className="min-w-0 w-full">
          <CardFrame peeking={peeking} reserve={reserve} present={present}>
            {reserve ? null : (
              <TrustSpecimen
                caseData={caseData}
                underneathUnlocked={underneathUnlocked}
                lockedNote={lockedNote}
                inert={peeking}
                className={holdWidth ? 'mx-0 max-w-none w-full' : undefined}
              />
            )}
          </CardFrame>
        </div>
      </div>
    </div>
  )
}
