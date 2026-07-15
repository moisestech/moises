import Link from 'next/link';
import {
  GrantBudgetTable,
  GrantPageChrome,
  GrantRelatedWorks,
  GrantSection,
  GrantVisitorJourney,
} from '@/components/grant/shared/GrantProposalUi';
import { AuthoredStatesGrid } from '@/components/grant/modal-gray-area-2026/AuthoredStatesGrid';
import { ContextStudySelector } from '@/components/grant/modal-gray-area-2026/ContextStudySelector';
import { FabricationCallouts } from '@/components/grant/modal-gray-area-2026/FabricationCallouts';
import { InferenceTwoSpeedsDiagram } from '@/components/grant/modal-gray-area-2026/InferenceTwoSpeedsDiagram';
import { LatentVoidGrammar } from '@/components/grant/modal-gray-area-2026/LatentVoidGrammar';
import { MachineSentencePrototype } from '@/components/grant/modal-gray-area-2026/MachineSentencePrototype';
import { ProposalFigure } from '@/components/grant/modal-gray-area-2026/ProposalFigure';
import { SafetyControlFlow } from '@/components/grant/modal-gray-area-2026/SafetyControlFlow';
import { ScopeLadder } from '@/components/grant/modal-gray-area-2026/ScopeLadder';
import { IconMetabolization, IconReflex, IconRest } from '@/components/grant/modal-gray-area-2026/MachineSentenceIcons';
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaArtistBio } from '@/content/grants/modal-gray-area-2026/shared';
import {
  machineSentence,
  machineSentenceBudget,
  machineSentenceBudgetTotal,
  machineSentenceFabrication,
  machineSentenceRelated,
  machineSentenceVisitorJourney,
} from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';
import {
  machineSentenceMedia,
  machineSentenceMediaDisclosure,
} from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

const ENCOUNTER_STAGES = [
  {
    number: '01',
    title: 'Reflex',
    Icon: IconReflex,
    body: 'The sculpture acknowledges the visitor through one immediate, restrained shift.',
  },
  {
    number: '02',
    title: 'Metabolization',
    Icon: IconMetabolization,
    body: 'Inference maps language into an artist-authored body score while the screen clusters slowly reconfigure.',
  },
  {
    number: '03',
    title: 'Rest',
    Icon: IconRest,
    body: 'The system holds its resulting posture long enough to be encountered as sculpture rather than interface.',
  },
] as const;

const CONTEXT_STUDIES = [
  {
    id: 'gray-area',
    title: 'Gray Area — Active State',
    strategicRole: 'Exhibition encounter',
    description:
      'The dark industrial environment emphasizes the screens’ distributed image, the visitor’s distance from the object, and the contrast between visible infrastructure and inaccessible internal space.',
    images: [machineSentenceMedia.grayAreaActive, machineSentenceMedia.grayAreaVisitor],
    notes: [
      'Conceptual context study — not a surveyed site photograph',
      'Screens illuminated; latent void readable',
    ],
  },
  {
    id: 'white-cube',
    title: 'White Cube — Sculptural State',
    strategicRole: 'Formal autonomy',
    description:
      'The neutral gallery context tests whether the sculpture remains formally autonomous when separated from theatrical darkness and when its screens are inactive.',
    images: [machineSentenceMedia.whiteCubeActive, machineSentenceMedia.whiteCubeOff],
    notes: [
      'Active and powered-off states both read as sculpture',
      'Inactive state is a requirement of the proposal',
    ],
  },
  {
    id: 'anatomy',
    title: 'Anatomy — Fabrication State',
    strategicRole: 'Technical credibility',
    description:
      'The fabrication context makes the proposal’s modular construction, service access, movement constraints, and hardware substitutions legible.',
    images: [machineSentenceMedia.explodedAnatomy, machineSentenceMedia.rearInfrastructure],
    notes: [
      'Procurement only after written selection confirmation',
      'Three axes preferred over seven independent motors',
    ],
  },
] as const;

const SCOPE_BLOCKS = [
  {
    title: 'Minimum — complete artwork',
    items: [
      'Four to six displays',
      'Three controlled movement axes',
      'Voice or text input',
      'Structured body-score inference',
      'One distributed screen surface',
      'Cached fallback states',
      'Self-standing sculpture',
    ],
  },
  {
    title: 'Preferred',
    items: [
      'Seven mixed-format displays',
      'Live Modal inference',
      'Generated and cached visual skins',
      'Voice and pose input',
      'Spatial sound',
      'Expanded authored states',
    ],
  },
  {
    title: 'Stretch',
    items: [
      'Multi-person interaction',
      'Persistent collective memory',
      'Multiple connected organisms',
      'Custom-trained visual language',
      'Networked exhibition states',
    ],
  },
] as const;

export function MachineSentencePage() {
  const p = machineSentence;

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
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{p.title}</h1>
              <p className="text-neutral-400 mb-4">{p.subtitle}</p>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-200 mb-4">
                A self-standing cubic inference sculpture translates one human sentence into a temporary
                arrangement of screens, movement, and distributed image.
              </p>
              <p className="text-xs text-neutral-500 mb-6 leading-relaxed">{p.status}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="#prototype"
                  className="inline-flex min-h-11 items-center justify-center border border-[#a3be8c] px-4 text-sm font-medium text-[#a3be8c] hover:bg-[#a3be8c] hover:text-neutral-950 transition-colors"
                >
                  Activate the prototype
                </a>
                <a
                  href="#ai-architecture"
                  className="inline-flex min-h-11 items-center justify-center border border-neutral-600 px-4 text-sm text-neutral-300 hover:border-neutral-400"
                >
                  View the system
                </a>
                <a
                  href="#fabrication"
                  className="inline-flex min-h-11 items-center justify-center border border-neutral-600 px-4 text-sm text-neutral-300 hover:border-neutral-400"
                >
                  View fabrication
                </a>
              </div>
            </div>
            <div className="lg:col-span-3 order-2">
              <ProposalFigure media={machineSentenceMedia.heroFrontalVoid} priority showStatus={false} />
            </div>
          </div>
          <p className="mt-3 text-xs text-stone-500 leading-relaxed">{machineSentenceMediaDisclosure}</p>
        </header>

        {/* 2. Thesis */}
        <GrantSection>
          <p className="text-3xl sm:text-4xl font-medium leading-snug tracking-tight text-stone-900 dark:text-stone-100 mb-6">
            The sculpture does not illustrate what you say.
            <br />
            It becomes a machine sentence.
          </p>
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
            The aluminum cube supplies syntax. Articulated screen clusters behave as clauses. Their movement
            acts as punctuation. The inaccessible central void holds the latent distance between human
            expression and machine form.
          </p>
        </GrantSection>

        {/* 3. Encounter */}
        <GrantSection title="One sentence becomes a temporary body">
          <ProposalFigure media={machineSentenceMedia.grayAreaVisitor} className="mb-10" />
          <ul className="grid sm:grid-cols-3 gap-8">
            {ENCOUNTER_STAGES.map(({ number, title, Icon, body }) => (
              <li key={title} className="border-t-2 border-stone-900 dark:border-stone-100 pt-4">
                <Icon className="h-8 w-8 mb-3 text-stone-800 dark:text-stone-200" title={title} decorative={false} />
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-2">{number}</p>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>
        </GrantSection>

        {/* 4. Object active / off */}
        <GrantSection title="An artificial body that survives its own interface">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
            Machine Sentence No. 1 is proposed as a broad, self-standing aluminum cube containing seven
            mixed-format displays organized into three articulated clusters. The screens turn inward and
            outward around an inaccessible tapered void. Motors, brackets, cables, housings, and ballast remain
            visible as parts of the artwork rather than hidden service infrastructure.
          </p>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
            When active, the displays carry fragments of one distributed visual surface. When powered off, the
            same planes remain a material composition of weight, orientation, obstruction, and negative space.
          </p>
          <div className="grid sm:grid-cols-5 gap-6 items-start">
            <div className="sm:col-span-3">
              <ProposalFigure media={machineSentenceMedia.whiteCubeActive} />
            </div>
            <div className="sm:col-span-2">
              <ProposalFigure media={machineSentenceMedia.whiteCubeOff} />
            </div>
          </div>
        </GrantSection>

        {/* 5. Prototype */}
        <GrantSection id="prototype" title="Live prototype">
          <MachineSentencePrototype />
        </GrantSection>

        {/* 6. Latent void */}
        <GrantSection title="The center is not an image">
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
            <ProposalFigure media={machineSentenceMedia.internalVoidDetail} />
            <div>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                The central void is the sculpture’s primary spatial event. It is not a screen, a projection, or
                a literal diagram of a mathematical latent space. It is an inaccessible volume produced by the
                changing relation among screens.
              </p>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
                The work uses that absence to make interpretation visible without pretending that a machine’s
                internal representation can be shown directly. Every response reorganizes the boundary around
                the void while leaving its center unresolved.
              </p>
              <p className="text-xl font-medium leading-snug border-l-2 border-stone-900 dark:border-stone-100 pl-4">
                What the machine produces is visible.
                <br />
                What it inferred remains inaccessible.
              </p>
            </div>
          </div>
          <LatentVoidGrammar />
        </GrantSection>

        {/* 7. Authored states */}
        <GrantSection title="Mutation occurs inside a grammar">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
            The model does not receive unrestricted control over the object. It produces semantic values that
            are interpreted within a finite physical vocabulary authored by the artist.
          </p>
          <ProposalFigure media={machineSentenceMedia.mutationTriptych} className="mb-10" />
          <AuthoredStatesGrid />
        </GrantSection>

        {/* 8. Visitor journey */}
        <GrantSection title="Visitor journey">
          <GrantVisitorJourney steps={machineSentenceVisitorJourney} />
        </GrantSection>

        {/* 9. AI / Modal */}
        <GrantSection id="ai-architecture" title="Inference operates at two speeds">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
            Modal is proposed as the on-demand compute layer for transcription, embedding, structured
            inference, and more intensive visual generation. The fast path can initiate a physical reflex and
            select an authored body state while a slower path prepares the distributed screen surface. Latency
            is not hidden behind a loading animation. It becomes part of the artwork’s temporal structure:
            immediate acknowledgment, slower metabolization, and temporary rest.
          </p>
          <InferenceTwoSpeedsDiagram />
        </GrantSection>

        {/* 10. Safety */}
        <GrantSection title="The model interprets. It never drives the motors directly.">
          <SafetyControlFlow />
        </GrantSection>

        {/* 11. Fabrication */}
        <GrantSection id="fabrication" title="A modular sculpture built for testing, repair, and substitution">
          <FabricationCallouts />
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">Prototype and testing plan</h3>
            <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
              {machineSentenceFabrication.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </GrantSection>

        {/* 12. Context studies */}
        <GrantSection title="Context studies">
          <ContextStudySelector studies={[...CONTEXT_STUDIES]} />
        </GrantSection>

        {/* 13. Scope */}
        <GrantSection title="Minimum / preferred / stretch">
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            The minimum version is not a prototype fragment. It is a complete artwork.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {SCOPE_BLOCKS.map((block) => (
              <div key={block.title} className="border border-stone-300 dark:border-stone-600 p-4">
                <h3 className="text-sm font-semibold mb-3">{block.title}</h3>
                <ul className="list-disc pl-4 space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ScopeLadder />
        </GrantSection>

        {/* 14. Budget */}
        <GrantSection title="Production budget">
          <p className="text-sm text-stone-500 mb-4">
            Draft within the $5,000 production support ceiling. Honorarium and Modal credits are separate. Zero
            personal cash before written production authorization.
          </p>
          <GrantBudgetTable lines={machineSentenceBudget} total={machineSentenceBudgetTotal} />
        </GrantSection>

        {/* 15. Testing note already under fab — timeline reminder */}
        <GrantSection title="Testing and timeline">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            Following selection: confirm production authorization in writing, then sequence module mockups,
            lattice samples, controller safety tests, enclosure edge samples, accessibility review, and
            inactive-state documentation ahead of October 2026 installation at Gray Area.
          </p>
        </GrantSection>

        {/* 16. BITM */}
        <GrantSection title="From representing technological systems to constructing a body governed by them">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
            Machine Sentence No. 1 extends Born into the Machine, Moises Sanabria’s ongoing research into
            language, inference, attention, and technological embodiment. The project moves from representing
            life inside networked systems toward constructing a physical body organized by those systems.
          </p>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
            A visitor begins with language, but the sculpture does not answer with more language. It converts
            interpretation into orientation, obstruction, movement, and temporary form. In doing so, the work
            asks what happens when machine inference no longer remains inside a screen and begins to acquire
            bodies, environments, and material consequences.
          </p>
          <Link href="/research/born-into-the-machine" className="text-sm underline underline-offset-4">
            Open Born into the Machine →
          </Link>
        </GrantSection>

        {/* 17. Related works */}
        <GrantSection title="Related works">
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8">{modalGrayAreaArtistBio}</p>
          <GrantRelatedWorks works={machineSentenceRelated} />
        </GrantSection>

        {/* 18. Closing */}
        <GrantSection>
          <ProposalFigure media={machineSentenceMedia.grayAreaActive} showStatus={false} />
          <p className="mt-10 text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
            Machine interpretation increasingly acquires bodies. This sculpture gives one of those bodies
            weight, limits, and a void it cannot explain.
          </p>
          <div className="mt-8 text-sm text-stone-500 space-y-1">
            <p className="font-medium text-stone-700 dark:text-stone-300">Moises Sanabria</p>
            <p>Interdisciplinary Artist and AI / Full-stack Engineer</p>
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
