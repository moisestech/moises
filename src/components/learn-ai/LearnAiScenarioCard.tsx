'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { GlyphDotRow } from '@/components/learn-ai/LearnAiGlyphs'
import { cn } from '@/lib/utils'

export function LearnAiScenarioCard({ title, body }: { title: string; body: string }) {
  const reduce = useReducedMotion() ?? false

  const inner = (
    <div
      className={cn(
        'rounded-sm border border-zinc-800 border-l-[3px] border-l-lime-500/30 pl-4 pr-5 py-5 sm:pl-5 sm:pr-6 sm:py-6 transition-all duration-300',
        'bg-zinc-900/25',
        !reduce && 'hover:-translate-y-0.5 hover:border-lime-500/35 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.06)]'
      )}
    >
      <GlyphDotRow className="mb-3 opacity-60" />
      <h3 className="text-zinc-100 font-medium text-lg mb-2 leading-snug">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{body}</p>
    </div>
  )

  if (reduce) {
    return inner
  }

  return (
    <motion.div whileHover={{ scale: 1.003 }} transition={{ type: 'spring', stiffness: 450, damping: 30 }}>
      {inner}
    </motion.div>
  )
}
