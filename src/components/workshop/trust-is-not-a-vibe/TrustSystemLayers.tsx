'use client'

import { useState } from 'react'
import { type TrustCase } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_SCROLL_MT, trustPresent } from './trust-tokens'

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
  const { present } = usePresentationMode()
  const [layer, setLayer] = useState<(typeof LAYERS)[number]['id']>('evidence')
  const [interacted, setInteracted] = useState(false)
  const items =
    layer === 'evidence'
      ? caseData.environment.evidence
      : layer === 'authority'
        ? caseData.environment.authority
        : caseData.environment.impact

  return (
    <div
      className={cn(
        'rounded-xl border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
        present ? 'p-6' : 'p-4'
      )}
    >
      <p
        className={cn(
          'font-semibold uppercase tracking-wide text-stone-500',
          present ? 'text-base sm:text-lg' : 'text-xs'
        )}
      >
        You saw the card. Not the system.
      </p>
      <div
        className={cn('mt-3 grid sm:grid-cols-3', present ? 'mt-5 gap-4' : 'gap-2')}
        role="group"
        aria-label="What the card left out"
      >
        {LAYERS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={layer === item.id}
            onClick={() => {
              setLayer(item.id)
              if (!interacted) {
                setInteracted(true)
                onFirstInteraction?.()
              }
            }}
            className={cn(
              'rounded-lg border text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
              present ? 'px-5 py-4' : 'px-3 py-2',
              TRUST_SCROLL_MT,
              layer === item.id
                ? 'border-cyan-400 bg-cyan-50 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-200'
                : 'border-stone-200 text-stone-600 dark:border-stone-600 dark:text-stone-300'
            )}
          >
            <div className="flex items-start gap-2">
              <TrustMark id={item.mark} className={cn('mt-0.5 shrink-0', present ? 'h-6 w-6' : 'h-4 w-4')} />
              <div>
                <p className={cn('font-semibold', present ? trustPresent.choice : 'text-sm')}>{item.question}</p>
                <p className={cn('opacity-80', present ? 'mt-1 text-base' : 'text-xs')}>{item.term}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <ul
        className={cn(
          'text-stone-700 dark:text-stone-300',
          present ? 'mt-6 space-y-3 text-xl leading-snug sm:text-2xl' : 'mt-4 space-y-2 text-sm'
        )}
      >
        {items.map((item) => (
          <li
            key={item}
            className={cn('rounded-lg bg-stone-50 dark:bg-stone-800/60', present ? 'px-5 py-4' : 'px-3 py-2')}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
