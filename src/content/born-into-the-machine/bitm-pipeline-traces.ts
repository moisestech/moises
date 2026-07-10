const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type BitmPipelineTraceNode = {
  nodeId: string;
  thumbnailUrl?: string;
  sentence: string;
  caseStudyHref: string;
  marginalNote?: string;
};

export const bitmPipelineTraces: Record<string, BitmPipelineTraceNode[]> = {
  baby_agi: [
    {
      nodeId: 'cultural-condition',
      sentence: 'Generation Alpha born into AI infrastructure — cradle as data center.',
      caseStudyHref: '/art/baby_agi',
    },
    {
      nodeId: 'prompt-observation',
      sentence: 'Prompt translates accelerationist prophecy into stroller-as-AGI-vessel image.',
      caseStudyHref: '/art/baby_agi',
      thumbnailUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    },
    {
      nodeId: 'generated-proposition',
      sentence: 'Machine proposes smart cradle with visible compute stack — not yet an object.',
      caseStudyHref: '/art/baby_agi',
      thumbnailUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    },
    {
      nodeId: 'plausibility-audit',
      sentence: 'Audit: can stroller frame support GPU stack? Gallery power? Safety for public?',
      caseStudyHref: '/art/baby_agi',
      marginalNote: '// THE GENERATED IMAGE IS NOT THE FINAL FORM.',
    },
    {
      nodeId: 'material-test',
      sentence: 'Component fit tests in stroller frame; electronics bench debugging.',
      caseStudyHref: '/art/baby_agi',
    },
    {
      nodeId: 'fabrication',
      sentence: 'Weeks of assembly — custom PC, robotic hands, animation loop.',
      caseStudyHref: '/art/baby_agi',
      thumbnailUrl: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    },
    {
      nodeId: 'public-installation',
      sentence: 'Breadbytes at Bakehouse — institutional install with gallery requirements.',
      caseStudyHref: '/art/baby_agi',
      marginalNote: 'Permissions, power, install crew, maintenance plan required.',
    },
    {
      nodeId: 'documentation',
      sentence: 'Archive how the work lived — photos, press, grant reports.',
      caseStudyHref: '/art/baby_agi',
    },
    {
      nodeId: 'feedback',
      sentence: 'Audience response feeds next iteration — Baby AGI as pipeline prototype.',
      caseStudyHref: '/art/baby_agi',
    },
  ],
};

export const bitmDefaultTraceCaseStudyId = 'baby_agi';

export const bitmTraceSelectorStub = [
  { id: 'baby_agi', label: 'BABY AGI', active: true },
  { id: 'doomscrolling_treadmill', label: 'DOOMSCROLLING', active: false },
  { id: 'digital_divinities', label: 'DIGITAL DIVINITIES', active: false },
] as const;
