'use client'

import {
  LEARN_AI_PROOF,
  LEARN_AI_PROOF_PLACEHOLDERS,
} from '@/constants/learn-ai-content'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { GlyphBracketPair } from '@/components/learn-ai/LearnAiGlyphs'
import { learnAiSectionEyebrow, learnAiSectionTitle } from '@/components/learn-ai/learn-ai-tokens'
import { cn } from '@/lib/utils'

function Slot({
  label,
  value,
  placeholder,
}: {
  label: string
  value: string
  placeholder: string
}) {
  const filled = value.trim().length > 0
  return (
    <div
      className={cn(
        'rounded-sm border px-4 py-4 sm:px-5 sm:py-5',
        'border-zinc-800',
        'bg-zinc-900/30'
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <GlyphBracketPair className="opacity-60 scale-90 text-lime-400/45" />
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      </div>
      <p
        className={cn(
          'text-sm sm:text-base leading-relaxed',
          filled ? 'text-zinc-200' : 'text-zinc-500 italic'
        )}
      >
        {filled ? value : placeholder}
      </p>
    </div>
  )
}

export function LearnAiProofBlock() {
  return (
    <LearnAiReveal className="max-w-5xl mx-auto px-5 sm:px-6">
      <p className={learnAiSectionEyebrow()}>Proof-ready</p>
      <h2 className={cn(learnAiSectionTitle(), 'mb-3')}>Presence &amp; documentation</h2>
      <p className="text-sm text-zinc-400 mb-8 max-w-2xl leading-relaxed">
        Host lines, quotes, and media can be added as engagements are confirmed — the layout stays finished either way.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Slot
          label="Presented with / Hosted by"
          value={LEARN_AI_PROOF.presentedWith}
          placeholder={LEARN_AI_PROOF_PLACEHOLDERS.presentedWith}
        />
        <Slot
          label="Organizer notes"
          value={LEARN_AI_PROOF.organizerNotes}
          placeholder={LEARN_AI_PROOF_PLACEHOLDERS.organizerNotes}
        />
        <Slot
          label="Audience response"
          value={LEARN_AI_PROOF.audienceResponse}
          placeholder={LEARN_AI_PROOF_PLACEHOLDERS.audienceResponse}
        />
        <Slot
          label="Still image / clip"
          value={LEARN_AI_PROOF.stillOrClip}
          placeholder={LEARN_AI_PROOF_PLACEHOLDERS.stillOrClip}
        />
      </div>
    </LearnAiReveal>
  )
}
