'use client';

import Link from 'next/link';
import { opp } from '@/components/opportunities/opportunityTheme';
import { SystemArchitectureFlow } from '@/components/opportunities/SystemArchitectureFlow';
import { CodeInspectSection } from '@/components/opportunities/CodeInspectSection';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { RECRUITING_FDE_SCROLL_MT } from '@/config/recruiting-layout';
import {
  ANATOMY_STATUS_LABEL,
  FDE_ANATOMY_LAYERS,
  FDE_AEP_INSPECT,
  FDE_FRAMEWORK_HONESTY,
  FDE_HARDEN_NEXT,
  FDE_HARDWARE,
  FDE_OPS_INSPECT,
  FDE_RUNTIME_ARCHITECTURE,
  FDE_TECH_MATRIX,
  FDE_TRUST_POINTS,
  type AnatomyStatus,
} from '@/content/flagships/fdeEngineeringEvidence';
import { AGENTIC_OPS_REPO } from '@/content/opportunities/fdeEvidenceRegistry';
import { cn } from '@/lib/utils';

const STATUS_CLASS: Record<AnatomyStatus, string> = {
  shipped: 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-100',
  reference: 'border-cyan-400 bg-cyan-50 text-cyan-950 dark:border-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-100',
  prototype: 'border-amber-400 bg-amber-50 text-amber-950 dark:border-amber-600 dark:bg-amber-950/40 dark:text-amber-100',
  next: 'border-stone-300 bg-stone-50 text-stone-700 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-300',
  not_claimed: 'border-dashed border-stone-400 bg-transparent text-stone-600 dark:border-stone-500 dark:text-stone-400',
};

function StatusPill({ status }: { status: AnatomyStatus }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
        STATUS_CLASS[status],
      )}
    >
      {ANATOMY_STATUS_LABEL[status]}
    </span>
  );
}

export function FdeAepInspectSection() {
  return <CodeInspectSection data={FDE_AEP_INSPECT} framed sectionId="aep-inspect" />;
}

export function FdeAgenticOpsSection() {
  return (
    <div className="space-y-8">
      <p className={cn(opp.body, 'max-w-3xl')}>
        Reference implementation. LangGraph is the orchestrator because approval is a state in the graph,
        not a sentence in a prompt. The checkpointer is MemorySaver: a restart does not resume the run. The tool server is{' '}
        <strong className="font-semibold text-stone-900 dark:text-stone-100">
          MCP-shaped stdio modeled around tool discovery and invocation
        </strong>
        , not an official MCP SDK deployment.
      </p>
      <p className={opp.muted}>
        <a href={AGENTIC_OPS_REPO} className={opp.linkAccent} target="_blank" rel="noreferrer">
          github.com/moisestech/agentic-ops
        </a>
        {' · '}
        <Link href="/projects/agentic-ops" className={opp.linkAccent}>
          Case notes
        </Link>
      </p>
      <SystemArchitectureFlow
        data={FDE_RUNTIME_ARCHITECTURE}
        sectionId="runtime-graph"
        accent="cyan"
        className="!mt-0 !border-0 !pt-0"
      />
      <CodeInspectSection data={FDE_OPS_INSPECT} framed sectionId="runtime-inspect" />
    </div>
  );
}

export function FdeAnatomySection() {
  const accent = getOpportunityCompactAccent('anatomy');
  return (
    <section id="anatomy" className={RECRUITING_FDE_SCROLL_MT} aria-labelledby="anatomy-heading">
      <h2 id="anatomy-heading" className={opp.h2}>
        System anatomy
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>
        How I think about an applied agentic system. Status labels are the point. Unfinished layers stay unfinished.
      </p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {FDE_ANATOMY_LAYERS.map((layer) => (
          <li key={layer.id} className={cn(opp.card, accent.cardHover, 'p-4')}>
            <div className="flex items-start justify-between gap-3">
              <p className={opp.label}>
                {layer.n} · {layer.title}
              </p>
              <StatusPill status={layer.status} />
            </div>
            <p className={cn(opp.body, 'mt-2')}>{layer.body}</p>
            {layer.source ? <p className={cn(opp.subtle, 'mt-2')}>{layer.source}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FdeTrustSection() {
  const accent = getOpportunityCompactAccent('reliability');
  return (
    <section id="reliability" className={RECRUITING_FDE_SCROLL_MT} aria-labelledby="reliability-heading">
      <h2 id="reliability-heading" className={opp.h2}>
        What I mean by a trustworthy agent
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>
        Least agency necessary. Some work should stay SQL, forms, scheduled jobs, or ordinary APIs.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {FDE_TRUST_POINTS.map((point) => (
          <li key={point.id} className={cn(opp.card, accent.cardHover, 'p-4')}>
            <h3 className={opp.h3MoMA}>{point.title}</h3>
            <p className={cn(opp.body, 'mt-2')}>{point.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FdeTechMatrixSection() {
  return (
    <section id="stack" className={RECRUITING_FDE_SCROLL_MT} aria-labelledby="stack-heading">
      <h2 id="stack-heading" className={opp.h2}>
        Technology evidence
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>
        Terms a technical recruiter can search. Each row is sourced. Hybrid retrieval is not claimed for Agentic Ops.
      </p>
      <div className="mt-6 space-y-6">
        {FDE_TECH_MATRIX.map((row) => (
          <div key={row.id}>
            <h3 className={opp.h3MoMA}>{row.category}</h3>
            <ul className={cn(opp.tableWrap, 'mt-3 divide-y divide-stone-100 dark:divide-stone-800')}>
              {row.items.map((item) => (
                <li key={item.term} className="flex flex-wrap items-start justify-between gap-2 px-4 py-3">
                  <div className="min-w-0">
                    <p className={opp.matrixPrimary}>{item.term}</p>
                    <p className={opp.matrixSecondary}>{item.note}</p>
                  </div>
                  <StatusPill status={item.status} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FdeFrameworkHonestySection() {
  const { intro, groups } = FDE_FRAMEWORK_HONESTY;
  return (
    <section id="frameworks" className={cn(RECRUITING_FDE_SCROLL_MT, 'mt-10')} aria-labelledby="frameworks-heading">
      <h2 id="frameworks-heading" className={opp.h2}>
        Framework experience
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>{intro}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.id}
            className={cn(
              opp.card,
              'p-5',
              group.id === 'not-claimed' && 'border-stone-200/80 bg-stone-50/80 dark:border-stone-700/80 dark:bg-stone-900/60',
            )}
          >
            <h3 className={opp.h3MoMA}>{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className={cn(opp.body, 'flex gap-2')}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FdeHardwareSection() {
  const accent = getOpportunityCompactAccent('hardware');
  return (
    <section id="hardware" className={RECRUITING_FDE_SCROLL_MT} aria-labelledby="hardware-heading">
      <h2 id="hardware-heading" className={opp.h2}>
        {FDE_HARDWARE.title}
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>{FDE_HARDWARE.intro}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {FDE_HARDWARE.items.map((item) => (
          <li key={item.id} className={cn(opp.card, accent.cardHover, 'p-4')}>
            <div className="flex items-start justify-between gap-3">
              <h3 className={opp.h3MoMA}>{item.title}</h3>
              <StatusPill status={item.status} />
            </div>
            <p className={cn(opp.body, 'mt-2')}>{item.body}</p>
            {item.href && item.label ? (
              <p className="mt-3">
                <Link href={item.href} className={opp.linkAccent}>
                  {item.label}
                </Link>
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FdeHardenNextSection() {
  const accent = getOpportunityCompactAccent('harden');
  return (
    <section id="harden" className={RECRUITING_FDE_SCROLL_MT} aria-labelledby="harden-heading">
      <h2 id="harden-heading" className={opp.h2}>
        What I would harden next
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>
        Architectural maturity, not a list of missing skills. The highest-leverage next proof is an official MCP
        server on the same permissioned tool layer.
      </p>
      <ul className="mt-6 space-y-3">
        {FDE_HARDEN_NEXT.map((item) => (
          <li key={item.id} className={cn(opp.card, accent.cardHover, 'p-4')}>
            <h3 className={opp.h3MoMA}>{item.title}</h3>
            <p className={cn(opp.body, 'mt-2')}>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
