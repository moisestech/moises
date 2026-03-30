'use client'

import { LEARN_AI_AUTOMATED_ITEMS, LEARN_AI_HUMAN_ITEMS } from '@/constants/learn-ai-content'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { GlyphDotRow } from '@/components/learn-ai/LearnAiGlyphs'
import { learnAiSectionEyebrow } from '@/components/learn-ai/learn-ai-tokens'
import { cn } from '@/lib/utils'

function ListColumn({
  title,
  items,
  warm,
}: {
  title: string
  items: readonly string[]
  warm: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-sm border p-6 sm:p-8 relative overflow-hidden min-h-[280px]',
        warm
          ? 'border-amber-900/50 bg-gradient-to-br from-amber-950/40 via-zinc-950 to-zinc-950 ring-1 ring-amber-500/10'
          : 'border-slate-800 bg-gradient-to-br from-slate-950/80 via-zinc-950 to-zinc-950 ring-1 ring-slate-700/30'
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-px bg-gradient-to-r',
          warm ? 'from-transparent via-amber-400/25 to-transparent' : 'from-transparent via-slate-500/30 to-transparent'
        )}
        aria-hidden
      />
      <GlyphDotRow className="mb-4 opacity-70 text-lime-400/35" />
      <h3
        className={cn(
          'text-sm font-semibold mb-4 tracking-wide uppercase',
          warm ? 'text-amber-200/90' : 'text-slate-400'
        )}
      >
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              className={cn(
                'shrink-0 font-mono text-xs pt-0.5',
                warm ? 'text-amber-600/70' : 'text-slate-500'
              )}
            >
              —
            </span>
            <span className={warm ? 'text-zinc-200' : 'text-zinc-400'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function LearnAiHumanSplit() {
  return (
    <LearnAiReveal className="max-w-5xl mx-auto px-5 sm:px-6">
      <div className="rounded-sm border border-zinc-800 bg-zinc-900/20 p-6 sm:p-10 ring-1 ring-zinc-800/80">
        <p className={learnAiSectionEyebrow()}>What should stay human</p>
        <p className="text-lg text-zinc-300 mb-10 max-w-2xl leading-relaxed">
          AI can help with many parts of the process. The challenge is knowing what should remain yours.
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ListColumn title="Human" items={LEARN_AI_HUMAN_ITEMS} warm />
          <ListColumn title="Automated" items={LEARN_AI_AUTOMATED_ITEMS} warm={false} />
        </div>
        <p className="mt-10 text-lg text-zinc-200 font-medium leading-relaxed max-w-2xl border-t border-zinc-800 pt-8">
          The problem is not automation by itself. The problem begins when we automate the parts of ourselves that
          matter most.
        </p>
      </div>
    </LearnAiReveal>
  )
}
