/**
 * Shared creative-systems flagship building blocks.
 * Reuses Ogilvy / creative-agency components without employer-specific JD framing.
 */

import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import { creativeAiSkillLogoBand } from '@/content/evidence/recruitingLogoBand';
import type { MotionSection } from '@/content/opportunities/creativeAgencyDossier';
import type { FitPillar } from '@/content/opportunities/systemsDossier';
import type { OpportunityNavItem } from '@/content/opportunities/types';
import {
  buildCreativeCapabilities,
  buildCreativeRolePortfolio,
  submissionCreativeCaseStudies,
  submissionCreativeWorkflow,
} from '@/content/opportunities/creativeAgencyShared';
import { evidenceProjects } from '@/content/evidence/projects';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const GENERATIVE_LANDSCAPE_STILL = `${CDN}/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-2_ljoygv.png`;

export const POST_AI_READYMADES_HREF = '/research/born-into-the-machine/post-ai-readymades';

const ALL_STUDIOS_EVERYTHING_YT = 'XuSwUBULiQs';
const ALL_STUDIOS_POSTER = `https://i.ytimg.com/vi/${ALL_STUDIOS_EVERYTHING_YT}/hqdefault.jpg`;

export const creativeSystemsLogoBand: LogoBandItem[] = creativeAiSkillLogoBand;

export const creativeSystemsNavItems: OpportunityNavItem[] = [
  { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: 'fileText' },
  { id: 'capabilities', label: 'What I bring', shortLabel: 'Capabilities', icon: 'sparkles' },
  { id: 'case-studies', label: 'Case studies', shortLabel: 'Cases', icon: 'image' },
  { id: 'workflow', label: 'Workflow', shortLabel: 'Workflow', icon: 'workflow' },
  { id: 'motion', label: 'Motion & edit', shortLabel: 'Motion', icon: 'tv' },
  { id: 'stack', label: 'Production stack', shortLabel: 'Stack', icon: 'layers' },
  { id: 'related', label: 'Related', shortLabel: 'Related', icon: 'target' },
];

export const creativeSystemsCapabilities: FitPillar[] = buildCreativeCapabilities();

export const creativeSystemsCases = submissionCreativeCaseStudies;

export const creativeSystemsWorkflow = submissionCreativeWorkflow;

export const creativeSystemsStack = buildCreativeRolePortfolio(
  'Open to Creative AI, Creative Strategist, and Creative Editor/AI roles where editorial judgment leads and generative tools accelerate production.',
).capabilityMap;

export const creativeSystemsMotion: MotionSection = {
  title: 'Motion, edit & generative craft',
  intro:
    'Platform-native storytelling and editorial systems: culture-native video that earns attention, then production gates that keep taste intact under AI acceleration.',
  toolsLine:
    'YouTube · Premiere · After Effects · Firefly · ComfyUI · generative stills → edit · human review before publish',
  clips: [
    {
      id: 'all-studios-everything',
      title: 'All Studios Everything',
      roleLabel: 'Creator · Edit · Direction · 18M+ views',
      contribution:
        'Original YouTube piece with 18M+ views—scroll-stopping concept, edit rhythm, and cultural hook. Proof that platform-native storytelling can scale without abandoning craft.',
      posterSrc: ALL_STUDIOS_POSTER,
      posterAlt: 'All Studios Everything — YouTube thumbnail',
      youtubeId: ALL_STUDIOS_EVERYTHING_YT,
      featured: true,
    },
    {
      id: 'generative-to-edit',
      title: 'Generative still → editorial cut',
      roleLabel: 'AI exploration · Edit · Compositing',
      contribution:
        'Controlled generative exploration refined into editorial pacing—human direction at every gate. Continues in the Post-AI Readymades research archive.',
      posterSrc: GENERATIVE_LANDSCAPE_STILL,
      posterAlt:
        'Landscape generative still from Broken Acceleration research — source material for editorial cut',
      href: POST_AI_READYMADES_HREF,
      linkLabel: 'Open Post-AI Readymades',
    },
    {
      id: 'ai24-editorial-pipeline',
      title: 'AI24 editorial review pipeline',
      roleLabel: 'Editorial systems · Review gates',
      contribution:
        'Product and editorial surfaces where generative drafts require critique before publish—the same discipline Creative AI seats need under brand guidelines.',
      posterSrc: evidenceProjects.ai24.imageSrc,
      posterAlt: evidenceProjects.ai24.imageAlt,
    },
  ],
};
