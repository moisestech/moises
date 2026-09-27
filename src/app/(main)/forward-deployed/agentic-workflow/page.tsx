import type { Metadata } from 'next'
import Link from 'next/link'
import { AEP_BLOB, AEP_REPO } from '@/content/opportunities/fdeEvidenceRegistry'
import { opp } from '@/components/opportunities/opportunityTheme'
import { loadAepWorkflowLog } from '@/lib/load-aep-workflow-log'
import { workflowLogNumbers } from '@/lib/aep-workflow-log'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'How I work with coding agents | Moises Sanabria',
  description:
    'Cursor with Claude models implements. ChatGPT reviews each ticket. A logged loop with tests, evals, and an approval gate.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'How I work with coding agents',
    description: 'A practiced loop: ticket, plan, implement, review, merge, log.',
    type: 'website',
    url: 'https://moises.tech/forward-deployed/agentic-workflow',
  },
}

const LOOP = [
  'Ticket with testable acceptance criteria',
  'Plan mode',
  'Approve the plan',
  'Implement',
  'Tests and evals',
  'Independent review',
  'Merge',
  'Log the ticket',
] as const

export default async function AgenticWorkflowPage() {
  const log = await loadAepWorkflowLog()
  const numbers = workflowLogNumbers(log.entries)
  const latest = log.entries.slice(0, 5)

  return (
    <main className={opp.shell}>
      <div className={`${opp.main} pt-24 md:pt-32`}>
        <p className={opp.label}>Forward-Deployed</p>
        <h1 className={`${opp.h1} mt-3`}>How I work with coding agents</h1>
        <p className={`${opp.bodyLg} mt-4 max-w-2xl`}>
          Cursor with Claude models implements. ChatGPT reviews each ticket. I keep secrets, external writes, and
          client-facing copy off the agent until I approve them.
        </p>
        <p className={`${opp.muted} mt-4`}>
          <Link href="/forward-deployed" className={opp.linkAccent}>
            Back to Forward-Deployed
          </Link>
          {' · '}
          <Link href="/forward-deployed/evidence" className={opp.linkAccent}>
            Evidence status
          </Link>
        </p>

        <section className={opp.section} aria-labelledby="loop-heading">
          <h2 id="loop-heading" className={opp.h2}>
            My loop
          </h2>
          <ol className="mt-6 max-w-xl space-y-3">
            {LOOP.map((step, index) => (
              <li key={step} className="grid grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-3">
                <span className={opp.subtle}>{String(index + 1).padStart(2, '0')}</span>
                <span className={opp.body}>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={opp.section} aria-labelledby="context-heading">
          <h2 id="context-heading" className={opp.h2}>
            Context I give agents
          </h2>
          <p className={cn(opp.body, 'mt-4 max-w-2xl')}>
            Rules files hold hard constraints: no secrets, no invented metrics, no client PII, no git history rewrites.
            Ticket acceptance criteria stay in the ticket. Course and hiring copy stay in my voice.
          </p>
          <p className={cn(opp.muted, 'mt-3')}>
            <a href={`${AEP_BLOB}/docs/AGENT-RULES.md`} className={opp.linkAccent} target="_blank" rel="noreferrer">
              AEP agent rules
            </a>
            {' · '}
            <a href={`${AEP_BLOB}/README.md`} className={opp.linkAccent} target="_blank" rel="noreferrer">
              README constraints
            </a>
          </p>
        </section>

        <section className={opp.section} aria-labelledby="verify-heading">
          <h2 id="verify-heading" className={opp.h2}>
            How I verify
          </h2>
          <ul className={cn(opp.body, 'mt-4 max-w-2xl list-disc space-y-2 pl-5')}>
            <li>
              <a href={`${AEP_REPO}/actions`} className={opp.linkAccent} target="_blank" rel="noreferrer">
                CI verify
              </a>
            </li>
            <li>
              <a
                href={`${AEP_BLOB}/reports/offline/2026-08-12-fake-provider.json`}
                className={opp.linkAccent}
                target="_blank"
                rel="noreferrer"
              >
                Offline eval report
              </a>
            </li>
            <li>
              <a href={`${AEP_BLOB}/packages/agent/src/run.ts`} className={opp.linkAccent} target="_blank" rel="noreferrer">
                Approval-gate code
              </a>
            </li>
          </ul>
        </section>

        <section className={opp.section} aria-labelledby="never-heading">
          <h2 id="never-heading" className={opp.h2}>
            What agents never do without me
          </h2>
          <p className={cn(opp.body, 'mt-4 max-w-2xl')}>
            Secrets, external writes, git history rewrites, and anything client-facing. Rejection and pre-approval mean
            zero external writes.
          </p>
        </section>

        <section className={opp.section} aria-labelledby="log-heading">
          <h2 id="log-heading" className={opp.h2}>
            Where agents failed
          </h2>
          {latest.length === 0 ? (
            <p className={cn(opp.body, 'mt-4')}>First entries land with TICKET-00.</p>
          ) : (
            <ol className="mt-6 space-y-6">
              {latest.map((entry) => (
                <li key={`${entry.ticket}-${entry.date}`} className={opp.callout}>
                  <p className={opp.label}>
                    {entry.ticket} · {entry.date}
                  </p>
                  <p className={cn(opp.h3, 'mt-2')}>{entry.title}</p>
                  <p className={cn(opp.body, 'mt-2')}>
                    <span className="font-medium">What went wrong. </span>
                    {entry.whatWentWrong}
                  </p>
                  <p className={cn(opp.muted, 'mt-1')}>Changed: {entry.whatChanged}</p>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className={opp.section} aria-labelledby="numbers-heading">
          <h2 id="numbers-heading" className={opp.h2}>
            Numbers
          </h2>
          {numbers.firstPassRate == null ? (
            <p className={cn(opp.body, 'mt-4')}>Not yet measured.</p>
          ) : (
            <p className={cn(opp.body, 'mt-4')}>
              {numbers.ticketsLogged} tickets logged. First-pass acceptance{' '}
              {Math.round(numbers.firstPassRate * 100)}%.
            </p>
          )}
          <p className={cn(opp.subtle, 'mt-3')}>
            Source: {log.source === 'remote' ? 'AEP main' : 'last committed snapshot'}
            {log.skipped ? ` · ${log.skipped} malformed entries skipped` : ''}.
          </p>
        </section>
      </div>
    </main>
  )
}
