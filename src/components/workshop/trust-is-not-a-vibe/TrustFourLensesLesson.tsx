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
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustSeatCoverage } from './TrustSeatCoverage'
import { TrustLessonPacket } from './TrustLessonPacket'
import { TrustSeatStance } from './TrustSeatStance'
import { usePresentationMode } from './TrustPresentation'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TRUST_ROLE_TONE } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

const PACKET = getTrustLessonPacket('four-lenses')!
const TEACHING = EVALS_TEACHING['four-lenses']

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
    <TrustFourSeatsDiagram
      role={role}
      signals={PACKET.roleSignals}
      caption={PACKET.seeCaption}
      onSelect={(id) => update({ role: id })}
    />
  )

  const tryIt = roleData ? (
    <label className="block">
      <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{roleData.needToSeePrompt}</span>
      {staleNote ? (
        <span className="mt-1 block text-sm text-stone-600 dark:text-stone-400">
          You wrote this as {staleFor?.label ?? 'another seat'}. Rewrite it for {roleData.label}.
        </span>
      ) : null}
      <textarea
        value={note}
        onChange={(event) => update({ needToSee: event.target.value, needToSeeRole: role })}
        rows={3}
        placeholder={roleData.exampleNeedToSee}
        className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
      />
    </label>
  ) : (
    <div>
      <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{PACKET.tryPrompt}</p>
      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
        Pick a seat in See it. The prompt changes to that job.
      </p>
      <textarea
        rows={3}
        disabled
        placeholder="Pick a seat to start writing."
        className="mt-2 w-full rounded-lg border border-dashed border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-500 dark:border-stone-600 dark:bg-stone-900"
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
      where={PACKET.where}
      idea={PACKET.idea}
      seeIt={seeIt}
      tryIt={hydrated ? tryIt : <p className="text-sm text-stone-500">Loading your progress…</p>}
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
      announce={announce}
      deeperHint="How each seat reads the same card, which failures need two seats, and the clip."
      deeper={
        <>
          <TrustTeachingCards cards={TEACHING} roleId={role} />
          <TrustSeatCoverage />
          <TrustInstructorClip chapterId="four-lenses" />
        </>
      }
    />
  )
}
