'use client';

import Link from 'next/link';
import { BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';

type Props = {
  opportunity: Opportunity;
};

export function OpportunityTeachingCredentials({ opportunity }: Props) {
  const { teachingHighlights, certifications, slug } = opportunity;
  if (!teachingHighlights?.length && !certifications?.length) return null;

  const onOut = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <section id="teaching-cred" className={opp.section}>
      {teachingHighlights?.length ? (
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden />
            <h2 className={opp.h2}>Teaching and AI programs</h2>
          </div>
          <p className={`mt-2 max-w-3xl ${opp.muted}`}>
            Public workshops and curricula — evidence of translating complex AI systems for practitioners and institutions.
          </p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {teachingHighlights.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex h-full flex-col overflow-hidden ${opp.card} transition hover:border-cyan-400/35 dark:hover:border-cyan-500/40 hover:shadow-md`}
                  onClick={() => onOut(`teaching_${item.title.slice(0, 24)}`)}
                >
                  {item.imageSrc ? (
                    <div className={opp.cardMedia}>
                      <OpportunityCardImage src={item.imageSrc} alt={item.imageAlt ?? item.title} local={item.imageLocal} />
                    </div>
                  ) : null}
                  <div className={opp.cardPad}>
                    <h3 className={opp.matrixPrimary}>{item.title}</h3>
                    <p className={opp.matrixSecondary}>{item.description}</p>
                    <span className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${opp.linkAccent}`}>
                      Open page
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {certifications?.length ? (
        <div className={teachingHighlights?.length ? 'mt-14' : ''}>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden />
            <h2 className={opp.h2}>Credentials</h2>
          </div>
          <p className={`mt-2 max-w-3xl ${opp.muted}`}>Verifiable highlights; full timeline on the web CV.</p>
          <ul className="mt-6 space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-4 py-3 text-sm shadow-sm"
              >
                <p className={opp.matrixPrimary}>{c.name}</p>
                {c.detail ? <p className={opp.matrixSecondary}>{c.detail}</p> : null}
                {c.href ? (
                  c.href.startsWith('/') ? (
                    <Link
                      href={c.href}
                      className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${opp.linkAccent}`}
                      onClick={() => onOut(`cert_${c.name.slice(0, 20)}`)}
                    >
                      View on site
                    </Link>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${opp.linkAccent}`}
                      onClick={() => onOut(`cert_${c.name.slice(0, 20)}`)}
                    >
                      Link
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  )
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
