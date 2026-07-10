'use client';

import { bitmChapters } from '@/content/born-into-the-machine/bitm-chapters';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { BitmShowLaborToggle } from '@/components/born-into-the-machine/BitmShowLaborToggle';
import { cn } from '@/lib/utils';

export function BitmSystemRail({ className }: { className?: string }) {
  const { activeChapterId } = useBitm();
  const chapter = bitmChapters.find((c) => c.id === activeChapterId) ?? bitmChapters[0];
  const epoch = String(chapter.index).padStart(3, '0');
  const total = String(bitmChapters.length - 1).padStart(3, '0');
  const completion = Math.round((chapter.index / (bitmChapters.length - 1)) * 100);

  return (
    <aside
      className={cn(
        'hidden xl:flex fixed right-4 top-1/2 z-40 -translate-y-1/2 flex-col gap-3',
        'w-[148px] border border-[#dedede] bg-[#faf8f4]/95 px-3 py-4',
        'font-mono text-[9px] uppercase tracking-[0.14em] text-[#777777]',
        'backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-950/95 dark:text-neutral-400',
        className,
      )}
      aria-label="System status"
    >
      <p className="text-[#111111] dark:text-neutral-200">
        CHAPTER {String(chapter.index).padStart(2, '0')} / {String(bitmChapters.length - 1).padStart(2, '0')}
      </p>
      <p>EPOCH {epoch} / {total}</p>
      <p>MODE: {chapter.railMode}</p>
      <p>INPUT: HUMAN</p>
      <p>OUTPUT: CULTURE</p>
      <p className="text-[#ff5c00]">SYSTEM {completion}%</p>
      <div className="mt-2 border-t border-[#dedede] pt-3 dark:border-neutral-700">
        <BitmShowLaborToggle />
      </div>
    </aside>
  );
}
