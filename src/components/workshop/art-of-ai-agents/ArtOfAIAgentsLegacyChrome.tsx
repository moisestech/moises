'use client'

import type { ReactNode } from 'react'
import { ART_OF_AI_AGENTS_LEGACY_STYLES } from './art-of-ai-agents-legacy-styles'

type Variant = 'full' | 'embedded'

/**
 * Dark “legacy” workshop surface (matches the original one-pager look).
 * - `full`: used on /full with full-viewport gradient + noise
 * - `embedded`: rounded panel for chapter routes inside the theme-aware shell
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
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#09090b] text-[#e0e0e0]">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05050a] to-[#0a0a0f]"
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
      <div className="relative min-h-screen bg-[#09090b] text-[#e0e0e0]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] to-[#0a0a0f]" aria-hidden />
        <div className="noise-overlay" aria-hidden />
        <div className="relative z-[1]">{children}</div>
      </div>
    </>
  )
}
