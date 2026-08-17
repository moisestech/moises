'use client';

import Image from 'next/image';
import { OpportunityProfileImage } from '@/components/opportunities/OpportunityProfileImage';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { track } from '@/lib/analytics';
import { institutionsHub as H } from '@/content/institutions/hub';
import {
  InstContainer,
  InstPrimaryCta,
  InstSecondaryCta,
  InstSectionLabel,
  INST_ANCHOR_SCROLL_MT_CLASS,
} from '@/components/institutions/InstitutionalUi';

export function InstitutionsHero() {
  const { collage } = H.hero;

  return (
    <header id="top" className={`${INST_ANCHOR_SCROLL_MT_CLASS} border-b border-neutral-200`}>
      <InstContainer className="py-12 sm:py-16 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <InstSectionLabel>{H.hero.eyebrow}</InstSectionLabel>
            <h1 className="max-w-3xl font-['MoMA_Sans'] text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.08] tracking-tight">
              {H.hero.headline}
            </h1>
            <p className="mt-5 max-w-[42rem] text-base leading-relaxed text-neutral-700 sm:text-lg">
              {H.hero.lead}
            </p>
            <p className="mt-4 max-w-[42rem] text-sm leading-relaxed text-neutral-600 sm:text-base">
              {H.hero.support}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
              {H.hero.availabilityLabel}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <InstPrimaryCta
                href={H.hero.primaryCta.href}
                label={H.hero.primaryCta.label}
                external={H.hero.primaryCta.external}
                onClick={() =>
                  track('institutions_cta_click', { placement: 'hero' })
                }
              />
              <InstSecondaryCta
                href={H.hero.secondaryCta.href}
                label={H.hero.secondaryCta.label}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="col-span-2">
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
                  <Image
                    src={collage.main.src}
                    alt={collage.main.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{collage.main.caption}</p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={collage.teaching.src}
                    alt={collage.teaching.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, 50vw"
                  />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{collage.teaching.caption}</p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={collage.workflow.src}
                    alt={collage.workflow.alt}
                    fill
                    className="object-cover object-left"
                    sizes="(min-width: 1024px) 20vw, 50vw"
                  />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{collage.workflow.caption}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  {H.profile.label}
                </p>
                <OpportunityProfileImage
                  src={H.profile.src}
                  alt={H.profile.alt}
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  frameClassName="mx-0 max-w-none"
                  className="max-w-none"
                />
              </div>
              <div className="flex items-end">
                <p className="inline-block border border-neutral-950 bg-neutral-950 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  {collage.captionCard}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <OpportunityAudienceKeywords data={H.audienceKeywords} className="mb-0 text-left" />
        </div>
      </InstContainer>

      <div className="border-t border-neutral-200 bg-white py-6 sm:py-8">
        <InstContainer>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            {H.logoBandLabel}
          </p>
        </InstContainer>
        <AnimatedLogoBand logos={[...H.logoBand]} bleed ariaLabel={H.logoBandLabel} />
      </div>
    </header>
  );
}
