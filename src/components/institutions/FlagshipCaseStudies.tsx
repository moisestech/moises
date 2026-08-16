'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { institutionsHub as H, type InstitutionCaseStudy, type PracticeLaneAccent } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  INST_ACCENT,
  InstContainer,
  InstReveal,
  InstSectionLabel,
  LANE_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import { IcaSystemsDiagram } from '@/components/institutions/IcaSystemsDiagram';
import { cn } from '@/lib/utils';

const STATUS_CLASS = {
  shipped: INST_ACCENT.emerald.chipActive,
  operated: INST_ACCENT.teal.chipActive,
  delivered: INST_ACCENT.teal.chipActive,
  active: INST_ACCENT.copper.chipActive,
  proposed: INST_ACCENT.sky.chipActive,
};

function StatusBadge({ label, tone }: { label: string; tone: keyof typeof STATUS_CLASS }) {
  return (
    <span
      className={cn(
        'inline-flex border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]',
        STATUS_CLASS[tone],
      )}
    >
      {label}
    </span>
  );
}

export function FlagshipCaseStudies() {
  return (
    <section
      id="work"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="work-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel>Selected institutional work</InstSectionLabel>
          <h2 id="work-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            Three case studies
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            Oolite, ICA Miami, and Bakehouse first. Locust Projects and exhibition history sit below as additional evidence.
          </p>
        </InstReveal>

        <div className="mt-12 space-y-16">
          {H.flagship.map((study, index) => {
            const accent = INST_ACCENT[LANE_ACCENT[study.primaryLane as PracticeLaneAccent]];
            const reverse = index % 2 === 1;
            return (
              <InstReveal key={study.id}>
                <article
                  id={`work-${study.id}`}
                  className="scroll-mt-32 border border-neutral-200 bg-white"
                >
                  <div className={cn('grid lg:grid-cols-12', reverse && 'lg:[&>*:first-child]:order-2')}>
                    <div className="relative min-h-[240px] bg-neutral-100 lg:col-span-5">
                      {study.media[0] ? (
                        <Image
                          src={study.media[0].src}
                          alt={study.media[0].alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 42vw, 100vw"
                        />
                      ) : 'diagram' in study && study.diagram ? (
                        <div className="flex h-full items-center p-4 sm:p-6">
                          <IcaSystemsDiagram className="w-full" />
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col p-5 sm:p-8 lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge
                          label={study.statusLabel}
                          tone={study.status === 'active' ? 'active' : 'operated'}
                        />
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                          {study.role} · {study.dates}
                        </p>
                      </div>
                      <p className={cn('mt-4 font-mono text-[11px] uppercase tracking-[0.16em]', accent.text)}>
                        {study.institution}
                      </p>
                      <h3 className="mt-2 font-['MoMA_Sans'] text-2xl font-semibold leading-snug sm:text-3xl">
                        {study.headline}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">{study.summary}</p>
                      {'modules' in study && study.modules ? (
                        <ul className="mt-4 space-y-2">
                          {study.modules.map((mod) => (
                            <li key={mod.label} className="flex flex-wrap items-baseline gap-2 text-sm">
                              <StatusBadge
                                label={mod.label}
                                tone={mod.status === 'shipped' ? 'shipped' : 'proposed'}
                              />
                              <span className="text-neutral-700">{mod.text}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                        {study.proofSequence.map((step) => (
                          <div key={step.stage}>
                            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                              {step.stage}
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{step.text}</dd>
                          </div>
                        ))}
                      </dl>
                      <ul className="mt-5 flex flex-wrap gap-3">
                        {study.facts.map((fact) => (
                          <li key={fact.label} className="border border-neutral-200 bg-[#f7f6f3] px-3 py-2">
                            <p className="font-['MoMA_Sans'] text-lg font-semibold">{fact.value}</p>
                            <p className="text-xs text-neutral-600">{fact.label}</p>
                          </li>
                        ))}
                      </ul>
                      {study.media.length > 1 ? (
                        <ul className="mt-5 grid grid-cols-2 gap-2">
                          {study.media.slice(1).map((img) => (
                            <li key={img.src} className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="200px" />
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <Link
                        href={study.href}
                        className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                        onClick={() =>
                          track('institutions_case_study_open', {
                            institution: study.institution,
                            lane: study.primaryLane,
                          })
                        }
                      >
                        {study.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </InstReveal>
            );
          })}
        </div>
      </InstContainer>
    </section>
  );
}

export function AdditionalEvidence() {
  return (
    <section
      id="evidence"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="evidence-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="rose">Additional evidence</InstSectionLabel>
          <h2 id="evidence-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            Workshops, platforms, and exhibition context
          </h2>
        </InstReveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {H.additionalEvidence.map((study, i) => (
            <InstReveal key={study.id} delay={0.03 * i}>
              <li>
                <EvidenceCard study={study} />
              </li>
            </InstReveal>
          ))}
        </ul>

        <div className="mt-16 border border-neutral-950 bg-neutral-950 p-6 text-white sm:p-8">
          <h3 className="font-['MoMA_Sans'] text-xl font-semibold sm:text-2xl">{H.artBand.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">{H.artBand.body}</p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {H.artBand.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70">
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </InstContainer>
    </section>
  );
}

function EvidenceCard({ study }: { study: InstitutionCaseStudy }) {
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
        {study.imageSrc ? (
          <Image
            src={study.imageSrc}
            alt={study.imageAlt || study.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
        <span className="absolute left-3 top-3 border border-white/40 bg-white/90 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]">
          {study.kindLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">{study.org}</p>
        <h3 className="mt-2 font-['MoMA_Sans'] text-lg font-semibold leading-snug">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-700">{study.body}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
          Open
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </>
  );

  const className =
    'group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition hover:shadow-sm';

  if (study.external) {
    return (
      <a href={study.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={study.href} className={className}>
      {inner}
    </Link>
  );
}
