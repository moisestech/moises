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
import { TrustEvalDiagram, TrustEvalSupporting } from './TrustEvalDiagram'
import { TrustInstructorClip } from './TrustInstructorClip'
import { ConceptConstellation } from './ConceptConstellation'
import { TrustPolishAxis } from './TrustPolishAxis'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustCaseStage } from './TrustCaseStage'
import { TrustSeatStance, TrustTryHint } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustSystemLayers } from './TrustSystemLayers'
import { TrustKeepTogether } from './TrustPresentPortions'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE, TRUST_VERDICT_LABEL as VERDICT_LABEL, trustLesson, trustPresent } from './trust-tokens'
import { roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

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

  const specimenNote =
    'Vote first, then open the system. This shows the request that screen would actually send.'

  const seeIt = (
    <TrustKeepTogether>
      <TrustCaseStage
        caseData={TRUST_CASE_A}
        underneathUnlocked={systemOpen}
        lockedNote={specimenNote}
        copy={
          <p
            className={cn(
              present
                ? 'text-3xl font-medium leading-snug text-stone-800 sm:text-4xl md:text-5xl dark:text-stone-200'
                : 'text-xl leading-relaxed text-stone-800 dark:text-stone-200'
            )}
          >
            {TRUST_CASE_A_INTRO}
          </p>
        }
      />
    </TrustKeepTogether>
  )

  const tryIt = (
    <TrustKeepTogether>
      <TrustCaseStage
        caseData={TRUST_CASE_A}
        underneathUnlocked={systemOpen}
        lockedNote={specimenNote}
        copy={
          hydrated ? (
            <>
              <TrustTryHint
                roleId={progress.role}
                signal={progress.role ? PACKET.roleSignals[progress.role] : undefined}
              />
              <TrustVote
                compact
                stack
                legend={TRUST_CENTRAL_QUESTION}
                value={progress.baselineVote}
                onChange={(baselineVote: TrustVerdict) => update({ baselineVote })}
              />
            </>
          ) : (
            <p className="text-sm text-stone-500">Loading your progress…</p>
          )
        }
      />
    </TrustKeepTogether>
  )

  const checkIt = voted ? (
    <>
      <TrustKeepTogether className={cn('space-y-3', present && 'space-y-6')}>
        <p className={cn(present ? trustPresent.body : trustLesson.body)}>
          Your first call is saved
          {voteLabel ? (
            <>
              {' '}
              as <span className="font-semibold">{voteLabel}</span>
            </>
          ) : null}
          . Now open the system and see what the card left out.
        </p>
        <ConceptConstellation clusterId="looks-right-vibe" />
        <TrustIdeaPortrait id="idea-01-looks-right-polish-is-not-proof" />
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
          className={cn(
            'inline-flex items-center rounded-lg bg-stone-900 font-semibold text-white dark:bg-cyan-500 dark:text-stone-950',
            present ? 'px-6 py-4 text-xl sm:text-2xl' : 'px-4 py-2.5 text-sm'
          )}
        >
          {systemOpen ? 'Hide the system' : 'Open the system'}
        </button>
        {systemOpen ? <TrustSystemLayers caseData={TRUST_CASE_A} onFirstInteraction={openSystem} /> : null}
        {systemOpen ? (
          <TrustEvalSupporting id="eval-02" summary="Another example">
            <TrustEvalDiagram id="eval-02" />
          </TrustEvalSupporting>
        ) : null}
        {completed ? (
          <p className={cn('font-medium text-stone-900 dark:text-stone-100', present ? trustPresent.note : 'text-sm')}>
            Complete: your vote is saved and you opened the system.
          </p>
        ) : null}
      </TrustKeepTogether>
      <TrustEvalDiagram id="eval-01" />
    </>
  ) : undefined

  const announce = voted && voteLabel
    ? completed
      ? `Looks Right complete. Your vote is saved: ${voteLabel}.`
      : `Your vote is saved: ${voteLabel}. Open the system is now available.`
    : undefined

  return (
    <TrustLessonPacket
      chapterId={PACKET.chapterId}
      where={PACKET.where}
      idea={PACKET.idea}
      seeIt={seeIt}
      seeCaption={PACKET.seeCaption}
      tryIt={tryIt}
      tryCaption={PACKET.tryPrompt}
      hideTryHint
      checkIt={checkIt}
      job={<LooksRightJob role={progress.role} onPick={(role) => update({ role })} />}
      doNow={PACKET.tryPrompt}
      doneWhen={voted ? PACKET.doneAfter : PACKET.doneBefore}
      seat={<TrustSeatStance roleId={progress.role} allSeats={present} />}
      roleId={progress.role}
      roleCheckChoice={roleCheckChoice(progress, PACKET.chapterId)}
      onRoleCheck={(choice) => update(withRoleCheck(progress, PACKET.chapterId, choice))}
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
