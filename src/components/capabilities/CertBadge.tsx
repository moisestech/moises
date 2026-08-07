/**
 * Cert badge UI — built for later mount. Not used on /capabilities v1
 * until Tier-1 statuses are confirmed by Moises.
 */
import { cn } from '@/lib/utils';
import type { CapabilityCertification } from '@/content/capabilities';

type CertBadgeProps = {
  cert: CapabilityCertification;
  className?: string;
};

const STATUS_LABEL: Record<CapabilityCertification['status'], string> = {
  'not-started': 'Not started',
  'in-progress': 'In progress',
  completed: 'Completed',
};

export function CertBadge({ cert, className }: CertBadgeProps) {
  const statusLabel = STATUS_LABEL[cert.status];
  const completed = cert.status === 'completed';

  const inner = (
    <span
      className={cn(
        'inline-flex flex-col gap-0.5 rounded-lg border px-3 py-2 text-left',
        completed
          ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40'
          : 'border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
        className,
      )}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">
        Tier {cert.tier} · {statusLabel}
      </span>
      <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">{cert.name}</span>
      {cert.note ? (
        <span className="text-[11px] text-stone-500 dark:text-stone-400">{cert.note}</span>
      ) : null}
    </span>
  );

  if (cert.href && completed) {
    return (
      <a href={cert.href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}
