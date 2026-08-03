'use client';

import Image from 'next/image';
import { ArrowDown, Github, Mail, Download } from 'lucide-react';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { comfyWorkSample } from '@/content/opportunities/comfy/workSample';

type ComfyProofHeroProps = {
  opportunitySlug: string;
};

export function ComfyProofHero({ opportunitySlug }: ComfyProofHeroProps) {
  const { hero, techBadges } = comfyWorkSample;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug, kind });
  };

  return (
    <section
      id="hero"
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-stone-950 text-stone-50"
      aria-labelledby="comfy-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.atmosphereSrc}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-950/70 to-stone-950"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-1/2 hidden w-[min(52vw,40rem)] -translate-x-1/2 bg-stone-950/55 blur-2xl md:block"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(78vh,640px)] max-w-5xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 md:min-h-[min(72vh,700px)] md:items-center md:text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-400/95 sm:text-xs">
          {hero.eyebrow}
        </p>
        <h1
          id="comfy-hero-heading"
          className="mt-4 max-w-3xl text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-[1.12]"
        >
          {hero.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base md:text-lg">
          {hero.support}
        </p>

        <div className="mt-7 flex w-full flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap md:justify-center">
          <a
            href={hero.primaryCta.href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-stone-950 hover:bg-yellow-300"
            onClick={() => onCta('hero_primary_comfyui')}
          >
            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
            {hero.primaryCta.label}
          </a>
          {hero.secondaryCtas.map((cta) => {
            const external = cta.href.startsWith('http') || cta.href.startsWith('mailto:');
            const Icon =
              cta.label === 'GitHub' ? Github : cta.label === 'Contact Me' ? Mail : Download;
            return (
              <a
                key={cta.label}
                href={cta.href}
                {...(external && cta.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-stone-500/70 bg-stone-950/50 px-4 py-2.5 text-sm font-semibold text-stone-100 backdrop-blur-sm hover:border-yellow-400/50 hover:bg-stone-900/70"
                onClick={() => onCta(`hero_secondary_${cta.label.toLowerCase().replace(/\s+/g, '_')}`)}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {cta.label}
              </a>
            );
          })}
        </div>

        <p className="mt-5 text-xs text-stone-400 sm:text-sm">{hero.statusLine}</p>

        <ul
          className="mt-8 flex flex-wrap items-center gap-3 md:justify-center"
          aria-label="Target stack references"
        >
          {techBadges.map((badge) => (
            <li
              key={badge.id}
              className="inline-flex items-center gap-2 rounded-full border border-stone-600/70 bg-stone-950/60 px-3 py-1.5 text-xs font-medium text-stone-200 backdrop-blur-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={badge.src} alt="" className="h-4 w-4 object-contain" aria-hidden />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ComfyCredibilityBar() {
  return (
    <section
      id="credibility"
      className="border-b border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950"
      aria-label="Credibility"
    >
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-stone-200 dark:bg-stone-800 md:grid-cols-4">
        {comfyWorkSample.credibility.map((item) => (
          <li
            key={item.id}
            className="bg-stone-50 px-3 py-4 dark:bg-stone-950 sm:px-4 sm:py-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-700 dark:text-yellow-400/90 sm:text-[11px]">
              {item.label}
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-stone-900 dark:text-stone-50 sm:text-[15px]">
              {item.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
