'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { CoverLetterCtaLink } from '@/components/opportunities/CoverLetterCtaLink';
import { OpportunityResumeLinks } from '@/components/opportunities/OpportunityResumeLinks';
import { opp } from '@/components/opportunities/opportunityTheme';
import { isExternalHttpHref, opportunitySocialPillClass } from '@/components/opportunities/opportunitySocialStyles';

type ResumeCTAProps = {
  opportunity: Opportunity;
};

export function ResumeCTA({ opportunity }: ResumeCTAProps) {
  const { ctas, slug } = opportunity;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <section id="resume" className={opp.section}>
      <h2 className={opp.h2}>{opportunity.resumeSectionTitle ?? 'Résumé and contact'}</h2>
      {opportunity.resumeSectionNote ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{opportunity.resumeSectionNote}</p> : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <OpportunityResumeLinks ctas={ctas} onCta={onCta} variant="footer" />
        <CoverLetterCtaLink ctas={ctas} onClick={() => onCta('cover_letter_footer')} />
        <a
          href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
          className={opp.btnSecondaryMedium}
          onClick={() => onCta('email_footer')}
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          Email
        </a>
        <a
          href={ctas.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={opportunitySocialPillClass('linkedin')}
          onClick={() => onCta('linkedin')}
        >
          <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
          LinkedIn
        </a>
        {ctas.github ? (
          <a
            href={ctas.github}
            target="_blank"
            rel="noopener noreferrer"
            className={opportunitySocialPillClass('github')}
            onClick={() => onCta('github')}
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden />
            GitHub
          </a>
        ) : null}
        {ctas.instagram ? (
          <a
            href={ctas.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={opportunitySocialPillClass('instagram')}
            onClick={() => onCta('instagram')}
          >
            <Instagram className="h-4 w-4 shrink-0" aria-hidden />
            Instagram
          </a>
        ) : null}
        {ctas.portfolio ? (
          isExternalHttpHref(ctas.portfolio) ? (
            <a
              href={ctas.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={opp.btnSecondaryMedium}
              onClick={() => onCta('portfolio')}
            >
              Portfolio
            </a>
          ) : (
            <Link href={ctas.portfolio} className={opp.btnSecondaryMedium} onClick={() => onCta('portfolio')}>
              Portfolio
            </Link>
          )
        ) : null}
        {ctas.cv ? (
          isExternalHttpHref(ctas.cv) ? (
            <a
              href={ctas.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={opp.btnSecondaryMedium}
              onClick={() => onCta('cv')}
            >
              Web CV
            </a>
          ) : (
            <Link href={ctas.cv} className={opp.btnSecondaryMedium} onClick={() => onCta('cv')}>
              Web CV
            </Link>
          )
        ) : null}
      </div>
    </section>
  );
}
