import { opp } from '@/components/opportunities/opportunityTheme';
import { deloitteUi } from '@/components/opportunities/deloitte/deloitteTheme';
import { EditorialFlow } from '@/components/opportunities/deloitte/EditorialFlow';
import { CodeInspectSection } from '@/components/opportunities/CodeInspectSection';
import type { deloitteHitlDiagram } from '@/content/opportunities/deloitte-ai-design-facilitator-fde';
import type { CodeInspectBlock } from '@/content/opportunities/types';

type HitlWorkflowDiagramProps = {
  data: typeof deloitteHitlDiagram;
  codeInspect?: CodeInspectBlock;
};

export function HitlWorkflowDiagram({ data, codeInspect }: HitlWorkflowDiagramProps) {
  return (
    <section id="hitl" className="scroll-mt-32" aria-labelledby="hitl-heading">
      <p className={deloitteUi.eyebrow}>{data.eyebrow}</p>
      <h2 id="hitl-heading" className={`mt-2 ${opp.h2}`}>
        {data.title}
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.body}`}>{data.intro}</p>

      <div className={`${deloitteUi.card} mt-8 p-5 sm:p-7`}>
        <EditorialFlow steps={data.flow} />
        <ul className="mt-6 flex flex-wrap gap-2">
          {data.labels.map((label) => (
            <li key={label} className={opp.pillTag}>
              {label}
            </li>
          ))}
        </ul>
      </div>

      {codeInspect ? (
        <div className="mt-10">
          <CodeInspectSection data={codeInspect} framed sectionId="code-inspect" />
        </div>
      ) : null}
    </section>
  );
}
