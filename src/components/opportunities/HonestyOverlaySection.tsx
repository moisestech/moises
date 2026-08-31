import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { HonestyOverlay } from '@/content/opportunities/types';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';

type HonestyOverlaySectionProps = {
  data: HonestyOverlay;
  framed?: boolean;
  sectionId?: string;
};

/**
 * Compact two-column honesty split for employer overlays.
 * Proven is visually primary; gaps stay readable without warning-red treatment.
 */
export function HonestyOverlaySection({
  data,
  framed = false,
  sectionId = 'honesty',
}: HonestyOverlaySectionProps) {
  const accent = getOpportunityCompactAccent(sectionId);

  return (
    <section
      id={sectionId}
      className={framed ? 'scroll-mt-32' : opp.section}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>{data.intro}</p>

      <div
        className={cn(
          'mt-6 grid gap-4 lg:gap-6',
          data.notClaimed?.length
            ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'
            : 'lg:grid-cols-1',
        )}
      >
        <div
          className={cn(
            opp.card,
            'p-5 transition duration-300 motion-reduce:transition-none',
            accent.cardHover,
          )}
        >
          <h3 className={opp.h3MoMA}>{data.provenTitle}</h3>
          <ul className="mt-4 space-y-2">
            {data.proven.map((item) => (
              <li key={item} className={cn(opp.body, 'flex gap-2')}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {data.notClaimed?.length ? (
          <div
            className={cn(
              opp.card,
              'border-stone-200/80 bg-stone-50/80 p-5 transition duration-300 motion-reduce:transition-none dark:border-stone-700/80 dark:bg-stone-900/60',
              'hover:border-stone-300 hover:shadow-sm dark:hover:border-stone-600',
            )}
          >
            <h3 className={cn(opp.h3MoMA, 'text-stone-700 dark:text-stone-300')}>
              {data.notClaimedTitle ?? 'Not claimed yet'}
            </h3>
            <ul className="mt-4 space-y-2">
              {data.notClaimed.map((item) => (
                <li key={item} className={cn(opp.muted, 'flex gap-2')}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400 dark:bg-stone-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <p className={cn(opp.callout, 'mt-6 max-w-3xl', opp.body)}>{data.rampStatement}</p>
    </section>
  );
}
