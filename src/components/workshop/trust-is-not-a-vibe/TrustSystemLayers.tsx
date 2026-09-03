'use client'

import { useState } from 'react'
import { type TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'

const LAYERS = [
  { id: 'evidence', term: 'Evidence', question: 'What did it read?', mark: 'evidence' as const },
  { id: 'authority', term: 'Permission', question: 'What may it change?', mark: 'authority' as const },
  { id: 'impact', term: 'Impact', question: 'Who feels the result?', mark: 'impact' as const },
] as const

export function TrustSystemLayers({
  caseData,
  onFirstInteraction,
}: {
  caseData: TrustCase
  onFirstInteraction?: () => void
}) {
  const [layer, setLayer] = useState<(typeof LAYERS)[number]['id']>('evidence')
  const [interacted, setInteracted] = useState(false)
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
      <div className="mt-3 grid gap-2 sm:grid-cols-3" role="tablist" aria-label="What the card left out">
        {LAYERS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={layer === item.id}
            onClick={() => {
              setLayer(item.id)
              if (!interacted) {
                setInteracted(true)
                onFirstInteraction?.()
              }
            }}
            className={cn(
              'rounded-lg border px-3 py-2 text-left',
              layer === item.id
                ? 'border-cyan-400 bg-cyan-50 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-200'
                : 'border-stone-200 text-stone-600 dark:border-stone-600 dark:text-stone-300'
            )}
          >
            <div className="flex items-start gap-2">
              <TrustMark id={item.mark} className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p className="text-sm font-semibold">{item.question}</p>
                <p className="text-xs opacity-80">{item.term}</p>
              </div>
            </div>
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
