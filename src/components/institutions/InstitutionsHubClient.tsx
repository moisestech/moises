'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { institutionsHub } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstPageShell,
  InstPrimaryCta,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';

const H = institutionsHub;

export function InstitutionsHubClient() {
  return (
    <InstPageShell>
      <header className="border-b border-neutral-200 bg-[#f7f6f3]">
        <InstContainer className="py-14 sm:py-20 md:py-24">
          <InstSectionLabel>{H.hero.eyebrow}</InstSectionLabel>
          <h1 className="max-w-4xl font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {H.hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            {H.hero.lead}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
            {H.hero.availability}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <InstPrimaryCta
              href={H.hero.primaryCta.href}
              label={H.hero.primaryCta.label}
              external={H.hero.primaryCta.external}
              onClick={() =>
                track('cta_institutions_click', { source: 'institutions_hero' })
              }
            />
            <InstSecondaryCta href={H.hero.secondaryCta.href} label={H.hero.secondaryCta.label} />
          </div>
        </InstContainer>
      </header>

      <section className="border-b border-neutral-200 py-14 sm:py-16" aria-labelledby="lanes-heading">
        <InstContainer>
          <InstSectionLabel>What I build with institutions</InstSectionLabel>
          <h2 id="lanes-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            Four lanes of institutional practice
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {H.lanes.map((lane, index) => (
              <li
                key={lane.id}
                className="border border-neutral-200 bg-white p-5 transition hover:border-neutral-400 sm:p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-['MoMA_Sans'] text-lg font-semibold leading-snug">
                  {lane.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{lane.body}</p>
                <Link
                  href={lane.href}
                  className="mt-5 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-neutral-950 underline-offset-4 hover:underline"
                >
                  {lane.linkLabel}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section className="border-b border-neutral-200 py-14 sm:py-16" aria-labelledby="proof-heading">
        <InstContainer>
          <InstSectionLabel>Evidence</InstSectionLabel>
          <h2 id="proof-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {H.proof.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {H.proof.intro}
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {H.proof.cards.map((card) => (
              <li key={card.id}>
                <Link
                  href={card.href}
                  className="group block border border-neutral-200 bg-white transition hover:border-neutral-400 hover:shadow-sm"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-['MoMA_Sans'] text-lg font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{card.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                      Open page
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </InstContainer>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="next-heading">
        <InstContainer>
          <InstSectionLabel>Engagements</InstSectionLabel>
          <h2 id="next-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
            {H.nextSteps.title}
          </h2>
          <ul className="mt-8 space-y-3">
            {H.nextSteps.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-neutral-950 bg-white/60 py-3 pl-4 text-sm leading-relaxed text-neutral-800 sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <InstPrimaryCta
              href={H.hero.primaryCta.href}
              label={H.hero.primaryCta.label}
              external
              onClick={() =>
                track('cta_institutions_click', { source: 'institutions_footer' })
              }
            />
          </div>
        </InstContainer>
      </section>
    </InstPageShell>
  );
}
