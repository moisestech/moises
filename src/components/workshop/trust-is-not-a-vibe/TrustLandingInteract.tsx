'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import {
  HiOutlineArrowPath,
  HiOutlineChartBar,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineHandRaised,
  HiOutlineMapPin,
  HiOutlineQueueList,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUsers,
} from 'react-icons/hi2'
import {
  EVALS_FIELD_VOCAB,
  TRUST_ALONE_SLIDES,
  TRUST_CHAPTERS,
  TRUST_ISLAND_BEATS,
  TRUST_LEARN_BASE,
  TRUST_ONE_LINE,
  TRUST_OUTCOMES,
  TRUST_PLACEHOLDERS,
  TRUST_TITLE,
  type TrustPlaceholderKey,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_CHAPTER_TONE, trust } from './trust-tokens'

const OUTCOME_META = [
  {
    icon: HiOutlineEye,
    tone: TRUST_CHAPTER_TONE['looks-right'],
    still: 'peelOpenHero' as const,
  },
  {
    icon: HiOutlineMapPin,
    tone: TRUST_CHAPTER_TONE['the-loop'],
    still: 'simpleLoop' as const,
  },
  {
    icon: HiOutlineHandRaised,
    tone: TRUST_CHAPTER_TONE.transfer,
    still: 'verdictCards' as const,
  },
  {
    icon: HiOutlineUsers,
    tone: TRUST_CHAPTER_TONE['four-lenses'],
    still: 'roleLensCards' as const,
  },
] as const

const VOCAB_ICON: Record<string, IconType> = {
  'Vibe eval': HiOutlineSparkles,
  Eval: HiOutlineChartBar,
  Benchmark: HiOutlineQueueList,
  'Golden dataset': HiOutlineStar,
  Faithfulness: HiOutlineShieldCheck,
  'LLM-as-judge': HiOutlineScale,
  Baseline: HiOutlineFlag,
  'Whac-a-mole': HiOutlineArrowPath,
}

export function TrustTitle() {
  return (
    <p className={cn(trust.title, 'group/title mt-2 w-fit')}>
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-cyan-500 via-violet-500 to-rose-400 bg-clip-text transition-colors duration-300 group-hover/title:text-transparent">
          {TRUST_TITLE}
        </span>
        <span
          className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-rose-400 transition-transform duration-300 motion-safe:group-hover/title:scale-x-100"
          aria-hidden
        />
      </span>
    </p>
  )
}

function TrustStillFill({
  asset,
  className,
}: {
  asset: TrustPlaceholderKey
  className?: string
}) {
  const item = TRUST_PLACEHOLDERS[asset]
  const src = item.src
  if (!src) return null
  const remote = src.startsWith('https://')
  return (
    <Image
      src={src}
      alt={item.alt}
      fill
      className={cn('object-cover object-center', className)}
      sizes="(max-width: 768px) 100vw, 720px"
      unoptimized={remote}
    />
  )
}

export function TrustIslandMoment() {
  const [active, setActive] = useState(0)
  const beat = TRUST_ISLAND_BEATS[active] ?? TRUST_ISLAND_BEATS[0]

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-900"
        aria-hidden
      >
        <TrustStillFill asset={beat.still} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white sm:text-xl">{beat.line}</p>
      </div>

      <div>
        <ul className="space-y-2">
          {TRUST_ISLAND_BEATS.map((item, index) => {
            const lit = index === active
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={lit}
                  className={cn(
                    'w-full rounded-xl border px-4 py-4 text-left transition duration-200',
                    lit
                      ? 'border-cyan-400 bg-cyan-50 shadow-md dark:border-cyan-400 dark:bg-cyan-950/40'
                      : 'border-stone-200 bg-white hover:border-cyan-300 dark:border-stone-700 dark:bg-stone-900'
                  )}
                >
                  <span
                    className={cn(
                      'block text-xl font-semibold sm:text-2xl',
                      lit ? 'text-stone-950 dark:text-stone-50' : 'text-stone-700 dark:text-stone-200'
                    )}
                  >
                    {item.line}
                  </span>
                  {lit ? (
                    <span className="mt-2 block text-base leading-relaxed text-stone-600 dark:text-stone-300">
                      {item.body}
                    </span>
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export function TrustAloneStudio() {
  const [index, setIndex] = useState(0)
  const slide = TRUST_ALONE_SLIDES[index] ?? TRUST_ALONE_SLIDES[0]
  const goal = TRUST_OUTCOMES[slide.goalIndex]
  const still = TRUST_PLACEHOLDERS[slide.asset]

  const showGoal = (goalIndex: number) => {
    const next = TRUST_ALONE_SLIDES.findIndex((item) => item.goalIndex === goalIndex)
    setIndex(next >= 0 ? next : 0)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
      <figure
        tabIndex={0}
        onClick={() => setIndex((current) => (current + 1) % TRUST_ALONE_SLIDES.length)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            setIndex((current) => (current + 1) % TRUST_ALONE_SLIDES.length)
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            setIndex((current) => (current - 1 + TRUST_ALONE_SLIDES.length) % TRUST_ALONE_SLIDES.length)
          }
        }}
        className="relative overflow-hidden rounded-xl border border-stone-200 bg-stone-100 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-stone-700 dark:bg-stone-900"
        aria-label="Painfully Alone still. Hover a goal card to change the picture."
      >
        <div className="relative aspect-[16/10]">
          <TrustStillFill asset={slide.asset} />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/25 to-transparent" />
        </div>
        <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="font-space-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
            Goal {slide.goalIndex + 1} of {TRUST_OUTCOMES.length}
          </p>
          <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">{goal.title}</p>
          <p className="mt-3 text-xs text-white/60">{still.label}</p>
        </figcaption>
        <div className="absolute bottom-3 right-3 flex gap-1.5" aria-hidden>
          {TRUST_ALONE_SLIDES.map((item, slideIndex) => (
            <span
              key={item.asset}
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                slideIndex === index ? 'bg-cyan-300' : 'bg-white/40'
              )}
            />
          ))}
        </div>
      </figure>

      <div>
        <p className="text-lg leading-relaxed text-stone-800 sm:text-xl sm:leading-relaxed dark:text-stone-100">
          Forward-deployed work rewards speed and autonomy. Those strengths can collapse five jobs into one person:
          interpret the need, build the workflow, decide if it works, grant permission to act, and explain it to the
          client. That is not independent evaluation.
        </p>
        <blockquote className="mt-6 border-l-2 border-cyan-400 pl-4 text-base leading-relaxed text-stone-700 sm:text-lg dark:text-stone-300">
          {TRUST_ONE_LINE}
        </blockquote>
        <ol className="mt-8 space-y-3">
          {TRUST_OUTCOMES.map((outcome, goalIndex) => {
            const lit = slide.goalIndex === goalIndex
            return (
              <li key={outcome.title}>
                <button
                  type="button"
                  onMouseEnter={() => showGoal(goalIndex)}
                  onFocus={() => showGoal(goalIndex)}
                  onClick={() => showGoal(goalIndex)}
                  aria-pressed={lit}
                  className={cn(
                    'w-full rounded-xl border px-4 py-3 text-left transition duration-200',
                    lit
                      ? 'border-cyan-400 bg-cyan-50 shadow-md dark:border-cyan-400 dark:bg-cyan-950/40'
                      : 'border-stone-200 bg-white hover:border-cyan-300 dark:border-stone-700 dark:bg-stone-900'
                  )}
                >
                  <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">{outcome.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{outcome.body}</p>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export function TrustOutcomesGrid() {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      {TRUST_OUTCOMES.map((outcome, index) => {
        const meta = OUTCOME_META[index]
        const Icon = meta.icon
        const still = TRUST_PLACEHOLDERS[meta.still]
        const remote = Boolean(still.src?.startsWith('https://'))
        return (
          <article
            key={outcome.title}
            className={cn(
              'group/outcome overflow-hidden rounded-xl border border-stone-200 bg-white transition duration-200',
              'dark:border-stone-700 dark:bg-stone-900',
              'motion-safe:hover:-translate-y-0.5 hover:shadow-md',
              meta.tone.hover
            )}
          >
            <div className="relative aspect-[16/9] bg-stone-100 dark:bg-stone-900">
              {still.src ? (
                <Image
                  src={still.src}
                  alt={still.alt}
                  fill
                  unoptimized={remote}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              ) : null}
            </div>
            <div className="flex items-start gap-3 p-4">
              <span
                className={cn(
                  'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-stone-50',
                  'transition duration-200 dark:border-stone-700 dark:bg-stone-950',
                  'group-hover/outcome:border-current',
                  meta.tone.icon
                )}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-stone-950 dark:text-stone-50">{outcome.title}</h3>
                <p className="mt-2 text-base text-stone-600 dark:text-stone-400">{outcome.body}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export function TrustVocabGrid() {
  const [openTerm, setOpenTerm] = useState<string | null>(null)

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {EVALS_FIELD_VOCAB.map((row) => {
        const Icon = VOCAB_ICON[row.term] ?? HiOutlineSparkles
        const chapter = TRUST_CHAPTERS.find((entry) => entry.id === row.chapterId)
        const tone = TRUST_CHAPTER_TONE[row.chapterId]
        const open = openTerm === row.term
        return (
          <div
            key={row.term}
            className={cn(
              'rounded-xl border p-4 text-left transition duration-200',
              open
                ? cn(tone.border, tone.wash, tone.text, 'shadow-md')
                : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
              !open && tone.icon,
              'motion-safe:hover:-translate-y-0.5',
              !open && tone.hover
            )}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenTerm(open ? null : row.term)}
              className="w-full text-left"
            >
              <span className="flex items-center gap-2">
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span className={cn('text-lg font-bold', open ? 'text-inherit' : 'text-stone-950 dark:text-stone-50')}>
                  {row.term}
                </span>
              </span>
              <span className={cn('mt-2 block text-base', open ? 'text-current' : 'text-stone-600 dark:text-stone-400')}>
                {row.meaning}
              </span>
              <span className={cn('mt-3 block text-sm italic', open ? 'text-current/90' : 'text-stone-500')}>
                {row.example}
              </span>
            </button>
            {open ? (
              <div className="mt-3 space-y-2 border-t border-current/20 pt-3 text-sm">
                <p>
                  <span className="font-semibold">Not this. </span>
                  {row.notThis}
                </p>
                <p>
                  <span className="font-semibold">In the room. </span>
                  {row.more}
                </p>
                {chapter ? (
                  <Link
                    href={`${TRUST_LEARN_BASE}/${chapter.slug}`}
                    className="inline-flex text-xs uppercase tracking-wide underline-offset-2 hover:underline"
                  >
                    Taught in {chapter.title}
                  </Link>
                ) : null}
              </div>
            ) : (
              <p className="mt-3 text-xs uppercase tracking-wide text-stone-400">Tap for more</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function TrustClockList() {
  return (
    <ol className="mt-4 space-y-2">
      {TRUST_CHAPTERS.map((chapter) => {
        const tone = TRUST_CHAPTER_TONE[chapter.id]
        return (
          <li key={chapter.id}>
            <Link
              href={`${TRUST_LEARN_BASE}/${chapter.slug}`}
              className={cn(
                'flex flex-col gap-1 rounded-xl border border-stone-200 bg-white px-4 py-3 transition duration-200',
                'dark:border-stone-700 dark:bg-stone-900 sm:flex-row sm:items-baseline sm:justify-between',
                'motion-safe:hover:-translate-y-0.5 hover:shadow-md',
                tone.hover
              )}
            >
              <span className="text-sm font-semibold">
                {chapter.number}. {chapter.title}
              </span>
              <span className="text-xs text-stone-500 group-hover:text-inherit">
                {chapter.clock} min · {chapter.checkpoint}
              </span>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
