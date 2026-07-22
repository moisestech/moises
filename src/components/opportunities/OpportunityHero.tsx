'use client';

import Image from 'next/image';
import { Mail, FolderKanban, Linkedin, Github, Instagram, ArrowDown } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { OpportunityResumeLinks } from '@/components/opportunities/OpportunityResumeLinks';
import { OpportunitySiteLinks } from '@/components/opportunities/OpportunitySiteLinks';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { opp } from '@/components/opportunities/opportunityTheme';
import { opportunitySocialIconClass } from '@/components/opportunities/opportunitySocialStyles';

type OpportunityHeroProps = {
  opportunity: Opportunity;
};

export function OpportunityHero({ opportunity }: OpportunityHeroProps) {
  const { hero, ctas, slug, animatedLogoBand } = opportunity;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  const headshotRemote = hero.headshotSrc?.startsWith('http') ?? false;
  const eyebrow = opportunity.heroEyebrow ?? opportunity.roleTitle ?? 'Positioning';
  const showSystemsHero =
    opportunity.variant === 'systems-dossier' ||
    opportunity.variant === 'role-portfolio' ||
    Boolean(opportunity.candidatePositioning || opportunity.heroPrimaryCta);

  return (
    <section id="hero" className="scroll-mt-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className={opp.accent}>{eyebrow}</p>
          <h1 className={`mt-2 ${opp.h1}`}>{hero.headline}</h1>
          {opportunity.heroRoleMeta ? (
            <p className={`mt-2 ${opp.bodyLg}`}>{opportunity.heroRoleMeta}</p>
          ) : (
            <p className={`mt-2 ${opp.bodyLg}`}>{hero.subheadline}</p>
          )}
          {opportunity.candidateName ? (
            <p className={`mt-3 text-base font-semibold text-stone-900 dark:text-stone-100`}>
              {opportunity.candidateName}
            </p>
          ) : null}
          {opportunity.candidatePositioning ? (
            <p className={`mt-2 text-base leading-relaxed text-stone-800 dark:text-stone-200`}>
              {opportunity.candidatePositioning}
            </p>
          ) : null}
          {hero.trustLine && !opportunity.candidateName ? (
            <p className={`mt-2 ${opp.subtle} sm:text-sm`}>{hero.trustLine}</p>
          ) : null}
          <div className={`mt-4 space-y-3 ${opp.body}`}>
            {hero.introParagraphs.map((p) => (
              <p key={p.slice(0, 64)}>
                <OpportunityRichText text={p} />
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {opportunity.heroPrimaryCta ? (
              <a
                href={opportunity.heroPrimaryCta.href}
                className={opp.btnPrimary}
                onClick={() => onCta('hero_primary_scroll')}
              >
                <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
                {opportunity.heroPrimaryCta.label}
              </a>
            ) : (
              <OpportunityResumeLinks ctas={ctas} onCta={onCta} variant="hero" />
            )}
            {opportunity.heroSecondaryCta ? (
              <a
                href={opportunity.heroSecondaryCta.href}
                className={opp.btnSecondary}
                onClick={() => onCta('hero_secondary_scroll')}
              >
                <FolderKanban className="h-4 w-4 shrink-0" aria-hidden />
                {opportunity.heroSecondaryCta.label}
              </a>
            ) : ctas.caseStudiesAnchor ? (
              <a
                href={ctas.caseStudiesAnchor}
                className={opp.btnSecondary}
                onClick={() => onCta('case_studies_anchor')}
              >
                <FolderKanban className="h-4 w-4 shrink-0" aria-hidden />
                View case studies
              </a>
            ) : null}
            {showSystemsHero ? <OpportunityResumeLinks ctas={ctas} onCta={onCta} variant="hero" /> : null}
            {!showSystemsHero ? (
              <a
                href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
                className={opp.btnSecondary}
                onClick={() => onCta('email')}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                Email Moises
              </a>
            ) : null}
            <OpportunitySiteLinks ctas={ctas} onCta={onCta} variant="hero" />
          </div>

          {opportunity.heroMetaChips?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Role focus">
              {opportunity.heroMetaChips.map((chip) => (
                <li key={chip} className={opp.pillTag}>
                  {chip}
                </li>
              ))}
            </ul>
          ) : null}

          <div className={opp.profilesBorder}>
            <span className={`w-full sm:w-auto sm:pr-2 ${opp.label}`}>Profiles</span>
            <a
              href={ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={opportunitySocialIconClass('linkedin')}
              aria-label="LinkedIn"
              onClick={() => onCta('linkedin_hero')}
            >
              <Linkedin className="h-5 w-5" aria-hidden />
            </a>
            {ctas.github ? (
              <a
                href={ctas.github}
                target="_blank"
                rel="noopener noreferrer"
                className={opportunitySocialIconClass('github')}
                aria-label="GitHub"
                onClick={() => onCta('github_hero')}
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
            ) : null}
            {ctas.instagram ? (
              <a
                href={ctas.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={opportunitySocialIconClass('instagram')}
                aria-label="Instagram"
                onClick={() => onCta('instagram_hero')}
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
        <div>
          {opportunity.companyLogoSrc ? (
            <div className="mb-6">
              <p className={`mb-2 ${opp.label}`}>Company</p>
              <div className="relative h-10 w-auto max-w-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={opportunity.companyLogoSrc}
                  alt={opportunity.companyLogoAlt ?? opportunity.company ?? 'Company logo'}
                  className={
                    opportunity.companyLogoSrcDark
                      ? 'h-10 w-auto max-w-[200px] object-contain object-left dark:hidden'
                      : 'h-10 w-auto max-w-[200px] object-contain object-left'
                  }
                />
                {opportunity.companyLogoSrcDark ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={opportunity.companyLogoSrcDark}
                    alt=""
                    aria-hidden
                    className="hidden h-10 w-auto max-w-[200px] object-contain object-left dark:block"
                  />
                ) : null}
              </div>
            </div>
          ) : null}
          {hero.headshotSrc ? (
            <>
              <p className={`mb-2 ${opp.label}`}>Profile</p>
              <div className={opp.headshot}>
                {headshotRemote || !hero.headshotSrc.endsWith('.svg') ? (
                  <Image
                    src={hero.headshotSrc}
                    alt={hero.headshotAlt ?? ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={hero.headshotSrc} alt={hero.headshotAlt ?? ''} className="h-full w-full object-cover" />
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
      {animatedLogoBand?.length ? (
        <div className="mt-10">
          <AnimatedLogoBand logos={animatedLogoBand} bleed ariaLabel="Tools and platform partners" />
        </div>
      ) : null}
    </section>
  );
}
