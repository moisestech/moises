'use client';

import Link from 'next/link';
import { MonitorSmartphone } from 'lucide-react';
import { bakehouseSmartSigns } from '@/content/institutions/bakehouse-smart-signs';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstPlaceholder,
  InstReveal,
  InstSectionLabel,
  INST_ACCENT,
  INST_ANCHOR_SCROLL_MT_CLASS,
  INST_FAMILY_STICKY_CLASS,
  INST_PAGE_TOP_CLASS,
  INST_SECTION_STICKY_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const S = bakehouseSmartSigns;

const SECTION_NAV = [
  { id: 'audience', label: 'Who' },
  { id: 'proven', label: 'Proven' },
  { id: 'withheld', label: 'Withheld' },
  { id: 'media', label: 'Media' },
  { id: 'next', label: 'Next' },
] as const;

export function BakehouseSmartSignsClient() {
  return (
    <InstPageShell className={INST_PAGE_TOP_CLASS}>
      <InstFamilyNav active="bakehouse" className={INST_FAMILY_STICKY_CLASS} />

      <nav
        className={cn(
          INST_SECTION_STICKY_CLASS,
          'border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur',
        )}
        aria-label="Smart Signs sections"
        data-inst-section-nav
      >
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'shrink-0 border px-3 py-1.5 text-xs font-medium transition',
                INST_ACCENT.emerald.chip,
              )}
            >
              {item.label}
            </a>
          ))}
        </InstContainer>
      </nav>

      <header className="border-b border-neutral-200">
        <InstContainer className="py-12 sm:py-16 lg:py-20">
          <InstReveal>
            <InstSectionLabel accent="emerald">{S.hero.eyebrow}</InstSectionLabel>
            <h1 className="max-w-3xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              {S.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {S.hero.lead}
            </p>
            <div className="mt-6 inline-flex items-start gap-2 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-950">
              <MonitorSmartphone className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>
                {S.hero.status}
                <span className="mt-1 block font-normal text-emerald-900/80">{S.hero.statusNote}</span>
              </span>
            </div>
          </InstReveal>
        </InstContainer>
      </header>

      <section id="audience" className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>{S.audience.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {S.audience.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              {S.audience.body}
            </p>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="proven" className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="emerald">{S.proven.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {S.proven.title}
            </h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {S.proven.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-emerald-700 bg-white/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="withheld" className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">{S.withheld.eyebrow}</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {S.withheld.title}
            </h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {S.withheld.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-amber-700 bg-amber-50/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-4">
              {S.distinctions.map((item) => (
                <li key={item.href} className="max-w-3xl text-sm leading-relaxed text-neutral-700">
                  <Link href={item.href} className="font-semibold underline underline-offset-4">
                    {item.label}
                  </Link>
                  {' — '}
                  {item.body}
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="media" className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="copper">Media</InstSectionLabel>
            <h2 className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Install photography is not published yet
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              These slots stay empty until a permission-cleared still exists. Artist portraits used on the screens, and website screenshots, are not installation proof.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {S.placeholders.map((slot) => (
                <InstPlaceholder key={slot.label} label={slot.label} note={slot.note} />
              ))}
            </div>
          </InstReveal>
        </InstContainer>
      </section>

      <section id="next" className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'py-12 sm:py-16')}>
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>Next</InstSectionLabel>
            <h2 className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">Where to go from here</h2>
            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {S.next.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-semibold underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </InstReveal>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}
