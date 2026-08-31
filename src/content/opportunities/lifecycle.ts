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
    btnClass: string;
  }
> = {
  Discover: {
    icon: Eye,
    sub: 'observe + frame',
    textClass: 'text-cyan-700 dark:text-cyan-300',
    bgClass: 'bg-cyan-50 dark:bg-cyan-950/40',
    borderClass: 'border-cyan-200 dark:border-cyan-800',
    btnClass:
      'border-cyan-300 text-cyan-800 hover:bg-cyan-50 dark:border-cyan-700 dark:text-cyan-200 dark:hover:bg-cyan-950/50',
  },
  Prototype: {
    icon: Boxes,
    sub: 'one reviewable slice',
    textClass: 'text-sky-700 dark:text-sky-300',
    bgClass: 'bg-sky-50 dark:bg-sky-950/40',
    borderClass: 'border-sky-200 dark:border-sky-800',
    btnClass:
      'border-sky-300 text-sky-800 hover:bg-sky-50 dark:border-sky-700 dark:text-sky-200 dark:hover:bg-sky-950/50',
  },
  Govern: {
    icon: Shield,
    sub: 'human gate',
    textClass: 'text-amber-800 dark:text-amber-200',
    bgClass: 'bg-amber-50 dark:bg-amber-950/40',
    borderClass: 'border-amber-200 dark:border-amber-800',
    btnClass:
      'border-amber-300 text-amber-900 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-100 dark:hover:bg-amber-950/50',
  },
  Deploy: {
    icon: Server,
    sub: 'people can operate it',
    textClass: 'text-emerald-700 dark:text-emerald-300',
    bgClass: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderClass: 'border-emerald-200 dark:border-emerald-800',
    btnClass:
      'border-emerald-300 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-200 dark:hover:bg-emerald-950/50',
  },
  Teach: {
    icon: GraduationCap,
    sub: 'mixed-audience path',
    textClass: 'text-violet-700 dark:text-violet-300',
    bgClass: 'bg-violet-50 dark:bg-violet-950/40',
    borderClass: 'border-violet-200 dark:border-violet-800',
    btnClass:
      'border-violet-300 text-violet-800 hover:bg-violet-50 dark:border-violet-700 dark:text-violet-200 dark:hover:bg-violet-950/50',
  },
  Handoff: {
    icon: ArrowLeftRight,
    sub: 'runbook left behind',
    textClass: 'text-stone-700 dark:text-stone-300',
    bgClass: 'bg-stone-100 dark:bg-stone-800/60',
    borderClass: 'border-stone-300 dark:border-stone-600',
    btnClass:
      'border-stone-400 text-stone-800 hover:bg-stone-100 dark:border-stone-500 dark:text-stone-200 dark:hover:bg-stone-800',
  },
};

export function isLifecycleStage(value: string | undefined): value is LifecycleStage {
  return Boolean(value && (LIFECYCLE_STAGES as readonly string[]).includes(value));
}
