'use client'

import { useEffect, useState } from 'react'
import {
  EVALS_TEACHING,
  TRUST_CASE_A,
  TRUST_CASE_A_INTRO,
  TRUST_CENTRAL_QUESTION,
  TRUST_ROLES,
  getTrustLessonPacket,
  getTrustRole,
  type TrustRoleId,
  type TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustPolishAxis } from './TrustPolishAxis'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustSpecimen } from './TrustSpecimen'
import { TrustSystemLayers } from './TrustSystemLayers'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE, TRUST_VERDICT_LABEL as VERDICT_LABEL } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

const PACKET = getTrustLessonPacket('looks-right')!

/** Chapter 1 is where the learner takes a seat, so the job field is the picker. */
function LooksRightJob({
  role,
  onPick,
}: {
  role: TrustRoleId | null
  onPick: (id: TrustRoleId) => void
}) {
  const selected = getTrustRole(role)
  if (selected) {
    return (
      <div>
        <p>{selected.learnerJob}</p>
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
            <button type="button" onClick={() => onPick(entry.id)} className="w-full text-left text-xs leading-tight">
              <span className={cn('inline-flex items-center gap-1 font-semibold', TRUST_ROLE_TONE[entry.id].text)}>
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {entry.label}.
              </span>{' '}
              <span className="text-stone-600 dark:text-stone-400">
                {PACKET.roleSignals[entry.id] ?? entry.learnerJob}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export function TrustLooksRightLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
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

  const seeIt = (
    <div className="space-y-2">
      <p className="text-sm leading-snug text-stone-800 dark:text-stone-200">{TRUST_CASE_A_INTRO}</p>
      <TrustSpecimen
        caseData={TRUST_CASE_A}
        underneathUnlocked={systemOpen}
        lockedNote="Vote first, then open the system. This shows the request the card would actually send."
      />
    </div>
  )

  const tryIt = (
    <TrustVote
      compact
      legend={TRUST_CENTRAL_QUESTION}
      value={progress.baselineVote}
      onChange={(baselineVote: TrustVerdict) => update({ baselineVote })}
    />
  )

  const checkIt = voted ? (
    <div className="space-y-3">
      <p className="text-sm text-stone-800 dark:text-stone-200">
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
      {completed ? (
        <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
          Complete: your vote is saved and you opened the system.
        </p>
      ) : null}
    </div>
  ) : undefined

  const announce = voted && voteLabel
    ? completed
      ? `Looks Right complete. Your vote is saved: ${voteLabel}.`
      : `Your vote is saved: ${voteLabel}. Open the system is now available.`
    : undefined

  return (
    <TrustLessonPacket
      where={PACKET.where}
      idea={PACKET.idea}
      seeIt={seeIt}
      tryIt={hydrated ? tryIt : <p className="text-sm text-stone-500">Loading your progress…</p>}
      checkIt={checkIt}
      job={<LooksRightJob role={progress.role} onPick={(role) => update({ role })} />}
      doNow={PACKET.tryPrompt}
      doneWhen={voted ? PACKET.doneAfter : PACKET.doneBefore}
      seat={<TrustSeatStance roleId={progress.role} allSeats={present} />}
      announce={announce}
      deeperHint="Why one good run is not proof, polish against evidence, and the clip."
      deeper={
        <>
          <TrustTeachingCards cards={EVALS_TEACHING['looks-right']} roleId={progress.role} />
          <TrustPolishAxis />
          <TrustInstructorClip chapterId="looks-right" />
        </>
      }
    />
  )
}
