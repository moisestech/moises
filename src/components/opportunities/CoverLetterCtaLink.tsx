'use client';

import { FileText } from 'lucide-react';
import type { OpportunityCtas } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CoverLetterCtaLinkProps = {
  ctas: OpportunityCtas;
  onClick?: () => void;
  className?: string;
  /**
   * When both a PDF/URL and print path exist, also render the print-to-PDF link.
   * Default false (hero). Footer typically sets true.
   */
  includePrintFallback?: boolean;
};

function CoverLetterAnchor({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  const isExternal = /^https?:\/\//i.test(href);
  const isLocalPdf = !isExternal && href.toLowerCase().endsWith('.pdf');

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

/** Cover letter — public Google Doc or PDF when `coverLetterUrl` is set, else print-to-PDF page. */
export function CoverLetterCtaLink({
  ctas,
  onClick,
  className,
  includePrintFallback = false,
}: CoverLetterCtaLinkProps) {
  const primaryHref = ctas.coverLetterUrl ?? ctas.coverLetterPrintPath;
  if (!primaryHref) return null;

  const isExternal = /^https?:\/\//i.test(primaryHref);
  const isLocalPdf = !isExternal && primaryHref.toLowerCase().endsWith('.pdf');
  const primaryLabel = ctas.coverLetterUrl
    ? isLocalPdf
      ? 'Download cover letter'
      : 'Cover letter'
    : 'Cover letter (print to PDF)';

  const showPrint =
    includePrintFallback &&
    Boolean(ctas.coverLetterUrl && ctas.coverLetterPrintPath) &&
    ctas.coverLetterUrl !== ctas.coverLetterPrintPath;

  return (
    <>
      <CoverLetterAnchor href={primaryHref} label={primaryLabel} className={className} onClick={onClick} />
      {showPrint && ctas.coverLetterPrintPath ? (
        <CoverLetterAnchor
          href={ctas.coverLetterPrintPath}
          label="Cover letter (print to PDF)"
          className={className}
          onClick={onClick}
        />
      ) : null}
    </>
  );
}
