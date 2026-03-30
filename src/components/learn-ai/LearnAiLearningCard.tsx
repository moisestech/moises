'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  GlyphAssistantsGrid,
  GlyphBrainstormBranch,
  GlyphResearchFrame,
  GlyphWritingCursorQuote,
} from '@/components/learn-ai/LearnAiGlyphs'
import { cn } from '@/lib/utils'

const glyphs = {
  writing: GlyphWritingCursorQuote,
  research: GlyphResearchFrame,
  brainstorm: GlyphBrainstormBranch,
  assistants: GlyphAssistantsGrid,
} as const

export type LearnAiLearningVariant = keyof typeof glyphs

export function LearnAiLearningCard({
  variant,
  title,
  body,
}: {
  variant: LearnAiLearningVariant
  title: string
  body: string
}) {
  const reduce = useReducedMotion() ?? false
  const G = glyphs[variant]

  const inner = (
    <div
      className={cn(
        'h-full rounded-sm border px-5 py-6 sm:px-6 sm:py-7 transition-all duration-300',
        'border-zinc-800 bg-zinc-900/30',
        !reduce && 'hover:-translate-y-0.5 hover:border-lime-500/25 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.1)]'
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <G className="mt-0.5 text-zinc-500" />
        <h3 className="text-zinc-100 font-medium leading-snug">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pl-[34px] sm:pl-[38px]">{body}</p>
    </div>
  )

  if (reduce) {
    return inner
  }

  return (
    <motion.div whileHover={{ scale: 1.005 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
      {inner}
    </motion.div>
  )
}
