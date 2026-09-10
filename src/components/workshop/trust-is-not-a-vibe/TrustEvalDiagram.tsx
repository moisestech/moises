'use client'

import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import {
  TRUST_EVAL_DIAGRAM_SIZE,
  TRUST_ROLES,
  getTrustEvalDiagram,
  type TrustEvalDiagramId,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram/TrustFigure'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_SCROLL_MT } from './trust-tokens'

/**
 * Exact role colors for ownership tags. Verdict colors stay on Allow / Ask /
 * Deny and must not be reused here. System stages on the raster stay neutral.
 */
export const TRUST_EVAL_OWNERSHIP_COLOR: Record<TrustRoleId, string> = {
  pm: '#1D4ED8',
  engineering: '#0E7490',
  design: '#6D28D9',
  strategy: '#A21CAF',
}

export type TrustEvalOwnerTag = {
  role: TrustRoleId
  owns: string
}

/**
 * Landscape teaching diagram. Renders the registry `src`. Course language
 * lives in nearby HTML and the caption, not painted on the image.
 */
export function TrustEvalDiagram({
  id,
  owners,
  frame,
  className,
}: {
  id: TrustEvalDiagramId
  owners?: readonly TrustEvalOwnerTag[]
  /** Extra HTML above the figure — ownership, a beat label. */
  frame?: ReactNode
  className?: string
}) {
  const item = getTrustEvalDiagram(id)

  return (
    <div
      data-trust-eval-diagram={item.id}
      data-trust-eval-use={item.use}
      data-trust-present-figure
      className={cn('w-full', className)}
    >
      {frame}
      {owners && owners.length > 0 ? <TrustEvalOwnershipTags tags={owners} /> : null}
      <TrustFigure caption={item.caption}>
        <Image
          src={item.src}
          alt={item.alt}
          width={TRUST_EVAL_DIAGRAM_SIZE.width}
          height={TRUST_EVAL_DIAGRAM_SIZE.height}
          sizes="(max-width: 390px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1672px"
          className="h-auto w-full rounded-lg bg-stone-50 object-contain dark:bg-stone-950"
          unoptimized
        />
      </TrustFigure>
    </div>
  )
}

export function TrustEvalOwnershipTags({
  tags,
  className,
}: {
  tags: readonly TrustEvalOwnerTag[]
  className?: string
}) {
  return (
    <ul
      data-trust-eval-ownership
      className={cn('mb-3 flex flex-wrap gap-2', className)}
    >
      {tags.map((tag) => {
        const role = TRUST_ROLES.find((entry) => entry.id === tag.role)
        const Icon = ROLE_ICON[tag.role]
        const color = TRUST_EVAL_OWNERSHIP_COLOR[tag.role]
        return (
          <li
            key={`${tag.role}-${tag.owns}`}
            className="inline-flex items-center gap-1.5 rounded-full border bg-white px-2.5 py-1 text-xs font-medium dark:bg-stone-900"
            style={{ borderColor: color, color }}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>{role?.label ?? tag.role}</span>
            <span className="font-normal text-stone-600 dark:text-stone-400">{tag.owns}</span>
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Supporting / another-example beat. Stays closed in Present. The diagram is
 * not a default portion until the learner opens it.
 */
export function TrustEvalSupporting({
  id,
  summary = 'Another example',
  children,
  className,
}: {
  id: TrustEvalDiagramId
  summary?: string
  children: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <details
      data-trust-eval-supporting={id}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      className={cn(
        'rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700',
        TRUST_SCROLL_MT,
        className
      )}
    >
      <summary className="cursor-pointer text-sm font-semibold text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:text-stone-100 dark:focus-visible:ring-offset-stone-950">
        {summary}
      </summary>
      {open ? <div className="mt-3">{children}</div> : null}
    </details>
  )
}
