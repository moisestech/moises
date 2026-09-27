import type { Metadata } from 'next'
import Link from 'next/link'
import { FdeEvidenceScorecard } from '@/components/opportunities/FdeEvidenceScorecard'
import { opp } from '@/components/opportunities/opportunityTheme'
import { FDE_EVIDENCE } from '@/content/fde-evidence'

export const metadata: Metadata = {
  title: 'FDE evidence — Agentic Evidence Pipeline | Moises Sanabria',
  description:
    'Honest status for the Forward-Deployed flagship build. Shipped, in progress, and not yet — every shipped row links to code.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'FDE evidence — Agentic Evidence Pipeline',
    description: FDE_EVIDENCE.flagship.deployment,
    type: 'website',
    url: 'https://moises.tech/forward-deployed/evidence',
  },
}

export default function ForwardDeployedEvidencePage() {
  return (
    <main className={opp.shell}>
      <div className={`${opp.main} pt-24 md:pt-32`}>
        <p className={opp.label}>Forward-Deployed</p>
        <h1 className={`${opp.h1} mt-3`}>Evidence status</h1>
        <p className={`${opp.bodyLg} mt-4 max-w-2xl`}>
          What is shipped, what is in progress, and what is not yet measured. Empty rows stay visible. Links appear only
          when there is something to inspect.
        </p>
        <p className={`${opp.muted} mt-4`}>
          <Link href="/forward-deployed" className={opp.linkAccent}>
            Back to Forward-Deployed
          </Link>
          {' · '}
          <Link href="/forward-deployed/agentic-workflow" className={opp.linkAccent}>
            How I work
          </Link>
        </p>
        <FdeEvidenceScorecard className="mt-12" />
      </div>
    </main>
  )
}
