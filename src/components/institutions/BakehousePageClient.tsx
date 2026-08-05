'use client';

import Image from 'next/image';
import Link from 'next/link';
import { bakehousePage } from '@/content/institutions/bakehouse';
import { track } from '@/lib/analytics';
import {
  InstContainer,
  InstPageShell,
  InstPlaceholder,
  InstPrimaryCta,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';

const B = bakehousePage;

const statusStyles: Record<string, string> = {
  Shipped: 'border-emerald-700/40 bg-emerald-50 text-emerald-950',
  Proposed: 'border-sky-700/40 bg-sky-50 text-sky-950',
  'Future opportunity': 'border-neutral-400 bg-neutral-100 text-neutral-800',
};

export function BakehousePageClient() {
  return (
    <InstPageShell>
      <header className="border-b border-neutral-200">
        <InstContainer className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-6">
            <InstSectionLabel>{B.hero.eyebrow}</InstSectionLabel>
            <h1 className="font-['MoMA_Sans'] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              {B.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              {B.hero.lead}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              {B.hero.availability}
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
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
          </div>
        </InstContainer>
      </header>

      <section
        id="thesis"
        className="scroll-mt-24 border-b border-neutral-200 py-12 sm:py-16"
        aria-labelledby="thesis-heading"
      >
        <InstContainer>
          <InstSectionLabel>{B.thesis.eyebrow}</InstSectionLabel>
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
                className="border-l-2 border-neutral-950 bg-white/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800"
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
        </InstContainer>
      </section>

      <div className="space-y-0">
        {B.buckets.map((bucket) => (
          <section
            key={bucket.id}
            id={bucket.id}
            className="scroll-mt-24 border-b border-neutral-200 py-12 sm:py-16"
            aria-labelledby={`${bucket.id}-heading`}
          >
            <InstContainer>
              <span
                className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${statusStyles[bucket.status] ?? statusStyles['Future opportunity']}`}
              >
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
                    className="border-l-2 border-neutral-950 bg-white/70 py-2.5 pl-3 text-sm leading-relaxed text-neutral-800"
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
            </InstContainer>
          </section>
        ))}
      </div>

      <section className="border-b border-neutral-200 py-14 sm:py-16" aria-labelledby="ask-heading">
        <InstContainer>
          <InstSectionLabel>Next conversation</InstSectionLabel>
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
