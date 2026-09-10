'use client'

import type { ReactNode } from 'react'
import {
  getTrustRole,
  TRUST_ROLES,
  TRUST_ROLE_DIRECTIVE,
  TRUST_ROLE_STANCE,
  type TrustRoleId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { usePresentationMode } from './TrustPresentation'
import { TRUST_ROLE_TONE, trustPresent } from './trust-tokens'

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

function tryHintShell({
  present,
  tone,
  beat,
  markHint = true,
  children,
}: {
  present: boolean
  tone?: (typeof TRUST_ROLE_TONE)[TrustRoleId]
  beat?: 'empty' | 'signal' | 'do' | 'example'
  markHint?: boolean
  children: ReactNode
}) {
  return (
    <div
      key={beat}
      data-trust-try-hint={markHint || undefined}
      data-trust-try-hint-beat={beat}
      className={cn(
        'rounded-lg border leading-snug',
        tone ? cn(tone.border, tone.wash, tone.text) : 'border-dashed border-stone-300 text-stone-600 dark:border-stone-600 dark:text-stone-400',
        present ? 'px-5 py-4' : 'px-4 py-3'
      )}
    >
      {children}
    </div>
  )
}

/** One seat-hint beat. Present pages these; self-paced stacks them with space. */
export function trustTryHintPortions({
  roleId,
  signal,
  present,
  markHint = true,
}: {
  roleId: TrustRoleId | null
  signal?: string
  present: boolean
  markHint?: boolean
}): ReactNode[] {
  const role = getTrustRole(roleId)
  if (!role || !signal) {
    return [
      tryHintShell({
        present,
        markHint,
        beat: 'empty',
        children: (
          <p className={present ? trustPresent.note : 'text-sm'}>
            Pick a seat first. The hint will match that job.
          </p>
        ),
      }),
    ]
  }

  const Icon = ROLE_ICON[role.id]
  const tone = TRUST_ROLE_TONE[role.id]
  const title = present ? 'text-xl font-semibold sm:text-2xl' : 'text-base font-semibold'
  const body = present ? cn('mt-2', trustPresent.body) : 'mt-3 text-lg leading-snug sm:text-xl'
  const eyebrow = (
    <p className={cn('flex items-center gap-1.5', title)}>
      <Icon className={cn(present ? 'h-7 w-7' : 'h-5 w-5', tone.icon)} aria-hidden />
      {role.label} hint
    </p>
  )

  return [
    tryHintShell({
      present,
      tone,
      markHint,
      beat: 'signal',
      children: (
        <>
          {eyebrow}
          <p className={cn('text-stone-800 dark:text-stone-200', body)}>{signal}</p>
        </>
      ),
    }),
    tryHintShell({
      present,
      tone,
      markHint,
      beat: 'do',
      children: (
        <>
          {eyebrow}
          <p className={cn('text-stone-800 dark:text-stone-200', body)}>{role.needToSeePrompt}</p>
        </>
      ),
    }),
    tryHintShell({
      present,
      tone,
      markHint,
      beat: 'example',
      children: (
        <>
          {eyebrow}
          <p className={cn('text-stone-700 dark:text-stone-300', body)}>{role.exampleNeedToSee}</p>
        </>
      ),
    }),
  ]
}

/** Seat-colored prompt above Try it. Empty until a seat is picked. */
export function TrustTryHint({
  roleId,
  signal,
}: {
  roleId: TrustRoleId | null
  signal?: string
}) {
  const { present } = usePresentationMode()
  const beats = trustTryHintPortions({ roleId, signal, present, markHint: false })
  return (
    <div data-trust-try-hint className={present ? 'space-y-6' : 'space-y-5'}>
      {beats}
    </div>
  )
}
