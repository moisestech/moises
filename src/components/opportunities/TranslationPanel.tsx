import { opp } from '@/components/opportunities/opportunityTheme';
import type { TranslationPanelData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type TranslationPanelProps = {
  data: TranslationPanelData;
  sectionId?: string;
};

export function TranslationPanel({ data, sectionId = 'translation' }: TranslationPanelProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.subtitle ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{data.subtitle}</p> : null}

      <ul className="mt-8 space-y-6">
        {data.examples.map((example) => (
          <li key={example.id} className={cn(opp.card, 'p-5')}>
            <div className="grid gap-4 lg:grid-cols-3">
              <div>
                <p className={opp.label}>Stated request</p>
                <p className={`mt-1 font-medium text-stone-900 dark:text-stone-100`}>{example.statedRequest}</p>
              </div>
              <div>
                <p className={opp.label}>Underlying system problem</p>
                <p className={`mt-1 ${opp.body}`}>{example.underlyingProblem}</p>
              </div>
              <div>
                <p className={opp.label}>Engineering response</p>
                <p className={`mt-1 ${opp.body}`}>{example.engineeringResponse}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
