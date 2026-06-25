import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import { OOLITE_DIGITAL_LAB_IMAGE } from '@/content/evidence/projects';
import { techLogoRegistry } from '@/content/evidence/tech-logos';

export type ProofMediaType = 'youtube' | 'cloudinary' | 'image' | 'github' | 'external';

export type ProofItem = {
  id: string;
  title: string;
  category: string;
  mediaType: ProofMediaType;
  /** YouTube ID, Cloudinary/image URL, or external href */
  src?: string;
  href?: string;
  poster?: string;
  tools: string[];
  role: string[];
  proves: string;
  /** Top 2–5 examples for SurveyMonkey submission */
  applicationPriority?: boolean;
  /** Final reel/short URL for the survey — interim profile links until ready */
  surveyLink?: string;
  sampleStatus?: 'pending' | 'ready';
  platformLabel?: string;
  captionOverlay?: string;
};

export type FitCard = {
  title: string;
  body: string;
};

export type WeeklyPlanItem = {
  week: number;
  title: string;
  description: string;
};

export type ToolStackCategory = {
  category: string;
  tools: string[];
};

export type SurveyAlignmentItem = {
  question: string;
  answerSummary: string;
  pageAnchor?: string;
};

export type SurveyFormAnswer = {
  questionLabel: string;
  multipleChoice?: string;
  optionalNote?: string;
  copyText: string;
};

export type ApplicationResponse = {
  number: number;
  title: string;
  body: string;
  formChoice?: string;
  optionalNote?: string;
  copyText: string;
};

export type ReadinessMetric = {
  label: string;
  value: 'Strong' | 'Ready' | 'In progress';
  note: string;
};

export const fourArtistsMeta = {
  program: 'Four Artists: Four Seasons',
  organization: 'Bakehouse Art Complex',
  route: '/grant/four-artists-four-seasons',
  canonicalUrl: 'https://moises.tech/grant/four-artists-four-seasons',
  deadline: 'Wednesday, June 24, 2026 at 11:45 PM',
  honorarium: '$5,000 total',
  output: '12 short-form videos (one per week)',
  format: '15–30 seconds each',
  platforms: 'Instagram, TikTok, Facebook, web archive',
  evaluation: 'Storytelling, creative perspective, consistency, content samples',
  seasonPageDisplay: 'Flexible — committed to any selected 12-week cycle',
  seasonPageNote:
    'Especially strong fit for Fall, fundraising, and end-of-year public-visibility programming.',
  seasonFormChoice:
    'I am flexible to be selected for any season cycle and will be committed to those dates.',
  seasonFormNote:
    'I am flexible to be selected for any season cycle and will be fully committed to the selected 12-week period. I would be especially excited about a cycle that overlaps with fundraising, public visibility, or end-of-year programming, because I see these micro-films as a way to translate the creative life of Bakehouse into stories that can connect artists, audiences, supporters, and the broader Miami community.',
  postingTagline: 'Curated feed, daily stories, repeatable weekly production.',
  postingFormChoice: 'I have content generated for 2–4 times per month.',
  postingFrequency:
    'Curated feed content around 2–4 times per month — prioritizing stronger artworks, exhibitions, process moments, and public-facing updates. Daily Stories for studio life, process, events, research, and community moments.',
  applicant: 'Moises Sanabria',
  portraitUrl: moisesSanabriaHeadshot,
  social: {
    website: 'https://moises.tech',
    instagram: 'https://www.instagram.com/moisesdsanabria/',
    youtube: 'https://youtube.com/@moisesdsanabria',
    linkedin: 'https://www.linkedin.com/in/moisesdsanabria',
    email: 'm@moises.tech',
  },
  socialHandles: {
    instagram: '@moisesdsanabria',
    youtube: '@moisesdsanabria',
    website: 'moises.tech',
    email: 'm@moises.tech',
  },
} as const;

export const fourArtistsHero = {
  eyebrow: 'Four Artists: Four Seasons — Bakehouse Art Complex',
  headline: 'Artist-led micro-films from inside Bakehouse.',
  subheadline:
    'Combining studio intimacy with digital production fluency.',
  intro:
    'Moises Sanabria is a Bakehouse resident artist and digital storyteller applying to Four Artists: Four Seasons with a repeatable 12-week micro-film system for documenting artists, studio practice, exhibitions, community engagement, and institutional programming.',
  statusPills: [
    'Current Bakehouse artist',
    '12-week commitment ready',
    '1 short-form video per week',
    '15–30 second format',
    'Vertical-first storytelling',
    'Premiere · After Effects · Canva · AI · audio · livestream',
  ],
} as const;

export const fourArtistsApplicationFacts = [
  { label: 'Program', value: fourArtistsMeta.program },
  { label: 'Organization', value: fourArtistsMeta.organization },
  { label: 'Deadline', value: fourArtistsMeta.deadline },
  { label: 'Honorarium', value: fourArtistsMeta.honorarium },
  { label: 'Output', value: fourArtistsMeta.output },
  { label: 'Format', value: fourArtistsMeta.format },
  { label: 'Platforms', value: fourArtistsMeta.platforms },
  { label: 'Evaluation', value: fourArtistsMeta.evaluation },
  { label: 'Season', value: fourArtistsMeta.seasonPageDisplay, note: fourArtistsMeta.seasonPageNote },
] as const;

export const fourArtistsBakehouseTrajectory = `I am a Venezuelan-born, Miami-based interdisciplinary artist working at the intersection of art, technology, digital culture, and systems of attention. My practice uses video, sculpture, AI, web-based tools, fabrication, performance, and installation to explore how people live inside technological systems—how platforms, screens, automation, and algorithms shape identity, labor, memory, and public life.

I have been a Bakehouse artist for several years, and my studio at Bakehouse has become an important space for developing this work in a more embodied and community-facing way. Being at Bakehouse has helped my practice move beyond digital images and online systems into physical installations, public conversations, studio experiments, and relationships with other artists working across many disciplines.

The story of my practice at Bakehouse has developed through proximity: being able to witness artists building work over time, seeing how process, materials, deadlines, conversations, and community shape the final artwork. That environment has influenced me to think more deeply about documentation—not only as promotion, but as a way of making artistic labor visible. My current work is increasingly focused on translating process into public-facing forms, whether through short-form video, digital infrastructure, installation, teaching, or artist-support systems.`;

export const fourArtistsWhyInterested = `I am interested in participating in Four Artists: Four Seasons because I see short-form video as a powerful way to make the creative life of Bakehouse visible without flattening it into simple promotion. Bakehouse is not only a building where artworks are made; it is a living ecosystem of studios, materials, conversations, experiments, exhibitions, deadlines, relationships, and community.

As a Bakehouse artist, I would approach this opportunity from the inside. I understand how much of an artist's work happens before the final image or exhibition: the small decisions, failures, studio rituals, material tests, research, installation moments, and informal conversations that shape the work. I am interested in documenting those moments with care and translating them into concise, engaging micro-films.

My practice already combines storytelling, digital production, video editing, AI, 3D modeling, web publishing, audio, livestreaming, and artist documentation. I would bring those skills into a repeatable weekly system that can support Bakehouse's public presence while also contributing to a meaningful visual archive of the artists and community.`;

export const fourArtistsStoriesToDocument = `I would be most excited to document the everyday creative life of Bakehouse: the moments where artistic practice, community, and institutional activity overlap. I am interested in stories that show artists in process—not only finished artworks, but the gestures, tools, materials, conversations, and decisions that make the work possible.

Some areas I would be excited to document include studio visits, works in progress, installation moments, exhibition preparation, open studios, artist-to-artist conversations, material experiments, community events, and the ways Bakehouse supports artists at different stages of their practices. I am especially interested in showing the diversity of artistic approaches inside the building: painting, sculpture, performance, photography, digital media, fabrication, research-based work, and socially engaged practices.

I would also be interested in documenting Bakehouse as a cultural infrastructure for Miami: a place where artists are not only producing objects, but building relationships, sharing knowledge, and contributing to the city's creative future.`;

export const fourArtistsEngagingContent = `I believe engaging social media content combines clarity, rhythm, emotional access, and a strong point of view. A good short-form video should quickly communicate why someone should care, but it should also leave space for curiosity. The strongest content is not just visually polished; it has a human reason to exist.

For artist-centered content, I think the key is to translate process into story. Viewers respond when they can understand the stakes of a gesture, material, object, question, or studio moment. A 15–30 second video can be successful when it has a clear hook, a visual transformation, a memorable detail, strong pacing, readable captions, and a sense of intimacy or discovery.

I also think engaging content should respect the artist and the work. It should not make everything feel like advertising. The goal is to create a bridge between the depth of the studio and the speed of social platforms, so that the content feels accessible, generous, and still true to the complexity of the artwork.`;

export const fourArtistsSocialHandlesBlock = `Instagram: ${fourArtistsMeta.socialHandles.instagram}
YouTube: ${fourArtistsMeta.socialHandles.youtube}
Website: ${fourArtistsMeta.socialHandles.website}
Application page: ${fourArtistsMeta.canonicalUrl}`;

export const fourArtistsContentExamplesPlaceholder = `1. [Strongest short-form video / reel link]
2. [Artist process or studio documentation link]
3. [Oolite / workshop / digital lab documentation link]
4. [AI / 3D / fabrication / chroma key example link]
5. [YouTube / livestream / podcast / public-facing video link]`;

export const fourArtistsRoleInContent = 'All of the above';

export const fourArtistsEditingPlatforms =
  'Adobe Premiere, After Effects, Canva, Instagram Reels, TikTok, CapCut, AI tools, YouTube, Cloudinary, GitHub/web publishing, and related digital production workflows.';

export const fourArtistsFitCards: FitCard[] = [
  {
    title: 'Bakehouse resident / insider access',
    body: 'Can document from within the community — studios, hallways, programming, and artist relationships — not as an outside contractor.',
  },
  {
    title: 'Artist documentation',
    body: 'Understands how to translate process, studio life, and artistic intent into concise public-facing stories without flattening complexity.',
  },
  {
    title: 'Digital production',
    body: 'Premiere, After Effects, Canva, chroma key, AI tools, 3D modeling, livestream, and podcasting — with judgment about when each tool serves the story.',
  },
  {
    title: 'Weekly repeatable system',
    body: 'Can keep a consistent cadence without reinventing the process each week: plan, capture, edit, review, publish, archive.',
  },
  {
    title: 'Institutional experience',
    body: 'Oolite Digital Lab, public workshops, artist support, and digital education — already operating in Miami’s artist infrastructure.',
  },
  {
    title: 'Social storytelling',
    body: 'Makes content clear, engaging, and culturally alive without corporate polish — feed posts curated for strength; Stories for daily studio rhythm.',
  },
];

const INSTAGRAM_PROFILE = fourArtistsMeta.social.instagram;

export const fourArtistsProofItems: ProofItem[] = [
  {
    id: 'oolite-digital-lab',
    title: 'Oolite Digital Lab Process',
    category: 'Artist process documentation',
    mediaType: 'cloudinary',
    src: OOLITE_DIGITAL_LAB_IMAGE,
    poster: OOLITE_DIGITAL_LAB_IMAGE,
    href: INSTAGRAM_PROFILE,
    surveyLink: INSTAGRAM_PROFILE,
    sampleStatus: 'pending',
    tools: ['Premiere', 'Phone video', 'Captions', 'Process documentation'],
    role: ['Filming', 'Editing', 'Story development'],
    proves:
      'Ability to turn technical artist support into clear short-form educational content inside a working lab.',
    applicationPriority: true,
    platformLabel: 'Reels / Stories',
    captionOverlay: 'Inside the Digital Lab — where artists meet fabrication and code.',
  },
  {
    id: 'resin-3d-workflow',
    title: 'Resin / 3D Print Workflow',
    category: 'Fabrication documentation',
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    href: INSTAGRAM_PROFILE,
    surveyLink: INSTAGRAM_PROFILE,
    sampleStatus: 'pending',
    tools: ['3D printing', 'Resin', 'Premiere', 'Close-up capture'],
    role: ['Filming', 'Editing', 'All of the above'],
    proves: 'Material and tool fluency — process moments that read clearly in 15–30 seconds.',
    applicationPriority: true,
    platformLabel: 'TikTok / Reels',
    captionOverlay: 'Material close-up — tool, gesture, transformation.',
  },
  {
    id: 'workshop-teaching',
    title: 'Workshop & Teaching Documentation',
    category: 'Workshop documentation',
    mediaType: 'cloudinary',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    href: 'https://ai24.live',
    surveyLink: 'https://ai24.live',
    sampleStatus: 'pending',
    tools: ['Canva', 'Premiere', 'Live instruction capture'],
    role: ['Filming', 'On-camera host', 'Editing'],
    proves: 'Public-facing artist education — pacing, clarity, and community engagement.',
    applicationPriority: true,
    platformLabel: 'Instagram',
    captionOverlay: 'Workshop moment — artists learning tools in real time.',
  },
  {
    id: 'ai-chroma-experimental',
    title: 'AI / Chroma Key Experimental Video',
    category: 'Experimental digital production',
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
    href: '/research/broken-acceleration',
    surveyLink: 'https://moises.tech/research/broken-acceleration',
    sampleStatus: 'pending',
    tools: ['After Effects', 'Chroma key', 'AI visuals', 'ComfyUI'],
    role: ['Story development', 'Editing', 'All of the above'],
    proves: 'Contemporary visual vocabulary — experimental but controlled, not gimmick-driven.',
    applicationPriority: true,
    platformLabel: 'Reels',
    captionOverlay: 'Digital layer — when the studio meets generative image.',
  },
  {
    id: 'podcast-mic-setup',
    title: 'Podcast / Interview Setup',
    category: 'Audio & interview',
    mediaType: 'image',
    src: moisesSanabriaHeadshot,
    href: fourArtistsMeta.social.youtube,
    surveyLink: fourArtistsMeta.social.youtube,
    sampleStatus: 'pending',
    tools: ['Bluetooth mics', 'Premiere', 'Podcast pacing', 'Captions'],
    role: ['Filming', 'Story development', 'Editing'],
    proves: 'Clean audio and conversational structure for artist micro-interviews.',
    applicationPriority: true,
    platformLabel: 'Stories / Reels',
    captionOverlay: 'One question — one artist — one studio answer.',
  },
  {
    id: 'livestream-program',
    title: 'Livestream / Public Program',
    category: 'Live documentation',
    mediaType: 'external',
    href: 'https://ai24.live',
    poster: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    tools: ['Livestream', 'OBS', 'Premiere', 'Event capture'],
    role: ['Filming', 'Technical direction', 'Editing'],
    proves: 'Real-time audience fluency and event documentation under live conditions.',
    platformLabel: 'YouTube / Instagram Live',
    captionOverlay: 'Public program — campus energy in real time.',
  },
  {
    id: 'studio-practice',
    title: 'Studio Practice / Artwork Process',
    category: 'Personal artwork',
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    tools: ['Phone camera', 'Premiere', 'Narrative editing'],
    role: ['Filming', 'Editing', 'All of the above'],
    proves: 'Own artistic practice documented with the same care offered to peer artists.',
    platformLabel: 'Reels',
    captionOverlay: 'Work-in-progress — studio as living archive.',
  },
  {
    id: 'web-infrastructure',
    title: 'Web / Digital Infrastructure',
    category: 'Digital storytelling',
    mediaType: 'github',
    href: 'https://github.com/moisestech',
    poster: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
    tools: ['Next.js', 'Cloudinary', 'Web publishing', 'Archive design'],
    role: ['Story development', 'All of the above'],
    proves: 'Builds durable public-facing documentation systems — this application page included.',
    platformLabel: 'Web archive',
    captionOverlay: 'Documentation that outlasts the feed — archive as practice.',
  },
  {
    id: 'social-educational',
    title: 'Social-Ready Educational Clip',
    category: 'Educational short-form',
    mediaType: 'cloudinary',
    src: OOLITE_DIGITAL_LAB_IMAGE,
    poster: OOLITE_DIGITAL_LAB_IMAGE,
    tools: ['Canva', 'Captions', 'Premiere', 'Vertical export'],
    role: ['Editing', 'Story development'],
    proves: 'Caption-forward, platform-native pacing for non-specialist audiences.',
    platformLabel: 'TikTok / Reels',
    captionOverlay: 'Quick lesson — one tool, one gesture, one takeaway.',
  },
];

const productionLogoIds = [
  'adobe-premiere',
  'adobe-after-effects',
  'canva',
  'capcut',
  'instagram',
  'tiktok',
  'youtube',
  'cloudinary',
  'github',
] as const;

export const fourArtistsProductionLogoBand: LogoBandItem[] = productionLogoIds.flatMap((id) => {
  const entry = techLogoRegistry[id];
  if (!entry?.imageSrc) return [];
  return [{ src: entry.imageSrc, alt: entry.label, height: id === 'canva' || id === 'capcut' ? 32 : 36 }];
});

export const fourArtistsApplicationResponses: ApplicationResponse[] = [
  {
    number: 6,
    title: 'Artistic practice + trajectory at Bakehouse',
    body: fourArtistsBakehouseTrajectory,
    copyText: fourArtistsBakehouseTrajectory,
  },
  {
    number: 7,
    title: 'Social media handles',
    body: fourArtistsSocialHandlesBlock,
    copyText: fourArtistsSocialHandlesBlock,
  },
  {
    number: 8,
    title: 'Why are you interested in participating?',
    body: fourArtistsWhyInterested,
    copyText: fourArtistsWhyInterested,
  },
  {
    number: 9,
    title: 'Stories or perspectives you would be excited to document',
    body: fourArtistsStoriesToDocument,
    copyText: fourArtistsStoriesToDocument,
  },
  {
    number: 10,
    title: 'What makes engaging social media content?',
    body: fourArtistsEngagingContent,
    copyText: fourArtistsEngagingContent,
  },
  {
    number: 11,
    title: 'Posting frequency',
    body: `${fourArtistsMeta.postingTagline}\n\n${fourArtistsMeta.postingFrequency}`,
    formChoice: fourArtistsMeta.postingFormChoice,
    optionalNote: fourArtistsMeta.postingFrequency,
    copyText: fourArtistsMeta.postingFormChoice,
  },
  {
    number: 12,
    title: 'Examples of social media content',
    body: `Priority samples for the survey (2–5 required). Final direct reel/short URLs pending — see Proof section for interim links.\n\n${fourArtistsContentExamplesPlaceholder}`,
    copyText: fourArtistsProofItems
      .filter((item) => item.applicationPriority)
      .map((item, i) => `${i + 1}. ${item.title} — ${item.surveyLink ?? 'PENDING'}`)
      .join('\n'),
  },
  {
    number: 13,
    title: 'Role in content creation & editing platforms',
    body: `Role: Filming, editing, on-camera host, and story development — often all of the above within a single weekly micro-film workflow.\n\nEditing platforms: ${fourArtistsEditingPlatforms}`,
    formChoice: fourArtistsRoleInContent,
    copyText: `Role: ${fourArtistsRoleInContent}\n\nEditing platforms: ${fourArtistsEditingPlatforms}`,
  },
];

export const fourArtistsReadinessMetrics: ReadinessMetric[] = [
  { label: 'Hook clarity', value: 'Strong', note: 'Opens on material, gesture, or question — not logo slates.' },
  { label: 'Caption readiness', value: 'Ready', note: 'Burned-in or platform captions; readable on mute.' },
  { label: 'Platform fit', value: 'Strong', note: 'Vertical 9:16 export; safe zones for UI overlays.' },
  { label: 'Archive value', value: 'Ready', note: 'Reusable for artist portfolio and Bakehouse visual record.' },
  { label: 'Artist sensitivity', value: 'Strong', note: 'Review step before publish; consent-aware framing.' },
  { label: 'Production complexity', value: 'Ready', note: 'Lightweight weekly workflow — not overproduced.' },
];

export const fourArtistsWeeklyPlan: WeeklyPlanItem[] = [
  { week: 1, title: 'Artist introduction / studio atmosphere', description: 'Establish voice and place — who, where, what energy.' },
  { week: 2, title: 'Material or tool close-up', description: 'Macro process — texture, tool, machine, or material behavior.' },
  { week: 3, title: 'Process moment', description: 'Mid-action clip — hands, gesture, decision point.' },
  { week: 4, title: 'One-question artist interview', description: 'Single prompt; tight cut; Bluetooth mic when needed.' },
  { week: 5, title: 'Work-in-progress reveal', description: 'Before public finish — honest studio state.' },
  { week: 6, title: 'Community or hallway moment', description: 'Campus life — peers, conversation, shared space.' },
  { week: 7, title: 'Exhibition / program connection', description: 'Tie to Bakehouse programming, Open Studios, or fundraising season.' },
  { week: 8, title: 'Voiceover reflection', description: 'Artist or narrator reflection over b-roll.' },
  { week: 9, title: 'Before / after transformation', description: 'Visible change — material, install, or display.' },
  { week: 10, title: 'Studio detail / object story', description: 'One object, one history, one frame.' },
  { week: 11, title: 'Public-facing micro-interview', description: 'Short interview cut for social; archive-friendly longer take saved.' },
  { week: 12, title: 'Season recap / archive handoff', description: 'Compile rhythm; deliver reusable assets to artist and Bakehouse.' },
];

export const fourArtistsWorkflowSteps = [
  'Plan — identify weekly story, artist, or campus moment',
  'Capture — phone/camera + Bluetooth mic when needed',
  'Edit — Premiere / After Effects / Canva / platform-native tools',
  'Shape — captions, pacing, sound, title, visual hook',
  'Review — align with Bakehouse staff and artist sensitivity',
  'Publish / archive — export for social platforms and preserve as visual archive',
] as const;

export const fourArtistsToolStack: ToolStackCategory[] = [
  {
    category: 'Editing',
    tools: ['Adobe Premiere', 'After Effects', 'CapCut', 'Instagram Reels', 'TikTok'],
  },
  {
    category: 'Design',
    tools: ['Canva', 'Motion graphics', 'Captions', 'Thumbnails'],
  },
  {
    category: 'Production',
    tools: ['Smartphone / camera', 'Bluetooth mics', 'Lighting', 'Livestream setup'],
  },
  {
    category: 'Experimental',
    tools: ['AI tools', 'Chroma key', '3D modeling', 'Generative visuals'],
  },
  {
    category: 'Infrastructure',
    tools: ['YouTube', 'Cloudinary', 'GitHub', 'Web publishing'],
  },
];

export const fourArtistsStorytellingPrinciples = [
  'Lead with a visual hook — material, face, gesture, or question — not institution branding.',
  'Respect artist agency: preview cuts when the story is about a peer’s work.',
  'Design for mute viewing: captions and visual clarity first.',
  'Keep weekly format repeatable so cadence stays reliable across 12 weeks.',
  'Build archive value: every clip should work on social and in Bakehouse’s visual record.',
  'Adapt to programming — exhibitions, fundraising season, Open Studios — without losing rhythm.',
];

export const fourArtistsPrioritySampleTitles = fourArtistsProofItems
  .filter((item) => item.applicationPriority)
  .map((item) => item.title);

export const fourArtistsSurveyAlignment: SurveyAlignmentItem[] = [
  {
    question: 'Website link',
    answerSummary: fourArtistsMeta.canonicalUrl,
    pageAnchor: 'overview',
  },
  {
    question: 'Season selection',
    answerSummary: `${fourArtistsMeta.seasonFormChoice} ${fourArtistsMeta.seasonPageNote}`,
    pageAnchor: 'overview',
  },
  {
    question: 'Bakehouse trajectory / practice',
    answerSummary: 'Resident artist; studio practice + Oolite Digital Lab technical direction.',
    pageAnchor: 'trajectory',
  },
  {
    question: 'Social handles',
    answerSummary: `Instagram ${fourArtistsMeta.socialHandles.instagram}; YouTube ${fourArtistsMeta.socialHandles.youtube}; ${fourArtistsMeta.socialHandles.website}`,
    pageAnchor: 'contact',
  },
  {
    question: 'Interest in the opportunity',
    answerSummary: 'Make creative life inside Bakehouse visible without flattening it into promotion.',
    pageAnchor: 'statement',
  },
  {
    question: 'Stories to document',
    answerSummary: 'Artists, materials, studio process, community, exhibitions, fundraising season programming.',
    pageAnchor: 'weekly-plan',
  },
  {
    question: 'What makes engaging content',
    answerSummary: 'Hook clarity, artist sensitivity, caption readiness, platform-native pacing.',
    pageAnchor: 'storytelling',
  },
  {
    question: 'Posting frequency',
    answerSummary: `${fourArtistsMeta.postingFormChoice} — ${fourArtistsMeta.postingTagline}`,
    pageAnchor: 'storytelling',
  },
  {
    question: 'Content examples (2–5)',
    answerSummary: `${fourArtistsPrioritySampleTitles.join('; ')} — direct reel/short URLs pending; interim profile links on proof cards.`,
    pageAnchor: 'proof',
  },
  {
    question: 'Role in content creation',
    answerSummary: 'Filming, editing, on-camera host, story development — often all of the above.',
    pageAnchor: 'proof',
  },
  {
    question: 'Editing platforms',
    answerSummary: 'Premiere, After Effects, Canva, CapCut, platform-native Reels/TikTok tools.',
    pageAnchor: 'tools',
  },
  {
    question: '12-week commitment',
    answerSummary: 'Confirmed available for full seasonal cycle; workflow designed for weekly cadence.',
    pageAnchor: 'workflow',
  },
];

export const fourArtistsStatement = {
  preview:
    'As a current Bakehouse artist, I’m interested in Four Artists: Four Seasons because I see short-form video as a way to make the creative life of the building visible without flattening it into promotion.',
  full: `As a current Bakehouse artist, I'm interested in Four Artists: Four Seasons because I see short-form video as a way to make the creative life of the building visible without flattening it into promotion. Bakehouse is not only a place where artworks are made; it is a living ecosystem of process, experimentation, conversation, materials, deadlines, and community. I would approach the 12-week cycle as a rhythm of weekly micro-films that capture this energy with clarity, care, and a strong visual point of view.

My practice moves between art, technology, digital culture, and systems for public storytelling. I work across Premiere, After Effects, Canva, chroma keying, 3D modeling, AI tools, Bluetooth microphone setups, podcasting, livestreaming, and web publishing. More importantly, I understand how to translate an artist's process into a concise story that can live on social platforms while still respecting the depth of the work.

For this opportunity, I would bring together insider access as a Bakehouse resident, technical production fluency, and a repeatable weekly workflow. My goal would be to create short-form videos that support Bakehouse's public presence, highlight the artists and campus activity, and contribute to a growing visual archive of the community.`,
};

export const fourArtistsSurveyFormAnswers: SurveyFormAnswer[] = [
  {
    questionLabel: 'Website link',
    copyText: fourArtistsMeta.canonicalUrl,
  },
  {
    questionLabel: 'Season selection (Q5)',
    multipleChoice: fourArtistsMeta.seasonFormChoice,
    optionalNote: fourArtistsMeta.seasonFormNote,
    copyText: fourArtistsMeta.seasonFormChoice,
  },
  {
    questionLabel: 'Bakehouse trajectory / artistic practice',
    copyText: fourArtistsBakehouseTrajectory,
  },
  {
    questionLabel: 'Social media handles',
    copyText: fourArtistsSocialHandlesBlock,
  },
  {
    questionLabel: 'Interest in the opportunity',
    copyText: fourArtistsWhyInterested,
  },
  {
    questionLabel: 'Stories you hope to document',
    copyText: fourArtistsStoriesToDocument,
  },
  {
    questionLabel: 'What makes engaging social content',
    copyText: fourArtistsEngagingContent,
  },
  {
    questionLabel: 'Posting frequency (Q11)',
    multipleChoice: fourArtistsMeta.postingFormChoice,
    optionalNote: fourArtistsMeta.postingFrequency,
    copyText: fourArtistsMeta.postingFormChoice,
  },
  {
    questionLabel: 'Content examples (2–5 links)',
    copyText: fourArtistsProofItems
      .filter((item) => item.applicationPriority)
      .map((item, i) => `${i + 1}. ${item.title} — ${item.surveyLink ?? 'PENDING'}`)
      .join('\n'),
  },
  {
    questionLabel: 'Role in content creation',
    multipleChoice: fourArtistsRoleInContent,
    copyText: fourArtistsRoleInContent,
  },
  {
    questionLabel: 'Editing platforms',
    copyText: fourArtistsEditingPlatforms,
  },
  {
    questionLabel: '12-week commitment',
    copyText:
      'Confirmed available for a full 12-week seasonal cycle. Production workflow is designed for one short-form video per week with review, captioning, and archive handoff.',
  },
];

export const fourArtistsNavZones = [
  { id: 'overview', number: '01', label: 'Overview', summary: 'Fit and application snapshot' },
  { id: 'trajectory', number: '02', label: 'Trajectory', summary: 'Bakehouse and practice context' },
  { id: 'fit', number: '03', label: 'Why I fit', summary: 'Skills mapped to the program' },
  { id: 'proof', number: '04', label: 'Proof', summary: 'Short-form storytelling samples' },
  { id: 'weekly-plan', number: '05', label: '12-week plan', summary: 'Weekly rhythm' },
  { id: 'workflow', number: '06', label: 'Workflow', summary: 'Production system' },
  { id: 'tools', number: '07', label: 'Tools', summary: 'Editing and production stack' },
  { id: 'storytelling', number: '08', label: 'Storytelling', summary: 'Principles and posting approach' },
  { id: 'application-responses', number: '09', label: 'Application', summary: 'SurveyMonkey answers Q6–Q13' },
  { id: 'statement', number: '10', label: 'Statement', summary: 'Interest and approach' },
  { id: 'contact', number: '11', label: 'Contact', summary: 'Links and next steps' },
] as const;
