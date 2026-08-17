'use client';

import Image from 'next/image';
import Link from 'next/link';
import { icaMiamiPage as P } from '@/content/institutions/icaMiami';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';
import { IcaSystemsDiagram } from '@/components/institutions/IcaSystemsDiagram';

export function IcaMiamiPageClient() {
  return (
    <InstPageShell className="pt-[192px]">
      <OpportunityApplicationBanner banner={P.banner} className="mb-0" />
      {P.bannerNote ? (
        <p className="border-b border-neutral-200 bg-amber-50/80 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-amber-950 sm:px-6">
          {P.bannerNote}
        </p>
      ) : null}
      <InstFamilyNav active="institutions" className="sticky top-0 z-40" />
      <header className="border-b border-neutral-200">
        <InstContainer className="py-14 sm:py-20">
          <InstReveal>
            <InstSectionLabel accent="ocean">{P.hero.eyebrow}</InstSectionLabel>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
              {P.hero.status} · {P.hero.dates}
            </p>
            <h1 className="mt-3 max-w-3xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              {P.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {P.hero.lead}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
              {P.hero.availability}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InstPrimaryCta
                href={P.ctas.primary.href}
                label={P.ctas.primary.label}
                external
                onClick={() => track('institutions_cta_click', { placement: 'ica_hero' })}
              />
              <InstSecondaryCta href={P.ctas.back.href} label={P.ctas.back.label} />
            </div>
          </InstReveal>
        </InstContainer>
      </header>

      <section className="border-b border-neutral-200 py-14 sm:py-16" aria-labelledby="ica-diagram-heading">
        <InstContainer>
          <InstReveal>
            <h2 id="ica-diagram-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Salesforce, web, and livestream as one workflow
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              The public site, collection data, ticketing, and remote programs had to stay connected without a new vendor for every update.
            </p>
            <IcaSystemsDiagram className="mt-8" />
          </InstReveal>
        </InstContainer>
      </section>

      <section className="border-b border-neutral-200 py-14 sm:py-16" aria-labelledby="ica-capabilities-heading">
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="ocean">Verified capabilities</InstSectionLabel>
            <h2 id="ica-capabilities-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              What the Digital Producer role covered
            </h2>
          </InstReveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {P.capabilities.map((item) => (
              <li key={item.title} className="border border-neutral-200 bg-white p-5">
                <h3 className="font-['MoMA_Sans'] text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section className="border-b border-neutral-200 py-14 sm:py-16" aria-labelledby="ica-sequence-heading">
        <InstContainer>
          <InstReveal>
            <h2 id="ica-sequence-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Need → system → use → capacity
            </h2>
          </InstReveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {P.proofSequence.map((step) => (
              <div key={step.stage} className="border-l-2 border-sky-700 bg-sky-50/50 py-3 pl-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-sky-900">{step.stage}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-neutral-800">{step.text}</dd>
              </div>
            ))}
          </dl>
        </InstContainer>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="ica-later-heading">
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>{P.laterContext.title}</InstSectionLabel>
            <h2 id="ica-later-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
              Exhibition credit, not employment proof
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              {P.laterContext.body}
            </p>
            <figure className="mt-8 max-w-xl">
              <div className="relative aspect-[16/7] overflow-hidden bg-neutral-200">
                <Image
                  src={P.laterContext.image.src}
                  alt={P.laterContext.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 576px"
                />
              </div>
              <figcaption className="mt-2 text-xs text-neutral-500">
                {P.laterContext.image.alt}
              </figcaption>
            </figure>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InstPrimaryCta
                href={P.ctas.primary.href}
                label={P.ctas.primary.label}
                external
                onClick={() => track('institutions_cta_click', { placement: 'ica_footer' })}
              />
              <Link
                href={`mailto:${P.ctas.email}`}
                className="inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium"
              >
                {P.ctas.email}
              </Link>
            </div>
          </InstReveal>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}
