import { opp } from '@/components/opportunities/opportunityTheme';
import type { RolePortfolioTimelineItem } from '@/content/opportunities/rolePortfolio';
import { cn } from '@/lib/utils';

type ExperienceSnapshotProps = {
  title: string;
  intro?: string;
  items: RolePortfolioTimelineItem[];
  sectionId?: string;
};

export function ExperienceSnapshot({
  title,
  intro,
  items,
  sectionId = 'experience',
}: ExperienceSnapshotProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <ol className="mt-8 space-y-0">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              'relative grid gap-1 border-l border-stone-200 py-4 pl-6 dark:border-stone-700 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-6',
              index === 0 && 'pt-0',
            )}
          >
            <span
              className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400"
              aria-hidden
            />
            <p className={opp.subtle}>{item.period}</p>
            <div>
              <h3 className={opp.matrixPrimary}>
                {item.org}
                <span className="font-normal text-stone-500 dark:text-stone-400"> — {item.title}</span>
              </h3>
              {item.detail ? <p className={opp.matrixSecondary}>{item.detail}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
