'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  EVALS_ENGINEER_STACK,
  EVALS_TEACHING,
  getTrustChapter,
  TRUST_BASE,
  TRUST_CASE_A,
  TRUST_CASE_B,
  TRUST_HARNESS_LINE,
  TRUST_TITLE,
  TRUST_VOCAB_SLIDE,
  type TrustChapterId,
  type TrustControlId,
  type TrustLoopStage,
  type TrustRoleId,
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
import { RoleLensPicker, RoleMargin } from './RoleLensPicker'
import { TransferRubric } from './TransferRubric'
import { FullHarnessSvg, SimpleLoopSvg } from './TrustDiagrams'
import { TrustChapterNav } from './TrustChapterNav'
import { TrustInstructorClip } from './TrustPlaceholderFrame'
import { TrustTeachingCards } from './TrustTeachingCards'
import { TrustVote } from './TrustVote'
import { TrustWorkflowRail } from './TrustWorkflowRail'
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
        return (
          <div className="space-y-6">
            <TrustTeachingCards cards={EVALS_TEACHING['looks-right'].slice(0, 1)} />
            <OutputPeel
              caseData={TRUST_CASE_A}
              vote={
                <TrustVote
                  legend="Would you let it act?"
                  value={progress.baselineVote}
                  onChange={(baselineVote: TrustVerdict) => {
                    update({ baselineVote })
                    markChapterComplete('looks-right')
                  }}
                />
              }
            />
            {progress.baselineVote ? (
              <TrustTeachingCards cards={EVALS_TEACHING['looks-right'].slice(1)} />
            ) : null}
          </div>
        )
      case 'four-lenses':
        return (
          <div className="space-y-6">
            <TrustTeachingCards cards={EVALS_TEACHING['four-lenses']} roleId={progress.role} />
            <RoleLensPicker
              value={progress.role}
              onChange={(role: TrustRoleId) => {
                update({ role })
                if (progress.needToSee.trim()) markChapterComplete('four-lenses')
              }}
              needToSee={progress.needToSee}
              onNeedToSeeChange={(needToSee) => {
                update({ needToSee })
                if (progress.role && needToSee.trim()) markChapterComplete('four-lenses')
              }}
            />
          </div>
        )
      case 'seeded-failures':
        return (
          <div className="space-y-6">
            <TrustTeachingCards cards={EVALS_TEACHING['seeded-failures']} roleId={progress.role} />
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
            {failuresRevealed ? (
              <TrustVote
                legend="Vote again — after seeing the system"
                value={progress.revote}
                onChange={(revote) => {
                  update({ revote })
                  if (progress.namedFailures.length >= 3) markChapterComplete('seeded-failures')
                }}
              />
            ) : null}
            <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
              A correct-looking answer can still be produced by an unsafe process.
            </p>
          </div>
        )
      case 'the-loop':
        return (
          <div className="space-y-6">
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
            <LoopMapper
              failures={TRUST_CASE_A.failures}
              placements={progress.loopPlacements}
              onPlace={(failureId, stage: TrustLoopStage) => {
                const loopPlacements = { ...progress.loopPlacements, [failureId]: stage }
                update({ loopPlacements })
                if (Object.keys(loopPlacements).length >= 3) markChapterComplete('the-loop')
              }}
            />
          </div>
        )
      case 'the-harness':
        return (
          <div className="space-y-6">
            <TrustTeachingCards cards={EVALS_TEACHING['the-harness']} roleId={progress.role} />
            <FullHarnessSvg />
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
            ) : null}
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
          </div>
        )
      case 'transfer':
        return (
          <div className="space-y-6">
            <TrustTeachingCards cards={EVALS_TEACHING.transfer} roleId={progress.role} />
            <p className={trust.muted}>{TRUST_CASE_B.fixtureNote}</p>
            <OutputPeel caseData={TRUST_CASE_B} />
            <TrustVote
              legend="Unseen case — Allow, Ask, or Deny?"
              value={progress.transferVote}
              onChange={(transferVote) => update({ transferVote })}
            />
            <TransferRubric
              rubric={progress.rubric}
              onScore={(key: TrustRubricKey, score: TrustRubricScore) => {
                const rubric = { ...progress.rubric, [key]: score }
                update({ rubric })
                if (progress.exitTicket.trim()) markChapterComplete('transfer')
              }}
            />
            <ExitTicket
              value={progress.exitTicket}
              onChange={(exitTicket) => {
                update({ exitTicket })
                const scored = Object.values({ ...progress.rubric }).every((item) => item !== null)
                if (exitTicket.trim() && scored) markChapterComplete('transfer')
              }}
            />
          </div>
        )
      default:
        return null
    }
  }, [chapter, failuresRevealed, markChapterComplete, progress, update])

  if (!chapter) return null

  const Shell = embedded ? 'section' : 'main'

  return (
    <Shell className={cn(embedded ? '' : cn(trust.shell, 'overflow-x-clip pb-20'))}>
      <div className={embedded ? 'space-y-6' : trust.main}>
        <p className={trust.eyebrow}>
          <Link href={TRUST_BASE} className={trust.link}>
            {TRUST_TITLE}
          </Link>
          {' · '}
          {chapter.clock} min
        </p>
        <div className="mt-4">
          <TrustWorkflowRail current={chapter.id as TrustChapterId} completed={hydrated ? progress.completedChapters : []} />
        </div>
        <div className="mt-6">
          <RoleMargin roleId={progress.role} />
        </div>
        <h1 className={cn(trust.title, 'mt-6')}>
          {chapter.number}. {chapter.title}
        </h1>
        <p className={cn(trust.body, 'mt-3 max-w-3xl')}>{chapter.summary}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-stone-600 dark:text-stone-400">
          {chapter.objectives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs uppercase tracking-wide text-stone-500">Checkpoint · {chapter.checkpoint}</p>
        <div className="mt-8">{hydrated ? body : <p className={trust.muted}>Loading your progress…</p>}</div>
        <div className="mt-10">
          <TrustInstructorClip
            title={chapter.videoClip.title}
            durationHint={chapter.videoClip.durationHint}
            sourceNote={chapter.videoClip.sourceNote}
          />
        </div>
        {embedded ? null : <TrustChapterNav slug={chapter.slug} />}
      </div>
    </Shell>
  )
}
