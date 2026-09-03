'use client'

import { getTrustRole } from '@/content/workshops/trust-is-not-a-vibe'
import type { TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_ROLE_TONE } from './trust-tokens'

export { ROLE_ICON, TrustSeatBar, TrustSeatSection, TrustSeatStudio } from './TrustSeatSection'

export function RoleMargin({ roleId }: { roleId: TrustRoleId | null }) {
  const role = getTrustRole(roleId)
  if (!role) {
    return (
      <p className="rounded-lg border border-dashed border-amber-400/70 bg-amber-50/60 px-3 py-2 text-sm text-amber-950 dark:border-amber-500/50 dark:bg-amber-950/30 dark:text-amber-100">
        No seat yet. Use Your seat to pick Product, Engineering, Design, or Strategy.
      </p>
    )
  }
  const tone = TRUST_ROLE_TONE[role.id]
  return (
    <aside className={cn('rounded-lg border px-3 py-2 text-sm', tone.border, tone.wash, tone.text)}>
      <p className="font-semibold">{role.label} lens</p>
      <p className="mt-1 opacity-80">{role.onThisCase}</p>
    </aside>
  )
}
