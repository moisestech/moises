'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  EVALS_SOURCE,
  EVALS_TRANSLATION,
  getTrustChapterPath,
  getTrustSpeakerNote,
  TRUST_BASE,
  TRUST_CHAPTERS,
  TRUST_COMBINED_STRATEGY_DESIGN,
  TRUST_DECISION_CARD_HREF,
  TRUST_LEARN_BASE,
  TRUST_LIVE_BEATS,
  TRUST_PROBLEM_NAME,
  TRUST_SESSION_TITLE,
  TRUST_SURFACES_HREF,
  TRUST_THESIS,
  TRUST_TITLE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustCountdown } from './TrustCountdown'
import { TrustLearnClient } from './TrustLearnClient'
import { trust } from './trust-tokens'

export function TrustRehearseClient() {
  const [running, setRunning] = useState(false)
  const [previewSlug, setPreviewSlug] = useState(TRUST_CHAPTERS[0].slug)

  return (
    <div className={cn(trust.shell, 'pb-24')}>
      <div className={cn(trust.main, 'max-w-6xl')}>
        <p className={trust.eyebrow}>Facilitator · not indexed · {TRUST_SESSION_TITLE}</p>
        <h1 className={cn(trust.title, 'mt-2')}>Rehearse · {TRUST_TITLE}</h1>
        <p className={cn(trust.body, 'mt-3 max-w-2xl')}>
          Live 30-minute clock for {TRUST_SESSION_TITLE}. Same interactions as the public lab. Problem name in the
          room: {TRUST_PROBLEM_NAME}. {TRUST_THESIS}
        </p>
        <p className="mt-2 max-w-2xl text-xs text-stone-500">
          {EVALS_SOURCE.honesty} Skip {EVALS_SOURCE.skip.map((item) => item.clock).join(' and ')}.
        </p>
        <p className="mt-2 text-xs text-stone-500">
          Three-person room: {TRUST_COMBINED_STRATEGY_DESIGN.label}. {TRUST_COMBINED_STRATEGY_DESIGN.note}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-stone-700 dark:bg-stone-900">
          <TrustCountdown running={running} />
          <button
            type="button"
            onClick={() => setRunning((value) => !value)}
            className={running ? trust.btnSecondary : trust.btnPrimary}
          >
            {running ? 'Reset clock' : 'Start 30:00'}
          </button>
          <Link href={TRUST_BASE} className={trust.link}>
            Public landing
          </Link>
          <Link href={`${TRUST_LEARN_BASE}/${previewSlug}`} className={trust.link}>
            Open this chapter in LMS
          </Link>
          <Link href={TRUST_SURFACES_HREF} className={trust.link}>
            Five surfaces
          </Link>
          <Link href={TRUST_DECISION_CARD_HREF} className={trust.link}>
            Decision card
          </Link>
        </div>

        <section className="mt-8">
          <h2 className={trust.h2}>Live 30-minute clock</h2>
          <p className={cn(trust.muted, 'mt-2')}>
            Self-guided LMS stays six chapters. This clock is the room. Skip The Loop if you are on this table.
          </p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {TRUST_LIVE_BEATS.map((beat) => (
              <li
                key={beat.id}
                className={cn(
                  'rounded-xl border px-3 py-3',
                  beat.interrupt
                    ? 'border-amber-400 bg-amber-50 dark:border-amber-500 dark:bg-amber-950/30'
                    : beat.chapterId === 'the-loop'
                      ? 'border-dashed border-stone-300 dark:border-stone-600'
                      : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
                )}
              >
                <button type="button" className="w-full text-left" onClick={() => setPreviewSlug(beat.chapterId)}>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">
                    {String(beat.startMin).padStart(2, '0')}–{String(beat.endMin).padStart(2, '0')}
                    {beat.interrupt ? ' · interrupt' : ''}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{beat.title}</p>
                  <p className="mt-1 text-xs text-stone-500">{beat.cue}</p>
                </button>
              </li>
            ))}
          </ol>
        </section>

        <ol className="mt-10 space-y-6">
          {TRUST_CHAPTERS.map((chapter) => {
            const notes = getTrustSpeakerNote(chapter.id)
            const path = getTrustChapterPath(chapter.id)
            const active = previewSlug === chapter.slug
            return (
              <li
                key={chapter.id}
                className={cn(
                  'rounded-xl border p-4',
                  active
                    ? 'border-cyan-400 bg-cyan-50/40 dark:bg-cyan-950/20'
                    : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900'
                )}
              >
                <button type="button" className="w-full text-left" onClick={() => setPreviewSlug(chapter.slug)}>
                  <p className="text-[10px] uppercase tracking-wide text-stone-500">
                    {chapter.clock} · {chapter.durationHint}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold">
                    {chapter.number}. {chapter.title}
                  </h2>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{chapter.summary}</p>
                </button>
                <dl className="mt-3 grid gap-2 text-xs text-stone-600 sm:grid-cols-2 dark:text-stone-400">
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-stone-500">Advance when</dt>
                    <dd className="mt-0.5">{path.advanceWhen}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-stone-500">Likely misconception</dt>
                    <dd className="mt-0.5">{path.misconception}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-stone-500">Expected response</dt>
                    <dd className="mt-0.5">{path.expectedResponse}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-stone-500">Follow-up probe</dt>
                    <dd className="mt-0.5">{path.probe}</dd>
                  </div>
                </dl>
                {notes?.interrupt ? (
                  <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                    Interrupt: {notes.interrupt}
                  </p>
                ) : null}
                {notes ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-stone-700 dark:text-stone-300">
                    {notes.beats.map((beat) => (
                      <li key={beat}>{beat}</li>
                    ))}
                  </ul>
                ) : null}
                {EVALS_TRANSLATION.filter((beat) => beat.chapterId === chapter.id).length > 0 ? (
                  <details className="mt-4 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 dark:border-stone-700 dark:bg-stone-800/40">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Source English · {EVALS_SOURCE.title}
                    </summary>
                    <div className="mt-3 space-y-3">
                      {EVALS_TRANSLATION.filter((beat) => beat.chapterId === chapter.id).map((beat) => (
                        <div key={beat.clock}>
                          <p className="text-[10px] uppercase tracking-wide text-stone-400">
                            {beat.clock} · {beat.heading}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{beat.body}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : null}
              </li>
            )
          })}
        </ol>

        <section className="mt-12 border-t border-stone-200 pt-8 dark:border-stone-800">
          <h2 className={trust.h2}>Run the same interactions</h2>
          <p className={cn(trust.muted, 'mt-2 mb-6')}>Preview of {previewSlug}. Progress saves locally, shared with the LMS.</p>
          <TrustLearnClient slug={previewSlug} embedded />
        </section>
      </div>
    </div>
  )
}
