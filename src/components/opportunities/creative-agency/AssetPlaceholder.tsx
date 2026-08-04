import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type AssetPlaceholderProps = {
  /** Short status chip — e.g. “Pending specimen”, “Self-initiated study”. */
  badge: string;
  /** Primary label shown in the frame (format or asset name). */
  title: string;
  /** Optional longer note / TODO. */
  note?: string;
  /** Aspect ratio Tailwind class, e.g. aspect-[16/9]. */
  aspectClass?: string;
  className?: string;
};

/**
 * Explicit empty-state frame for missing campaign / production assets.
 * Keeps placeholders honest and visually distinct from shipped work.
 */
export function AssetPlaceholder({
  badge,
  title,
  note,
  aspectClass = 'aspect-[16/9]',
  className,
}: AssetPlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center gap-2 border border-dashed border-amber-400/70 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(245,158,11,0.06)_10px,rgba(245,158,11,0.06)_20px)] p-5 text-center dark:border-amber-600/60 dark:bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(245,158,11,0.08)_10px,rgba(245,158,11,0.08)_20px)]',
        aspectClass,
        className,
      )}
      role="img"
      aria-label={`${badge}: ${title}${note ? `. ${note}` : ''}`}
    >
      <span className="rounded-full border border-amber-500/50 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/60 dark:text-amber-100">
        {badge}
      </span>
      <p className="max-w-xs text-sm font-semibold text-stone-800 dark:text-stone-100">{title}</p>
      {note ? <p className={`max-w-sm ${opp.subtle}`}>{note}</p> : null}
    </div>
  );
}
