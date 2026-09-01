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
  { n: '01', label: 'See' },
  { n: '02', label: 'Predict' },
  { n: '03', label: 'Build' },
  { n: '04', label: 'Break' },
  { n: '05', label: 'Explain' },
  { n: '06', label: 'Transfer' },
] as const;

export function CapabilityTransferLoop({ className }: { className?: string }) {
  return (
    <section className={cn('mt-8', className)} aria-labelledby="transfer-heading">
      <h3 id="transfer-heading" className={opp.h3MoMA}>
        Capability-transfer loop
      </h3>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>
        Teaching leaves a path, not a lecture. Mixed audiences move through making and handoff.
      </p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {TRANSFER.map((step) => (
          <li key={step.n} className={cn(opp.card, 'p-3')}>
            <p className={opp.subtle}>{step.n}</p>
            <p className={cn(opp.matrixPrimary, 'mt-1')}>{step.label}</p>
          </li>
        ))}
      </ol>
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
