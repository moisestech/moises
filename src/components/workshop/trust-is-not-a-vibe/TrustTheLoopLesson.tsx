'use client'

import {
  EVALS_TEACHING,
  TRUST_CASE_A,
  TRUST_HARNESS_LINE,
  TRUST_TESTING_LINE,
  TRUST_VOCAB_SLIDE,
  getTrustChapterPath,
  getTrustLessonPacket,
  type TrustLoopStage,
} from '@/content/workshops/trust-is-not-a-vibe'
import { LoopMapper } from './LoopMapper'
import { TrustEvalAnatomy } from './TrustEvalAnatomy'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustMissingStillNote } from './TrustMissingStill'
import { TrustPacketJob, TrustSeatStance } from './TrustSeatStance'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'
import { usePresentationMode } from './TrustPresentation'
import { TrustScoringApproaches, TrustScoringMethods } from './TrustScoringApproaches'
import { TrustScoringTree } from './TrustScoringTree'
import { TrustTeachingCards } from './TrustTeachingCards'
import { SimpleLoopSvg } from './TrustDiagrams'
import { trust, trustLesson } from './trust-tokens'
import { roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

const PACKET = getTrustLessonPacket('the-loop')!
const PATH = getTrustChapterPath('the-loop')

export function TrustTheLoopLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
  const placed = Object.keys(progress.loopPlacements).length
  const completed = progress.completedChapters.includes('the-loop')

  const seeIt = (
    <div className="space-y-3">
      <SimpleLoopSvg />
      <p className={trustLesson.body}>{PACKET.seeCaption}</p>
    </div>
  )

  const tryIt = (
    <LoopMapper
      failures={TRUST_CASE_A.failures}
      placements={progress.loopPlacements}
      onPlace={(failureId, stage: TrustLoopStage) => {
        const loopPlacements = { ...progress.loopPlacements, [failureId]: stage }
        update({ loopPlacements })
        if (Object.keys(loopPlacements).length >= 3) markChapterComplete('the-loop')
      }}
    />
  )

  const checkIt =
    placed >= 3 ? (
      <div className="space-y-3">
        <p className={trustLesson.body}>{PATH.probe}</p>
        <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{PATH.expectedResponse}</p>
        {completed ? (
          <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{PACKET.doneAfter}</p>
        ) : null}
      </div>
    ) : undefined

  const announce =
    placed >= 3
      ? `The Loop complete. ${placed} failures placed.`
      : placed > 0
        ? `${placed} of 3 failures placed.`
        : undefined

  return (
    <TrustLessonPacket
      chapterId={PACKET.chapterId}
      where={PACKET.where}
      idea={PACKET.idea}
      seeIt={seeIt}
      seeCaption={PACKET.seeCaption}
      tryIt={hydrated ? tryIt : <p className="text-sm text-stone-500">Loading your progress…</p>}
      tryCaption={PACKET.tryPrompt}
      checkIt={checkIt}
      checkCaption={PATH.probe}
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
      deeperHint="Eval anatomy, which check settles which question, metric names, vocabulary, and the clip."
      deeper={
        <>
          <TrustEvalAnatomy showOwners={present} />
          <TrustScoringApproaches />
          <p className={trust.muted}>{TRUST_TESTING_LINE}</p>
          <TrustScoringTree />
          <TrustScoringMethods />
          <TrustTeachingCards cards={EVALS_TEACHING['the-loop']} roleId={progress.role} />
          <p className={trust.body}>{TRUST_HARNESS_LINE}</p>
          <dl className="grid gap-2 sm:grid-cols-2">
            {TRUST_VOCAB_SLIDE.map((row) => (
              <div key={row.visible} className="rounded-lg border border-stone-200 px-3 py-2 dark:border-stone-700">
                <dt className="text-sm font-semibold">{row.visible}</dt>
                <dd className="text-xs text-stone-500">{row.technical}</dd>
              </div>
            ))}
          </dl>
          <TrustPlaceholderFrame asset="simpleLoop" />
          <TrustMissingStillNote asset="simpleLoop" />
          <TrustInstructorClip chapterId="the-loop" />
        </>
      }
    />
  )
}
