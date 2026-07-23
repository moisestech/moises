import { opp } from '@/components/opportunities/opportunityTheme';
import type { EvaluationPhilosophyData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type EvaluationPhilosophyProps = {
  data: EvaluationPhilosophyData;
  sectionId?: string;
  className?: string;
};

/** Editorial five-part evaluation framework — not a SaaS card grid. */
export function EvaluationPhilosophy({
  data,
  sectionId = 'eval-philosophy',
  className,
}: EvaluationPhilosophyProps) {
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.intro}</p> : null}

      <ol className="mt-8 space-y-0 border-l border-stone-300 dark:border-stone-600">
        {data.items.map((item, index) => (
          <li key={item.id} className="relative pl-8 pb-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-orange-500/80 bg-stone-50 dark:bg-stone-950"
              aria-hidden
            />
            <p className="font-mono text-[10px] tracking-wide text-stone-500 dark:text-stone-400">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className={`mt-1 ${opp.h3MoMA}`}>{item.title}</h3>
            <p className={`mt-2 max-w-2xl ${opp.body}`}>{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
