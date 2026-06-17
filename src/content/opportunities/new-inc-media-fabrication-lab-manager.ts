import type { Opportunity } from './types';
import { newIncMediaFabLabBanner } from '@/content/evidence/applicationBanners';
import { evidenceProjects, OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/evidence/projects';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export const newIncMediaFabricationLabManagerOpportunity: Opportunity = {
  slug: 'new-inc-media-fabrication-lab-manager',
  status: 'active',
  variant: 'compact',
  applicationBanner: newIncMediaFabLabBanner,
  seo: {
    title: 'Media & Fabrication Lab Manager — NEW INC | Moises Sanabria',
    description:
      'Lab operations, media production, fabrication, member training, and institutional systems — dossier for NEW INC Media and Fabrication Lab Manager (New Museum).',
    indexable: false,
  },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'NEW INC',
        detail: 'New Museum’s interdisciplinary incubator — 100 creative practitioners across art, design, and technology.',
      },
      {
        label: 'Media Lab',
        detail: 'Projection, capture, motion, ML pipelines, AV production, and data visualization for member projects.',
      },
      {
        label: 'Fabrication Lab',
        detail: 'Prototyping, laser cutting, 3D printing, woodworking, and clean/dirty-room workflows.',
      },
    ],
  },
  company: 'NEW INC · New Museum',
  roleTitle: 'Media and Fabrication Lab Manager',
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'fit', label: 'Role fit' },
    { id: 'case-studies', label: 'Evidence' },
    { id: 'teaching-cred', label: 'Teaching' },
    { id: 'skills', label: 'Lab stack' },
    { id: 'process', label: 'How I run labs' },
    { id: 'resume', label: 'Contact' },
  ],
  hero: {
    headline: 'Media & Fabrication Lab Manager',
    subheadline:
      'Lab operations · Member training · AV & XR production · Fabrication · Institutional systems',
    introParagraphs: [
      'I am a Miami-based interdisciplinary artist and Technical Director of Digital at Oolite Arts, where I help run the Knight-funded Digital Lab—workshops, equipment workflows, and production support for artists who need technical capacity without becoming engineers.',
      'Alongside that institutional work, I fabricate my own installations: modular electronics, 3D-printed assemblies, projection systems, and durational AV pieces shown at museums and festivals. For NEW INC’s expanded Media and Fabrication Labs, I bring the combination this role requires—hands-on tool fluency, member-facing pedagogy, and the operational discipline to keep shared facilities usable at scale.',
    ],
    trustLine:
      'Oolite Digital Lab · Whitney Museum production · Self-fabricated installations · Public workshops & AI literacy programs',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit — Requisition 1063',
  roleMatchIntro:
    'NEW INC needs someone who can run two labs, train a member community, and interface with museum departments—not only someone who knows the tools. That is how I already work between artists, institutions, and technical infrastructure.',
  roleMatchColumnHeaders: {
    left: 'Requirement',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: '5+ years in XR, fabrication, AV, or expanded digital media',
      evidence:
        'Cooper Union BFA; Whitney production assists (2015, 2021–22); self-fabricated installations (Smart Shoppers, Doomscrolling Treadmill, Simulation Faith); VR chat stations (41 Cooper VR); TouchDesigner and GAN pipelines for museum-scale work.',
      illustration: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
        alt: 'Smart Shoppers — 3D-printed sculpture with integrated electronics, self-fabricated installation.',
      },
    },
    {
      requirement: 'Active user of lab technologies; tracks industry practice',
      evidence:
        'Daily use of 3D printing, projection/display stacks, generative ML workflows, capture and post-production tools; ongoing R&D in ComfyUI, Stable Diffusion, and OpenAI API pipelines for studio and lab contexts.',
      illustration: {
        src: evidenceProjects['multimodal-image-systems'].imageSrc,
        alt: 'Generative media R&D — lab-style experimentation with multimodal AI pipelines.',
        local: evidenceProjects['multimodal-image-systems'].imageLocal,
      },
    },
    {
      requirement: 'Training users on new tools (university / media lab experience)',
      evidence:
        'Technical Director of Digital at Oolite Arts; multi-session public workshops (AI agents, digital presence, critical AI literacy); AI24 and DCC Miami programs onboarding artists to emerging tools.',
      illustration: {
        src: evidenceProjects.ai24.imageSrc,
        alt: 'AI24 — workshops and applied systems teaching artists and institutions to use emerging tools.',
        local: evidenceProjects.ai24.imageLocal,
      },
    },
    {
      requirement: 'Bookings, scheduling, multi-stakeholder facility use',
      evidence:
        'Oolite Digital Lab member access and workshop scheduling; festival and museum install timelines coordinating artists, venues, and production crews; documentation habits that reduce booking conflicts.',
      illustration: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
        alt: 'Doomscrolling Treadmill — durational install coordinating AV, performance, and public access.',
      },
    },
    {
      requirement: 'Equipment inventory, maintenance, and lab operations',
      evidence:
        'Knight-funded Digital Lab infrastructure at Oolite; studio inventory for electronics, 3D printing, and display hardware; preventive troubleshooting and SOP-style documentation for repeat workflows.',
      illustration: {
        src: 'https://res.cloudinary.com/du1ysiumj/image/upload/v1774829074/the-art-of-ai-agents-locust-projects-the-dill-2026_xjb76m.jpg',
        alt: 'The Art of AI Agents workshop — live lab-style teaching environment with equipment and member support.',
      },
    },
    {
      requirement: 'Annual lab budget management',
      evidence:
        'Grant-scoped lab programming (Knight Foundation at Oolite); project budgets for self-produced installations and public commissions; cost-aware equipment and materials planning for modular, tourable work.',
    },
    {
      requirement: 'Museum / institutional interfacing',
      evidence:
        'Whitney Museum production assists; Oolite Arts institutional programming; Digital Culture Center Miami infrastructure; comfortable coordinating with facilities, curatorial, and external partners.',
      illustration: {
        src: evidenceProjects['digital-culture-infrastructure'].imageSrc,
        alt: 'Digital Culture Center Miami — institutional digital infrastructure and program hub.',
      },
    },
    {
      requirement: 'Autonomous ownership, process improvement, problem-solving',
      evidence:
        'Built lab workflows, workshop curricula, and artist-facing automation from ambiguous briefs; default mode is document the fix, teach the workaround, and update the system so the issue does not recur.',
    },
  ],
  featuredProjectIds: ['digital-culture-infrastructure', 'ai24', 'multimodal-image-systems'],
  caseStudyOverrides: [
    {
      evidenceId: 'digital-culture-infrastructure',
      title: 'Oolite Digital Lab — Knight-funded member lab',
      category: 'Institutional lab operations',
      summary:
        'As Technical Director of Digital at Oolite Arts, I help run the Digital Lab: workshops, equipment access, automation, and production support for Miami artists. The lab is the closest analog to NEW INC’s member-facing facilities—creative practitioners who need technical capacity inside a cultural institution.',
      skillTags: ['Lab operations', 'Workshops', 'Member support', 'Knight Foundation', 'Institutional workflows'],
      href: 'https://oolitearts.org/digital-lab/',
      linkLabel: 'View Oolite Digital Lab',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      evidenceId: 'ai24',
      title: 'AI24 — training artists on emerging media tools',
      category: 'Lab pedagogy',
      summary:
        'AI literacy programs, multi-session workshops, and applied systems that onboard artists to ML, automation, and digital production—without requiring engineering backgrounds. Same pedagogical muscle as teaching NEW INC members to use media lab capabilities safely and productively.',
      skillTags: ['Teaching', 'Onboarding', 'ML workflows', 'Documentation', 'Public programs'],
      href: 'https://ai24.live',
    },
    {
      evidenceId: 'multimodal-image-systems',
      title: 'Studio fabrication — self-produced installations',
      category: 'Physical + digital production',
      summary:
        'Self-fabricated sculptures and durational installations combining 3D printing, custom electronics, projection, and generative media—Smart Shoppers, Simulation Faith, Doomscrolling Treadmill, Touch Grass Station. Proof of hands-on making inside the same toolsets NEW INC members will use.',
      skillTags: ['3D printing', 'Electronics', 'Projection', 'Generative media', 'Installation'],
      href: '/art/smart_shoppers',
      linkLabel: 'View selected work',
    },
  ],
  caseStudiesSectionTitle: 'Selected evidence',
  caseStudiesIntro:
    'Three contexts that map directly to NEW INC: running a member lab, teaching tool access, and fabricating work at the intersection of physical and digital production.',
  skillsSectionTitle: 'Lab & media stack',
  skillsMatrixRows: [
    {
      category: 'Fabrication',
      skills: '3D printing (FDM/SLA), laser cutting (familiar), modular assembly, electronics integration, woodworking (project-level)',
      icon: 'boxes',
    },
    {
      category: 'Media production',
      skills: 'Photo/video capture, projection mapping, display systems, audio integration, post-production pipelines',
      icon: 'tv',
    },
    {
      category: 'XR & real-time',
      skills: 'VR installations (VRChat), TouchDesigner, interactive AV, motion and capture-adjacent workflows',
      icon: 'cpu',
    },
    {
      category: 'ML & generative media',
      skills: 'OpenAI API, Stable Diffusion, ComfyUI, GAN training, dataset prep, generative video/image pipelines',
      icon: 'sparkles',
    },
    {
      category: 'Lab operations',
      skills: 'Inventory tracking, booking systems, SOPs, member onboarding, safety-oriented documentation',
      icon: 'workflow',
    },
    {
      category: 'Software',
      skills: 'Python, TypeScript, automation (n8n), institutional web systems, API integrations',
      icon: 'code2',
    },
    {
      category: 'Teaching',
      skills: 'Workshops, multi-session curricula, 1:1 member support, critical AI literacy framing',
      icon: 'users',
    },
    {
      category: 'Institutional',
      skills: 'Museum production, grant-scoped lab programs, cross-department coordination, budget-aware planning',
      icon: 'target',
    },
  ],
  processSectionTitle: 'How I would run NEW INC’s labs',
  processIntro:
    'Opening a new dedicated floor is a culture-setting moment. I would prioritize access clarity, member confidence, and systems that scale before equipment novelty.',
  processSteps: [
    {
      title: 'Map member workflows before tool novelty',
      description:
        'Interview members and staff on what they actually need to finish projects—then align equipment access, hours, and training to those workflows.',
    },
    {
      title: 'Build booking, inventory, and safety baselines',
      description:
        'Single source of truth for what exists, what is booked, and what requires certification—reduces conflicts between NEW INC, museum facilities, and partners.',
    },
    {
      title: 'Onboard through demonstration, not manuals',
      description:
        'Short orientations, sample projects, and office hours so members leave knowing how to start—not only how to sign a waiver.',
    },
    {
      title: 'Maintain, troubleshoot, document',
      description:
        'Preventive maintenance cycles, clear escalation paths, and post-incident notes so the same failure does not block the next member.',
    },
    {
      title: 'Budget with a two-year equipment horizon',
      description:
        'Annual spend tied to member demand data—what is worn, what is requested, what opens new project types for the cohort.',
    },
  ],
  innovationLabSectionTitle: 'Why an artist for this role',
  innovationLabLead: 'Members need someone who makes, not only manages',
  innovationLabBody:
    'NEW INC’s community is artists, designers, and technologists building ambitious work on deadline. The lab manager they trust is someone who has been stuck at 11pm with a broken projector and a show tomorrow—and who built the checklist so the next person is not. That is my studio practice and my institutional work at Oolite.',
  teachingHighlights: [
    {
      title: 'Oolite Digital Lab',
      description: 'Knight-funded lab — workshops, equipment, and artist-facing technical infrastructure.',
      href: 'https://oolitearts.org/digital-lab/',
      imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
      imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
    },
    {
      title: 'The Art of AI Agents',
      description: 'Multi-session workshop on practical agent workflows — lab-style teaching for artists.',
      href: '/workshop/the-art-of-ai-agents',
      imageSrc:
        'https://res.cloudinary.com/du1ysiumj/image/upload/v1774829074/the-art-of-ai-agents-locust-projects-the-dill-2026_xjb76m.jpg',
      imageAlt: 'The Art of AI Agents workshop at Locust Projects',
    },
    {
      title: 'Own Your Digital Presence',
      description: 'Website and content intensive — onboarding creators to production tools and workflows.',
      href: '/workshop/own-your-digital-presence',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743021790/own-your-digital-presence/website-building-workshop-focus_wvkiwk.jpg',
      imageAlt: 'Own Your Digital Presence workshop',
    },
    {
      title: 'Teaching hub',
      description: 'Full list of public programs and how I frame technology for cultural practitioners.',
      href: '/workshops',
    },
  ],
  certifications: [
    {
      name: 'The Cooper Union — B.F.A., School of Art',
      detail: 'Undergraduate work at the intersection of art, engineering, and computation.',
      href: 'https://cooper.edu',
    },
    {
      name: 'School for Poetic Computation',
      detail: 'Fall/Winter cohort — creative technology and code as artistic medium.',
    },
    {
      name: 'The Neural Aesthetic — School of Machines, Berlin',
      detail: 'Gene Kogan — ML and creative practice.',
    },
    {
      name: 'Whitney Museum production',
      detail: 'Installation support for Jared Madere (2015) and Wang Shui (2021–22).',
      href: '/cv/artist',
    },
  ],
  ctas: recruitingCtas({
    emailSubject: 'NEW INC Media & Fabrication Lab Manager — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    ooliteWork: 'https://oolitearts.org/digital-lab/',
    ooliteWorkLabel: 'Oolite Digital Lab',
    cv: '/cv/artist',
  }),
  techLogoIds: ['openai', 'pytorch', 'python', 'docker', 'comfyui', 'stable-diffusion', 'replicate'],
  resumeSectionTitle: 'Contact & CV',
  resumeSectionNote:
    'Based in Miami, FL · Open to discussing relocation for this role · Full CV and exhibition history at moises.tech/cv/artist',
};
