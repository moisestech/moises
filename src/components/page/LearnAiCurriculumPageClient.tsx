'use client'

import Link from 'next/link'
import {
  LEARN_AI_CURRICULUM_CHAPTERS,
  LEARN_AI_CURRICULUM_INTRO,
} from '@/constants/learn-ai-curriculum-chapters'
import { LearnAiPullQuote } from '@/components/learn-ai/LearnAiPullQuote'
import {
  learnAiAtmosphereNavy,
  learnAiPageRoot,
  learnAiSectionEyebrow,
  learnAiSectionTitle,
} from '@/components/learn-ai/learn-ai-tokens'
import { GlyphBracketPair } from '@/components/learn-ai/LearnAiGlyphs'
import { cn } from '@/lib/utils'

export default function LearnAiCurriculumPageClient() {
  return (
    <div className={learnAiPageRoot()}>
      <header
        className={cn(learnAiAtmosphereNavy(), 'border-b border-zinc-200/80 dark:border-zinc-800/80')}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-4">
            <Link
              href="/workshop/learn-ai-without-losing-yourself"
              className="text-zinc-600 dark:text-zinc-400 underline-offset-4 hover:underline"
            >
              Learn AI Without Losing Yourself
            </Link>
            <span className="text-zinc-400 dark:text-zinc-600"> · </span>
            <span>Curriculum</span>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            Curriculum outline
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {LEARN_AI_CURRICULUM_INTRO}
          </p>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            For booking and formats, see the{' '}
            <Link
              href="/workshop/learn-ai-without-losing-yourself"
              className="text-zinc-800 dark:text-zinc-300 underline underline-offset-4 hover:text-lime-800 dark:hover:text-lime-400"
            >
              public workshop page
            </Link>
            . For conceptual backbone and humor strategy, see{' '}
            <Link
              href="/workshop/learn-ai-without-losing-yourself/lab"
              className="text-zinc-800 dark:text-zinc-300 underline underline-offset-4 hover:text-lime-800 dark:hover:text-lime-400"
            >
              Inside the workshop
            </Link>
            .
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-6">
        {LEARN_AI_CURRICULUM_CHAPTERS.map((ch) => (
          <details
            key={ch.id}
            className="group rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/35 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none px-5 py-4 sm:px-6 sm:py-5 flex flex-wrap items-baseline justify-between gap-2 [&::-webkit-details-marker]:hidden">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">{ch.durationHint}</p>
                <h2 className={cn(learnAiSectionTitle(), 'text-left')}>{ch.title}</h2>
              </div>
              <span className="text-xs text-lime-800 dark:text-lime-400/90 shrink-0 group-open:hidden">Expand</span>
              <span className="text-xs text-zinc-500 shrink-0 hidden group-open:inline">Collapse</span>
            </summary>
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-zinc-100 dark:border-zinc-800/80">
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">{ch.summary}</p>
              {ch.demoSummary ? (
                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                  <span className="font-medium text-zinc-600 dark:text-zinc-400">Demo / activity: </span>
                  {ch.demoSummary}
                </p>
              ) : null}
              <div className="mt-5">
                <p className={learnAiSectionEyebrow()}>Learning objectives</p>
                <ul className="list-none space-y-2 mt-2">
                  {ch.objectives.map((o) => (
                    <li key={o} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <GlyphBracketPair className="mt-0.5 shrink-0 opacity-70" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <p className={learnAiSectionEyebrow()}>Key ideas</p>
                <ul className="list-none space-y-2 mt-2">
                  {ch.keyIdeas.map((k) => (
                    <li key={k} className="flex gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-lime-700 dark:text-lime-500/90 mt-0.5">·</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <LearnAiPullQuote>Use AI for assistance, not surrender.</LearnAiPullQuote>
        </div>
      </div>
    </div>
  )
}
