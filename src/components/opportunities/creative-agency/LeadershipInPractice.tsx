import { opp } from '@/components/opportunities/opportunityTheme';
import type { LeadershipBlock } from '@/content/opportunities/creativeAgencyDossier';
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
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.points.map((point) => (
          <li key={point.id} className={cn(opp.card, 'p-5')}>
            <h3 className={opp.h3MoMA}>{point.title}</h3>
            <p className={`mt-2 ${opp.body}`}>{point.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
