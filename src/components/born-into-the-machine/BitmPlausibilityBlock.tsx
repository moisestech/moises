'use client';

import { useState } from 'react';
import type { BitmPlausibilityAudit } from '@/content/born-into-the-machine/bitm-types';

const statusLabels: Record<BitmPlausibilityAudit['status'], string> = {
  documented: 'DOCUMENTED',
  partial: 'PARTIAL',
  needed: 'NEEDED',
  'not-applicable': 'N/A',
};

export function BitmPlausibilityBlock({
  audit,
  title,
  compact = true,
}: {
  audit: BitmPlausibilityAudit;
  title: string;
  compact?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4 border border-[#ff5c00]/25 bg-[#ff5c00]/5 dark:border-orange-900/40 dark:bg-orange-950/15">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        aria-expanded={expanded}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ff5c00]">
          Plausibility Study — {title}
        </span>
        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-[#777777]">
          {statusLabels[audit.status]} · {expanded ? '−' : '+'}
        </span>
      </button>

      {(expanded || !compact) && (
        <dl className="space-y-3 border-t border-[#ff5c00]/15 px-4 py-3 text-sm">
          <PlausRow label="Machine proposal" value={audit.machineProposal} />
          <PlausRow label="Material reality" value={audit.materialReality} />
          <PlausRow label="Institutional reality" value={audit.institutionalReality} />
          <PlausRow label="Material test" value={audit.materialTest} />
          <PlausRow label="Rejected / simplified" value={audit.rejectedOrSimplified} />
          {audit.budget ? (
            <PlausRow
              label="Budget"
              value={audit.budget.value}
              status={audit.budget.status}
            />
          ) : null}
          {audit.timeframe ? (
            <PlausRow
              label="Timeframe"
              value={audit.timeframe.value}
              status={audit.timeframe.status}
            />
          ) : null}
          {audit.approvalsOrDependencies.length > 0 ? (
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#777777]">
                Approvals / dependencies
              </dt>
              <dd className="mt-1">
                <ul className="list-inside list-disc text-[#111111] dark:text-neutral-200">
                  {audit.approvalsOrDependencies.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
          <PlausRow label="Maintenance" value={audit.maintenance} />
          {audit.documentationNeeded && audit.documentationNeeded.length > 0 ? (
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#777777]">
                Documentation needed
              </dt>
              <dd className="mt-1 text-[#777777] dark:text-neutral-400">
                {audit.documentationNeeded.join(' · ')}
              </dd>
            </div>
          ) : null}
        </dl>
      )}
    </div>
  );
}

function PlausRow({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status?: string;
}) {
  return (
    <div>
      <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#777777]">
        {label}
        {status && status !== 'documented' ? (
          <span className="ml-2 text-[#ff5c00]">({status.toUpperCase()})</span>
        ) : null}
      </dt>
      <dd className="mt-1 leading-relaxed text-[#111111] dark:text-neutral-200">{value}</dd>
    </div>
  );
}
