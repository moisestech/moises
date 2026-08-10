'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Mail } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { agenticOpsProject } from '@/content/flagships/agentic-ops';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function AgenticOpsClient() {
  const project = agenticOpsProject;

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
        <p className={cn(opp.bodyLg, 'mt-3 max-w-3xl')}>{project.subtitle}</p>

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
          <p className={opp.illustrationCaption}>
            Status: <strong>Building</strong> — RAG / MCP / agents stay gated until demo + evals clear.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section aria-labelledby="what">
            <h2 id="what" className={opp.h2}>
              What it is
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.whatItIs}</p>
          </section>

          <section className={opp.sectionSm} aria-labelledby="domain">
            <h2 id="domain" className={opp.h2}>
              Domain
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.domain}</p>
          </section>

          <section className={opp.sectionSm} aria-labelledby="flow">
            <h2 id="flow" className={opp.h2}>
              Runtime flow
            </h2>
            <ol className="mt-4 flex flex-wrap gap-2" role="list">
              {project.flow.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className={opp.pillTag}>
                    {i + 1}. {step}
                  </span>
                  {i < project.flow.length - 1 ? (
                    <span className={opp.subtle} aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          <section className={opp.sectionSm} aria-labelledby="tools">
            <h2 id="tools" className={opp.h2}>
              Four tools (MCP)
            </h2>
            <ul className={cn(opp.tableWrap, 'mt-4 divide-y divide-stone-100 dark:divide-stone-800')} role="list">
              {project.tools.map((tool) => (
                <li key={tool.name} className="flex flex-wrap items-start justify-between gap-2 px-4 py-3">
                  <div>
                    <p className={opp.matrixPrimary}>
                      <code className={opp.code}>{tool.name}</code>
                    </p>
                    <p className={opp.matrixSecondary}>{tool.purpose}</p>
                  </div>
                  <span className={opp.pill}>{tool.permission}</span>
                </li>
              ))}
            </ul>
            <p className={cn(opp.subtle, 'mt-3')}>
              WRITE / EXTERNAL / SENSITIVE tools require human approval before execution.
            </p>
          </section>

          <section className={opp.sectionSm} aria-labelledby="built">
            <h2 id="built" className={opp.h2}>
              What is being built
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.whatIBuilt}</p>
          </section>

          <section className={opp.sectionSm} aria-labelledby="stack">
            <h2 id="stack" className={opp.h2}>
              Stack
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2" role="list">
              {project.stack.map((tag) => (
                <li key={tag}>
                  <span className={opp.pillTag}>{tag}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={opp.sectionSm} aria-labelledby="gates">
            <h2 id="gates" className={opp.h2}>
              Application-ready gates
            </h2>
            <ul className="mt-4 space-y-2" role="list">
              {project.gates.map((gate) => (
                <li key={gate.id} className={cn(opp.body, 'flex gap-2')}>
                  <span aria-hidden>{gate.done ? '✓' : '○'}</span>
                  <span>{gate.label}</span>
                </li>
              ))}
            </ul>
            <p className={cn(opp.callout, 'mt-6', opp.body)}>{project.demoNote}</p>
          </section>

          <section className={opp.sectionSm} aria-labelledby="why">
            <h2 id="why" className={opp.h2}>
              Why it matters
            </h2>
            <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{project.whyItMatters}</p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={opp.btnPrimary}
            onClick={() =>
              track('project_dossier_cta_click', { kind: 'github', slug: project.slug })
            }
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            GitHub repository
          </a>
          <a href="mailto:m@moises.tech" className={opp.btnSecondary}>
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            Email
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3" role="list">
          {project.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className={opp.linkAccent}>
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
