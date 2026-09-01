import { cn } from '@/lib/utils';

type FdeDigitalDividerProps = {
  label: string;
  className?: string;
};

export function FdeDigitalDivider({ label, className }: FdeDigitalDividerProps) {
  return (
    <div
      className={cn('mt-10 flex items-center gap-3 sm:mt-12', className)}
      role="separator"
      aria-label={label}
    >
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
        {label}
      </span>
      <span className="relative h-px min-w-0 flex-1 bg-stone-300 dark:bg-stone-600">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,#0e7490_6px,#0e7490_8px)] opacity-70 dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,#22d3ee_6px,#22d3ee_8px)]"
        />
      </span>
      <span className="flex shrink-0 gap-1" aria-hidden>
        <span className="h-1.5 w-1.5 bg-cyan-600 dark:bg-cyan-400" />
        <span className="h-1.5 w-1.5 bg-stone-400 dark:bg-stone-500" />
        <span className="h-1.5 w-1.5 bg-stone-400 dark:bg-stone-500" />
      </span>
    </div>
  );
}
