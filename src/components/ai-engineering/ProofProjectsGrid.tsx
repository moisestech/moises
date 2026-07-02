import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { OpportunityCardImage } from '@/components/opportunities/OpportunityCardImage';
import { opp } from '@/components/opportunities/opportunityTheme';
import type { ProofProject } from '@/content/ai-engineering/packet';
import { cn } from '@/lib/utils';

type ProofProjectsGridProps = {
  projects: ProofProject[];
  sectionId?: string;
  title?: string;
  intro?: string;
};

export function ProofProjectsGrid({
  projects,
  sectionId = 'proof',
  title = 'Proof projects',
  intro,
}: ProofProjectsGridProps) {
  return (
    <section id={sectionId} className={opp.section}>
      <h2 className={opp.h2}>{title}</h2>
      {intro ? <p className={`mt-2 max-w-3xl ${opp.muted}`}>{intro}</p> : null}
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} id={`proof-${project.slug}`} className={`flex flex-col ${opp.card}`}>
            <div className={opp.cardMedia}>
              <OpportunityCardImage src={project.imageSrc} alt={project.imageAlt} />
            </div>
            <div className={opp.cardPad}>
              <p className={opp.accentCategory}>AI systems · {project.title}</p>
              <h3 className={cn(opp.matrixPrimary, 'mt-1')}>{project.title}</h3>
              <p className={opp.matrixSecondary}>{project.problem}</p>
              <p className={`mt-3 ${opp.label}`}>System built</p>
              <p className={opp.matrixSecondary}>{project.systemBuilt}</p>
              <p className={`mt-3 ${opp.label}`}>Relevant stack</p>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <li key={tag} className={opp.pill}>
                    {tag}
                  </li>
                ))}
              </ul>
              <p className={`mt-3 ${opp.label}`}>Outcome</p>
              <p className={opp.matrixSecondary}>{project.outcome}</p>
              {project.href ? (
                project.href.startsWith('/') ? (
                  <Link
                    href={project.href}
                    className={`mt-4 inline-flex items-center gap-1 text-sm ${opp.linkAccent}`}
                  >
                    View project
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ) : (
                  <a
                    href={project.href}
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
        ))}
      </div>
    </section>
  );
}
