import { opp } from '@/components/opportunities/opportunityTheme';
import type { FitPillar } from '@/content/opportunities/systemsDossier';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { cn } from '@/lib/utils';

type FitPillarsProps = {
  title: string;
  intro?: string;
  pillars: FitPillar[];
  sectionId?: string;
  className?: string;
};

export function FitPillars({
  title,
  intro,
  pillars,
  sectionId = 'fit',
  className,
}: FitPillarsProps) {
  const accent = getOpportunityCompactAccent(sectionId);
  const eyebrow =
    sectionId === 'capabilities'
      ? 'Capabilities'
      : sectionId === 'fit'
        ? 'Role fit'
        : 'Highlights';

  return (
    <section id={sectionId} className={cn(opp.section, className)} aria-labelledby={`${sectionId}-heading`}>
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        {eyebrow}
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.id}
            className={cn(
              opp.card,
              'border-l-[3px] p-4 transition hover:shadow-md sm:p-5',
              accent.rail,
              accent.softBg,
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums',
                  accent.navIdle,
                  accent.eyebrow,
                )}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h3 className={opp.h3MoMA}>{pillar.title}</h3>
                <p className={`mt-2 ${opp.body}`}>{pillar.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
