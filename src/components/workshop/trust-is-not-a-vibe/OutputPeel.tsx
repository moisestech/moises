'use client'

import { useState, type ReactNode } from 'react'
import { type TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { AgentOutputCard } from './AgentOutputCard'
import { CaseAStudioStill } from './CaseAStudioStill'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'
import { TrustSpecimen } from './TrustSpecimen'

const LAYERS = [
  { id: 'evidence', label: 'Evidence', hint: 'What did it read?', mark: 'evidence' as const },
  { id: 'authority', label: 'Authority', hint: 'What may it change?', mark: 'authority' as const },
  { id: 'impact', label: 'Impact', hint: 'Who feels this?', mark: 'impact' as const },
] as const

export { AgentOutputCard } from './AgentOutputCard'

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
      <p className="max-w-2xl text-base text-stone-700 dark:text-stone-300">
        This card is invented for the lesson. An AI wrote a recommendation and is asking to act. Judge the ask — not
        whether the prose looks finished.
      </p>
      {caseData.id === 'case-a' ? <CaseAStudioStill /> : null}
      <TrustSpecimen
        caseData={caseData}
        underneathUnlocked={open}
        lockedNote="Open the system to see the request behind this card."
      />
      {vote}
      {caseData.id === 'case-b' ? <TrustPlaceholderFrame asset="caseBTransfer" /> : null}
      {open && caseData.id === 'case-a' ? <TrustPlaceholderFrame asset="caseAEnvironment" /> : null}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
      >
        {open ? 'Hide the system' : 'Open the system'}
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
                <TrustMark id={item.mark} className="mr-1 inline-block h-3.5 w-3.5 align-[-2px]" />
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
