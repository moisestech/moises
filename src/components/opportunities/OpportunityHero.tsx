'use client';

import { Mail, FolderKanban, Linkedin, Github, Instagram, ArrowDown, Calendar } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { OpportunityResumeLinks } from '@/components/opportunities/OpportunityResumeLinks';
import { OpportunitySiteLinks } from '@/components/opportunities/OpportunitySiteLinks';
import { OpportunityRichText } from '@/components/opportunities/OpportunityRichText';
import { OpportunityProfileImage } from '@/components/opportunities/OpportunityProfileImage';
import { getOpportunityCompactAccent } from '@/config/opportunity-compact-section-theme';
import { opp } from '@/components/opportunities/opportunityTheme';
import {
  isExternalHttpHref,
  opportunitySocialIconClass,
} from '@/components/opportunities/opportunitySocialStyles';
import { cn } from '@/lib/utils';

type OpportunityHeroProps = {
  opportunity: Opportunity;
};

export function OpportunityHero({ opportunity }: OpportunityHeroProps) {
  const { hero, ctas, slug, animatedLogoBand } = opportunity;
  const heroAccent = getOpportunityCompactAccent('hero');
  const githubProfileHref = ctas.githubProfile ?? ctas.github;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  const eyebrow = opportunity.heroEyebrow ?? opportunity.roleTitle ?? 'Positioning';
  const showSystemsHero =
    opportunity.variant === 'systems-dossier' ||
    opportunity.variant === 'role-portfolio' ||
    Boolean(opportunity.candidatePositioning || opportunity.heroPrimaryCta);

  return (
    <section id="hero" className="scroll-mt-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className={cn(opp.accent, heroAccent.eyebrow)}>{eyebrow}</p>
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

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            {opportunity.heroPrimaryCta ? (
              <a
                href={opportunity.heroPrimaryCta.href}
                className={cn(
                  opp.btnPrimary,
                  'min-h-11 w-full justify-center sm:w-auto',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  heroAccent.focusRing,
                )}
                {...(isExternalHttpHref(opportunity.heroPrimaryCta.href) ||
                opportunity.heroPrimaryCta.href.endsWith('.pdf')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                onClick={() =>
                  onCta(
                    isExternalHttpHref(opportunity.heroPrimaryCta!.href)
                      ? 'hero_primary_external'
                      : 'hero_primary_scroll',
                  )
                }
              >
                {isExternalHttpHref(opportunity.heroPrimaryCta.href) ? (
                  <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                ) : (
                  <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
                )}
                {opportunity.heroPrimaryCta.label}
              </a>
            ) : (
              <OpportunityResumeLinks ctas={ctas} onCta={onCta} variant="hero" />
            )}
            {opportunity.heroSecondaryCta ? (
              <a
                href={opportunity.heroSecondaryCta.href}
                className={cn(
                  opp.btnSecondary,
                  'min-h-11 w-full justify-center sm:w-auto',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  heroAccent.focusRing,
                )}
                {...(isExternalHttpHref(opportunity.heroSecondaryCta.href) ||
                opportunity.heroSecondaryCta.href.endsWith('.pdf')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                onClick={() =>
                  onCta(
                    isExternalHttpHref(opportunity.heroSecondaryCta!.href)
                      ? 'hero_secondary_external'
                      : 'hero_secondary_scroll',
                  )
                }
              >
                {isExternalHttpHref(opportunity.heroSecondaryCta.href) ? (
                  <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                ) : (
                  <FolderKanban className="h-4 w-4 shrink-0" aria-hidden />
                )}
                {opportunity.heroSecondaryCta.label}
              </a>
            ) : ctas.caseStudiesAnchor ? (
              <a
                href={ctas.caseStudiesAnchor}
                className={cn(
                  opp.btnSecondary,
                  'min-h-11 w-full justify-center sm:w-auto',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  heroAccent.focusRing,
                )}
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
                className={cn(
                  opp.btnSecondary,
                  'min-h-11 w-full justify-center sm:w-auto',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  heroAccent.focusRing,
                )}
                onClick={() => onCta('email')}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                Email Moises
              </a>
            ) : null}
            <OpportunitySiteLinks ctas={ctas} onCta={onCta} variant="hero" className="w-full sm:w-auto" />
          </div>

          {opportunity.heroMetaChips?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Role focus">
              {opportunity.heroMetaChips.map((chip) => (
                <li key={chip} className={cn(opp.pillTag, heroAccent.chipHover, 'max-w-full break-words')}>
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
            {githubProfileHref ? (
              <a
                href={githubProfileHref}
                target="_blank"
                rel="noreferrer"
                className={opportunitySocialIconClass('github')}
                aria-label="GitHub profile"
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
              <OpportunityProfileImage
                src={hero.headshotSrc}
                alt={hero.headshotAlt ?? 'Moises Sanabria'}
                accentRingClassName={heroAccent.portraitRing}
                accentShadowClassName={heroAccent.portraitShadow}
              />
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
