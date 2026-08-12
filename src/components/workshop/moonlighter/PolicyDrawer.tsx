'use client'

import { useState } from 'react'
import {
  notIncludedInRecovery,
  printAttemptPolicySummary,
  qualifyingReprintReasons,
  repairableMeshMeans,
} from '@/content/workshops/moonlighter-ai-3d-printing'

const ACK_KEY = 'moonlighter_policy_ack'

export function PolicyDrawer({
  onAcknowledge,
}: {
  onAcknowledge?: () => void
} = {}) {
  const [open, setOpen] = useState(false)
  const [acked, setAcked] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(ACK_KEY) === '1'
  })

  function acknowledge() {
    localStorage.setItem(ACK_KEY, '1')
    setAcked(true)
    onAcknowledge?.()
  }

  return (
    <div className="border border-[var(--ml-soft-gray)] bg-white/50">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Print Attempt & Recovery Policy
        <span className="font-mono text-xs text-[var(--ml-ink)]/50">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="space-y-4 border-t border-[var(--ml-soft-gray)] px-4 py-4 text-sm text-[var(--ml-ink)]/80">
          <p>{printAttemptPolicySummary}</p>
          <div>
            <h4 className="font-medium text-[var(--ml-ink)]">Qualifying automatic reprint</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {qualifyingReprintReasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[var(--ml-ink)]">Repairable mesh means</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {repairableMeshMeans.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[var(--ml-ink)]">Not included</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {notIncludedInRecovery.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={acknowledge}
            className="rounded-sm bg-[var(--ml-verified)] px-4 py-2 text-white"
          >
            {acked ? 'Acknowledged' : 'I understand this policy'}
          </button>
        </div>
      )}
    </div>
  )
}
