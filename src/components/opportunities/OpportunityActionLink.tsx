import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { LIFECYCLE_META, type LifecycleStage } from '@/content/opportunities/lifecycle';
import { isExternalHttpHref } from '@/components/opportunities/opportunitySocialStyles';
import { cn } from '@/lib/utils';

export const OPPORTUNITY_ACTION_LINK_BASE = cn(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-semibold',
  'transition duration-200 motion-reduce:transition-none sm:justify-start',
  'hover:-translate-y-0.5 hover:shadow-sm motion-reduce:hover:translate-y-0',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400',
  'dark:bg-stone-900',
);

export const OOLITE_ACTION_LINK_CLASS =
  'border-cyan-400 bg-cyan-50 text-cyan-800 hover:bg-cyan-100 dark:border-cyan-500 dark:bg-cyan-950/50 dark:text-cyan-200 dark:hover:bg-cyan-950/70';

export function opportunityActionLinkClass(stage: LifecycleStage, className?: string) {
  return cn(OPPORTUNITY_ACTION_LINK_BASE, LIFECYCLE_META[stage].btnClass, className);
}

type OpportunityActionLinkProps = {
  href: string;
  label: string;
  onClick: () => void;
  stage?: LifecycleStage;
  icon?: LucideIcon;
  mark?: { src: string; alt: string };
  className?: string;
};

export function OpportunityActionLink({
  href,
  label,
  onClick,
  stage,
  icon: Icon,
  mark,
  className,
}: OpportunityActionLinkProps) {
  const classes = cn(
    OPPORTUNITY_ACTION_LINK_BASE,
    stage ? LIFECYCLE_META[stage].btnClass : null,
    className,
  );
  const inner = (
    <>
      {mark ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={mark.src} alt="" className="h-5 w-5 shrink-0 object-contain" />
      ) : Icon ? (
        <Icon className="h-4 w-4 shrink-0" aria-hidden />
      ) : null}
      {label}
    </>
  );

  if (isExternalHttpHref(href) || href.endsWith('.pdf')) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  );
}
