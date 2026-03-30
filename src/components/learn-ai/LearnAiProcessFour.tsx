'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { LEARN_AI_PROCESS_STEPS, LEARN_AI_PROCESS_TAGLINE } from '@/constants/learn-ai-content'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { GlyphArrowRight, GlyphNodeChain } from '@/components/learn-ai/LearnAiGlyphs'
import { learnAiSectionEyebrow } from '@/components/learn-ai/learn-ai-tokens'
import { cn } from '@/lib/utils'

function ProcessCard({ title, body, index }: { title: string; body: string; index: number }) {
  const reduce = useReducedMotion() ?? false

  const content = (
    <div
      className={cn(
        'h-full rounded-sm border px-5 py-6 sm:px-6 sm:py-7 transition-all duration-300',
        'border-zinc-200 bg-white/90 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/35 dark:shadow-none',
        !reduce &&
          'hover:-translate-y-0.5 hover:border-lime-600/30 hover:shadow-[0_0_0_1px_rgba(101,163,13,0.1)] dark:hover:border-lime-500/25 dark:hover:shadow-[0_0_0_1px_rgba(163,230,53,0.12)]'
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">Step {index + 1}</p>
      <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{body}</p>
    </div>
  )

  if (reduce) {
    return content
  }

  return (
    <motion.div whileHover={{ scale: 1.005 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
      {content}
    </motion.div>
  )
}

export function LearnAiProcessFour() {
  return (
    <LearnAiReveal className="max-w-6xl mx-auto px-5 sm:px-6">
      <p className={learnAiSectionEyebrow()}>How the session works</p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mb-2 max-w-2xl leading-relaxed">
        {LEARN_AI_PROCESS_TAGLINE}
      </p>
      <div className="mb-8 flex justify-center lg:hidden" aria-hidden>
        <GlyphNodeChain className="w-40" />
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-3">
        {LEARN_AI_PROCESS_STEPS.map((step, i) => (
          <div key={step.title} className="flex flex-1 min-w-0 items-stretch gap-2 lg:gap-3">
            {i > 0 && (
              <div className="hidden lg:flex shrink-0 items-center self-center text-zinc-500 dark:text-zinc-600" aria-hidden>
                <GlyphArrowRight />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <ProcessCard title={step.title} body={step.body} index={i} />
            </div>
          </div>
        ))}
      </div>
    </LearnAiReveal>
  )
}
