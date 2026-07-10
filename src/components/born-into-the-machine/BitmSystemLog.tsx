'use client';

import { bitmChapters } from '@/content/born-into-the-machine/bitm-chapters';
import { cn } from '@/lib/utils';

export function BitmSystemLog({ afterChapterId }: { afterChapterId: string }) {
  const chapter = bitmChapters.find((c) => c.id === afterChapterId);
  if (!chapter?.systemLog) return null;

  return (
    <p
      className={cn(
        'my-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]',
        'border-l-2 border-[#ff5c00]/50 pl-4 dark:text-neutral-500',
      )}
      aria-hidden
    >
      {chapter.systemLog}
    </p>
  );
}
