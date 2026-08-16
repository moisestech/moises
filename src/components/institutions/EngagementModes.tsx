'use client';

import { Layers3, Search, Wrench, type LucideIcon } from 'lucide-react';
import { institutionsHub as H } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  INST_ACCENT,
  InstContainer,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';

const PROCESS_ICON: Record<(typeof H.process.steps)[number]['icon'], LucideIcon> = {
  search: Search,
  wrench: Wrench,
  layers: Layers3,
};

export function ProcessSteps() {
  return (
    <section
      id="process"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="process-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="teal">{H.process.eyebrow}</InstSectionLabel>
          <h2 id="process-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            {H.process.title}
          </h2>
        </InstReveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {H.process.steps.map((step, i) => {
            const Icon = PROCESS_ICON[step.icon];
            return (
              <InstReveal key={step.id} delay={0.05 * i}>
                <li className="h-full border border-neutral-200 bg-white p-5 sm:p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-neutral-950 text-white" aria-hidden>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 font-['MoMA_Sans'] text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{step.body}</p>
                </li>
              </InstReveal>
            );
          })}
        </ol>
        <ul className="mt-8 flex flex-wrap gap-2">
          {H.process.reassurance.map((item) => (
            <li
              key={item}
              className="border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </InstContainer>
    </section>
  );
}

export function EngagementModes() {
  return (
    <section
      id="engage"
      className="scroll-mt-32 border-b border-neutral-200 py-16 sm:py-20"
      aria-labelledby="engage-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="copper">{H.engagement.eyebrow}</InstSectionLabel>
          <h2 id="engage-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            {H.engagement.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium text-neutral-800">{H.engagement.lead}</p>
        </InstReveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {H.engagement.modes.map((mode, i) => {
            const Icon = PROCESS_ICON[mode.icon];
            const accent = INST_ACCENT[(['ocean', 'teal', 'copper'] as const)[i] ?? 'ink'];
            return (
              <InstReveal key={mode.id} delay={0.05 * i}>
                <li id={`engage-${mode.id}`} className="flex h-full flex-col border border-neutral-200 bg-white p-5 sm:p-6">
                  <span className={`inline-flex h-10 w-10 items-center justify-center ${accent.iconBg}`} aria-hidden>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-['MoMA_Sans'] text-lg font-semibold">{mode.title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                    Typical duration · {mode.duration}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">{mode.outcome}</p>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-500">{mode.bestFor}</p>
                </li>
              </InstReveal>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <InstPrimaryCta
            href={H.engagement.primaryCta.href}
            label={H.engagement.primaryCta.label}
            external
            onClick={() => track('institutions_cta_click', { placement: 'engagement' })}
          />
          <InstSecondaryCta href={H.engagement.secondaryCta.href} label={H.engagement.secondaryCta.label} />
        </div>
      </InstContainer>
    </section>
  );
}
