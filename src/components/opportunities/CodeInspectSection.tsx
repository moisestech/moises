import { ExternalLink, GitBranch, Repeat, Search, Shield } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import type { CodeInspectBlock, CodeInspectItem } from '@/content/opportunities/types';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';

const CODE_ICONS: Record<NonNullable<CodeInspectItem['icon']>, typeof GitBranch> = {
  'git-branch': GitBranch,
  shield: Shield,
  search: Search,
  repeat: Repeat,
};

type CodeInspectSectionProps = {
  data: CodeInspectBlock;
  framed?: boolean;
  sectionId?: string;
};

/**
 * Compact external-code cards for recruiter overlays.
 * One-line explanation + GitHub file link; footnotes stay quiet.
 */
export function CodeInspectSection({
  data,
  framed = false,
  sectionId = 'code-inspect',
}: CodeInspectSectionProps) {
  const accent = getOpportunityCompactAccent(sectionId);

  return (
    <section
      id={sectionId}
      className={framed ? 'scroll-mt-32' : opp.section}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {data.title}
      </h2>
      {data.intro ? <p className={`mt-3 max-w-3xl ${opp.muted}`}>{data.intro}</p> : null}

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {data.items.map((item) => {
          const Icon = item.icon ? CODE_ICONS[item.icon] : null;
          return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                opp.card,
                accent.cardHover,
                'block h-full min-h-11 p-4 transition duration-300 motion-reduce:transition-none',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                accent.focusRing,
              )}
            >
              <span className="flex items-start justify-between gap-3">
                <span className="flex min-w-0 items-start gap-2">
                  {Icon ? <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', accent.eyebrow)} aria-hidden /> : null}
                  <span className={opp.matrixPrimary}>{item.title}</span>
                </span>
                <ExternalLink className={cn('mt-0.5 h-4 w-4 shrink-0', accent.eyebrow)} aria-hidden />
              </span>
              <span className={cn(opp.matrixSecondary, 'mt-2 block')}>{item.body}</span>
            </a>
          </li>
          );
        })}
      </ul>

      {data.footnotes?.length ? (
        <ul className={`mt-4 space-y-1.5 ${opp.subtle}`}>
          {data.footnotes.map((note) => (
            <li key={note.href}>
              <a
                href={note.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'inline-flex min-h-11 items-center underline-offset-2 hover:underline',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  accent.focusRing,
                  accent.eyebrow,
                )}
              >
                {note.label}
              </a>
              {note.note ? <span> — {note.note}</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
