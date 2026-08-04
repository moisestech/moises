import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import type { ArchitectureFlowData } from './systemsDossier';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { evidenceProjects } from '@/content/evidence/projects';
import {
  floraDataEngineerSkillLogoBand,
  moisesSanabriaHeadshot,
} from '@/content/evidence/recruitingLogoBand';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { floraFoundingDataEngineerBanner } from '@/content/evidence/applicationBanners';

/**
 * FLORA — Founding Data Engineer
 * https://jobs.ashbyhq.com/FLORA/4e073610-2eb2-4f54-a044-8b6bb617d2d7
 *
 * Accuracy notes:
 * - Playwire Data Analyst (2021–2022): Kinesis → Athena → Snowflake, Tableau BI, Slack data alerts — verified.
 * - Founding product / TypeScript collaboration (Lore Machine) — verified.
 * - PostHog: site instrumentation + AI24 Live project familiarity — NOT founding DE / activation ownership.
 * - Do not claim BigQuery, dbt mastery, Looker, or FLORA-scale warehouse ownership yet.
 * - Provenance Explorer is transferable creative-product metadata / lineage — not warehouse DE proof.
 * - NYC 5-day on-site: state openness honestly (relocate / commute plan).
 */

const ROLE_TITLE = 'Founding Data Engineer';
const COMPANY = 'FLORA';
const ASHBY_URL = 'https://jobs.ashbyhq.com/FLORA/4e073610-2eb2-4f54-a044-8b6bb617d2d7';

/** Transferable creative-product metadata demo (not core DE proof). */
const PROVENANCE_DEMO = 'https://comfyui-output-provenance.vercel.app';
const PROVENANCE_REPO = 'https://github.com/moisestech/comfyui-output-provenance';

const playwire = evidenceProjects['playwire-alumni'];
const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;

/**
 * Interactive founding data model — proposed decision paths for FLORA product questions.
 * Not a claim of access to FLORA telemetry or warehouse.
 */
const floraDataArchitecture: ArchitectureFlowData = {
  title: 'Founding data model — capture → decisions',
  subtitle:
    'How I would wire FLORA’s first data function: PostHog capture, typed contracts with Growth Engineering, warehouse + transforms, metrics that matter, and BI that changes meetings.',
  disclaimer:
    'Proposed implementation model only. Not affiliated with or endorsed by FLORA. Not a claim of access to FLORA systems or production telemetry.',
  syntheticLabel: 'All metric names and event properties below are illustrative.',
  stages: [
    {
      id: 'capture',
      title: 'Capture',
      nodes: [
        { id: 'ph-events', label: 'PostHog events' },
        { id: 'props', label: 'Property hygiene' },
        { id: 'client', label: 'Client / canvas actions' },
        { id: 'server', label: 'Server / generation jobs' },
        { id: 'identity', label: 'Identity & sessions' },
      ],
    },
    {
      id: 'contract',
      title: 'Tracking contract',
      nodes: [
        { id: 'taxonomy', label: 'Event taxonomy' },
        { id: 'typed', label: 'Typed schemas (TS)' },
        { id: 'growth-pr', label: 'Growth eng PRs' },
        { id: 'naming', label: 'Naming conventions' },
        { id: 'checklist', label: 'Instrumentation checklist' },
      ],
    },
    {
      id: 'warehouse',
      title: 'Warehouse & pipelines',
      nodes: [
        { id: 'sync', label: 'PostHog warehouse sync' },
        { id: 'snowflake', label: 'Snowflake / peer eval' },
        { id: 'ingest', label: 'Ingestion' },
        { id: 'transforms', label: 'Transforms / SQL' },
        { id: 'freshness', label: 'Freshness checks' },
      ],
    },
    {
      id: 'metrics',
      title: 'Metrics that matter',
      nodes: [
        { id: 'activation', label: 'Activation moments' },
        { id: 'power', label: 'Power-user signals' },
        { id: 'quality', label: 'Engagement quality' },
        { id: 'anti-vanity', label: 'Anti-vanity filters' },
        { id: 'defs', label: 'Metric definitions' },
      ],
    },
    {
      id: 'bi',
      title: 'BI & decisions',
      nodes: [
        { id: 'exec', label: 'Executive dashboards' },
        { id: 'product', label: 'Product / growth views' },
        { id: 'alerts', label: 'Slack / reliability alerts' },
        { id: 'framing', label: 'Stakeholder framing' },
        { id: 'cadence', label: 'Operating cadence' },
      ],
    },
  ],
  scenarios: [
    {
      id: 'activation',
      question: 'What counts as activation on an infinite canvas?',
      stageIds: ['capture', 'contract', 'metrics', 'bi'],
      nodeIds: [
        'ph-events',
        'client',
        'taxonomy',
        'typed',
        'activation',
        'anti-vanity',
        'defs',
        'product',
        'framing',
      ],
      summary:
        'Define the first meaningful creative outcome (not a vanity click) → encode it in the event contract → measure activation cohorts → put the definition on an executive view everyone argues from.',
    },
    {
      id: 'power-users',
      question: 'Who are the power users — and what do they do differently?',
      stageIds: ['capture', 'warehouse', 'metrics', 'bi'],
      nodeIds: [
        'ph-events',
        'props',
        'identity',
        'sync',
        'transforms',
        'power',
        'quality',
        'product',
        'exec',
      ],
      summary:
        'Session + generation depth from PostHog → warehouse cohorts → power-user signals (repeat craft loops, not raw volume) → growth and product dashboards that surface who to learn from.',
    },
    {
      id: 'engagement-quality',
      question: 'Is engagement quality rising — or just noise?',
      stageIds: ['capture', 'contract', 'metrics', 'bi'],
      nodeIds: [
        'client',
        'server',
        'props',
        'naming',
        'quality',
        'anti-vanity',
        'defs',
        'product',
        'alerts',
      ],
      summary:
        'Separate generation review / craft loops from empty churn → lock property standards → quality metrics with clear owners → alerts when quality drifts while vanity volume looks fine.',
    },
    {
      id: 'vendor',
      question: 'Which warehouse and BI stack should we bet on?',
      stageIds: ['warehouse', 'bi', 'metrics'],
      nodeIds: ['sync', 'snowflake', 'ingest', 'freshness', 'exec', 'cadence', 'defs'],
      summary:
        'Evaluate Snowflake / BigQuery / peers against PostHog sync, cost, and ops burden → pick boring operable paths → document metric ownership and refresh SLAs so the bet holds as the creative OS scales.',
    },
  ],
};

const rolePortfolio: RolePortfolioDossier = {
  fitSectionTitle: 'What FLORA is hiring for',
  fitIntro:
    'First data hire: capture → warehouse → metrics that matter → BI that gets used. PostHog is live; the broader model is open. Mapped to demonstrated vs ramp.',
  fitPillars: [
    {
      id: 'from-scratch',
      title: 'Data function from scratch',
      body: 'Playwire: owned pipeline migration and BI without a large data platform org — tooling judgment, schemas, reliability alerts stakeholders used.',
    },
    {
      id: 'metrics',
      title: 'Activation · power users · engagement quality',
      body: 'Hypothesis-driven product instincts from founding creative-AI work. Formal activation taxonomy + A/B ownership is an honest Coming soon ramp — not claimed mastery.',
    },
    {
      id: 'collab',
      title: 'Growth eng tracking model + TypeScript shop',
      body: 'I design the event contract; engineers instrument against it. Daily TypeScript/React product engineering makes that partnership natural.',
    },
  ],
  architecture: floraDataArchitecture,
  architectureSectionId: 'data-model',
  evidenceRoadmap: {
    title: 'Evidence they can review today',
    intro:
      'Ready items first. Gaps stay in Coming soon — not inflated. Creative-product metadata demo is linked as transferable lineage thinking for a generative OS, not as Snowflake/dbt stand-in.',
    items: [
      {
        id: 'playwire-warehouse',
        title: 'Playwire — Kinesis → Athena → Snowflake',
        status: 'ready',
        body: 'Data Analyst (2021–2022): migrated publisher analytics pipelines into **Snowflake**, defined operational SQL paths, and owned reliability concerns without a large DE team behind me.',
        imageSrc: playwire.imageSrc,
        imageAlt: playwire.imageAlt,
      },
      {
        id: 'playwire-bi',
        title: 'Tableau auction BI + Slack data alerts',
        status: 'ready',
        body: 'Built executive-facing **Tableau** auction-bidding analytics and **Slack** consistency alerts — dashboards and signals that stakeholders actually opened.',
        imageSrc: playwire.imageSrc,
        imageAlt: 'Playwire — Tableau BI and data reliability alerts',
      },
      {
        id: 'lore-typescript',
        title: 'TypeScript product collaboration (Lore Machine)',
        status: 'ready',
        body: 'Founding engineer on a full-stack **TypeScript** creative product — the same interface FLORA growth engineers ship against. Comfortable owning event contracts, typed schemas, and instrumentation PRs.',
        href: lore.href,
        linkLabel: 'Lore Machine',
        imageSrc: lore.imageSrc,
        imageAlt: lore.imageAlt,
      },
      {
        id: 'posthog-literacy',
        title: 'PostHog literacy (not activation ownership)',
        status: 'in-progress',
        body: 'Daily PostHog exposure via live product surfaces (e.g. AI24) and site instrumentation — events, funnels, property hygiene. **Not** claiming founding ownership of activation taxonomy at FLORA scale; that design work is what I would own here.',
        href: ai24.href,
        linkLabel: 'AI24',
        imageSrc: ai24.imageSrc,
        imageAlt: ai24.imageAlt,
        imageLocal: ai24.imageLocal,
      },
      {
        id: 'creative-lineage',
        title: 'Transferable: generative output lineage demo',
        status: 'ready',
        body: 'Unofficial **Output Provenance Explorer** — structured metadata, upstream graph trace, inspect-what-produced-this UX. Useful adjacent proof for a **creative operating system** (engagement quality / generation review), not warehouse DE credentials.',
        href: PROVENANCE_DEMO,
        linkLabel: 'Open live demo',
      },
      {
        id: 'event-contract-sample',
        title: 'Typed event-contract + PostHog hygiene sample',
        status: 'todo',
        body: 'Small public TypeScript sample: event names, property schemas, and instrumentation checklist Growth Engineering can implement against. Lands in Coming soon until published.',
      },
    ],
  },
  comingSoon: {
    title: 'Coming soon — honest ramp for this seat',
    intro:
      'FLORA’s nice-to-haves and first-90-day deliverables I have not yet packaged as public proof. Cards update as samples ship. Links land when published.',
    items: [
      {
        id: 'posthog-audit',
        kind: 'research',
        title: 'PostHog event audit + activation taxonomy sketch',
        body: 'Annotated inventory pattern: events, properties, activation moments, power-user signals, vanity vs decision metrics — the first-hire audit FLORA lists on day one.',
        badge: 'Coming soon',
      },
      {
        id: 'event-contract-repo',
        kind: 'repo',
        title: 'Typed tracking-model sample (TypeScript)',
        body: 'Public mini-repo: Zod/typed event contracts, naming conventions, and a Growth Engineering instrumentation checklist. Matches FLORA’s “you design, they instrument” split.',
        badge: 'Coming soon',
      },
      {
        id: 'dbt-metrics',
        kind: 'skill',
        title: 'dbt metrics / transform layer',
        body: 'Hands-on dbt mastery is a labeled gap. Snowflake SQL depth is demonstrated; metrics-layer conventions land here when a public sample exists.',
        badge: 'Coming soon',
      },
      {
        id: 'bi-public-sample',
        kind: 'demo',
        title: 'Public BI / metrics definitions sample',
        body: 'Sanitized dashboard or Looker Studio / Metabase / Tableau Cloud sample with metric definitions stakeholders can open. Playwire Tableau was production-internal — this packages the pattern publicly.',
        badge: 'Coming soon',
      },
      {
        id: 'warehouse-eval',
        kind: 'skill',
        title: 'BigQuery / ClickHouse / MotherDuck eval notes',
        body: 'Snowflake is the demonstrated platform. Peer-warehouse evaluation notes for FLORA’s vendor decision — cost, sync from PostHog, scale — without claiming production depth yet.',
        badge: 'Coming soon',
      },
      {
        id: 'ab-activation',
        kind: 'skill',
        title: 'Activation model + A/B ownership notes',
        body: 'Conversion-rate framing and experiment ownership as a formal practice — product instincts transfer; measured A/B ownership is the honest gap FLORA lists as nice-to-have.',
        badge: 'Coming soon',
      },
      {
        id: 'provenance-repo',
        kind: 'demo',
        title: 'Creative-product metadata (live today)',
        body: 'Already live as transferable proof — generative output → upstream path. Linked here so recruiters who want a clickable demo for creative-OS product thinking have one while DE samples ship.',
        href: PROVENANCE_DEMO,
        linkLabel: 'Live demo',
        badge: 'Live · transferable',
      },
      {
        id: 'provenance-github',
        kind: 'repo',
        title: 'Provenance Explorer repository',
        body: 'Vue/TypeScript monorepo with Zod validation, graph traversal tests, CI, docs — shows how I package instrumentation-adjacent product evidence in the open.',
        href: PROVENANCE_REPO,
        linkLabel: 'View repository',
        badge: 'Live · transferable',
      },
    ],
  },
  capabilityMap: {
    title: 'Capabilities for a founding data seat',
    subtitle:
      'Demonstrated warehouse/BI and TypeScript collaboration first. PostHog depth, dbt, BigQuery, and formal activation/A-B ownership stay in Coming soon until shipped.',
    groups: [
      {
        id: 'warehouse',
        title: 'Warehousing & pipelines',
        items: [
          '**Snowflake, SQL (Athena, MySQL), schema design, Kinesis → warehouse migration, AWS Glue ETL, pipeline reliability, Slack data alerts**',
        ],
      },
      {
        id: 'bi',
        title: 'BI & decision framing',
        items: [
          '**Tableau dashboards, stakeholder framing, anti-vanity metrics judgment, executive-facing auction / publisher analytics**',
        ],
      },
      {
        id: 'product-analytics',
        title: 'Product analytics (ramp + literacy)',
        items: [
          '**PostHog events/funnels familiarity · activation taxonomy design as founding ramp · growth-eng tracking contracts**',
        ],
      },
      {
        id: 'languages',
        title: 'Languages & collaboration',
        items: [
          '**SQL, TypeScript, Python, JavaScript — partner with a full-stack TypeScript shop on instrumentation**',
        ],
      },
      {
        id: 'product',
        title: 'Product & creative-OS instincts',
        items: [
          '**Founding creative-AI product work · generation review loops · structured metadata / lineage thinking (Provenance Explorer)**',
        ],
      },
    ],
    currentlyExtending: [
      'dbt metrics layer',
      'PostHog warehouse sync + activation models',
      'BigQuery / peer warehouse evaluation',
      'Measured A/B and experiment ownership',
    ],
    closingStatement:
      'Strongest demonstrated spine: **Snowflake + Tableau + SQL pipelines at Playwire**, plus **TypeScript product collaboration**. Deep PostHog, dbt, and public BI samples are active Coming soon work — not vocabulary to hide behind.',
  },
  experienceRolesTitle: 'Relevant experience',
  experienceRolesIntro:
    'Data spine first, then founding product work that transfers into FLORA’s TypeScript + creative-OS context.',
  experienceRoles: [
    {
      id: 'playwire',
      org: 'Playwire',
      title: 'Data Analyst · Solutions Engineer',
      location: 'Miami, FL',
      period: '2021–2022',
      bullets: [
        'Migrated publisher analytics from **Kinesis → Athena → Snowflake**, defining schemas and operational SQL paths as part of a small data function.',
        'Built **Tableau** auction-bidding analytics used for publisher performance visibility — framing findings for BD and solutions stakeholders.',
        'Shipped **Slack** data-consistency alerts so reliability issues surfaced before stakeholders lost trust in the numbers.',
        'As Solutions Engineer: scoped publisher integrations, debugged JavaScript delivery issues, and translated client needs into SaaS onboarding outcomes.',
      ],
    },
    {
      id: 'lore-machine',
      org: 'Lore Machine',
      title: 'Chief Prompt Officer · Founding Engineer',
      bullets: [
        'Founding engineer on a real-time generative storytelling product — **TypeScript / React / Next.js**, APIs, and creator-facing workflows.',
        'Cared about iteration loops, generation failure states, and whether interfaces produced usable outcomes — the same anti-vanity instinct applied to product metrics.',
        'Collaborated across product, engineering, and leadership on ambiguous goals → working features — the operating mode of a first data hire partnering with CTO and Head of Product.',
      ],
    },
    {
      id: 'ai24',
      org: 'AI24',
      title: 'Co-Founder · Creative AI Engineer',
      bullets: [
        'Built AI education and product surfaces with live telemetry awareness (**PostHog**-adjacent product literacy) without claiming founding DE ownership.',
        'Operates hypothesis-driven: what to measure for learning products vs vanity engagement.',
      ],
    },
  ],
  selectedProjectSectionTitle: 'Selected data project',
  selectedProject: {
    title: 'Playwire — warehouse migration & auction BI',
    subtitle: 'Kinesis → Athena → Snowflake · Tableau · Slack reliability',
    deliveryStatus: 'deployed',
    imageSrc: playwire.imageSrc,
    imageAlt: playwire.imageAlt,
    bullets: [
      'Stood up the practical data path publishers needed: ingest → queryable warehouse → dashboards → alerts.',
      'Made tooling and schema decisions without a large platform org — the first-hire judgment FLORA is hiring for.',
      'Optimized for trust: consistency alerts and stakeholder-facing BI, not vanity charts.',
    ],
  },
  technologiesTitle: 'Selected technologies',
  technologies: [
    {
      id: 'data',
      label: 'Data platforms',
      items: '**Snowflake, SQL, Athena, MySQL, AWS Glue, Kinesis**',
    },
    {
      id: 'bi',
      label: 'BI & ops',
      items: '**Tableau, Slack alerting, stakeholder dashboards**',
    },
    {
      id: 'product',
      label: 'Product analytics',
      items: '**PostHog (literacy) · activation / warehouse sync in Coming soon**',
    },
    {
      id: 'langs',
      label: 'Languages',
      items: '**SQL, TypeScript, Python, JavaScript**',
    },
  ],
  availabilityNote:
    'Open to FLORA’s New York City on-site Founding Data Engineer seat (5 days in person). Relocate logistics and start window discussed in interview. Coming soon samples update as PostHog audit, typed event contracts, and public BI proof ship.',
};

export const floraFoundingDataEngineerOpportunity: Opportunity = {
  slug: 'flora-founding-data-engineer',
  status: 'active',
  listed: false,
  variant: 'role-portfolio',
  applicationBanner: floraFoundingDataEngineerBanner,
  animatedLogoBand: floraDataEngineerSkillLogoBand,
  seo: {
    title: 'Moises Sanabria — FLORA · Founding Data Engineer',
    description:
      'Private application dossier for FLORA Founding Data Engineer — Playwire Snowflake/Tableau spine, TypeScript collaboration, honest PostHog/dbt Coming soon ramp, transferable creative lineage demo.',
    indexable: false,
  },
  visibilityNote: `Private application dossier · ${COMPANY} · ${ROLE_TITLE} · not affiliated with or endorsed by FLORA`,
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'FLORA',
        detail:
          'Creative operating system — infinite canvas for generative computing. Backed by Redpoint, Menlo, a16z.',
      },
      {
        label: 'Founding Data Engineer',
        detail:
          'First data hire — warehouse, pipelines, metrics, BI, PostHog audit with CTO & Head of Product.',
      },
      {
        label: 'New York City · on-site',
        detail: 'Full-time · Engineering · $170K–$240K + equity · 5 days in person.',
      },
    ],
  },
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  heroEyebrow: `${COMPANY} · ${ROLE_TITLE}`,
  heroRoleMeta: 'New York City · Full-time · On-site · Engineering · $170K–$240K + equity',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Data engineer who has stood up pipelines and BI from scratch — and ships TypeScript product with growth-minded engineers',
  heroMetaChips: [
    'New York City · on-site',
    'First data hire framing',
    'Snowflake · Tableau · SQL',
    'Private application dossier',
  ],
  heroPrimaryCta: { label: 'Explore data model', href: '#data-model' },
  heroSecondaryCta: { label: 'Apply on Ashby', href: ASHBY_URL },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'data-model', label: 'Data model', shortLabel: 'Model' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'coming-soon', label: 'Coming soon', shortLabel: 'Soon' },
    { id: 'skills', label: 'Skills' },
    { id: 'capabilities', label: 'Capabilities', shortLabel: 'Caps' },
    { id: 'experience', label: 'Experience', shortLabel: 'Exp' },
    { id: 'process', label: 'First 90 days', shortLabel: '90d' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'I build the data layer that turns product questions into decisions.',
    subheadline:
      'First-principles data hire: warehouse + pipelines + metrics that matter — then dashboards people actually open.',
    introParagraphs: [
      'FLORA is hiring its **first data engineer** to define capture, storage, analysis, and decision-making alongside the CTO and Head of Product. PostHog is live; the broader data model is still open. That is exactly the shape of work I have done before.',
      'At **Playwire** I migrated publisher analytics from **Kinesis → Athena → Snowflake**, built **Tableau** auction BI, and shipped **Slack** reliability alerts — owning tooling judgment and schema decisions without a large data org behind me. Since then I have shipped founding product work in **TypeScript** (Lore Machine) and operate product telemetry surfaces daily — including **PostHog** literacy — without overclaiming activation-model ownership yet.',
      'Gaps are labeled in **Coming soon** (PostHog audit sample, typed event contracts, dbt, public BI). For creative-OS product thinking, a live **output lineage demo** is linked as transferable proof — not as warehouse credentials. Open to **New York City on-site**.',
    ],
    trustLine:
      'Playwire Data Analyst · founding product engineer · Miami → NYC for the right founding data seat',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchRows: [],
  featuredProjectIds: ['playwire-alumni', 'lore-machine', 'ai24'],
  skillsSectionTitle: 'Skills map — demonstrated vs Coming soon',
  skillsMatrixRows: [
    {
      category: 'Warehouse & SQL',
      skills: 'Snowflake, SQL (Athena, MySQL), schema design, ETL / Glue, pipeline reliability',
      icon: 'lineChart',
    },
    {
      category: 'BI & alerting',
      skills: 'Tableau dashboards, Slack data consistency alerts, stakeholder framing',
      icon: 'tv',
    },
    {
      category: 'Product analytics',
      skills: 'PostHog literacy — activation taxonomy + warehouse sync in Coming soon',
      icon: 'target',
    },
    {
      category: 'Languages',
      skills: 'SQL, TypeScript, Python, JavaScript',
      icon: 'code2',
    },
    {
      category: 'Collaboration',
      skills: 'Growth/product eng tracking contracts, CTO/Head of Product decision framing',
      icon: 'users',
    },
    {
      category: 'Honest gaps',
      skills: 'dbt, BigQuery depth, measured A/B — Coming soon cards, not inflated claims',
      icon: 'shield',
    },
  ],
  processSectionTitle: 'First ~90 days as founding data hire',
  processIntro:
    'A realistic founding sequence aligned with FLORA’s stated work: audit → model → warehouse → metrics → BI. Vendor choices included. Tap or hover a step to focus.',
  processSteps: [
    {
      title: 'Audit PostHog + product questions',
      description:
        'Inventory events, properties, and user behaviors. Interview CTO, Head of Product, and Growth Engineering on activation moments, power users, and engagement quality. Separate vanity from decisions.',
      logoIds: ['posthog', 'typescript'],
    },
    {
      title: 'Design the tracking + data model',
      description:
        'Define event taxonomy, metadata standards, and warehouse schemas. Hand Growth Engineering a clear instrumentation contract — they implement; I own the model.',
      logoIds: ['typescript', 'postgres'],
    },
    {
      title: 'Stand up warehouse + pipelines',
      description:
        'Evaluate Snowflake / BigQuery / peers against FLORA’s scale and cost. Implement ingestion, transforms, and reliability checks. Prefer boring, operable paths over fashion.',
      logoIds: ['snowflake', 'aws', 'python'],
    },
    {
      title: 'Ship executive BI that gets used',
      description:
        'Dashboards for product and growth decisions — activation, retention/power users, engagement quality. Iterate with stakeholders until charts change meetings.',
      logoIds: ['tableau', 'posthog'],
    },
    {
      title: 'Lock the operating cadence',
      description:
        'Document metrics definitions, ownership, and refresh SLAs. Propose BI tooling and warehouse decisions that hold as creative OS usage scales.',
      logoIds: ['snowflake', 'tableau'],
    },
  ],
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    resumePrintPath: '/cv/tech/print',
    careerPacket: '/career-packet',
    caseStudiesAnchor: '#evidence',
    emailSubject: 'FLORA — Founding Data Engineer — Moises Sanabria',
    github: 'https://github.com/moisestech',
    scheduleUrl: ASHBY_URL,
    scheduleLabel: 'Apply on Ashby',
  }),
  techLogoIds: ['snowflake', 'tableau', 'posthog', 'python', 'typescript', 'postgres', 'aws'],
  resumeSectionTitle: 'Ready to talk about FLORA’s data function?',
  resumeSectionNote:
    'Ashby application, Drive résumé, GitHub, and email below. NYC on-site availability and warehouse vendor preferences are open for discussion with the CTO and Head of Product.',
};
