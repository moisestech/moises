'use client'

import { useId } from 'react'
import type { TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_ROLE_PATTERN, type TrustRolePatternId } from './trust-tokens'

/**
 * Seat identity must survive a color-blind reader and a grayscale print, so each
 * role carries a texture as well as a hue. Decorative only: it draws in
 * `currentColor` at low opacity behind text that keeps its own contrast.
 */
function PatternGeometry({ id, kind }: { id: string; kind: TrustRolePatternId }) {
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1 } as const

  return (
    <pattern id={id} width={12} height={12} patternUnits="userSpaceOnUse">
      {kind === 'circles' ? <circle cx={6} cy={6} r={2.5} {...stroke} /> : null}
      {kind === 'grid' ? (
        <>
          <path d="M0 6h12" {...stroke} />
          <path d="M6 0v12" {...stroke} />
        </>
      ) : null}
      {kind === 'curves' ? <path d="M0 9C3 9 3 3 6 3s3 6 6 6" {...stroke} /> : null}
      {kind === 'diamonds' ? <path d="M6 1.5 10.5 6 6 10.5 1.5 6Z" {...stroke} /> : null}
    </pattern>
  )
}

export function TrustRolePattern({
  role,
  className,
}: {
  role: TrustRoleId
  className?: string
}) {
  const id = `trust-role-pattern-${useId().replace(/[:]/g, '')}`

  return (
    <svg
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]', className)}
    >
      <defs>
        <PatternGeometry id={id} kind={TRUST_ROLE_PATTERN[role]} />
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
