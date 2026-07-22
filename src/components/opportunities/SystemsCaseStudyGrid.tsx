import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import {
  DELIVERY_STATUS_LABELS,
  EVIDENCE_STATUS_LABELS,
  type SystemsCaseStudy,
} from '@/content/opportunities/systemsDossier';
import { cn } from '@/lib/utils';

type SystemsCaseStudyGridProps = {
  title: string;
  intro?: string;
  studies: SystemsCaseStudy[];
  sectionId?: string;
};

export function SystemsCaseStudyGrid({
  title,
  intro,
  studies,
  sectionId = 'work',
}: SystemsCaseStudyGridProps) {
  return (
    <section id={sectionId} className={opp.section} aria-labelledby={`${sectionId}-heading`}>
      <h2 id={`${sectionId}-heading`} className={opp.h2}>
        {title}
      </h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {studies.map((study) => (
          <article key={study.id} className={`flex flex-col ${opp.card}`}>
            <div className={opp.cardMedia}>
              {study.imageLocal ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={study.imageSrc} alt={study.imageAlt} className="h-full w-full object-contain p-8" />
              ) : study.imageSrc.startsWith('http') ? (
                <Image
                  src={study.imageSrc}
                  alt={study.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <OpportunityCardImage src={study.imageSrc} alt={study.imageAlt} local />
              )}
            </div>
            <div className={opp.cardPad}>
              <div className="flex flex-wrap items-center gap-2">
                <p className={opp.accentCategory}>{study.category}</p>
                {study.deliveryStatus ? (
                  <span className={opp.pill}>{DELIVERY_STATUS_LABELS[study.deliveryStatus]}</span>
                ) : null}
                <span className={opp.pill}>{EVIDENCE_STATUS_LABELS[study.evidenceStatus]}</span>
              </div>
              <h3 className={cn(opp.matrixPrimary, 'mt-1')}>{study.title}</h3>

              <dl className="mt-3 space-y-3">
                <div>
                  <dt className={opp.label}>Initial ambiguity</dt>
                  <dd className={opp.matrixSecondary}>{study.ambiguity}</dd>
                </div>
                <div>
                  <dt className={opp.label}>Stakeholders</dt>
                  <dd className={opp.matrixSecondary}>{study.stakeholders}</dd>
                </div>
                <div>
                  <dt className={opp.label}>Ownership</dt>
                  <dd className={opp.matrixSecondary}>{study.ownership}</dd>
                </div>
                <div>
                  <dt className={opp.label}>System built</dt>
                  <dd className={opp.matrixSecondary}>{study.systemBuilt}</dd>
                </div>
                <div>
                  <dt className={opp.label}>Production responsibility</dt>
                  <dd className={opp.matrixSecondary}>{study.production}</dd>
                </div>
                {study.challenge ? (
                  <div>
                    <dt className={opp.label}>Challenge</dt>
                    <dd className={opp.matrixSecondary}>{study.challenge}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className={opp.label}>Outcome</dt>
                  <dd className={opp.matrixSecondary}>{study.outcome}</dd>
                </div>
                <div>
                  <dt className={opp.label}>Connection to this role</dt>
                  <dd className={opp.matrixSecondary}>{study.roleConnection}</dd>
                </div>
              </dl>

              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Skills">
                {study.skillTags.map((tag) => (
                  <li key={tag} className={opp.pill}>
                    {tag}
                  </li>
                ))}
              </ul>

              {study.href ? (
                study.href.startsWith('/') ? (
                  <Link href={study.href} className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}>
                    {study.linkLabel ?? 'View context'}
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ) : (
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}
                  >
                    {study.linkLabel ?? 'View site'}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
