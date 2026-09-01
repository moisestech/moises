import type {
  EvidenceType,
  ProofSnapshotCard,
  RoleMatchIllustration,
  RoleMatchRow,
  SupportingEvidenceItem,
} from './types';
import type { LifecycleStage } from './lifecycle';
import { digilabMedia } from '@/content/oolite-arts/media';
import { evidenceProjects } from '@/content/evidence/projects';
import { automationProjectSpecs } from '@/content/evidence/automationProjects';
import { deloitteFacilitatorWorkshopStill } from '@/content/evidence/applicationBanners';
import { saturdayLabLive } from './packs/designFacilitationEvidencePack';
import { FDE_PARTNER_LOGOS } from './fdePartnerLogos';

export const FIELD_KIT_REPO = 'https://github.com/moisestech/flora-field-kit';
export const FIELD_KIT_DEMO = 'https://flora-field-kit.vercel.app';
export const FIELD_KIT_DEMO_CASE = `${FIELD_KIT_DEMO}/case/demo-miami-exhibition-teaser`;
export const AEP_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
export const AEP_BLOB = `${AEP_REPO}/blob/main`;

const teachingWorkshop = digilabMedia['workshop.art-tech-coding'];
const lore = evidenceProjects['lore-machine'];
const playwire = evidenceProjects['playwire-alumni'];
const n8n = automationProjectSpecs['n8n-gmail-intelligence'];
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
    inspectHref: `${AEP_BLOB}/packages/agent/src/policy.ts`,
    inspectLabel: 'Inspect policy.ts',
    illustration: { visual: 'harness' },
    featured: true,
    tools: ['TypeScript', 'Postgres', 'human review'],
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
    illustration: { visual: 'field-kit-loop' },
    supporting: true,
    tools: ['Cursor', 'Claude', 'Next.js'],
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
    illustration: { src: n8n.imageSrc, alt: n8n.imageAlt },
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
    illustration: { src: teachingWorkshop.src, alt: teachingWorkshop.alt },
    overlayIllustration: {
      src: deloitteFacilitatorWorkshopStill.src,
      alt: deloitteFacilitatorWorkshopStill.alt,
      local: true,
    },
    logoSrc: FDE_PARTNER_LOGOS.lore.src,
    logoAlt: FDE_PARTNER_LOGOS.lore.alt,
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
    illustration: { src: teachingWorkshop.src, alt: teachingWorkshop.alt },
    logoSrc: FDE_PARTNER_LOGOS.oolite.src,
    logoAlt: FDE_PARTNER_LOGOS.oolite.alt,
    tools: ['Figma', 'Airtable'],
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
    illustration: { src: playwire.imageSrc, alt: playwire.imageAlt },
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
    inspectHref: '#process',
    inspectLabel: 'Read the thin slice',
    illustration: { visual: 'thin-slice' },
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
  };
}
