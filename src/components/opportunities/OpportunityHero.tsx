'use client';

import Image from 'next/image';
import { Download, Mail, FolderKanban, Linkedin, Github, Instagram } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';

type OpportunityHeroProps = {
  opportunity: Opportunity;
};

export function OpportunityHero({ opportunity }: OpportunityHeroProps) {
  const { hero, ctas, slug } = opportunity;

  const onCta = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <section id="hero" className="scroll-mt-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">
            {opportunity.roleTitle ?? 'Positioning'}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            {hero.headline}
          </h1>
          <p className="mt-2 text-lg text-stone-600">{hero.subheadline}</p>
          {hero.trustLine ? <p className="mt-2 text-xs text-stone-500 sm:text-sm">{hero.trustLine}</p> : null}
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-700">
            {hero.introParagraphs.map((p) => (
              <p key={p.slice(0, 64)}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.resumePdfPath ? (
              <a
                href={ctas.resumePdfPath}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800"
                onClick={() => onCta('resume_pdf')}
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                Download résumé
              </a>
            ) : null}
            {ctas.caseStudiesAnchor ? (
              <a
                href={ctas.caseStudiesAnchor}
                className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
                onClick={() => onCta('case_studies_anchor')}
              >
                <FolderKanban className="h-4 w-4 shrink-0" aria-hidden />
                View case studies
              </a>
            ) : null}
            <a
              href={`mailto:${ctas.email}${ctas.emailSubject ? `?subject=${encodeURIComponent(ctas.emailSubject)}` : ''}`}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50"
              onClick={() => onCta('email')}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              Email Moises
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stone-200/80 pt-5">
            <span className="w-full text-xs font-medium uppercase tracking-wide text-stone-500 sm:w-auto sm:pr-2">
              Profiles
            </span>
            <a
              href={ctas.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:text-stone-900"
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
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:text-stone-900"
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
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:text-stone-900"
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
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-stone-500">Profile</p>
              <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                {hero.headshotSrc.endsWith('.svg') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={hero.headshotSrc} alt={hero.headshotAlt ?? ''} className="h-full w-full object-cover" />
                ) : (
                  <Image
                    src={hero.headshotSrc}
                    alt={hero.headshotAlt ?? ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
