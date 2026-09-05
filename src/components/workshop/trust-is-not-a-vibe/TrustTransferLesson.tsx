'use client'

import {
  EVALS_TEACHING,
  TRUST_CASE_B,
  getTrustLessonPacket,
  getTrustRole,
  type TrustRubricKey,
  type TrustRubricScore,
} from '@/content/workshops/trust-is-not-a-vibe'
import { ExitTicket } from './ExitTicket'
import { OutputPeel } from './OutputPeel'
import { TransferRubric } from './TransferRubric'
import { TrustEvalPlan } from './TrustEvalPlan'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustMethodTransfer } from './TrustMethodTransfer'
import { TrustPacketJob, TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { trust } from './trust-tokens'
import { evalPlanComplete, roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

const PACKET = getTrustLessonPacket('transfer')!

export function TrustTransferLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
  const voted = Boolean(progress.transferVote)
  const completed = progress.completedChapters.includes('transfer')

  const tryFinish = (patch: { transferVote?: typeof progress.transferVote; evalPlan?: typeof progress.evalPlan }) => {
    const transferVote = patch.transferVote ?? progress.transferVote
    const evalPlan = patch.evalPlan ?? progress.evalPlan
    if (transferVote && evalPlanComplete(evalPlan)) markChapterComplete('transfer')
  }

  const seeIt = (
    <div className="space-y-6">
      <OutputPeel caseData={TRUST_CASE_B} />
      <TrustMethodTransfer />
    </div>
  )

  const tryIt = (
    <TrustVote
      legend="Unseen case — Allow, Ask, or Deny?"
      value={progress.transferVote}
      onChange={(transferVote) => {
        update({ transferVote })
        tryFinish({ transferVote })
      }}
    />
  )

  const checkIt = voted ? (
    <TrustEvalPlan
      plan={progress.evalPlan}
      onChange={(patch) => {
        const evalPlan = { ...progress.evalPlan, ...patch }
        update({ evalPlan })
        tryFinish({ evalPlan })
      }}
    />
  ) : undefined

  const announce = completed
    ? 'Transfer complete. Vote and evaluation plan are saved.'
    : voted
      ? 'Vote saved. Write the evaluation plan to finish this chapter.'
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
      checkCaption="Write the evaluation plan you would bring."
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
      deeperHint="Leave a closing sentence, score the system, teach the other seat, then the one rule to carry out."
      deeper={
        <>
          <ExitTicket value={progress.exitTicket} onChange={(exitTicket) => update({ exitTicket })} />
          <TransferRubric
            rubric={progress.rubric}
            onScore={(key: TrustRubricKey, score: TrustRubricScore) => {
              update({ rubric: { ...progress.rubric, [key]: score } })
            }}
          />
          <label className="block rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
              Role-switch teach-back
            </span>
            <span className="mt-1 block text-sm font-semibold text-stone-900 dark:text-stone-100">
              {getTrustRole(progress.role)?.teachBackPrompt ??
                'Pick a seat first, then explain another lens in one sentence.'}
            </span>
            <textarea
              value={progress.teachBack}
              onChange={(event) => update({ teachBack: event.target.value })}
              rows={3}
              className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />
          </label>
          <TrustTeachingCards cards={EVALS_TEACHING.transfer} roleId={progress.role} />
          <p className={trust.muted}>{TRUST_CASE_B.fixtureNote}</p>
          <TrustInstructorClip chapterId="transfer" />
        </>
      }
    />
  )
}
