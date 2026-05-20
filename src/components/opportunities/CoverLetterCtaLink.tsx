'use client';

import { FileText } from 'lucide-react';
import type { OpportunityCtas } from '@/content/opportunities/types';
import { cn } from '@/lib/utils';

type CoverLetterCtaLinkProps = {
  ctas: OpportunityCtas;
  onClick?: () => void;
  className?: string;
};

/** Cover letter — public Google Doc when `coverLetterUrl` is set, else print-to-PDF page. */
export function CoverLetterCtaLink({ ctas, onClick, className }: CoverLetterCtaLinkProps) {
  const href = ctas.coverLetterUrl ?? ctas.coverLetterPrintPath;
  if (!href) return null;

  const label = ctas.coverLetterUrl ? 'Cover letter' : 'Cover letter (print to PDF)';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50',
        className
      )}
      onClick={onClick}
    >
      <FileText className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </a>
  );
}
