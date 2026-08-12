'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, Layers, Ticket, ArrowUpRight } from 'lucide-react';
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

const PKG_ICONS = {
  seat: Ticket,
  building: Building2,
  layers: Layers,
} as const;

const HUB_ACCENT = {
  cyan: {
    icon: 'text-cyan-300',
    soft: 'bg-cyan-400/15',
    border: 'border-cyan-400/30',
    price: 'text-cyan-200',
  },
  teal: {
    icon: 'text-teal-300',
    soft: 'bg-teal-400/15',
    border: 'border-teal-400/30',
    price: 'text-teal-200',
  },
  coral: {
    icon: 'text-rose-300',
    soft: 'bg-rose-400/15',
    border: 'border-rose-400/30',
    price: 'text-rose-200',
  },
} as const;

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
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        dark
          ? 'overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-cyan-500/[0.06] p-5 sm:p-7'
          : 'border border-neutral-200 bg-white p-5 sm:p-6',
        className,
      )}
      aria-labelledby="pilot-pricing-heading"
    >
      {dark ? (
        <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300/90 sm:text-xs">
          <Ticket className="h-3.5 w-3.5" aria-hidden />
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
          'mt-2 inline-flex items-center gap-1 text-xs font-medium underline underline-offset-4',
          dark ? 'text-cyan-300' : 'text-neutral-600',
        )}
      >
        {pricing.sourceLabel}
        <ArrowUpRight className="h-3 w-3" aria-hidden />
      </a>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {pricing.packages.map((pkg, index) => {
          const dossierAccent = (['ocean', 'teal', 'copper'] as const)[index] ?? 'ink';
          const accent = INST_ACCENT[dossierAccent];
          const hub = HUB_ACCENT[pkg.accent];
          const Icon = PKG_ICONS[pkg.icon];
          return (
            <motion.li
              key={pkg.id}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
              className={cn(
                'relative overflow-hidden border p-4 transition',
                dark
                  ? cn('border-white/15 bg-black/25', hub.border)
                  : cn('bg-[#f7f6f3]', accent.ring, 'ring-1'),
              )}
            >
              <div
                className={cn(
                  'mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full',
                  dark ? hub.soft : 'bg-white',
                )}
                aria-hidden
              >
                <Icon className={cn('h-5 w-5', dark ? hub.icon : accent.text)} />
              </div>
              <p
                className={cn(
                  'font-mono text-[10px] uppercase tracking-[0.14em]',
                  dark ? 'text-white/55' : accent.text,
                )}
              >
                {pkg.label}
              </p>
              <p
                className={cn(
                  "mt-2 font-['MoMA_Sans'] text-2xl font-semibold sm:text-3xl",
                  dark ? hub.price : 'text-neutral-950',
                )}
              >
                {pkg.price}
              </p>
              <p className={cn('mt-1 text-xs leading-relaxed', dark ? 'text-white/70' : 'text-neutral-600')}>
                {pkg.detail}
              </p>
              <p className={cn('mt-2 text-xs leading-relaxed', dark ? 'text-white/50' : 'text-neutral-500')}>
                {pkg.note}
              </p>
              {dark ? (
                <div
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-40 blur-2xl',
                    pkg.accent === 'cyan' && 'bg-cyan-400',
                    pkg.accent === 'teal' && 'bg-teal-400',
                    pkg.accent === 'coral' && 'bg-rose-400',
                  )}
                />
              ) : null}
            </motion.li>
          );
        })}
      </ul>

      {showCta ? (
        <div className="mt-6">
          {dark ? (
            <a
              href={PILOT_PRICING.calendlyHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('cta_institutions_click', { source })}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
            >
              {PILOT_PRICING.calendlyLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          ) : (
            <InstPrimaryCta
              href={PILOT_PRICING.calendlyHref}
              label={PILOT_PRICING.calendlyLabel}
              external
              onClick={() => track('cta_institutions_click', { source })}
            />
          )}
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
