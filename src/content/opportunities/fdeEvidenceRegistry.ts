import type {
  EvidenceType,
  ProofSnapshotCard,
  RoleMatchIllustration,
  RoleMatchRow,
  SupportingEvidenceItem,
  TeachingMediaItem,
} from './types';
import type { LifecycleStage } from './lifecycle';
import { digilabMedia } from '@/content/oolite-arts/media';
import { AEP_CARD_V2, AEP_CARD_V2_DARK, evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { saturdayLabLive } from './packs/designFacilitationEvidencePack';
import { FDE_PARTNER_LOGOS } from './fdePartnerLogos';

/** Portrait stills for the FDE supporting-evidence row (Cloudinary). */
export const FDE_PORTRAITS = {
  n8nTeaching: {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788271701/jobs/banners/ai-engineer/fde-n8n-teaching-workshop-portrait_m5xbap.png',
    alt: 'n8n teaching workshop — portrait still for the February no-code email-labeler session.',
  },
  fieldKit: {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788271665/jobs/banners/ai-engineer/fde-field-kit-handoff-portrait_ceocxs.png',
    alt: 'Field Kit handoff — portrait still of the brief-to-review loop. Fixture demo, not a live FLORA screenshot.',
  },
  playwire: {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788271664/jobs/banners/ai-engineer/fde-playwire-publisher-integrations-portrait_myqtgm.png',
    alt: 'Playwire publisher integrations — confidentiality-safe portrait still. Not a client dashboard.',
  },
} as const;

export const FDE_COVERS = {
  discover: {
    src: '/images/opportunities/forward-deployed/fde-discover-observation-cover.png',
    alt: 'Conceptual cover — observation split: face-coherence versus an animal prompt path. Not a product screenshot.',
    local: true,
  },
  saturdayLab: {
    src: '/images/opportunities/forward-deployed/fde-saturday-lab-intake-cover.png',
    alt: 'Conceptual cover — intake paths into a mixed-audience session. Not an Oolite teaching photograph.',
    local: true,
  },
  fieldKit: {
    src: '/images/opportunities/forward-deployed/fde-field-kit-handoff-cover.png',
    alt: 'Conceptual cover — brief to recommend to review to handoff. Not a live FLORA screenshot.',
    local: true,
  },
  thinSlice: {
    src: '/images/opportunities/forward-deployed/fde-thin-slice-method-cover.png',
    alt: 'Conceptual cover — proposed six-word loop. Not completed client work.',
    local: true,
  },
} as const;

const fieldKitConceptStudy: TeachingMediaItem = {
  src: '/images/opportunities/flora-forward-deployed-creative/flora-field-kit-overview-concept-study.png',
  alt: 'FLORA Field Kit — brief-to-handoff client workflow concept study',
  caption: 'Concept study',
  local: true,
};

const WORKSHOP_HARNESS = '/workshop/agentic-evidence-pipeline';

export const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
export const FIELD_KIT_DEMO = 'https://flora-field-kit.vercel.app';
export const FIELD_KIT_DEMO_CASE = `${FIELD_KIT_DEMO}/case/demo-miami-exhibition-teaser`;
export const AEP_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
export const AEP_BLOB = `${AEP_REPO}/blob/main`;

const teachingWorkshop = digilabMedia['workshop.art-tech-coding'];
const lore = evidenceProjects['lore-machine'];
const bookleggers = automationProjectSpecs['bookleggers-commerce-automation'];

export type FdeEvidenceItem = {
  id: string;
  title: string;
  lifecycleStage: LifecycleStage;
  evidenceType: EvidenceType;
  claim: string;
  limitation: string;
  whatChanged: string;
  whatThisProves: string;
  inspectHref: string;
  inspectLabel: string;
  illustration: RoleMatchIllustration;
  overlayIllustration?: RoleMatchIllustration;
  logoSrc?: string;
  logoAlt?: string;
  featured?: boolean;
  supporting?: boolean;
  tools?: string[];
  media?: TeachingMediaItem[];
};

export const fdeEvidenceRegistry: FdeEvidenceItem[] = [
  {
    id: 'oolite-workshops',
    title: 'Oolite Digital Lab',
    lifecycleStage: 'Teach',
    evidenceType: 'production-experience',
    claim: 'Eighteen hands-on workshops; I watch the stuck point, then leave a path.',
    limitation: 'Attendance totals and measured learning gains are not published.',
    whatChanged:
      'A recurring stuck point — GitHub deploy, editor choice, connecting a purchased domain — is routed through intake and a help queue.',
    whatThisProves: 'Institutional teaching and facilitation you can inspect. Not scores.',
    inspectHref: '/oolite-arts',
    inspectLabel: 'Inspect Oolite case study',
    illustration: { src: teachingWorkshop.src, alt: teachingWorkshop.alt },
    logoSrc: FDE_PARTNER_LOGOS.oolite.src,
    logoAlt: FDE_PARTNER_LOGOS.oolite.alt,
    featured: true,
    media: [
      { src: teachingWorkshop.src, alt: teachingWorkshop.alt, caption: 'Oolite Digital Lab' },
      {
        src: digilabMedia['docs.vibe-apr25-29'].src,
        alt: digilabMedia['docs.vibe-apr25-29'].alt,
        caption: 'Digilab still — April 25',
      },
      {
        src: digilabMedia['docs.vibe-apr25-35'].src,
        alt: digilabMedia['docs.vibe-apr25-35'].alt,
        caption: 'Screens and participants',
      },
      {
        src: digilabMedia['docs.vibe-apr25-39'].src,
        alt: digilabMedia['docs.vibe-apr25-39'].alt,
        caption: 'Digital Lab workstations',
      },
    ],
  },
  {
    id: 'lore-machine',
    title: 'Lore Machine',
    lifecycleStage: 'Deploy',
    evidenceType: 'shipped-product',
    claim: 'I take a concept to a system people can operate.',
    limitation: 'CoreStory is a separate dossier — not inferred here.',
    whatChanged: 'Creators could generate nonhuman casts without the face pipeline failing.',
    whatThisProves: 'Shipped product incubation with mixed stakeholders.',
    inspectHref: '/projects/lore-machine',
    inspectLabel: 'Inspect Lore Machine',
    illustration: { src: lore.imageSrc, alt: lore.imageAlt },
    logoSrc: FDE_PARTNER_LOGOS.lore.src,
    logoAlt: FDE_PARTNER_LOGOS.lore.alt,
    featured: true,
    media: [{ src: lore.imageSrc, alt: lore.imageAlt, caption: 'Lore Machine home' }],
  },
  {
    id: 'bookleggers',
    title: bookleggers.title,
    lifecycleStage: 'Handoff',
    evidenceType: 'production-experience',
    claim: 'Square sales land in Airtable so staff are not the spreadsheet.',
    limitation:
      'Sync frequency, field map, and a sanitized execution artifact are not published yet. Full case later.',
    whatChanged: 'Library staff can see sales and inventory without a manual spreadsheet handoff.',
    whatThisProves: 'Bounded client ops. Independent work — not a Deloitte or AMC delivery.',
    inspectHref: '/ai-engineering#proof',
    inspectLabel: 'View in AI Engineering',
    illustration: { src: bookleggers.imageSrc, alt: bookleggers.imageAlt },
    logoSrc: FDE_PARTNER_LOGOS.bookleggers.src,
    logoAlt: FDE_PARTNER_LOGOS.bookleggers.alt,
    featured: true,
    media: [{ src: bookleggers.imageSrc, alt: bookleggers.imageAlt, caption: 'Bookleggers Library' }],
  },
  {
    id: 'aep',
    title: 'Agentic Evidence Pipeline',
    lifecycleStage: 'Govern',
    evidenceType: 'reference-implementation',
    claim: 'Unsupported citations fail closed; uncertain results pause for a person.',
    limitation:
      'TypeScript reference with synthetic fixtures and a fake-model harness — not a hosted customer product.',
    whatChanged: 'Assessment state persists across a review pause; invalid citations cannot silently pass.',
    whatThisProves: 'Governance as code. Evidence in, reviewable decisions out.',
    inspectHref: WORKSHOP_HARNESS,
    inspectLabel: 'Inspect harness',
    illustration: {
      src: AEP_CARD_V2,
      alt: 'Conceptual cover for a governed evidence workflow — reference implementation, not a hosted product UI',
    },
    featured: true,
    tools: ['TypeScript', 'Postgres', 'human review'],
    media: [
      {
        src: AEP_CARD_V2,
        alt: 'Conceptual cover for a governed evidence workflow — reference implementation, not a hosted product UI',
        caption: 'Conceptual cover',
      },
      {
        src: AEP_CARD_V2_DARK,
        alt: 'Dark conceptual cover for a governed evidence workflow — reference implementation, not a hosted product UI',
        caption: 'Conceptual cover (dark)',
      },
    ],
  },
  {
    id: 'field-kit',
    title: 'Field Kit',
    lifecycleStage: 'Prototype',
    evidenceType: 'fixture-prototype',
    claim: 'A brief becomes one reviewable handoff loop.',
    limitation:
      'Fixture demo. Live FLORA Techniques need published IDs and paid API access. Not a delivery-method claim.',
    whatChanged: 'Demo mode runs the full loop: brief → recommend → review → case export.',
    whatThisProves: 'Rapid prototyping habit you can click without an API key.',
    inspectHref: FIELD_KIT_DEMO,
    inspectLabel: 'Open fixture demo',
    illustration: {
      src: FDE_PORTRAITS.fieldKit.src,
      alt: FDE_PORTRAITS.fieldKit.alt,
    },
    supporting: true,
    tools: ['Cursor', 'Claude', 'Next.js'],
    media: [
      {
        src: FDE_COVERS.fieldKit.src,
        alt: FDE_COVERS.fieldKit.alt,
        caption: 'Conceptual cover',
        local: true,
      },
      fieldKitConceptStudy,
    ],
  },
  {
    id: 'n8n-workshop',
    title: 'n8n email labeler — teaching',
    lifecycleStage: 'Teach',
    evidenceType: 'teaching-instrument',
    claim: 'February no-code workshop: learners classify mail, then review the rules.',
    limitation:
      'This card is the teaching adaptation. A related operational Gmail → labels → Airtable workflow exists and is labeled separately — not a production reliability report.',
    whatChanged: 'Artists left with a packet they can rebuild: synthetic inbox, labels, structured output.',
    whatThisProves: 'No-code enablement I can teach again. Not attendance or scores.',
    inspectHref: '/workshop/the-art-of-ai-agents/share',
    inspectLabel: 'View workshop handout',
    illustration: { src: FDE_PORTRAITS.n8nTeaching.src, alt: FDE_PORTRAITS.n8nTeaching.alt },
    supporting: true,
    tools: ['n8n', 'Gmail', 'Airtable'],
  },
  {
    id: 'discover-lore',
    title: 'Discover — observation changed the build',
    lifecycleStage: 'Discover',
    evidenceType: 'production-experience',
    claim: 'I watch the stuck point before choosing a tool.',
    limitation: 'This is not a formal usability-study result.',
    whatChanged:
      'The Lore pipeline split: people keep face-to-face coherence; animals skip it and use prompt engineering.',
    whatThisProves: 'Observation changed the build.',
    inspectHref: '/projects/lore-machine',
    inspectLabel: 'Inspect Lore Machine',
    illustration: {
      src: FDE_COVERS.discover.src,
      alt: FDE_COVERS.discover.alt,
      local: true,
    },
    logoSrc: FDE_PARTNER_LOGOS.lore.src,
    logoAlt: FDE_PARTNER_LOGOS.lore.alt,
    media: [
      {
        src: FDE_COVERS.discover.src,
        alt: FDE_COVERS.discover.alt,
        caption: 'Conceptual cover',
        local: true,
      },
    ],
  },
  {
    id: 'saturday-lab',
    title: 'Saturday Lab pack',
    lifecycleStage: 'Teach',
    evidenceType: 'teaching-instrument',
    claim: 'Mixed audiences leave with a path, not a lecture.',
    limitation: 'Designed instruments. Attendance and scores are not published.',
    whatChanged:
      'Intake, learner paths, help queue, and an exit-ticket instrument sit on public pages.',
    whatThisProves: 'Instructional design you can inspect.',
    inspectHref: saturdayLabLive.facilitator,
    inspectLabel: 'Inspect Saturday Lab facilitator',
    illustration: {
      src: FDE_COVERS.saturdayLab.src,
      alt: FDE_COVERS.saturdayLab.alt,
      local: true,
    },
    logoSrc: FDE_PARTNER_LOGOS.oolite.src,
    logoAlt: FDE_PARTNER_LOGOS.oolite.alt,
    tools: ['Figma', 'Airtable'],
    media: [
      {
        src: FDE_COVERS.saturdayLab.src,
        alt: FDE_COVERS.saturdayLab.alt,
        caption: 'Conceptual cover',
        local: true,
      },
    ],
  },
  {
    id: 'playwire',
    title: 'Playwire — publisher integrations',
    lifecycleStage: 'Handoff',
    evidenceType: 'production-experience',
    claim: 'Listen, integrate, leave the publisher able to operate the onboarding path.',
    limitation:
      'Confidentiality-safe abstraction. No public case page. Client names, dashboards, and scale numbers are not disclosed here.',
    whatChanged:
      'Publisher integrations and JS debugging for SaaS onboarding; data reliability alerting on the analytics side.',
    whatThisProves: 'Client-facing solutions habit. Not a featured case this pass.',
    inspectHref: '/ai-engineering#proof',
    inspectLabel: 'Related proof on AI Engineering',
    illustration: { src: FDE_PORTRAITS.playwire.src, alt: FDE_PORTRAITS.playwire.alt },
    supporting: true,
  },
  {
    id: 'thin-slice',
    title: 'Design-forward thin slice',
    lifecycleStage: 'Discover',
    evidenceType: 'proposed-approach',
    claim: 'How I would enter an FDE method — not completed client work.',
    limitation: 'Proposed first engagement. Not a Deloitte delivery.',
    whatChanged: 'A bounded slice: discover, prototype, govern, deploy, teach, handoff.',
    whatThisProves: 'A method I can walk into, not a claim that it already shipped for a firm.',
    inspectHref: WORKSHOP_HARNESS,
    inspectLabel: 'Read the proposed slice',
    illustration: {
      src: FDE_COVERS.thinSlice.src,
      alt: FDE_COVERS.thinSlice.alt,
      local: true,
    },
    media: [
      {
        src: FDE_COVERS.thinSlice.src,
        alt: FDE_COVERS.thinSlice.alt,
        caption: 'Conceptual cover — proposed method',
        local: true,
      },
    ],
  },
];

export function fdeItem(id: string): FdeEvidenceItem {
  const item = fdeEvidenceRegistry.find((entry) => entry.id === id);
  if (!item) throw new Error(`Unknown FDE evidence id: ${id}`);
  return item;
}

export const FDE_EXPLORER_IDS = [
  'discover-lore',
  'field-kit',
  'aep',
  'lore-machine',
  'saturday-lab',
  'bookleggers',
] as const;

export const FDE_PROOF_IDS = [
  'oolite-workshops',
  'lore-machine',
  'aep',
  'field-kit',
  'saturday-lab',
  'thin-slice',
] as const;

export const FDE_FEATURED_PROJECT_IDS = [
  'ai24',
  'lore-machine',
  'bookleggers-commerce-automation',
  'agentic-evidence-pipeline',
] as const;

export const FDE_SUPPORTING_IDS = ['field-kit', 'n8n-workshop', 'playwire'] as const;

export function toExplorerRow(item: FdeEvidenceItem, surface: 'flagship' | 'overlay'): RoleMatchRow {
  return {
    requirement: item.title,
    stage: item.lifecycleStage,
    claim: item.claim,
    evidence: item.limitation,
    evidenceType: item.evidenceType,
    whatChanged: item.whatChanged,
    whatThisProves: item.whatThisProves,
    inspectHref: item.inspectHref,
    inspectLabel: item.inspectLabel,
    status: item.evidenceType === 'proposed-approach' ? 'learning' : 'demonstrated',
    illustration:
      surface === 'overlay' && item.overlayIllustration
        ? item.overlayIllustration
        : item.illustration,
    logoSrc: item.logoSrc,
    logoAlt: item.logoAlt,
    media: item.media,
  };
}

export function toProofCard(item: FdeEvidenceItem): ProofSnapshotCard {
  return {
    title: item.title,
    body: item.claim,
    evidenceType: item.evidenceType,
    tools: item.tools,
    imageSrc: item.illustration.src,
    imageAlt: item.illustration.alt,
    imageLocal: item.illustration.local,
    visual: item.illustration.visual,
    href: item.inspectHref,
    lifecycleStage: item.lifecycleStage,
    logoSrc: item.logoSrc,
    logoAlt: item.logoAlt,
    media: item.media,
  };
}

export function toSupportingItem(item: FdeEvidenceItem): SupportingEvidenceItem {
  return {
    id: item.id,
    title: item.title,
    body: item.claim,
    href: item.inspectHref,
    linkLabel: item.inspectLabel,
    evidenceType: item.evidenceType,
    lifecycleStage: item.lifecycleStage,
    limitation: item.limitation,
    secondaryHref:
      item.id === 'field-kit'
        ? FIELD_KIT_REPO
        : item.id === 'n8n-workshop'
          ? '/workshop/the-art-of-ai-agents'
          : undefined,
    secondaryLinkLabel:
      item.id === 'field-kit' ? 'Inspect repo' : item.id === 'n8n-workshop' ? 'Art of AI Agents' : undefined,
    imageSrc: item.illustration.src,
    imageAlt: item.illustration.alt,
    imageLocal: item.illustration.local,
  };
}
