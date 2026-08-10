'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { creativeAiFlagship } from '@/content/flagships/creative-ai';
import { flagshipEvidence } from '@/content/evidence/flagships';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function CreativeAiClient() {
  const data = creativeAiFlagship;

  return (
    <div className={opp.shell}>
      <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <p className={opp.accent}>Hiring flagship · Creative systems</p>
        <h1 className={cn(opp.h1, 'mt-2')}>{data.title}</h1>
        <p className={cn(opp.bodyLg, 'mt-3 max-w-3xl')}>{data.subtitle}</p>
        <p className={cn(opp.body, 'mt-4 max-w-3xl')}>{data.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={data.primaryCta.href}
            className={opp.btnPrimary}
            onClick={() => track('flagship_cta_click', { flagship: 'creative-ai', kind: 'primary' })}
          >
            {data.primaryCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href={data.secondaryCta.href} className={opp.btnSecondary}>
            {data.secondaryCta.label}
          </Link>
          <Link href={data.tertiaryCta.href} className={opp.btnSecondaryMedium}>
            {data.tertiaryCta.label}
          </Link>
        </div>

        <section className={opp.section} aria-labelledby="layers-heading">
          <h2 id="layers-heading" className={opp.h2}>
            Three layers
          </h2>
          <div className="mt-8 space-y-6">
            {data.layers.map((layer, i) => (
              <article key={layer.id} className={opp.callout}>
                <p className={opp.accent}>
                  {String(i + 1).padStart(2, '0')} · {layer.title}
                </p>
                <p className={cn(opp.body, 'mt-2')}>{layer.body}</p>
                <ul className="mt-3 flex flex-wrap gap-2" role="list">
                  {layer.caseIds.map((id) => {
                    const ev = flagshipEvidence[id as keyof typeof flagshipEvidence];
                    if (!ev || !ev.claimable) return null;
                    const external = ev.href.startsWith('http');
                    return (
                      <li key={id}>
                        {external ? (
                          <a
                            href={ev.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={opp.pillTag}
                          >
                            {ev.title}
                          </a>
                        ) : (
                          <Link href={ev.href} className={opp.pillTag}>
                            {ev.title}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={opp.section} aria-labelledby="shipped-heading">
          <h2 id="shipped-heading" className={opp.h2}>
            Shipped cases
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {data.cases.map((c) => {
              const external = c.href.startsWith('http');
              const inner = (
                <>
                  <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800">
                    <Image src={c.imageSrc} alt={c.imageAlt} fill className="object-cover" sizes="400px" />
                  </div>
                  <p className={opp.subtle}>{c.subtitle}</p>
                  <h3 className={cn(opp.h3, 'mt-1')}>{c.title}</h3>
                  <p className={cn(opp.muted, 'mt-1')}>{c.summary}</p>
                  {c.repoUrl ? (
                    <span className={cn(opp.linkAccent, 'mt-2 inline-flex items-center gap-1 text-xs')}>
                      GitHub <ExternalLink className="h-3 w-3" aria-hidden />
                    </span>
                  ) : null}
                </>
              );
              return external ? (
                <a
                  key={c.id}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={opp.cardInteractive}
                >
                  {inner}
                </a>
              ) : (
                <Link key={c.id} href={c.href} className={opp.cardInteractive}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        <section className={opp.section} aria-labelledby="digilab-heading">
          <h2 id="digilab-heading" className={opp.h2}>
            {data.digilabBridge.title}
          </h2>
          <Link href={data.digilabBridge.href} className={cn(opp.cardInteractive, 'mt-4 block')}>
            <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800">
              <Image
                src={data.digilabBridge.imageSrc}
                alt={data.digilabBridge.imageAlt}
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
            <p className={opp.body}>{data.digilabBridge.body}</p>
          </Link>
        </section>

        <section
          id={data.futureCases.id}
          className={opp.section}
          aria-labelledby="future-heading"
        >
          <h2 id="future-heading" className={opp.h2}>
            {data.futureCases.title}
          </h2>
          <p className={cn(opp.body, 'mt-2 max-w-3xl')}>{data.futureCases.body}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
            {data.futureCases.slots.map((slot) => (
              <li key={slot.id} className={cn(opp.card, 'p-4 opacity-70')}>
                <p className={opp.accent}>Planned</p>
                <h3 className={cn(opp.h3, 'mt-1')}>{slot.title}</h3>
                <p className={cn(opp.subtle, 'mt-2')}>{slot.note}</p>
              </li>
            ))}
          </ul>
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
                  {f.status === 'building' ? <span className={opp.subtle}>Building</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
