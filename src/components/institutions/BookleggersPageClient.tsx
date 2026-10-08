'use client';

import Image from 'next/image';
import Link from 'next/link';
import { bookleggersPage as P } from '@/content/institutions/bookleggers';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
  INST_ACCENT,
  INST_ANCHOR_SCROLL_MT_CLASS,
  INST_FAMILY_STICKY_CLASS,
  INST_PAGE_TOP_CLASS,
  INST_SECTION_STICKY_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const SECTION_NAV = [
  { id: 'case', label: 'Case' },
  { id: 'tools', label: 'Tools' },
  { id: 'handoff', label: 'Handoff' },
] as const;

export function BookleggersPageClient() {
  return (
    <InstPageShell className={INST_PAGE_TOP_CLASS}>
      <InstFamilyNav active="bookleggers" className={INST_FAMILY_STICKY_CLASS} />

      <nav
        className={cn(
          INST_SECTION_STICKY_CLASS,
          'border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur',
        )}
        aria-label="Bookleggers sections"
        data-inst-section-nav
      >
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'inline-flex min-h-11 shrink-0 items-center border px-3 py-1.5 text-sm font-medium',
                INST_ACCENT.emerald.chip,
              )}
            >
              {item.label}
            </a>
          ))}
        </InstContainer>
      </nav>

      <header className="border-b border-neutral-200">
        <InstContainer className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <InstReveal className="lg:col-span-6">
            <InstSectionLabel accent="emerald">{P.hero.eyebrow}</InstSectionLabel>
            <h1 className="font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              {P.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-800 sm:text-lg">{P.hero.lead}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-700">{P.hero.status}</p>
            <Image
              src={P.hero.logo.src}
              alt={P.hero.logo.alt}
              width={220}
              height={64}
              className="mt-8 h-12 w-auto object-contain"
            />
          </InstReveal>
          <InstReveal className="lg:col-span-6" delay={0.08}>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 ring-2 ring-emerald-700/15">
                <Image
                  src={P.hero.image.src}
                  alt={P.hero.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <figcaption className="mt-2 text-sm leading-relaxed text-neutral-700">{P.hero.image.caption}</figcaption>
            </figure>
          </InstReveal>
        </InstContainer>
      </header>

      <section
        id="case"
        className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-12 sm:py-16')}
        aria-labelledby="case-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="emerald">The handoff</InstSectionLabel>
            <h2 id="case-heading" className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              What the sync is for
            </h2>
          </InstReveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {P.stages.map((step) => (
              <div key={step.id} className="border border-neutral-200 bg-white p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-900">{step.stage}</dt>
                <dd className="mt-2 text-base leading-relaxed text-neutral-800">{step.text}</dd>
              </div>
            ))}
          </dl>
        </InstContainer>
      </section>

      <section
        id="tools"
        className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-12 sm:py-16')}
        aria-labelledby="tools-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="emerald">Tools</InstSectionLabel>
            <h2 id="tools-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Three tools, one view
            </h2>
          </InstReveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {P.tools.map((tool) => (
              <li key={tool.name} className="border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-['MoMA_Sans'] text-xl font-semibold">{tool.name}</p>
                <p className="mt-2 text-base leading-relaxed text-neutral-800">{tool.role}</p>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section
        id="handoff"
        className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'py-12 sm:py-16')}
        aria-labelledby="handoff-heading"
      >
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="emerald">What this informs</InstSectionLabel>
            <h2 id="handoff-heading" className="max-w-3xl font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              {P.bridge}
            </h2>
          </InstReveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InstPrimaryCta
              href={P.primaryCta.href}
              label={P.primaryCta.label}
              external
              onClick={() => track('institutions_cta_click', { placement: 'bookleggers' })}
            />
            <InstSecondaryCta href={`mailto:${P.email}`} label="Email Moises" />
          </div>
          <Link href={P.return.href} className="mt-8 inline-flex min-h-11 items-center text-base font-semibold underline-offset-4 hover:underline">
            {P.return.label}
          </Link>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}
