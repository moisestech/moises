import type { Opportunity } from './types';
import { wppHexCreativeInnovationLeadBanner } from '@/content/evidence/applicationBanners';
import {
  evidenceProjects,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import {
  moisesSanabriaHeadshot,
  wppHexCreativeTechLogoBand,
  wppProductionCompanyLogos,
} from '@/content/evidence/recruitingLogoBand';
import { sprint2026Ctas, sprint2026TeachingHighlights } from './shared-sprint-2026';

/**
 * WPP Production — Creative Innovation Lead / ACD (HEX Studio).
 * Fit 77/100 conditional pursue · Miami → NYC relocate · private dossier.
 *
 * TODO assets: swap `wppProductionCompanyLogos` for official light/dark wordmarks when available.
 */
export const wppHexCreativeInnovationLeadOpportunity: Opportunity = {
  slug: 'wpp-hex-creative-innovation-lead-acd',
  status: 'active',
  listed: false,
  variant: 'compact',
  applicationBanner: wppHexCreativeInnovationLeadBanner,
  seo: {
    title: 'Moises Sanabria — Creative Innovation Lead / ACD · WPP HEX',
    description:
      'An application dossier connecting Moises Sanabria’s work across generative AI, creative technology, fine art, institutional innovation, and technical mentorship to WPP Production’s HEX Studio.',
    indexable: false,
  },
  visibilityNote:
    'Private dossier — Creative Innovation Lead / ACD for HEX Studio. Miami → New York relocation resolved for hybrid schedule.',
  company: 'WPP Production',
  roleTitle: 'Creative Innovation Lead / ACD',
  heroEyebrow: 'WPP Production · HEX Studio · New York',
  // TODO: replace placeholder SVGs with official WPP Production light/dark wordmarks
  companyLogoSrc: wppProductionCompanyLogos.light,
  companyLogoSrcDark: wppProductionCompanyLogos.dark,
  companyLogoAlt: wppProductionCompanyLogos.alt,
  heroMetaChips: [
    'Miami → New York',
    'Open to relocate',
    'Hybrid ready',
    'Fine art + creative tech',
    'Mentors Creative Technologists',
    'Brief → prototype → adoption',
  ],
  heroPrimaryCta: { label: 'View selected work', href: '#case-studies' },
  heroSecondaryCta: { label: 'Discuss creative technology leadership', href: '#resume' },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'HEX Studio',
        detail: 'Creative technologists across art, gaming, architecture, and robotics — studio, R&D, and consultancy.',
      },
      {
        label: 'Creative technology leadership',
        detail: 'Brief → prototype → repeatable workflow → team and client enablement.',
      },
      {
        label: 'Craft + emerging tools',
        detail: 'Generative media, immersive and physical production, art direction, mentoring.',
      },
      {
        label: 'Cultural fluency',
        detail: 'Venezuelan-American perspective across art, technology, and emerging media culture.',
      },
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Selected proof' },
    { id: 'teaching-cred', label: 'Mentorship' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'process', label: 'Process' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'Creative Innovation Lead bridging AI, culture, craft, and production',
    subheadline: 'Fine artist. Creative technologist. Product builder. Technical mentor.',
    introParagraphs: [
      'I lead interdisciplinary creative-technology work from ambiguous brief to working prototype, combining generative AI, software, physical production, art direction, and education. My background spans product engineering, institutional innovation, interactive media, and cultural production—and I am prepared to relocate to New York to help HEX technologists turn emerging technology into excellent, usable, culturally resonant work.',
      'HEX does not need traditional art direction separated from technology. It needs creative leadership that understands how ideas become prototypes, how prototypes become repeatable workflows, and how emerging tools become capabilities that teams and clients can use independently.',
    ],
    trustLine: 'Miami → New York · Open to relocate · Available for hybrid work',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit — Creative Innovation Lead / ACD',
  roleMatchIntro:
    'HEX blends creative production, R&D, consultancy, and enablement. Strongest matches are creative-technology leadership, craft, and mentoring; conventional agency ACD tenure stays explicitly adjacent.',
  roleMatchColumnHeaders: {
    left: 'WPP / HEX need',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Lead creative projects through AI, interactive experiences, and emerging technology',
      evidence:
        'Founding-engineer work on Lore Machine; generative-media systems; interactive installations; institutional creative production; AI and physical prototyping.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — generative storytelling product',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Champion generative AI and develop new storytelling formats',
      evidence:
        'Hands-on work across generative storytelling, AI image systems, web experiences, workshops, and creative-production workflows.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Generative image research and multimodal workflows',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'Raise the quality bar from presentation through execution',
      evidence:
        'Fine-art practice, visual direction, interface design, exhibition production, iterative prototyping, and material experimentation.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Studio craft and generative media experimentation',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'Manage, mentor, unblock, and inspire Creative Technologists',
      evidence:
        'Technical instruction, workshops, institutional artist support, collaborator direction, production troubleshooting, and translating complex tools into usable processes. Leadership has primarily occurred through products, programs, collaborators, workshops, and interdisciplinary initiatives rather than a conventional agency reporting structure.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — teaching and applied creative-technology enablement',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Connect creative ambition, emerging technology, client needs, and business priorities',
      evidence: 'Lore Machine, Playwire Solutions + Data, Oolite Digital Lab, and production-facing creative systems.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Playwire — commercial solutions and data credibility',
        local: true,
      },
    },
    {
      requirement: 'Use technology and experimentation to produce convincing proofs of concept',
      evidence:
        'Working AI applications, interactive prototypes, technical demonstrations, and production tests that move from brief to usable experience.',
      illustration: {
        src: evidenceProjects['lore-machine'].imageSrc,
        alt: 'Lore Machine — productized generative storytelling',
        local: evidenceProjects['lore-machine'].imageLocal,
      },
    },
    {
      requirement: 'Lead ideation, briefings, presentations, and cross-functional collaboration',
      evidence:
        'Institutional presentations, workshops, proposals, stakeholder communication, product collaboration, and artist/client support.',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      },
    },
    {
      requirement: 'Lead campaigns for top global clients across regions and markets',
      evidence:
        '[GAP] Relevant commercial, institutional, and cultural production experience — no currently verified record of owning multinational advertising campaigns at WPP scale.',
      illustration: {
        src: evidenceProjects['playwire-alumni'].imageSrc,
        alt: 'Commercial technology context — Playwire',
        local: true,
      },
    },
    {
      requirement: 'Five-plus years of formal agency creative management',
      evidence:
        '[PARTIAL / ADJACENT] Multiple years of project, product, program, collaborator, and educational leadership. Formal agency direct-report tenure has not been verified.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Institutional creative-technology programming',
      },
    },
    {
      requirement: 'New York hybrid — approximately four office days each week',
      evidence: 'Currently Miami-based and prepared to relocate to New York for the hybrid schedule.',
      illustration: {
        src: OOLITE_DIGITAL_LAB_IMAGE,
        alt: 'Institutional studio and production context',
      },
    },
  ],
  featuredProjectIds: [
    'lore-machine',
    'digital-culture-infrastructure',
    'ai24',
    'playwire-alumni',
    'multimodal-image-systems',
  ],
  caseStudyOverrides: [
    {
      evidenceId: 'lore-machine',
      title: 'Lore Machine — generative storytelling product',
      category: 'Creative AI product',
      summary:
        'Founding-engineer contribution to a real-time generative storytelling platform — translating AI capabilities into creator-facing product workflows across interface, systems, and narrative production. From uncertain idea to operational platform without overstating agency campaign ownership.',
      skillTags: ['Generative AI', 'Product engineering', 'Creative workflows', 'Cross-functional delivery'],
      href: 'https://loremachine.world/',
      linkLabel: 'View Lore Machine',
    },
    {
      evidenceId: 'digital-culture-infrastructure',
      title: 'Oolite Digital Lab — institutional creative technology',
      category: 'Institutional leadership',
      summary:
        'As Technical Director of Digital at Oolite Arts, I help run the Knight-funded Digital Lab: workshops, equipment access, production support, and workflows that help artists use software, AI, fabrication, and immersive media with greater independence — the closest institutional analog to mentoring Creative Technologists.',
      skillTags: ['Lab operations', 'Mentorship', 'Workshops', 'Production support', 'Knight Foundation'],
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'View Oolite Digital Lab',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      evidenceId: 'ai24',
      title: 'AI24 & workshops — enablement as leadership',
      category: 'Mentorship · talent development',
      summary:
        'Building confidence and independent capability in emerging creative technologies — not simply demonstrating tools. Multi-session workshops and applied programs that mirror HEX’s combination of delivery and internal-team enablement.',
      skillTags: ['Teaching', 'AI literacy', 'Enablement', 'Documentation'],
      href: 'https://ai24.live',
    },
    {
      evidenceId: 'playwire-alumni',
      title: 'Playwire — commercial solutions & data',
      category: 'Customer-facing technology',
      summary:
        'In-house Solutions Engineer and Data Analyst experience connecting technical systems to measurable organizational outcomes — credibility outside purely cultural contexts.',
      skillTags: ['Solutions engineering', 'Snowflake', 'Publisher integrations', 'Stakeholder delivery'],
    },
    {
      evidenceId: 'multimodal-image-systems',
      title: 'Studio craft — immersive & physical prototypes',
      category: 'Art direction · material thinking',
      summary:
        'Tightly edited generative-media and installation practice — visual judgment, experimentation, and physical/digital production that raise the craft bar without letting speculative work overwhelm the commercial leadership narrative.',
      skillTags: ['Generative media', 'Installation', 'Art direction', 'Prototyping'],
      href: '/research/broken-acceleration',
      linkLabel: 'View selected research',
    },
  ],
  caseStudiesSectionTitle: 'Selected proof',
  caseStudiesIntro:
    'Five contexts that map to HEX: generative product, institutional creative-tech leadership, mentorship and enablement, commercial technology, and craft-led prototyping.',
  caseStudyColumns: 2,
  teachingHighlights: sprint2026TeachingHighlights,
  certifications: [
    {
      name: 'Cooper Union',
      detail: 'BFA — fine-art foundation for craft judgment and cultural literacy',
    },
    {
      name: 'Oolite Arts — Technical Director of Digital',
      detail: 'Knight-funded Digital Lab operations, workshops, and artist production support',
      href: 'https://oolitearts.org/digital-lab/',
    },
  ],
  skillsSectionTitle: 'Creative-technology capabilities',
  skillsMatrixRows: [
    {
      category: 'Creative AI',
      skills: 'Generative storytelling, AI image systems, multimodal workflows, prompt ops, creative-production pipelines',
      icon: 'sparkles',
    },
    {
      category: 'Craft & direction',
      skills: 'Art direction, interface design, exhibition production, visual judgment, material experimentation',
      icon: 'image',
    },
    {
      category: 'Prototype → system',
      skills: 'Brief interpretation, rapid prototyping, Next.js/TypeScript delivery, physical + digital builds',
      icon: 'rocket',
    },
    {
      category: 'Mentorship',
      skills: 'Workshops, institutional artist support, collaborator unblocking, documentation for adoption',
      icon: 'users',
    },
    {
      category: 'Platforms',
      skills: 'Adobe Creative Cloud, After Effects, Figma, OpenAI, React/Next.js, generative-image tools',
      icon: 'layers',
    },
  ],
  processSectionTitle: 'From brief to prototype to adoption',
  processIntro:
    'More than concepts: convert experiments into usable systems and team capability — the motion HEX needs with clients and Creative Technologists.',
  processSteps: [
    {
      title: 'Interpret the cultural and business brief',
      description: 'Clarify audience, constraints, craft ambition, and what “done” means for clients and partners.',
      logoIds: ['figma'],
    },
    {
      title: 'Identify the technological opportunity',
      description: 'Map which emerging tools actually unlock the story — without forcing tech for its own sake.',
      logoIds: ['openai', 'python'],
    },
    {
      title: 'Prototype the experience quickly',
      description: 'Ship the smallest convincing proof across software, generative media, or physical production.',
      logoIds: ['nextjs', 'react', 'adobe-after-effects'],
    },
    {
      title: 'Evaluate craft, feasibility, and audience value',
      description: 'Raise the quality bar: presentation, execution detail, and whether the idea earns attention.',
      logoIds: ['adobe-after-effects', 'figma'],
    },
    {
      title: 'Build a repeatable production workflow',
      description: 'Turn a one-off experiment into a maintainable path others can run.',
      logoIds: ['typescript', 'vercel'],
    },
    {
      title: 'Teach collaborators or client teams to use it',
      description: 'Enable Creative Technologists and partners to operate the workflow independently.',
    },
    {
      title: 'Refine through feedback and evidence',
      description: 'Iterate with stakeholder input, production reality, and honest limits.',
    },
  ],
  innovationLabSectionTitle: 'Honest gaps & relocation',
  innovationLabLead: 'Creative-technology leadership path — not a conventional agency ACD track',
  innovationLabBody:
    'My leadership experience was developed through creative-technology products, institutional programs, interdisciplinary production teams, and education rather than through a conventional agency ACD track. I bring the technology fluency, creative judgment, mentoring practice, and cultural perspective HEX requires, while recognizing that WPP-scale multinational campaign ownership would be a new level of responsibility. I am currently based in Miami and prepared to relocate to New York for the approximately four-day hybrid schedule.',
  ctas: sprint2026Ctas('WPP HEX Creative Innovation Lead / ACD'),
  animatedLogoBand: wppHexCreativeTechLogoBand,
  techLogoIds: [
    'adobe-after-effects',
    'openai',
    'react',
    'nextjs',
    'typescript',
    'python',
    'vercel',
    'comfyui',
    'huggingface',
  ],
  resumeSectionTitle: 'Application',
  resumeSectionNote:
    'Miami → New York · Open to relocate · Available for hybrid work. Lead with creative technology, craft, and mentorship — not automation engineering.',
};
