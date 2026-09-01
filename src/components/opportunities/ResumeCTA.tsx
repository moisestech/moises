'use client';

import { Mail, Linkedin, Github, Instagram, Download, FileText, FolderKanban } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { CoverLetterCtaLink } from '@/components/opportunities/CoverLetterCtaLink';
import { OpportunityResumeLinks } from '@/components/opportunities/OpportunityResumeLinks';
import { OpportunitySiteLinks } from '@/components/opportunities/OpportunitySiteLinks';
import {
  OpportunityActionLink,
  OOLITE_ACTION_LINK_CLASS,
  OPPORTUNITY_ACTION_LINK_BASE,
} from '@/components/opportunities/OpportunityActionLink';
import { FDE_PARTNER_LOGOS } from '@/content/opportunities/fdePartnerLogos';
import { LIFECYCLE_META } from '@/content/opportunities/lifecycle';
import { opp } from '@/components/opportunities/opportunityTheme';
import { opportunitySocialPillClass } from '@/components/opportunities/opportunitySocialStyles';
import { cn } from '@/lib/utils';

type ResumeCTAProps = {
  opportunity: Opportunity;
  framed?: boolean;
  /** Override section element id (default: resume). Use `contact` when the sticky nav targets #contact. */
  sectionId?: string;
};

export function ResumeCTA({ opportunity, framed = false, sectionId = 'resume' }: ResumeCTAProps) {
  const { ctas, slug } = opportunity;
  const githubProfileHref = ctas.githubProfile ?? ctas.github;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <section id={sectionId} className={framed ? 'scroll-mt-32' : opp.section}>
      <h2 className={opp.h2}>{opportunity.resumeSectionTitle ?? 'Résumé and contact'}</h2>
      {opportunity.resumeSectionNote ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{opportunity.resumeSectionNote}</p> : null}
      {opportunity.showFdeRoleMap ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {ctas.resumePdfPath ? (
            <OpportunityActionLink
              href={ctas.resumePdfPath}
              label={ctas.resumePdfLabel ?? 'Download résumé'}
              icon={Download}
              stage="Handoff"
              onClick={() => onCta('resume_pdf_footer')}
            />
          ) : null}
          {ctas.evidenceBriefPdfPath ? (
            <OpportunityActionLink
              href={ctas.evidenceBriefPdfPath}
              label={ctas.evidenceBriefLabel ?? 'Open technical evidence brief'}
              icon={FileText}
              stage="Govern"
              onClick={() => onCta('evidence_brief_pdf_footer')}
            />
          ) : null}
          {ctas.cv ? (
            <OpportunityActionLink href={ctas.cv} label="CV" icon={FileText} stage="Deploy" onClick={() => onCta('cv_footer')} />
          ) : null}
          {ctas.portfolio ? (
            <OpportunityActionLink
              href={ctas.portfolio}
              label="Portfolio"
              icon={FolderKanban}
              stage="Discover"
              onClick={() => onCta('portfolio_footer')}
            />
          ) : null}
          {ctas.ooliteWork ? (
            <OpportunityActionLink
              href={ctas.ooliteWork}
              label={ctas.ooliteWorkLabel ?? 'Oolite Digital Lab'}
              mark={{ src: FDE_PARTNER_LOGOS.oolite.src, alt: FDE_PARTNER_LOGOS.oolite.alt }}
              className={OOLITE_ACTION_LINK_CLASS}
              onClick={() => onCta('oolite_work_footer')}
            />
          ) : null}
          <OpportunityActionLink
            href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
            label="Email Moises"
            icon={Mail}
            stage="Handoff"
            onClick={() => onCta('email_footer')}
          />
          <a
            href={ctas.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(OPPORTUNITY_ACTION_LINK_BASE, LIFECYCLE_META.Deploy.btnClass)}
            onClick={() => onCta('linkedin')}
          >
            <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
            LinkedIn
          </a>
          {githubProfileHref ? (
            <a
              href={githubProfileHref}
              target="_blank"
              rel="noreferrer"
              className={cn(OPPORTUNITY_ACTION_LINK_BASE, LIFECYCLE_META.Prototype.btnClass)}
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
              className={cn(OPPORTUNITY_ACTION_LINK_BASE, LIFECYCLE_META.Teach.btnClass)}
              onClick={() => onCta('instagram')}
            >
              <Instagram className="h-4 w-4 shrink-0" aria-hidden />
              Instagram
            </a>
          ) : null}
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <OpportunityResumeLinks
            ctas={ctas}
            onCta={onCta}
            variant="footer"
            includeGithub={Boolean(ctas.evidenceBriefPdfPath && ctas.github)}
          />
          <CoverLetterCtaLink
            ctas={ctas}
            includePrintFallback
            onClick={() => onCta('cover_letter_footer')}
          />
          <a
            href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
            className={cn(opp.btnSecondaryMedium, 'min-h-11 justify-center')}
            onClick={() => onCta('email_footer')}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            Email Moises
          </a>
          <a
            href={ctas.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(opportunitySocialPillClass('linkedin'), 'min-h-11 justify-center')}
            onClick={() => onCta('linkedin')}
          >
            <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
            LinkedIn
          </a>
          {ctas.github && !ctas.evidenceBriefPdfPath ? (
            <a
              href={ctas.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(opportunitySocialPillClass('github'), 'min-h-11 justify-center')}
              onClick={() => onCta('github')}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              {ctas.githubLabel ?? 'GitHub'}
            </a>
          ) : null}
          {ctas.instagram ? (
            <a
              href={ctas.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(opportunitySocialPillClass('instagram'), 'min-h-11 justify-center')}
              onClick={() => onCta('instagram')}
            >
              <Instagram className="h-4 w-4 shrink-0" aria-hidden />
              Instagram
            </a>
          ) : null}
          <OpportunitySiteLinks ctas={ctas} onCta={onCta} variant="footer" />
        </div>
      )}
    </section>
  );
}
