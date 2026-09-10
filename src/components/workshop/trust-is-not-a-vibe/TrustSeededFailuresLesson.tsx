'use client'

import { useEffect, useState } from 'react'
import {
  EVALS_TEACHING,
  TRUST_CASE_A,
  getTrustLessonPacket,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { FailureTokens } from './FailureTokens'
import { TrustClaimTrace } from './TrustClaimTrace'
import { TrustEvalDiagram } from './TrustEvalDiagram'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustKeepTogether } from './TrustPresentPortions'
import { TrustCaseStage } from './TrustCaseStage'
import { TrustPacketJob, TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode, useTrustPendingReveal } from './TrustPresentation'
import { trustPresent } from './trust-tokens'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

const PACKET = getTrustLessonPacket('seeded-failures')!
const IDEA_PORTRAIT_ID = 'idea-03-seeded-failures-find-the-system-break' as const

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
    <>
      <TrustEvalDiagram id="eval-03" />
      <TrustKeepTogether>
        <TrustCaseStage
          caseData={TRUST_CASE_A}
          underneathUnlocked
          copy={
            <>
              <p
                className={cn(
                  present
                    ? cn(trustPresent.body, 'max-w-none')
                    : 'text-xl leading-relaxed text-stone-800 dark:text-stone-200'
                )}
              >
                {PACKET.seeCaption}
              </p>
              {present ? null : <TrustClaimTrace className="mt-4" />}
            </>
          }
        />
      </TrustKeepTogether>
    </>
  )

  const tryIt = (
    <TrustKeepTogether>
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
    </TrustKeepTogether>
  )

  const checkIt = failuresRevealed ? (
    <>
      <TrustEvalDiagram id="eval-04" />
      <TrustIdeaPortrait id={IDEA_PORTRAIT_ID} />
      <p
        data-trust-seeded-claim
        className={cn(
          'font-medium text-stone-800 dark:text-stone-200',
          present ? trustPresent.body : 'text-xl leading-relaxed'
        )}
      >
        A correct-looking answer can still be produced by an unsafe process.
      </p>
      <TrustKeepTogether className={cn('space-y-4', present && 'space-y-6')}>
        <TrustVote
          legend="Vote again — after seeing the system"
          value={progress.revote}
          onChange={(revote) => {
            update({ revote })
            if (named >= 3) markChapterComplete('seeded-failures')
          }}
        />
        {completed ? (
          <p className={cn('font-medium text-stone-900 dark:text-stone-100', present ? trustPresent.note : 'text-sm')}>
            {PACKET.doneAfter}
          </p>
        ) : null}
      </TrustKeepTogether>
    </>
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
      chapterId={PACKET.chapterId}
      where={PACKET.where}
      idea={PACKET.idea}
      ideaFigure={<TrustIdeaPortrait id={IDEA_PORTRAIT_ID} priority />}
      seeIt={seeIt}
      seeCaption={PACKET.seeCaption}
      tryIt={hydrated ? tryIt : <p className="text-sm text-stone-500">Loading your progress…</p>}
      tryCaption={PACKET.tryPrompt}
      checkIt={checkIt}
      checkCaption="After you see what was planted, vote again."
      checkPortionsClassName="space-y-10"
      roleCheckAfter
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
      roleId={progress.role}
      roleCheckChoice={roleCheckChoice(progress, PACKET.chapterId)}
      onRoleCheck={(choice) => update(withRoleCheck(progress, PACKET.chapterId, choice))}
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
