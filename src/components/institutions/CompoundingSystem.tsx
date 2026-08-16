'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { institutionsHub as H, type PracticeLaneAccent } from '@/content/institutions/hub';
import {
  INST_ACCENT,
  InstContainer,
  InstReveal,
  InstSectionLabel,
  LANE_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

export function InstitutionalProofStrip() {
  return (
    <section
      id="proof"
      className="scroll-mt-32 border-b border-neutral-200 py-10 sm:py-12"
      aria-labelledby="proof-heading"
    >
      <InstContainer>
        <InstReveal>
          <h2 id="proof-heading" className="sr-only">
            {H.proof.eyebrow}
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            {H.proof.eyebrow}
          </p>
        </InstReveal>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {H.proof.items.map((item, i) => {
            const accent = INST_ACCENT[LANE_ACCENT[item.accent as PracticeLaneAccent]];
            const inner = (
              <>
                <span className={cn('mb-3 block h-1 w-8', accent.bar)} aria-hidden />
                <p className="font-['MoMA_Sans'] text-base font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-neutral-700">{item.role}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                  {item.dates}
                </p>
              </>
            );
            const className = cn(
              'block h-full border border-neutral-200 bg-white p-4 transition hover:shadow-sm',
              accent.ring,
              'hover:ring-2',
            );
            return (
              <InstReveal key={item.id} delay={0.04 * i}>
                <li>
                  {'external' in item && item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={item.href} className={className}>
                      {inner}
                    </Link>
                  )}
                </li>
              </InstReveal>
            );
          })}
        </ul>
      </InstContainer>
    </section>
  );
}

export function CompoundingSystem() {
  return (
    <section
      id="system"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="system-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="teal">{H.system.eyebrow}</InstSectionLabel>
          <h2 id="system-heading" className="max-w-3xl font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            {H.system.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            {H.system.caption}
          </p>
        </InstReveal>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {H.system.steps.map((step, i) => (
            <InstReveal key={step.id} delay={0.04 * i}>
              <li className="h-full border border-neutral-200 bg-white p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-['MoMA_Sans'] text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{step.body}</p>
              </li>
            </InstReveal>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl border-l-2 border-teal-700 bg-teal-50/60 py-3 pl-4 text-sm leading-relaxed text-neutral-800">
          {H.system.callout}
        </p>
      </InstContainer>
    </section>
  );
}
