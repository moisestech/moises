import Link from 'next/link'
import { FDE_EVIDENCE } from '@/content/fde-evidence'
import { opp } from '@/components/opportunities/opportunityTheme'
import { cn } from '@/lib/utils'

export function FdeFlagshipCallout({ className }: { className?: string }) {
  return (
    <aside className={cn(opp.callout, className)} aria-labelledby="fde-flagship-heading">
      <p className={opp.label}>Flagship build</p>
      <h2 id="fde-flagship-heading" className={cn(opp.h3MoMA, 'mt-2')}>
        {FDE_EVIDENCE.flagship.name}
      </h2>
      <p className={cn(opp.body, 'mt-2')}>{FDE_EVIDENCE.flagship.deployment}</p>
      <p className={cn(opp.muted, 'mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4')}>
        <Link href="/forward-deployed/evidence" className={opp.linkAccent}>
          Evidence status
        </Link>
        <Link href="/forward-deployed/agentic-workflow" className={opp.linkAccent}>
          How I work with coding agents
        </Link>
        <a href={FDE_EVIDENCE.flagship.repo} className={opp.linkAccent} target="_blank" rel="noreferrer">
          Repository
        </a>
      </p>
    </aside>
  )
}
