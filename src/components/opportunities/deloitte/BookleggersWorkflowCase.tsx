import { opp } from '@/components/opportunities/opportunityTheme';
import { deloitteUi } from '@/components/opportunities/deloitte/deloitteTheme';
import { EditorialFlow } from '@/components/opportunities/deloitte/EditorialFlow';
import type { deloitteBookleggersCase } from '@/content/opportunities/deloitte-ai-design-facilitator-fde';
import { cn } from '@/lib/utils';

type BookleggersWorkflowCaseProps = {
  data: typeof deloitteBookleggersCase;
};

export function BookleggersWorkflowCase({ data }: BookleggersWorkflowCaseProps) {
  return (
    <section id="bookleggers" className="scroll-mt-32" aria-labelledby="bookleggers-heading">
      <p className={deloitteUi.eyebrow}>{data.eyebrow}</p>
      <h2 id="bookleggers-heading" className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-2 max-w-3xl text-base leading-relaxed text-stone-800 dark:text-stone-200`}>
        {data.subheading}
      </p>

      <div className={cn(deloitteUi.card, 'mt-8 p-5 sm:p-7')}>
        <EditorialFlow steps={data.flow} />
        <p className={`mt-6 ${opp.body}`}>{data.story}</p>
        <p className={`mt-4 border-l-2 pl-4 ${deloitteUi.limeRule} ${opp.body}`}>
          {data.issue}
        </p>
      </div>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.response.map((item, index) => (
          <li key={item} className="border-t border-stone-300 pt-3 dark:border-stone-700">
            <p className="font-mono text-[11px] tracking-[0.14em] text-stone-500">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className={`mt-1 ${opp.body}`}>{item}</p>
          </li>
        ))}
      </ol>

      <p className={`mt-8 max-w-3xl ${opp.muted}`}>{data.liveBoundary}</p>
      <p className={`mt-2 max-w-3xl ${opp.subtle}`}>{data.privacy}</p>
    </section>
  );
}
