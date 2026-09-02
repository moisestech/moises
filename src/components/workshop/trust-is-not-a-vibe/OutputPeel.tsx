'use client'

import { useState, type ReactNode } from 'react'
import type { TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'

const LAYERS = [
  { id: 'evidence', label: 'Evidence', hint: 'What did it read?' },
  { id: 'authority', label: 'Authority', hint: 'What may it change?' },
  { id: 'impact', label: 'Impact', hint: 'Who feels this?' },
] as const

export function AgentOutputCard({
  caseData,
  peeled,
}: {
  caseData: TrustCase
  peeled?: boolean
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900">
      <div className="border-b border-stone-100 bg-stone-50 px-4 py-3 dark:border-stone-800 dark:bg-stone-800/60">
        <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">Agent recommendation</p>
        <h3 className="mt-1 text-lg font-semibold text-stone-950 dark:text-stone-50">{caseData.output.headline}</h3>
        <p className="mt-1 text-xs text-stone-500">{caseData.output.confidence}</p>
      </div>
      <dl className="grid gap-px bg-stone-100 dark:bg-stone-800 sm:grid-cols-2">
        {caseData.output.claims.map((claim) => (
          <div key={claim.label} className="bg-white px-4 py-3 dark:bg-stone-900">
            <dt className="text-[10px] uppercase tracking-wide text-stone-500">{claim.label}</dt>
            <dd className="mt-0.5 text-sm font-medium text-stone-900 dark:text-stone-100">{claim.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="space-y-1 border-t border-stone-100 px-4 py-3 text-sm text-stone-600 dark:border-stone-800 dark:text-stone-400">
        {caseData.output.proposedActions.map((action) => (
          <li key={action}>→ {action}</li>
        ))}
      </ul>
      {peeled ? (
        <p className="border-t border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          Looks right. Would you let it act?
        </p>
      ) : null}
    </article>
  )
}

export function OutputPeel({
  caseData,
  open: openProp,
  onOpenChange,
  vote,
}: {
  caseData: TrustCase
  open?: boolean
  onOpenChange?: (open: boolean) => void
  vote?: ReactNode
}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = openProp ?? internalOpen
  const setOpen = onOpenChange ?? setInternalOpen
  const [layer, setLayer] = useState<(typeof LAYERS)[number]['id']>('evidence')

  const items =
    layer === 'evidence'
      ? caseData.environment.evidence
      : layer === 'authority'
        ? caseData.environment.authority
        : caseData.environment.impact

  return (
    <div className="space-y-4">
      <AgentOutputCard caseData={caseData} peeled={open} />
      {vote}
      <TrustPlaceholderFrame asset={caseData.id === 'case-a' ? 'caseAOutput' : 'caseBTransfer'} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
      >
        {open ? 'Hide the system' : 'Open the box'}
      </button>
      {open ? (
        <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">You saw the answer. Not the system.</p>
          <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Environment layers">
            {LAYERS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={layer === item.id}
                onClick={() => setLayer(item.id)}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-semibold',
                  layer === item.id
                    ? 'border-cyan-400 bg-cyan-50 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-200'
                    : 'border-stone-200 text-stone-600 dark:border-stone-600 dark:text-stone-300'
                )}
              >
                {item.label}
                <span className="ml-1 font-normal opacity-70">{item.hint}</span>
              </button>
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-300">
            {items.map((item) => (
              <li key={item} className="rounded-lg bg-stone-50 px-3 py-2 dark:bg-stone-800/60">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-stone-500">{caseData.fixtureNote}</p>
        </div>
      ) : null}
    </div>
  )
}
