import { opp } from '@/components/opportunities/opportunityTheme';
import type { ThirtySixtyNinetyData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type ThirtySixtyNinetyPlanProps = {
  data: ThirtySixtyNinetyData;
  sectionId?: string;
};

export function ThirtySixtyNinetyPlan({ data, sectionId = 'plan' }: ThirtySixtyNinetyPlanProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.subtitle ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p> : null}
      {data.disclaimer ? <p className={`mt-3 text-xs ${opp.subtle}`}>{data.disclaimer}</p> : null}

      <ol className="mt-8 grid gap-4 lg:grid-cols-3">
        {data.phases.map((phase, index) => (
          <li key={phase.id} className={cn(opp.card, 'flex flex-col p-5')}>
            <p className={opp.accent}>
              {String(index + 1).padStart(2, '0')} · {phase.label}
            </p>
            <h3 className={`mt-2 ${opp.h3MoMA}`}>{phase.title}</h3>
            <ul className="mt-4 flex-1 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className={opp.body}>
                  <span className="mr-2 text-stone-400" aria-hidden>
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
