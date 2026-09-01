import { cn } from '@/lib/utils';

type PartnerMarkProps = {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md';
};

export function PartnerMark({ src, alt, className, size = 'md' }: PartnerMarkProps) {
  const box = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const img = size === 'sm' ? 'h-6 w-6' : 'h-8 w-8';
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-stone-200 bg-white dark:border-stone-700 dark:bg-white',
        box,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={cn('object-contain', img)} />
    </span>
  );
}
