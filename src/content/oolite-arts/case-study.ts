/**
 * Oolite Arts Digital Lab — institutional case study content model.
 * Components render from this data. Do not invent metrics, names, or outcomes.
 */

import {
  digilabAsset,
  digilabLabGalleryIds,
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
  VIBE_CODE_NET_ART_BANNER,
  VIBE_CODE_NET_ART_BANNER_ALT,
} from '@/content/oolite-arts/media';

export type AssetStatus = 'ready' | 'needed' | 'placeholder';
export type PermissionStatus =
  | 'granted'
  | 'unknown'
  | 'anonymized'
  | 'archetype-from-public-curriculum'
  | 'public-source'
  | 'close-circle';

export type NeededAsset = {
  name: string;
  preferred: string;
  folder: string;
  record: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  status?: AssetStatus;
  mediaId?: string;
  caption?: string;
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
        role: 'Director of Digital Lab · direction and co-development',
        portraitId: 'portrait.fabiola' as const,
        portrait: {
          src: digilabAsset('portrait.fabiola').src,
          alt: digilabAsset('portrait.fabiola').alt,
        },
      },
      {
        name: 'Moises Sanabria',
        role: 'Technical Director of Digital · technical direction and co-development',
        portraitId: 'portrait.moises' as const,
        portrait: {
          src: digilabAsset('portrait.moises').src,
          alt: digilabAsset('portrait.moises').alt,
        },
      },
    ],
    collaboration:
      'Developed with Director of Digital Lab Fabiola Larios; Moises Sanabria as Technical Director of Digital; with Oolite staff, participating artists, and institutional partners.',
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
      status: 'ready' as AssetStatus,
      mediaId: 'digilab.room-cyan',
      note: 'Hover parallax layers entrance + 360 stills over the production room hero.',
    },
  },

  labGallery: digilabLabGalleryIds.map((id) => {
    const a = digilabAsset(id);
    return {
      src: a.src,
      alt: a.alt,
      mediaId: a.id,
      caption: a.caption ?? a.name,
      status: 'ready' as AssetStatus,
    };
  }),

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
    image: {
      src: digilabAsset('workshop.resin-2026').src,
      alt: digilabAsset('workshop.resin-2026').alt,
      mediaId: 'workshop.resin-2026',
      status: 'ready' as AssetStatus,
    },
    supportingImages: [
      {
        src: digilabAsset('digilab.360-pcs-printer').src,
        alt: digilabAsset('digilab.360-pcs-printer').alt,
        mediaId: 'digilab.360-pcs-printer',
      },
      {
        src: digilabAsset('digilab.360-faby-printer').src,
        alt: digilabAsset('digilab.360-faby-printer').alt,
        mediaId: 'digilab.360-faby-printer',
      },
    ],
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
  },

  classes: [
    {
      id: 'artist-website-beginners',
      title: 'Artist Website for Beginners',
      dateLabel: 'Saturday, June 13, 2026 · 10 a.m.–1 p.m.',
      dateISO: '2026-06-13',
      topics: ['artist-websites', 'creative-coding', 'net-art', 'vibe-coding'],
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
        src: VIBE_CODE_NET_ART_BANNER,
        alt: VIBE_CODE_NET_ART_BANNER_ALT,
        status: 'ready' as AssetStatus,
        mediaId: 'workshop.vibe-code-net-art',
      },
      documentary: [
        {
          src: digilabAsset('workshop.art-tech-coding').src,
          alt: digilabAsset('workshop.art-tech-coding').alt,
          mediaId: 'workshop.art-tech-coding',
          permissionStatus: 'close-circle' as PermissionStatus,
        },
        {
          src: digilabAsset('docs.vibe-apr25-35').src,
          alt: digilabAsset('docs.vibe-apr25-35').alt,
          mediaId: 'docs.vibe-apr25-35',
          permissionStatus: 'close-circle' as PermissionStatus,
        },
        {
          src: digilabAsset('docs.vibe-apr25-29').src,
          alt: digilabAsset('docs.vibe-apr25-29').alt,
          mediaId: 'docs.vibe-apr25-29',
          permissionStatus: 'close-circle' as PermissionStatus,
        },
        {
          src: digilabAsset('docs.vibe-apr25-39').src,
          alt: digilabAsset('docs.vibe-apr25-39').alt,
          mediaId: 'docs.vibe-apr25-39',
          permissionStatus: 'close-circle' as PermissionStatus,
        },
      ],
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
      image: {
        src: digilabAsset('workshop.resin-2026').src,
        alt: digilabAsset('workshop.resin-2026').alt,
        status: 'ready' as AssetStatus,
        mediaId: 'workshop.resin-2026',
      },
      documentary: [
        {
          src: digilabAsset('digilab.360-pcs-printer').src,
          alt: digilabAsset('digilab.360-pcs-printer').alt,
          mediaId: 'digilab.360-pcs-printer',
          permissionStatus: 'public-source' as PermissionStatus,
        },
        {
          src: digilabAsset('digilab.360-faby-printer').src,
          alt: digilabAsset('digilab.360-faby-printer').alt,
          mediaId: 'digilab.360-faby-printer',
          permissionStatus: 'public-source' as PermissionStatus,
        },
      ],
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
      image: {
        src: digilabAsset('workshop.artist-websites-cover').src,
        alt: digilabAsset('workshop.artist-websites-cover').alt,
        status: 'ready' as AssetStatus,
        mediaId: 'workshop.artist-websites-cover',
      },
      documentary: [] as CaseStudyImage[],
    },
    {
      id: 'seo-for-artists',
      title: 'SEO for Artists',
      dateLabel: 'Digital Lab workshop · course offering',
      dateISO: null,
      topics: ['seo', 'artist-websites', 'publishing'],
      audience: ['public', 'artists'],
      level: 'All levels',
      format: 'Workshop / course',
      durationMinutes: null,
      capacity: null,
      age: '15+',
      language: 'English',
      location: 'Oolite Arts Digital Lab programming',
      instructors: ['Fabiola Larios', 'Moises Sanabria'],
      summary:
        'A Digital Lab course on artist discoverability—how search, metadata, and publishing habits help artists make their work findable without turning the studio into a marketing department.',
      learningOutcomes: [
        'Understand how search engines and platforms surface artist pages and projects.',
        'Apply practical metadata, titling, and structure habits to an artist site or project page.',
        'Leave with a checklist for keeping a site discoverable as work evolves.',
      ],
      tools: ['Artist websites', 'Search / metadata practices'],
      sourceUrl: 'https://oolitearts.org/art-classes/',
      sourceStatus: 'program-offering' as const,
      image: {
        src: digilabAsset('workshop.seo-banner').src,
        alt: digilabAsset('workshop.seo-banner').alt,
        status: 'ready' as AssetStatus,
        mediaId: 'workshop.seo-banner',
      },
      documentary: [] as CaseStudyImage[],
    },
  ],

  /** Services prototyped at Oolite Digilab — now offered as independent artist support */
  offerings: {
    title: 'Artist support offerings',
    lead:
      'These formats were developed inside the Oolite Digital Lab. They are now offered as independent consultations and workshops for artists and institutions.',
    originNote: 'Developed at Oolite Digilab · offered independently',
    items: [
      {
        id: '3d-consulting',
        title: '3D consulting',
        body: 'File readiness, print planning, and fabrication pathway advice for sculpture, installation, and prototyping.',
        mediaId: 'service.3d-consulting' as const,
        image: {
          src: digilabAsset('service.3d-consulting').src,
          alt: digilabAsset('service.3d-consulting').alt,
        },
      },
      {
        id: '360-photo',
        title: '360° photography',
        body: 'Spatial documentation for studios, exhibitions, and institutional spaces.',
        mediaId: 'service.360-photo' as const,
        image: {
          src: digilabAsset('service.360-photo').src,
          alt: digilabAsset('service.360-photo').alt,
        },
      },
      {
        id: 'virtual-studio-visit',
        title: '1:1 virtual studio visit',
        body: 'Remote critique and technical walkthrough for a live project.',
        mediaId: 'service.virtual-studio-visit' as const,
        image: {
          src: digilabAsset('service.virtual-studio-visit').src,
          alt: digilabAsset('service.virtual-studio-visit').alt,
        },
      },
      {
        id: 'studio-visit',
        title: '1:1 studio visit',
        body: 'In-person support for equipment, workflow, or project troubleshooting.',
        mediaId: 'service.studio-visit' as const,
        image: {
          src: digilabAsset('service.studio-visit').src,
          alt: digilabAsset('service.studio-visit').alt,
        },
      },
      {
        id: 'vr-consulting',
        title: 'VR consulting',
        body: 'Orientation and project planning for immersive / VR-adjacent artist work.',
        mediaId: 'service.vr-consulting' as const,
        image: {
          src: digilabAsset('service.vr-consulting').src,
          alt: digilabAsset('service.vr-consulting').alt,
        },
      },
      {
        id: 'inkjet',
        title: 'Inkjet printing',
        body: 'Print consultation for artist editions, documentation, and exhibition output.',
        mediaId: 'service.inkjet' as const,
        image: {
          src: digilabAsset('service.inkjet').src,
          alt: digilabAsset('service.inkjet').alt,
        },
      },
    ],
  },
  artistAccess: {
    title: 'How artists accessed the lab',
    lead:
      'Access was designed as a program—not a locked room of machines. Public open hours, fee-based workshops, and resident pathways connected teaching to independent use.',
    pathways: [
      {
        title: 'Open lab hours',
        body: 'Published Tuesday and Thursday access (10 a.m.–5 p.m.) for supervised and independent work within Digital Lab capacity.',
      },
      {
        title: 'Public workshops',
        body: 'Fee-based classes with clear outcomes—creative publishing / vibe coding and resin fabrication among them—so first contact produces an artifact.',
      },
      {
        title: 'Consultation and return visits',
        body: 'Intake, troubleshooting, and hand-off documentation so workshop knowledge survives into open-lab practice.',
      },
    ],
    sourceUrl: 'https://oolitearts.org/event/digilab/',
    sourceLabel: 'Oolite Arts — Digital Lab',
  },

  documentationResources: {
    title: 'Documentation and reusable resources',
    lead:
      'Equipment guides, curriculum templates, safety framing, and booking/communications patterns turn one-off workshops into institutional memory.',
    items: [
      'Equipment readiness and safety procedures',
      'Curriculum outlines with learning outcomes',
      'Artist intake and troubleshooting patterns',
      'Scheduling and open-lab communications',
      'Follow-up consultation framing',
    ],
    documentary: [
      {
        src: digilabAsset('docs.vibe-apr25-29').src,
        alt: digilabAsset('docs.vibe-apr25-29').alt,
        mediaId: 'docs.vibe-apr25-29',
      },
      {
        src: digilabAsset('docs.vibe-apr25-35').src,
        alt: digilabAsset('docs.vibe-apr25-35').alt,
        mediaId: 'docs.vibe-apr25-35',
      },
      {
        src: digilabAsset('docs.vibe-apr25-39').src,
        alt: digilabAsset('docs.vibe-apr25-39').alt,
        mediaId: 'docs.vibe-apr25-39',
      },
    ],
  },

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
        { label: 'Creative infrastructure overview', href: '/artist-infrastructure' },
        { label: 'Discuss an institutional project', href: '/artist-infrastructure#contact' },
        { label: 'View AI24', href: '/ai24' },
        { label: 'View teaching', href: '/workshops' },
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
      body: 'This methodology can be adapted for museums, residencies, universities, nonprofits, and creative companies—see the creative infrastructure overview for how it packages as teaching and systems work.',
    },
  ],

  credits: {
    roles: [
      {
        name: 'Fabiola Larios',
        role: 'Director of Digital Lab · direction and co-development',
        website: 'https://fabiola.io',
        portraitId: 'portrait.fabiola' as const,
        portrait: {
          src: digilabAsset('portrait.fabiola').src,
          alt: digilabAsset('portrait.fabiola').alt,
        },
      },
      {
        name: 'Moises Sanabria',
        role: 'Technical Director of Digital · technical direction and co-development',
        website: 'https://moises.tech',
        portraitId: 'portrait.moises' as const,
        portrait: {
          src: digilabAsset('portrait.moises').src,
          alt: digilabAsset('portrait.moises').alt,
        },
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
    lastUpdated: '2026-08-07',
    phaseNote:
      'Case study media registry live. Hero uses layered parallax; class cards include banners + documentary stills; Digilab service offerings listed as independent formats developed at Oolite.',
  },
} as const;
