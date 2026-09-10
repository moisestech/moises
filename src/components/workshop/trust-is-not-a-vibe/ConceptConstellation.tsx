'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import {
  getTrustConceptCluster,
  type ConceptCluster,
  type ConceptClusterId,
  type ConceptItem,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_SCROLL_MT, trustPresentChrome } from './trust-tokens'

function firstPrimaryId(cluster: ConceptCluster): string | null {
  if (cluster.defaultActiveId && cluster.items.some((item) => item.id === cluster.defaultActiveId)) {
    return cluster.defaultActiveId
  }
  const primary = cluster.items.find((item) => (item.emphasis ?? 'primary') === 'primary')
  return primary?.id ?? cluster.items[0]?.id ?? null
}

function termSize(item: ConceptItem, present: boolean) {
  const primary = (item.emphasis ?? 'primary') === 'primary'
  if (present) return primary ? 'text-2xl' : 'text-xl'
  return primary ? 'text-xl' : 'text-lg'
}

export function ConceptConstellation({ clusterId }: { clusterId: ConceptClusterId }) {
  const cluster = getTrustConceptCluster(clusterId)
  const { present, hydrated } = usePresentationMode()
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!hydrated) return
    setActiveId(present ? null : firstPrimaryId(getTrustConceptCluster(clusterId)))
  }, [clusterId, hydrated, present])

  const active = cluster.items.find((item) => item.id === activeId) ?? null
  const live = active ? `${active.term}. ${active.definition}` : ''

  return (
    <div
      data-trust-concept-constellation={cluster.id}
      className="overflow-x-hidden"
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div role="group" aria-label={cluster.ariaLabel} className="flex flex-wrap gap-2">
          {cluster.items.map((item) => {
            const selected = item.id === activeId
            return (
              <button
                key={item.id}
                type="button"
                data-trust-concept-term={item.id}
                aria-pressed={selected}
                onClick={() => setActiveId(item.id)}
                className={cn(
                  'inline-flex min-h-11 min-w-11 items-center rounded-xl border px-3 py-2 text-left font-semibold leading-snug',
                  TRUST_SCROLL_MT,
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950',
                  reduceMotion
                    ? undefined
                    : '[@media(pointer:fine)]:motion-safe:transition-transform [@media(pointer:fine)]:motion-safe:duration-150 [@media(pointer:fine)]:motion-safe:hover:scale-[1.03] [@media(pointer:fine)]:motion-safe:focus-visible:scale-[1.03]',
                  'motion-reduce:transform-none motion-reduce:transition-none',
                  termSize(item, present),
                  selected
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950'
                    : 'border-stone-200 bg-white text-stone-950 hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50'
                )}
              >
                {item.term}
                {selected ? <span className="sr-only"> (showing definition)</span> : null}
              </button>
            )
          })}
        </div>

        <div
          data-trust-concept-panel
          className={cn(
            'rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 dark:border-stone-700 dark:bg-stone-900/60',
            present ? 'min-h-48' : 'min-h-32'
          )}
        >
          <p className="sr-only" aria-live="polite">
            {live}
          </p>
          {active ? (
            <div
              className={cn(
                reduceMotion
                  ? undefined
                  : 'motion-safe:transition-[opacity,transform] motion-safe:duration-200 motion-safe:ease-out'
              )}
            >
              <p
                className={cn(
                  'font-semibold text-stone-950 dark:text-stone-50',
                  present ? 'text-2xl' : 'text-lg'
                )}
              >
                {active.term}
              </p>
              <p
                data-trust-concept-definition
                className={cn(
                  'mt-2 leading-relaxed text-stone-700 dark:text-stone-300',
                  present ? 'text-xl' : 'text-sm'
                )}
              >
                {active.definition}
              </p>
              <p
                className={cn(
                  'mt-3 leading-relaxed text-stone-600 dark:text-stone-400',
                  present ? 'text-lg' : 'text-sm'
                )}
              >
                <span className="font-medium text-stone-800 dark:text-stone-200">Why it matters. </span>
                {active.whyItMatters}
              </p>
              {active.source ? (
                <p className={cn('mt-3', present ? 'text-base' : 'text-sm')}>
                  <a
                    href={active.source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-cyan-800 underline-offset-2 hover:underline dark:text-cyan-300"
                  >
                    {active.source.label}
                  </a>
                </p>
              ) : null}
            </div>
          ) : (
            <p
              className={cn(
                'text-stone-600 dark:text-stone-400',
                present ? 'text-xl leading-snug' : 'text-sm leading-relaxed'
              )}
            >
              Choose a term.
            </p>
          )}
          {present ? (
            <button
              type="button"
              onClick={() => setActiveId(null)}
              disabled={!active}
              className={cn(trustPresentChrome.control, 'mt-4 disabled:opacity-40')}
            >
              Reset terms
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
