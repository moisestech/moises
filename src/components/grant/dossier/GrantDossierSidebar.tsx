'use client';

import Image from 'next/image';
import { Globe, Instagram, Linkedin, Mail, Youtube, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteHeaderStickyTopClass } from '@/config/site-header-layout';
import { fourArtistsZoneAccent } from '@/config/four-artists-zone-accent';
import {
  dossierTypography,
  grantCardClass,
  type MajorZone,
} from '@/components/grant/dossier/GrantDossierUi';

export type GrantDossierSocialLinks = {
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  website?: string;
  email?: string;
};

export function GrantApplicantPortrait({
  src,
  alt,
  size,
  imageSizes,
  priority = false,
}: {
  src: string;
  alt: string;
  size: 'large' | 'compact';
  imageSizes: string;
  priority?: boolean;
}) {
  const isLarge = size === 'large';

  return (
    <div
      className={cn(
        'group/portrait relative [perspective:1200px]',
        isLarge ? 'aspect-[4/5] w-full' : 'h-11 w-11 shrink-0 md:h-14 md:w-14',
      )}
    >
      <div
        className={cn(
          'relative h-full w-full overflow-hidden bg-stone-200 transition-[transform,box-shadow] duration-500 ease-out motion-safe:transform-gpu motion-safe:will-change-transform dark:bg-stone-800',
          isLarge
            ? 'shadow-none motion-safe:group-hover/portrait:shadow-[0_22px_48px_-18px_rgba(0,0,0,0.45)] motion-safe:group-hover/portrait:[transform:rotateY(-7deg)_rotateX(5deg)_scale(1.045)]'
            : 'rounded-full border border-stone-300 motion-safe:group-hover/portrait:scale-110 motion-safe:group-hover/portrait:shadow-lg dark:border-stone-600',
          '[transform-style:preserve-3d]',
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn('object-cover transition duration-500', 'motion-safe:group-hover/portrait:scale-[1.06]')}
          sizes={imageSizes}
        />
        <span
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 motion-safe:group-hover/portrait:opacity-100"
          aria-hidden
        >
          <span className="grant-portrait-sheen absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent motion-safe:group-hover/portrait:animate-[grant-portrait-sheen_0.85s_ease-in-out]" />
        </span>
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-stone-900/10 via-transparent to-white/10 opacity-0 transition-opacity duration-500 motion-safe:group-hover/portrait:opacity-100"
          aria-hidden
        />
      </div>
    </div>
  );
}

function GrantDossierSocialLinks({
  links,
  compact = false,
  className,
}: {
  links: GrantDossierSocialLinks;
  compact?: boolean;
  className?: string;
}) {
  const items: { href: string; label: string; icon: LucideIcon; external: boolean }[] = [];

  if (links.instagram) {
    items.push({ href: links.instagram, label: 'Instagram', icon: Instagram, external: true });
  }
  if (links.youtube) {
    items.push({ href: links.youtube, label: 'YouTube', icon: Youtube, external: true });
  }
  if (links.linkedin) {
    items.push({ href: links.linkedin, label: 'LinkedIn', icon: Linkedin, external: true });
  }
  if (links.website) {
    items.push({ href: links.website, label: 'Website', icon: Globe, external: true });
  }
  if (links.email) {
    items.push({
      href: `mailto:${links.email}`,
      label: 'Email',
      icon: Mail,
      external: false,
    });
  }

  if (!items.length) return null;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const inner = (
          <>
            <Icon className={cn('shrink-0', compact ? 'h-3.5 w-3.5' : 'h-4 w-4')} aria-hidden />
            {!compact ? <span>{item.label}</span> : <span className="sr-only">{item.label}</span>}
          </>
        );

        const linkClass = cn(
          'inline-flex items-center gap-1.5 border border-stone-300 text-stone-800 transition hover:border-stone-800 hover:bg-stone-900 hover:text-white dark:border-stone-600 dark:text-stone-200 dark:hover:border-stone-200 dark:hover:bg-stone-100 dark:hover:text-black',
          compact ? 'rounded-full p-2' : 'rounded-full px-3 py-1.5 text-xs font-medium',
        );

        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label={item.label}
            >
              {inner}
            </a>
          );
        }

        return (
          <a key={item.label} href={item.href} className={linkClass} aria-label={item.label}>
            {inner}
          </a>
        );
      })}
    </div>
  );
}

function NavButton({
  zone,
  active,
  onSelect,
  compact = false,
  accent = fourArtistsZoneAccent,
}: {
  zone: MajorZone;
  active: boolean;
  onSelect: (id: string) => void;
  compact?: boolean;
  accent?: typeof fourArtistsZoneAccent;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(zone.id)}
      aria-current={active ? 'true' : undefined}
      className={cn(
        'flex items-start gap-3 rounded-md text-left transition',
        compact ? 'min-w-[7.5rem] shrink-0 px-3 py-2.5' : 'w-full px-3 py-2.5',
        active
          ? cn(accent.navActive, accent.navActiveText, accent.navMarker)
          : 'border-l-4 border-transparent text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800',
      )}
    >
      <span
        className={cn(
          'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[0.625rem] font-semibold tabular-nums',
          active ? accent.iconActive : accent.iconIdle,
        )}
      >
        {zone.number}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight text-stone-900 dark:text-stone-100">
          {zone.label}
        </span>
        {!compact ? <span className={cn('mt-0.5 block line-clamp-2', dossierTypography.meta)}>{zone.summary}</span> : null}
      </span>
    </button>
  );
}

function ZoneProgressRail({
  zones,
  activeZoneId,
  onSelect,
  accent = fourArtistsZoneAccent,
}: {
  zones: readonly MajorZone[];
  activeZoneId: string;
  onSelect: (id: string) => void;
  accent?: typeof fourArtistsZoneAccent;
}) {
  return (
    <div className="flex items-center gap-1.5 px-3 pb-2 pt-1" role="tablist" aria-label="Section progress">
      {zones.map((zone) => {
        const active = zone.id === activeZoneId;
        return (
          <button
            key={zone.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-label={`${zone.number} ${zone.label}`}
            onClick={() => onSelect(zone.id)}
            className={cn(
              'h-1.5 flex-1 rounded-full transition-all',
              accent.progressDot,
              active ? 'opacity-100' : 'opacity-25 hover:opacity-50',
            )}
          />
        );
      })}
    </div>
  );
}

export function GrantDossierSidebar({
  zones,
  activeZoneId,
  onNavigate,
  portraitSrc,
  portraitAlt,
  applicantName,
  programLabel,
  socialLinks,
}: {
  zones: readonly MajorZone[];
  activeZoneId: string;
  onNavigate: (id: string) => void;
  portraitSrc: string;
  portraitAlt: string;
  applicantName: string;
  programLabel: string;
  socialLinks: GrantDossierSocialLinks;
}) {
  const activeIndex = zones.findIndex((z) => z.id === activeZoneId);
  const accent = fourArtistsZoneAccent;

  return (
    <>
      <nav
        aria-label="Dossier sections"
        className={cn(
          'sticky z-40 mb-6 border border-stone-300 bg-white/95 backdrop-blur lg:hidden dark:border-stone-700 dark:bg-neutral-900/95',
          accent.navTopMarker,
          siteHeaderStickyTopClass,
        )}
      >
        <div className="border-b border-stone-200 px-3 py-3 dark:border-stone-700">
          <div className="flex items-start gap-3">
            <GrantApplicantPortrait src={portraitSrc} alt={portraitAlt} size="compact" imageSizes="56px" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-stone-900 dark:text-stone-100">{applicantName}</p>
              <p className={cn('mt-0.5 line-clamp-2', dossierTypography.meta)}>{programLabel}</p>
              <GrantDossierSocialLinks links={socialLinks} compact className="mt-2.5" />
            </div>
            <p className={cn('shrink-0 tabular-nums', dossierTypography.meta)}>
              {activeIndex + 1}/{zones.length}
            </p>
          </div>
        </div>
        <ZoneProgressRail zones={zones} activeZoneId={activeZoneId} onSelect={onNavigate} />
        <div className="flex gap-2 overflow-x-auto overscroll-x-contain px-2 pb-2 [-webkit-overflow-scrolling:touch]">
          {zones.map((zone) => (
            <NavButton
              key={zone.id}
              zone={zone}
              active={activeZoneId === zone.id}
              onSelect={onNavigate}
              compact
            />
          ))}
        </div>
      </nav>

      <aside className="hidden lg:block">
        <div className={cn('sticky space-y-6', siteHeaderStickyTopClass)}>
          <div className={cn('overflow-hidden', grantCardClass)}>
            <div className="border-b border-stone-200 px-4 py-4 dark:border-stone-700">
              <p className={cn(dossierTypography.eyebrow, accent.eyebrow)}>{programLabel}</p>
            </div>
            <GrantApplicantPortrait
              src={portraitSrc}
              alt={portraitAlt}
              size="large"
              imageSizes="240px"
              priority
            />
            <div className="border-t border-stone-200 px-4 py-4 dark:border-stone-700">
              <p className="text-base font-semibold text-stone-900 dark:text-stone-100">{applicantName}</p>
              <p className={cn('mt-1', dossierTypography.meta)}>Bakehouse resident artist</p>
              <GrantDossierSocialLinks links={socialLinks} className="mt-4" />
            </div>
          </div>

          <nav aria-label="Dossier sections" className="space-y-1">
            {zones.map((zone) => (
              <NavButton
                key={zone.id}
                zone={zone}
                active={activeZoneId === zone.id}
                onSelect={onNavigate}
              />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
