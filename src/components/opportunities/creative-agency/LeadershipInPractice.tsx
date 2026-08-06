import { opp } from '@/components/opportunities/opportunityTheme';
import type { LeadershipBlock } from '@/content/opportunities/creativeAgencyDossier';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { cn } from '@/lib/utils';

type LeadershipInPracticeProps = {
  data: LeadershipBlock;
  sectionId?: string;
  className?: string;
};

export function LeadershipInPractice({
  data,
  sectionId = 'leadership',
  className,
}: LeadershipInPracticeProps) {
  const accent = getOpportunityCompactAccent(sectionId);

  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent.eyebrow)}>
        Leadership evidence
      </p>
      <h2 id={`${sectionId}-heading`} className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
        {data.points.map((point, index) => (
          <li
            key={point.id}
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
                <h3 className={opp.h3MoMA}>{point.title}</h3>
                <p className={`mt-2 ${opp.body}`}>{point.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
