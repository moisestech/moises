'use client';

import { FileText } from 'lucide-react';
import type { OpportunityCtas } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CoverLetterCtaLinkProps = {
  ctas: OpportunityCtas;
  onClick?: () => void;
  className?: string;
};

/** Cover letter — public Google Doc or PDF when `coverLetterUrl` is set, else print-to-PDF page. */
export function CoverLetterCtaLink({ ctas, onClick, className }: CoverLetterCtaLinkProps) {
  const href = ctas.coverLetterUrl ?? ctas.coverLetterPrintPath;
  if (!href) return null;

  const isExternal = /^https?:\/\//i.test(href);
  const isLocalPdf = !isExternal && href.toLowerCase().endsWith('.pdf');
  const label = ctas.coverLetterUrl
    ? isLocalPdf
      ? 'Download cover letter'
      : 'Cover letter'
    : 'Cover letter (print to PDF)';

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : isLocalPdf
          ? { download: href.split('/').pop() }
          : { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(opp.btnSecondaryMedium, className)}
      onClick={onClick}
    >
      <FileText className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </a>
  );
}
