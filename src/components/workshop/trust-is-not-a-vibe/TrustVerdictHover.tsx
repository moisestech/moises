'use client'

import type { TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import {
  TRUST_VERDICT_FOCUS,
  TRUST_VERDICT_HINT,
  TRUST_VERDICT_HOVER,
  TRUST_VERDICT_LABEL,
} from './trust-tokens'

/**
 * Inline Allow / Ask / Deny. Idle type stays with the sentence; hover and
 * focus-visible take the same verdict family as Try it vote.
 */
export function TrustVerdictHover({
  verdict,
  className,
}: {
  verdict: TrustVerdict
  className?: string
}) {
  return (
    <button
      type="button"
      data-trust-verdict-term={verdict}
      title={TRUST_VERDICT_HINT[verdict]}
      className={cn(
        'rounded-md border border-transparent px-1 font-semibold underline decoration-dotted underline-offset-4',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950',
        verdict === 'allow' && 'focus-visible:ring-emerald-500',
        verdict === 'ask' && 'focus-visible:ring-amber-500',
        verdict === 'deny' && 'focus-visible:ring-red-500',
        TRUST_VERDICT_HOVER[verdict],
        TRUST_VERDICT_FOCUS[verdict],
        className
      )}
    >
      {TRUST_VERDICT_LABEL[verdict]}
    </button>
  )
}
