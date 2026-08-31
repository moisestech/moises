import { LIFECYCLE_META, LIFECYCLE_STAGES } from '@/content/opportunities/lifecycle';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

export function LifecycleStageStrip({ className }: { className?: string }) {
  return (
    <section id="lifecycle" className={cn('scroll-mt-32', className)} aria-labelledby="lifecycle-heading">
      <h2 id="lifecycle-heading" className={opp.h2}>
        Six-stage lifecycle
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>
        One vocabulary on this page. Color and icon mark the stage. Maturity uses a different encoding.
      </p>
      <ol className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {LIFECYCLE_STAGES.map((stage, i) => {
          const meta = LIFECYCLE_META[stage];
          const Icon = meta.icon;
          return (
            <li
              key={stage}
              className={cn(
                'rounded-xl border px-3 py-3',
                meta.bgClass,
                meta.borderClass,
              )}
            >
              <p className={cn(opp.subtle, meta.textClass)}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className={cn('mt-1 flex items-center gap-1.5 text-sm font-semibold', meta.textClass)}>
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {stage}
              </p>
              <p className={cn(opp.subtle, 'mt-1')}>{meta.sub}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
