import { opp } from '@/components/opportunities/opportunityTheme';
import type { FitPillar } from '@/content/opportunities/systemsDossier';
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
  return (
    <section id={sectionId} className={cn(opp.section, className)} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <li key={pillar.id} className={cn(opp.card, 'p-5')}>
            <h3 className={opp.h3MoMA}>{pillar.title}</h3>
            <p className={`mt-2 ${opp.body}`}>{pillar.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
