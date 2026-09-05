'use client'

import {
  getTrustRole,
  TRUST_ROLES,
  TRUST_ROLE_DIRECTIVE,
  TRUST_ROLE_STANCE,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE } from './trust-tokens'

function SeatLine({
  roleId,
  dominant,
  showCase,
}: {
  roleId: TrustRoleId
  dominant: boolean
  showCase: boolean
}) {
  const role = getTrustRole(roleId)
  if (!role) return null
  const tone = TRUST_ROLE_TONE[roleId]
  const Icon = ROLE_ICON[roleId]

  return (
    <div className={cn('border-l-2 pl-3', dominant ? tone.border : 'border-stone-200 dark:border-stone-700')}>
      <p
        className={cn(
          'flex items-center gap-1.5 font-semibold',
          dominant ? cn('text-sm', tone.text) : 'text-xs text-stone-600 dark:text-stone-400'
        )}
      >
        <Icon
          className={cn('shrink-0', dominant ? cn('h-4 w-4', tone.icon) : 'h-3.5 w-3.5')}
          aria-hidden
        />
        {role.label} · {TRUST_ROLE_STANCE[roleId]}
      </p>
      <p
        className={cn(
          'mt-1 leading-snug',
          dominant ? 'text-sm text-stone-800 dark:text-stone-200' : 'text-xs text-stone-500 dark:text-stone-400'
        )}
      >
        {TRUST_ROLE_DIRECTIVE[roleId]}
      </p>
      {dominant && showCase ? (
        <p className="mt-1 text-sm leading-snug text-stone-700 dark:text-stone-300">{role.onThisCase}</p>
      ) : null}
    </div>
  )
}

/**
 * The persistent seat callout. Role color carries the icon, label, stance, and
 * left border only; the case sentence stays neutral body copy.
 *
 * With `allSeats` the four directives sit together for comparison, which is how
 * a room reads it. A chosen seat stays dominant and the rest recede rather than
 * disappearing, because ownership is shared.
 */
export function TrustSeatStance({
  roleId,
  allSeats,
}: {
  roleId: TrustRoleId | null
  allSeats?: boolean
}) {
  if (allSeats) {
    return (
      <div className="space-y-2">
        {TRUST_ROLES.map((role) => (
          <SeatLine
            key={role.id}
            roleId={role.id}
            dominant={roleId ? role.id === roleId : true}
            showCase={Boolean(roleId) && role.id === roleId}
          />
        ))}
      </div>
    )
  }

  if (!roleId) {
    return <p className="text-sm text-stone-600 dark:text-stone-400">No seat yet.</p>
  }

  return <SeatLine roleId={roleId} dominant showCase />
}

/** Orientation-strip job line for packet chapters after Looks Right. */
export function TrustPacketJob({
  roleId,
  signal,
  fallback,
}: {
  roleId: TrustRoleId | null
  signal?: string
  fallback: string
}) {
  const role = getTrustRole(roleId)
  if (!role) return <p>{fallback}</p>
  return (
    <p>
      <span className={cn('font-semibold', TRUST_ROLE_TONE[role.id].text)}>{role.label}.</span>{' '}
      {signal ?? role.learnerJob}
    </p>
  )
}

/** Seat-colored prompt above Try it. Empty until a seat is picked. */
export function TrustTryHint({
  roleId,
  signal,
}: {
  roleId: TrustRoleId | null
  signal?: string
}) {
  const role = getTrustRole(roleId)
  if (!role || !signal) {
    return (
      <p
        data-trust-try-hint
        className="mb-3 rounded-lg border border-dashed border-stone-300 px-3 py-2 text-sm text-stone-600 dark:border-stone-600 dark:text-stone-400"
      >
        Pick a seat first. The hint will match that job.
      </p>
    )
  }

  const Icon = ROLE_ICON[role.id]
  const tone = TRUST_ROLE_TONE[role.id]
  return (
    <p
      data-trust-try-hint
      className={cn('mb-3 rounded-lg border px-3 py-2 text-sm leading-snug', tone.border, tone.wash, tone.text)}
    >
      <span className="flex items-center gap-1.5 font-semibold">
        <Icon className={cn('h-4 w-4', tone.icon)} aria-hidden />
        {role.label} hint
      </span>
      <span className="mt-1 block text-stone-800 dark:text-stone-200">{signal}</span>
    </p>
  )
}
