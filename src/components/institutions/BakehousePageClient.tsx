'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Lightbulb, MonitorSmartphone, Sparkles } from 'lucide-react';
import { bakehousePage } from '@/content/institutions/bakehouse';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstPlaceholder,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
  INST_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const B = bakehousePage;

const STATUS = {
  Shipped: {
    className: INST_ACCENT.emerald.chipActive,
    Icon: CheckCircle2,
    accent: 'emerald' as const,
  },
  Proposed: {
    className: INST_ACCENT.sky.chipActive,
    Icon: Lightbulb,
    accent: 'sky' as const,
  },
  'Future opportunity': {
    className: INST_ACCENT.copper.chipActive,
    Icon: Sparkles,
    accent: 'copper' as const,
  },
};

const SECTION_NAV = [
  { id: 'thesis', label: 'Thesis' },
  { id: 'shipped', label: 'Shipped' },
  { id: 'proposed', label: 'Proposed' },
  { id: 'future', label: 'Future' },
  { id: 'ask', label: 'Ask' },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

export function BakehousePageClient() {
  const [activeNav, setActiveNav] = useState('thesis');

  useEffect(() => {
    const ids = SECTION_NAV.map((n) => n.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveNav(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <InstPageShell>
      <InstFamilyNav active="bakehouse" className="sticky top-0 z-40" />

      <nav
        className="sticky top-[45px] z-30 border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur"
        aria-label="Bakehouse sections"
      >
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => {
            const active = activeNav === item.id;
            const bucketStatus =
              item.id === 'shipped'
                ? 'Shipped'
                : item.id === 'proposed'
                  ? 'Proposed'
                  : item.id === 'future'
                    ? 'Future opportunity'
                    : null;
            const accent = bucketStatus
              ? STATUS[bucketStatus].accent
              : item.id === 'ask'
                ? 'copper'
                : 'ink';
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'shrink-0 border px-3 py-1.5 text-xs font-medium transition',
                  active ? INST_ACCENT[accent].chipActive : INST_ACCENT[accent].chip,
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                  setActiveNav(item.id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </InstContainer>
      </nav>

      <header className="border-b border-neutral-200">
        <InstContainer className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <InstReveal className="lg:col-span-6">
            <InstSectionLabel accent="copper">{B.hero.eyebrow}</InstSectionLabel>
            <h1 className="font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              {B.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {B.hero.lead}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              {B.hero.availability}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-950">
              <MonitorSmartphone className="h-3.5 w-3.5" aria-hidden />
              Screens shipped · Portal proposed · Lab partnership next
            </div>
          </InstReveal>
          <InstReveal className="lg:col-span-6" delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 ring-2 ring-amber-700/15">
              <Image
                src={B.hero.image.src}
                alt={B.hero.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              {B.hero.image.label} · {B.hero.image.note}
            </p>
          </InstReveal>
        </InstContainer>
      </header>

      <section
        id="thesis"
        className="scroll-mt-28 border-b border-neutral-200 py-12 sm:py-16"
        aria-labelledby="thesis-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">{B.thesis.eyebrow}</InstSectionLabel>
            <h2 id="thesis-heading" className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {B.thesis.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              {B.thesis.body}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {B.thesis.points.map((point) => (
                <li
                  key={point}
                  className="border-l-2 border-amber-700 bg-amber-50/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-600">
              Artist-owned practice:{' '}
              <a
                href={B.thesis.dcc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4"
              >
                {B.thesis.dcc.fullName} ({B.thesis.dcc.name})
              </a>
            </p>
          </InstReveal>
        </InstContainer>
      </section>

      <div className="space-y-0">
        {B.buckets.map((bucket, index) => {
          const status = STATUS[bucket.status as keyof typeof STATUS] ?? STATUS['Future opportunity'];
          const Icon = status.Icon;
          return (
            <section
              key={bucket.id}
              id={bucket.id}
              className="scroll-mt-28 border-b border-neutral-200 py-12 sm:py-16"
              aria-labelledby={`${bucket.id}-heading`}
            >
              <InstContainer>
                <InstReveal delay={0.04 * index}>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]',
                      status.className,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {bucket.status}
                  </span>
                  <h2
                    id={`${bucket.id}-heading`}
                    className="mt-4 max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl"
                  >
                    {bucket.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
                    {bucket.body}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {bucket.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          'border-l-2 bg-white/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800',
                          status.accent === 'emerald' && 'border-emerald-700',
                          status.accent === 'sky' && 'border-sky-700',
                          status.accent === 'copper' && 'border-amber-700',
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {bucket.placeholders.length ? (
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {bucket.placeholders.map((ph) => (
                        <InstPlaceholder key={ph.label} label={ph.label} note={ph.note} />
                      ))}
                    </div>
                  ) : null}
                </InstReveal>
              </InstContainer>
            </section>
          );
        })}
      </div>

      <section
        id="ask"
        className="scroll-mt-28 border-b border-neutral-200 py-14 sm:py-16"
        aria-labelledby="ask-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">Next conversation</InstSectionLabel>
            <h2 id="ask-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {B.ask.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              {B.ask.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <InstPrimaryCta
                href={B.ask.primaryCta.href}
                label={B.ask.primaryCta.label}
                external={B.ask.primaryCta.external}
                onClick={() => track('cta_institutions_click', { source: 'bakehouse_ask' })}
              />
              <InstSecondaryCta href={B.ask.secondaryCta.href} label={B.ask.secondaryCta.label} />
              <InstSecondaryCta
                href={B.ask.tertiaryCta.href}
                label={B.ask.tertiaryCta.label}
                external={B.ask.tertiaryCta.external}
              />
            </div>
          </InstReveal>
        </InstContainer>
      </section>

      <nav className="py-10" aria-label="Related pages">
        <InstContainer>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {B.related.map((item) => (
              <li key={item.href}>
                {'external' in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </InstContainer>
      </nav>
    </InstPageShell>
  );
}
