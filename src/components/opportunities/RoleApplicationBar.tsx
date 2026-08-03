'use client';

import { Mail, Linkedin, Download } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type RoleApplicationBarProps = {
  opportunity: Opportunity;
};

/**
 * Discreet private application strip for role-portfolio pages.
 */
export function RoleApplicationBar({ opportunity }: RoleApplicationBarProps) {
  const { ctas, slug, visibilityNote, candidateName, heroMetaChips } = opportunity;
  const resumePdf = ctas.resumePdfPath;
  const pdfExternal = Boolean(resumePdf?.startsWith('http'));

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <header
      className="border-b border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/60"
      aria-label="Role application context"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-2.5 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 sm:py-3">
        <div className="min-w-0 space-y-1">
          {visibilityNote ? (
            <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400 sm:text-[11px]">
              {visibilityNote}
            </p>
          ) : null}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {candidateName ? (
              <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{candidateName}</p>
            ) : null}
            {heroMetaChips?.length ? (
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-stone-600 dark:text-stone-400 sm:text-xs" aria-label="Availability">
                {heroMetaChips.map((chip) => (
                  <li key={chip} className="after:ml-2 after:text-stone-300 after:content-['·'] last:after:content-none dark:after:text-stone-600">
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
            className={cn(opp.btnSecondaryMedium, 'min-h-10 px-3 py-2 text-xs sm:min-h-0 sm:py-1.5')}
            onClick={() => onCta('email_bar')}
          >
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Contact
          </a>
          <a
            href={ctas.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(opp.btnSecondaryMedium, 'min-h-10 px-3 py-2 text-xs sm:min-h-0 sm:py-1.5')}
            onClick={() => onCta('linkedin_bar')}
          >
            <Linkedin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            LinkedIn
          </a>
          {resumePdf ? (
            <a
              href={resumePdf}
              {...(pdfExternal ? { target: '_blank', rel: 'noopener noreferrer' } : { download: true })}
              className={cn(opp.btnSecondaryMedium, 'min-h-10 px-3 py-2 text-xs sm:min-h-0 sm:py-1.5')}
              onClick={() => onCta('resume_bar')}
            >
              <Download className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Résumé
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
