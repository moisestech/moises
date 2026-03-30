'use client'

import { LEARN_AI_QUICK_FACTS } from '@/constants/learn-ai-content'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { GlyphBracketPair } from '@/components/learn-ai/LearnAiGlyphs'
import { cn } from '@/lib/utils'

export function LearnAiQuickFacts() {
  return (
    <LearnAiReveal className="max-w-5xl mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-2 sm:pb-4 relative z-20">
      <div
        className={cn(
          'rounded-sm border border-zinc-200 dark:border-zinc-800',
          'bg-white/90 backdrop-blur-sm dark:bg-zinc-900/50 shadow-sm dark:shadow-none',
          'px-4 py-5 sm:px-6 sm:py-6'
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
          {LEARN_AI_QUICK_FACTS.map((f) => (
            <div key={f.label} className="flex items-start gap-2.5 min-w-0">
              <GlyphBracketPair className="mt-0.5 opacity-80 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500">{f.label}</p>
                <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-medium leading-snug mt-1">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LearnAiReveal>
  )
}
