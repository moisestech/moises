import { opp } from '@/components/opportunities/opportunityTheme';
import type { PositioningStatementData } from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type PositioningStatementProps = {
  data: PositioningStatementData;
  sectionId?: string;
  className?: string;
};

export function PositioningStatement({
  data,
  sectionId = 'position',
  className,
}: PositioningStatementProps) {
  return (
    <section
      id={sectionId}
      className={cn(opp.section, className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      <div className={`mt-4 max-w-3xl space-y-4 ${opp.body}`}>
        {data.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
      {data.annotation ? (
        <p className="mt-6 inline-flex max-w-3xl rounded border border-dashed border-stone-300 bg-stone-100/70 px-3 py-2 font-mono text-[11px] leading-relaxed text-stone-700 dark:border-stone-600 dark:bg-stone-900/70 dark:text-stone-300">
          {data.annotation}
        </p>
      ) : null}
    </section>
  );
}
