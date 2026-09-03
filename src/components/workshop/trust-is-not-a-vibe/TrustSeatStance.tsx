'use client'

import { getTrustRole, TRUST_ROLE_STANCE, type TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { ROLE_ICON } from './TrustSeatSection'
import { TRUST_ROLE_TONE } from './trust-tokens'

/**
 * The persistent seat callout. Role color carries the icon, label, stance, and
 * left border only; the case sentence stays neutral body copy.
 */
export function TrustSeatStance({ roleId }: { roleId: TrustRoleId | null }) {
  const role = getTrustRole(roleId)
  if (!role) {
    return <p className="text-sm text-stone-600 dark:text-stone-400">No seat yet.</p>
  }
  const tone = TRUST_ROLE_TONE[role.id]
  const Icon = ROLE_ICON[role.id]
  return (
    <div className={cn('border-l-2 pl-3', tone.border)}>
      <p className={cn('flex items-center gap-1.5 text-sm font-semibold', tone.text)}>
        <Icon className={cn('h-4 w-4 shrink-0', tone.icon)} aria-hidden />
        {role.label} · {TRUST_ROLE_STANCE[role.id]}
      </p>
      <p className="mt-1 text-sm leading-snug text-stone-700 dark:text-stone-300">{role.onThisCase}</p>
    </div>
  )
}
