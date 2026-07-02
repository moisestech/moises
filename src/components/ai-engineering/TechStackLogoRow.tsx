import { resolveTechLogos } from '@/content/evidence/tech-logos';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type TechStackLogoRowProps = {
  logoIds: string[];
  title?: string;
  className?: string;
};

export function TechStackLogoRow({
  logoIds,
  title = 'Core stack',
  className,
}: TechStackLogoRowProps) {
  const entries = resolveTechLogos(logoIds);
  if (!entries.length) return null;

  return (
    <section className={cn('mt-8', className)} aria-labelledby="core-stack-logos-heading">
      <h2 id="core-stack-logos-heading" className={opp.h2Bold}>
        {title}
      </h2>
      <ul className="mt-4 flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] snap-x snap-mandatory">
        {entries.map((entry) => (
          <li key={entry.id} className="snap-start shrink-0">
            {entry.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={entry.imageSrc}
                alt={entry.label}
                width={120}
                height={36}
                className={cn(
                  'h-9 w-[120px] rounded-lg border border-stone-200 bg-white object-contain p-1 shadow-sm dark:border-stone-600 dark:bg-stone-900',
                  entry.imageClassName,
                )}
              />
            ) : (
              <span className="inline-flex h-9 min-w-[100px] items-center justify-center rounded-lg border border-stone-200 bg-white px-2 text-xs font-semibold text-stone-700 shadow-sm dark:border-stone-600 dark:bg-stone-900 dark:text-stone-300">
                {entry.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
