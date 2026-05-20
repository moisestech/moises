import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { getEvidenceProject } from '@/content/evidence/projects';
import type { Opportunity } from '@/content/opportunities/types';

type CaseStudyGridProps = {
  opportunity: Opportunity;
};

function CardImage({ src, alt, local }: { src: string; alt: string; local?: boolean }) {
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    );
  }
  return <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />;
}

export function CaseStudyGrid({ opportunity }: CaseStudyGridProps) {
  return (
    <section id="case-studies" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
        {opportunity.caseStudiesSectionTitle ?? 'Case studies'}
      </h2>
      {opportunity.caseStudiesIntro ? (
        <p className="mt-2 max-w-3xl text-sm text-stone-600">{opportunity.caseStudiesIntro}</p>
      ) : null}
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {opportunity.featuredProjectIds.map((id) => {
          const cs = getEvidenceProject(id);
          if (!cs) return null;
          return (
            <article
              key={cs.id}
              className="flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] border-b border-stone-100 bg-stone-100">
                <CardImage src={cs.imageSrc} alt={cs.imageAlt} local={cs.imageLocal} />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-cyan-500">{cs.category}</p>
                <h3 className="mt-1 font-['MoMA_Sans'] text-lg font-semibold text-stone-950">{cs.title}</h3>
                <p className="mt-2 text-sm text-stone-700">{cs.summary}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-stone-500">Relevant skills</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {cs.skillTags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs text-stone-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {cs.href ? (
                  cs.href.startsWith('/') ? (
                    <Link
                      href={cs.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-500 underline-offset-2 hover:underline"
                    >
                      View context
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : (
                    <a
                      href={cs.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-500 hover:underline"
                    >
                      View context
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
