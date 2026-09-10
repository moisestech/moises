'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import {
  HiOutlineArrowPath,
  HiOutlineChartBar,
  HiOutlineFlag,
  HiOutlineQueueList,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineStar,
} from 'react-icons/hi2'
import {
  EVALS_FIELD_VOCAB,
  TRUST_CHAPTERS,
  TRUST_CHAPTER_TIME,
  TRUST_LEARN_BASE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { TRUST_CHAPTER_TONE } from './trust-tokens'

const VOCAB_ICON: Record<string, IconType> = {
  'Vibe eval': HiOutlineSparkles,
  Eval: HiOutlineChartBar,
  Benchmark: HiOutlineQueueList,
  'Golden set': HiOutlineStar,
  Faithfulness: HiOutlineShieldCheck,
  'LLM-as-judge': HiOutlineScale,
  Baseline: HiOutlineFlag,
  'Whac-a-mole': HiOutlineArrowPath,
}

export function TrustVocabGrid() {
  const [openTerm, setOpenTerm] = useState<string | null>(null)

  return (
    <div className="grid gap-3 sm:grid-cols-2">
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
  const { present } = useTrustPresentation()

  return (
    <ol data-trust-overview-clock className={present ? 'space-y-3' : 'space-y-2'}>
      {TRUST_CHAPTERS.map((chapter) => (
        <li key={chapter.id}>
          <Link
            href={`${TRUST_LEARN_BASE}/${chapter.slug}`}
            data-trust-overview-clock-row={chapter.id}
            className={cn(
              'group flex rounded-xl border border-stone-200 bg-white text-stone-800 transition duration-200',
              'dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200',
              present
                ? 'flex-col gap-2 px-5 py-4'
                : 'flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between',
              'motion-safe:hover:-translate-y-0.5 hover:shadow-md',
              'hover:border-stone-900 hover:bg-stone-100 hover:text-stone-950',
              'dark:hover:border-stone-100 dark:hover:bg-stone-800 dark:hover:text-white',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'focus-visible:border-stone-900 focus-visible:bg-stone-100 focus-visible:text-stone-950',
              'focus-visible:ring-stone-900 focus-visible:ring-offset-stone-50',
              'dark:focus-visible:border-stone-100 dark:focus-visible:bg-stone-800 dark:focus-visible:text-white',
              'dark:focus-visible:ring-stone-100 dark:focus-visible:ring-offset-stone-950'
            )}
          >
            <span
              data-trust-overview-clock-title
              className={cn(
                'font-semibold text-stone-950 dark:text-stone-50',
                'group-hover:text-stone-950 dark:group-hover:text-white',
                'group-focus-visible:text-stone-950 dark:group-focus-visible:text-white',
                present ? 'text-2xl sm:text-3xl' : 'text-xl'
              )}
            >
              {chapter.number}. {chapter.title}
            </span>
            <span
              data-trust-overview-clock-meta
              className={cn(
                'text-stone-500 dark:text-stone-400',
                'group-hover:text-stone-950 dark:group-hover:text-white',
                'group-focus-visible:text-stone-950 dark:group-focus-visible:text-white',
                present ? 'text-lg sm:text-xl' : 'text-base'
              )}
            >
              {TRUST_CHAPTER_TIME[chapter.id].clock} · {chapter.checkpoint}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
