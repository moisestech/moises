'use client';

import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmShowLaborToggle({ className }: { className?: string }) {
  const { showLabor, setShowLabor } = useBitm();

  return (
    <button
      type="button"
      onClick={() => setShowLabor(!showLabor)}
      className={cn(
        'font-mono text-[10px] uppercase tracking-[0.16em] transition-colors',
        showLabor
          ? 'text-[#ff5c00]'
          : 'text-[#777777] hover:text-[#111111] dark:hover:text-neutral-200',
        className,
      )}
      aria-pressed={showLabor}
    >
      SHOW THE LABOR: {showLabor ? 'ON' : 'OFF'}
    </button>
  );
}
