'use client';

import Link from 'next/link';
import { Download, FileText } from 'lucide-react';
import type { OpportunityCtas } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type OpportunityResumeLinksProps = {
  ctas: OpportunityCtas;
  onCta: (kind: string) => void;
  /** Hero: primary + secondary buttons; footer: same with medium weight on secondary */
  variant?: 'hero' | 'footer';
  className?: string;
};

/**
 * Résumé CTAs — direct PDF download and/or print-friendly HTML route.
 */
export function OpportunityResumeLinks({
  ctas,
  onCta,
  variant = 'hero',
  className,
}: OpportunityResumeLinksProps) {
  const { resumePdfPath, resumePrintPath } = ctas;
  if (!resumePdfPath && !resumePrintPath) return null;

  const pdfExternal = Boolean(resumePdfPath?.startsWith('http'));
  const primaryClass = variant === 'hero' ? opp.btnPrimary : cn(opp.btnPrimary, 'font-medium');
  const secondaryClass = variant === 'hero' ? opp.btnSecondary : opp.btnSecondaryMedium;

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {resumePdfPath ? (
        pdfExternal ? (
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryClass}
            onClick={() => onCta(variant === 'hero' ? 'resume_pdf' : 'resume_pdf_footer')}
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download résumé (PDF)
          </a>
        ) : (
          <a
            href={resumePdfPath}
            download
            className={primaryClass}
            onClick={() => onCta(variant === 'hero' ? 'resume_pdf' : 'resume_pdf_footer')}
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download résumé (PDF)
          </a>
        )
      ) : null}
      {resumePrintPath ? (
        <Link
          href={resumePrintPath}
          target="_blank"
          rel="noopener noreferrer"
          className={resumePdfPath ? secondaryClass : primaryClass}
          onClick={() => onCta(variant === 'hero' ? 'resume_print' : 'resume_print_footer')}
        >
          <FileText className="h-4 w-4 shrink-0" aria-hidden />
          {resumePdfPath ? 'Résumé (print to PDF)' : 'Résumé (print to PDF)'}
        </Link>
      ) : null}
    </div>
  );
}
