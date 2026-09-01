'use client';

import { useEffect, useState } from 'react';
import { loreMachinePipelineCondensed } from '@/content/evidence/loreMachineSystemPipeline';
import { FDE_PARTNER_LOGOS } from '@/content/opportunities/fdePartnerLogos';
import { PartnerMark } from '@/components/opportunities/PartnerMark';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

const LORE_FLOW = [
  { n: '01', label: 'Narrative input' },
  { n: '02', label: 'Structured scenes' },
  { n: '03', label: 'Generative media' },
  { n: '04', label: 'Creator review' },
  { n: '05', label: 'Editable output' },
] as const;

export function LoreCreatorFlow({ className }: { className?: string }) {
  return (
    <section className={cn('mt-8', className)} aria-labelledby="lore-flow-heading">
      <div className="flex items-center gap-3">
        <PartnerMark src={FDE_PARTNER_LOGOS.lore.src} alt={FDE_PARTNER_LOGOS.lore.alt} size="sm" />
        <h3 id="lore-flow-heading" className={opp.h3MoMA}>
          Lore Machine — creator flow
        </h3>
      </div>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Real product path, not a generated UI.
      </p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-5">
        {LORE_FLOW.map((step) => (
          <li key={step.n} className={cn(opp.card, 'p-3')}>
            <p className={opp.subtle}>{step.n}</p>
            <p className={cn(opp.matrixPrimary, 'mt-1')}>{step.label}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function LoreOwnershipChips({ className }: { className?: string }) {
  const legend = loreMachinePipelineCondensed.ownershipLegend;
  const stages = loreMachinePipelineCondensed.stages;
  return (
    <section className={cn('mt-6', className)} aria-labelledby="lore-own-heading">
      <div className="flex items-center gap-3">
        <PartnerMark src={FDE_PARTNER_LOGOS.lore.src} alt={FDE_PARTNER_LOGOS.lore.alt} size="sm" />
        <h3 id="lore-own-heading" className={opp.h3MoMA}>
          Lore Machine — ownership
        </h3>
      </div>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        From the published Lore pipeline. Did-not-own layers are omitted rather than invented.
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {legend.map((item) => (
          <li key={item.id} className={opp.pillTag} title={item.meaning}>
            {item.id}
          </li>
        ))}
      </ul>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {stages.slice(0, 6).map((stage) => (
          <li key={stage.id} className={cn(opp.card, 'p-3')}>
            <p className={opp.subtle}>{stage.step}</p>
            <p className={cn(opp.matrixPrimary, 'mt-1')}>{stage.title}</p>
            <p className={cn(opp.subtle, 'mt-2')}>{(stage.ownership ?? []).join(' · ') || 'Pending'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function N8nAuthorityBoundary({ className }: { className?: string }) {
  return (
    <section className={cn('mt-8', className)} aria-labelledby="n8n-auth-heading">
      <h3 id="n8n-auth-heading" className={opp.h3MoMA}>
        n8n — automation vs human authority
      </h3>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Classification and organization are not outbound send. We do not claim the agent writes external email
        on its own. A redacted operational screenshot is still pending.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <article className={cn(opp.card, 'border-solid p-4')}>
          <p className={opp.label}>Automated</p>
          <p className={cn(opp.matrixPrimary, 'mt-1')}>Read, classify, label, route</p>
          <p className={cn(opp.matrixSecondary, 'mt-1.5')}>
            Incoming mail can be labeled and written to a structured table for triage.
          </p>
        </article>
        <article className={cn(opp.card, 'border-2 border-dashed p-4')}>
          <p className={opp.label}>Human-approved</p>
          <p className={cn(opp.matrixPrimary, 'mt-1')}>Outbound communication</p>
          <p className={cn(opp.matrixSecondary, 'mt-1.5')}>
            External send stays a person. Teaching and ops versions are labeled separately.
          </p>
        </article>
      </div>
    </section>
  );
}

const TRANSFER = [
  { n: '01', label: 'See', body: 'Watch the stuck point before choosing a tool.' },
  { n: '02', label: 'Predict', body: 'Name what the path should change for the people in the room.' },
  { n: '03', label: 'Build', body: 'Make one reviewable slice with a manual fallback.' },
  { n: '04', label: 'Break', body: 'Find where the system fails closed or needs a person.' },
  { n: '05', label: 'Explain', body: 'Say the limitation out loud so the team can operate it.' },
  { n: '06', label: 'Transfer', body: 'Leave a runbook and a teaching artifact they can run without me.' },
] as const;

export function CapabilityTransferLoop({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const step = TRANSFER[active];

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TRANSFER.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <section
      className={cn('mt-8', className)}
      aria-labelledby="transfer-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h3 id="transfer-heading" className={opp.h3MoMA}>
        Capability-transfer loop
      </h3>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Teaching leaves a path, not a lecture. Mixed audiences move through making and handoff.
      </p>
      <div className="mt-4 rounded-xl border border-stone-300 bg-stone-50 dark:border-stone-600 dark:bg-stone-950">
        <div className="flex items-center justify-between gap-2 border-b border-dashed border-cyan-700/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-800 dark:border-cyan-400/40 dark:text-cyan-300">
          <span>Transfer // 01–06</span>
          <span className="hidden sm:inline">See → Transfer</span>
        </div>
        <ol className="relative grid gap-2 p-3 sm:grid-cols-3 lg:grid-cols-6">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-[1.65rem] hidden h-px bg-[repeating-linear-gradient(90deg,#0e7490_0,#0e7490_4px,transparent_4px,transparent_10px)] lg:block dark:bg-[repeating-linear-gradient(90deg,#22d3ee_0,#22d3ee_4px,transparent_4px,transparent_10px)]"
          />
          {TRANSFER.map((item, index) => {
            const selected = index === active;
            return (
              <li key={item.n}>
                <button
                  type="button"
                  className={cn(
                    'relative flex min-h-11 w-full flex-col rounded-lg border px-3 py-3 text-left',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500',
                    !reduceMotion && 'transition-all duration-300',
                    selected
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-sm dark:border-cyan-400 dark:bg-cyan-950/60 dark:text-cyan-100'
                      : 'border-stone-200 bg-white text-stone-800 hover:-translate-y-0.5 hover:border-cyan-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100',
                    !selected && active !== index && paused && 'opacity-50',
                  )}
                  onClick={() => {
                    setPaused(true);
                    setActive(index);
                  }}
                  onFocus={() => {
                    setPaused(true);
                    setActive(index);
                  }}
                >
                  <span className="font-mono text-[10px] tracking-widest opacity-70">{item.n}</span>
                  <span className="mt-1 text-sm font-semibold">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <p className="border-t border-dashed border-cyan-700/40 px-3 py-3 font-mono text-sm text-stone-700 dark:border-cyan-400/40 dark:text-stone-200">
          <span className="text-[10px] uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-400">
            {step.n} {step.label}
          </span>
          <span className="mt-1 block font-sans">{step.body}</span>
        </p>
      </div>
    </section>
  );
}

const TIMELINE = [
  { t: '0–10', title: 'Intake', body: 'Name the stuck point before choosing a tool.' },
  { t: '10–25', title: 'Shared demo', body: 'One path the room can see together.' },
  { t: '25–70', title: 'Make + help queue', body: 'Differentiated paths; circulate, do not lecture.' },
  { t: '70–85', title: 'Review', body: 'What changed, what remains uncertain.' },
  { t: '85–90', title: 'Exit ticket', body: 'Who can operate it without the facilitator.' },
] as const;

export function FacilitationTimeline({ className }: { className?: string }) {
  return (
    <section className={cn('mt-8', className)} aria-labelledby="timeline-heading">
      <h3 id="timeline-heading" className={opp.h3MoMA}>
        Proposed 90-minute facilitation
      </h3>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Condensed from the Saturday Lab facilitator guide. Proposed first-session shape — not a published
        minute-by-minute attendance record.
      </p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {TIMELINE.map((step) => (
          <li key={step.t} className={cn(opp.card, 'border-dashed p-3')}>
            <p className={opp.subtle}>{step.t} min</p>
            <p className={cn(opp.matrixPrimary, 'mt-1')}>{step.title}</p>
            <p className={cn(opp.matrixSecondary, 'mt-1')}>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
