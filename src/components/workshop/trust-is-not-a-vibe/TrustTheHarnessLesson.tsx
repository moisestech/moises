'use client'

import { useState } from 'react'
import {
  EVALS_ENGINEER_STACK,
  EVALS_TEACHING,
  TRUST_CASE_A,
  getTrustLessonPacket,
  getTrustRole,
  type TrustControlId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { ConceptConstellation } from './ConceptConstellation'
import { ControlMatch } from './ControlMatch'
import { TrustCriterionCarry } from './TrustCriterionCarry'
import { TrustEvalArchitecture } from './TrustEvalArchitecture'
import { TrustEvalConfigExample } from './TrustEvalConfigExample'
import { TrustEvalDiagram } from './TrustEvalDiagram'
import { TrustEvalLoopStepper } from './TrustEvalLoopStepper'
import { TrustGraderMatrix } from './TrustGraderMatrix'
import { TrustHarnessSeeStage, useHarnessSeeExamples } from './TrustHarnessSeeIt'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustKeepTogether } from './TrustPresentPortions'
import { TrustPacketJob, TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustToolLandscape } from './TrustToolLandscape'
import { TrustVote } from './TrustVote'
import { cn } from '@/lib/utils'
import { roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

const PACKET = getTrustLessonPacket('the-harness')!
const HARNESS_IDEA_ID = 'idea-09-the-harness-control-gate-vote' as const

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
  const [goldenReady, setGoldenReady] = useState(false)
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

  const see = useHarnessSeeExamples({
    goldenReady,
    onGoldenComplete: () => setGoldenReady(true),
  })

  const tryIt = (
    <TrustKeepTogether
      className={cn(
        'grid items-start gap-6',
        present ? 'grid-cols-[minmax(0,1fr)_auto]' : 'md:grid-cols-[minmax(0,1fr)_auto]'
      )}
    >
      <div className="min-w-0">
        <ControlMatch
          failures={TRUST_CASE_A.failures}
          matches={progress.controlMatches}
          onMatch={(failureId, control: TrustControlId) => {
            const controlMatches = { ...progress.controlMatches, [failureId]: control }
            update({ controlMatches })
            tryComplete({ controlMatches })
          }}
        />
      </div>
      <TrustIdeaPortrait id={HARNESS_IDEA_ID} className="justify-self-end" />
    </TrustKeepTogether>
  )

  const checkIt = allMatched ? (
    <>
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
      <TrustEvalDiagram id="eval-13" />
      <TrustKeepTogether className="space-y-6">
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
      </TrustKeepTogether>
    </>
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
      ideaFigure={<TrustIdeaPortrait id={HARNESS_IDEA_ID} priority />}
      ideaLandscape={<TrustEvalDiagram id="eval-07" />}
      seeIt={
        <TrustHarnessSeeStage placedCount={see.placedCount}>{see.slides}</TrustHarnessSeeStage>
      }
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
      deeperHint="The four graders, the eval loop, architecture, and the toolkit."
      deeper={
        <>
          <TrustGraderMatrix showOwners={present} />
          <TrustCriterionCarry
            criterion={progress.needToSee}
            criterionRole={getTrustRole(progress.needToSeeRole ?? progress.role)}
            grader={progress.criterionGrader}
            onPickGrader={(criterionGrader) => update({ criterionGrader })}
          />
          <TrustKeepTogether>
            <ConceptConstellation clusterId="harness-reliability" />
          </TrustKeepTogether>
          <TrustEvalLoopStepper showOwners={present} />
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
            <div className="mt-3">
              <TrustEvalDiagram id="eval-12" />
            </div>
            <TrustToolLandscape className="mt-3" />
            <TrustEvalConfigExample className="mt-3" />
          </aside>
          <TrustInstructorClip chapterId="the-harness" />
        </>
      }
    />
  )
}
