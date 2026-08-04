/**
 * WMX — Senior Art Director, Creative + AI Expertise
 * Application dossier: /opportunities/wmx-senior-art-director-ai
 *
 * Listing: https://www.indeed.com/viewjob?jk=20436875097d9fd3
 * Company: https://www.wearewmx.com/about/
 *
 * Accuracy notes:
 * - Do not claim conventional agency ACD experience, direct reports, hospitality campaign
 *   results, or WooCommerce expertise without project evidence.
 * - Do not invent metrics, clients, team size, or outcomes.
 * - Oolite “18 workshops” is NOT verified in site data — omit numeric claim until sourced.
 * - Campaign channel system is a self-initiated study — label clearly; assets may be TODOs.
 * - Bakehouse SmartSign: label shipped vs proposed accurately.
 */

import type { Opportunity } from './types';
import type { RolePortfolioDossier } from './rolePortfolio';
import type { CreativeAgencyDossier } from './wmxCreativeDossier';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import {
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { wmxSeniorArtDirectorBanner } from '@/content/evidence/applicationBanners';

const ROLE_TITLE = 'Senior Art Director — Creative + AI Expertise';
const COMPANY = 'WMX';
const SLUG = 'wmx-senior-art-director-ai';

const lore = evidenceProjects['lore-machine'];
const ai24 = evidenceProjects.ai24;
const multimodal = evidenceProjects['multimodal-image-systems'];

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

const SMART_SHOPPERS = `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`;
const DOOMSCROLLING = `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`;
const SIMULATION_FAITH = `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`;
const DIGITAL_DIVINITIES = `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`;
const BROKEN_ACCELERATION = `${CDN}/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png`;
const TOUCH_GRASS = `${CDN}/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg`;

export const wmxCreativeAgency: CreativeAgencyDossier = {
  capabilitiesTitle: 'What I bring',
  capabilitiesIntro:
    'Five capability areas mapped to how WMX ships branded work across travel, hospitality, entertainment, and nonprofit clients—under human direction, with AI as acceleration rather than substitute judgment.',
  capabilities: [
    {
      id: 'brand-systems',
      title: 'Brand and Visual Systems',
      body: 'Concept development, identity evolution, typography, image direction, presentations, and digital and print applications—keeping a visual idea coherent across formats.',
    },
    {
      id: 'ai-production',
      title: 'AI-Augmented Creative Production',
      body: 'Midjourney, Firefly, DALL·E, Runway, image pipelines, prompt systems, compositing, human review, and scalable variation—with brand constraints enforced before channel rollout.',
    },
    {
      id: 'ux-frontend',
      title: 'UX/UI and Frontend Craft',
      body: 'Figma, responsive design, accessibility, HTML, CSS, JavaScript, React, prototyping, and production interfaces. WordPress/WooCommerce familiarity is adjacent; commercial email/WooCommerce specimens are labeled honestly below.',
    },
    {
      id: 'creative-ops',
      title: 'Creative Operations',
      body: 'Briefs, prioritization, reusable templates, asset governance, review checkpoints, documentation, and cross-functional delivery so speed does not erase craft.',
    },
    {
      id: 'leadership',
      title: 'Leadership and Mentorship',
      body: 'Product leadership, workshops, artist support, critique, technical translation, and helping collaborators adopt unfamiliar tools without losing authorship.',
    },
  ],

  caseStudiesTitle: 'Selected case studies',
  caseStudiesIntro:
    'Four bodies of work that demonstrate visual systems, AI production under human direction, UX/UI shipping, and creative leadership. Delivery status is labeled per project. Missing production artifacts are marked TODO—not invented.',
  caseStudies: [
    {
      id: 'lore-machine',
      title: 'Lore Machine — AI-native visual storytelling',
      category: 'Product · generative visual systems',
      deliveryStatus: 'deployed',
      context:
        'Founding engineer and Chief Prompt Officer on a three-person engineering team building a real-time generative-AI storytelling platform that turns written narratives into structured, illustrated visual experiences.',
      challenge:
        'Translate experimental generative-model capability into a product creators could operate—without surrendering visual consistency, narrative structure, or reviewable craft.',
      role: 'Owned product interfaces, prompt systems, multimodal generation workflows, frontend delivery, and the translation layer between leadership, engineering, and creative production.',
      designDecisions: [
        'Treat prompt operations as art direction: constraints, style territories, and review gates before assets leave the pipeline.',
        'Prototype in Figma and Adobe tools so visual intent is negotiated before code and model cost scale.',
        'Ship creator-facing workflows on Vercel with authentication, API integrations, and scene-oriented rendering logic.',
      ],
      workflow:
        'Brief / narrative structure → prompt systems and visual territories → generative exploration → human selection and critique → compositing and product UI → production delivery.',
      outputs: [
        'Responsive product interfaces',
        'Generative-image and narrative pipelines',
        'Prompt architecture and review loops',
        'Cross-functional demos for creative, engineering, and business stakeholders',
      ],
      learning:
        'AI accelerates exploration only when brand and taste constraints are explicit. The art-direction job is deciding what survives the pipeline—not maximizing generation volume.',
      todos: [
        'TODO: Add raw generation vs final art-directed asset pair from Lore Machine (permission-cleared).',
        'TODO: Short screen recording of shipped responsive UI.',
        'TODO: Figma / Adobe production artifact stills with layer or style-guide callouts.',
      ],
      imageSrc: lore.imageSrc,
      imageAlt: lore.imageAlt,
      href: lore.href,
      linkLabel: 'Lore Machine',
    },
    {
      id: 'oolite-digital-lab',
      title: 'Oolite Digital Lab — Creative leadership and adoption',
      category: 'Institutional · creative technology program',
      deliveryStatus: 'deployed',
      context:
        'Technical Director of Digital at Oolite Arts, co-developing the Knight-supported Digital Lab with Fabiola Larios—turning space, tools, curriculum, documentation, and sustained artist support into an accessible creative-technology program.',
      challenge:
        'Make advanced tools usable for Miami artists without requiring them to become engineers—equipment, workshops, open hours, and one-on-one support as one connected program.',
      role: 'Technical direction and co-development: production systems, workshop pedagogy, equipment and vendor coordination, documentation, mentorship, and artist-facing UX for complex technology.',
      designDecisions: [
        'Design for confidence and repeatability: setup, safety, scheduling, onboarding, troubleshooting, teaching.',
        'Keep curriculum bilingual and beginner-accessible where public listings require it.',
        'Treat documentation and critique as part of the creative system, not afterthoughts.',
      ],
      workflow:
        'Institutional brief → lab systems and equipment readiness → workshop / open-hour design → artist support → documentation and iteration.',
      outputs: [
        'Digital Lab production environment',
        'Public workshops and open lab hours (see Oolite Arts listings)',
        'Artist support and technical translation',
        'Program documentation and adoption pathways',
      ],
      learning:
        'Creative leadership in this context is adoption design: helping people finish work with unfamiliar tools under real institutional constraints.',
      todos: [
        'TODO: Confirm workshop count from Oolite public records before citing a number (do not use unverified “18”).',
        'TODO: Permission-cleared workshop / lab production photos beyond current placeholder hero.',
        'TODO: Sample critique notes or onboarding checklist redacted for privacy.',
      ],
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'Oolite Digital Lab',
    },
    {
      id: 'ai24-moisesgpt',
      title: 'AI24 / MoisesGPT — Editorial identity and creative system',
      category: 'Editorial · creative pipeline',
      deliveryStatus: 'deployed',
      context:
        'Co-founded AI24 as a human-curated visual and editorial system across image, motion, web, and social—news illustration tooling, literacy programs, and applied systems for artists and institutions.',
      challenge:
        'Keep a distinctive visual and editorial point of view coherent when AI accelerates content production—so the system never becomes an automated firehose.',
      role: 'Creative direction, pipeline design, frontend and service architecture, and review practices that keep generated assets human-correctable before publication.',
      designDecisions: [
        'Pipeline includes review, correction, and refinement—not autonomous publish.',
        'Visual identity spans product UI, generated illustration language, and program surfaces.',
        'Education and tools reinforce the same thesis: emerging technology under human supervision.',
      ],
      workflow:
        'Editorial brief → structured content processing → generative-image services → human review → Adobe / compositing refinement → responsive delivery.',
      outputs: [
        'AI24 product and program hub',
        'API-driven creative-content pipeline',
        'Workshop and literacy programs',
        'Human-in-the-loop illustration workflows',
      ],
      learning:
        'Editorial identity is a constraint system. Speed without review destroys brand trust—exactly the risk agencies face when adopting AI.',
      todos: [
        'TODO: Style-guide stills (typography, color, illustration rules) for AI24 editorial system.',
        'TODO: Before/after pair: raw generation vs published art-directed illustration.',
        'TODO: Clarify MoisesGPT naming / surface for external audiences if distinct from AI24.',
      ],
      imageSrc: ai24.imageSrc,
      imageAlt: ai24.imageAlt,
      href: ai24.href,
      linkLabel: 'AI24',
    },
    {
      id: 'bakehouse-smartsign',
      title: 'Bakehouse SmartSign / Artist Portal — Connected brand touchpoints',
      category: 'Spatial + digital · institutional',
      deliveryStatus: 'in-development',
      context:
        'At Bakehouse Art Complex, vertical smart-sign systems promote artists, events, and studio activity through a repeatable screen-based format. Related digital work includes artist-facing infrastructure and anniversary storytelling (including VR / reel translations). An Artist Portal extends content governance across spatial and digital touchpoints—parts shipped, parts proposed.',
      challenge:
        'Connect public signage, content hierarchy, and artist-facing digital experience so the building’s visual voice stays coherent across screens and interfaces.',
      role: 'Design and production of vertical smart-sign systems; information hierarchy and content governance patterns; interface work linking spatial display to digital publishing. Label current vs proposed carefully.',
      designDecisions: [
        'Repeatable vertical format as brand system—not one-off posters.',
        'Content governance so artist features and events stay legible under production pressure.',
        'Treat spatial screens and digital portals as one customer / visitor journey, not separate channels.',
      ],
      workflow:
        'Content brief → hierarchy and templates → screen / UI production → deployment on venue hardware → iteration from live use.',
      outputs: [
        'Vertical smart-sign installations at Bakehouse (shipped)',
        'Screen-based artist and event promotion formats (shipped)',
        'Artist Portal / CMS-facing governance concepts (in progress / proposed—TODO: ship status per module)',
        'Related Bakehouse anniversary digital storytelling',
      ],
      learning:
        'Agency channel work is the same problem at commercial scale: one idea, many surfaces, shared governance, measurable visitor clarity.',
      todos: [
        'TODO: Photo of live Bakehouse SmartSign installation (permission-cleared).',
        'TODO: Figma flows for Artist Portal — mark shipped screens vs proposed.',
        'TODO: Sample content calendar / governance checklist (redacted).',
      ],
      imageSrc: DIGITAL_DIVINITIES,
      imageAlt:
        'Bakehouse Art Complex — Digital Divinities open studios; spatial context for artist-facing digital and screen systems',
      href: '/services/smartsign',
      linkLabel: 'SmartSign work',
    },
  ],

  campaign: {
    eyebrow: 'Self-Initiated Travel Campaign System Study',
    title: 'From one idea to many channels',
    intro:
      'WMX serves travel, tourism, hospitality, entertainment, and nonprofit clients. This section is a clearly labeled self-initiated Miami-oriented campaign study—not a client engagement. It closes the commercial channel-system gap by showing how one visual idea adapts across formats under brand control.',
    conceptTitle: 'Working concept — Miami light, measured hospitality',
    conceptBody:
      'A hospitality / destination campaign system that treats Miami as a sensory brand territory: heat, waterline, night commerce, and cultural density—without resorting to postcard cliché. Master image establishes the territory; channel adaptations protect typography, crop logic, and CTA hierarchy across social, email, display, presentation, and print.',
    disclaimer:
      'Self-initiated study for application evidence. Not a WMX client project. Specimens below are placeholders until production assets are finished—do not present unfinished work as shipped campaigns.',
    formats: [
      {
        id: 'master',
        label: 'Master campaign image',
        aspectClass: 'aspect-[16/9]',
        description: 'Hero still establishing visual territory, lighting, and brand color temperature.',
        placeholderNote: 'TODO: Produce master art-directed still (Adobe-composited from AI exploration).',
      },
      {
        id: 'landing',
        label: 'Landing-page hero',
        aspectClass: 'aspect-[16/9]',
        description: 'Web hero with headline hierarchy, trust line, and primary CTA placement.',
        placeholderNote: 'TODO: Responsive landing hero mock (Figma + HTML/CSS specimen).',
      },
      {
        id: 'social-1-1',
        label: '1:1 social',
        aspectClass: 'aspect-square',
        description: 'Feed crop preserving subject and type safe areas.',
        placeholderNote: 'TODO: 1080×1080 social crop.',
      },
      {
        id: 'social-4-5',
        label: '4:5 social',
        aspectClass: 'aspect-[4/5]',
        description: 'Vertical feed crop with adjusted focal point.',
        placeholderNote: 'TODO: 1080×1350 social crop.',
      },
      {
        id: 'story-9-16',
        label: '9:16 story',
        aspectClass: 'aspect-[9/16]',
        description: 'Full-bleed story with motion-safe title lockup.',
        placeholderNote: 'TODO: 1080×1920 story frame (+ optional motion loop).',
      },
      {
        id: 'email',
        label: 'Responsive HTML email',
        aspectClass: 'aspect-[3/4]',
        description: 'Email-safe layout: hero, scannable body, CTA—mobile-first.',
        placeholderNote: 'TODO: Small HTML email specimen (responsive). Do not overclaim WooCommerce.',
      },
      {
        id: 'banner',
        label: 'HTML5 display banner',
        aspectClass: 'aspect-[16/9]',
        description: 'Animated display unit with brand-safe loop and weight budget.',
        placeholderNote: 'TODO: HTML5 banner specimen (300×250 / 728×90 variants).',
      },
      {
        id: 'deck',
        label: 'Presentation slide',
        aspectClass: 'aspect-[16/9]',
        description: 'Client-presentation frame with concept narrative and channel map.',
        placeholderNote: 'TODO: Keynote/Figma presentation slide.',
      },
      {
        id: 'print',
        label: 'Print placement',
        aspectClass: 'aspect-[4/5]',
        description: 'Print crop with bleed, safe type, and production notes.',
        placeholderNote: 'TODO: Print placement mock (poster or magazine).',
      },
    ],
  },

  workflow: {
    title: 'Human + AI workflow',
    intro:
      'A repeatable production path: brief → brand constraints → AI exploration → Adobe refinement → channel adaptation → QA. AI widens the search; humans keep taste, consistency, and brand safety.',
    steps: [
      {
        id: 'brief',
        title: 'Brief and audience',
        description: 'Business goal, audience, channel mix, and success criteria before any generation.',
      },
      {
        id: 'territories',
        title: 'Visual territories',
        description: 'Mood, lighting, cultural references, and what the brand must never become.',
      },
      {
        id: 'constraints',
        title: 'Brand constraints',
        description: 'Typography, color, logo clearspace, tone, legal, and accessibility requirements.',
      },
      {
        id: 'explore',
        title: 'AI exploration',
        description: 'Prompt systems and controlled variation—volume under direction, not noise.',
      },
      {
        id: 'critique',
        title: 'Selection and critique',
        description: 'Human review: kill what breaks brand, keep what advances the idea.',
      },
      {
        id: 'refine',
        title: 'Adobe refinement',
        description: 'Photoshop / Illustrator compositing, retouching, typography, and print readiness.',
      },
      {
        id: 'adapt',
        title: 'Channel adaptation',
        description: 'Social, display, email, web, presentation, and print crops from one master system.',
      },
      {
        id: 'qa',
        title: 'Accessibility and QA',
        description: 'Contrast, responsive behavior, file specs, and brand checklist before delivery.',
      },
      {
        id: 'learn',
        title: 'Delivery and learning',
        description: 'Handoff, documentation, and notes that make the next campaign faster without lowering craft.',
      },
    ],
    beforeAfter: {
      beforeLabel: 'Raw AI generation',
      afterLabel: 'Art-directed final',
      note: 'The gap between model output and shippable brand asset is the art-direction job: selection, compositing, typography, and brand safety.',
      todo: 'TODO: Drop permission-cleared before/after stills (raw vs final) from Lore Machine or AI24 pipeline.',
    },
  },

  leadership: {
    title: 'Leadership in practice',
    intro:
      'Evidence of directing multidisciplinary work, mentoring collaborators, and building reusable systems—without claiming conventional agency ACD titles or direct-report headcount that is not documented.',
    points: [
      {
        id: 'multidisciplinary',
        title: 'Leading multidisciplinary work',
        body: 'Lore Machine founding team spanning engineering, creative production, and executive communication; Oolite Digital Lab co-direction with program, teaching, and production surfaces.',
      },
      {
        id: 'mentoring',
        title: 'Mentoring artists and designers',
        body: 'Oolite artist support and public workshops; AI24 literacy programs; critique practice that translates emerging tools into finishable work.',
      },
      {
        id: 'translation',
        title: 'Translating emerging technology',
        body: 'Make generative systems legible to non-engineers—prompt ops, review gates, and product language that protects authorship.',
      },
      {
        id: 'systems',
        title: 'Building reusable systems',
        body: 'Pipelines, templates, documentation, and lab SOPs so quality does not depend on one person’s memory.',
      },
      {
        id: 'concurrent',
        title: 'Managing concurrent deliverables',
        body: 'Product sprints, institutional programs, teaching, and studio production under overlapping deadlines.',
      },
      {
        id: 'constraints',
        title: 'Quality under constraints',
        body: 'Grant-scoped labs, small teams, and public-facing deadlines—craft maintained when resources are finite.',
      },
    ],
  },

  pointOfView: {
    title: 'Point of view',
    intro:
      'A restrained gallery of artistic work—originality, humor, and cultural perspective—kept secondary to the commercial case. Not a Midjourney thumbnail grid.',
    pullQuote: 'I design systems that recalibrate attention at the intersection of art and technology.',
    items: [
      {
        id: 'smart-shoppers',
        title: 'Smart Shoppers',
        href: '/art/smart_shoppers',
        imageSrc: SMART_SHOPPERS,
        imageAlt: 'Smart Shoppers — 3D-printed sculpture with integrated electronics',
      },
      {
        id: 'doomscrolling',
        title: 'Doomscrolling Treadmill',
        href: '/art/doomscrolling_treadmill',
        imageSrc: DOOMSCROLLING,
        imageAlt: 'Doomscrolling Treadmill — durational installation with AV stations',
      },
      {
        id: 'simulation-faith',
        title: 'Simulation Faith',
        href: '/art/simulation_faith',
        imageSrc: SIMULATION_FAITH,
        imageAlt: 'Simulation Faith — sculptural work from Moises Sanabria',
      },
      {
        id: 'digital-divinities',
        title: 'Digital Divinities',
        href: '/art',
        imageSrc: DIGITAL_DIVINITIES,
        imageAlt: 'Digital Divinities — Bakehouse Art Complex open studios',
      },
      {
        id: 'broken-acceleration',
        title: 'Broken Acceleration',
        href: '/research/broken-acceleration',
        imageSrc: BROKEN_ACCELERATION,
        imageAlt: 'Broken Acceleration — generative image research still',
      },
      {
        id: 'touch-grass',
        title: 'Touch Grass Circuit',
        href: '/research/touch-grass-circuit-floor',
        imageSrc: TOUCH_GRASS,
        imageAlt: 'Touch Grass — installation and station documentation',
      },
    ],
  },

  alignmentTitle: 'Role alignment',
  alignmentIntro:
    'WMX priorities mapped to demonstrated evidence. Gaps stay labeled—especially conventional agency campaigns, hospitality case results, and WooCommerce depth.',
  ctaHeadline: 'Let’s build an AI workflow with taste, accountability, and a human eye.',
};

const rolePortfolio: RolePortfolioDossier = {
  capabilityMap: {
    title: 'Production stack',
    subtitle: 'Tools used to finish work—not a buzzword list.',
    groups: [
      {
        id: 'art-direction',
        title: 'Art direction & brand',
        items: [
          '**Concept development, visual systems, typography, image direction, presentations, digital and print applications**',
        ],
      },
      {
        id: 'ai-tools',
        title: 'AI creative tools',
        items: [
          '**Midjourney, Adobe Firefly, DALL·E, Runway, Stable Diffusion / ComfyUI research, prompt systems, human review gates**',
        ],
      },
      {
        id: 'adobe',
        title: 'Adobe production',
        items: [
          '**Photoshop, Illustrator, After Effects, Premiere, Creative Cloud compositing and delivery prep**',
        ],
      },
      {
        id: 'ux-web',
        title: 'UX/UI & web',
        items: [
          '**Figma, responsive design, accessibility, HTML, CSS, JavaScript, React, Next.js, prototyping to production**',
        ],
      },
      {
        id: 'ops',
        title: 'Creative operations',
        items: [
          '**Briefs, templates, asset governance, review checkpoints, documentation, cross-functional delivery**',
        ],
      },
    ],
    currentlyExtending: [
      'Responsive HTML email specimens — campaign study TODO (do not overclaim)',
      'WooCommerce production depth — adjacent WordPress familiarity only until evidenced',
      'Conventional hospitality / travel agency campaign case — self-initiated study in progress',
    ],
    closingStatement:
      'Human-directed. AI-accelerated. Brand-controlled. Production fluency across **Adobe, Figma, generative tools, and shipped web interfaces**—with honest gaps labeled for commercial email and WooCommerce.',
  },
  availabilityNote:
    'Miami-based · hybrid-ready · available for WMX Senior Art Director — Creative + AI Expertise.',
};

export const wmxSeniorArtDirectorAiOpportunity: Opportunity = {
  slug: SLUG,
  status: 'active',
  listed: false,
  variant: 'role-portfolio',
  applicationBanner: wmxSeniorArtDirectorBanner,
  seo: {
    title: 'Moises Sanabria — WMX · Senior Art Director, Creative + AI Expertise',
    description:
      'Application dossier for WMX Senior Art Director — Creative + AI Expertise. Human-directed, AI-accelerated, brand-controlled visual systems, UX/UI, and creative leadership from Miami.',
    indexable: false,
  },
  visibilityNote: `Private application dossier · ${COMPANY} · ${ROLE_TITLE} · not affiliated with or endorsed by WMX`,
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'WMX',
        detail:
          'Miami creative agency serving travel, tourism, hospitality, entertainment, and nonprofit clients.',
      },
      {
        label: 'Senior Art Director',
        detail: 'Visual systems, AI production under human direction, UX/UI, Adobe craft, mentorship.',
      },
      {
        label: 'Miami · hybrid',
        detail: 'Exact location fit for hybrid creative leadership.',
      },
    ],
  },
  company: COMPANY,
  roleTitle: ROLE_TITLE,
  heroEyebrow: 'APPLICATION DOSSIER · MIAMI',
  candidateName: 'Moises Sanabria',
  candidatePositioning: `${ROLE_TITLE} · Selected work for WMX`,
  heroMetaChips: [
    'Miami-based / Hybrid-ready',
    'AI creative workflows',
    'UX/UI + web development',
    'Adobe production',
    'Creative leadership',
  ],
  heroPrimaryCta: { label: 'View Selected Work', href: '#case-studies' },
  heroSecondaryCta: { label: 'Contact Moises', href: '#contact' },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'capabilities', label: 'What I bring' },
    { id: 'case-studies', label: 'Case studies' },
    { id: 'campaign', label: 'Campaign system' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'pov', label: 'Point of view' },
    { id: 'fit', label: 'Role alignment' },
    { id: 'stack', label: 'Production stack' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'Human-directed. AI-accelerated. Brand-controlled.',
    subheadline: `${ROLE_TITLE} · Selected work for WMX`,
    introParagraphs: [
      'I’m a Miami-based interdisciplinary artist, design technologist, and AI product builder. I lead visual systems from concept through responsive interfaces, campaign assets, creative pipelines, and production—helping teams use emerging technology without losing taste, control, or brand integrity.',
    ],
    trustLine: 'Lore Machine · Oolite Arts · AI24 · Bakehouse · Miami hybrid',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  rolePortfolio,
  roleMatchSectionTitle: wmxCreativeAgency.alignmentTitle,
  roleMatchIntro: wmxCreativeAgency.alignmentIntro,
  roleMatchColumnHeaders: {
    left: 'WMX priority',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Branding and visual design',
      evidence:
        'Visual systems across Lore Machine product UI, AI24 editorial identity, Bakehouse SmartSign formats, and studio art direction. Campaign channel study in progress (self-initiated).',
      status: 'demonstrated',
      illustration: {
        src: lore.imageSrc,
        alt: lore.imageAlt,
      },
    },
    {
      requirement: 'AI creative tools',
      evidence:
        'Production prompt systems and generative pipelines at Lore Machine; Firefly / Midjourney / multimodal workflows; human review before publish at AI24. Not “Midjourney only.”',
      status: 'demonstrated',
      illustration: {
        src: multimodal.imageSrc,
        alt: multimodal.imageAlt,
        local: multimodal.imageLocal,
      },
    },
    {
      requirement: 'UX/UI',
      evidence:
        'Figma-to-production interfaces for Lore Machine and AI24; responsive institutional and product surfaces; accessibility-minded frontend craft.',
      status: 'demonstrated',
    },
    {
      requirement: 'Adobe production',
      evidence:
        'Photoshop, Illustrator, After Effects, Premiere for compositing, motion, and delivery prep across product, editorial, and installation contexts.',
      status: 'demonstrated',
    },
    {
      requirement: 'Responsive web',
      evidence:
        'Shipped React / Next.js interfaces; HTML/CSS/JS production. Responsive email + WooCommerce: adjacent familiarity—HTML email specimen is a TODO in the campaign study; do not overclaim.',
      status: 'transferable',
    },
    {
      requirement: 'Project ownership',
      evidence:
        'Founding ownership at Lore Machine; Technical Director of Digital at Oolite; co-founder production ownership at AI24—briefs through delivery under small-team constraints.',
      status: 'demonstrated',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    },
    {
      requirement: 'Mentorship',
      evidence:
        'Oolite artist support and public workshops; AI24 literacy programs; critique and technical translation for collaborators adopting new tools. Workshop count cited only when sourced from public Oolite listings.',
      status: 'demonstrated',
    },
    {
      requirement: 'Miami cultural context',
      evidence:
        'Miami-based practice across Oolite Arts, Bakehouse Art Complex, AI24, and cultural programming—hybrid-ready for WMX’s Miami schedule.',
      status: 'demonstrated',
      illustration: {
        src: DIGITAL_DIVINITIES,
        alt: 'Bakehouse Art Complex — Miami cultural and studio context',
      },
    },
  ],
  featuredProjectIds: ['lore-machine', 'ai24', 'multimodal-image-systems', 'digital-culture-infrastructure'],
  skillsMatrixRows: [
    {
      category: 'Art direction',
      skills: 'Concept, visual systems, typography, image direction, presentations, print + digital',
      icon: 'image',
    },
    {
      category: 'AI production',
      skills: 'Midjourney, Firefly, DALL·E, Runway, prompt systems, compositing, human review',
      icon: 'sparkles',
    },
    {
      category: 'UX/UI + web',
      skills: 'Figma, responsive UI, HTML/CSS/JS, React, accessibility; email/WooCommerce labeled TODO',
      icon: 'code2',
    },
    {
      category: 'Adobe craft',
      skills: 'Photoshop, Illustrator, After Effects, Premiere, production file prep',
      icon: 'layers',
    },
    {
      category: 'Leadership',
      skills: 'Workshops, artist mentorship, critique, cross-functional translation',
      icon: 'users',
    },
    {
      category: 'Honest gaps',
      skills: 'Conventional agency ACD title path; hospitality campaign metrics; WooCommerce depth',
      icon: 'shield',
    },
  ],
  processSectionTitle: 'How I would work at WMX',
  processIntro:
    'Agency creativity must support customer journeys and business results. This is the operating motion I would bring to briefs under hybrid Miami collaboration.',
  processSteps: [
    {
      title: 'Lock the brief and brand constraints',
      description:
        'Audience, offer, channels, and non-negotiables before exploration—so AI never invents off-brand volume.',
    },
    {
      title: 'Explore under direction',
      description:
        'Visual territories and controlled generative variation; critique kills what fails taste or brand safety.',
    },
    {
      title: 'Finish in production tools',
      description:
        'Adobe compositing, typography, motion, and Figma/UI craft so assets are shippable—not prompt screenshots.',
    },
    {
      title: 'Adapt across channels',
      description:
        'One idea → social, display, email, web, presentation, print—with QA and accessibility checks.',
    },
    {
      title: 'Document and mentor',
      description:
        'Reusable templates, review checkpoints, and coaching so the team moves faster without losing craft.',
    },
  ],
  ctas: recruitingCtas({
    resumePdfPath: resumePdfDriveViewUrl,
    resumePrintPath: '/cv/tech/print',
    careerPacket: '/career-packet',
    caseStudiesAnchor: '#case-studies',
    emailSubject: 'WMX — Senior Art Director (Creative + AI) — Moises Sanabria',
  }),
  techLogoIds: [],
  resumeSectionTitle: wmxCreativeAgency.ctaHeadline,
  resumeSectionNote:
    'Download résumé, email Moises, or connect on LinkedIn. This dossier is prepared specifically for WMX’s Senior Art Director — Creative + AI Expertise role.',
};
