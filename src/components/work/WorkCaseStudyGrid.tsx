import Link from 'next/link';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { getEvidenceProject } from '@/content/evidence/projects';
import type { WorkCaseStudy } from '@/content/work/types';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type WorkCaseStudyGridProps = {
  sectionTitle?: string;
  intro?: string;
  caseStudies: WorkCaseStudy[];
};

export function WorkCaseStudyGrid({ sectionTitle, intro, caseStudies }: WorkCaseStudyGridProps) {
  return (
    <section id="case-studies" className={opp.section}>
      <h2 className={opp.h2}>{sectionTitle ?? 'Selected evidence'}</h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {caseStudies.map((item) => {
          const base = getEvidenceProject(item.evidenceId);
          if (!base) return null;
          const title = item.title ?? base.title;
          const category = item.category ?? base.category;
          const summary = item.summary ?? base.summary;
          const skillTags = item.skillTags ?? base.skillTags;
          const imageSrc = base.imageSrc;
          const imageAlt = base.imageAlt;
          const imageLocal = base.imageLocal;
          const href = base.href;

          return (
            <article key={item.evidenceId} className={`flex flex-col ${opp.card}`}>
              <div className={opp.cardMedia}>
                <OpportunityCardImage src={imageSrc} alt={imageAlt} local={imageLocal} />
              </div>
              <div className={opp.cardPad}>
                <p className={opp.accentCategory}>{category}</p>
                <h3 className={cn(opp.matrixPrimary, 'mt-1')}>{title}</h3>
                <p className={opp.matrixSecondary}>{summary}</p>
                <p className={`mt-3 ${opp.label}`}>Relevant stack</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {skillTags.map((t) => (
                    <li key={t} className={opp.pill}>
                      {t}
                    </li>
                  ))}
                </ul>
                {href ? (
                  href.startsWith('/') ? (
                    <Link href={href} className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}>
                      View context
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}
                    >
                      View site
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
