'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { forwardDeployedFlagship } from '@/content/flagships/forward-deployed';
import { flagshipEvidence } from '@/content/evidence/flagships';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function ForwardDeployedClient() {
  const data = forwardDeployedFlagship;

  return (
    <div className={opp.shell}>
      <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <p className={opp.accent}>Hiring flagship · Real-world systems</p>
        <h1 className={cn(opp.h1, 'mt-2')}>{data.title}</h1>
        <p className={cn(opp.bodyLg, 'mt-3 max-w-3xl')}>{data.subtitle}</p>
        <p className={cn(opp.body, 'mt-4 max-w-3xl')}>{data.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={data.primaryCta.href}
            className={opp.btnPrimary}
            onClick={() => track('flagship_cta_click', { flagship: 'forward-deployed', kind: 'primary' })}
          >
            {data.primaryCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={data.secondaryCta.href}
            className={opp.btnSecondary}
            onClick={() => track('flagship_cta_click', { flagship: 'forward-deployed', kind: 'dossier' })}
          >
            {data.secondaryCta.label}
          </Link>
          <Link href={data.tertiaryCta.href} className={opp.btnSecondaryMedium}>
            {data.tertiaryCta.label}
          </Link>
        </div>

        <section className={opp.section} aria-labelledby="lifecycle-heading">
          <h2 id="lifecycle-heading" className={opp.h2}>
            Delivery lifecycle
          </h2>
          <p className={cn(opp.muted, 'mt-2 max-w-2xl')}>
            Evidence sits inside the model — not as a list of employers.
          </p>
          <ol className="mt-8 space-y-6">
            {data.lifecycle.map((stage, i) => (
              <li key={stage.id} className={cn(opp.callout, 'list-none')}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className={opp.accent}>
                    {String(i + 1).padStart(2, '0')} · {stage.title}
                  </span>
                </div>
                <p className={cn(opp.matrixPrimary, 'mt-2')}>{stage.question}</p>
                <p className={cn(opp.body, 'mt-2')}>{stage.body}</p>
                <ul className="mt-3 flex flex-wrap gap-2" role="list">
                  {stage.evidenceIds.map((id) => {
                    const ev = flagshipEvidence[id as keyof typeof flagshipEvidence];
                    if (!ev) return null;
                    return (
                      <li key={id}>
                        <Link href={ev.href} className={opp.pillTag}>
                          {ev.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className={opp.section} aria-labelledby="smartsigns-heading">
          <h2 id="smartsigns-heading" className={opp.h2}>
            {data.smartSigns.title}
          </h2>
          <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{data.smartSigns.lead}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={data.smartSigns.href} className={opp.linkAccent}>
              SmartSign service page
            </Link>
            <span className={opp.subtle}>·</span>
            <Link href={data.smartSigns.bakehouseHref} className={opp.linkAccent}>
              Bakehouse institutional page
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.smartSigns.sections.map((section) => (
              <article key={section.id} className={opp.card}>
                <div className={opp.cardPad}>
                  <h3 className={opp.h3}>{section.title}</h3>
                  <p className={cn(opp.body, 'mt-2')}>{section.body}</p>
                  {section.placeholder ? (
                    <p className={cn(opp.subtle, 'mt-3 italic')}>{section.placeholder}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={opp.section} aria-labelledby="cases-heading">
          <h2 id="cases-heading" className={opp.h2}>
            Nested cases
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {data.cases.map((c) => (
              <Link key={c.id} href={c.href} className={opp.cardInteractive}>
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800">
                  <Image src={c.imageSrc} alt={c.imageAlt} fill className="object-cover" sizes="400px" />
                </div>
                <h3 className={opp.h3}>{c.title}</h3>
                <p className={cn(opp.muted, 'mt-1')}>{c.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={opp.sectionSm} aria-labelledby="related-heading">
          <h2 id="related-heading" className={opp.h2}>
            Related flagships
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3" role="list">
            {data.relatedFlagships.map((f) => (
              <li key={f.id}>
                <Link href={f.href} className={opp.btnSecondary}>
                  {f.label}
                  {f.status === 'building' ? (
                    <span className={opp.subtle}>Building</span>
                  ) : (
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
