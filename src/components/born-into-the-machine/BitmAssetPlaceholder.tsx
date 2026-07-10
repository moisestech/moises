'use client';

import { cn } from '@/lib/utils';

export function BitmAssetPlaceholder({
  label = 'DOCUMENTATION NEEDED',
  caption,
  className,
  aspect = 'video',
}: {
  label?: string;
  caption?: string;
  className?: string;
  aspect?: 'video' | 'square' | 'portrait';
}) {
  const aspectClass =
    aspect === 'square' ? 'aspect-square' : aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-video';

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center border border-dashed border-[#c4c4c4] bg-[#faf8f4]/80 p-6 text-center dark:border-neutral-600 dark:bg-neutral-900/50',
        aspectClass,
        className,
      )}
      role="img"
      aria-label={caption ?? label}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff5c00]">{label}</p>
      {caption ? (
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#777777] dark:text-neutral-400">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
