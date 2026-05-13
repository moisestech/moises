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
    row: 'hover:border-cyan-500 hover:bg-cyan-50/85',
    iconWrap: 'bg-stone-100 text-stone-600 group-hover:bg-cyan-100 group-hover:text-cyan-900',
  },
  {
    row: 'hover:border-teal-500 hover:bg-teal-50/85',
    iconWrap: 'bg-stone-100 text-stone-600 group-hover:bg-teal-100 group-hover:text-teal-900',
  },
  {
    row: 'hover:border-violet-500 hover:bg-violet-50/80',
    iconWrap: 'bg-stone-100 text-stone-600 group-hover:bg-violet-100 group-hover:text-violet-900',
  },
  {
    row: 'hover:border-amber-500 hover:bg-amber-50/75',
    iconWrap: 'bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-950',
  },
  {
    row: 'hover:border-rose-500 hover:bg-rose-50/80',
    iconWrap: 'bg-stone-100 text-stone-600 group-hover:bg-rose-100 group-hover:text-rose-900',
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
};

export function MatrixRowIcon({ icon }: { icon?: SkillsMatrixIconKey }) {
  const Icon = icon ? ICON_MAP[icon] : Layers;
  return <Icon className="h-5 w-5 shrink-0" aria-hidden />;
}

export function ExperienceMatrixRows({
  rows,
  headers,
}: {
  rows: ExperienceMatrixRow[];
  headers?: { left: string; right: string };
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      {headers ? (
        <div className="hidden border-b border-stone-200 bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600 sm:grid sm:grid-cols-[3rem_minmax(0,0.38fr)_minmax(0,0.62fr)]">
          <div aria-hidden />
          <div className="px-4 py-3">{headers.left}</div>
          <div className="px-4 py-3">{headers.right}</div>
        </div>
      ) : null}
      <ul className="divide-y divide-stone-100">
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
                  <p className="font-[\'MoMA_Sans\'] text-sm font-bold leading-snug text-stone-950 sm:text-base">
                    {row.primary}
                  </p>
                  <p className="mt-1.5 text-sm font-normal leading-relaxed text-stone-600">{row.secondary}</p>
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
}: ExperienceMatrixSectionProps) {
  return (
    <div
      id={sectionId}
      role="region"
      aria-labelledby={`${sectionId}-heading`}
      className={cn('scroll-mt-32 mt-16 border-t border-stone-200 pt-12', className)}
    >
      <h2 id={`${sectionId}-heading`} className="font-[\'MoMA_Sans\'] text-2xl font-semibold text-stone-950">
        {title}
      </h2>
      <div className="mt-6">
        <ExperienceMatrixRows rows={rows} headers={headers} />
      </div>
    </div>
  );
}

export function getStartupCardAccentClass(index: number): (typeof ROW_ACCENTS)[number] {
  return ROW_ACCENTS[index % ROW_ACCENTS.length];
}
