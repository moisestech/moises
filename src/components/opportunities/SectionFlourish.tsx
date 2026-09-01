import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { SectionQuote } from '@/content/opportunities/types';
import { FdeTypedLine } from '@/components/opportunities/FdeTypedLine';

export function SectionFlourish({
  quote,
  className,
}: {
  quote: SectionQuote;
  className?: string;
}) {
  if (quote.variant === 'terminal') {
    return <FdeTypedLine quote={quote.quote} className={className} />;
  }

  return (
    <figure className={cn('mx-auto max-w-2xl px-1 text-center', className)}>
      <blockquote className={cn(opp.bodyLg, 'text-pretty font-medium text-stone-800 dark:text-stone-200')}>
        {quote.quote}
      </blockquote>
      {quote.attribution ? (
        <figcaption className={cn(opp.subtle, 'mt-2')}>{quote.attribution}</figcaption>
      ) : null}
    </figure>
  );
}
