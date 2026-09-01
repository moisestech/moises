import { SiAirtable, SiClaude, SiFigma } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';

function CursorMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M4.2 2.4 20.6 12 13 13.7 9.8 21.4 4.2 2.4Z"
      />
    </svg>
  );
}

const TOOLS = [
  { id: 'cursor', label: 'Cursor', Icon: CursorMark },
  { id: 'claude', label: 'Claude', Icon: SiClaude },
  { id: 'airtable', label: 'Airtable', Icon: SiAirtable },
  { id: 'figma', label: 'Figma', Icon: SiFigma },
] as const;

export function HeroToolMarks({ className }: { className?: string }) {
  return (
    <ul className={cn('mt-5 flex flex-wrap items-center gap-2 sm:gap-3', className)} aria-label="Daily tools">
      {TOOLS.map(({ id, label, Icon }) => (
        <li
          key={id}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-stone-800 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden />
          <span className={cn(opp.label, 'normal-case tracking-normal text-stone-700 dark:text-stone-200')}>
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
