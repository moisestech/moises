import { resolveTechLogos } from '@/content/evidence/tech-logos';
import { cn } from '@/lib/utils';

type ProcessStepLogosProps = {
  logoIds: string[];
  className?: string;
};

export function ProcessStepLogos({ logoIds, className }: ProcessStepLogosProps) {
  if (!logoIds.length) return null;

  const logos = resolveTechLogos(logoIds);

  return (
    <ul className={cn('mt-3 flex flex-wrap gap-2', className)} aria-label="Relevant tools">
      {logos.map((entry) => (
        <li
          key={entry.id}
          title={entry.label}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 p-1 shadow-sm"
        >
          {entry.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={entry.imageSrc}
              alt=""
              className={cn('h-full w-full object-contain', entry.imageClassName)}
            />
          ) : (
            <span className="text-[9px] font-bold uppercase text-stone-500">{entry.label.slice(0, 3)}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
