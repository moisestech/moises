'use client';

import Image from 'next/image';
import { Mail, FolderKanban, Linkedin, Github, Instagram } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { OpportunityResumeLinks } from '@/components/opportunities/OpportunityResumeLinks';
import { OpportunitySiteLinks } from '@/components/opportunities/OpportunitySiteLinks';
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

  return (
    <section id="hero" className="scroll-mt-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className={opp.accent}>{opportunity.roleTitle ?? 'Positioning'}</p>
          <h1 className={`mt-2 ${opp.h1}`}>{hero.headline}</h1>
          <p className={`mt-2 ${opp.bodyLg}`}>{hero.subheadline}</p>
          {hero.trustLine ? <p className={`mt-2 ${opp.subtle} sm:text-sm`}>{hero.trustLine}</p> : null}
          <div className={`mt-4 space-y-3 ${opp.body}`}>
            {hero.introParagraphs.map((p) => (
              <p key={p.slice(0, 64)}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <OpportunityResumeLinks ctas={ctas} onCta={onCta} variant="hero" />
            {ctas.caseStudiesAnchor ? (
              <a
                href={ctas.caseStudiesAnchor}
                className={opp.btnSecondary}
                onClick={() => onCta('case_studies_anchor')}
              >
                <FolderKanban className="h-4 w-4 shrink-0" aria-hidden />
                View case studies
              </a>
            ) : null}
            <a
              href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
              className={opp.btnSecondary}
              onClick={() => onCta('email')}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              Email Moises
            </a>
            <OpportunitySiteLinks ctas={ctas} onCta={onCta} variant="hero" />
          </div>
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
