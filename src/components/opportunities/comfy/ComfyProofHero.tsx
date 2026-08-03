'use client';

import Image from 'next/image';
import { ArrowDown, Download, ExternalLink, Github, Mail } from 'lucide-react';
import { track } from '@/lib/analytics';
import { comfyWorkSample, provenanceBrand } from '@/content/opportunities/comfy/workSample';

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
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden text-[#f4f1e8]"
      style={{ backgroundColor: provenanceBrand.surface }}
      aria-labelledby="comfy-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.atmosphereSrc}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(17,17,15,0.78) 0%, rgba(17,17,15,0.72) 45%, #11110f 100%)',
          }}
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-1/2 hidden w-[min(52vw,40rem)] -translate-x-1/2 blur-2xl md:block"
          style={{ backgroundColor: 'rgba(17,17,15,0.55)' }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(78vh,640px)] max-w-5xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 md:min-h-[min(72vh,700px)] md:items-center md:text-center">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs"
          style={{ color: provenanceBrand.accent }}
        >
          {hero.eyebrow}
        </p>
        <h1
          id="comfy-hero-heading"
          className="mt-4 max-w-3xl text-[1.65rem] font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-[1.12]"
          style={{ color: provenanceBrand.text }}
        >
          {hero.headline}
        </h1>
        <p
          className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg"
          style={{ color: provenanceBrand.textMuted }}
        >
          {hero.support}
        </p>

        <div className="mt-7 flex w-full flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap md:justify-center">
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#11110f] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: provenanceBrand.accent, outlineColor: provenanceBrand.focus }}
            onClick={() => onCta('hero_primary_live_demo')}
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            {hero.primaryCta.label}
          </a>
          {hero.secondaryCtas.map((cta) => {
            const external = cta.href.startsWith('http') || cta.href.startsWith('mailto:');
            const Icon =
              cta.label === 'View repository'
                ? Github
                : cta.label === 'Contact Me'
                  ? Mail
                  : Download;
            return (
              <a
                key={cta.label}
                href={cta.href}
                {...(external && cta.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold backdrop-blur-sm hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: provenanceBrand.border,
                  color: provenanceBrand.text,
                  backgroundColor: 'rgba(17,17,15,0.5)',
                  outlineColor: provenanceBrand.focus,
                }}
                onClick={() =>
                  onCta(`hero_secondary_${cta.label.toLowerCase().replace(/\s+/g, '_')}`)
                }
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {cta.label}
              </a>
            );
          })}
          <a
            href={hero.tertiaryCta.href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: provenanceBrand.accent, outlineColor: provenanceBrand.focus }}
            onClick={() => onCta('hero_tertiary_case_study')}
          >
            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
            {hero.tertiaryCta.label}
          </a>
        </div>

        <p className="mt-5 text-xs sm:text-sm" style={{ color: provenanceBrand.textMuted }}>
          {hero.statusLine}
        </p>
        <p className="mt-2 text-[11px]" style={{ color: provenanceBrand.textMuted }}>
          Unofficial ComfyUI project on this page’s work sample — not affiliated with or endorsed by Comfy
          Org.
        </p>

        <ul
          className="mt-8 flex flex-wrap items-center gap-3 md:justify-center"
          aria-label="Target stack references"
        >
          {techBadges.map((badge) => (
            <li
              key={badge.id}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
              style={{
                borderColor: provenanceBrand.border,
                backgroundColor: 'rgba(17,17,15,0.6)',
                color: provenanceBrand.text,
              }}
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
      className="border-b"
      style={{
        borderColor: provenanceBrand.border,
        backgroundColor: provenanceBrand.surfaceElevated,
        color: provenanceBrand.text,
      }}
      aria-label="Credibility"
    >
      <ul
        className="mx-auto grid max-w-5xl grid-cols-2 gap-px md:grid-cols-4"
        style={{ backgroundColor: provenanceBrand.border }}
      >
        {comfyWorkSample.credibility.map((item) => (
          <li
            key={item.id}
            className="px-3 py-4 sm:px-4 sm:py-5"
            style={{ backgroundColor: provenanceBrand.surface }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]"
              style={{ color: provenanceBrand.accent }}
            >
              {item.label}
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug sm:text-[15px]">{item.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
