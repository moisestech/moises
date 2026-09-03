'use client'

import { useEffect, useState } from 'react'
import {
  EVALS_TEACHING,
  TRUST_CASE_A,
  TRUST_CASE_A_CARD_NOTE,
  TRUST_CASE_A_INTRO,
  TRUST_CENTRAL_QUESTION,
  TRUST_LOOKS_RIGHT_FRAME,
  TRUST_ROLES,
  getTrustRole,
  type TrustRoleId,
  type TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { AgentOutputCard } from './AgentOutputCard'
import { TrustChapterFrame } from './TrustChapterFrame'
import { TrustSystemLayers } from './TrustSystemLayers'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE, TRUST_VERDICT_LABEL as VERDICT_LABEL, trust } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

function LooksRightJob({
  role,
  onPick,
}: {
  role: TrustRoleId | null
  onPick: (id: TrustRoleId) => void
}) {
  const selected = getTrustRole(role)
  if (selected) {
    const tone = TRUST_ROLE_TONE[selected.id]
    return (
      <div>
        <p>
          <span className={cn('font-semibold', tone.text)}>{selected.label}.</span> {selected.learnerJob}
        </p>
        <p className="mt-2 text-sm text-stone-500">Change seat</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {TRUST_ROLES.map((entry) => {
            const EntryIcon = ROLE_ICON[entry.id]
            const active = role === entry.id
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => onPick(entry.id)}
                aria-pressed={active}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
                  active
                    ? cn(TRUST_ROLE_TONE[entry.id].border, TRUST_ROLE_TONE[entry.id].fill)
                    : 'border-stone-200 bg-white text-stone-600 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-300'
                )}
              >
                <EntryIcon className="h-3.5 w-3.5" aria-hidden />
                {entry.label}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <ul className="space-y-1">
      {TRUST_ROLES.map((entry) => {
        const Icon = ROLE_ICON[entry.id]
        return (
          <li key={entry.id}>
            <button
              type="button"
              onClick={() => onPick(entry.id)}
              className="w-full text-left text-xs leading-tight"
            >
              <span className={cn('inline-flex items-center gap-1 font-semibold', TRUST_ROLE_TONE[entry.id].text)}>
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {entry.label}.
              </span>{' '}
              <span className="text-stone-600 dark:text-stone-400">{entry.learnerJob}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export function TrustLooksRightLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const [systemOpen, setSystemOpen] = useState(progress.looksRightSystemOpened)
  const voted = Boolean(progress.baselineVote)
  const voteLabel = progress.baselineVote ? VERDICT_LABEL[progress.baselineVote] : null
  const completed = progress.completedChapters.includes('looks-right')

  useEffect(() => {
    if (progress.looksRightSystemOpened) setSystemOpen(true)
  }, [progress.looksRightSystemOpened])

  const openSystem = () => {
    if (!progress.looksRightSystemOpened) {
      update({ looksRightSystemOpened: true })
      markChapterComplete('looks-right')
    }
    setSystemOpen(true)
  }

  return (
    <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
      <div className="space-y-3">
        <header className="rounded-lg border border-stone-200 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900">
          <p className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
            {TRUST_LOOKS_RIGHT_FRAME.where}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-stone-950 dark:text-stone-50">
            {TRUST_LOOKS_RIGHT_FRAME.goal}
          </p>
        </header>

        <section className="rounded-lg border border-stone-200 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
            The card
          </p>
          <p className="mt-0.5 text-sm leading-snug text-stone-800 dark:text-stone-200">{TRUST_CASE_A_INTRO}</p>
        </section>

        <AgentOutputCard compact caseData={TRUST_CASE_A} peeled={systemOpen} />

        {voted ? (
          <div className="space-y-3 rounded-lg border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
            <p className={cn(trust.body, 'text-sm')}>
              Your first call is saved
              {voteLabel ? (
                <>
                  {' '}
                  as <span className="font-semibold">{voteLabel}</span>
                </>
              ) : null}
              . Now open the system and see what the card left out.
            </p>
            <button
              type="button"
              onClick={() => {
                if (systemOpen) {
                  setSystemOpen(false)
                  return
                }
                openSystem()
              }}
              aria-expanded={systemOpen}
              className="inline-flex items-center rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-cyan-500 dark:text-stone-950"
            >
              {systemOpen ? 'Hide the system' : 'Open the system'}
            </button>
            {systemOpen ? <TrustSystemLayers caseData={TRUST_CASE_A} onFirstInteraction={openSystem} /> : null}
          </div>
        ) : null}
      </div>

      <aside className="lg:sticky lg:top-28">
        <div className="space-y-3 rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900">
          <TrustChapterFrame
            compact
            hideWhereGoal
            where={TRUST_LOOKS_RIGHT_FRAME.where}
            goal={TRUST_LOOKS_RIGHT_FRAME.goal}
            card={TRUST_CASE_A_CARD_NOTE}
            job={<LooksRightJob role={progress.role} onPick={(role) => update({ role })} />}
            doNow={TRUST_LOOKS_RIGHT_FRAME.doNow}
            doneWhen={
              completed
                ? 'Complete: your vote is saved and you opened the system.'
                : voted
                  ? TRUST_LOOKS_RIGHT_FRAME.doneAfter
                  : TRUST_LOOKS_RIGHT_FRAME.doneBefore
            }
          />
          <TrustVote
            compact
            legend={TRUST_CENTRAL_QUESTION}
            value={progress.baselineVote}
            onChange={(baselineVote: TrustVerdict) => {
              update({ baselineVote })
            }}
          />
        </div>
      </aside>

      <div className="sr-only" aria-live="polite">
        {voted && voteLabel
          ? completed
            ? `Looks Right complete. Your vote is saved: ${voteLabel}.`
            : `Your vote is saved: ${voteLabel}. Open the system is now available.`
          : null}
      </div>

      <div className="lg:col-span-2">
        {voted ? (
          <details className="rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700">
            <summary className="cursor-pointer text-sm font-semibold text-stone-800 dark:text-stone-100">
              Go deeper
            </summary>
            <div className="mt-3">
              <TrustTeachingCards cards={EVALS_TEACHING['looks-right']} />
            </div>
          </details>
        ) : hydrated ? null : (
          <p className={cn(trust.muted, 'mt-6')}>Loading your progress…</p>
        )}
      </div>
    </section>
  )
}
