'use client';

import Link from 'next/link';
import { BookOpen, Building2, GraduationCap, ExternalLink } from 'lucide-react';
import { track } from '@/lib/analytics';
import type { CertificationItem, Opportunity } from '@/content/opportunities/types';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { OpportunityZoomTrigger } from '@/components/opportunities/OpportunityZoomLightbox';
import { EvidenceMediaCarousel } from '@/components/opportunities/EvidenceMediaCarousel';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type Props = {
  opportunity: Opportunity;
  framed?: boolean;
};

export function OpportunityTeachingCredentials({ opportunity, framed = false }: Props) {
  const { teachingHighlights, certifications, slug } = opportunity;
  if (!teachingHighlights?.length && !certifications?.length) return null;

  const onOut = (kind: string) => {
    track('opportunity_cta_click', { opportunitySlug: slug, kind });
  };

  return (
    <section id="teaching-cred" className={framed ? 'scroll-mt-32' : opp.section}>
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
              <li key={item.href} className={`flex h-full flex-col overflow-hidden ${opp.card}`}>
                {item.media?.length ? (
                  <EvidenceMediaCarousel items={item.media} title={item.title} />
                ) : item.imageSrc ? (
                  <OpportunityZoomTrigger
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    caption={item.title}
                    className={opp.cardMedia}
                  >
                    <OpportunityCardImage
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      local={item.imageLocal}
                    />
                  </OpportunityZoomTrigger>
                ) : (
                  <div className={`${opp.cardMedia} bg-stone-200 dark:bg-stone-800`} aria-hidden />
                )}
                <Link
                  href={item.href}
                  className={`flex flex-1 flex-col ${opp.cardPad} transition hover:bg-stone-50 dark:hover:bg-stone-800/60`}
                  onClick={() => onOut(`teaching_${item.title.slice(0, 24)}`)}
                >
                  <h3 className={opp.matrixPrimary}>{item.title}</h3>
                  <p className={opp.matrixSecondary}>{item.description}</p>
                  <span className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${opp.linkAccent}`}>
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
            <GraduationCap className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden />
            <h2 className={opp.h2}>Credentials</h2>
          </div>
          <p className={`mt-2 max-w-3xl ${opp.muted}`}>Verifiable highlights; full timeline on the web CV.</p>
          <ul className="mt-6 space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-stretch overflow-hidden rounded-xl border border-stone-200 bg-white text-sm shadow-sm dark:border-stone-700 dark:bg-stone-900"
              >
                <CredentialMark item={c} />
                <div className="min-w-0 flex-1 px-4 py-3">
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

function CredentialMark({ item }: { item: CertificationItem }) {
  if (item.logoSrc) {
    return (
      <span className="flex w-16 shrink-0 self-stretch items-center justify-center border-r border-stone-200 bg-white p-2 sm:w-20 dark:border-stone-700 dark:bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.logoSrc}
          alt={item.logoAlt ?? ''}
          className={item.logoSrcDark ? 'h-full w-full object-contain dark:hidden' : 'h-full w-full object-contain'}
        />
        {item.logoSrcDark ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.logoSrcDark} alt="" className="hidden h-full w-full object-contain dark:block" />
        ) : null}
      </span>
    );
  }
  const Icon = item.icon === 'building' ? Building2 : item.icon === 'graduation' ? GraduationCap : BookOpen;
  const cyanRail = item.icon === 'graduation';
  return (
    <span
      className={cn(
        'flex w-16 shrink-0 self-stretch items-center justify-center border-r sm:w-20',
        cyanRail
          ? 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300'
          : 'border-stone-200 bg-stone-50 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200',
      )}
    >
      <Icon className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden />
    </span>
  );
}
