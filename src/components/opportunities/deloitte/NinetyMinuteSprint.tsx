import { opp } from '@/components/opportunities/opportunityTheme';
import { deloitteUi } from '@/components/opportunities/deloitte/deloitteTheme';
import type { deloitteNinetyMinuteSprint } from '@/content/opportunities/deloitte-ai-design-facilitator-fde';
import { cn } from '@/lib/utils';

type NinetyMinuteSprintProps = {
  data: typeof deloitteNinetyMinuteSprint;
};

export function NinetyMinuteSprint({ data }: NinetyMinuteSprintProps) {
  return (
    <section id="sprint" className="scroll-mt-32" aria-labelledby="sprint-heading">
      <p className={deloitteUi.eyebrow}>{data.eyebrow}</p>
      <h2 id="sprint-heading" className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.body}`}>{data.intro}</p>

      <ol className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
        {data.steps.map((step, index) => (
          <li
            key={step.time}
            className={cn(
              'w-[min(78vw,18rem)] shrink-0 snap-center border border-stone-300 bg-white p-4 dark:border-stone-700 dark:bg-stone-950 sm:w-auto sm:shrink',
            )}
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-stone-500">
              {String(index + 1).padStart(2, '0')} · {step.time}
            </p>
            <h3 className={`mt-2 ${opp.h3MoMA}`}>{step.title}</h3>
            <p className={`mt-2 ${opp.body}`}>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
