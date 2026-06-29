'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Globe,
  Images,
  Instagram,
  Layers,
  Library,
  Lightbulb,
  Linkedin,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteHeaderExpandedPaddingTopClass, siteHeaderStickyTopClass } from '@/config/site-header-layout';
import { getSsrcZoneAccent } from '@/config/ssrc-zone-accents';
import {
  ssrcJustTechMeta,
  ssrcLogoAssets,
  type SsrcMajorZone,
  type SsrcMajorZoneIcon,
} from '@/content/grants/ssrc-just-tech-fellowship-2027';
import { dossierTypography, grantButtonClass, grantCardClass } from '@/components/grant/dossier/GrantDossierUi';

const zoneIconMap: Record<SsrcMajorZoneIcon, LucideIcon> = {
  sparkles: Sparkles,
  'file-text': FileText,
  lightbulb: Lightbulb,
  layers: Layers,
  globe: Globe,
  library: Library,
  gallery: Images,
  clipboard: ClipboardList,
};

const applicantSocial = ssrcJustTechMeta.social;

export function GrantZoneIcon({
  icon,
  className,
  strokeWidth = 1.75,
}: {
  icon: SsrcMajorZoneIcon;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = zoneIconMap[icon];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}

function SsrcFellowshipLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={ssrcLogoAssets.ssrcJustTech.src}
      alt={ssrcLogoAssets.ssrcJustTech.alt}
      width={280}
      height={72}
      priority={priority}
      className={cn('h-auto w-full max-w-[11rem] object-contain object-left dark:brightness-0 dark:invert', className)}
    />
  );
}

function GrantApplicantPortrait({
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

function ApplicantSocialLinks({ compact = false, className }: { compact?: boolean; className?: string }) {
  const items = [
    {
      href: applicantSocial.linkedin,
      label: 'LinkedIn',
      icon: Linkedin,
      external: true,
    },
    {
      href: applicantSocial.instagram,
      label: 'Instagram',
      icon: Instagram,
      external: true,
    },
    {
      href: applicantSocial.bio,
      label: applicantSocial.bioLabel,
      icon: BookOpen,
      external: false,
    },
  ] as const;

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
          <Link key={item.label} href={item.href} className={linkClass} aria-label={item.label}>
            {inner}
          </Link>
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
}: {
  zone: SsrcMajorZone;
  active: boolean;
  onSelect: (id: string) => void;
  compact?: boolean;
}) {
  const accent = getSsrcZoneAccent(zone.id);

  return (
    <button
      type="button"
      onClick={() => onSelect(zone.id)}
      aria-current={active ? 'step' : undefined}
      className={cn(
        'flex items-center gap-3 rounded-md text-left transition',
        compact ? 'min-w-[7.5rem] shrink-0 px-3 py-2.5' : 'w-full px-3 py-2.5',
        active
          ? cn(accent.navActive, accent.navActiveText, accent.navMarker)
          : 'border-l-4 border-transparent text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800',
      )}
    >
      <span
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-md border',
          active ? accent.iconActive : accent.iconIdle,
        )}
      >
        <GrantZoneIcon icon={zone.icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className={cn('block text-[0.625rem] font-semibold uppercase tracking-[0.18em] opacity-70')}>
          {zone.number}
        </span>
        <span
          className={cn(
            'block text-sm font-semibold leading-tight',
            active ? '' : 'text-stone-900 dark:text-stone-100',
          )}
        >
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
}: {
  zones: readonly SsrcMajorZone[];
  activeZoneId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-1.5 px-3 pb-2 pt-1" role="tablist" aria-label="Section progress">
      {zones.map((zone) => {
        const active = zone.id === activeZoneId;
        const accent = getSsrcZoneAccent(zone.id);
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
              active ? cn(accent.progressDot, 'opacity-100') : cn(accent.progressDot, 'opacity-25 hover:opacity-50'),
            )}
          />
        );
      })}
    </div>
  );
}

export function GrantSectionPagerNav({
  zones,
  activeZoneId,
  onSelect,
  portraitSrc,
  portraitAlt,
  applicantName,
  fellowshipLabel,
}: {
  zones: readonly SsrcMajorZone[];
  activeZoneId: string;
  onSelect: (id: string) => void;
  portraitSrc: string;
  portraitAlt: string;
  applicantName: string;
  fellowshipLabel: string;
}) {
  const activeIndex = zones.findIndex((z) => z.id === activeZoneId);
  const activeAccent = getSsrcZoneAccent(activeZoneId);

  return (
    <>
      {/* Mobile + tablet: horizontal section rail */}
      <nav
        aria-label="Dossier sections"
        className={cn(
          'sticky z-40 mb-6 border border-stone-300 bg-white/95 backdrop-blur lg:hidden dark:border-stone-700 dark:bg-neutral-900/95',
          activeAccent.navTopMarker,
          siteHeaderStickyTopClass,
        )}
      >
        <div className="border-b border-stone-200 px-3 py-3 dark:border-stone-700">
          <div className="flex items-start gap-3">
            <GrantApplicantPortrait src={portraitSrc} alt={portraitAlt} size="compact" imageSizes="56px" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-stone-900 dark:text-stone-100">{applicantName}</p>
              <p className={cn('mt-0.5 line-clamp-2', dossierTypography.meta)}>{fellowshipLabel}</p>
              <ApplicantSocialLinks compact className="mt-2.5" />
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <SsrcFellowshipLogo className="max-w-[5.5rem] sm:max-w-[7rem]" />
              <p className={cn('tabular-nums', dossierTypography.meta)}>
                {activeIndex + 1}/{zones.length}
              </p>
            </div>
          </div>
        </div>
        <ZoneProgressRail zones={zones} activeZoneId={activeZoneId} onSelect={onSelect} />
        <div className="flex gap-2 overflow-x-auto overscroll-x-contain px-2 pb-2 [-webkit-overflow-scrolling:touch]">
          {zones.map((zone) => (
            <NavButton key={zone.id} zone={zone} active={activeZoneId === zone.id} onSelect={onSelect} compact />
          ))}
        </div>
      </nav>

      {/* Desktop: sidebar with SSRC logo, portrait, social, and sections */}
      <aside className="hidden lg:block">
        <div className={cn('sticky space-y-6', siteHeaderStickyTopClass)}>
          <div className={cn('overflow-hidden', grantCardClass)}>
            <div className="border-b border-stone-200 px-4 py-4 dark:border-stone-700">
              <SsrcFellowshipLogo priority className="max-w-[12.5rem]" />
            </div>
            <GrantApplicantPortrait src={portraitSrc} alt={portraitAlt} size="large" imageSizes="240px" priority />
            <div className="border-t border-stone-200 px-4 py-4 dark:border-stone-700">
              <p className="text-base font-semibold text-stone-900 dark:text-stone-100">{applicantName}</p>
              <p className={cn('mt-1', dossierTypography.meta)}>{fellowshipLabel}</p>
              <ApplicantSocialLinks className="mt-4" />
            </div>
          </div>

          <nav aria-label="Dossier sections" className="space-y-1">
            {zones.map((zone) => (
              <NavButton key={zone.id} zone={zone} active={activeZoneId === zone.id} onSelect={onSelect} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

export function GrantSectionHero({ zone }: { zone: SsrcMajorZone }) {
  const accent = getSsrcZoneAccent(zone.id);

  return (
    <figure className={cn('mb-8 overflow-hidden', grantCardClass)}>
      <div className={cn('relative aspect-[21/9] w-full sm:aspect-[2.4/1]', accent.sectionBorder, 'border-b')}>
        <Image
          src={zone.image.src}
          alt={zone.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 880px"
          priority={zone.id === 'opening'}
        />
      </div>
      {zone.image.caption ? (
        <figcaption
          className={cn(
            'border-t border-stone-200 px-4 py-3 pl-3 dark:border-stone-700',
            accent.heroCaptionBorder,
            dossierTypography.meta,
          )}
        >
          {zone.image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function GrantSectionPagerFooter({
  zones,
  activeZoneId,
  onSelect,
}: {
  zones: readonly SsrcMajorZone[];
  activeZoneId: string;
  onSelect: (id: string) => void;
}) {
  const activeIndex = zones.findIndex((z) => z.id === activeZoneId);
  const prev = activeIndex > 0 ? zones[activeIndex - 1] : null;
  const next = activeIndex >= 0 && activeIndex < zones.length - 1 ? zones[activeIndex + 1] : null;
  const prevAccent = prev ? getSsrcZoneAccent(prev.id) : null;
  const nextAccent = next ? getSsrcZoneAccent(next.id) : null;
  const activeAccent = getSsrcZoneAccent(activeZoneId);

  return (
    <footer className={cn('mt-12 border-t-2 pt-8', activeAccent.sectionBorder)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {prev && prevAccent ? (
          <button type="button" onClick={() => onSelect(prev.id)} className={cn(grantButtonClass, 'gap-3')}>
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-md border', prevAccent.iconIdle)}>
              <GrantZoneIcon icon={prev.icon} className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[0.625rem] uppercase tracking-[0.16em] opacity-70">Previous</span>
              <span className="block text-sm">{prev.label}</span>
            </span>
          </button>
        ) : (
          <span />
        )}

        <p className={cn('text-center', dossierTypography.meta, activeAccent.eyebrow)}>
          Section {activeIndex + 1} of {zones.length}
        </p>

        {next && nextAccent ? (
          <button
            type="button"
            onClick={() => onSelect(next.id)}
            className={cn(grantButtonClass, 'gap-3 sm:ml-auto', nextAccent.sectionBorder, 'border-2')}
          >
            <span className="text-left sm:text-right">
              <span className={cn('block text-[0.625rem] uppercase tracking-[0.16em] opacity-70', nextAccent.eyebrow)}>
                Continue to
              </span>
              <span className="block text-sm">{next.label}</span>
            </span>
            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-md border', nextAccent.iconIdle)}>
              <GrantZoneIcon icon={next.icon} className="h-4 w-4" />
            </span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </button>
        ) : (
          <span />
        )}
      </div>
    </footer>
  );
}

export { siteHeaderExpandedPaddingTopClass };
