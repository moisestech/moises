import { opp } from '@/components/opportunities/opportunityTheme';
import type { ResearchQuestionsData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type ResearchQuestionsProps = {
  data: ResearchQuestionsData;
  sectionId?: string;
  className?: string;
};

export function ResearchQuestions({
  data,
  sectionId = 'research-questions',
  className,
}: ResearchQuestionsProps) {
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
      <ol className="mt-8 max-w-3xl space-y-4">
        {data.questions.map((q, index) => (
          <li key={q.slice(0, 40)} className="flex gap-3">
            <span className="mt-0.5 font-mono text-xs text-orange-700 dark:text-orange-300">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className={opp.body}>{q}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
