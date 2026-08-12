'use client';

import { useEffect, useId, useState, type ComponentType } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bot,
  Workflow,
  Layout,
  Palette,
  GraduationCap,
  Database,
  Building2,
  Sparkles,
  Users,
  Compass,
  Rocket,
  Mail,
  ExternalLink,
  ChevronDown,
  type LucideProps,
} from 'lucide-react';
import {
  ai24Page,
  AI24_LOGO_PLACEHOLDER,
  type Ai24Accent,
  type Ai24IconId,
} from '@/content/ai24/page';
import {
  siteHeaderStickyTopClass,
} from '@/config/site-header-layout';
import { cn } from '@/lib/utils';

/** Extra clearance below the live site header so the AI24 logo is never clipped. */
const AI24_HERO_EXTRA_TOP = 'pt-[calc(var(--site-header-expanded-height,10rem)+4.5rem)]';
const AI24_SECTION_SCROLL_MT =
  'scroll-mt-[calc(var(--site-header-height,5rem)+3.75rem)]';

const iconMap: Record<Ai24IconId, ComponentType<LucideProps>> = {
  bot: Bot,
  workflow: Workflow,
  layout: Layout,
  palette: Palette,
  graduation: GraduationCap,
  database: Database,
  building: Building2,
  sparkles: Sparkles,
  users: Users,
  compass: Compass,
  rocket: Rocket,
  mail: Mail,
  external: ExternalLink,
  chevron: ChevronDown,
};

const accentStyles: Record<
  Ai24Accent,
  { chip: string; border: string; icon: string; soft: string; ring: string; dot: string }
> = {
  teal: {
    chip: 'bg-teal-100 text-teal-900 dark:bg-teal-950/60 dark:text-teal-200',
    border: 'border-teal-200 dark:border-teal-800',
    icon: 'text-teal-700 dark:text-teal-300',
    soft: 'bg-teal-50/80 dark:bg-teal-950/30',
    ring: 'focus-visible:outline-teal-500',
    dot: 'bg-teal-600 dark:bg-teal-400',
  },
  sky: {
    chip: 'bg-sky-100 text-sky-900 dark:bg-sky-950/60 dark:text-sky-200',
    border: 'border-sky-200 dark:border-sky-800',
    icon: 'text-sky-700 dark:text-sky-300',
    soft: 'bg-sky-50/80 dark:bg-sky-950/30',
    ring: 'focus-visible:outline-sky-500',
    dot: 'bg-sky-600 dark:bg-sky-400',
  },
  amber: {
    chip: 'bg-amber-100 text-amber-950 dark:bg-amber-950/50 dark:text-amber-100',
    border: 'border-amber-200 dark:border-amber-800',
    icon: 'text-amber-700 dark:text-amber-300',
    soft: 'bg-amber-50/80 dark:bg-amber-950/30',
    ring: 'focus-visible:outline-amber-500',
    dot: 'bg-amber-600 dark:bg-amber-400',
  },
  emerald: {
    chip: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200',
    border: 'border-emerald-200 dark:border-emerald-800',
    icon: 'text-emerald-700 dark:text-emerald-300',
    soft: 'bg-emerald-50/80 dark:bg-emerald-950/30',
    ring: 'focus-visible:outline-emerald-500',
    dot: 'bg-emerald-600 dark:bg-emerald-400',
  },
  rose: {
    chip: 'bg-rose-100 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200',
    border: 'border-rose-200 dark:border-rose-800',
    icon: 'text-rose-700 dark:text-rose-300',
    soft: 'bg-rose-50/80 dark:bg-rose-950/30',
    ring: 'focus-visible:outline-rose-500',
    dot: 'bg-rose-600 dark:bg-rose-400',
  },
  slate: {
    chip: 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
    border: 'border-slate-200 dark:border-slate-700',
    icon: 'text-slate-700 dark:text-slate-300',
    soft: 'bg-slate-50/90 dark:bg-slate-900/50',
    ring: 'focus-visible:outline-slate-500',
    dot: 'bg-slate-600 dark:bg-slate-400',
  },
  cyan: {
    chip: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950/60 dark:text-cyan-200',
    border: 'border-cyan-200 dark:border-cyan-800',
    icon: 'text-cyan-700 dark:text-cyan-300',
    soft: 'bg-cyan-50/80 dark:bg-cyan-950/30',
    ring: 'focus-visible:outline-cyan-500',
    dot: 'bg-cyan-600 dark:bg-cyan-400',
  },
};

function Ai24Icon({ id, className }: { id: Ai24IconId; className?: string }) {
  const Icon = iconMap[id];
  return <Icon className={className} aria-hidden />;
}

function LogoImg({
  src,
  fallbackSrc,
  alt,
  className,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}) {
  const [current, setCurrent] = useState(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}

function Expandable({
  id,
  title,
  body,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  body: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-stone-200 dark:border-stone-700 print:border-stone-300">
      <button
        type="button"
        id={id}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 print:pointer-events-none"
      >
        <span className="text-base font-semibold text-stone-900 dark:text-stone-50 print:text-black">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-stone-500 transition-transform motion-reduce:transition-none dark:text-stone-400 print:hidden',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={cn('pb-4 print:!block', open ? 'block' : 'hidden print:block')}
      >
        <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300 print:text-stone-800">
          {body}
        </p>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  defaultOpen = false,
}: {
  category: (typeof ai24Page.categories)[number];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const styles = accentStyles[category.accent];
  const panelId = `${category.id}-detail`;

  return (
    <article
      className={cn(
        'flex flex-col rounded-2xl border-2 p-5 shadow-sm print:break-inside-avoid print:rounded-none print:border print:border-stone-300 print:shadow-none',
        styles.border,
        styles.soft,
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex w-full items-start gap-3 rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 print:pointer-events-none',
          styles.ring,
        )}
      >
        <span
          className={cn(
            'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 bg-white shadow-sm dark:bg-stone-950/50',
            styles.border,
          )}
        >
          <Ai24Icon id={category.icon} className={cn('h-6 w-6', styles.icon)} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 print:text-black">
              {category.title}
            </h3>
            <ChevronDown
              className={cn(
                'mt-1 h-5 w-5 shrink-0 transition-transform motion-reduce:transition-none print:hidden',
                styles.icon,
                open && 'rotate-180',
              )}
              aria-hidden
            />
          </div>
          <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400 print:text-stone-700">
            {category.summary}
          </p>
          <span
            className={cn(
              'mt-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
              styles.chip,
            )}
          >
            {category.accent}
          </span>
        </div>
      </button>

      <div
        id={panelId}
        className={cn('mt-4 print:!block', open ? 'block' : 'hidden print:block')}
      >
        <ul className="space-y-1.5 border-t border-stone-200/80 pt-4 dark:border-stone-700/80 print:border-stone-300">
          {category.items.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-stone-800 dark:text-stone-200 print:text-stone-900"
            >
              <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', styles.dot)} aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        {category.detail ? (
          <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300 print:text-stone-800">
            {category.detail}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function Ai24PageClient() {
  const p = ai24Page;
  const navId = useId();
  const [activeId, setActiveId] = useState(p.nav[0]?.id ?? 'overview');

  useEffect(() => {
    const sectionIds = p.nav.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [p.nav]);

  return (
    <main
      className={cn(
        'ai24-company-page min-h-screen bg-[linear-gradient(180deg,#fafaf9_0%,#f5f5f4_40%,#fafaf9_100%)] text-stone-900 dark:bg-[linear-gradient(180deg,#0c0a09_0%,#1c1917_50%,#0c0a09_100%)] dark:text-stone-50 print:bg-white print:pt-0 print:text-black',
        AI24_HERO_EXTRA_TOP,
      )}
    >
      {/* Sticky menu — sits below the fixed site header */}
      <nav
        aria-label="AI24 page sections"
        data-ai24-sticky-nav
        className={cn(
          'sticky z-40 border-b border-stone-200/90 bg-stone-50/95 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90 print:hidden',
          siteHeaderStickyTopClass,
        )}
      >
        <div className="mx-auto flex max-w-5xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6">
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-200 bg-white px-2.5 py-1.5 dark:border-stone-700 dark:bg-stone-900"
            aria-label={`${p.liveLabel} (opens in new tab)`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <LogoImg
              src={p.logoSrc}
              fallbackSrc={AI24_LOGO_PLACEHOLDER}
              alt=""
              className="h-7 w-auto"
            />
            <span className="pr-1 text-xs font-semibold text-stone-800 dark:text-stone-100">
              {p.liveLabel}
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-stone-500" aria-hidden />
          </a>
          <ul id={navId} className="flex min-w-0 flex-1 gap-1">
            {p.nav.map((item) => {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      'inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600',
                      active
                        ? 'bg-cyan-600 text-white dark:bg-cyan-500 dark:text-stone-950'
                        : 'text-stone-600 hover:bg-stone-200/80 dark:text-stone-300 dark:hover:bg-stone-800',
                    )}
                    aria-current={active ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <article className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-12 print:max-w-none print:px-0 print:pt-0 print:pb-0">
        {/* Hero */}
        <header
          id="overview"
          className={cn(
            'mb-14 grid gap-8 border-b border-stone-200 pb-12 dark:border-stone-800 lg:grid-cols-[1.1fr_0.9fr] lg:items-center print:mb-10 print:border-stone-300 print:pb-8',
            AI24_SECTION_SCROLL_MT,
          )}
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400">
              {p.hero.eyebrow}
            </p>
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <LogoImg
                src={p.hero.logoSrc}
                fallbackSrc={AI24_LOGO_PLACEHOLDER}
                alt={p.hero.logoAlt}
                className="h-14 w-auto sm:h-20"
              />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {p.hero.title}
              </h1>
            </div>
            <p className="mb-4 text-xl font-medium leading-snug text-stone-700 dark:text-stone-200 sm:text-2xl">
              {p.hero.tagline}
            </p>
            <p className="max-w-[40rem] text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              {p.hero.subhead}
            </p>
            <p className="mt-6 text-base leading-relaxed text-stone-800 dark:text-stone-200">
              {p.positioning}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 print:hidden">
              <a
                href={p.hero.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
              >
                {p.hero.primaryCta.label}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={p.hero.secondaryCta.href}
                className="inline-flex items-center rounded-xl border border-stone-300 bg-white/80 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-50 dark:hover:bg-stone-800"
              >
                {p.hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm dark:border-stone-700 dark:bg-stone-900 print:rounded-none">
            <Image
              src={p.hero.imageSrc}
              alt={p.hero.imageAlt}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 28rem"
            />
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur print:hidden"
            >
              {p.liveLabel}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </header>

        {/* Categories */}
        <section
          id="categories"
          className={cn('mb-16 print:mb-10', AI24_SECTION_SCROLL_MT)}
          aria-labelledby="categories-heading"
        >
          <h2 id="categories-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.categoriesTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-stone-600 dark:text-stone-400">{p.categoriesIntro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {p.categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} defaultOpen={index === 0} />
            ))}
          </div>
        </section>

        {/* Proof */}
        <section
          id="proof"
          className={cn('mb-16 print:mb-10', AI24_SECTION_SCROLL_MT)}
          aria-labelledby="proof-heading"
        >
          <h2 id="proof-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.proof.title}
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400">{p.proof.intro}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {p.proof.cards.map((card) => {
              const styles = accentStyles[card.accent];
              return (
                <article
                  key={card.id}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white/90 shadow-sm dark:border-stone-700 dark:bg-stone-950/50 print:break-inside-avoid print:rounded-none print:shadow-none"
                >
                  <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-900">
                    {card.imageLocal ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        className="absolute inset-0 h-full w-full object-contain p-8"
                      />
                    ) : (
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <span
                      className={cn(
                        'inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold',
                        styles.chip,
                      )}
                    >
                      {card.categoryLabel}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                      {card.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm print:hidden">
                      {card.href && card.hrefLabel ? (
                        <Link
                          href={card.href}
                          className="font-medium text-cyan-800 underline underline-offset-4 hover:text-cyan-950 dark:text-cyan-300 dark:hover:text-cyan-100"
                        >
                          {card.hrefLabel} →
                        </Link>
                      ) : null}
                      {card.externalHref && card.externalLabel ? (
                        <a
                          href={card.externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-stone-700 underline underline-offset-4 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
                        >
                          {card.externalLabel}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Approach */}
        <section
          id="approach"
          className={cn('mb-16 print:mb-10', AI24_SECTION_SCROLL_MT)}
          aria-labelledby="approach-heading"
        >
          <h2 id="approach-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.approach.title}
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400">{p.approach.intro}</p>
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white/80 px-4 dark:border-stone-700 dark:bg-stone-950/40 sm:px-6 print:rounded-none print:border-stone-300">
            {p.approach.items.map((item) => (
              <Expandable
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                defaultOpen={item.defaultOpen}
              />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-100/80 p-5 dark:border-stone-700 dark:bg-stone-900/50 print:rounded-none">
            <h3 className="text-lg font-semibold">{p.growth.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-stone-300">{p.growth.body}</p>
          </div>
        </section>

        {/* Audiences */}
        <section
          id="audiences"
          className={cn('mb-16 print:mb-10', AI24_SECTION_SCROLL_MT)}
          aria-labelledby="audiences-heading"
        >
          <h2 id="audiences-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.audiences.title}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {p.audiences.items.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white/80 px-4 py-3 dark:border-stone-700 dark:bg-stone-950/40 print:rounded-none"
              >
                <Ai24Icon id={item.icon} className="h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />
                <span className="text-base text-stone-800 dark:text-stone-200">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Founder */}
        <section
          id="founder"
          className={cn(
            'mb-16 grid gap-6 sm:grid-cols-[9rem_1fr] print:mb-10',
            AI24_SECTION_SCROLL_MT,
          )}
          aria-labelledby="founder-heading"
        >
          <div className="relative mx-auto aspect-square w-36 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-900 sm:mx-0 sm:w-full print:rounded-none">
            <Image
              src={p.founder.imageSrc}
              alt={p.founder.imageAlt}
              fill
              className="object-cover"
              sizes="9rem"
            />
          </div>
          <div>
            <h2 id="founder-heading" className="text-2xl font-semibold tracking-tight">
              {p.founder.title}
            </h2>
            <p className="mt-2 text-lg font-semibold">{p.founder.name}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-stone-500 dark:text-stone-400">
              {p.founder.role}
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
              {p.founder.body}
            </p>
            <Link
              href={p.founder.profileHref}
              className="mt-4 inline-flex text-sm font-medium text-cyan-800 underline underline-offset-4 dark:text-cyan-300 print:text-black"
            >
              {p.founder.profileLabel} →
            </Link>
          </div>
        </section>

        {/* Research + FAQ */}
        <section className={cn('mb-16 print:mb-10', AI24_SECTION_SCROLL_MT)} aria-labelledby="faq-heading">
          <div className="mb-8 rounded-2xl border-l-4 border-cyan-600 bg-white/80 p-5 dark:border-cyan-400 dark:bg-stone-950/40 print:rounded-none">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              {p.research.title}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-400">{p.research.body}</p>
            <Link
              href={p.research.href}
              className="mt-3 inline-flex text-sm font-medium text-cyan-800 underline underline-offset-4 dark:text-cyan-300"
            >
              {p.research.label} →
            </Link>
          </div>

          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight">
            FAQ
          </h2>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white/80 px-4 dark:border-stone-700 dark:bg-stone-950/40 sm:px-6 print:rounded-none">
            {p.faq.map((item) => (
              <Expandable
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                defaultOpen={item.defaultOpen}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className={cn(
            'border-t border-stone-200 pt-12 dark:border-stone-800 print:border-stone-300 print:pt-8',
            AI24_SECTION_SCROLL_MT,
          )}
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.cta.title}
          </h2>
          <p className="mt-3 max-w-[36rem] text-base leading-relaxed text-stone-700 dark:text-stone-300">
            {p.cta.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={p.cta.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-800 dark:bg-cyan-500 dark:text-stone-950 dark:hover:bg-cyan-400 print:bg-transparent print:text-black print:underline"
            >
              {p.cta.liveLabel}
              <ExternalLink className="h-4 w-4 print:hidden" aria-hidden />
            </a>
            <a
              href={p.cta.emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-900 bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 dark:border-white dark:bg-white dark:text-stone-900 print:border-black print:bg-transparent print:text-black print:underline"
            >
              <Mail className="h-4 w-4 print:hidden" aria-hidden />
              {p.cta.email}
            </a>
            <a
              href={p.cta.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-800 underline underline-offset-4 dark:text-stone-200"
            >
              {p.cta.linkedinLabel}
            </a>
            <Link
              href={p.cta.selectedWorkHref}
              className="text-sm font-medium text-stone-800 underline underline-offset-4 dark:text-stone-200"
            >
              {p.cta.selectedWorkLabel}
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
