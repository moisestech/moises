import Link from 'next/link'
import { AEP_REPO, AGENTIC_OPS_REPO } from '@/content/opportunities/fdeEvidenceRegistry'
import { opp } from '@/components/opportunities/opportunityTheme'
import { cn } from '@/lib/utils'

export function FdeFlagshipCallout({ className }: { className?: string }) {
  return (
    <aside className={cn(opp.callout, className)} aria-labelledby="fde-flagship-heading">
      <p className={opp.label}>Flagship build</p>
      <h2 id="fde-flagship-heading" className={cn(opp.h3MoMA, 'mt-2')}>
        Agentic Ops
      </h2>
      <p className={cn(opp.body, 'mt-2')}>
        Python, FastAPI, and a LangGraph StateGraph on MemorySaver. Permissioned tools, keyword retrieval, and a human pause before writes. Reference implementation — not a hosted product.
      </p>
      <p className={cn(opp.muted, 'mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4')}>
        <Link href="#runtime" className={opp.linkAccent}>
          Inspect the graph
        </Link>
        <Link href="/projects/agentic-ops" className={opp.linkAccent}>
          Case notes
        </Link>
        <a href={AGENTIC_OPS_REPO} className={opp.linkAccent} target="_blank" rel="noreferrer">
          Repository
        </a>
      </p>
      <p className={cn(opp.muted, 'mt-4 border-t border-stone-200 pt-4 dark:border-stone-700')}>
        TypeScript sibling:{' '}
        <Link href="/forward-deployed/evidence" className={opp.linkAccent}>
          Agentic Evidence Pipeline scorecard
        </Link>
        {' · '}
        <a href={AEP_REPO} className={opp.linkAccent} target="_blank" rel="noreferrer">
          AEP repository
        </a>
      </p>
    </aside>
  )
}
