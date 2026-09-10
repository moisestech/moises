'use client'

import { useEffect, useState } from 'react'
import {
  EVALS_TEACHING,
  getTrustChapterPath,
  getTrustLessonPacket,
  getTrustRole,
  TRUST_ROLES,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFourSeatsDiagram } from './TrustFourSeatsDiagram'
import { TrustEvalDiagram } from './TrustEvalDiagram'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustSeatCoverage } from './TrustSeatCoverage'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustKeepTogether } from './TrustPresentPortions'
import { TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TRUST_ROLE_TONE, trustPresent } from './trust-tokens'
import { roleCheckChoice, useTrustProgress, withRoleCheck } from './useTrustProgress'

const PACKET = getTrustLessonPacket('four-lenses')!
const TEACHING = EVALS_TEACHING['four-lenses']
const IDEA_PORTRAIT_ID = 'idea-02-four-lenses-four-seats-one-card' as const

function nextSeat(id: TrustRoleId): TrustRoleId {
  const index = TRUST_ROLES.findIndex((entry) => entry.id === id)
  return TRUST_ROLES[(index + 1) % TRUST_ROLES.length].id
}

export function TrustFourLensesLesson() {
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
  const [probeOpen, setProbeOpen] = useState(false)

  const role = progress.role
  const roleData = getTrustRole(role)
  const note = progress.needToSee
  const attributed = Boolean(role && note.trim() && progress.needToSeeRole === role)
  const staleNote = Boolean(role && note.trim() && progress.needToSeeRole !== role)
  const staleFor = getTrustRole(progress.needToSeeRole)
  const completed = progress.completedChapters.includes('four-lenses')

  useEffect(() => {
    if (attributed && !completed) markChapterComplete('four-lenses')
  }, [attributed, completed, markChapterComplete])

  const seeIt = (
    <TrustKeepTogether>
      <TrustFourSeatsDiagram
        role={role}
        signals={PACKET.roleSignals}
        caption={PACKET.seeCaption}
        lead={PACKET.seeLead}
        onSelect={(id) => update({ role: id })}
      />
    </TrustKeepTogether>
  )

  const tryIt = roleData ? (
    <label className="block">
      {staleNote ? (
        <span
          className={cn(
            'mb-2 block text-stone-600 dark:text-stone-400',
            present ? trustPresent.note : 'text-base'
          )}
        >
          You wrote this as {staleFor?.label ?? 'another seat'}. Rewrite it for {roleData.label}.
        </span>
      ) : null}
      <span className="sr-only">{roleData.needToSeePrompt}</span>
      <textarea
        value={note}
        onChange={(event) => update({ needToSee: event.target.value, needToSeeRole: role })}
        rows={present ? 4 : 3}
        placeholder={roleData.exampleNeedToSee}
        className={cn(
          'w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-800 dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100',
          present ? cn('px-5 py-4', trustPresent.note) : 'text-lg leading-snug'
        )}
      />
    </label>
  ) : (
    <div>
      <p
        className={cn(
          'font-semibold text-stone-900 dark:text-stone-100',
          present ? trustPresent.body : 'text-lg leading-snug sm:text-xl'
        )}
      >
        {PACKET.tryPrompt}
      </p>
      <p className={cn('mt-1 text-stone-600 dark:text-stone-400', present ? trustPresent.note : 'text-base')}>
        Pick a seat in See it. The prompt changes to that job.
      </p>
      <textarea
        rows={present ? 4 : 3}
        disabled
        placeholder="Pick a seat to start writing."
        className={cn(
          'mt-3 w-full rounded-lg border border-dashed border-stone-300 bg-stone-50 px-3 py-2 text-stone-500 dark:border-stone-600 dark:bg-stone-900',
          present ? cn('px-5 py-4', trustPresent.note) : 'text-lg leading-snug'
        )}
      />
    </div>
  )

  const roleLine = role ? TEACHING[0]?.roleHint?.[role] : undefined
  const upcoming = role ? getTrustRole(nextSeat(role)) : undefined

  const checkIt = attributed && roleData ? (
    <div className="space-y-3">
      <div>
        <p className="text-sm text-stone-800 dark:text-stone-200">
          Saved as <span className="font-semibold">{roleData.label}</span>. Before this card may act, you need to see:
        </p>
        <p className="mt-1 rounded-lg bg-stone-50 px-3 py-2 text-sm text-stone-800 dark:bg-stone-800/60 dark:text-stone-200">
          {note.trim()}
        </p>
      </div>
      {roleLine ? <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{roleLine}</p> : null}
      <div>
        <button
          type="button"
          onClick={() => setProbeOpen((open) => !open)}
          aria-expanded={probeOpen}
          className="text-sm font-semibold text-cyan-800 underline decoration-1 underline-offset-2 dark:text-cyan-300"
        >
          {probeOpen ? 'Hide the next seat' : 'What would the next seat catch?'}
        </button>
        {probeOpen && upcoming ? (
          <div className="mt-2 rounded-lg border border-stone-200 px-3 py-2 dark:border-stone-700">
            <p className="text-sm text-stone-800 dark:text-stone-200">
              {getTrustChapterPath('four-lenses').probe}
            </p>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
              <span className="font-semibold">{upcoming.label}</span> would ask:{' '}
              {PACKET.roleSignals[upcoming.id] ?? upcoming.learnerJob}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  ) : undefined

  const announce = attributed
    ? `Four Lenses complete. Seat saved: ${roleData?.label}. Requirement saved.`
    : role
      ? `Your seat: ${roleData?.label}. Write one requirement to finish this chapter.`
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
      job={
        roleData ? (
          <p>
            <span className={cn('font-semibold', TRUST_ROLE_TONE[roleData.id].text)}>{roleData.label}.</span>{' '}
            {roleData.learnerJob}
          </p>
        ) : (
          <p>Pick one of the four seats, then write what that job must see.</p>
        )
      }
      doNow={PACKET.tryPrompt}
      doneWhen={attributed ? PACKET.doneAfter : PACKET.doneBefore}
      seat={<TrustSeatStance roleId={role} allSeats={present} />}
      roleId={role}
      roleCheckChoice={roleCheckChoice(progress, PACKET.chapterId)}
      onRoleCheck={(choice) => update(withRoleCheck(progress, PACKET.chapterId, choice))}
      announce={announce}
      deeperHint="How each seat reads the same card, which failures need two seats, and the clip."
      deeper={
        <>
          <TrustTeachingCards cards={TEACHING} roleId={role} />
          <TrustSeatCoverage />
          <div className="space-y-8">
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              The same four diagrams, tagged for who owns the check. System stages stay
              unlabeled on the image. Allow, Ask, and Deny keep their verdict colors.
            </p>
            <TrustEvalDiagram
              id="eval-01"
              owners={[
                { role: 'pm', owns: 'evidence claims' },
                { role: 'design', owns: 'tone and qualitative claims' },
                { role: 'engineering', owns: 'permission and operational claims' },
                { role: 'strategy', owns: 'impact claims' },
              ]}
            />
            <TrustEvalDiagram
              id="eval-05"
              owners={[
                { role: 'pm', owns: 'Observe' },
                { role: 'engineering', owns: 'Decide, Act, Check' },
                { role: 'design', owns: 'Propose / Gate' },
                { role: 'strategy', owns: 'Stop' },
              ]}
            />
            <TrustEvalDiagram
              id="eval-07"
              owners={[
                { role: 'pm', owns: 'task and cases' },
                { role: 'engineering', owns: 'grader' },
                { role: 'design', owns: 'criteria someone can read' },
                { role: 'strategy', owns: 'decision' },
              ]}
            />
            <TrustEvalDiagram
              id="eval-13"
              owners={[
                { role: 'pm', owns: 'what good means before the gate' },
                { role: 'engineering', owns: 'evidence that feeds the gate' },
                { role: 'design', owns: 'Ask stays visible' },
                { role: 'strategy', owns: 'the recorded Allow / Ask / Deny' },
              ]}
            />
          </div>
          <TrustInstructorClip chapterId="four-lenses" />
        </>
      }
    />
  )
}
