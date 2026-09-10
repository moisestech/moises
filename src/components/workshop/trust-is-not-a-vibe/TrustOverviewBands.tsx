'use client'

import Image from 'next/image'
import Link from 'next/link'
import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  TRUST_CHAPTERS,
  TRUST_ISLAND_BEATS,
  TRUST_LEARN_BASE,
  TRUST_ONE_LINE,
  TRUST_OUTCOMES,
  TRUST_OVERVIEW_SECTIONS,
  TRUST_PLACEHOLDERS,
  type TrustIdeaIllustrationId,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
  type TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram/TrustFigure'
import { ConceptConstellation } from './ConceptConstellation'
import { TrustIdeaPortrait } from './TrustIdeaPortrait'
import { TrustIdeaQuote } from './TrustIdeaQuote'
import { TrustKeepTogether } from './TrustPresentPortions'
import { TrustMark } from './TrustMarks'
import { useTrustPresentation } from './TrustPresentation'
import {
  TRUST_VERDICT_CLASS,
  TRUST_VERDICT_FOCUS,
  TRUST_VERDICT_HINT,
  TRUST_VERDICT_HOVER,
  TRUST_VERDICT_LABEL,
  trust,
  trustOverview,
  trustPresent,
} from './trust-tokens'

const OVERVIEW_VERDICTS: readonly TrustVerdict[] = ['allow', 'ask', 'deny']

const START_HREF = `${TRUST_LEARN_BASE}/${TRUST_CHAPTERS[0].slug}`

export function TrustOverviewFact({ label, value }: { label: string; value: string }) {
  const { present } = useTrustPresentation()

  return (
    <div
      data-trust-overview-fact={label}
      className={
        present
          ? 'rounded-xl border-2 border-stone-900 bg-white px-8 py-8 dark:border-stone-100 dark:bg-stone-900'
          : 'border-l-4 border-cyan-500 bg-white px-5 py-4 dark:bg-stone-900'
      }
    >
      <p
        data-trust-overview-fact-label
        className={cn(
          'font-space-mono font-bold uppercase text-stone-950 dark:text-stone-50',
          present ? 'text-2xl tracking-[0.16em] sm:text-3xl' : 'text-sm tracking-[0.14em] sm:text-base'
        )}
      >
        {label}
      </p>
      <p
        className={
          present
            ? cn(trustPresent.body, 'mt-4')
            : 'mt-2 text-lg leading-snug text-stone-800 sm:text-xl dark:text-stone-200'
        }
      >
        {value}
      </p>
    </div>
  )
}

function TrustOverviewStart() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link href={START_HREF} className={trust.btnPrimary}>
        Start the lab
      </Link>
      <span className="text-sm text-stone-500">Chapter 1 · {TRUST_CHAPTERS[0].title}</span>
    </div>
  )
}

/**
 * Self-paced: the four orientation answers as one grid. Present flattens the
 * children into portions so ArrowRight pages For → You do → Time → You leave with.
 */
function TrustOverviewSpecFrame({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 sm:grid-cols-2 dark:border-stone-700 dark:bg-stone-700">
        {children}
      </div>
      <TrustOverviewStart />
    </div>
  )
}

/** Present treats the four facts as portions; self-paced keeps the grid. */
export const TrustOverviewSpec = Object.assign(TrustOverviewSpecFrame, { flattenPortions: true })

const QuestionVerdictContext = createContext<{
  open: TrustVerdict
  setOpen: (verdict: TrustVerdict) => void
} | null>(null)

function TrustOverviewVerdictCard({ verdict }: { verdict: TrustVerdict }) {
  const { present } = useTrustPresentation()
  const ctx = useContext(QuestionVerdictContext)
  const open = present || ctx?.open === verdict
  const onSelect = present ? undefined : () => ctx?.setOpen(verdict)
  const hintId = `trust-overview-verdict-hint-${verdict}`
  const className = cn(
    'rounded-xl border text-left transition duration-200',
    open
      ? TRUST_VERDICT_CLASS[verdict]
      : cn('border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900', TRUST_VERDICT_HOVER[verdict]),
    TRUST_VERDICT_HOVER[verdict],
    present ? 'px-6 py-6 sm:px-8 sm:py-8' : 'px-4 py-4'
  )

  const body = (
    <>
      <span className="flex items-center gap-3">
        <TrustMark id={verdict} className={present ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-8 w-8'} />
        <span
          className={cn(
            'font-space-mono font-bold uppercase tracking-wide',
            present ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
          )}
        >
          {TRUST_VERDICT_LABEL[verdict]}
        </span>
      </span>
      {open ? (
        <span
          id={hintId}
          data-trust-overview-verdict-hint={verdict}
          className={cn('mt-3 block leading-snug', present ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg')}
        >
          {TRUST_VERDICT_HINT[verdict]}
        </span>
      ) : null}
    </>
  )

  if (present) {
    return (
      <div data-trust-overview-verdict={verdict} data-trust-overview-verdict-open={open || undefined} className={className}>
        {body}
      </div>
    )
  }

  return (
    <button
      type="button"
      data-trust-overview-verdict={verdict}
      data-trust-overview-verdict-open={open || undefined}
      aria-expanded={open}
      aria-controls={open ? hintId : undefined}
      onClick={onSelect}
      className={cn(
        className,
        'w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950',
        verdict === 'allow' && 'focus-visible:ring-emerald-500',
        verdict === 'ask' && 'focus-visible:ring-amber-500',
        verdict === 'deny' && 'focus-visible:ring-red-500',
        TRUST_VERDICT_FOCUS[verdict]
      )}
    >
      {body}
    </button>
  )
}

/**
 * Self-paced: one open verdict at a time. Present flattens Allow → Ask → Deny
 * as portions of this band — still overview step 2 of 6. Children must be
 * passed in (same pattern as the four facts) so flattenPortions can see them.
 */
function TrustOverviewQuestionFrame({ children }: { children: ReactNode }) {
  const { present } = useTrustPresentation()
  const [open, setOpen] = useState<TrustVerdict>('allow')

  return (
    <QuestionVerdictContext.Provider value={{ open, setOpen }}>
      <div className={present ? undefined : 'grid gap-3 sm:grid-cols-3'}>{children}</div>
    </QuestionVerdictContext.Provider>
  )
}

export const TrustOverviewQuestion = Object.assign(TrustOverviewQuestionFrame, { flattenPortions: true })

export function trustOverviewQuestionChildren() {
  return OVERVIEW_VERDICTS.map((verdict) => <TrustOverviewVerdictCard key={verdict} verdict={verdict} />)
}

type WhyFigure =
  | { kind: 'idea'; id: TrustIdeaIllustrationId }
  | { kind: 'still'; asset: TrustPlaceholderKey }

/**
 * Self-paced: one spaced list. Present flattens the children so ArrowRight
 * pages title → three jobs → measure → walk-out title → 01–04.
 */
function TrustOverviewWhyFrame({ children }: { children: ReactNode }) {
  return (
    <div data-trust-overview-why-list className="space-y-12 sm:space-y-16">
      {children}
    </div>
  )
}

export const TrustOverviewWhy = Object.assign(TrustOverviewWhyFrame, { flattenPortions: true })

function TrustOverviewWhyFigure({ figure, compact }: { figure: WhyFigure; compact?: boolean }) {
  if (figure.kind === 'idea') {
    return <TrustIdeaPortrait id={figure.id} className={compact ? 'max-w-[11rem]' : 'max-w-md'} />
  }

  const item = TRUST_PLACEHOLDERS[figure.asset] as TrustPlaceholder
  const src = item.src
  if (!src) return null
  const remote = src.startsWith('https://')

  return (
    <TrustFigure caption={item.depiction}>
      <div
        className={cn(
          'relative overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900',
          compact ? 'aspect-[16/10]' : 'aspect-[16/10] min-h-[12rem]'
        )}
      >
        <Image
          src={src}
          alt={item.alt}
          fill
          className="object-contain object-center"
          sizes={compact ? '11rem' : '(max-width: 768px) 100vw, 40rem'}
          unoptimized={remote}
        />
      </div>
    </TrustFigure>
  )
}

function TrustOverviewWhyBeat({
  id,
  outcome,
  eyebrow,
  title,
  figure,
  rule,
  children,
}: {
  id: string
  outcome?: string
  eyebrow?: string
  title?: string
  figure: WhyFigure
  rule?: boolean
  children?: ReactNode
  'data-trust-present-figure'?: boolean
}) {
  const { present } = useTrustPresentation()

  return (
    <div
      data-trust-overview-why={id}
      data-trust-overview-outcome={outcome}
      className={cn(
        present
          ? 'grid items-start gap-8 lg:grid-cols-[minmax(18rem,34ch)_minmax(0,1fr)]'
          : 'grid items-start gap-5 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8',
        rule && !present && 'border-t border-stone-200 pt-10 dark:border-stone-800'
      )}
    >
      <div className={present ? 'min-w-0 lg:order-1' : 'min-w-0 sm:order-2'}>
        {eyebrow ? (
          <p
            className={cn(
              'font-space-mono uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400',
              present ? 'text-xs' : 'text-[10px]'
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <p className={cn(present ? trustPresent.body : 'mt-1 text-lg font-semibold text-stone-950 dark:text-stone-50')}>
            {title}
          </p>
        ) : null}
        {children ? (
          <div
            className={cn(
              present ? cn(trustPresent.note, title ? 'mt-4' : undefined) : 'mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400',
              !present && !title && trustOverview.body
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
      <div className={present ? 'min-w-0 lg:order-2' : 'min-w-0 sm:order-1'}>
        <TrustOverviewWhyFigure figure={figure} compact={!present} />
      </div>
    </div>
  )
}

const WHY_JOB_FIGURE: Record<(typeof TRUST_ISLAND_BEATS)[number]['id'], WhyFigure> = {
  proposes: { kind: 'idea', id: 'idea-01-looks-right-polish-is-not-proof' },
  controls: { kind: 'idea', id: 'idea-04-the-loop-human-controlled-agent-loop' },
  authorizes: { kind: 'idea', id: 'idea-02-four-lenses-four-seats-one-card' },
}

const WHY_OUTCOME_FIGURE: WhyFigure[] = [
  { kind: 'idea', id: 'idea-03-seeded-failures-find-the-system-break' },
  { kind: 'still', asset: 'simpleLoop' },
  { kind: 'still', asset: 'verdictCards' },
  { kind: 'still', asset: 'roleLensCards' },
]

const WHY_SECTION = TRUST_OVERVIEW_SECTIONS.find((item) => item.id === 'why-it-matters')

/** First-level children become Present portions. Self-paced sees the whole list. */
export function trustOverviewWhyChildren() {
  return [
    <TrustOverviewWhyBeat
      key="thesis"
      data-trust-present-figure
      id="thesis"
      figure={{ kind: 'idea', id: 'idea-00-overview-eval-is-a-decision-system' }}
    >
      <p>
        Forward-deployed work rewards speed and autonomy. Those strengths can collapse five jobs into one person:
        interpret the need, build the workflow, decide if it works, grant permission to act, and explain it to the
        client. That is not independent evaluation.
      </p>
    </TrustOverviewWhyBeat>,
    <TrustKeepTogether key="overview-core">
      <ConceptConstellation clusterId="overview-core" />
    </TrustKeepTogether>,
    ...(WHY_SECTION?.ideaQuote
      ? [<TrustIdeaQuote key="idea-quote" quote={WHY_SECTION.ideaQuote} />]
      : []),
    ...TRUST_ISLAND_BEATS.map((beat, index) => (
      <TrustOverviewWhyBeat
        key={beat.id}
        data-trust-present-figure
        id={beat.id}
        eyebrow={String(index + 1)}
        title={beat.line}
        figure={WHY_JOB_FIGURE[beat.id]}
      >
        <p>{beat.body}</p>
      </TrustOverviewWhyBeat>
    )),
    <TrustOverviewWhyBeat
      key="measure"
      data-trust-present-figure
      id="measure"
      figure={{ kind: 'still', asset: 'peelOpenHero' }}
    >
      <blockquote className="border-l-2 border-cyan-400 pl-4">{TRUST_ONE_LINE}</blockquote>
    </TrustOverviewWhyBeat>,
    <TrustOverviewWhyBeat
      key="walk-out"
      data-trust-present-figure
      id="walk-out"
      rule
      title="What you walk out able to do"
      figure={{ kind: 'still', asset: 'caseAEnvironment' }}
    />,
    ...TRUST_OUTCOMES.map((outcome, index) => {
      const number = String(index + 1).padStart(2, '0')
      return (
        <TrustOverviewWhyBeat
          key={outcome.title}
          data-trust-present-figure
          id={`outcome-${number}`}
          outcome={number}
          eyebrow={number}
          title={outcome.title}
          figure={WHY_OUTCOME_FIGURE[index]!}
        >
          <p>{outcome.body}</p>
        </TrustOverviewWhyBeat>
      )
    }),
  ]
}

const PATH_SECTION = TRUST_OVERVIEW_SECTIONS.find((item) => item.id === 'the-path')

/**
 * 04 — chapter-ends copy left of idea-00. One Present portion; the clock list
 * pages after. Self-paced uses the same row.
 */
export function TrustOverviewPath() {
  const { present } = useTrustPresentation()
  const deck = PATH_SECTION?.deck
  if (!deck) return null

  return (
    <TrustKeepTogether
      data-trust-overview-path
      className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 sm:gap-8"
    >
      <p
        data-trust-overview-path-copy
        className={cn('min-w-0', present ? trustPresent.body : cn(trustOverview.deck, 'mt-0'))}
      >
        {deck}
      </p>
      <TrustIdeaPortrait
        id="idea-00-overview-eval-is-a-decision-system"
        className={cn('shrink-0 justify-self-end', present ? 'max-w-md' : 'max-w-[11rem]')}
      />
    </TrustKeepTogether>
  )
}
