'use client'

import { TRUST_ONE_LINE, TRUST_THESIS } from '@/content/workshops/trust-is-not-a-vibe'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'

export function ExitTicket({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-4">
      <TrustPlaceholderFrame asset="sharedOwnership" />
      <label className="block">
        <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">What changed your decision?</span>
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
          placeholder="Name the evidence, permission, or person that moved you."
        />
      </label>
      <blockquote className="border-l-2 border-cyan-400 pl-4 text-sm text-stone-700 dark:text-stone-300">
        {TRUST_ONE_LINE}
      </blockquote>
      <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{TRUST_THESIS}</p>
    </div>
  )
}
