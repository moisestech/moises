'use client';

import Link from 'next/link';
import { institutionalWorkshopOfferings } from '@/content/institutions/workshopsOfferings';
import { PILOT_PRICING } from '@/content/institutions/shared';
import { track } from '@/lib/analytics';
import {
  InstPrimaryCta,
  InstSectionLabel,
  INST_ACCENT,
} from '@/components/institutions/InstitutionalUi';
import { cn } from '@/lib/utils';

type PilotPricingBandProps = {
  /** Use denser layout inside workshops dark hub. */
  tone?: 'dossier' | 'hub';
  className?: string;
  showCta?: boolean;
  source?: string;
};

/**
 * Oolite-aligned seat + hosted flat pricing for institutional pilots.
 */
export function PilotPricingBand({
  tone = 'dossier',
  className,
  showCta = true,
  source = 'pilot_pricing',
}: PilotPricingBandProps) {
  const pricing = institutionalWorkshopOfferings.pricing;
  const dark = tone === 'hub';

  return (
    <section
      className={cn(
        dark
          ? 'rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6'
          : 'border border-neutral-200 bg-white p-5 sm:p-6',
        className,
      )}
      aria-labelledby="pilot-pricing-heading"
    >
      {dark ? (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
          {pricing.eyebrow}
        </p>
      ) : (
        <InstSectionLabel>{pricing.eyebrow}</InstSectionLabel>
      )}
      <h2
        id="pilot-pricing-heading"
        className={cn(
          "font-['MoMA_Sans'] text-xl font-semibold sm:text-2xl",
          dark ? 'text-white' : 'text-neutral-950',
        )}
      >
        {pricing.title}
      </h2>
      <p
        className={cn(
          'mt-2 max-w-2xl text-sm leading-relaxed',
          dark ? 'text-white/75' : 'text-neutral-700',
        )}
      >
        {pricing.lead}
      </p>
      <a
        href={pricing.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'mt-2 inline-block text-xs font-medium underline underline-offset-4',
          dark ? 'text-cyan-300' : 'text-neutral-600',
        )}
      >
        {pricing.sourceLabel}
      </a>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {pricing.packages.map((pkg, index) => {
          const accents = ['ocean', 'teal', 'copper'] as const;
          const accent = INST_ACCENT[accents[index] ?? 'ink'];
          return (
            <li
              key={pkg.id}
              className={cn(
                'border p-4 transition',
                dark ? 'border-white/15 bg-black/20' : cn('bg-[#f7f6f3]', accent.ring, 'ring-1'),
              )}
            >
              <p
                className={cn(
                  'font-mono text-[10px] uppercase tracking-[0.14em]',
                  dark ? 'text-white/50' : accent.text,
                )}
              >
                {pkg.label}
              </p>
              <p
                className={cn(
                  "mt-2 font-['MoMA_Sans'] text-2xl font-semibold",
                  dark ? 'text-white' : 'text-neutral-950',
                )}
              >
                {pkg.price}
              </p>
              <p className={cn('mt-1 text-xs leading-relaxed', dark ? 'text-white/70' : 'text-neutral-600')}>
                {pkg.detail}
              </p>
              <p className={cn('mt-2 text-xs leading-relaxed', dark ? 'text-white/55' : 'text-neutral-500')}>
                {pkg.note}
              </p>
            </li>
          );
        })}
      </ul>

      {showCta ? (
        <div className="mt-6">
          <InstPrimaryCta
            href={PILOT_PRICING.calendlyHref}
            label={PILOT_PRICING.calendlyLabel}
            external
            onClick={() => track('cta_institutions_click', { source })}
          />
        </div>
      ) : null}
    </section>
  );
}

type ProposePilotBandProps = {
  className?: string;
};

/** Hub CTA: parallel pilot outreach — calendar responders. */
export function ProposePilotBand({ className }: ProposePilotBandProps) {
  return (
    <section
      className={cn('border border-neutral-950 bg-neutral-950 px-5 py-8 text-white sm:px-8 sm:py-10', className)}
      aria-labelledby="propose-pilot-heading"
    >
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 sm:text-xs">
        Parallel outreach
      </p>
      <h2 id="propose-pilot-heading" className="font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl">
        Propose a pilot—we’ll coordinate who responds
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
        Same three offerings go to multiple Miami institutions at once. Pricing stays Oolite-aligned (
        {PILOT_PRICING.seat.display} / seat, or {PILOT_PRICING.hostedFlat.display} hosted). Calendar follows
        replies—not a single pre-picked winner.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={PILOT_PRICING.calendlyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950"
          onClick={() => track('cta_institutions_click', { source: 'institutions_propose_pilot' })}
        >
          {PILOT_PRICING.calendlyLabel}
        </a>
        <Link
          href="/workshops"
          className="inline-flex min-h-11 items-center justify-center border border-white/40 px-5 py-2.5 text-sm font-medium text-white"
        >
          View offerings & pricing
        </Link>
      </div>
    </section>
  );
}
