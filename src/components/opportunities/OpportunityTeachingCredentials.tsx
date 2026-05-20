'use client';

import Link from 'next/link';
import { BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { Opportunity } from '@/content/opportunities/types';

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
    <section id="teaching-cred" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      {teachingHighlights?.length ? (
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-cyan-500" aria-hidden />
            <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Teaching and AI programs</h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-stone-600">
            Public workshops and curricula — evidence of translating complex AI systems for practitioners and institutions.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {teachingHighlights.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block h-full rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-cyan-400/35 hover:shadow-md"
                  onClick={() => onOut(`teaching_${item.title.slice(0, 24)}`)}
                >
                  <h3 className="font-medium text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{item.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan-500">
                    Open page
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {certifications?.length ? (
        <div className={teachingHighlights?.length ? 'mt-14' : ''}>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-500" aria-hidden />
            <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">Credentials</h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-stone-600">
            Verifiable highlights; full timeline on the web CV.
          </p>
          <ul className="mt-6 space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm shadow-sm"
              >
                <p className="font-medium text-stone-900">{c.name}</p>
                {c.detail ? <p className="mt-1 text-stone-600">{c.detail}</p> : null}
                {c.href ? (
                  c.href.startsWith('/') ? (
                    <Link
                      href={c.href}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-cyan-500 hover:underline"
                      onClick={() => onOut(`cert_${c.name.slice(0, 20)}`)}
                    >
                      View on site
                    </Link>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-cyan-500 hover:underline"
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
