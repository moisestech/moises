import Link from 'next/link';
import {
  GrantPageChrome,
  GrantPlaceholderFigure,
  GrantRelatedWorks,
  GrantSection,
} from '@/components/grant/shared/GrantProposalUi';
import { AuthoredStatesGrid } from '@/components/grant/pioneer-works-residency-2027/AuthoredStatesGrid';
import { FabricationAnatomy } from '@/components/grant/pioneer-works-residency-2027/FabricationAnatomy';
import { FacilitiesRelationship } from '@/components/grant/pioneer-works-residency-2027/FacilitiesRelationship';
import { MachineSentenceDigitalStudy } from '@/components/grant/pioneer-works-residency-2027/MachineSentenceDigitalStudy';
import { MachineSentenceGrammar } from '@/components/grant/pioneer-works-residency-2027/MachineSentenceGrammar';
import { PioneerWorksStudioPlan } from '@/components/grant/pioneer-works-residency-2027/PioneerWorksStudioPlan';
import { PublicEncounter } from '@/components/grant/pioneer-works-residency-2027/PublicEncounter';
import { ResidencyTimeline } from '@/components/grant/pioneer-works-residency-2027/ResidencyTimeline';
import { RiskRegister } from '@/components/grant/pioneer-works-residency-2027/RiskRegister';
import { ScopeLadder } from '@/components/grant/pioneer-works-residency-2027/ScopeLadder';
import { SecondSundaysChapters } from '@/components/grant/pioneer-works-residency-2027/SecondSundaysChapters';
import { TemporalChoreography } from '@/components/grant/pioneer-works-residency-2027/TemporalChoreography';
import { UnverifiedClaims } from '@/components/grant/pioneer-works-residency-2027/UnverifiedClaims';
import { WorkSampleIndex } from '@/components/grant/pioneer-works-residency-2027/WorkSampleIndex';
import { pioneerWorksMeta } from '@/content/grants/pioneer-works-residency-2027/meta';
import {
  pioneerWorksUnverifiedClaims,
  pioneerWorksWorkSamples,
} from '@/content/grants/pioneer-works-residency-2027/shared';
import {
  machineSentences,
  machineSentencesBitm,
  machineSentencesHero,
  machineSentencesModalLink,
  machineSentencesPlaceholders,
  machineSentencesPrivacy,
  machineSentencesRelated,
  proposalWorkSampleOrder,
} from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function MachineSentencesProposalPage() {
  const p = machineSentences;
  const proposalSamples = [...proposalWorkSampleOrder]
    .map((id) => pioneerWorksWorkSamples.find((s) => s.id === id))
    .filter((s): s is (typeof pioneerWorksWorkSamples)[number] => Boolean(s))
    .map((s, i) => ({ ...s, applicationOrder: i + 1 }));

  return (
    <GrantPageChrome
      backHref={pioneerWorksMeta.hubRoute}
      backLabel="← Pioneer Works 2027"
      bgClassName="bg-[#f3f1eb] dark:bg-neutral-950"
    >
      <article>
        <header className="mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">{p.status}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{p.title}</h1>
          <p className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 font-medium mb-2">
            {p.subtitle}
          </p>
          <p className="text-sm text-stone-500 mb-4">Anchor work: {p.centralWork}</p>
          <ul className="flex flex-wrap gap-2">
            {p.metadata.map((item) => (
              <li
                key={item}
                className="text-[10px] uppercase tracking-wide border border-stone-400 dark:border-stone-600 px-2 py-1 text-stone-600 dark:text-stone-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </header>

        <div className="mb-12 -mx-4 sm:mx-0">
          <GrantPlaceholderFigure media={machineSentencesHero} priority />
        </div>

        <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-6 border-l-2 border-stone-900 dark:border-stone-100 pl-4 sm:pl-6">
          {p.oneSentencePitch}
        </p>

        <GrantSection title="Project thesis">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">{p.projectStatement}</p>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{p.thesis}</p>
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line text-sm leading-relaxed">
            {p.coreDistinction}
          </div>
        </GrantSection>

        <GrantSection title="Why this requires five months">
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line leading-relaxed">
            {p.whyStudio}
          </div>
          <div className="mt-8">
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.studioEstablishing} />
          </div>
        </GrantSection>

        <GrantSection title="Machine Sentences as a body of work">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
            {p.seriesOverview}
          </p>
        </GrantSection>

        <GrantSection title="Machine Sentence No. 1">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
            {p.centralWorkBody}
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.poweredOff} />
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.threeMutations} />
          </div>
        </GrantSection>

        <GrantSection title="Physical grammar">
          <MachineSentenceGrammar />
        </GrantSection>

        <GrantSection title="Authored sculptural states">
          <AuthoredStatesGrid />
        </GrantSection>

        <GrantSection title="Five-month development plan">
          <ResidencyTimeline />
          <div className="mt-8">
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.fiveMonthEvolution} />
          </div>
        </GrantSection>

        <GrantSection title="Public-facing studio strategy">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
            {p.publicStudioStrategy}
          </p>
          <div className="mt-8">
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.glassVisitorView} />
          </div>
        </GrantSection>

        <GrantSection title="Conceptual 20 × 11-foot studio plan">
          <PioneerWorksStudioPlan />
        </GrantSection>

        <GrantSection title="Second Sundays chapters">
          <SecondSundaysChapters />
          <div className="mt-8">
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.secondSundays} />
          </div>
        </GrantSection>

        <GrantSection title="Visitor encounter">
          <PublicEncounter />
        </GrantSection>

        <GrantSection title="Temporal choreography">
          <TemporalChoreography />
        </GrantSection>

        <GrantSection title="AI interpretation and deterministic control">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line mb-8">
            {p.aiControl}
          </p>
          <MachineSentenceDigitalStudy />
        </GrantSection>

        <GrantSection title="Fabrication anatomy">
          <FabricationAnatomy />
          <div className="mt-8">
            <GrantPlaceholderFigure media={machineSentencesPlaceholders.materialPivot} />
          </div>
        </GrantSection>

        <GrantSection title="Facilities relationship">
          <FacilitiesRelationship />
        </GrantSection>

        <GrantSection title="Privacy, accessibility, and safety">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {machineSentencesPrivacy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GrantSection>

        <GrantSection title="Minimum / preferred / expanded scope">
          <ScopeLadder />
        </GrantSection>

        <GrantSection title={machineSentencesBitm.heading}>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
            {machineSentencesBitm.body}
          </p>
          <Link
            href={machineSentencesBitm.href}
            className="text-sm font-medium underline underline-offset-4"
          >
            Born into the Machine →
          </Link>
          <div className="mt-8 border border-stone-200 dark:border-stone-700 p-4 sm:p-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-2">
              {machineSentencesModalLink.heading}
            </h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
              {machineSentencesModalLink.body}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={machineSentencesModalLink.hubHref} className="underline underline-offset-4">
                Modal × Gray Area hub
              </Link>
              <Link
                href={machineSentencesModalLink.proposalHref}
                className="underline underline-offset-4"
              >
                Machine Sentence No. 1 dossier
              </Link>
            </div>
          </div>
        </GrantSection>

        <GrantSection title="Related completed works">
          <GrantRelatedWorks works={machineSentencesRelated} />
        </GrantSection>

        <GrantSection title="Work samples">
          <p className="text-sm text-stone-500 mb-6">
            Proposal narrative order places Machine Sentence No. 1 first. Form upload order remains the
            safer established-work sequence on the application hub.
          </p>
          <WorkSampleIndex samples={proposalSamples} />
        </GrantSection>

        <GrantSection title="Risks and unresolved questions">
          <RiskRegister />
        </GrantSection>

        <GrantSection title="Closing statement">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
            {p.closing}
          </p>
          <div className="mt-8">
            <UnverifiedClaims claims={pioneerWorksUnverifiedClaims} />
          </div>
        </GrantSection>

        <GrantSection title="Contact and application links">
          <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
            <li>
              <Link href={pioneerWorksMeta.hubRoute} className="underline underline-offset-4">
                Application hub / paste packet
              </Link>
            </li>
            <li>
              <a
                href={pioneerWorksMeta.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Official application — pioneerworks.org/residency
              </a>
              <span className="text-stone-500"> (portal openness unverified)</span>
            </li>
            <li>
              <Link href="/contact" className="underline underline-offset-4">
                Contact Moises Sanabria
              </Link>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:m@moises.tech" className="underline underline-offset-4">
                m@moises.tech
              </a>
            </li>
          </ul>
        </GrantSection>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 text-sm text-stone-500">
          <p>Moises Sanabria · MACHINE SENTENCES · Pioneer Works 2027 Visual Arts</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href={pioneerWorksMeta.hubRoute} className="underline underline-offset-4">
              ← Application hub
            </Link>
            <Link href="/grants" className="underline underline-offset-4">
              Grants directory
            </Link>
          </div>
        </footer>
      </article>
    </GrantPageChrome>
  );
}
