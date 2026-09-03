'use client'

import { useState } from 'react'
import { type TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'

const LAYERS = [
  { id: 'evidence', label: 'Evidence', hint: 'What did it read?', mark: 'evidence' as const },
  { id: 'authority', label: 'Authority', hint: 'What may it change?', mark: 'authority' as const },
  { id: 'impact', label: 'Impact', hint: 'Who feels this?', mark: 'impact' as const },
] as const

export function TrustSystemLayers({ caseData }: { caseData: TrustCase }) {
  const [layer, setLayer] = useState<(typeof LAYERS)[number]['id']>('evidence')
  const items =
    layer === 'evidence'
      ? caseData.environment.evidence
      : layer === 'authority'
        ? caseData.environment.authority
        : caseData.environment.impact

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
        You saw the card. Not the system.
      </p>
      <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="What the card left out">
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
    </div>
  )
}
