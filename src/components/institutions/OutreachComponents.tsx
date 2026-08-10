'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  Ear,
  FileText,
  FlaskConical,
  GraduationCap,
  ImageIcon,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Palette,
  Presentation,
  Rocket,
  SlidersHorizontal,
  Sparkles,
  Users,
  Video,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import {
  INST_ACCENT,
  InstPlaceholder,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';
import type { DeliveryStatus, InstMedia } from '@/content/institutions/artistInfrastructure';
import { cn } from '@/lib/utils';

const INST_ICON: Record<string, LucideIcon> = {
  palette: Palette,
  graduation: GraduationCap,
  network: Network,
  workflow: Workflow,
  code: Code2,
  layers: Layers,
  ear: Ear,
  sliders: SlidersHorizontal,
  sparkles: Sparkles,
  file: FileText,
  presentation: Presentation,
  users: Users,
  rocket: Rocket,
  flask: FlaskConical,
  image: ImageIcon,
  mail: Mail,
  building: Building2,
  map: MapPin,
  calendar: CalendarDays,
  video: Video,
};

function InstBigIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && INST_ICON[name]) || Sparkles;
  return <Icon className={cn('h-8 w-8 sm:h-10 sm:w-10', className)} aria-hidden />;
}

/** Compact icon for sticky section chips. */
export function InstNavIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && INST_ICON[name]) || Sparkles;
  return <Icon className={cn('h-3.5 w-3.5', className)} aria-hidden />;
}

export function CreditCaption({
  caption,
  credit,
  date,
  className,
}: {
  caption?: string;
  credit?: string;
  date?: string;
  className?: string;
}) {
  if (!caption && !credit && !date) return null;
  return (
    <figcaption
      className={cn(
        'mt-2 text-left text-xs leading-relaxed text-neutral-600',
        className,
      )}
    >
      {caption ? <span>{caption}</span> : null}
      {(credit || date) && (
        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
          {[credit, date].filter(Boolean).join(' · ')}
        </span>
      )}
    </figcaption>
  );
}

export function DeliveryStatusBadge({ status }: { status: DeliveryStatus }) {
  const map = {
    active: {
      label: 'Active',
      className: INST_ACCENT.emerald.chipActive,
      Icon: CheckCircle2,
    },
    'in-progress': {
      label: 'In progress',
      className: INST_ACCENT.ocean.chipActive,
      Icon: Sparkles,
    },
    prototype: {
      label: 'Prototype',
      className: INST_ACCENT.sky.chipActive,
      Icon: Lightbulb,
    },
    proposed: {
      label: 'Proposed',
      className: INST_ACCENT.copper.chipActive,
      Icon: Sparkles,
    },
    completed: {
      label: 'Completed',
      className: INST_ACCENT.teal.chipActive,
      Icon: CheckCircle2,
    },
  } as const;
  const { label, className, Icon } = map[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]',
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {label}
    </span>
  );
}

function MediaFrame({
  media,
  priority,
  aspect = 'aspect-[16/9]',
}: {
  media: InstMedia;
  priority?: boolean;
  aspect?: string;
}) {
  return (
    <figure className="group/media">
      <div
        className={cn(
          'relative w-full overflow-hidden bg-neutral-200 transition duration-300 group-hover/media:shadow-lg',
          aspect,
        )}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          className="object-cover transition duration-700 ease-out group-hover/media:scale-[1.04] motion-reduce:group-hover/media:scale-100"
          sizes="(max-width: 768px) 100vw, 960px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent opacity-60" />
      </div>
      <CreditCaption
        caption={media.caption}
        credit={media.credit}
        date={media.date}
      />
    </figure>
  );
}

export function InstitutionalHero({
  kicker,
  headline,
  subhead,
  availability,
  primaryCta,
  secondaryCta,
  image,
  imageNote,
}: {
  kicker: string;
  headline: string;
  subhead: string;
  availability?: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string; external?: boolean };
  image: InstMedia;
  imageNote?: string;
}) {
  return (
    <header id="hero" className="scroll-mt-28 border-b border-neutral-200">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-10 lg:px-8">
        <InstReveal>
          <InstSectionLabel accent="ink">{kicker}</InstSectionLabel>
          <h1
            className="mt-2 font-[MoMA_Sans] text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.35rem]"
          >
            {headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            {subhead}
          </p>
          {availability ? (
            <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-neutral-800">
              {availability}
            </p>
          ) : null}
          <div className="mt-7 flex flex-wrap gap-3">
            <InstPrimaryCta
              href={primaryCta.href}
              label={primaryCta.label}
              external={primaryCta.external}
            />
            <InstSecondaryCta
              href={secondaryCta.href}
              label={secondaryCta.label}
              external={secondaryCta.external}
            />
          </div>
        </InstReveal>
        <InstReveal delay={0.08} className="min-w-0">
          <MediaFrame media={image} priority aspect="aspect-[4/3] sm:aspect-[16/10]" />
          {imageNote ? (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              {imageNote}
            </p>
          ) : null}
        </InstReveal>
      </div>
    </header>
  );
}

export function ContextProofStrip({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: readonly {
    id: string;
    label: string;
    body: string;
    icon?: string;
    accent?: keyof typeof INST_ACCENT;
  }[];
}) {
  return (
    <section
      id="context"
      className="scroll-mt-28 border-b border-neutral-200 bg-[#f7f6f3] py-8 sm:py-10"
      aria-labelledby="context-proof-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <InstReveal>
          <h2 id="context-proof-heading" className="sr-only">
            {eyebrow}
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            {eyebrow}
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {items.map((item, i) => {
              const accent = item.accent ?? (['teal', 'ocean', 'copper'] as const)[i % 3]!;
              return (
                <li
                  key={item.id}
                  className={cn(
                    'group relative overflow-hidden border border-neutral-200 bg-white p-4 transition duration-300',
                    'hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]',
                    'motion-reduce:hover:translate-y-0',
                    INST_ACCENT[accent].ring,
                    'ring-1 ring-inset',
                  )}
                >
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80',
                      INST_ACCENT[accent].soft,
                    )}
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100 motion-reduce:hidden"
                    aria-hidden
                  />
                  <div className="relative z-10 flex items-start gap-3">
                    <span
                      className={cn(
                        'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md transition duration-300 group-hover:scale-110',
                        INST_ACCENT[accent].iconBg,
                      )}
                    >
                      <InstBigIcon name={item.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight text-neutral-950">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </InstReveal>
      </div>
    </section>
  );
}

export function PositioningTriad({
  eyebrow,
  title,
  lead,
  cards,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  cards: readonly {
    id: string;
    title: string;
    body: string;
    accent: keyof typeof INST_ACCENT;
    icon?: string;
    image?: { src: string; alt: string };
  }[];
}) {
  return (
    <section id="positioning" className="scroll-mt-28 py-12 sm:py-16">
      <InstReveal>
        <InstSectionLabel accent="ink">{eyebrow}</InstSectionLabel>
        <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {lead}
        </p>
      </InstReveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <InstReveal key={card.id} delay={0.05 * i}>
            <li
              className={cn(
                'group relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white',
                'transition duration-300 hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.99]',
                'motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100',
                INST_ACCENT[card.accent].ring,
                'ring-1 ring-inset',
              )}
            >
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90',
                  INST_ACCENT[card.accent].soft,
                )}
                aria-hidden
              />
              {card.image ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 to-transparent" />
                  <span
                    className={cn(
                      'absolute bottom-3 left-3 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition group-hover:scale-110',
                      INST_ACCENT[card.accent].iconBg,
                    )}
                  >
                    <InstBigIcon name={card.icon} />
                  </span>
                </div>
              ) : (
                <div className="relative p-5 pb-0 sm:p-6 sm:pb-0">
                  <span
                    className={cn(
                      'flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition group-hover:scale-110',
                      INST_ACCENT[card.accent].iconBg,
                    )}
                  >
                    <InstBigIcon name={card.icon} />
                  </span>
                </div>
              )}
              <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                <span
                  className={cn('mb-3 block h-1.5 w-10', INST_ACCENT[card.accent].bar)}
                  aria-hidden
                />
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{card.body}</p>
              </div>
            </li>
          </InstReveal>
        ))}
      </ul>
    </section>
  );
}

export function CurriculumModuleCard({
  module,
  defaultOpen = false,
}: {
  module: {
    id: string;
    title: string;
    promise: string;
    audience: string;
    formats: readonly string[];
    artifact: string;
    takeHome: string;
    equipment: string;
    options: readonly string[];
    href: string;
    accent?: keyof typeof INST_ACCENT;
    icon?: string;
    image?: { src: string; alt: string };
  };
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const accent = module.accent ?? 'ocean';
  const rows = [
    { label: 'Audience', value: module.audience },
    { label: 'Formats', value: module.formats.join(' · ') },
    { label: 'What they make', value: module.artifact },
    { label: 'Take home', value: module.takeHome },
    { label: 'Equipment', value: module.equipment },
    { label: 'Options', value: module.options.join(' · ') },
  ];

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white',
        'border-l-[3px] transition duration-300',
        'hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0',
        open ? 'shadow-md ring-1 ring-neutral-200' : '',
        accent === 'ocean' && 'border-l-sky-700',
        accent === 'teal' && 'border-l-teal-700',
        accent === 'copper' && 'border-l-amber-700',
        accent === 'ink' && 'border-l-neutral-900',
      )}
    >
      {module.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
          <Image
            src={module.image.src}
            alt={module.image.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 to-transparent" />
          <span
            className={cn(
              'absolute bottom-3 left-3 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg',
              INST_ACCENT[accent].iconBg,
            )}
          >
            <InstBigIcon name={module.icon} />
          </span>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-3 p-5 text-left sm:p-6"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="min-w-0 flex-1">
          <p className={cn('font-mono text-[10px] uppercase tracking-[0.16em]', INST_ACCENT[accent].text)}>
            Module
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            {module.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">{module.promise}</p>
          <p className="mt-3 text-xs font-medium text-neutral-500">
            {open ? 'Hide details' : 'Expand · audience, formats, take-homes'}
          </p>
        </div>
        <ChevronDown
          className={cn('mt-1 h-5 w-5 shrink-0 text-neutral-400 transition', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open ? (
        <div id={panelId} className="border-t border-neutral-100 px-5 pb-5 sm:px-6 sm:pb-6">
          <dl className="space-y-3 pt-4">
            {rows.map((row) => (
              <div key={row.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  {row.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-neutral-800">{row.value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href={module.href}
            className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-neutral-950 underline-offset-4 hover:underline"
          >
            Open related page
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      ) : null}
    </article>
  );
}

export function CaseStudyIntro({
  eyebrow,
  title,
  lead,
  credit,
  contractNote,
  href,
  hrefLabel,
  points,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  credit?: string;
  contractNote?: string;
  href: string;
  hrefLabel: string;
  points?: readonly string[];
}) {
  return (
    <div>
      <InstSectionLabel accent="teal">{eyebrow}</InstSectionLabel>
      <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
        {lead}
      </p>
      {credit ? (
        <p className="mt-4 max-w-2xl border-l-2 border-teal-700 pl-4 text-sm leading-relaxed text-neutral-700">
          {credit}
        </p>
      ) : null}
      {contractNote ? (
        <p className="mt-3 max-w-2xl font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
          {contractNote}
        </p>
      ) : null}
      {points?.length ? (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {points.map((point) => (
            <li
              key={point}
              className="group flex items-start gap-2.5 rounded-lg border border-transparent bg-gradient-to-br from-teal-50/60 to-transparent p-2.5 text-sm text-neutral-700 transition hover:border-teal-200 hover:shadow-sm"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-white shadow-sm transition group-hover:scale-110">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
              </span>
              <span className="pt-1">{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 underline-offset-4 hover:underline"
      >
        {hrefLabel}
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
}

export function CaseStudyGallery({
  items,
  neededNote,
}: {
  items: readonly InstMedia[];
  neededNote?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <MediaFrame
            key={item.src}
            media={item}
            aspect={item.category === 'wide' ? 'aspect-[16/10]' : 'aspect-[4/3]'}
          />
        ))}
      </div>
      {neededNote ? (
        <InstPlaceholder label="Additional photography needed" note={neededNote} />
      ) : null}
    </div>
  );
}

export function ProofStrip({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <section id="supporting-proof" className="scroll-mt-28 py-12 sm:py-16">
      <InstReveal>
        <InstSectionLabel accent="copper">{eyebrow}</InstSectionLabel>
        <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {lead}
        </p>
      </InstReveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

export function SupportingProofCard({
  title,
  org,
  body,
  status,
  statusNote,
  href,
  secondaryHref,
  secondaryLabel,
  image,
}: {
  title: string;
  org: string;
  body: string;
  status: DeliveryStatus;
  statusNote?: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image: InstMedia;
}) {
  return (
    <article className="group overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <DeliveryStatusBadge status={status} />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            {org}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
        {statusNote ? (
          <p className="mt-2 text-xs leading-relaxed text-neutral-500">{statusNote}</p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
          >
            Open
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-600 underline-offset-4 hover:underline"
            >
              {secondaryLabel}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function PracticeProjectStrip({
  eyebrow,
  title,
  lead,
  href,
  hrefLabel,
  projects,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  href: string;
  hrefLabel: string;
  projects: readonly {
    id: string;
    title: string;
    body: string;
    href: string;
    image: InstMedia;
    icon?: string;
    accent?: keyof typeof INST_ACCENT;
  }[];
}) {
  return (
    <section id="practice" className="scroll-mt-28 py-12 sm:py-16">
      <InstReveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <InstSectionLabel accent="rose">{eyebrow}</InstSectionLabel>
            <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              {lead}
            </p>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
          >
            {hrefLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </InstReveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {projects.map((project, i) => {
          const accent = project.accent ?? (['rose', 'ink', 'teal'] as const)[i % 3]!;
          return (
            <InstReveal key={project.id} delay={0.05 * i}>
              <li>
                <Link
                  href={project.href}
                  className={cn(
                    'group relative block overflow-hidden border border-neutral-200 bg-white transition duration-300',
                    'hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.99]',
                    'motion-reduce:hover:translate-y-0',
                    INST_ACCENT[accent].ring,
                    'ring-1 ring-inset',
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent" />
                    <span
                      className={cn(
                        'absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition group-hover:scale-110',
                        INST_ACCENT[accent].iconBg,
                      )}
                    >
                      <InstBigIcon name={project.icon ?? 'sparkles'} className="h-7 w-7" />
                    </span>
                    <span
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100 motion-reduce:hidden"
                      aria-hidden
                    />
                  </div>
                  <div className="relative p-4 sm:p-5">
                    <h3 className="font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                      {project.body}
                    </p>
                  </div>
                </Link>
              </li>
            </InstReveal>
          );
        })}
      </ul>
    </section>
  );
}

export function EngagementFormatCards({
  eyebrow,
  title,
  availability,
  formats,
}: {
  eyebrow: string;
  title: string;
  availability: string;
  formats: readonly { id: string; title: string; body: string; icon?: string }[];
}) {
  const [openId, setOpenId] = useState<string | null>(formats[0]?.id ?? null);

  return (
    <section id="engagement" className="scroll-mt-28 py-12 sm:py-16">
      <InstReveal>
        <InstSectionLabel accent="ocean">{eyebrow}</InstSectionLabel>
        <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-800 sm:text-base">
          {availability}
        </p>
      </InstReveal>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {formats.map((format, i) => {
          const open = openId === format.id;
          return (
            <InstReveal key={format.id} delay={0.05 * i}>
              <li>
                <button
                  type="button"
                  aria-expanded={open}
                  className={cn(
                    'group flex w-full items-start gap-4 border border-neutral-200 bg-white p-5 text-left transition duration-300 sm:p-6',
                    'hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]',
                    'motion-reduce:hover:translate-y-0',
                    open && 'border-sky-300 shadow-md ring-1 ring-sky-200/80',
                  )}
                  onClick={() => setOpenId(open ? null : format.id)}
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-md transition group-hover:scale-110">
                    <InstBigIcon name={format.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-800">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">{format.title}</h3>
                    {open ? (
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{format.body}</p>
                    ) : (
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                        {format.body}
                      </p>
                    )}
                    <span className="mt-2 inline-block text-xs font-medium text-neutral-500">
                      {open ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      'mt-1 h-5 w-5 shrink-0 text-neutral-400 transition',
                      open && 'rotate-180',
                    )}
                    aria-hidden
                  />
                </button>
              </li>
            </InstReveal>
          );
        })}
      </ul>
    </section>
  );
}

export function EngagementProcess({
  eyebrow,
  title,
  valueLine,
  steps,
}: {
  eyebrow: string;
  title: string;
  valueLine: string;
  steps: readonly { id: string; title: string; body: string; icon?: string }[];
}) {
  return (
    <section id="process" className="scroll-mt-28 py-12 sm:py-16">
      <InstReveal>
        <InstSectionLabel accent="teal">{eyebrow}</InstSectionLabel>
        <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {valueLine}
        </p>
      </InstReveal>

      <div className="mt-8 overflow-x-auto">
        <ol
          className="flex min-w-[40rem] items-stretch gap-3 sm:min-w-0 sm:grid sm:grid-cols-4"
          aria-label="Engagement process"
        >
          {steps.map((step, i) => (
            <li
              key={step.id}
              className="group relative flex flex-1 flex-col border border-neutral-200 bg-gradient-to-br from-teal-50/80 via-white to-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 motion-reduce:hover:translate-y-0"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-md transition group-hover:scale-110">
                <InstBigIcon name={step.icon} />
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-teal-800">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
        Artist need → workshop / prototype → working artifact → documentation / system → continued use
      </p>
    </section>
  );
}

export function MediaNeededStrip({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly { id: string; title: string; note: string; status?: string; icon?: string }[];
}) {
  return (
    <section id="media-needed" className="scroll-mt-28 border-t border-neutral-200 py-12 sm:py-16">
      <InstReveal>
        <InstSectionLabel accent="copper">{eyebrow}</InstSectionLabel>
        <h2 className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {lead}
        </p>
      </InstReveal>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <InstReveal key={item.id} delay={0.05 * i}>
            <li className="group flex h-full flex-col border border-dashed border-amber-400/70 bg-gradient-to-br from-amber-50/90 to-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md active:scale-[0.99]">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-700 text-white shadow-md transition group-hover:scale-110">
                <InstBigIcon name={item.icon ?? 'video'} className="h-7 w-7" />
              </span>
              <span className="inline-flex w-fit rounded-full border border-amber-500/50 bg-amber-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-950">
                Slot open
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.note}</p>
            </li>
          </InstReveal>
        ))}
      </ul>
    </section>
  );
}

export function ClaimsHonesty({
  eyebrow,
  title,
  lead,
  points,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  points: readonly string[];
}) {
  return (
    <section
      id="claims"
      className="scroll-mt-28 border-t border-neutral-200 py-12 sm:py-16"
      aria-labelledby="claims-heading"
    >
      <InstReveal>
        <InstSectionLabel accent="ink">{eyebrow}</InstSectionLabel>
        <h2
          id="claims-heading"
          className="font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {lead}
        </p>
        <ul className="mt-6 max-w-3xl space-y-3">
          {points.map((point) => (
            <li
              key={point.slice(0, 48)}
              className="flex items-start gap-3 border-l-2 border-neutral-300 pl-4 text-sm leading-relaxed text-neutral-700"
            >
              {point}
            </li>
          ))}
        </ul>
      </InstReveal>
    </section>
  );
}

export function InstitutionalCTA({
  eyebrow,
  title,
  lead,
  email,
  emailSubject,
  calendlyHref,
  calendlyLabel,
  secondaryLinks,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  email: string;
  emailSubject: string;
  calendlyHref: string;
  calendlyLabel: string;
  secondaryLinks?: readonly { label: string; href: string }[];
}) {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-neutral-200 bg-neutral-950 py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <InstReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-[MoMA_Sans] text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {lead}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={calendlyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              {calendlyLabel}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </a>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}`}
              className="inline-flex min-h-11 items-center justify-center border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white"
            >
              Email {email}
            </a>
          </div>
          {secondaryLinks?.length ? (
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/70">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </InstReveal>
      </div>
    </section>
  );
}
