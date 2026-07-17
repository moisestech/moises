import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type VolverIconId =
  | 'form'
  | 'journey'
  | 'floor'
  | 'chair'
  | 'hammock'
  | 'kiosk'
  | 'hotel'
  | 'archive'
  | 'feasibility'
  | 'prototype'
  | 'budget'
  | 'lineage';

const chapterIconMap: Record<string, VolverIconId> = {
  form: 'form',
  journey: 'journey',
  'common-tender': 'floor',
  'el-cuentachiste': 'chair',
  'harina-de-otro-costal': 'hammock',
  'casa-de-cambio': 'kiosk',
  hotels: 'hotel',
  archive: 'archive',
  feasibility: 'feasibility',
  prototypes: 'prototype',
  budget: 'budget',
  lineage: 'lineage',
};

export function chapterIconId(chapterId: string): VolverIconId {
  return chapterIconMap[chapterId] ?? 'form';
}

type IconProps = { className?: string; title?: string };

function Svg({ className, title, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-3.5 w-3.5 shrink-0', className)}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function VolverIcon({ id, className, title }: { id: VolverIconId } & IconProps) {
  switch (id) {
    case 'form':
      return (
        <Svg className={className} title={title}>
          <rect x="4" y="4" width="16" height="16" />
          <path d="M4 10h16M10 4v16" />
        </Svg>
      );
    case 'journey':
      return (
        <Svg className={className} title={title}>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M8 12h8" />
        </Svg>
      );
    case 'floor':
      return (
        <Svg className={className} title={title}>
          <rect x="3" y="6" width="18" height="12" />
          <path d="M3 10h18M3 14h18M9 6v12M15 6v12" />
        </Svg>
      );
    case 'chair':
      return (
        <Svg className={className} title={title}>
          <path d="M7 11h10v3H7z" />
          <path d="M8 14v5M16 14v5M7 11V7h10" />
        </Svg>
      );
    case 'hammock':
      return (
        <Svg className={className} title={title}>
          <path d="M4 8c4 8 12 8 16 0" />
          <path d="M4 8v10M20 8v10" />
        </Svg>
      );
    case 'kiosk':
      return (
        <Svg className={className} title={title}>
          <rect x="6" y="3" width="12" height="18" />
          <rect x="8" y="6" width="8" height="5" />
          <path d="M9 14h6" />
        </Svg>
      );
    case 'hotel':
      return (
        <Svg className={className} title={title}>
          <path d="M4 20V6l8-3 8 3v14" />
          <path d="M9 20v-6h6v6" />
        </Svg>
      );
    case 'archive':
      return (
        <Svg className={className} title={title}>
          <rect x="4" y="4" width="16" height="5" />
          <rect x="4" y="10" width="16" height="5" />
          <rect x="4" y="16" width="16" height="4" />
        </Svg>
      );
    case 'feasibility':
      return (
        <Svg className={className} title={title}>
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="8" />
        </Svg>
      );
    case 'prototype':
      return (
        <Svg className={className} title={title}>
          <path d="M12 3v6M8 7l4 4 4-4" />
          <rect x="5" y="13" width="14" height="7" />
        </Svg>
      );
    case 'budget':
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .6 2 1.8c0 2.2-4 1.6-4 4 0 1.1.9 1.7 2 1.7s1.9-.4 2.4-1.2" />
        </Svg>
      );
    case 'lineage':
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M12 8v4M12 12l-5 4M12 12l5 4" />
        </Svg>
      );
    default:
      return null;
  }
}
