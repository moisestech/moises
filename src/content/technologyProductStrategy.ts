/**
 * Knight Technology Product Strategist — strategic landing page copy and structure.
 * URL: /technology-product-strategy
 */

import type {
  ApplicationBanner,
  OpportunityAudienceKeywords,
  SkillsMatrixIconKey,
  SkillsMatrixRow,
} from '@/content/opportunities/types';
import { knightTechProductStrategistBanner } from '@/content/evidence/applicationBanners';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export type CaseStudy = {
  title: string;
  category: string;
  description: string;
  role: string;
  technologyRelevance: string[];
  knightRelevance: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  imageIsRemote?: boolean;
};

export type TalkItem = {
  title: string;
  description: string;
  /** YouTube embed URL (https://www.youtube.com/embed/ID) or empty for placeholder */
  embedUrl?: string;
  placeholder: boolean;
};

export type SelectedProjectTile = {
  title: string;
  hoverSummary: string;
  href?: string;
  src: string;
  alt: string;
  local: boolean;
};

export const technologyProductStrategy = {
  audienceLine:
    'Prepared as supporting material for Knight Foundation’s Journalism Program — Technology Product Strategist (Miami, FL or remote).',

  audienceKeywords: {
    terms: [
      {
        label: 'Product & grant judgment',
        detail:
          'Hands-on experience shipping software and AI media systems — reading proposals for real product capability, adoption, sustainability, and what happens after funding.',
      },
      {
        label: 'Public information & literacy',
        detail:
          'AI24 Live, Digital Culture Center Miami, workshops, and installations that translate complex stacks into legible public experiences and local capacity.',
      },
      {
        label: 'Networks & convenings',
        detail:
          'Comfort building relationships across engineers, artists, educators, and institutions — and presenting through talks, programs, and documentation.',
      },
    ],
  } satisfies OpportunityAudienceKeywords,

  nav: [
    { id: 'profile', label: 'Profile' },
    { id: 'thesis', label: 'Thesis' },
    { id: 'fit', label: 'Fit' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'startup', label: 'Startup' },
    { id: 'talks', label: 'Talks' },
    { id: 'strategy', label: 'Strategy lens' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'metrics', label: 'Proof' },
    { id: 'context', label: 'Contexts' },
    { id: 'contact', label: 'Contact' },
  ],

  profile: {
    name: 'Moises Sanabria',
    roleTitle: 'Technology Product Strategist · Knight Journalism Program',
    location: 'Miami, FL / Remote',
    trustLine:
      'Full-stack engineering · AI-assisted media · startup product delivery · public programs · institutional technology systems',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
    roleLine:
      'Artist-technologist · Full-stack engineer · AI media strategist · Startup operator',
    headline: 'Technology product strategy for public information',
    subtitle:
      'AI, media systems, civic technology, startup execution, and public-facing cultural infrastructure.',
    body:
      'I build and evaluate technology systems that help communities create, understand, distribute, and critically engage with information. My work combines full-stack engineering, AI-assisted media, startup product development, public programming, and institutional technology infrastructure.',
    tags: [
      'AI',
      'Product strategy',
      'Full-stack engineering',
      'Civic media',
      'Public technology',
      'Startup operations',
      'Media systems',
      'Community engagement',
    ],
  },

  ctas: {
    resumePrintPath: '/technology-product-strategy/print/resume',
    coverLetterUrl:
      'https://docs.google.com/document/d/1HFjlWkqUmNL7wNLTidEeQxUL5pFcTT5p4cktePA5Ioc/view?usp=sharing',
    coverLetterPrintPath: '/technology-product-strategy/print/cover-letter',
    email: 'm@moises.tech',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    portfolio: '/portfolio',
    cv: '/cv',
  },

  selectedProjects: [
    {
      title: 'AI24 Live',
      hoverSummary:
        'AI-assisted media and live cultural broadcasting — production stacks, distribution, and public-facing literacy around emerging tools.',
      href: 'https://ai24.live',
      src: '/images/technology-product-strategy/ai24-placeholder.svg',
      alt: 'AI24 Live — broadcast and interface visual placeholder',
      local: true,
    },
    {
      title: 'Doom Scrolling Treadmill',
      hoverSummary:
        'Performance and installation treating algorithmic feeds as an embodied system — attention, fatigue, and how platforms shape civic perception.',
      href: '/art/doomscrolling_treadmill',
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
      alt: 'Doom Scrolling Treadmill installation',
      local: false,
    },
    {
      title: 'Eternal Reflections of Digital Divinities',
      hoverSummary:
        'Real-time AI installation where the public sees machine perception turned into a shared, participatory experience.',
      href: '/art/digital_divinities',
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      alt: 'Eternal Reflections of Digital Divinities installation',
      local: false,
    },
    {
      title: 'Smart Shoppers',
      hoverSummary:
        'Sculptural critique of cognition and automation inside consumer systems — how interfaces and AI-shaped commerce steer everyday decision-making.',
      href: '/art/smart_shoppers',
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
      alt: 'Smart Shoppers installation',
      local: false,
    },
    {
      title: 'Digital Culture Center Miami',
      hoverSummary:
        'Miami-based digital capacity building — workshops, shared tools, and programs that help artists and organizations adopt AI responsibly.',
      href: 'https://dcc.miami',
      src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
      alt: 'Digital Culture Center Miami website screenshot',
      local: false,
    },
    {
      title: 'Startup product (confidential)',
      hoverSummary:
        'Shipping AI-driven storytelling products — generative pipelines, interfaces, and cross-functional delivery; details discussed under NDA.',
      href: '#projects',
      src: '/images/technology-product-strategy/startup-placeholder.svg',
      alt: 'Confidential startup product work — placeholder',
      local: true,
    },
  ] satisfies ReadonlyArray<SelectedProjectTile>,

  thesis: {
    title: 'The future of journalism is not only content. It is infrastructure.',
    body:
      'AI, automation, streaming, interface design, and community platforms are changing how people discover, trust, share, and act on information. The challenge is not simply to adopt new tools, but to understand which technologies are useful, ethical, sustainable, and replicable across communities and newsrooms.',
  },

  strategicFit: [
    {
      need: 'Evaluate technology and AI proposals',
      fit: 'Hands-on experience building AI workflows, generative media pipelines, automation, and public-facing prototypes across art, media, and product contexts.',
      icon: 'shield' as SkillsMatrixIconKey,
    },
    {
      need: 'Identify fundable technology opportunities',
      fit: 'Startup and institutional experience from concept and MVP scoping through implementation, documentation, and public adoption.',
      icon: 'target' as SkillsMatrixIconKey,
    },
    {
      need: 'Understand new forms of media consumption',
      fit: 'Projects including Taste the Algorithm and related work on algorithmic feeds, attention, recommendation systems, and platform-shaped perception (see also Doom Scrolling Treadmill).',
      icon: 'tv' as SkillsMatrixIconKey,
    },
    {
      need: 'Build networks of technologists, researchers, and creators',
      fit: 'AI24 Live, Digital Culture Center Miami, Oolite Arts / Bakehouse programs, startup teams, and artist–technologist communities across Miami and nationally.',
      icon: 'users' as SkillsMatrixIconKey,
    },
    {
      need: 'Represent work at convenings',
      fit: 'Public talks, workshops, exhibitions, and institutional programs; comfortable translating complex systems for mixed audiences.',
      icon: 'presentation' as SkillsMatrixIconKey,
    },
    {
      need: 'Support learning agendas, documentation, and operations',
      fit: 'Guides, curricula, diagrams, product specs, sprint communication, and cultural technology operations that depend on clear documentation.',
      icon: 'fileText' as SkillsMatrixIconKey,
    },
  ] satisfies ReadonlyArray<{ need: string; fit: string; icon: SkillsMatrixIconKey }>,

  skillsMatrixRows: [
    {
      category: 'Product & philanthropy',
      skills:
        'Roadmaps, MVP scoping, stakeholder alignment, and how funded work survives after the grant — separating demos from maintainable systems.',
      icon: 'rocket' as SkillsMatrixIconKey,
    },
    {
      category: 'AI & automation',
      skills:
        'Workflow design, generative media pipelines, evaluation of build vs. buy, prompt operations, and risk surfacing for bias, privacy, and trust.',
      icon: 'sparkles' as SkillsMatrixIconKey,
    },
    {
      category: 'Media & distribution',
      skills:
        'Live and on-demand formats, streaming-adjacent tooling, editorial systems, and public-facing literacy content that meets people where they scroll.',
      icon: 'tv' as SkillsMatrixIconKey,
    },
    {
      category: 'Full-stack engineering',
      skills: 'React / Next.js, TypeScript, Python, APIs, Supabase and cloud patterns — enough depth to read technical proposals credibly.',
      icon: 'code2' as SkillsMatrixIconKey,
    },
    {
      category: 'Documentation & learning',
      skills: 'Guides, curricula, specs, retrospectives, and reporting artifacts that help teams compound learning, not just ship once.',
      icon: 'fileText' as SkillsMatrixIconKey,
    },
    {
      category: 'Data, measurement & governance',
      skills: 'Instincts for provenance, evaluation windows, and what “success” should mean at 6–24 months for civic information products.',
      icon: 'lineChart' as SkillsMatrixIconKey,
    },
  ] satisfies SkillsMatrixRow[],

  journalismNote:
    'I have not worked as a newsroom reporter; my lens is product, interfaces, AI systems, and how mediated information shapes public life. That complements traditional journalism expertise with implementation depth and consumption-side analysis.',

  skillsDisclaimer:
    'Self-assessed emphasis based on selected projects and professional experience — orientation, not empirical measurement.',

  skills: [
    { name: 'AI / emerging technology', value: 95 },
    { name: 'Product strategy', value: 90 },
    { name: 'Full-stack engineering', value: 90 },
    { name: 'Media systems', value: 90 },
    { name: 'Public engagement', value: 85 },
    { name: 'Startup execution', value: 85 },
    { name: 'Institutional strategy', value: 80 },
    { name: 'Grant / documentation literacy', value: 80 },
    { name: 'News ecosystem (adjacent)', value: 70 },
  ],

  startupBlurb: {
    title: 'Startup product experience',
    body:
      'In startup environments I have worked across product strategy, frontend engineering, AI workflows, prompt systems, technical documentation, sprint planning, stakeholder communication, and iteration toward shippable user experiences. That informs how I read proposals: distinguishing demos from durable products, and roadmaps from wishful thinking.',
  },

  startupSkillRows: [
    {
      bucket: 'Product',
      items: ['Roadmaps', 'MVP scoping', 'UX strategy', 'User flows', 'Specs'],
      icon: 'rocket' as SkillsMatrixIconKey,
    },
    {
      bucket: 'Engineering',
      items: ['React / Next.js', 'TypeScript', 'Python', 'APIs', 'Cloud / Supabase'],
      icon: 'code2' as SkillsMatrixIconKey,
    },
    {
      bucket: 'AI / media',
      items: ['Generative pipelines', 'Prompt ops', 'Image/video workflows', 'Streaming'],
      icon: 'sparkles' as SkillsMatrixIconKey,
    },
    {
      bucket: 'Operations',
      items: ['Sprint rhythm', 'Documentation', 'Stakeholder updates', 'QA'],
      icon: 'scale' as SkillsMatrixIconKey,
    },
  ] satisfies ReadonlyArray<{ bucket: string; items: string[]; icon: SkillsMatrixIconKey }>,

  caseStudies: [
    {
      title: 'AI24 Live',
      category: 'AI media · live distribution · public literacy',
      description:
        'An AI-assisted media and cultural broadcasting initiative exploring how emerging tools can be explained, demonstrated, and distributed through public-facing formats.',
      role: 'Co-founder, product and technical architecture, media systems design.',
      technologyRelevance: [
        'AI-assisted production',
        'Livestreaming and distribution workflows',
        'Automation and editorial tooling',
        'Public education around emerging technology',
      ],
      knightRelevance:
        'Adjacent to experiments in how communities receive explanatory media, AI literacy, and new distribution formats.',
      imageSrc: '/images/technology-product-strategy/ai24-placeholder.svg',
      imageAlt: 'Placeholder for AI24 Live visual',
      href: 'https://ai24.live',
      imageIsRemote: false,
    },
    {
      title: 'Digital Culture Center Miami',
      category: 'Civic technology · digital capacity',
      description:
        'A distributed initiative supporting artists, cultural workers, and organizations with AI literacy, workshops, shared tools, and reusable frameworks.',
      role: 'Founder / strategist / curriculum and technical education.',
      technologyRelevance: [
        'Workshop and program design',
        'AI literacy in community settings',
        'Reusable teaching frameworks',
        'Local partnership models',
      ],
      knightRelevance:
        'Miami-grounded capacity building with parallels to how philanthropy supports local information and cultural infrastructure.',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
      imageAlt: 'Digital Culture Center Miami website — program and workshop hub screenshot',
      href: 'https://dcc.miami',
      imageIsRemote: true,
    },
    {
      title: 'Eternal Reflections of Digital Divinities',
      category: 'Real-time AI · public participation',
      description:
        'A real-time installation that transforms audience photographs into AI-generated “muses,” making machine perception legible as a shared public experience.',
      role: 'Artist, technical direction, operations — with Fabiola Larios.',
      technologyRelevance: [
        'Real-time generative media',
        'Audience-facing interfaces',
        'Computer vision and display systems',
        'Public AI literacy through experience',
      ],
      knightRelevance:
        'Demonstrates translation of complex AI into accessible participation — relevant to trust, literacy, and responsible public deployment questions.',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      imageAlt: 'Installation view of Eternal Reflections of Digital Divinities',
      href: '/art/digital_divinities',
      imageIsRemote: true,
    },
    {
      title: 'Taste the Algorithm',
      category: 'Algorithmic culture · recommendation systems',
      description:
        'A sculptural work on how recommendation systems shape desire, preference, and what we learn to want — connecting personalization to identity and public life.',
      role: 'Concept and fabrication.',
      technologyRelevance: [
        'Recommendation and ranking logics',
        'Personalization and taste formation',
        'Media consumption as cultural infrastructure',
      ],
      knightRelevance:
        'Directly engages how people discover and attach to information and culture inside platform systems — parallel problems to discovery and engagement in news products.',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
      imageAlt: 'Taste the Algorithm installation documentation',
      href: '/art/taste_the_algorithm',
      imageIsRemote: true,
    },
    {
      title: 'Smart Shoppers',
      category: 'Consumer systems · automation critique',
      description:
        'A technology-forward installation on the commodification of cognition and decision-making inside automated consumer environments.',
      role: 'Concept, system direction, research, public presentation.',
      technologyRelevance: [
        'Behavioral and interface logics',
        'Automation and AI-shaped commerce',
        'Physical-digital feedback as critique',
      ],
      knightRelevance:
        'Useful for reading “innovation” claims against how systems actually steer public behavior, attention, and trust.',
      imageSrc:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
      imageAlt: 'Smart Shoppers installation with illuminated brain and shopping cart',
      href: '/art/smart_shoppers',
      imageIsRemote: true,
    },
    {
      title: 'Startup product experience (confidential)',
      category: 'AI product · generative storytelling',
      description:
        'Work shipping AI-driven storytelling products: generative media workflows, user-facing interfaces, prompt operations, and cloud-based pipelines. Details under NDA; happy to discuss scope and responsibilities in conversation.',
      role: 'Frontend engineering, AI workflow design, product strategy, technical coordination.',
      technologyRelevance: [
        'React / Next.js product surfaces',
        'Generative image pipelines',
        'Cross-functional delivery',
      ],
      knightRelevance:
        'Evidence of product judgment and technical depth when evaluating what can ship, scale, and be maintained.',
      imageSrc: '/images/technology-product-strategy/startup-placeholder.svg',
      imageAlt: 'Placeholder for confidential startup product work',
      imageIsRemote: false,
    },
  ] satisfies CaseStudy[],

  relatedWorkNote: {
    title: 'Related work',
    text: 'Doom Scrolling Treadmill and related performance work extend the same inquiry into algorithmic feeds, fatigue, and embodied media consumption — see',
    href: '/art/doomscrolling_treadmill',
    linkLabel: 'Doom Scrolling Treadmill',
  },

  talks: [
    {
      title: 'Locust Projects — public program',
      description:
        'Conversation and installation context around algorithmic capitalism, attention, and cultural infrastructure.',
      embedUrl: undefined,
      placeholder: true,
    },
    {
      title: 'AI and the Arts workshops',
      description:
        'Public education on generative AI workflows, creative practice, and responsible use of emerging tools.',
      embedUrl: undefined,
      placeholder: true,
    },
    {
      title: 'Introductory video (optional)',
      description:
        'A 60–90 second recorded statement on interest in technology product strategy for public information — embed when available.',
      embedUrl: undefined,
      placeholder: true,
    },
  ] satisfies TalkItem[],

  strategyLens: [
    {
      title: 'Community need',
      question: 'Who is this for, and what information problem does it solve?',
    },
    {
      title: 'Product capability',
      question: 'Is there a usable tool, interface, workflow, or platform — not only a narrative?',
    },
    {
      title: 'Adoption path',
      question: 'Who will use it, why will they return, and what behavior should change?',
    },
    {
      title: 'Sustainability',
      question: 'What survives after the grant period, and who maintains it?',
    },
    {
      title: 'Replicability',
      question: 'Can other newsrooms or communities learn from, fork, or adapt it?',
    },
    {
      title: 'Risk',
      question: 'What are the AI, privacy, trust, labor, bias, and governance risks?',
    },
    {
      title: 'Measurement',
      question: 'What would meaningful success look like at 6, 12, and 24 months?',
    },
  ],

  capabilities: [
    {
      title: 'Technology evaluation',
      body: 'Read proposals for technical feasibility, ethical surface area, and distance from a real product.',
    },
    {
      title: 'AI media strategy',
      body: 'Design and critique AI-assisted production, literacy, and distribution without treating AI as the whole story.',
    },
    {
      title: 'Product judgment',
      body: 'Separate compelling demos from maintainable systems with clear users and operators.',
    },
    {
      title: 'Network building',
      body: 'Bridge engineers, artists, educators, founders, and institutions around shared tooling and learning goals.',
    },
    {
      title: 'Public communication',
      body: 'Explain complex stacks through talks, workshops, diagrams, and installation-scale public work.',
    },
    {
      title: 'Documentation and learning',
      body: 'Treat guides, specs, and retrospectives as first-class outputs that compound organizational learning.',
    },
  ],

  metrics: {
    disclaimer:
      'Approximate ranges drawn from recent cultural technology and program work — refine with verified numbers before final submission.',
    items: [
      { label: 'Artists / participants supported (approx.)', value: '50+' },
      { label: 'Public programs and events supported (approx.)', value: '20+' },
      { label: 'Full-stack / React years', value: '12+' },
      { label: 'ICA Miami digital / streaming (role)', value: '2019–2020' },
    ],
  },

  logos: {
    disclaimer:
      'Selected contexts and collaborators connected to this work. Listing does not imply endorsement by these organizations.',
    names: [
      'AI24',
      'Digital Culture Center Miami',
      'Oolite Arts',
      'Bakehouse Art Complex',
      'Lore Machine',
      'Locust Projects',
      'Chroma Art Film Festival',
      'Miami Dade College',
    ],
  },

  closing: {
    title: 'Interested in technology that strengthens public information',
    body:
      'For the Technology Product Strategist role, I would bring a hybrid lens: technical enough to evaluate AI and product capabilities, creative enough to stress-test new media formats, and community-oriented enough to ask whether systems serve real publics.',
    preparedFor: 'Knight Foundation — Journalism Program — Technology Product Strategist',
  },

  applicationBanner: {
    src: knightTechProductStrategistBanner.src,
    alt: knightTechProductStrategistBanner.alt,
  } satisfies ApplicationBanner,
};

