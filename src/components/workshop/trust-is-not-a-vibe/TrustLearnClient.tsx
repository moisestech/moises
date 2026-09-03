'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  EVALS_ENGINEER_STACK,
  EVALS_TEACHING,
  getTrustChapter,
  getTrustChapterPath,
  getTrustRole,
  TRUST_CASE_A,
  TRUST_CASE_B,
  TRUST_HARNESS_LINE,
  TRUST_VOCAB_SLIDE,
  type TrustControlId,
  type TrustLoopStage,
  type TrustRubricKey,
  type TrustRubricScore,
  type TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ControlMatch } from './ControlMatch'
import { ExitTicket } from './ExitTicket'
import { FailureTokens } from './FailureTokens'
import { LoopMapper } from './LoopMapper'
import { OutputPeel } from './OutputPeel'
import { TrustCaseContext } from './TrustCaseContext'
import { TrustLooksRightLesson } from './TrustLooksRightLesson'
import { TrustSeatSection } from './TrustSeatSection'
import { TransferRubric } from './TransferRubric'
import { FullHarnessSvg, SimpleLoopSvg } from './TrustDiagrams'
import { TrustChapterNav } from './TrustChapterNav'
import { TrustMissingStillNote } from './TrustMissingStill'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustSection } from './TrustSection'
import { TrustVote } from './TrustVote'
import { trust } from './trust-tokens'
import { useTrustProgress } from './useTrustProgress'

export function TrustLearnClient({ slug, embedded = false }: { slug: string; embedded?: boolean }) {
  const chapter = getTrustChapter(slug)
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const [failuresRevealed, setFailuresRevealed] = useState(false)

  useEffect(() => {
    if (progress.namedFailures.length > 0) setFailuresRevealed(true)
  }, [progress.namedFailures.length])

  const body = useMemo(() => {
    if (!chapter) return null
    switch (chapter.id) {
      case 'looks-right':
        return <TrustLooksRightLesson />
      case 'four-lenses':
        return (
          <div>
            <TrustSection kind="read" title="Four seats share one card" flush>
              <TrustTeachingCards cards={EVALS_TEACHING['four-lenses']} roleId={progress.role} />
              <p className={cn(trust.body, 'mt-4 max-w-3xl')}>
                Your move is in Your seat above: hover each job for an example on The send, then write one thing that
                job must see before this send may go out.
              </p>
            </TrustSection>
          </div>
        )
      case 'seeded-failures':
        return (
          <div>
            <TrustSection kind="read" title="Name what went wrong" flush>
              <TrustTeachingCards cards={EVALS_TEACHING['seeded-failures']} roleId={progress.role} />
            </TrustSection>
            <TrustSection kind="inspect" title="What was planted in The send">
              <p className={cn(trust.body, 'mb-4 max-w-3xl')}>
                These are not a new case. They were already in the card you voted on: the date against the calendar, 120
                messages against an 80-person roster, an 87% with no history, a send the agent is not allowed to make, a
                removal with no person, and no pause before the write.
              </p>
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
            </TrustSection>
            {failuresRevealed ? (
              <TrustSection kind="vote" title="Vote again — after seeing the system">
                <TrustVote
                  legend="Vote again — after seeing the system"
                  value={progress.revote}
                  onChange={(revote) => {
                    update({ revote })
                    if (progress.namedFailures.length >= 3) markChapterComplete('seeded-failures')
                  }}
                />
                <p className="mt-6 text-sm font-medium text-stone-800 dark:text-stone-200">
                  A correct-looking answer can still be produced by an unsafe process.
                </p>
              </TrustSection>
            ) : null}
          </div>
        )
      case 'the-loop':
        return (
          <div>
            <TrustSection kind="read" title="The agent loop" flush>
              <TrustTeachingCards cards={EVALS_TEACHING['the-loop']} roleId={progress.role} />
              <div className="mt-8 space-y-6">
                <TrustPlaceholderFrame asset="simpleLoop" />
                <TrustMissingStillNote asset="simpleLoop" />
                <SimpleLoopSvg />
                <p className={trust.body}>{TRUST_HARNESS_LINE}</p>
                <dl className="grid gap-2 sm:grid-cols-2">
                  {TRUST_VOCAB_SLIDE.map((row) => (
                    <div key={row.visible} className="rounded-lg border border-stone-200 px-3 py-2 dark:border-stone-700">
                      <dt className="text-sm font-semibold">{row.visible}</dt>
                      <dd className="text-xs text-stone-500">{row.technical}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </TrustSection>
            <TrustSection kind="practice" title="Place each failure on the loop">
              <LoopMapper
                failures={TRUST_CASE_A.failures}
                placements={progress.loopPlacements}
                onPlace={(failureId, stage: TrustLoopStage) => {
                  const loopPlacements = { ...progress.loopPlacements, [failureId]: stage }
                  update({ loopPlacements })
                  if (Object.keys(loopPlacements).length >= 3) markChapterComplete('the-loop')
                }}
              />
            </TrustSection>
          </div>
        )
      case 'the-harness':
        return (
          <div>
            <TrustSection kind="read" title="The harness around the model" flush>
              <TrustTeachingCards cards={EVALS_TEACHING['the-harness']} roleId={progress.role} />
              <div className="mt-8">
                <FullHarnessSvg />
              </div>
            </TrustSection>
            <TrustSection kind="practice" title="Match a control to each failure">
              <ControlMatch
                failures={TRUST_CASE_A.failures}
                matches={progress.controlMatches}
                onMatch={(failureId, control: TrustControlId) => {
                  const controlMatches = { ...progress.controlMatches, [failureId]: control }
                  update({ controlMatches })
                  if (Object.keys(controlMatches).length === TRUST_CASE_A.failures.length && progress.teamVerdict) {
                    markChapterComplete('the-harness')
                  }
                }}
              />
              {progress.role === 'engineering' ? (
                <aside className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Engineer toolkit — not required for other seats
                  </p>
                  <ul className="mt-2 space-y-1">
                    {EVALS_ENGINEER_STACK.map((row) => (
                      <li key={row.use}>
                        <span className="font-medium">{row.use}:</span> {row.tools}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-slate-500">
                    Treat evals like continuous testing. Do not make Product or Design memorize the stack.
                  </p>
                </aside>
              ) : null}
              <label className="mt-8 block">
                <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  Name one safeguard before this may act
                </span>
                <textarea
                  value={progress.safeguard}
                  onChange={(event) => {
                    update({ safeguard: event.target.value })
                    if (
                      event.target.value.trim() &&
                      progress.teamVerdict &&
                      Object.keys(progress.controlMatches).length === TRUST_CASE_A.failures.length
                    ) {
                      markChapterComplete('the-harness')
                    }
                  }}
                  rows={3}
                  className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                  placeholder="A specific validation, approval, or rollback — not “human review.”"
                />
              </label>
            </TrustSection>
            <TrustSection kind="vote" title="Team verdict for Case A">
              <TrustVote
                legend="Team verdict for Case A"
                value={progress.teamVerdict}
                onChange={(teamVerdict) => {
                  update({ teamVerdict })
                  if (
                    progress.safeguard.trim() &&
                    Object.keys(progress.controlMatches).length === TRUST_CASE_A.failures.length
                  ) {
                    markChapterComplete('the-harness')
                  }
                }}
              />
            </TrustSection>
          </div>
        )
      case 'transfer':
        return (
          <div>
            <TrustSection kind="read" title="An unseen case" flush>
              <TrustTeachingCards cards={EVALS_TEACHING.transfer} roleId={progress.role} />
              <p className={cn(trust.muted, 'mt-6')}>{TRUST_CASE_B.fixtureNote}</p>
            </TrustSection>
            <TrustSection kind="inspect" title="Open the transfer card">
              <OutputPeel caseData={TRUST_CASE_B} />
            </TrustSection>
            <TrustSection kind="vote" title="Unseen case — Allow, Ask, or Deny?">
              <TrustVote
                legend="Unseen case — Allow, Ask, or Deny?"
                value={progress.transferVote}
                onChange={(transferVote) => update({ transferVote })}
              />
            </TrustSection>
            <TrustSection kind="practice" title="Score the system, then leave one sentence">
              <TransferRubric
                rubric={progress.rubric}
                onScore={(key: TrustRubricKey, score: TrustRubricScore) => {
                  const rubric = { ...progress.rubric, [key]: score }
                  update({ rubric })
                  if (progress.exitTicket.trim() && progress.teachBack.trim()) markChapterComplete('transfer')
                }}
              />
              <label className="mt-8 block rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
                  Role-switch teach-back
                </span>
                <span className="mt-1 block text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {getTrustRole(progress.role)?.teachBackPrompt ??
                    'Pick a seat first, then explain another lens in one sentence.'}
                </span>
                <textarea
                  value={progress.teachBack}
                  onChange={(event) => {
                    update({ teachBack: event.target.value })
                    const scored = Object.values({ ...progress.rubric }).every((item) => item !== null)
                    if (event.target.value.trim() && progress.exitTicket.trim() && scored) {
                      markChapterComplete('transfer')
                    }
                  }}
                  rows={3}
                  className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                />
              </label>
              <div className="mt-8">
                <ExitTicket
                  value={progress.exitTicket}
                  onChange={(exitTicket) => {
                    update({ exitTicket })
                    const scored = Object.values({ ...progress.rubric }).every((item) => item !== null)
                    if (exitTicket.trim() && scored) markChapterComplete('transfer')
                  }}
                />
              </div>
            </TrustSection>
          </div>
        )
      default:
        return null
    }
  }, [chapter, failuresRevealed, markChapterComplete, progress, update])

  if (!chapter) return null

  const Shell = embedded ? 'section' : 'main'
  const looksRight = chapter.id === 'looks-right'

  return (
    <Shell className={cn(embedded ? '' : cn(trust.shell, 'overflow-x-clip pb-20'))}>
      <div
        className={
          embedded
            ? 'space-y-6'
            : looksRight
              ? cn(trust.gutter, 'pb-16 pt-3 font-[\'MoMA_Sans\']')
              : trust.main
        }
      >
        {embedded && !looksRight ? (
          <h2 className={cn(trust.title, 'mt-2')}>
            {chapter.number}. {chapter.title}
          </h2>
        ) : null}
        {looksRight || chapter.id === 'transfer' ? null : (
          <TrustCaseContext
            className={embedded ? 'mt-3' : 'mt-1'}
            vote={progress.revote ?? progress.baselineVote}
          />
        )}
        {looksRight ? null : (
          <>
            <div className="mt-6">
              <TrustSeatSection variant="dock" showNeedToSee={chapter.id === 'four-lenses'} />
            </div>
            <p className={cn(trust.body, 'mt-6 max-w-3xl text-base leading-relaxed')}>
              {getTrustChapterPath(chapter.id).learnerBrief}
            </p>
          </>
        )}
        <div className={looksRight ? 'mt-2' : 'mt-8'}>
          {hydrated || looksRight ? body : <p className={trust.muted}>Loading your progress…</p>}
        </div>
        {looksRight ? null : (
          <div className="mt-10">
            <TrustInstructorClip chapterId={chapter.id} />
          </div>
        )}
        {embedded ? null : <TrustChapterNav slug={chapter.slug} />}
      </div>
    </Shell>
  )
}
