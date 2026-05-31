import type { WorkSite } from './types';
import { creativeTechImageToolsBanner } from '@/content/evidence/applicationBanners';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export const creativeTechImageTools: WorkSite = {
  slug: 'creative-tech-image-tools',
  seo: {
    title: 'Full-Stack Web AI Engineer for Creative Image Tools | Moises Sanabria',
    description:
      'Image-heavy creative platforms: Next.js, Python, Docker, PyTorch, generative pipelines, and institutional media systems. USA-based contractor; paid proposal-phase availability.',
    indexable: false,
  },
  applicationBanner: creativeTechImageToolsBanner,
  roleTitle: 'Creative technology · image systems',
  audienceKeywords: {
    terms: [
      {
        label: 'Image pipelines',
        detail:
          'Async ingestion, segmentation services, batch review UIs, and cloud-backed delivery for large visual assets.',
      },
      {
        label: 'Large assets',
        detail:
          'Experience with high-volume generative output, zoomable review, and storage patterns suited to cultural and product workflows.',
      },
      {
        label: 'Proposal-phase delivery',
        detail:
          'Available for paid technical specs or time-boxed prototypes before June 9; implementation if the project is funded.',
      },
    ],
  },
  hero: {
    headline: 'Full-Stack Web AI Engineer for Creative Image Tools',
    subheadline:
      'Building image-heavy platforms at the intersection of frontend product engineering, Python-based AI workflows, and cultural technology.',
    introParagraphs: [
      'I build image-heavy creative platforms where frontend product engineering, Python-based AI workflows, and cultural technology meet. My work includes Next.js applications, generative-image pipelines, asynchronous media processing, Python services, Dockerized model workflows, and interfaces that help people work with complex visual assets.',
      'I am a Miami-based, USA-based contractor available for paid proposal-phase contributions (technical specification, architecture plan, or time-boxed prototype) before the June 9 selection deadline, with additional availability if the project is awarded.',
    ],
    trustLine:
      'Miami-based · USA-based contractor · Available for paid proposal-phase work before June 9',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  skillTiers: [
    {
      id: 'core',
      title: 'Core match',
      subtitle: 'Proven in production and research contexts',
      skills: [
        { logoId: 'nextjs', label: 'Next.js', framing: 'Production frontend applications' },
        { logoId: 'react', label: 'React', framing: '12+ years building interactive interfaces' },
        { logoId: 'python', label: 'Python', framing: 'AI services, media pipelines, backend workflows' },
        { logoId: 'docker', label: 'Docker', framing: 'Containerized AI and deployment workflows' },
        { logoId: 'pytorch', label: 'PyTorch', framing: 'Model training and generative-image experimentation' },
      ],
    },
    {
      id: 'aligned',
      title: 'Directly relevant image-tool stack',
      subtitle: 'Integration-ready — not claiming prior production IIIF lead',
      skills: [
        { logoId: 'sam', label: 'SAM / segmentation', framing: 'Segmentation workflow integration (Segment Anything Model)' },
        { logoId: 'iiif', label: 'IIIF', framing: 'Large-image delivery and interoperability requirements' },
        { logoId: 'openseadragon', label: 'OpenSeadragon', framing: 'Zoomable large-image viewing patterns' },
        { logoId: 'cloudinary', label: 'Cloudinary', framing: 'Image transformation and delivery' },
        { logoId: 'aws', label: 'AWS S3', framing: 'Media storage and cloud asset workflows' },
      ],
    },
    {
      id: 'supporting',
      title: 'Supporting platform experience',
      skills: [
        { logoId: 'supabase', label: 'Supabase', framing: 'Database, storage, auth, realtime' },
        { logoId: 'vercel', label: 'Vercel', framing: 'Next.js hosting and deployment' },
        { logoId: 'replicate', label: 'Replicate', framing: 'Hosted model API workflows' },
        { logoId: 'azure', label: 'Azure', framing: 'Cloud media and worker-backed generation (Lore Machine)' },
        { logoId: 'github', label: 'GitHub', framing: 'Source control and CI/CD' },
        { logoId: 'tailwind', label: 'Tailwind CSS', framing: 'Responsive, accessible UI systems' },
      ],
    },
  ],
  caseStudiesSectionTitle: 'Selected evidence',
  caseStudiesIntro:
    'Three projects that show image systems, generative pipelines, and cultural-technology platforms — not a chronological résumé.',
  caseStudies: [
    {
      evidenceId: 'lore-machine',
      linkLabel: 'Lore Machine',
      title: 'Lore Machine — AI storytelling platform',
      category: 'AI storytelling product · Founding engineer',
      summary:
        'Built interfaces and cloud workflows for a generative-image storytelling platform. Work included asynchronous scene generation, character consistency, pose controls, model API integrations, image-processing states, and interfaces for reviewing large batches of visual assets.',
      skillTags: [
        'Next.js',
        'React',
        'Python',
        'Docker',
        'Replicate',
        'Supabase',
        'Vercel',
        'Azure',
      ],
    },
    {
      evidenceId: 'multimodal-image-systems',
      linkLabel: 'Research dossier',
      title: 'Generative image research',
      category: 'PyTorch and Docker-based model workflows',
      summary:
        'Trained and experimented with generative-image models using PyTorch and containerized environments. Worked with image datasets, variable image quality, pose datasets, model inference workflows, and visual-output evaluation.',
      skillTags: [
        'PyTorch',
        'Python',
        'Docker',
        'Cloud storage',
        'Image datasets',
        'Stable Diffusion',
        'ComfyUI',
      ],
    },
    {
      evidenceId: 'digital-culture-infrastructure',
      linkLabel: 'dcc.miami',
      title: 'Cultural technology platforms',
      category: 'Creative tools for artists and institutions',
      summary:
        'Built digital platforms and media infrastructure for cultural projects, artists, and institutions — frontend systems, cloud-hosted media, interactive interfaces, and public-facing tools where usability and visual clarity matter as much as technical implementation.',
      skillTags: ['Next.js', 'React', 'Tailwind CSS', 'AWS', 'Cloudinary', 'Supabase'],
    },
  ],
  approachSectionTitle: 'How I would approach the project',
  approachIntro:
    'A scalable image-heavy workflow for proposal and implementation phases — from ingestion through review and deployment.',
  approachSteps: [
    {
      title: 'Large-image ingestion',
      description:
        'Upload, validate, store, and prepare image assets without blocking the user interface.',
    },
    {
      title: 'Segmentation workflow',
      description:
        'Connect a SAM-based Python service to generate masks, review states, and editable segmentation results.',
    },
    {
      title: 'IIIF-compatible delivery',
      description:
        'Serve large visual assets through a format designed for efficient zooming, region requests, and interoperability.',
    },
    {
      title: 'Responsive review interface',
      description:
        'Create accessible desktop and mobile tools for inspecting images, adjusting masks, and tracking processing status.',
    },
    {
      title: 'Deployment and monitoring',
      description:
        'Use Dockerized services, clear job states, logs, retries, and cloud storage so the prototype can grow into a maintainable implementation.',
    },
  ],
  about: {
    title: 'Engineer, artist, and creative-technology builder',
    paragraphs: [
      'I am a Miami-based full-stack engineer and interdisciplinary artist with 12+ years of React experience. My work focuses on the point where software architecture, image systems, and human-facing creative tools meet.',
      'As Technical Director of Digital at Oolite Arts, I help run the Digital Lab — workshops, automation, and artist-facing tools for Miami’s creative community. I have also built platforms for generative storytelling (Lore Machine), cultural infrastructure (DCC Miami), and AI-driven media workflows.',
      'My background helps me communicate with engineers, designers, researchers, and nontechnical stakeholders.',
    ],
  },
  navItems: [
    { id: 'hero', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'case-studies', label: 'Work' },
    { id: 'approach', label: 'Approach' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Contact' },
  ],
  ctas: recruitingCtas({
    emailSubject: 'Creative-tech image tools — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    resumePrintPath: '/opportunities/cvs-senior-genai-engineer/print/resume',
    resumePdfPath: '/resume/moises-sanabria-senior-genai-engineer.pdf',
  }),
  resumeSectionTitle: 'Available for paid proposal-phase engagement',
  resumeSectionNote:
    'I can contribute a short technical specification, architecture plan, or time-boxed prototype before the June 9 selection deadline. Full implementation work would be contracted and paid only if the project is awarded.',
};
