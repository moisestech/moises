'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CONCEPTUAL_SYSTEM_VIEW_LABEL } from '@/content/institutions/hub';
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
  INST_FAMILY_STICKY_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { IcaSystemsDiagram } from '@/components/institutions/IcaSystemsDiagram';
import { IcaMiamiAtmosphere } from '@/components/institutions/IcaMiamiAtmosphere';
import { cn } from '@/lib/utils';

export function IcaMiamiPageClient() {
  return (
    <InstPageShell className="relative overflow-hidden pt-[192px]">
      <IcaMiamiAtmosphere />
      <OpportunityApplicationBanner banner={P.banner} className="relative z-[1] mb-0" />
      {P.bannerNote ? (
        <p className="relative z-[1] border-b border-neutral-200/80 bg-[#f7f6f3]/90 px-4 py-3 text-center text-sm leading-relaxed text-neutral-600 sm:px-6">
          {P.bannerNote}
        </p>
      ) : null}
      <InstFamilyNav active="institutions" className={cn(INST_FAMILY_STICKY_CLASS, 'relative z-[1]')} />

      <header className="relative z-[1] border-b border-neutral-200/80">
        <InstContainer className="py-20 sm:py-28">
          <InstReveal>
            <div className="flex flex-wrap items-start justify-between gap-10">
              <div className="min-w-0 max-w-4xl">
                <InstSectionLabel accent="ocean">{P.hero.eyebrow}</InstSectionLabel>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
                  {P.hero.status} · {P.hero.dates}
                </p>
                <h1 className="mt-5 font-['MoMA_Sans'] text-[clamp(2.6rem,6.4vw,5rem)] font-semibold leading-[1.04] tracking-tight">
                  {P.hero.headline}
                </h1>
              </div>
              <Image
                src={P.logo.src}
                alt={P.logo.alt}
                width={P.logo.width}
                height={P.logo.height}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-700 sm:text-xl">
              {P.hero.lead}
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
              {P.hero.availability}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

      <section
        id="art-research-center"
        className="relative z-[1] border-b border-neutral-200/80 py-20 sm:py-28"
        aria-labelledby="ica-arc-heading"
      >
        <InstContainer>
          <InstReveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="max-w-3xl">
                <InstSectionLabel accent="ocean">{P.artResearchCenter.eyebrow}</InstSectionLabel>
                <h2
                  id="ica-arc-heading"
                  className="mt-4 font-['MoMA_Sans'] text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08]"
                >
                  {P.artResearchCenter.title}
                </h2>
              </div>
              <ul className="flex flex-wrap items-center gap-8">
                {P.artResearchCenter.logos.map((logo) => (
                  <li key={logo.alt}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-12 w-auto max-w-[180px] object-contain object-left sm:h-14 sm:max-w-[220px]"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-700">
              {P.artResearchCenter.body}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600">
              {P.artResearchCenter.support}
            </p>
          </InstReveal>
          <ul className="mt-14 grid gap-8 lg:grid-cols-2">
            {P.artResearchCenter.channel.map((item) => (
              <li key={item.src}>
                <figure className="group relative overflow-hidden border border-neutral-200 bg-neutral-950 shadow-[0_24px_80px_-40px_rgba(3,105,161,0.55)]">
                  <div
                    className="flex items-center gap-2 border-b border-white/10 bg-neutral-900 px-4 py-2.5"
                    aria-hidden
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-3 truncate font-mono text-xs tracking-[0.12em] text-white/55">
                      icamiami.org/video
                    </span>
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(min-width: 1024px) 44vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-950/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100 motion-reduce:hidden" />
                  </div>
                  <figcaption className="border-t border-neutral-200 bg-[#f7f6f3] px-5 py-4 text-base leading-relaxed text-neutral-600">
                    {item.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section className="relative z-[1] border-b border-neutral-200/80 py-20 sm:py-28" aria-labelledby="ica-diagram-heading">
        <InstContainer>
          <InstReveal>
            <h2
              id="ica-diagram-heading"
              className="font-['MoMA_Sans'] text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08]"
            >
              Salesforce, web, and livestream as one workflow
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-700">
              The public site, collection data, ticketing, and remote programs had to stay connected without a new vendor for every update.
            </p>
            <IcaSystemsDiagram className="mt-12" />
          </InstReveal>
        </InstContainer>
      </section>

      <section className="relative z-[1] border-b border-neutral-200/80 py-20 sm:py-28" aria-labelledby="ica-capabilities-heading">
        <InstContainer>
          <InstReveal>
            <InstSectionLabel accent="ocean">Verified capabilities</InstSectionLabel>
            <h2
              id="ica-capabilities-heading"
              className="mt-4 font-['MoMA_Sans'] text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08]"
            >
              What the Digital Producer role covered
            </h2>
          </InstReveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {P.capabilities.map((item) => (
              <li
                key={item.title}
                className="group flex h-full flex-col border border-neutral-200 bg-white/80 backdrop-blur-sm transition duration-500 hover:border-sky-300 hover:shadow-[0_24px_60px_-36px_rgba(3,105,161,0.55)] motion-reduce:transition-none"
              >
                {'illustration' in item && item.illustration ? (
                  <figure>
                    <div className="relative aspect-square bg-[#F4F1EA]">
                      <Image
                        src={item.illustration.src}
                        alt={item.illustration.alt}
                        fill
                        className="object-contain transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        sizes="(min-width: 640px) 40vw, 100vw"
                      />
                    </div>
                    <figcaption className="border-b border-neutral-200 bg-[#F4F1EA] px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {CONCEPTUAL_SYSTEM_VIEW_LABEL}
                    </figcaption>
                  </figure>
                ) : null}
                <div className="p-7 sm:p-8">
                  <h3 className="font-['MoMA_Sans'] text-2xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section className="relative z-[1] border-b border-neutral-200/80 py-20 sm:py-28" aria-labelledby="ica-sequence-heading">
        <InstContainer>
          <InstReveal>
            <h2
              id="ica-sequence-heading"
              className="font-['MoMA_Sans'] text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08]"
            >
              Need → system → use → capacity
            </h2>
          </InstReveal>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {P.proofSequence.map((step) => (
              <div key={step.stage} className="border-l-2 border-sky-700 bg-gradient-to-br from-sky-50/80 to-transparent px-6 py-6">
                <dt className="text-sm font-medium uppercase tracking-[0.14em] text-sky-900">{step.stage}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-neutral-800">{step.text}</dd>
              </div>
            ))}
          </dl>
        </InstContainer>
      </section>

      <section className="relative z-[1] py-20 sm:py-28" aria-labelledby="ica-later-heading">
        <InstContainer>
          <InstReveal>
            <InstSectionLabel>{P.laterContext.title}</InstSectionLabel>
            <h2
              id="ica-later-heading"
              className="mt-4 font-['MoMA_Sans'] text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.08]"
            >
              Exhibition credit, not employment proof
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-700">
              {P.laterContext.body}
            </p>
            <figure className="mt-12 max-w-2xl">
              <div className="relative aspect-[16/7] overflow-hidden bg-neutral-200">
                <Image
                  src={P.laterContext.image.src}
                  alt={P.laterContext.image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-neutral-500">
                {P.laterContext.image.alt}
              </figcaption>
            </figure>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <InstPrimaryCta
                href={P.ctas.primary.href}
                label={P.ctas.primary.label}
                external
                onClick={() => track('institutions_cta_click', { placement: 'ica_footer' })}
              />
              <Link
                href={`mailto:${P.ctas.email}`}
                className="inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-white px-5 py-2.5 text-base font-medium"
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
