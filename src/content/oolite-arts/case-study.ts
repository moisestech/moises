/**
 * Oolite Arts Digital Lab — institutional case study content model.
 * Components render from this data. Do not invent metrics, names, or outcomes.
 */

import {
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';

export type AssetStatus = 'ready' | 'needed' | 'placeholder';
export type PermissionStatus =
  | 'granted'
  | 'unknown'
  | 'anonymized'
  | 'archetype-from-public-curriculum'
  | 'public-source';

export type NeededAsset = {
  name: string;
  preferred: string;
  folder: string;
  record: string;
};

export const OOLITE_ARTS_CASE_STUDY = {
  meta: {
    title: 'Oolite Arts Digital Lab — Institutional Case Study',
    description:
      'How Moises Sanabria and Fabiola Larios helped turn space, tools, curriculum, documentation, and sustained artist support into an accessible creative-technology program at Oolite Arts.',
    url: 'https://moises.tech/oolite-arts',
    ogImage: OOLITE_DIGITAL_LAB_IMAGE,
  },

  overview: {
    title: 'Building an Artist-Centered Digital Lab',
    subtitle:
      'How we transformed space, tools, curriculum, documentation, and sustained artist support into an accessible creative-technology program for Miami artists.',
    organization: 'Oolite Arts',
    location: '924 Lincoln Rd., Studio 105 · Miami Beach, FL',
    period: '2025–2026',
    thesis:
      'We did not simply operate equipment or teach isolated workshops. We helped turn a room, a collection of tools, and an institutional ambition into an artist-facing technology program.',
    oneSentence:
      'A digital lab becomes valuable not when an institution acquires equipment, but when artists can confidently use it to make, learn, experiment, and connect.',
    supportingLine:
      'Technical systems, classes, fabrication, artist support, and community access—designed as one connected program.',
    credits: [
      {
        name: 'Fabiola Larios',
        role: 'Digital Lab direction and co-development',
      },
      {
        name: 'Moises Sanabria',
        role: 'Technical direction and co-development',
      },
    ],
    collaboration:
      'In collaboration with Oolite staff, instructors, participating artists, and community learners.',
    disclaimer:
      'This independent case study documents work developed at Oolite Arts in collaboration with staff, artists, and participants. It is not an official Oolite Arts publication.',
    publicLab: {
      hours: 'Tuesday and Thursday, 10 a.m.–5 p.m.',
      languages: 'English and Spanish',
      support: 'Knight Foundation',
      sourceUrl: 'https://oolitearts.org/event/digilab/',
      sourceLabel: 'Oolite Arts — Digital Lab',
    },
    heroImage: {
      src: OOLITE_DIGITAL_LAB_IMAGE,
      alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
      status: 'placeholder' as AssetStatus,
      note: 'Production hero pending dedicated finished-lab photography.',
    },
    neededHero360: {
      name: 'Finished Digital Lab 360° panorama or walkthrough',
      preferred: 'Equirectangular 2:1, 5.7K+ master; WebP/AVIF poster',
      folder: 'public/oolite/360/',
      record: 'assets.hero-360-01',
    } satisfies NeededAsset,
  },

  institutionalQuestion: {
    title: 'What does it take to make advanced technology genuinely useful to artists?',
    lead:
      'Working within limited time, evolving priorities, and the practical realities of cultural institutions, we focused on building systems that could make advanced tools accessible and repeatable.',
    statements: [
      'Equipment needs workflows',
      'Workflows need documentation',
      'Documentation needs teaching',
      'Teaching needs trust',
      'Trust grows through repeated support',
    ],
  },

  beforeAfter: {
    title: 'From room of tools to working program',
    body: 'We treated the lab as more than a room of equipment. The work involved translating tools into repeatable systems: setup, safety, scheduling, onboarding, troubleshooting, teaching, and artist-facing support.',
    pairs: [
      {
        id: 'before-after-lab',
        label: 'Lab environment',
        beforeLabel: 'Before',
        afterLabel: 'After',
        before: null,
        after: {
          src: OOLITE_DIGITAL_LAB_IMAGE,
          alt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
        },
        needed: {
          name: 'Matched before/after lab views (same camera position)',
          preferred: 'Paired stills or synchronized video, identical framing',
          folder: 'public/oolite/before-after/',
          record: 'beforeAfter.pairs[0]',
        } satisfies NeededAsset,
      },
    ],
  },

  systemLayers: [
    {
      id: 'space',
      label: 'Space',
      problem:
        'A new Digital Lab at 924 needed clear artist flow—stations, storage, projection, and a room that could host classes and open lab without constant reinvention.',
      intervention:
        'Layout, workstation readiness, cable and storage discipline, and visitor flow planned around teaching and independent use.',
      outcome:
        'A room that can host workshops, open hours, and one-on-one support as one environment rather than competing setups.',
      evidence: 'Public Digital Lab presence at Studio 105; program hours published by Oolite Arts.',
    },
    {
      id: 'fabrication',
      label: 'Fabrication',
      problem:
        'Digital fabrication tools do not become artist infrastructure until file prep, safety, queueing, and finishing are teachable and repeatable.',
      intervention:
        'Resin and related fabrication workflows: readiness checks, supervised demos, wash/cure awareness, and consultation pathways.',
      outcome:
        'Public programming such as Intro to 3D Resin Printing for Artists, with safety and process framed as institutional knowledge—not machine spectacle.',
      evidence: 'Oolite Arts public class listing and workshop page (Aug 18, 2026).',
    },
    {
      id: 'media',
      label: 'Media',
      problem:
        'Documentation, livestream, and 360 capture risk becoming isolated deliverables unless tied to artist and institutional memory.',
      intervention:
        'Media practices connected to teaching, public archive ambitions, and artist-facing documentation habits.',
      outcome:
        'Lab identity that includes livestream archive and documentation as part of the public Digital Lab offering.',
      evidence: 'Oolite Digital Lab public page — livestream archive and program language.',
    },
    {
      id: 'software',
      label: 'Software & workflows',
      problem:
        'Creative coding, AI tools, and website publishing overwhelm artists when presented as tools without a path to a finished, shareable artifact.',
      intervention:
        'Beginner-accessible curricula emphasizing experimentation, publishing, and personal expression over technical mastery theater.',
      outcome:
        'Workshops such as Artist Website for Beginners / Artist Websites for Beginners with explicit learning outcomes and published capacity.',
      evidence: 'Oolite Arts public workshop pages (June 13 and Aug 29, 2026 listings).',
    },
    {
      id: 'operations',
      label: 'Operations & support',
      problem:
        'Without intake, scheduling, troubleshooting, safety, and hand-off documentation, classes become events instead of a program.',
      intervention:
        'Equipment readiness, artist intake patterns, supervised equipment use, curriculum templates, and follow-up consultation framing.',
      outcome:
        'Open lab hours, fee-based public workshops, and resident access described as connected parts of one Digital Lab.',
      evidence: 'Oolite Arts Digital Lab public page; Technical Director / Director of Digital Lab roles publicly named.',
    },
  ],

  resinWorkflow: {
    title: '3D Resin Printing: From File to Object',
    lead:
      'Do not present the printer as spectacle alone. Show the institutional knowledge required to make it useful.',
    steps: [
      { id: 'concept', label: 'Artist concept or source image' },
      { id: 'model', label: 'Digital model readiness' },
      { id: 'slice', label: 'Slicing, supports, hollowing, drainage' },
      { id: 'print', label: 'Supervised resin print' },
      { id: 'wash', label: 'Wash and cure' },
      { id: 'finish', label: 'Cleanup and finishing' },
      { id: 'object', label: 'Completed artist object' },
    ],
    institutionalKnowledge: [
      'File preparation and orientation',
      'Safe handling and PPE',
      'Failed-print diagnosis',
      'Queue and material planning',
      'Artist consultation',
      'Finishing and hand-off',
    ],
    needed: {
      name: 'Resin process clips + Draco-compressed GLB models',
      preferred: '3–6 clips (10–30s); GLB under 10 MB; turntable photos',
      folder: 'public/oolite/resin/',
      record: 'resinWorkflow',
    } satisfies NeededAsset,
  },

  classes: [
    {
      id: 'artist-website-beginners',
      title: 'Artist Website for Beginners',
      dateLabel: 'Saturday, June 13, 2026 · 10 a.m.–1 p.m.',
      dateISO: '2026-06-13',
      topics: ['artist-websites', 'creative-coding', 'net-art'],
      audience: ['public', 'beginners'],
      level: 'Beginners',
      format: 'One-day workshop',
      durationMinutes: 180,
      capacity: 10,
      age: '15+',
      language: 'English',
      location: 'Studio 100, 924 Lincoln Rd.',
      instructors: ['Fabiola Larios', 'Moises Sanabria'],
      summary:
        'A beginner-friendly Digital Lab workshop exploring net art and building a simple website participants can personalize and share. No prior coding experience required.',
      learningOutcomes: [
        'Understand what net art is and how artists have used the web as a creative medium.',
        'Learn the basics of editing HTML/CSS or template-based code in an approachable way.',
        'Customize a webpage using text, images, color, layout, and links.',
        'Publish or export a website project that can be shared.',
        'Gain confidence using creative digital tools without prior programming experience.',
      ],
      tools: ['Creative coding tools', 'Web publishing platforms'],
      sourceUrl: 'https://oolitearts.org/event/artist-website-for-beginners/',
      sourceStatus: 'public-page-confirmed' as const,
      image: {
        src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1782568215/dccmiami/workshops/vibe-coding-net-art/banners/02_beginner-artist-website-workflow_vibe-coding-digilab-oolite_m934yj.png',
        alt: 'Beginner artist website workflow — Digilab Oolite workshop banner',
        status: 'ready' as AssetStatus,
      },
      needed: {
        name: 'Class photos (wide, detail, instructors, outcomes)',
        preferred: '5–10 images, 2400px+ long edge, captioned',
        folder: 'public/oolite/classes/artist-website-beginners/',
        record: 'classes.artist-website-beginners',
      } satisfies NeededAsset,
    },
    {
      id: 'intro-resin-printing',
      title: 'Intro to 3D Resin Printing for Artists',
      dateLabel: 'Tuesday, Aug. 18, 2026 · 6–9 p.m.',
      dateISO: '2026-08-18',
      topics: ['3d-printing', 'digital-fabrication'],
      audience: ['public', 'artists'],
      level: 'All levels',
      format: 'One-day workshop',
      durationMinutes: 180,
      capacity: 8,
      age: '15+',
      language: 'English',
      location: 'Studio 106 (Fabrication Lab), 924 Lincoln Rd.',
      instructors: ['Fabiola Larios', 'Moises Sanabria'],
      summary:
        'Hands-on introduction to the full resin workflow—file readiness, slicing, supports, wash/cure, safety, and realistic expectations—designed for sculpture, installation, prototyping, and object translation.',
      learningOutcomes: [
        'Understand what makes a file printable and why orientation and supports matter.',
        'Observe supervised resin printer workflow and wash/cure post-processing.',
        'Learn core safety procedures for resin, IPA, PPE, and waste handling.',
        'Prepare for future one-on-one printing consultation or print appointment.',
      ],
      tools: ['Resin 3D printer', 'Wash/cure station', 'Slicing software'],
      sourceUrl: 'https://oolitearts.org/event/intro-to-3d-resin-printing-for-artists/',
      sourceStatus: 'public-page-confirmed' as const,
      image: null,
      needed: {
        name: 'Resin class photos + process documentation',
        preferred: '5–10 images; safety-aware framing; no unconsented faces',
        folder: 'public/oolite/classes/intro-resin-printing/',
        record: 'classes.intro-resin-printing',
      } satisfies NeededAsset,
    },
    {
      id: 'artist-websites-aug',
      title: 'Artist Websites for Beginners',
      dateLabel: 'Saturday, Aug. 29, 2026 · 10 a.m.–1 p.m.',
      dateISO: '2026-08-29',
      topics: ['artist-websites', 'creative-coding', 'net-art'],
      audience: ['public', 'beginners'],
      level: 'Beginners',
      format: 'One-day workshop',
      durationMinutes: 180,
      capacity: null,
      age: '15+',
      language: 'English',
      location: 'Oolite Arts Digital Lab programming',
      instructors: ['Fabiola Larios', 'Moises Sanabria'],
      summary:
        'Listed in Oolite Arts adult class programming as a Digital Lab one-day workshop continuing the beginner website / creative publishing track.',
      learningOutcomes: [],
      tools: ['Web publishing platforms'],
      sourceUrl: 'https://oolitearts.org/art-classes/',
      sourceStatus: 'public-listing-confirmed' as const,
      image: null,
      needed: {
        name: 'Class detail page confirmation + photos',
        preferred: 'Link to event page when published; 5–10 photos',
        folder: 'public/oolite/classes/artist-websites-aug/',
        record: 'classes.artist-websites-aug',
      } satisfies NeededAsset,
    },
  ],

  artistStories: [
    {
      id: 'pattern-website',
      anonymizedLabel: 'Support pattern · Artist website publishing',
      wanted:
        'A durable, shareable web presence or net-art page without needing to become a professional developer.',
      obstacle:
        'Coding confidence, hosting choices, and the gap between “having files” and publishing something personal online.',
      support:
        'Beginner Digital Lab workshop structure (HTML/CSS or templates, personalization, publish/export) plus consultation framing for continued iteration.',
      result:
        'Per public curriculum: participants leave with a shareable web-based artwork or personal site that can keep evolving.',
      next: 'Follow-up open lab time and one-on-one support for extending the site.',
      technologies: ['HTML/CSS', 'Web publishing', 'Net art'],
      permissionStatus: 'archetype-from-public-curriculum' as PermissionStatus,
      status: 'needs-consented-case-study',
      needed: {
        name: 'Consented artist mini case study (name optional)',
        preferred: 'Need → obstacle → support → result; 2–4 images; written permission',
        folder: 'public/oolite/artists/',
        record: 'artistStories.pattern-website',
      } satisfies NeededAsset,
    },
    {
      id: 'pattern-resin',
      anonymizedLabel: 'Support pattern · Resin object translation',
      wanted:
        'Translate a digital model or sculptural idea into a physical resin object for prototype, installation, or documentation.',
      obstacle:
        'File readiness, supports, safety, wash/cure, and realistic expectations about failure points.',
      support:
        'Full-workflow teaching with supervised equipment demos; safety procedures; path to future print appointments.',
      result:
        'Artists gain a process map from file to finished object—not only a demo of the machine running.',
      next: 'One-on-one fabrication consultation or scheduled print support.',
      technologies: ['Resin 3D printing', 'Slicing', 'Post-processing'],
      permissionStatus: 'archetype-from-public-curriculum' as PermissionStatus,
      status: 'needs-consented-case-study',
      needed: {
        name: 'Consented fabrication support story + object photos',
        preferred: 'Process sequence; permission for artwork depiction',
        folder: 'public/oolite/artists/',
        record: 'artistStories.pattern-resin',
      } satisfies NeededAsset,
    },
    {
      id: 'pattern-open-lab',
      anonymizedLabel: 'Support pattern · Open lab troubleshooting',
      wanted:
        'Use lab equipment or software during public / resident access hours to advance a live project.',
      obstacle:
        'Equipment readiness, file prep, and the last mile between workshop knowledge and independent use.',
      support:
        'Open lab hours, equipment readiness, troubleshooting, and hand-off documentation as ongoing infrastructure.',
      result:
        'Repeated access that builds trust—the condition under which advanced tools actually get used.',
      next: 'Return visits, peer learning, and deeper project consultations.',
      technologies: ['Lab operations', 'Documentation', 'Artist intake'],
      permissionStatus: 'archetype-from-public-curriculum' as PermissionStatus,
      status: 'needs-consented-case-study',
      needed: {
        name: 'Consented open-lab support story',
        preferred: 'Anonymized OK; no private intake data',
        folder: 'public/oolite/artists/',
        record: 'artistStories.pattern-open-lab',
      } satisfies NeededAsset,
    },
  ],

  visibleInvisible: {
    title: 'The Invisible Infrastructure',
    lead:
      'This is where a hiring manager or institutional director sees that we were not merely standing next to the machines—we helped design the operating system around them.',
    visible: [
      'Classes',
      'Printers',
      'Screens',
      'Demonstrations',
      'Finished objects',
      'Artists experimenting',
    ],
    invisible: [
      'Research',
      'Equipment setup',
      'Artist intake',
      'Troubleshooting',
      'Safety procedures',
      'Scheduling',
      'Curriculum development',
      'Documentation',
      'File preparation',
      'Maintenance',
      'Follow-up',
      'Communication',
    ],
    neededDocs: {
      name: 'Documentation screenshots (guides, schedules, workflows)',
      preferred: '10–20 cropped screenshots; strip private data',
      folder: 'public/oolite/documentation/',
      record: 'visibleInvisible',
    } satisfies NeededAsset,
  },

  metrics: {
    asOfNote:
      'Only publicly confirmed program facts are shown as numbers. Additional impact metrics will appear when verified against program records.',
    items: [
      {
        id: 'lab-hours',
        label: 'Published open lab days',
        value: 'Tue & Thu',
        detail: '10 a.m.–5 p.m.',
        verified: true,
        source: 'oolitearts.org/event/digilab/',
      },
      {
        id: 'languages',
        label: 'Languages supported',
        value: '2',
        detail: 'English and Spanish',
        verified: true,
        source: 'oolitearts.org/event/digilab/',
      },
      {
        id: 'website-capacity',
        label: 'Artist Website workshop capacity',
        value: '10',
        detail: 'June 13, 2026 public listing',
        verified: true,
        source: 'oolitearts.org/event/artist-website-for-beginners/',
      },
      {
        id: 'resin-capacity',
        label: 'Resin printing workshop capacity',
        value: '8',
        detail: 'Aug 18, 2026 public listing',
        verified: true,
        source: 'oolitearts.org/event/intro-to-3d-resin-printing-for-artists/',
      },
      {
        id: 'classes-designed',
        label: 'Classes designed',
        value: null,
        detail: 'Awaiting verified program record',
        verified: false,
        source: null,
      },
      {
        id: 'artists-supported',
        label: 'Artists supported',
        value: null,
        detail: 'Awaiting verified program record',
        verified: false,
        source: null,
      },
      {
        id: 'consultations',
        label: 'One-on-one consultations',
        value: null,
        detail: 'Awaiting verified program record',
        verified: false,
        source: null,
      },
      {
        id: 'workflows-documented',
        label: 'Equipment workflows documented',
        value: null,
        detail: 'Awaiting verified program record',
        verified: false,
        source: null,
      },
    ],
  },

  framework: {
    title: 'A reusable model for cultural institutions',
    steps: [
      {
        n: '01',
        title: 'Listen',
        body: 'Map artist, staff, and institutional needs.',
      },
      {
        n: '02',
        title: 'Connect',
        body: 'Integrate space, hardware, software, and people.',
      },
      {
        n: '03',
        title: 'Translate',
        body: 'Turn technical capacity into accessible programming.',
      },
      {
        n: '04',
        title: 'Support',
        body: 'Provide sustained guidance beyond the workshop.',
      },
      {
        n: '05',
        title: 'Document',
        body: 'Leave reusable systems and institutional memory.',
      },
    ],
    cta: {
      headline:
        'Building a digital lab, artist-technology program, AI initiative, or creative learning platform?',
      buttons: [
        { label: 'Discuss an institutional project', href: '/contact' },
        { label: 'View AI24', href: '/ai24' },
        { label: 'View teaching', href: '/workshops' },
        { label: 'Project inquiry', href: '/ai24#work-with-us' },
      ],
    },
  },

  narrativeArc: [
    {
      title: 'The opportunity',
      body: 'A new lab, new equipment, and a mandate to support artists.',
    },
    {
      title: 'The challenge',
      body: 'Tools do not automatically become programs, workflows, or community.',
    },
    {
      title: 'The transformation',
      body: 'We connected physical space, technical systems, curriculum, documentation, and human support.',
    },
    {
      title: 'The activity',
      body: 'Workshops, open lab support, prototyping, artist projects, and public engagement.',
    },
    {
      title: 'The outcomes',
      body: 'Skills transferred, projects advanced, infrastructure documented, and a reusable institutional model created.',
    },
    {
      title: 'The next application',
      body: 'This methodology can be adapted for museums, residencies, universities, nonprofits, and creative companies.',
    },
  ],

  credits: {
    roles: [
      {
        name: 'Fabiola Larios',
        role: 'Director of Digital Lab · direction and co-development',
        website: 'https://fabiola.io',
      },
      {
        name: 'Moises Sanabria',
        role: 'Technical Director · technical direction and co-development',
        website: 'https://moises.tech',
      },
    ],
    collective:
      'Oolite Arts staff, instructors, participating artists, and community learners.',
    organization: 'Oolite Arts',
    funderNote: 'Digital Lab public materials credit generous support from the Knight Foundation.',
    sources: [
      {
        label: 'Digital Lab — Oolite Arts',
        href: 'https://oolitearts.org/event/digilab/',
      },
      {
        label: 'Artist Website for Beginners — Oolite Arts',
        href: 'https://oolitearts.org/event/artist-website-for-beginners/',
      },
      {
        label: 'Intro to 3D Resin Printing for Artists — Oolite Arts',
        href: 'https://oolitearts.org/event/intro-to-3d-resin-printing-for-artists/',
      },
      {
        label: 'Adult Art Classes — Oolite Arts',
        href: 'https://oolitearts.org/art-classes/',
      },
    ],
    lastUpdated: '2026-08-04',
    phaseNote:
      'Phase 1 case study. Phase 2 will add 360° viewer, synchronized before/after video, filterable class database, interactive resin models, and community mosaic when assets are ready.',
  },
} as const;
