import type { Opportunity } from '@/content/opportunities/types';

type InnovationProcessProps = {
  opportunity: Opportunity;
};

export function InnovationProcess({ opportunity }: InnovationProcessProps) {
  return (
    <section id="process" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
        {opportunity.processSectionTitle ?? 'Process'}
      </h2>
      {opportunity.processIntro ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-700">{opportunity.processIntro}</p>
      ) : null}
      <ol className="mt-8 space-y-4">
        {opportunity.processSteps.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-900/10 text-xs font-bold text-cyan-900">
              {i + 1}
            </span>
            <div>
              <h3 className="font-medium text-stone-900">{step.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      {opportunity.innovationLabLead || opportunity.innovationLabBody ? (
        <div className="mt-10 rounded-xl border border-stone-200 bg-stone-100/80 p-5">
          {opportunity.innovationLabSectionTitle ? (
            <h3 className="font-['MoMA_Sans'] text-lg font-semibold text-stone-950">
              {opportunity.innovationLabSectionTitle}
            </h3>
          ) : null}
          {opportunity.innovationLabLead ? (
            <p className="mt-2 text-sm font-medium text-cyan-900">{opportunity.innovationLabLead}</p>
          ) : null}
          {opportunity.innovationLabBody ? (
            <p className="mt-2 text-sm leading-relaxed text-stone-700">{opportunity.innovationLabBody}</p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
