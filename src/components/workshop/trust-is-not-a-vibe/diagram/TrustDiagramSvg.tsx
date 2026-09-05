'use client'

import { createContext, useContext, useId, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TRUST_DIAGRAM_ARROW } from './tokens'

type TrustDiagramIds = {
  /** Arrowhead marker for solid connectors. */
  arrow: string
}

const TrustDiagramContext = createContext<TrustDiagramIds | null>(null)

export function useTrustDiagramIds(): TrustDiagramIds {
  const ids = useContext(TrustDiagramContext)
  if (!ids) throw new Error('Trust diagram parts must render inside <TrustDiagramSvg>.')
  return ids
}

/**
 * Responsive SVG canvas for a diagram.
 *
 * Marker ids are scoped per instance. The previous hand-rolled diagrams shared a
 * hardcoded `trust-arrow` id, so a page rendering two of them (the-loop renders
 * the agent loop twice) produced duplicate ids and every `url(#...)` resolved to
 * whichever came first in the document.
 */
export function TrustDiagramSvg({
  viewBox,
  title,
  description,
  className,
  children,
}: {
  viewBox: string
  /** Short accessible name, read in place of the graphic. */
  title: string
  /** Longer reading of the same information, for anyone who cannot see it. */
  description?: string
  className?: string
  children: ReactNode
}) {
  // useId returns colons, which are legal in ids but break url(#...) references.
  const scope = useId().replace(/:/g, '')
  const titleId = `${scope}-title`
  const descId = `${scope}-desc`
  const ids: TrustDiagramIds = { arrow: `${scope}-arrow` }

  return (
    <TrustDiagramContext.Provider value={ids}>
      <svg
        viewBox={viewBox}
        className={cn('h-auto w-full text-stone-800 dark:text-stone-100', className)}
        role="img"
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
      >
        <title id={titleId}>{title}</title>
        {description ? <desc id={descId}>{description}</desc> : null}
        <defs>
          <marker
            id={ids.arrow}
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" className={TRUST_DIAGRAM_ARROW} />
          </marker>
        </defs>
        {children}
      </svg>
    </TrustDiagramContext.Provider>
  )
}
