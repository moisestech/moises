'use client';

import Link from 'next/link';
import { AllowAskDeny, ModelVsHarness } from '@/components/opportunities/AepHarnessDiagrams';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { AepCapacityLine } from '@/components/workshops/AepCapacityLine';
import { AepGitHubLink } from '@/components/workshops/AepGitHubMark';
import { AepProblemCodePair } from '@/components/workshops/AepProblemCodePair';
import { AepWorkshopPlate } from '@/components/workshops/AepWorkshopPlate';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import { AEP_CODE_PAIRS } from '@/content/workshops/aep-code-pairs';
import {
  AEP_HONESTY_LINE,
  AEP_JUMP_NAV,
  AEP_WORKSHOP_PAGE_PAD,
  AEP_WORKSHOP_SCROLL_MT,
} from '@/content/workshops/aep-workshop-copy';
import {
  AEP_REPO,
  aepThinSliceIntro,
  aepThinSliceSteps,
  aepThinSliceTitle,
} from '@/content/workshops/aepHarness';

const JUMP_TONE: Record<(typeof AEP_JUMP_NAV)[number]['tone'], string> = {
  allow: 'hover:border-emerald-300 hover:text-emerald-800 dark:hover:border-emerald-700 dark:hover:text-emerald-200',
  ask: 'hover:border-amber-300 hover:text-amber-800 dark:hover:border-amber-700 dark:hover:text-amber-200',
  deny: 'hover:border-rose-300 hover:text-rose-800 dark:hover:border-rose-700 dark:hover:text-rose-200',
  inspect: 'hover:border-cyan-300 hover:text-cyan-800 dark:hover:border-cyan-700 dark:hover:text-cyan-200',
};

export function AgenticEvidencePipelineClient() {
  return (
    <main className={cn(opp.shell, 'overflow-x-clip pb-20 sm:pb-24')}>
      <div className={cn(opp.main, AEP_WORKSHOP_PAGE_PAD, 'pb-0')}>
        <p className={opp.accent}>Workshop · reference implementation</p>
        <h1 className={cn(opp.h1, 'mt-2')}>Agentic Evidence Pipeline</h1>
      </div>

      <nav
        aria-label="On this page"
        className={cn(
          opp.stickyNav,
          'top-[var(--site-header-height,5rem)] px-3 sm:px-4',
        )}
      >
        <div className="mx-auto flex max-w-5xl flex-wrap gap-2">
          {AEP_JUMP_NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold text-stone-600 dark:border-stone-700 dark:text-stone-300',
                JUMP_TONE[item.tone],
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <section id="capacity" className={AEP_WORKSHOP_SCROLL_MT} aria-labelledby="capacity-heading">
          <h2 id="capacity-heading" className="sr-only">
            Capacity
          </h2>
          <AepCapacityLine />
          <p className={cn(opp.body, 'mt-5 max-w-2xl')}>{AEP_HONESTY_LINE}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <AepGitHubLink href={AEP_REPO} variant="button">
              Inspect the repo
            </AepGitHubLink>
            <Link href="/forward-deployed/evidence" className={opp.linkAccent}>
              Evidence status
            </Link>
            <Link href="/forward-deployed" className={cn(opp.muted, 'hover:underline')}>
              Forward-Deployed
            </Link>
            <Link href="/workshop/trust-is-not-a-vibe" className={cn(opp.muted, 'hover:underline')}>
              Trust Is Not a Vibe
            </Link>
          </div>
          <AepWorkshopPlate id="hero-capacity" className="mt-8" />
        </section>

        <div className="mt-6">
          <AepWorkshopPlate id="model-vs-harness" className="mb-6" />
          <ModelVsHarness />
        </div>

        <section id="authority" className={cn(opp.section, AEP_WORKSHOP_SCROLL_MT)} aria-labelledby="authority-heading">
          <h2 id="authority-heading" className={opp.h2}>
            Authority
          </h2>
          <p className={cn(opp.muted, 'mt-3 max-w-2xl')}>
            Allow, ask, or deny. Writes wait for a person. Unsupported citations do not get invented repair prose.
          </p>
          <AepWorkshopPlate id="allow-ask-deny" className="mt-6" />
          <AllowAskDeny className="mt-6" />
        </section>

        <section id="code" className={cn(opp.section, AEP_WORKSHOP_SCROLL_MT)} aria-labelledby="code-heading">
          <h2 id="code-heading" className={opp.h2}>
            The problem, then the code
          </h2>
          <p className={cn(opp.muted, 'mt-3 max-w-2xl')}>
            Short excerpts from public files. Each pair is a failure the harness already handles.
          </p>
          <AepWorkshopPlate id="fail-closed" className="mt-6 max-w-xl" />
          <div className="mt-10 space-y-14">
            {AEP_CODE_PAIRS.map((pair) => (
              <AepProblemCodePair key={pair.id} pair={pair} />
            ))}
          </div>
        </section>

        <section id="process" className={cn(opp.section, AEP_WORKSHOP_SCROLL_MT)} aria-labelledby="process-heading">
          <h2 id="process-heading" className="sr-only">
            Thin slice
          </h2>
          <AepWorkshopPlate id="thin-slice" className="mb-8" />
          <InnovationProcess
            sectionId="thin-slice-method"
            content={{
              title: aepThinSliceTitle,
              intro: aepThinSliceIntro,
              steps: aepThinSliceSteps,
              visual: 'design-fde-loop',
            }}
            layout="horizontal"
          />
        </section>

        <section id="repo" className={cn(opp.section, AEP_WORKSHOP_SCROLL_MT)} aria-labelledby="repo-heading">
          <h2 id="repo-heading" className={opp.h2}>
            Inspect on GitHub
          </h2>
          <p className={cn(opp.body, 'mt-3 max-w-2xl')}>
            The public repo is the evidence. Offline evals use a deterministic fake provider. Live-model quality is not
            claimed here.
          </p>
          <AepWorkshopPlate id="github-inspect" className="mt-6" />
          <div className="mt-6">
            <AepGitHubLink href={AEP_REPO} variant="button">
              moisestech/agentic-evidence-pipeline
            </AepGitHubLink>
          </div>
        </section>
      </div>
    </main>
  );
}
