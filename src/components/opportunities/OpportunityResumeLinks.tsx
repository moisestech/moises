'use client';

import Link from 'next/link';
import { Download, FileText, Github } from 'lucide-react';
import type { OpportunityCtas } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { opportunitySocialPillClass } from '@/components/opportunities/opportunitySocialStyles';
import { cn } from '@/lib/utils';

type OpportunityResumeLinksProps = {
  ctas: OpportunityCtas;
  onCta: (kind: string) => void;
  /** Hero: primary + secondary buttons; footer: same with medium weight on secondary */
  variant?: 'hero' | 'footer';
  className?: string;
  /** When true, render the GitHub CTA after the PDFs (closing-row order). */
  includeGithub?: boolean;
};

/**
 * Résumé CTAs — direct PDF download and/or print-friendly HTML route.
 * Optional evidence brief + GitHub when an overlay needs a three-action close.
 */
export function OpportunityResumeLinks({
  ctas,
  onCta,
  variant = 'hero',
  className,
  includeGithub = false,
}: OpportunityResumeLinksProps) {
  const { resumePdfPath, resumePrintPath, evidenceBriefPdfPath } = ctas;
  if (!resumePdfPath && !resumePrintPath && !evidenceBriefPdfPath) return null;

  const pdfExternal = Boolean(resumePdfPath?.startsWith('http'));
  const openPdfsInNewTab = Boolean(evidenceBriefPdfPath);
  const resumeLabel = ctas.resumePdfLabel ?? 'Download résumé (PDF)';
  const evidenceLabel = ctas.evidenceBriefLabel ?? 'Open technical evidence brief';
  const githubLabel = ctas.githubLabel ?? 'GitHub';
  const primaryClass = variant === 'hero' ? opp.btnPrimary : cn(opp.btnPrimary, 'font-medium');
  const secondaryClass = variant === 'hero' ? opp.btnSecondary : opp.btnSecondaryMedium;
  const resumeKind = variant === 'hero' ? 'resume_pdf' : 'resume_pdf_footer';
  const evidenceKind = variant === 'hero' ? 'evidence_brief_pdf' : 'evidence_brief_pdf_footer';
  const githubKind = variant === 'hero' ? 'github' : 'github';

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {resumePdfPath ? (
        <a
          href={resumePdfPath}
          {...(openPdfsInNewTab || pdfExternal
            ? { target: '_blank', rel: 'noreferrer' }
            : { download: true })}
          className={primaryClass}
          onClick={() => onCta(resumeKind)}
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden />
          {resumeLabel}
        </a>
      ) : null}
      {evidenceBriefPdfPath ? (
        <a
          href={evidenceBriefPdfPath}
          target="_blank"
          rel="noreferrer"
          className={resumePdfPath ? secondaryClass : primaryClass}
          onClick={() => onCta(evidenceKind)}
        >
          <FileText className="h-4 w-4 shrink-0" aria-hidden />
          {evidenceLabel}
        </a>
      ) : null}
      {resumePrintPath ? (
        <Link
          href={resumePrintPath}
          target="_blank"
          rel="noopener noreferrer"
          className={resumePdfPath || evidenceBriefPdfPath ? secondaryClass : primaryClass}
          onClick={() => onCta(variant === 'hero' ? 'resume_print' : 'resume_print_footer')}
        >
          <FileText className="h-4 w-4 shrink-0" aria-hidden />
          Résumé (print to PDF)
        </Link>
      ) : null}
      {includeGithub && ctas.github ? (
        <a
          href={ctas.github}
          target="_blank"
          rel="noreferrer"
          className={cn(opportunitySocialPillClass('github'), 'min-h-11 justify-center')}
          onClick={() => onCta(githubKind)}
        >
          <Github className="h-4 w-4 shrink-0" aria-hidden />
          {githubLabel}
        </a>
      ) : null}
    </div>
  );
}
