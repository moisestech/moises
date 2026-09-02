'use client';

import Link from 'next/link';
import { AllowAskDeny, ModelVsHarness } from '@/components/opportunities/AepHarnessDiagrams';
import { CodeInspectSection } from '@/components/opportunities/CodeInspectSection';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';
import {
  AEP_REPO,
  aepCodeInspect,
  aepThinSliceIntro,
  aepThinSliceSteps,
  aepThinSliceTitle,
} from '@/content/workshops/aepHarness';

export function AgenticEvidencePipelineClient() {
  return (
    <main className={cn(opp.shell, 'overflow-x-clip pb-20 sm:pb-24')}>
      <div className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <p className={opp.accent}>Workshop · reference implementation</p>
        <h1 className={cn(opp.h1, 'mt-2')}>Agentic Evidence Pipeline</h1>
        <p className={cn(opp.body, 'mt-4 max-w-3xl')}>
          A TypeScript reference for governed evidence — not a hosted customer product, and not Deloitte
          client work. The seven-stage strip is FDE / Agentic Ops teaching vocabulary. The thin slice below
          is a proposed first engagement, not a completed delivery.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          <a href={AEP_REPO} target="_blank" rel="noreferrer" className={opp.linkAccent}>
            Inspect the GitHub repo
          </a>
          <Link href="/forward-deployed" className={opp.linkAccent}>
            Back to Forward-Deployed AI Systems
          </Link>
          <Link href="/workshop/trust-is-not-a-vibe" className={opp.linkAccent}>
            Trust Is Not a Vibe — 30-minute evals lab
          </Link>
        </div>

        <div className="mt-12 space-y-12 sm:mt-14">
          <ModelVsHarness />
          <AllowAskDeny />
          <CodeInspectSection data={aepCodeInspect} />
          <InnovationProcess
            content={{
              title: aepThinSliceTitle,
              intro: aepThinSliceIntro,
              steps: aepThinSliceSteps,
              visual: 'design-fde-loop',
            }}
            layout="horizontal"
          />
        </div>
      </div>
    </main>
  );
}
