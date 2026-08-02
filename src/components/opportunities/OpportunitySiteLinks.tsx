'use client';

import Link from 'next/link';
import { FileText, FolderKanban, Building2, Calendar } from 'lucide-react';
import type { OpportunityCtas } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { isExternalHttpHref } from '@/components/opportunities/opportunitySocialStyles';
import { cn } from '@/lib/utils';

type OpportunitySiteLinksProps = {
  ctas: OpportunityCtas;
  onCta: (kind: string) => void;
  variant?: 'hero' | 'footer';
  className?: string;
};

function SiteLink({
  href,
  label,
  icon: Icon,
  onClick,
  className,
}: {
  href: string;
  label: string;
  icon: typeof FileText;
  onClick: () => void;
  className: string;
}) {
  if (isExternalHttpHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        <Icon className="h-4 w-4 shrink-0" aria-hidden />
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}

/** Portfolio, web CV, schedule, and Oolite program work — shared across hero and contact footer. */
export function OpportunitySiteLinks({ ctas, onCta, variant = 'footer', className }: OpportunitySiteLinksProps) {
  const btnClass = variant === 'hero' ? opp.btnSecondary : opp.btnSecondaryMedium;
  const suffix = variant === 'hero' ? '_hero' : '_footer';

  const items: { href: string; label: string; icon: typeof FileText; kind: string; emphasize?: boolean }[] =
    [];
  if (ctas.scheduleUrl && variant === 'footer') {
    items.push({
      href: ctas.scheduleUrl,
      label: ctas.scheduleLabel ?? 'Schedule intro',
      icon: Calendar,
      kind: 'schedule',
      emphasize: true,
    });
  }
  if (ctas.careerPacket) {
    items.push({ href: ctas.careerPacket, label: 'Career packet', icon: FolderKanban, kind: 'career_packet' });
  }
  if (ctas.cv) items.push({ href: ctas.cv, label: 'Web CV', icon: FileText, kind: 'cv' });
  if (ctas.portfolio) items.push({ href: ctas.portfolio, label: 'Portfolio', icon: FolderKanban, kind: 'portfolio' });
  if (ctas.ooliteWork) {
    items.push({
      href: ctas.ooliteWork,
      label: ctas.ooliteWorkLabel ?? 'Oolite Digital Lab',
      icon: Building2,
      kind: 'oolite_work',
    });
  }
  if (ctas.ooliteOrg) {
    items.push({
      href: ctas.ooliteOrg,
      label: 'Oolite Arts',
      icon: Building2,
      kind: 'oolite_org',
    });
  }

  if (!items.length) return null;

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {items.map((item) => (
        <SiteLink
          key={item.kind}
          href={item.href}
          label={item.label}
          icon={item.icon}
          className={item.emphasize ? opp.btnPrimary : btnClass}
          onClick={() => onCta(`${item.kind}${suffix}`)}
        />
      ))}
    </div>
  );
}
