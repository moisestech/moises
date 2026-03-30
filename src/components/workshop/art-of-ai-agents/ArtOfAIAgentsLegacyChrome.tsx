'use client'

import type { ReactNode } from 'react'
import { ART_OF_AI_AGENTS_LEGACY_STYLES } from './art-of-ai-agents-legacy-styles'

type Variant = 'full' | 'embedded'

/**
 * Workshop surface for The Art of AI Agents.
 * - `full`: one-pager; always dark aesthetic; inner `dark` scope so `dark:` utilities match the panel even if the site is light.
 * - `embedded`: chapter routes; follows site theme via `html.dark` (same as global nav).
 */
export function ArtOfAIAgentsLegacyChrome({
  children,
  variant = 'full',
}: {
  children: ReactNode
  variant?: Variant
}) {
  if (variant === 'embedded') {
    return (
      <>
        <style>{ART_OF_AI_AGENTS_LEGACY_STYLES}</style>
        <div className="art-of-ai-agents-legacy-surface relative overflow-hidden rounded-xl border border-zinc-200/90 bg-zinc-50 text-zinc-900 shadow-sm dark:border-white/10 dark:bg-[#09090b] dark:text-[#e0e0e0]">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-[#05050a] dark:to-[#0a0a0f]"
            aria-hidden
          />
          <div className="noise-overlay" aria-hidden />
          <div className="relative z-[1]">{children}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <style>{ART_OF_AI_AGENTS_LEGACY_STYLES}</style>
      <div className="art-of-ai-agents-legacy-surface art-of-ai-agents-legacy-surface--force-dark dark relative min-h-screen bg-[#09090b] text-[#e0e0e0]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] to-[#0a0a0f]" aria-hidden />
        <div className="noise-overlay" aria-hidden />
        <div className="relative z-[1]">{children}</div>
      </div>
    </>
  )
}
