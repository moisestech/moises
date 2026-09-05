'use client'

import { TRUST_CASE_A, TRUST_CENTRAL_QUESTION } from '@/content/workshops/trust-is-not-a-vibe'
import type { TrustVerdict } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustSpecimen } from './TrustSpecimen'
import { TRUST_VERDICT_LABEL } from './trust-tokens'

export function TrustCaseContext({
  vote,
  className,
}: {
  vote?: TrustVerdict | null
  className?: string
}) {
  return (
    <aside className={cn('space-y-2', className)}>
      <TrustSpecimen caseData={TRUST_CASE_A} />
      <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{TRUST_CENTRAL_QUESTION}</p>
      {vote ? (
        <p className="text-xs uppercase tracking-wide text-stone-500">Saved vote · {TRUST_VERDICT_LABEL[vote]}</p>
      ) : null}
    </aside>
  )
}
