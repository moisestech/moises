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

export const fourArtistsBakehouseTrajectory = `I am a Venezuelan-born, Miami-based interdisciplinary artist working at the intersection of art, technology, digital culture, and systems of attention. My practice uses video, sculpture, AI, web-based tools, fabrication, performance, and installation to explore how people live inside technological systems, how platforms, screens, automation, and algorithms shape identity, labor, memory, and public life.

I have been a Bakehouse artist for several years, and Bakehouse has become an important site for developing my work from screen-based ideas into physical installations, public conversations, and community-facing systems. My trajectory at Bakehouse has increasingly focused on how artists, audiences, and institutions communicate through images, screens, documentation, and digital infrastructure.

Recently, I have been building and installing vertical smart sign systems at Bakehouse that promote artists, events, and studio activity through a repeatable screen-based format. I have also worked on digital projects connected to Bakehouse's 40th anniversary, including a 3D model / VR representation of Bakehouse that was translated into reel-based content. These projects connect directly to my interest in short-form storytelling: how a vertical screen, a short video, or a digital sign can make an artist's process more visible to the public.

My background also includes over 11 years of experience with After Effects, video editing, digital storytelling, and interactive media, including a Unity-based Peter Cooper Union game project created for my graduation. At Bakehouse, my practice has developed through the relationship between artistic experimentation and public communication: how to take complex ideas, studio processes, and institutional stories and translate them into accessible visual experiences.`;

export const fourArtistsWhyInterested = `I am interested in participating in Four Artists: Four Seasons because it aligns directly with work I am already doing at Bakehouse: building repeatable systems for making artists, events, and creative processes more visible through vertical screens, short-form video, and digital storytelling.

I see this opportunity as more than creating isolated social media posts. I would approach it as a 12-week micro-film system: one concise, visually strong video each week that captures a specific artist, process, question, event, or community moment. My goal would be to create content that works on Instagram, TikTok, Facebook, and other public platforms while also contributing to a longer-term visual archive of Bakehouse.

As a Bakehouse artist, I have insider access to the rhythms of the building: the studio work, the installation moments, the conversations, the experiments, and the institutional changes happening around us. I am especially interested in using short videos to connect the current life of the artist community with the future vision of Bakehouse, including the new building, the artist residency ecosystem, and the role of artists in shaping Miami's cultural infrastructure.

I bring a combination of artistic sensitivity and technical production experience: After Effects, Premiere, Canva, AI tools, 3D modeling, VR, Unity, smart signage, podcasting, livestreaming, and web publishing. For this program, I would use those skills in service of clear, consistent, artist-centered micro-films.`;

export const fourArtistsStoriesToDocument = `I would be most excited to document Bakehouse as a living creative ecosystem: artists in their studios, works in progress, material experiments, installation moments, open studios, exhibitions, public programs, and the informal conversations that shape the community.

I am especially interested in the relationship between the current artist community and the future of Bakehouse. With the new building and larger architectural vision, there is an opportunity to document not only what artists are making now, but what kind of cultural future they imagine for the campus and for Miami. I would be interested in creating short videos that ask artists simple but meaningful questions: What does your studio make possible? What should an artist community provide? What do you hope the future Bakehouse holds? How does your practice speak to the city around it?

I would also like to document the vertical and public-facing life of the building: smart signs, screens, studio announcements, artist features, event promotion, and the ways digital tools can help connect artists with audiences. Because I have already been working with vertical smart sign systems and artist-facing digital infrastructure at Bakehouse, I see this program as a way to extend that work into weekly social media storytelling.

The stories I would prioritize are not only finished artworks, but the processes, systems, and relationships that allow artists to keep making work.`;

export const fourArtistsEngagingContent = `I believe engaging social media content combines a clear story, strong pacing, visual rhythm, and a human reason to keep watching. A good short-form video does not need to explain everything, but it should quickly give the viewer a point of entry: a question, a gesture, a transformation, a material, a face, a voice, or a surprising detail.

For artist-centered content, I think the strongest videos translate process into story. Viewers respond when they can understand what is at stake in an artwork or studio moment, even in 15–30 seconds. This requires more than filming something beautiful; it requires structure: a hook, a sequence, a visual payoff, captions, sound, and a clear sense of why the moment matters.

I also believe consistency is part of engagement. A repeatable format helps audiences know what to expect while still allowing each artist or story to feel distinct. My experience building vertical smart sign systems, reels, digital documentation, and screen-based content has taught me that strong social media content works best when it is both flexible and systematic. It should be easy to recognize, easy to share, and still sensitive to the complexity of the artist's work.

For Bakehouse, engaging content should feel generous, intelligent, and alive. It should invite people into the building's creative ecosystem without reducing the artists to promotion.`;

export const fourArtistsSocialHandlesBlock = `Instagram: ${fourArtistsMeta.socialHandles.instagram}
YouTube: ${fourArtistsMeta.socialHandles.youtube}
Website: ${fourArtistsMeta.socialHandles.website}
Application page: ${fourArtistsMeta.canonicalUrl}`;

export const fourArtistsContentExamplesPlaceholder = `1. Romance or Gamification — MOMus, Greece
https://www.instagram.com/p/DNTYuKUofYG/

2. The Art of AI Agents — Locust Projects, The Dill
https://www.instagram.com/p/DVG3zMyEZEi/

3. Personal Artist Invitation (AI Lip Sync) — Digital Art Biennial, Antigua Guatemala
https://www.instagram.com/p/C9DRFnBvIrL/

4. Toy to Resin — Digilab 3D Printing Process
https://drive.google.com/file/d/1iCE_dECkSQYjomck253PdngRFf1K44NK/view?usp=sharing

5. Bakehouse Current Building VR Walkthrough — 40th Year Promotion
https://drive.google.com/file/d/1zqAAnLQisBl4vpneiQUKxJQvinfJZwF3/view?usp=sharing

6. TikTok Ban Music Video
https://www.tiktok.com/t/ZTBoMHNNT/`;

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

export const fourArtistsProofItems: ProofItem[] = [
  {
    id: 'romance-or-gamification-momus',
    title: 'Romance or Gamification',
    category: 'Exhibition documentation · MOMus, Greece',
    mediaType: 'external',
    href: 'https://www.instagram.com/p/DNTYuKUofYG/',
    surveyLink: 'https://www.instagram.com/p/DNTYuKUofYG/',
    poster:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
    sampleStatus: 'ready',
    tools: ['Premiere', 'After Effects', 'Captions', 'Instagram Reels'],
    role: ['Filming', 'Editing', 'Story development', 'All of the above'],
    proves: 'International exhibition storytelling — concise narrative pacing for institutional and social audiences.',
    applicationPriority: true,
    platformLabel: 'Instagram Reel',
    captionOverlay: 'Romance or Gamification — MOMus, Greece',
  },
  {
    id: 'art-of-ai-agents-locust',
    title: 'The Art of AI Agents',
    category: 'Public program · Locust Projects, The Dill',
    mediaType: 'external',
    href: 'https://www.instagram.com/p/DVG3zMyEZEi/',
    surveyLink: 'https://www.instagram.com/p/DVG3zMyEZEi/',
    poster: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    sampleStatus: 'ready',
    tools: ['Premiere', 'Canva', 'Live event capture', 'Captions'],
    role: ['Filming', 'On-camera host', 'Editing', 'All of the above'],
    proves: 'Miami institutional program documentation — educational pacing with community engagement.',
    applicationPriority: true,
    platformLabel: 'Instagram Reel',
    captionOverlay: 'The Art of AI Agents at Locust Projects',
  },
  {
    id: 'ai-lip-sync-guatemala',
    title: 'AI Lip Sync Artist Invitation',
    category: 'AI video · Digital Art Biennial, Antigua Guatemala',
    mediaType: 'external',
    href: 'https://www.instagram.com/p/C9DRFnBvIrL/',
    surveyLink: 'https://www.instagram.com/p/C9DRFnBvIrL/',
    poster: moisesSanabriaHeadshot,
    sampleStatus: 'ready',
    tools: ['AI lip sync', 'After Effects', 'Premiere', 'Vertical export'],
    role: ['Story development', 'Editing', 'All of the above'],
    proves: 'Experimental AI storytelling with clear invitation structure — contemporary digital-art voice.',
    applicationPriority: true,
    platformLabel: 'Instagram Reel',
    captionOverlay: 'Personal invitation — Digital Art Biennial, Antigua',
  },
  {
    id: 'toy-to-resin-digilab',
    title: 'Toy to Resin',
    category: 'Fabrication process · Digilab 3D printing',
    mediaType: 'external',
    href: 'https://drive.google.com/file/d/1iCE_dECkSQYjomck253PdngRFf1K44NK/view?usp=sharing',
    surveyLink: 'https://drive.google.com/file/d/1iCE_dECkSQYjomck253PdngRFf1K44NK/view?usp=sharing',
    poster: OOLITE_DIGITAL_LAB_IMAGE,
    sampleStatus: 'ready',
    tools: ['3D printing', 'Resin', 'Premiere', 'Process documentation'],
    role: ['Filming', 'Editing', 'All of the above'],
    proves: 'Material transformation story — lab workflow translated into short-form educational content.',
    applicationPriority: true,
    platformLabel: 'Process reel',
    captionOverlay: 'Toy to resin — Digilab fabrication workflow',
  },
  {
    id: 'bakehouse-vr-40th',
    title: 'Bakehouse VR Walkthrough',
    category: 'Bakehouse · 40th anniversary promotion',
    mediaType: 'external',
    href: 'https://drive.google.com/file/d/1zqAAnLQisBl4vpneiQUKxJQvinfJZwF3/view?usp=sharing',
    surveyLink: 'https://drive.google.com/file/d/1zqAAnLQisBl4vpneiQUKxJQvinfJZwF3/view?usp=sharing',
    poster: OOLITE_DIGITAL_LAB_IMAGE,
    sampleStatus: 'ready',
    tools: ['VR', '3D modeling', 'Unity', 'Premiere', 'Reel export'],
    role: ['Filming', 'Technical direction', 'Editing', 'All of the above'],
    proves: 'Direct Bakehouse institutional storytelling — campus vision translated into vertical reel content.',
    applicationPriority: true,
    platformLabel: 'Bakehouse / Reel',
    captionOverlay: 'VR walkthrough — Bakehouse 40th year',
  },
  {
    id: 'tiktok-ban-music-video',
    title: 'TikTok Ban Music Video',
    category: 'Music video · TikTok-native pacing',
    mediaType: 'external',
    href: 'https://www.tiktok.com/t/ZTBoMHNNT/',
    surveyLink: 'https://www.tiktok.com/t/ZTBoMHNNT/',
    poster:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    sampleStatus: 'ready',
    tools: ['CapCut', 'TikTok', 'Premiere', 'Sound design'],
    role: ['Filming', 'Editing', 'Story development', 'All of the above'],
    proves: 'Platform-native rhythm and hook-driven editing for TikTok audiences.',
    applicationPriority: true,
    platformLabel: 'TikTok',
    captionOverlay: 'TikTok Ban — music video short-form',
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
    body: `Six published short-form samples — Instagram Reels, TikTok, and process documentation. Submit any five for the survey.\n\n${fourArtistsContentExamplesPlaceholder}`,
    copyText: fourArtistsContentExamplesPlaceholder,
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
    answerSummary: 'Living ecosystem, future campus vision, smart signs, artist questions, process over promotion.',
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
    answerSummary: `${fourArtistsPrioritySampleTitles.join('; ')} — direct reel, TikTok, and process video links on proof cards.`,
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
    copyText: fourArtistsContentExamplesPlaceholder,
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
