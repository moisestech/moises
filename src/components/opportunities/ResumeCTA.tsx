'use client';

import Link from 'next/link';
import { Download, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';

type ResumeCTAProps = {
  opportunity: Opportunity;
};

export function ResumeCTA({ opportunity }: ResumeCTAProps) {
  const { ctas, slug } = opportunity;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <section id="resume" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
        {opportunity.resumeSectionTitle ?? 'Résumé and contact'}
      </h2>
      {opportunity.resumeSectionNote ? (
        <p className="mt-2 max-w-3xl text-sm text-stone-600">{opportunity.resumeSectionNote}</p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        {ctas.resumePdfPath ? (
          <a
            href={ctas.resumePdfPath}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800"
            onClick={() => onCta('resume_pdf_footer')}
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download résumé PDF
          </a>
        ) : null}
        <a
          href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
          className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
          onClick={() => onCta('email_footer')}
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          Email
        </a>
        <a
          href={ctas.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
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
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
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
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
            onClick={() => onCta('instagram')}
          >
            <Instagram className="h-4 w-4 shrink-0" aria-hidden />
            Instagram
          </a>
        ) : null}
        {ctas.portfolio ? (
          <Link
            href={ctas.portfolio}
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
            onClick={() => onCta('portfolio')}
          >
            Portfolio
          </Link>
        ) : null}
        {ctas.cv ? (
          <Link
            href={ctas.cv}
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
            onClick={() => onCta('cv')}
          >
            Web CV
          </Link>
        ) : null}
      </div>
    </section>
  );
}
