'use client'

import { useEffect, useState } from 'react'
import {
  EVALS_TEACHING,
  TRUST_CASE_A,
  getTrustLessonPacket,
  type TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ConceptConstellation } from './ConceptConstellation'
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
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { TRUST_VERDICT_CLASS, TRUST_VERDICT_LABEL, trustPresent } from './trust-tokens'
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
      <TrustKeepTogether>
        <ConceptConstellation clusterId="seeded-benchmark" />
      </TrustKeepTogether>
      <TrustKeepTogether>
        <ConceptConstellation clusterId="seeded-inspect" />
      </TrustKeepTogether>
      <TrustKeepTogether className={cn('space-y-4', present && 'space-y-6')}>
        <TrustVote
          legend="Vote again — after seeing the system"
          value={progress.revote}
          onChange={(revote) => {
            update({ revote })
            if (named >= 3) markChapterComplete('seeded-failures')
          }}
        />
        {progress.revote ? (
          <SeededRevoteResult
            verdict={progress.revote}
            named={named}
            prior={progress.baselineVote}
            present={present}
          />
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
      ideaLandscape={<TrustEvalDiagram id="eval-15" />}
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

function SeededRevoteResult({
  verdict,
  named,
  prior,
  present,
}: {
  verdict: TrustVerdict
  named: number
  prior: TrustVerdict | null
  present: boolean
}) {
  const label = TRUST_VERDICT_LABEL[verdict]
  const priorLabel = prior ? TRUST_VERDICT_LABEL[prior] : null
  const ready = named >= 3

  return (
    <div
      data-trust-seeded-result
      className={cn(
        'rounded-xl border px-4 py-4',
        TRUST_VERDICT_CLASS[verdict],
        present && 'px-6 py-5'
      )}
    >
      <p className={cn('font-semibold', present ? trustPresent.body : 'text-lg leading-snug')}>
        Second call saved as {label}.
      </p>
      <p className={cn('mt-2', present ? trustPresent.note : 'text-sm leading-relaxed')}>
        {ready
          ? `${named} planted failures named. A correct-looking card can still come from an unsafe process.`
          : `Name at least three planted failures in Try it to finish this chapter.`}
      </p>
      {ready && priorLabel && prior !== verdict ? (
        <p className={cn('mt-2', present ? trustPresent.note : 'text-sm leading-relaxed')}>
          You moved from {priorLabel} to {label} after seeing the system.
        </p>
      ) : ready && priorLabel ? (
        <p className={cn('mt-2', present ? trustPresent.note : 'text-sm leading-relaxed')}>
          That matches your first call. The system still had planted breaks.
        </p>
      ) : null}
    </div>
  )
}
