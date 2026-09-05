'use client'

import { useEffect, useState } from 'react'
import {
  EVALS_TEACHING,
  TRUST_CASE_A,
  getTrustLessonPacket,
} from '@/content/workshops/trust-is-not-a-vibe'
import { FailureTokens } from './FailureTokens'
import { TrustClaimTrace } from './TrustClaimTrace'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustPacketJob, TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode, useTrustPendingReveal } from './TrustPresentation'
import { TrustSpecimen } from './TrustSpecimen'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { useTrustProgress } from './useTrustProgress'

const PACKET = getTrustLessonPacket('seeded-failures')!

export function TrustSeededFailuresLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
  const [failuresRevealed, setFailuresRevealed] = useState(false)

  useEffect(() => {
    if (progress.namedFailures.length > 0) setFailuresRevealed(true)
  }, [progress.namedFailures.length])

  useTrustPendingReveal(
    failuresRevealed ? null : 'The six planted failures are still hidden.'
  )

  const named = progress.namedFailures.length
  const completed = progress.completedChapters.includes('seeded-failures')

  const seeIt = (
    <div className="space-y-4">
      <TrustSpecimen caseData={TRUST_CASE_A} underneathUnlocked />
      <TrustClaimTrace />
    </div>
  )

  const tryIt = (
    <FailureTokens
      failures={TRUST_CASE_A.failures}
      selected={progress.namedFailures}
      revealed={failuresRevealed}
      onReveal={() => setFailuresRevealed(true)}
      onToggle={(id) => {
        const namedFailures = progress.namedFailures.includes(id)
          ? progress.namedFailures.filter((item) => item !== id)
          : [...progress.namedFailures, id]
        update({ namedFailures })
        if (namedFailures.length >= 3 && progress.revote) markChapterComplete('seeded-failures')
      }}
    />
  )

  const checkIt = failuresRevealed ? (
    <div className="space-y-4">
      <TrustVote
        legend="Vote again — after seeing the system"
        value={progress.revote}
        onChange={(revote) => {
          update({ revote })
          if (named >= 3) markChapterComplete('seeded-failures')
        }}
      />
      <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
        A correct-looking answer can still be produced by an unsafe process.
      </p>
      {completed ? (
        <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{PACKET.doneAfter}</p>
      ) : null}
    </div>
  ) : undefined

  const announce =
    named >= 3 && progress.revote
      ? `Seeded Failures complete. ${named} failures named.`
      : named >= 3
        ? `${named} failures named. Vote again to finish this chapter.`
        : failuresRevealed
          ? 'The six planted failures are visible. Name at least three.'
          : undefined

  return (
    <TrustLessonPacket
      where={PACKET.where}
      idea={PACKET.idea}
      seeIt={seeIt}
      seeCaption={PACKET.seeCaption}
      tryIt={hydrated ? tryIt : <p className="text-sm text-stone-500">Loading your progress…</p>}
      tryCaption={PACKET.tryPrompt}
      checkIt={checkIt}
      checkCaption="After you see what was planted, vote again."
      job={
        <TrustPacketJob
          roleId={progress.role}
          signal={progress.role ? PACKET.roleSignals[progress.role] : undefined}
          fallback="Pick a seat on Looks Right or Four Lenses. It stays with you here."
        />
      }
      doNow={PACKET.tryPrompt}
      doneWhen={completed ? PACKET.doneAfter : PACKET.doneBefore}
      seat={<TrustSeatStance roleId={progress.role} allSeats={present} />}
      announce={announce}
      deeperHint="The failure chain, benchmarks versus evals, and the clip."
      deeper={
        <>
          <TrustTeachingCards cards={EVALS_TEACHING['seeded-failures']} roleId={progress.role} />
          <TrustInstructorClip chapterId="seeded-failures" />
        </>
      }
    />
  )
}
