import Image from 'next/image';
import Link from 'next/link';
import {
  GrantBudgetTable,
  GrantExperienceBeats,
  GrantPageChrome,
  GrantPlaceholderFigure,
  GrantSection,
  GrantVisitorJourney,
} from '@/components/grant/shared/GrantProposalUi';
import { AuthoredStatesGrid } from '@/components/grant/modal-gray-area-2026/AuthoredStatesGrid';
import { FabricationCallouts } from '@/components/grant/modal-gray-area-2026/FabricationCallouts';
import { InferenceTwoSpeedsDiagram } from '@/components/grant/modal-gray-area-2026/InferenceTwoSpeedsDiagram';
import { MachineSentencePrototype } from '@/components/grant/modal-gray-area-2026/MachineSentencePrototype';
import { ProposalFigure } from '@/components/grant/modal-gray-area-2026/ProposalFigure';
import { SafetyControlFlow } from '@/components/grant/modal-gray-area-2026/SafetyControlFlow';
import { ScopeLadder } from '@/components/grant/modal-gray-area-2026/ScopeLadder';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaArtistBio } from '@/content/grants/modal-gray-area-2026/shared';
import {
  incompleteContainment,
  incompleteContainmentBitm,
  incompleteContainmentBudget,
  incompleteContainmentBudgetNote,
  incompleteContainmentBudgetTotal,
  incompleteContainmentFabrication,
  incompleteContainmentInteraction,
  incompleteContainmentPrivacy,
  incompleteContainmentScope,
  incompleteContainmentVisitorJourney,
  incompleteContainmentWorkSampleBackups,
  incompleteContainmentWorkSamples,
  type IncompleteContainmentWorkSample,
} from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import {
  incompleteContainmentMediaDisclosure,
  incompleteContainmentPlaceholders,
  supersededKineticStudies,
  supersededStudiesLabel,
} from '@/content/grants/modal-gray-area-2026/incomplete-containment-media';

function WorkSampleList({
  works,
  title,
}: {
  works: readonly IncompleteContainmentWorkSample[];
  title?: string;
}) {
  return (
    <div>
      {title ? <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-stone-500">{title}</h3> : null}
      <ul className="space-y-10">
        {works.map((work) => (
          <li key={work.slug}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="relative w-full sm:w-44 shrink-0 aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-900">
                {work.missingImage || !work.image ? (
                  <div className="absolute inset-0 flex items-center justify-center border border-dashed border-amber-500/60 px-3 text-center text-xs text-amber-800 dark:text-amber-200">
                    Missing image
                  </div>
                ) : (
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 11rem"
                  />
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {work.title}{' '}
                  <span className="text-stone-500 font-normal">({work.year || 'year unverified'})</span>
                </h4>
                <p className="text-xs text-stone-500 mt-1">{work.medium}</p>
                <p className="text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">{work.caption}</p>
                <p className="text-sm text-stone-700 dark:text-stone-300 mt-2 leading-relaxed">
                  <span className="font-medium">Relationship:</span> {work.relationship}
                </p>
                {work.missingArtPage ? (
                  <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                    [MISSING ART PAGE] No verified slug at /art/{work.slug}
                  </p>
                ) : (
                  <Link href={`/art/${work.slug}`} className="text-sm underline underline-offset-4 mt-2 inline-block">
                    View artwork →
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MachineSentencePage() {
  const p = incompleteContainment;

  return (
    <GrantPageChrome
      backHref={modalGrayAreaMeta.hubRoute}
      backLabel="← Modal × Gray Area 2026"
      bgClassName="bg-[#f3f1eb] dark:bg-neutral-950"
    >
      <article>
        {/* 1. Hero */}
        <header className="mb-14 lg:mb-20">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start bg-neutral-950 text-stone-100 -mx-4 sm:mx-0 px-4 sm:px-6 py-8 sm:py-10">
            <div className="lg:col-span-2 order-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-4">
                Modal × Gray Area — 2026 proposal
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{p.title}</h1>
              <p className="text-neutral-300 mb-2">{p.subtitle}</p>
              <p className="text-xs text-neutral-500 mb-4">
                Research lineage: {p.researchLineage.join(' · ')}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-200 mb-4">{p.heroLead}</p>
              <p className="text-xs text-neutral-500 mb-6 leading-relaxed">{p.status}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="#prototype"
                  className="inline-flex min-h-11 items-center justify-center border border-[#a3be8c] px-4 text-sm font-medium text-[#a3be8c] hover:bg-[#a3be8c] hover:text-neutral-950 transition-colors"
                >
                  Live inference prototype
                </a>
                <a
                  href="#ai-architecture"
                  className="inline-flex min-h-11 items-center justify-center border border-neutral-600 px-4 text-sm text-neutral-300 hover:border-neutral-400"
                >
                  AI and Modal
                </a>
                <a
                  href="#fabrication"
                  className="inline-flex min-h-11 items-center justify-center border border-neutral-600 px-4 text-sm text-neutral-300 hover:border-neutral-400"
                >
                  Fabrication
                </a>
              </div>
            </div>
            <div className="lg:col-span-3 order-2">
              <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.heroFrontal} priority aspectClass="aspect-[4/5]" />
            </div>
          </div>
          <p className="mt-3 text-xs text-stone-500 leading-relaxed">{incompleteContainmentMediaDisclosure}</p>
        </header>

        {/* 2. Thesis */}
        <GrantSection>
          <p className="text-3xl sm:text-4xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-6">
            {p.thesis}
          </p>
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mb-4">
            {p.thesisSupport}
          </p>
          <p className="text-sm text-stone-500 italic border-l-2 border-stone-400 pl-4 max-w-xl">
            Visitor prompt: {p.visitorPrompt}
          </p>
        </GrantSection>

        {/* 3. Visitor encounter */}
        <GrantSection title="Visitor encounter">
          <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.visitorEncounter} className="mb-10" />
          <GrantExperienceBeats beats={incompleteContainmentInteraction} />
        </GrantSection>

        {/* 4. The listening structure */}
        <GrantSection title="The listening structure">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">{p.lede}</p>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{p.conceptualTension}</p>
          <dl className="grid sm:grid-cols-2 gap-4 text-sm border border-stone-200 dark:border-stone-700 p-4 sm:p-5 mb-8">
            {p.anatomy.map((row) => (
              <div key={row.label}>
                <dt className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">{row.label}</dt>
                <dd className="text-stone-800 dark:text-stone-200">{row.value}</dd>
              </div>
            ))}
          </dl>
          <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.curvedMembrane} aspectClass="aspect-[4/3]" />
        </GrantSection>

        {/* 5. Changing aperture */}
        <GrantSection title="Changing aperture">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
            All states are achievable by one linked shutter mechanism. Inference returns constrained values; the
            local controller maps them to safe predetermined positions.
          </p>
          <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.apertureStates} className="mb-10" />
          <AuthoredStatesGrid />
        </GrantSection>

        {/* 6. Live inference prototype */}
        <GrantSection id="prototype" title="Live inference prototype">
          <MachineSentencePrototype />
        </GrantSection>

        {/* 7. Evidence receipt */}
        <GrantSection title="Evidence receipt">
          <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.thermalEvidence} aspectClass="aspect-[16/10]" />
          <p className="mt-6 text-stone-700 dark:text-stone-300 leading-relaxed">
            After inference, a thermal printer issues a narrow forensic receipt — not advice, not a chat reply. It
            describes what the system retained, transformed, or marked unresolved. The visitor leaves with material
            evidence of processing, not proof of understanding.
          </p>
        </GrantSection>

        {/* 8. Relationship to AI and Modal */}
        <GrantSection id="ai-architecture" title="Relationship to AI and Modal">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{p.conceptStatement}</p>
          <InferenceTwoSpeedsDiagram />
          <ul className="mt-8 list-disc pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400">
            {incompleteContainmentPrivacy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GrantSection>

        {/* 9. Deterministic safety system */}
        <GrantSection title="Deterministic safety system">
          <SafetyControlFlow />
        </GrantSection>

        {/* 10. Fabrication and production realism */}
        <GrantSection id="fabrication" title="Fabrication and production realism">
          <FabricationCallouts />
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">Prototype and testing plan</h3>
            <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
              {incompleteContainmentFabrication.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </GrantSection>

        {/* 11. Proposed context studies */}
        <GrantSection title="Proposed context studies">
          <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.grayAreaContext} className="mb-6" />
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Context study — conceptual proposal placeholder, not a surveyed site photograph. Final sightlines and
            floor placement will be confirmed with Gray Area after selection.
          </p>
        </GrantSection>

        {/* 12. Minimum / preferred / stretch scope */}
        <GrantSection title="Minimum / preferred / stretch scope">
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            The minimum version is not a prototype fragment. It is a complete artwork.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {incompleteContainmentScope.map((block) => (
              <div key={block.level} className="border border-stone-300 dark:border-stone-600 p-4">
                <h3 className="text-sm font-semibold mb-2">{block.level}</h3>
                <p className="text-xs text-stone-500 mb-2">{block.summary}</p>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{block.note}</p>
              </div>
            ))}
          </div>
          <ScopeLadder />
        </GrantSection>

        {/* 13. Budget */}
        <GrantSection title="Production budget">
          <p className="text-sm text-stone-500 mb-4 leading-relaxed">{incompleteContainmentBudgetNote}</p>
          <GrantBudgetTable lines={incompleteContainmentBudget} total={incompleteContainmentBudgetTotal} />
        </GrantSection>

        {/* 14. Testing timeline */}
        <GrantSection title="Testing timeline">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            Following selection: confirm production authorization in writing, then sequence shutter mockups, membrane
            and display stack tests, thermal receipt validation, acoustic review, controller safety tests, and
            inactive-state documentation ahead of October 2026 installation at Gray Area.
          </p>
        </GrantSection>

        {/* 15. Relationship to Born into the Machine */}
        <GrantSection title={incompleteContainmentBitm.heading}>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{incompleteContainmentBitm.body}</p>
          <Link href={incompleteContainmentBitm.href} className="text-sm underline underline-offset-4">
            Open Born into the Machine →
          </Link>
        </GrantSection>

        {/* 16. Work samples */}
        <GrantSection title="Work samples">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{modalGrayAreaArtistBio}</p>
          <WorkSampleList works={incompleteContainmentWorkSamples} />
          <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-700">
            <WorkSampleList works={incompleteContainmentWorkSampleBackups} title="Secondary backups" />
          </div>
        </GrantSection>

        {/* 17. Closing statement and contact */}
        <GrantSection>
          <GrantPlaceholderFigure media={incompleteContainmentPlaceholders.heroFrontal} aspectClass="aspect-[16/10]" />
          <p className="mt-10 text-2xl sm:text-3xl font-medium tracking-tight leading-snug">{p.closingQuestion}</p>
          <div className="mt-8 text-sm text-stone-500 space-y-1">
            <p className="font-medium text-stone-700 dark:text-stone-300">Moises Sanabria</p>
            <p>Interdisciplinary Artist</p>
            <p>Miami, Florida</p>
            <p>
              <Link href="/contact" className="underline underline-offset-4">
                moises.tech
              </Link>
              {' · '}
              m@moises.tech
            </p>
          </div>
        </GrantSection>

        {/* Visitor journey — supplementary */}
        <GrantSection title="Visitor journey">
          <GrantVisitorJourney steps={incompleteContainmentVisitorJourney} />
        </GrantSection>

        {/* Superseded kinetic studies archive */}
        <GrantSection title="Earlier formal studies">
          <p className="text-sm text-stone-500 mb-6 leading-relaxed">{supersededStudiesLabel}</p>
          <div className="space-y-8 opacity-80">
            {supersededKineticStudies.map((media) => (
              <ProposalFigure key={media.id} media={media} showStatus />
            ))}
          </div>
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
