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
  TRUST_TESTING_LINE,
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
import { TrustFourLensesLesson } from './TrustFourLensesLesson'
import { TrustEvalAnatomy } from './TrustEvalAnatomy'
import { TrustGoDeeper } from './TrustGoDeeper'
import { TrustLooksRightLesson } from './TrustLooksRightLesson'
import { TrustPresentationBar } from './TrustPresentationBar'
import { TrustScoringApproaches, TrustScoringMethods } from './TrustScoringApproaches'
import { TrustSeatSection } from './TrustSeatSection'
import { TransferRubric } from './TransferRubric'
import { SimpleLoopSvg } from './TrustDiagrams'
import { TrustChapterNav } from './TrustChapterNav'
import { TrustMissingStillNote } from './TrustMissingStill'
import { TrustInstructorClip } from './TrustInstructorClip'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustSection } from './TrustSection'
import { TrustVote } from './TrustVote'
import { trust } from './trust-tokens'
import { usePresentationMode } from './usePresentationMode'
import { useTrustProgress } from './useTrustProgress'

export function TrustLearnClient({ slug, embedded = false }: { slug: string; embedded?: boolean }) {
  const chapter = getTrustChapter(slug)
  const { progress, hydrated, update, markChapterComplete } = useTrustProgress()
  const { present } = usePresentationMode()
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
        return <TrustFourLensesLesson />
      case 'seeded-failures':
        return (
          <div>
            <TrustSection kind="inspect" title="What was planted in The send" flush>
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
            <div className="mt-12">
              <TrustGoDeeper hint="The failure chain, benchmarks versus evals, and the clip.">
                <TrustTeachingCards cards={EVALS_TEACHING['seeded-failures']} roleId={progress.role} />
                <TrustInstructorClip chapterId="seeded-failures" />
              </TrustGoDeeper>
            </div>
          </div>
        )
      case 'the-loop':
        return (
          <div>
            <TrustSection kind="read" title="Anatomy of an eval" flush>
              <p className={cn(trust.body, 'mb-3 max-w-2xl')}>
                Five parts, in order. Select one to see what it means on this card.
              </p>
              <TrustEvalAnatomy showOwners={present} />
            </TrustSection>
            <TrustSection kind="practice" title="Which check settles each question?">
              <TrustScoringApproaches />
              <p className={cn(trust.muted, 'mt-3 max-w-2xl text-sm')}>{TRUST_TESTING_LINE}</p>
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
            <div className="mt-12">
              <TrustGoDeeper hint="Metric names, the agent loop diagram, plain-language vocabulary, and the clip.">
                <TrustScoringMethods />
                <TrustTeachingCards cards={EVALS_TEACHING['the-loop']} roleId={progress.role} />
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
                <TrustPlaceholderFrame asset="simpleLoop" />
                <TrustMissingStillNote asset="simpleLoop" />
                <TrustInstructorClip chapterId="the-loop" />
              </TrustGoDeeper>
            </div>
          </div>
        )
      case 'the-harness':
        return (
          <div>
            <TrustSection kind="practice" title="Match a control to each failure" flush>
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
            </TrustSection>
            <TrustSection kind="vote" title="Team verdict for Case A">
              <TrustVote
                legend="Team verdict for Case A"
                value={progress.teamVerdict}
                onChange={(teamVerdict) => {
                  update({ teamVerdict })
                  if (Object.keys(progress.controlMatches).length === TRUST_CASE_A.failures.length) {
                    markChapterComplete('the-harness')
                  }
                }}
              />
            </TrustSection>
            <div className="mt-12">
              <TrustGoDeeper hint="Write a safeguard, then golden cases, the four graders, and the toolkit.">
                <label className="block">
                  <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    Name one safeguard before this may act
                  </span>
                  <textarea
                    value={progress.safeguard}
                    onChange={(event) => update({ safeguard: event.target.value })}
                    rows={3}
                    className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
                    placeholder="A specific validation, approval, or rollback — not “human review.”"
                  />
                </label>
                <TrustTeachingCards cards={EVALS_TEACHING['the-harness']} roleId={progress.role} />
                <aside className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
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
                <TrustInstructorClip chapterId="the-harness" />
              </TrustGoDeeper>
            </div>
          </div>
        )
      case 'transfer':
        return (
          <div>
            <TrustSection kind="inspect" title="Open the transfer card" flush>
              <OutputPeel caseData={TRUST_CASE_B} />
            </TrustSection>
            <TrustSection kind="vote" title="Unseen case — Allow, Ask, or Deny?">
              <TrustVote
                legend="Unseen case — Allow, Ask, or Deny?"
                value={progress.transferVote}
                onChange={(transferVote) => {
                  update({ transferVote })
                  if (progress.exitTicket.trim()) markChapterComplete('transfer')
                }}
              />
            </TrustSection>
            <TrustSection kind="practice" title="Leave one sentence you can defend">
              <ExitTicket
                value={progress.exitTicket}
                onChange={(exitTicket) => {
                  update({ exitTicket })
                  if (exitTicket.trim() && progress.transferVote) markChapterComplete('transfer')
                }}
              />
            </TrustSection>
            <div className="mt-12">
              <TrustGoDeeper hint="Score the system, teach the other seat, then the one rule to carry out.">
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
              </TrustGoDeeper>
            </div>
          </div>
        )
      default:
        return null
    }
  }, [chapter, failuresRevealed, markChapterComplete, present, progress, update])

  if (!chapter) return null

  const Shell = embedded ? 'section' : 'main'
  /** Guided lessons carry their own frame, case, seat, and optional reading. */
  const guided = chapter.id === 'looks-right' || chapter.id === 'four-lenses'

  return (
    <Shell className={cn(embedded ? '' : cn(trust.shell, 'overflow-x-clip pb-20'))}>
      <div
        className={
          embedded
            ? 'space-y-6'
            : guided
              ? cn(trust.gutter, 'pb-16 pt-3 font-[\'MoMA_Sans\']')
              : trust.main
        }
      >
        {/* Rehearse embeds these chapters and already has its own facilitator chrome. */}
        {embedded ? null : <TrustPresentationBar className="mb-4" />}
        {embedded && !guided ? (
          <h2 className={cn(trust.title, 'mt-2')}>
            {chapter.number}. {chapter.title}
          </h2>
        ) : null}
        {guided || chapter.id === 'transfer' ? null : (
          <TrustCaseContext
            className={embedded ? 'mt-3' : 'mt-1'}
            vote={progress.revote ?? progress.baselineVote}
          />
        )}
        {guided ? null : (
          <>
            <div className="mt-6">
              <TrustSeatSection variant="dock" />
            </div>
            <p className={cn(trust.body, 'mt-6 max-w-3xl text-base leading-relaxed')}>
              {getTrustChapterPath(chapter.id).learnerBrief}
            </p>
          </>
        )}
        {/* Every chapter now carries its own clip inside Go deeper. */}
        <div className={guided ? 'mt-2' : 'mt-8'}>
          {hydrated || guided ? body : <p className={trust.muted}>Loading your progress…</p>}
        </div>
        {embedded ? null : <TrustChapterNav slug={chapter.slug} />}
      </div>
    </Shell>
  )
}
