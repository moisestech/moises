'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Calendar } from 'lucide-react';
import { artistSustainabilityPage } from '@/content/institutions/artistSustainability';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const P = artistSustainabilityPage;

const statusStyles = {
  demonstrated: 'border-emerald-300 bg-emerald-50 text-emerald-900',
  transferable: 'border-sky-300 bg-sky-50 text-sky-900',
  todo: 'border-stone-300 bg-stone-100 text-stone-700',
} as const;

const statusLabels = {
  demonstrated: 'Demonstrated',
  transferable: 'Transferable',
  todo: 'Pending',
} as const;

export function ArtistSustainabilityClient() {
  const [activeId, setActiveId] = useState<string>(P.nav[0]?.id ?? 'overview');

  useEffect(() => {
    const ids = P.nav.map((n) => n.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveId(id);
  };

  return (
    <InstPageShell>
      <p className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-[11px] leading-relaxed text-amber-950 sm:text-xs">
        {P.visibilityNote}
      </p>
      <InstFamilyNav className="sticky top-0 z-40" />

      <nav
        className="sticky top-[41px] z-30 border-b border-neutral-200 bg-[#f7f6f3]/90 backdrop-blur"
        aria-label="Section navigation"
      >
        <InstContainer className="flex gap-1.5 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {P.nav.map((item) => {
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition',
                  active
                    ? 'border-neutral-950 bg-neutral-950 text-white'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500',
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </InstContainer>
      </nav>

      <header id="overview" className="scroll-mt-24 border-b border-neutral-200">
        <InstContainer className="py-12 sm:py-16 md:py-20">
          <InstSectionLabel>{P.hero.eyebrow}</InstSectionLabel>
          <h1 className="max-w-4xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {P.hero.headline}
          </h1>
          <p className="mt-3 text-sm font-medium text-neutral-600 sm:text-base">{P.hero.subheadline}</p>
          {P.hero.intro.map((para) => (
            <p key={para.slice(0, 40)} className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700">
              {para}
            </p>
          ))}
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
            {P.hero.availability}
          </p>
        </InstContainer>
      </header>

      <section id="fit" className="scroll-mt-24 border-b border-neutral-200 py-12 sm:py-16" aria-labelledby="fit-heading">
        <InstContainer>
          <InstSectionLabel>Role alignment</InstSectionLabel>
          <h2 id="fit-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {P.fit.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {P.fit.intro}
          </p>
          <ul className="mt-8 divide-y divide-neutral-200 border border-neutral-200 bg-white">
            {P.fit.rows.map((row) => (
              <li key={row.requirement} className="grid gap-3 p-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-6 sm:p-5">
                <div>
                  <p className="font-medium text-neutral-950">{row.requirement}</p>
                  <span
                    className={cn(
                      'mt-2 inline-flex rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                      statusStyles[row.status],
                    )}
                  >
                    {statusLabels[row.status]}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{row.evidence}</p>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section
        id="programs"
        className="scroll-mt-24 border-b border-neutral-200 py-12 sm:py-16"
        aria-labelledby="programs-heading"
      >
        <InstContainer>
          <InstSectionLabel>Programs</InstSectionLabel>
          <h2 id="programs-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {P.programs.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {P.programs.intro}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {P.programs.points.map((point, index) => (
              <li key={point.title} className="border border-neutral-200 bg-white p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-['MoMA_Sans'] text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{point.body}</p>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section
        id="systems"
        className="scroll-mt-24 border-b border-neutral-200 py-12 sm:py-16"
        aria-labelledby="systems-heading"
      >
        <InstContainer>
          <InstSectionLabel>Operations</InstSectionLabel>
          <h2 id="systems-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {P.systems.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {P.systems.intro}
          </p>
          <ul className="mt-6 space-y-2">
            {P.systems.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-neutral-950 bg-white/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl border border-neutral-200 bg-white p-4 text-sm leading-relaxed text-neutral-600">
            {P.systems.aiNote}
          </p>
        </InstContainer>
      </section>

      <section
        id="evidence"
        className="scroll-mt-24 border-b border-neutral-200 py-12 sm:py-16"
        aria-labelledby="evidence-heading"
      >
        <InstContainer>
          <InstSectionLabel>Evidence</InstSectionLabel>
          <h2 id="evidence-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {P.evidence.title}
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {P.evidence.cards.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="group block h-full border border-neutral-200 bg-white transition hover:border-neutral-400"
                >
                  <div className="relative aspect-[16/10] bg-neutral-200">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-['MoMA_Sans'] text-base font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{card.body}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section id="contact" className="scroll-mt-24 py-12 sm:py-16" aria-labelledby="contact-heading">
        <InstContainer>
          <InstSectionLabel>Contact</InstSectionLabel>
          <h2 id="contact-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {P.contact.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {P.contact.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${P.contact.email}?subject=${encodeURIComponent(P.contact.emailSubject)}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => track('opportunity_cta_click', { opportunitySlug: 'artist-sustainability', kind: 'email' })}
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email Moises
            </a>
            <a
              href={P.contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium"
              onClick={() => track('opportunity_cta_click', { opportunitySlug: 'artist-sustainability', kind: 'calendly' })}
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Calendly
            </a>
          </div>
          <p className="mt-4 text-sm text-neutral-600">{P.contact.site}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {P.contact.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}
