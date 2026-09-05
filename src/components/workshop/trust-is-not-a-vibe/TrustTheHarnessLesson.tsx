'use client'

import {
  EVALS_ENGINEER_STACK,
  EVALS_TEACHING,
  TRUST_CASE_A,
  TRUST_TOOL_LANDSCAPE,
  getTrustLessonPacket,
  getTrustRole,
  type TrustControlId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { ControlMatch } from './ControlMatch'
import { TrustCriterionCarry } from './TrustCriterionCarry'
import { TrustEvalArchitecture } from './TrustEvalArchitecture'
import { TrustEvalConfigExample } from './TrustEvalConfigExample'
import { TrustEvalLoopStepper } from './TrustEvalLoopStepper'
import { TrustGoldenSet } from './TrustGoldenSet'
import { TrustGraderMatrix } from './TrustGraderMatrix'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustPacketJob, TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustRegressionRun } from './TrustRegressionRun'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustTraceDiagram } from './TrustTraceDiagram'
import { TrustVote } from './TrustVote'
import { roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

const PACKET = getTrustLessonPacket('the-harness')!

function harnessComplete(matches: Record<string, TrustControlId | undefined>, safeguard: string, verdict: unknown) {
  return (
    Object.keys(matches).length === TRUST_CASE_A.failures.length &&
    safeguard.trim().length > 0 &&
    Boolean(verdict)
  )
}

export function TrustTheHarnessLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
  const matched = Object.keys(progress.controlMatches).length
  const allMatched = matched === TRUST_CASE_A.failures.length
  const completed = progress.completedChapters.includes('the-harness')

  const tryComplete = (patch: {
    controlMatches?: typeof progress.controlMatches
    safeguard?: string
    teamVerdict?: typeof progress.teamVerdict
  }) => {
    const controlMatches = patch.controlMatches ?? progress.controlMatches
    const safeguard = patch.safeguard ?? progress.safeguard
    const teamVerdict = patch.teamVerdict ?? progress.teamVerdict
    if (harnessComplete(controlMatches, safeguard, teamVerdict)) markChapterComplete('the-harness')
  }

  const tryIt = (
    <ControlMatch
      failures={TRUST_CASE_A.failures}
      matches={progress.controlMatches}
      onMatch={(failureId, control: TrustControlId) => {
        const controlMatches = { ...progress.controlMatches, [failureId]: control }
        update({ controlMatches })
        tryComplete({ controlMatches })
      }}
    />
  )

  const checkIt = allMatched ? (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">
          Name one safeguard before this may act
        </span>
        <textarea
          value={progress.safeguard}
          onChange={(event) => {
            const safeguard = event.target.value
            update({ safeguard })
            tryComplete({ safeguard })
          }}
          rows={3}
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
          placeholder="A specific validation, approval, or rollback — not “human review.”"
        />
      </label>
      <TrustVote
        legend="Team verdict for Case A"
        value={progress.teamVerdict}
        onChange={(teamVerdict) => {
          update({ teamVerdict })
          tryComplete({ teamVerdict })
        }}
      />
      {completed ? (
        <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{PACKET.doneAfter}</p>
      ) : null}
    </div>
  ) : undefined

  const announce = completed
    ? 'The Harness complete. Controls, safeguard, and team verdict are saved.'
    : allMatched
      ? 'Every failure has a control. Name a safeguard and vote as a team.'
      : undefined

  return (
    <TrustLessonPacket
      chapterId={PACKET.chapterId}
      where={PACKET.where}
      idea={PACKET.idea}
      seeIt={<TrustTraceDiagram />}
      seeCaption={PACKET.seeCaption}
      tryIt={hydrated ? tryIt : <p className="text-sm text-stone-500">Loading your progress…</p>}
      tryCaption={PACKET.tryPrompt}
      checkIt={checkIt}
      checkCaption="Name one gate, then decide Allow, Ask, or Deny as a team."
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
      deeperHint="Golden cases, the four graders, the eval loop, regression, architecture, and the toolkit."
      deeper={
        <>
          <TrustGoldenSet />
          <TrustGraderMatrix showOwners={present} />
          <TrustCriterionCarry
            criterion={progress.needToSee}
            criterionRole={getTrustRole(progress.needToSeeRole ?? progress.role)}
            grader={progress.criterionGrader}
            onPickGrader={(criterionGrader) => update({ criterionGrader })}
          />
          <TrustEvalLoopStepper showOwners={present} />
          <TrustRegressionRun />
          <TrustEvalArchitecture />
          <TrustTeachingCards cards={EVALS_TEACHING['the-harness']} roleId={progress.role} />
          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Engineering — not required for other seats
            </p>
            <ul className="mt-2 space-y-1">
              {EVALS_ENGINEER_STACK.map((row) => (
                <li key={row.use}>
                  <span className="font-medium">{row.use}:</span> {row.tools}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Tools that implement the architecture above. The architecture is the point; any of these can host it.
            </p>
            <ul className="mt-1.5 space-y-1">
              {TRUST_TOOL_LANDSCAPE.map((tool) => (
                <li key={tool.name}>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline-offset-2 hover:underline"
                  >
                    {tool.name}
                  </a>
                  <span className="text-slate-600 dark:text-slate-400"> — {tool.use}</span>
                </li>
              ))}
            </ul>
            <TrustEvalConfigExample className="mt-3" />
          </aside>
          <TrustInstructorClip chapterId="the-harness" />
        </>
      }
    />
  )
}
