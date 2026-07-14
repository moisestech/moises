import Link from 'next/link';
import {
  GrantBudgetTable,
  GrantPageChrome,
  GrantPlaceholderFigure,
  GrantRelatedWorks,
  GrantSection,
  GrantVisitorJourney,
} from '@/components/grant/shared/GrantProposalUi';
import { AuthoredStatesGrid } from '@/components/grant/modal-gray-area-2026/AuthoredStatesGrid';
import { ContextStudySelector } from '@/components/grant/modal-gray-area-2026/ContextStudySelector';
import { FabricationAnatomy } from '@/components/grant/modal-gray-area-2026/FabricationAnatomy';
import { FastSlowArchitecture } from '@/components/grant/modal-gray-area-2026/FastSlowArchitecture';
import { MachineSentencePrototype } from '@/components/grant/modal-gray-area-2026/MachineSentencePrototype';
import { RiskRegisterTable } from '@/components/grant/modal-gray-area-2026/RiskRegisterTable';
import { SafetyControlDiagram } from '@/components/grant/modal-gray-area-2026/SafetyControlDiagram';
import { ScopeLadder } from '@/components/grant/modal-gray-area-2026/ScopeLadder';
import { TemporalChoreography } from '@/components/grant/modal-gray-area-2026/TemporalChoreography';
import { VoidGrammarDiagram } from '@/components/grant/modal-gray-area-2026/VoidGrammarDiagram';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaArtistBio, modalGrayAreaUnverifiedClaims } from '@/content/grants/modal-gray-area-2026/shared';
import {
  machineSentence,
  machineSentenceBitm,
  machineSentenceBudget,
  machineSentenceBudgetTotal,
  machineSentenceClosing,
  machineSentenceContextStudies,
  machineSentenceHero,
  machineSentencePrivacy,
  machineSentenceRelated,
  machineSentenceVisitorJourney,
} from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';

export function MachineSentencePage() {
  const p = machineSentence;

  return (
    <GrantPageChrome
      backHref={modalGrayAreaMeta.hubRoute}
      backLabel="← Modal × Gray Area 2026"
      bgClassName="bg-[#f3f1eb] dark:bg-neutral-950"
    >
      <article>
        <header className="mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">{p.status}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{p.title}</h1>
          <p className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 font-medium mb-2">{p.subtitle}</p>
          <p className="text-sm text-stone-500 mb-4">{p.formalAlias}</p>
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
          <div className="bg-neutral-950 px-4 sm:px-0 py-6 sm:py-0 sm:bg-transparent">
            <GrantPlaceholderFigure media={machineSentenceHero} priority />
          </div>
        </div>

        <p className="text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-12 border-l-2 border-stone-900 dark:border-stone-100 pl-4 sm:pl-6">
          {p.thesis}
        </p>

        <GrantSection title="Three-stage encounter">
          <TemporalChoreography />
        </GrantSection>

        <GrantSection title="Concept">
          <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line leading-relaxed">
            {p.conceptStatement}
          </div>
          <p className="mt-6 text-stone-700 dark:text-stone-300 leading-relaxed">{p.lede}</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="border border-stone-200 dark:border-stone-700 p-4">
              <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Primary gesture</p>
              <p className="font-medium">{p.spatialGesture.primary}</p>
            </div>
            <div className="border border-stone-200 dark:border-stone-700 p-4">
              <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Secondary form</p>
              <p className="font-medium">{p.spatialGesture.secondary}</p>
            </div>
            <div className="border border-stone-200 dark:border-stone-700 p-4">
              <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">Endpoint</p>
              <p className="font-medium">{p.spatialGesture.endpoint}</p>
            </div>
          </div>
        </GrantSection>

        <GrantSection title="Physical anatomy">
          <dl className="divide-y divide-stone-200 dark:divide-stone-700 border border-stone-200 dark:border-stone-700">
            {p.anatomy.map((row) => (
              <div key={row.label} className="grid sm:grid-cols-3 gap-2 px-4 py-3 text-sm">
                <dt className="font-medium">{row.label}</dt>
                <dd className="sm:col-span-2 text-stone-600 dark:text-stone-400">{row.value}</dd>
              </div>
            ))}
          </dl>
        </GrantSection>

        <GrantSection title="Screen grammar">
          <VoidGrammarDiagram />
        </GrantSection>

        <GrantSection title="Authored physical states">
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            The model interprets. The artist determines what forms interpretation is permitted to take.
          </p>
          <AuthoredStatesGrid />
        </GrantSection>

        <GrantSection id="prototype" title="Live prototype">
          <MachineSentencePrototype />
        </GrantSection>

        <GrantSection title="Context studies">
          <ContextStudySelector studies={machineSentenceContextStudies} />
        </GrantSection>

        <GrantSection title="Visitor journey">
          <GrantVisitorJourney steps={machineSentenceVisitorJourney} />
        </GrantSection>

        <GrantSection title="AI and Modal relationship">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
            Modal is the intentional inference substrate for structured body scoring (and, after selection, for
            slower visual-skin computation). The website sealed API route never exposes credentials. Without a
            deployed endpoint, deterministic mock mode remains a complete application proof.
          </p>
          <p className="text-sm text-stone-500">
            Setup notes:{' '}
            <code className="text-xs">modal/machine-sentence/README.md</code>
          </p>
        </GrantSection>

        <GrantSection title="Fast path and slow path">
          <FastSlowArchitecture />
        </GrantSection>

        <GrantSection title="Reliability as artistic form">
          <SafetyControlDiagram />
          <p className="mt-6 text-stone-700 dark:text-stone-300 leading-relaxed italic">
            A constrained field of possible bodies is more sculptural — and more credible — than unrestricted
            generative motion.
          </p>
        </GrantSection>

        <GrantSection title="Privacy and data">
          <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
            {machineSentencePrivacy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GrantSection>

        <GrantSection title="Minimum / preferred / stretch">
          <ScopeLadder />
        </GrantSection>

        <GrantSection title="Fabrication and testing">
          <FabricationAnatomy />
        </GrantSection>

        <GrantSection title="Budget">
          <p className="text-sm text-stone-500 mb-4">
            Draft within the $5,000 production support ceiling. Honorarium and Modal credits are separate.
            Zero personal cash before written production authorization.
          </p>
          <GrantBudgetTable lines={machineSentenceBudget} total={machineSentenceBudgetTotal} />
        </GrantSection>

        <GrantSection title="Risk register">
          <RiskRegisterTable />
        </GrantSection>

        <GrantSection title={machineSentenceBitm.heading}>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{machineSentenceBitm.body}</p>
          <Link href={machineSentenceBitm.href} className="text-sm underline underline-offset-4">
            Open Born into the Machine →
          </Link>
        </GrantSection>

        <GrantSection title="Artist context">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{modalGrayAreaArtistBio}</p>
          <GrantRelatedWorks works={machineSentenceRelated} />
        </GrantSection>

        <GrantSection title="Application-stage claims">
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400">
            {modalGrayAreaUnverifiedClaims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
        </GrantSection>

        <GrantSection>
          <GrantPlaceholderFigure media={machineSentenceClosing} />
          <p className="mt-8 text-2xl font-medium tracking-tight">
            What forms is inference permitted to take?
          </p>
          <p className="mt-4 text-sm text-stone-500">
            Moises Sanabria · Miami, Florida · Modal × Gray Area 2026 proposal
          </p>
        </GrantSection>

        <footer className="border-t border-stone-200 dark:border-stone-700 pt-8 flex flex-wrap gap-4 text-sm">
          <Link href={modalGrayAreaMeta.hubRoute} className="underline underline-offset-4">
            ← Application packet
          </Link>
          <a
            href={modalGrayAreaMeta.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Apply at modal.art
          </a>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </footer>
      </article>
    </GrantPageChrome>
  );
}
