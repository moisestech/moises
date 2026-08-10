import { cn } from '@/lib/utils';

type DossierSectionBreakProps = {
  className?: string;
};

/** Soft hairline spacer between dossier sections (Apple-like breathing room). */
export function DossierSectionBreak({ className }: DossierSectionBreakProps) {
  return (
    <div
      className={cn('mx-auto flex w-full max-w-2xl items-center gap-3 px-2 py-2 sm:py-3', className)}
      aria-hidden
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-200/90 to-transparent dark:via-stone-700/80" />
      <span className="h-1 w-1 shrink-0 rounded-full bg-stone-300/80 dark:bg-stone-600" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-200/90 to-transparent dark:via-stone-700/80" />
    </div>
  );
}
