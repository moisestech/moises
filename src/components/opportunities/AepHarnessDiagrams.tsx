import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';

/**
 * Code-native diagrams from the AEP README mermaid — not invented product UI.
 * Source: https://github.com/moisestech/agentic-evidence-pipeline
 */

export function AepArchitectureDiagram({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border border-stone-200 bg-[linear-gradient(160deg,#f7f3ee_0%,#efe8df_55%,#e8dfd4_100%)] dark:border-stone-700 dark:bg-[linear-gradient(160deg,#1c1917_0%,#292524_100%)]',
        className,
      )}
    >
      <svg
        viewBox="0 0 720 168"
        role="img"
        aria-label="AEP architecture: public or synthetic sources, normalize and version evidence, Postgres FTS and pgvector, typed LangGraph assessment, citation and policy gate, human review, append-only audit trail"
        className="h-auto w-full"
      >
        <title>Agentic Evidence Pipeline — architecture</title>
        {[
          { n: '01', label: 'Sources', sub: 'public / synthetic' },
          { n: '02', label: 'Normalize', sub: 'version + hash' },
          { n: '03', label: 'Retrieve', sub: 'FTS + vector' },
          { n: '04', label: 'Assess', sub: 'typed graph' },
          { n: '05', label: 'Gate', sub: 'citation + policy' },
          { n: '06', label: 'Review', sub: 'human + audit' },
        ].map((node, i) => {
          const x = 16 + i * 118;
          return (
            <g key={node.n}>
              {i < 5 ? (
                <path d={`M${x + 100} 78 H${x + 114}`} fill="none" stroke="#a8a29e" strokeWidth="1.25" />
              ) : null}
              <rect
                x={x}
                y={36}
                width="100"
                height="84"
                rx="8"
                fill="#fffbeb"
                stroke="#d6d3d1"
                className="dark:fill-stone-900"
              />
              <text x={x + 10} y={56} fontSize="9" fontFamily="ui-monospace, monospace" className="fill-stone-500">
                {node.n}
              </text>
              <text
                x={x + 10}
                y={78}
                fontSize="12"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                fontWeight="600"
                className="fill-stone-900 dark:fill-stone-100"
              >
                {node.label}
              </text>
              <text
                x={x + 10}
                y={96}
                fontSize="9"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                className="fill-stone-600 dark:fill-stone-400"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="border-t border-stone-200/80 px-3 py-2 text-[11px] text-stone-500 dark:border-stone-700 dark:text-stone-400">
        From the AEP README architecture mermaid. Collection, hashing, retrieval, citation checks, and audit
        stay deterministic. The model is used only where interpretation is required.
      </figcaption>
    </figure>
  );
}

export function ModelVsHarness({ className }: { className?: string }) {
  return (
    <section id="harness" className={cn('scroll-mt-32', className)} aria-labelledby="harness-heading">
      <h2 id="harness-heading" className={opp.h2}>
        Model vs harness
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>
        The model interprets ambiguity. The harness owns context, tools, permissions, validation, persistence,
        review, and side effects. Rebuilt from the AEP README — not an invented dashboard.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <article className={cn(opp.card, 'border-dashed p-4')}>
          <p className={opp.label}>Model</p>
          <h3 className={cn(opp.matrixPrimary, 'mt-1')}>Interprets ambiguity</h3>
          <p className={cn(opp.matrixSecondary, 'mt-1.5')}>
            Used only where judgment is required. A fake-model harness is first-class for CI. Live-model quality
            is not claimed here.
          </p>
        </article>
        <article className={cn(opp.card, 'border-solid p-4')}>
          <p className={opp.label}>Harness</p>
          <h3 className={cn(opp.matrixPrimary, 'mt-1')}>Owns the rest</h3>
          <p className={cn(opp.matrixSecondary, 'mt-1.5')}>
            Context, tools, permissions, schema validation, citation allowlist, persisted state, human review,
            and append-only audit. No autonomous third-party writes.
          </p>
        </article>
      </div>
      <AepArchitectureDiagram className="mt-6" />
    </section>
  );
}

const ROUTES = [
  {
    label: 'Allow',
    treatment: 'solid' as const,
    body: 'Read approved, versioned public or synthetic source material. Tenant- and visibility-scoped retrieval.',
  },
  {
    label: 'Ask',
    treatment: 'outline' as const,
    body: 'Pause for human review when the result is uncertain, adverse, or approval is required. Review is persisted state, not a browser modal.',
  },
  {
    label: 'Deny',
    treatment: 'dashed' as const,
    body: 'Fail closed on unsupported citations. Return insufficient evidence. No autonomous third-party writes. No invented repair prose.',
  },
] as const;

export function AllowAskDeny({ className }: { className?: string }) {
  return (
    <section className={cn('mt-8', className)} aria-labelledby="aad-heading">
      <h3 id="aad-heading" className={opp.h3MoMA}>
        Allow / Ask / Deny
      </h3>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Only routes the AEP README actually supports. Anything beyond this is labeled proposed — not shipped.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {ROUTES.map((route) => (
          <li
            key={route.label}
            className={cn(
              opp.card,
              'p-4',
              route.treatment === 'solid' && 'border-2 border-stone-400 dark:border-stone-500',
              route.treatment === 'outline' && 'border-2 border-stone-400 bg-transparent dark:border-stone-500',
              route.treatment === 'dashed' && 'border-2 border-dashed border-stone-400 dark:border-stone-500',
            )}
          >
            <p className={opp.label}>{route.label}</p>
            <p className={cn(opp.matrixSecondary, 'mt-2')}>{route.body}</p>
          </li>
        ))}
      </ul>
      <p className={cn(opp.subtle, 'mt-3')}>
        Proposed, not shipped: autonomous writes to third-party systems, live customer production, SOC 2.
      </p>
    </section>
  );
}

export function AepHarnessVisual({ className }: { className?: string }) {
  return <AepArchitectureDiagram className={cn('rounded-none border-0', className)} />;
}
