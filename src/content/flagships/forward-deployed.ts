import { flagshipEvidence, listClaimableCases } from '@/content/evidence/flagships';

export type LifecycleStageId =
  | 'discover'
  | 'map'
  | 'prototype'
  | 'deploy'
  | 'enable'
  | 'measure'
  | 'iterate';

export type LifecycleStage = {
  id: LifecycleStageId;
  title: string;
  question: string;
  body: string;
  evidenceIds: string[];
};

export type SmartSignSection = {
  id: string;
  title: string;
  body: string;
  placeholder?: string;
};

const hub = flagshipEvidence['forward-deployed'];

export const forwardDeployedFlagship = {
  seo: {
    title: 'Forward-Deployed Systems — Moises Sanabria',
    description:
      'From ambiguous organizational problems to deployed technical systems: Digilab, SmartSigns, and production automations.',
  },
  title: hub.title,
  subtitle: hub.subtitle,
  intro:
    'Can I enter an unfamiliar environment, understand the operational problem, communicate with stakeholders, build something useful, deploy it, and teach people how to use it? That is the forward-deployed question. This page answers it with lifecycle evidence — not employer labels.',
  primaryCta: { label: 'Technical capabilities', href: '/capabilities' },
  secondaryCta: { label: 'Role dossier overlay', href: '/opportunities/forward-deployed-ai-engineer' },
  tertiaryCta: { label: 'Tech CV', href: '/cv/tech' },
  lifecycle: [
    {
      id: 'discover',
      title: 'Discover',
      question: 'What is actually broken in the room?',
      body: 'Stakeholder interviews, observation of existing workflows, and constraint gathering before tools are chosen.',
      evidenceIds: ['oolite-digilab', 'bookleggers-commerce-automation'],
    },
    {
      id: 'map',
      title: 'Map',
      question: 'Who owns what, and where does the system fail?',
      body: 'Stakeholder maps, system diagrams, and explicit boundaries between shipped, proposed, and out-of-scope work.',
      evidenceIds: ['smart-signs', 'oolite-digilab'],
    },
    {
      id: 'prototype',
      title: 'Prototype',
      question: 'What can we learn this week?',
      body: 'Fast prototypes that surface integration risk, UX friction, and institutional politics early.',
      evidenceIds: ['lore-machine', 'n8n-gmail-intelligence'],
    },
    {
      id: 'deploy',
      title: 'Deploy',
      question: 'Does it run where people actually work?',
      body: 'Hardware, networking, CMS, cloud, and automation paths that survive real venue and ops conditions.',
      evidenceIds: ['smart-signs', 'n8n-gmail-intelligence', 'bookleggers-commerce-automation'],
    },
    {
      id: 'enable',
      title: 'Enable',
      question: 'Can non-engineers operate it next week?',
      body: 'Training, documentation, open hours, and handoff patterns so systems outlive a single builder.',
      evidenceIds: ['oolite-digilab', 'smart-signs'],
    },
    {
      id: 'measure',
      title: 'Measure',
      question: 'What changed for the institution?',
      body: 'Verified program facts and operational outcomes — never invented KPIs. Gaps stay labeled.',
      evidenceIds: ['oolite-digilab'],
    },
    {
      id: 'iterate',
      title: 'Iterate',
      question: 'What failed in production, and what changed?',
      body: 'Failure recovery, content governance revisions, and curriculum updates based on lived use.',
      evidenceIds: ['oolite-digilab', 'smart-signs'],
    },
  ] satisfies LifecycleStage[],
  cases: listClaimableCases('forward-deployed').map((c) => ({
    id: c.id,
    title: c.title,
    summary: c.summary,
    href: c.href,
    imageSrc: c.imageSrc,
    imageAlt: c.imageAlt,
    status: c.status,
  })),
  smartSigns: {
    title: 'Central technical case — Bakehouse SmartSigns',
    lead: 'Real institution + physical environment + hardware + Linux + Raspberry Pi + web software + networking + deployment + maintenance + human stakeholders.',
    href: '/services/smartsign',
    bakehouseHref: '/bakehouse',
    sections: [
      {
        id: 'problem',
        title: 'Problem',
        body: 'Venues need legible, updatable public screens for artists, events, and studio activity without depending on ad-hoc USB updates or fragile consumer displays.',
      },
      {
        id: 'constraints',
        title: 'Physical constraints',
        body: 'Lobby sightlines, mounting hardware, power, network reliability, bilingual content, and staff who are not full-time IT.',
      },
      {
        id: 'stakeholders',
        title: 'Stakeholders',
        body: 'Artists, residency staff, visitors, and facilities — each with different update cadence and success criteria.',
      },
      {
        id: 'architecture',
        title: 'System architecture',
        body: 'Device layer (Raspberry Pi / Anthias), content CMS, scheduling, and institutional publishing patterns that keep spatial displays in sync with digital communications.',
        placeholder: 'System architecture diagram pending publishable asset.',
      },
      {
        id: 'prototype',
        title: 'Prototype',
        body: 'Early vertical formats and content templates tested against real Bakehouse open-studio traffic.',
      },
      {
        id: 'installation',
        title: 'Installation',
        body: 'Shipped vertical smart-sign installations at Bakehouse Art Complex.',
        placeholder: 'Production install photography pending permission-cleared assets.',
      },
      {
        id: 'device',
        title: 'Device software',
        body: 'Linux kiosk stack, remote content pull, and recovery paths when a device loses network or fails to boot into the player.',
      },
      {
        id: 'admin',
        title: 'Admin infrastructure',
        body: 'Content governance and update workflows so staff can publish without SSH or local file copies.',
        placeholder: 'Anthias / admin dashboard screenshots pending.',
      },
      {
        id: 'failure',
        title: 'Failure recovery',
        body: 'Documented reboot, content re-sync, and escalation steps for venue staff when a screen goes dark mid-event.',
      },
      {
        id: 'training',
        title: 'Training',
        body: 'Hands-on enablement so non-technical operators can update schedules and swap creative without breaking the player.',
      },
      {
        id: 'handoff',
        title: 'Operational handoff',
        body: 'What is shipped vs proposed (including Artist Portal on Assembly) is labeled explicitly so institutions know what they can run today.',
      },
      {
        id: 'learned',
        title: 'What I learned',
        body: 'Forward-deployed work fails when training and recovery are treated as afterthoughts. Physical systems need the same ops discipline as cloud services — plus hallway politics.',
      },
    ] satisfies SmartSignSection[],
  },
  relatedFlagships: [
    { id: 'agentic-ops', href: '/projects/agentic-ops', label: 'Agentic Ops', status: 'building' as const },
    { id: 'creative-ai', href: '/creative-ai', label: 'Creative AI', status: 'live' as const },
  ],
};
