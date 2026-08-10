import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Cloud,
  Code2,
  Cpu,
  FileText,
  Image as ImageIcon,
  Layers,
  LineChart,
  Presentation,
  Rocket,
  Scale,
  Shield,
  Sparkles,
  Target,
  Tv,
  Users,
  Workflow,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { SkillsMatrixIconKey } from '@/content/opportunities/types';

const ICON_MAP: Record<SkillsMatrixIconKey, LucideIcon> = {
  code2: Code2,
  sparkles: Sparkles,
  workflow: Workflow,
  image: ImageIcon,
  boxes: Boxes,
  cloud: Cloud,
  rocket: Rocket,
  users: Users,
  fileText: FileText,
  target: Target,
  tv: Tv,
  presentation: Presentation,
  scale: Scale,
  lineChart: LineChart,
  cpu: Cpu,
  shield: Shield,
  layers: Layers,
};

const ROW_ACCENTS = [
  {
    row: 'hover:border-cyan-500 hover:bg-cyan-50/85 dark:hover:bg-cyan-950/40',
    iconWrap:
      'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
  },
  {
    row: 'hover:border-teal-500 hover:bg-teal-50/85 dark:hover:bg-teal-950/35',
    iconWrap:
      'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 group-hover:text-teal-900 dark:group-hover:text-teal-300',
  },
  {
    row: 'hover:border-violet-500 hover:bg-violet-50/80 dark:hover:bg-violet-950/35',
    iconWrap:
      'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 group-hover:text-violet-900 dark:group-hover:text-violet-300',
  },
  {
    row: 'hover:border-amber-500 hover:bg-amber-50/75 dark:hover:bg-amber-950/30',
    iconWrap:
      'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40 group-hover:text-amber-950 dark:group-hover:text-amber-200',
  },
  {
    row: 'hover:border-rose-500 hover:bg-rose-50/80 dark:hover:bg-rose-950/35',
    iconWrap:
      'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-rose-100 dark:group-hover:bg-rose-900/50 group-hover:text-rose-900 dark:group-hover:text-rose-300',
  },
] as const;

export type ExperienceMatrixRow = {
  primary: string;
  secondary: string;
  icon?: SkillsMatrixIconKey;
};

export type ExperienceMatrixSectionProps = {
  sectionId: string;
  title: string;
  rows: ExperienceMatrixRow[];
  headers?: { left: string; right: string };
  className?: string;
  rowsVariant?: 'moma' | 'sans';
};

export function MatrixRowIcon({
  icon,
  className,
}: {
  icon?: SkillsMatrixIconKey;
  className?: string;
}) {
  const Icon = icon ? ICON_MAP[icon] : Layers;
  return <Icon className={cn('h-5 w-5 shrink-0', className)} aria-hidden />;
}

export function ExperienceMatrixRows({
  rows,
  headers,
  variant = 'moma',
}: {
  rows: ExperienceMatrixRow[];
  headers?: { left: string; right: string };
  /** `sans` = neutral sans for dense institutional tables (e.g. role fit). */
  variant?: 'moma' | 'sans';
}) {
  const primaryFont =
    variant === 'sans'
      ? 'font-sans text-sm font-bold tracking-tight text-stone-950 dark:text-stone-50 sm:text-base'
      : opp.matrixPrimary;
  const secondaryFont =
    variant === 'sans'
      ? 'font-sans mt-1.5 text-sm font-normal leading-relaxed tracking-tight text-stone-600 dark:text-stone-400'
      : opp.matrixSecondary;

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-sm">
      {headers ? (
        <div
          className={cn(
            'hidden border-b border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-xs font-semibold uppercase tracking-wide text-stone-600 dark:text-stone-400 sm:grid sm:grid-cols-[3rem_minmax(0,0.38fr)_minmax(0,0.62fr)]',
            variant === 'sans' && 'font-sans tracking-tight',
          )}
        >
          <div aria-hidden />
          <div className="px-4 py-3">{headers.left}</div>
          <div className="px-4 py-3">{headers.right}</div>
        </div>
      ) : null}
      <ul className="divide-y divide-stone-100 dark:divide-stone-800">
        {rows.map((row, index) => {
          const accent = ROW_ACCENTS[index % ROW_ACCENTS.length];
          return (
            <li key={`${row.primary}-${index}`}>
              <div
                className={cn(
                  'group flex gap-3 border-l-4 border-transparent px-3 py-4 transition-colors duration-200 sm:gap-4 sm:px-4',
                  accent.row,
                )}
              >
                <div
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors duration-200',
                    accent.iconWrap,
                  )}
                  aria-hidden
                >
                  <MatrixRowIcon icon={row.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={primaryFont}>{row.primary}</p>
                  <p className={secondaryFont}>{row.secondary}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ExperienceMatrixSection({
  sectionId,
  title,
  rows,
  headers,
  className,
  rowsVariant = 'moma',
}: ExperienceMatrixSectionProps) {
  return (
    <div
      id={sectionId}
      role="region"
      aria-labelledby={`${sectionId}-heading`}
      className={cn(opp.section, className)}
    >
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      <div className="mt-6">
        <ExperienceMatrixRows rows={rows} headers={headers} variant={rowsVariant} />
      </div>
    </div>
  );
}

export function getStartupCardAccentClass(index: number): (typeof ROW_ACCENTS)[number] {
  return ROW_ACCENTS[index % ROW_ACCENTS.length];
}
