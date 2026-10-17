'use client';

import { BookOpen, ClipboardList, Layers3, Search, Wrench, type LucideIcon } from 'lucide-react';
import { institutionsHub as H } from '@/content/institutions/hub';
import { track } from '@/lib/analytics';
import {
  INST_ACCENT,
  INST_ACCENT_WASH,
  InstContainer,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
  INST_ANCHOR_SCROLL_MT_CLASS,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

const PROCESS_ICON: Record<(typeof H.process.steps)[number]['icon'] | (typeof H.engagement.modes)[number]['icon'], LucideIcon> = {
  search: Search,
  clipboard: ClipboardList,
  wrench: Wrench,
  book: BookOpen,
  layers: Layers3,
};

export function ProcessSteps() {
  return (
    <section
      id="process"
      className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-16 sm:py-20')}
      aria-labelledby="process-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="teal">{H.process.eyebrow}</InstSectionLabel>
          <h2 id="process-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            {H.process.title}
          </h2>
        </InstReveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                  <h3 className="mt-1 font-['MoMA_Sans'] text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-800">{step.body}</p>
                </li>
              </InstReveal>
            );
          })}
        </ol>
        <details className="mt-8 border-t border-neutral-200 pt-3">
          <summary className="cursor-pointer text-base font-medium text-neutral-900">
            What stays in scope
          </summary>
          <ul className="mt-4 space-y-2">
            {H.process.reassurance.map((item) => (
              <li key={item} className="text-base leading-relaxed text-neutral-800">
                {item}
              </li>
            ))}
          </ul>
        </details>
      </InstContainer>
    </section>
  );
}

export function EngagementModes() {
  return (
    <section
      id="engage"
      className={cn(INST_ANCHOR_SCROLL_MT_CLASS, 'border-b border-neutral-200 py-16 sm:py-20')}
      aria-labelledby="engage-heading"
    >
      <InstContainer>
        <InstReveal>
          <InstSectionLabel accent="copper">{H.engagement.eyebrow}</InstSectionLabel>
          <h2 id="engage-heading" className="font-['MoMA_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-semibold">
            {H.engagement.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-800 sm:text-lg">{H.engagement.lead}</p>
        </InstReveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {H.engagement.modes.map((mode, i) => {
            const Icon = PROCESS_ICON[mode.icon];
            const accent = INST_ACCENT[(['ocean', 'teal', 'copper'] as const)[i] ?? 'ink'];
            return (
              <InstReveal key={mode.id} delay={0.05 * i}>
                <li
                  id={`engage-${mode.id}`}
                  className="group relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <div
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none',
                      INST_ACCENT_WASH[(['ocean', 'teal', 'copper'] as const)[i] ?? 'ink'],
                    )}
                  />
                  <div className="relative flex h-full flex-col">
                    <span className={`inline-flex h-10 w-10 items-center justify-center ${accent.iconBg}`} aria-hidden>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="mt-4 rounded-sm p-2 transition duration-300 hover:bg-white/80">
                      <h3 className="font-['MoMA_Sans'] text-xl font-semibold sm:text-2xl">{mode.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-neutral-800">{mode.outcome}</p>
                    </div>
                    <details className="mt-2 rounded-sm p-2 transition duration-300 hover:bg-white/80">
                      <summary className="cursor-pointer text-base font-medium text-neutral-900">
                        When this fits
                      </summary>
                      <p className="mt-3 text-base leading-relaxed text-neutral-800">{mode.bestFor}</p>
                    </details>
                  </div>
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
