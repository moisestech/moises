'use client'

import { useState } from 'react'
import {
  EVALS_TEACHING,
  TRUST_CASE_A,
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
  const [systemOpen, setSystemOpen] = useState(false)
  const voted = Boolean(progress.baselineVote)
  const voteLabel = progress.baselineVote ? VERDICT_LABEL[progress.baselineVote] : null

  return (
    <div>
      <TrustChapterFrame
        where={TRUST_LOOKS_RIGHT_FRAME.where}
        goal={TRUST_LOOKS_RIGHT_FRAME.goal}
        card={TRUST_CASE_A_INTRO}
        job={<LooksRightJob role={progress.role} onPick={(role) => update({ role })} />}
        doNow={TRUST_LOOKS_RIGHT_FRAME.doNow}
        doneWhen={voted ? TRUST_LOOKS_RIGHT_FRAME.doneAfter : TRUST_LOOKS_RIGHT_FRAME.doneBefore}
      />

      <div className="mt-2">
        <AgentOutputCard compact caseData={TRUST_CASE_A} peeled={systemOpen} />
      </div>

      <div className="mt-2">
        <TrustVote
          compact
          legend={TRUST_CENTRAL_QUESTION}
          value={progress.baselineVote}
          onChange={(baselineVote: TrustVerdict) => {
            update({ baselineVote })
            markChapterComplete('looks-right')
          }}
        />
      </div>

      <div className="sr-only" aria-live="polite">
        {voted && voteLabel
          ? `Your vote is saved: ${voteLabel}. Open the system is now available.`
          : null}
      </div>

      {voted ? (
        <div className="mt-8 space-y-4">
          <p className={cn(trust.body, 'max-w-3xl')}>
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
            onClick={() => setSystemOpen((open) => !open)}
            aria-expanded={systemOpen}
            className="inline-flex items-center rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-cyan-500 dark:text-stone-950"
          >
            {systemOpen ? 'Hide the system' : 'Open the system'}
          </button>
          {systemOpen ? <TrustSystemLayers caseData={TRUST_CASE_A} /> : null}
          <details className="rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700">
            <summary className="cursor-pointer text-sm font-semibold text-stone-800 dark:text-stone-100">
              Go deeper
            </summary>
            <div className="mt-3">
              <TrustTeachingCards cards={EVALS_TEACHING['looks-right']} />
            </div>
          </details>
        </div>
      ) : hydrated ? null : (
        <p className={cn(trust.muted, 'mt-6')}>Loading your progress…</p>
      )}
    </div>
  )
}
