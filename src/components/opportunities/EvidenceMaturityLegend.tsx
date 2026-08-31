import { EvidenceTypeBadge, MATURITY_LEGEND } from '@/components/opportunities/EvidenceTypeBadge';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

export function EvidenceMaturityLegend({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-xl border border-stone-200 p-4 dark:border-stone-700', className)}>
      <p className={opp.label}>Evidence maturity</p>
      <p className={cn(opp.subtle, 'mt-1')}>
        Shape and line — not more hues. Stage color stays reserved for Discover through Handoff.
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {MATURITY_LEGEND.map((item) => (
          <li key={item.type} className="flex items-center gap-1.5">
            <EvidenceTypeBadge type={item.type} />
            <span className={opp.subtle}>{item.mark}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
