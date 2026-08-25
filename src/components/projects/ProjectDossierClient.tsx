'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Mail } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { SystemPipelineCaseStudy } from '@/components/opportunities/SystemPipelineCaseStudy';
import type { ProjectDossier } from '@/content/projects/types';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

type ProjectDossierClientProps = {
  project: ProjectDossier;
};

export function ProjectDossierClient({ project }: ProjectDossierClientProps) {
  const isExternal =
    project.externalHref?.startsWith('http://') || project.externalHref?.startsWith('https://');

  return (
    <div className={opp.shell}>
      <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <Link
          href="/ai-engineering"
          className={cn(opp.linkAccent, 'inline-flex items-center gap-1.5 text-sm')}
          onClick={() => track('project_dossier_cta_click', { kind: 'back', slug: project.slug })}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to AI Engineering packet
        </Link>

        <p className={cn(opp.accent, 'mt-6')}>{project.category}</p>
        <h1 className={cn(opp.h1, 'mt-2')}>{project.title}</h1>
        {project.lead ? (
          <p className={cn(opp.bodyLg, 'mt-3 max-w-3xl text-stone-800 dark:text-stone-200')}>
            {project.lead}
          </p>
        ) : null}

        <div className={cn(opp.illustrationPanel, 'mt-6')}>
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {project.productFlow?.length ? (
            <section aria-labelledby={`${project.slug}-flow`}>
              <h2 id={`${project.slug}-flow`} className={opp.h2}>
                What a creator could actually do
              </h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {project.productFlow.map((step, index) => (
                  <li key={step.label} className="border-t border-stone-800 pt-4 dark:border-stone-200">
                    <p className="font-mono text-[11px] tracking-[0.14em] text-stone-500">
                      {String(index + 1).padStart(2, '0')}
                      {index < project.productFlow!.length - 1 ? ' →' : ''}
                    </p>
                    <h3 className={`mt-2 ${opp.h3MoMA}`}>{step.label}</h3>
                    <p className={`mt-2 ${opp.body}`}>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <section aria-labelledby={`${project.slug}-what`}>
            <h2 id={`${project.slug}-what`} className={opp.h2}>
              What it is
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.whatItIs}</p>
          </section>

          <section className={opp.sectionSm} aria-labelledby={`${project.slug}-built`}>
            <h2 id={`${project.slug}-built`} className={opp.h2}>
              What I built
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.whatIBuilt}</p>
          </section>

          {project.systemPipeline ? (
            <SystemPipelineCaseStudy
              data={project.systemPipeline}
              sectionId={`${project.slug}-pipeline`}
              variant="full"
            />
          ) : null}

          <section className={opp.sectionSm} aria-labelledby={`${project.slug}-stack`}>
            <h2 id={`${project.slug}-stack`} className={opp.h2}>
              Relevant stack
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2" role="list">
              {project.stack.map((tag) => (
                <li key={tag}>
                  <span className={opp.pillTag}>{tag}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={opp.sectionSm} aria-labelledby={`${project.slug}-why`}>
            <h2 id={`${project.slug}-why`} className={opp.h2}>
              Why it matters for AI engineering roles
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.whyItMatters}</p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.externalHref ? (
            isExternal ? (
              <a
                href={project.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className={opp.btnSecondary}
                onClick={() =>
                  track('project_dossier_cta_click', { kind: 'external', slug: project.slug })
                }
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                {project.externalLabel ?? 'View live project'}
              </a>
            ) : (
              <Link
                href={project.externalHref}
                className={opp.btnSecondary}
                onClick={() =>
                  track('project_dossier_cta_click', { kind: 'related', slug: project.slug })
                }
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                {project.externalLabel ?? 'Related page'}
              </Link>
            )
          ) : null}
          <a
            href="mailto:m@moises.tech"
            className={opp.btnPrimary}
            onClick={() => track('project_dossier_cta_click', { kind: 'email', slug: project.slug })}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            m@moises.tech
          </a>
        </div>
      </main>
    </div>
  );
}
