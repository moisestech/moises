import {
  Eye,
  Boxes,
  Shield,
  Server,
  GraduationCap,
  ArrowLeftRight,
  type LucideIcon,
} from 'lucide-react';

export const LIFECYCLE_STAGES = [
  'Discover',
  'Prototype',
  'Govern',
  'Deploy',
  'Teach',
  'Handoff',
] as const;

export type LifecycleStage = (typeof LIFECYCLE_STAGES)[number];

export const LIFECYCLE_META: Record<
  LifecycleStage,
  {
    icon: LucideIcon;
    sub: string;
    textClass: string;
    bgClass: string;
    borderClass: string;
    selectedBgClass: string;
    hoverBgClass: string;
    btnClass: string;
  }
> = {
  Discover: {
    icon: Eye,
    sub: 'observe + frame',
    textClass: 'text-cyan-800 dark:text-cyan-200',
    bgClass: 'bg-cyan-50 dark:bg-cyan-950/40',
    borderClass: 'border-cyan-400 dark:border-cyan-500',
    selectedBgClass: 'bg-cyan-100 dark:bg-cyan-900/70',
    hoverBgClass: 'hover:bg-cyan-50/90 dark:hover:bg-cyan-950/45',
    btnClass:
      'border-cyan-300 text-cyan-800 hover:bg-cyan-50 dark:border-cyan-700 dark:text-cyan-200 dark:hover:bg-cyan-950/50',
  },
  Prototype: {
    icon: Boxes,
    sub: 'one reviewable slice',
    textClass: 'text-sky-800 dark:text-sky-200',
    bgClass: 'bg-sky-50 dark:bg-sky-950/40',
    borderClass: 'border-sky-400 dark:border-sky-500',
    selectedBgClass: 'bg-sky-100 dark:bg-sky-900/70',
    hoverBgClass: 'hover:bg-sky-50/90 dark:hover:bg-sky-950/45',
    btnClass:
      'border-sky-300 text-sky-800 hover:bg-sky-50 dark:border-sky-700 dark:text-sky-200 dark:hover:bg-sky-950/50',
  },
  Govern: {
    icon: Shield,
    sub: 'human gate',
    textClass: 'text-amber-900 dark:text-amber-100',
    bgClass: 'bg-amber-50 dark:bg-amber-950/40',
    borderClass: 'border-amber-500 dark:border-amber-400',
    selectedBgClass: 'bg-amber-100 dark:bg-amber-900/70',
    hoverBgClass: 'hover:bg-amber-50/90 dark:hover:bg-amber-950/45',
    btnClass:
      'border-amber-300 text-amber-900 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-100 dark:hover:bg-amber-950/50',
  },
  Deploy: {
    icon: Server,
    sub: 'people can operate it',
    textClass: 'text-emerald-800 dark:text-emerald-200',
    bgClass: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderClass: 'border-emerald-400 dark:border-emerald-500',
    selectedBgClass: 'bg-emerald-100 dark:bg-emerald-900/70',
    hoverBgClass: 'hover:bg-emerald-50/90 dark:hover:bg-emerald-950/45',
    btnClass:
      'border-emerald-300 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-200 dark:hover:bg-emerald-950/50',
  },
  Teach: {
    icon: GraduationCap,
    sub: 'mixed-audience path',
    textClass: 'text-violet-800 dark:text-violet-200',
    bgClass: 'bg-violet-50 dark:bg-violet-950/40',
    borderClass: 'border-violet-400 dark:border-violet-500',
    selectedBgClass: 'bg-violet-100 dark:bg-violet-900/70',
    hoverBgClass: 'hover:bg-violet-50/90 dark:hover:bg-violet-950/45',
    btnClass:
      'border-violet-300 text-violet-800 hover:bg-violet-50 dark:border-violet-700 dark:text-violet-200 dark:hover:bg-violet-950/50',
  },
  Handoff: {
    icon: ArrowLeftRight,
    sub: 'runbook left behind',
    textClass: 'text-stone-800 dark:text-stone-100',
    bgClass: 'bg-stone-100 dark:bg-stone-800/60',
    borderClass: 'border-stone-500 dark:border-stone-400',
    selectedBgClass: 'bg-stone-200 dark:bg-stone-700/80',
    hoverBgClass: 'hover:bg-stone-100/90 dark:hover:bg-stone-800/50',
    btnClass:
      'border-stone-400 text-stone-800 hover:bg-stone-100 dark:border-stone-500 dark:text-stone-200 dark:hover:bg-stone-800',
  },
};

export function isLifecycleStage(value: string | undefined): value is LifecycleStage {
  return Boolean(value && (LIFECYCLE_STAGES as readonly string[]).includes(value));
}
