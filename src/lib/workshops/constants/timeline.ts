export interface TimelineEvent {
  year: number;
  month?: string;
  name: string;
  description: string;
  company?: string;
  url: string;
  paperUrl?: string;
  githubUrl?: string;
  category: string[];
  type: 'release' | 'research' | 'milestone';
  impact: string;
}

export const AI_VIDEO_TIMELINE: TimelineEvent[] = [
  {
    year: 2022,
    month: "September",
    name: "Make-A-Video",
    description: "One of the first text-to-video models from a major tech company",
    company: "Meta",
    url: "https://make-a-video.github.io/",
    paperUrl: "https://make-a-video.github.io/",
    githubUrl: "https://github.com/lucidrains/make-a-video-pytorch",
    category: ["video", "generation"],
    type: "research",
    impact: "Generated videos from text without paired text-video training data"
  },
  {
    year: 2023,
    month: "February",
    name: "Runway Gen-1",
    description: "First commercially available text-to-video generation tool",
    company: "Runway",
    url: "https://runwayml.com/gen-1/",
    category: ["video", "generation", "commercial"],
    type: "release",
    impact: "Made AI video generation accessible to creative professionals"
  },
  {
    year: 2024,
    month: "February",
    name: "Sora",
    description: "Minute-long, physically plausible videos with unprecedented quality",
    company: "OpenAI",
    url: "https://openai.com/sora",
    paperUrl: "https://arxiv.org/abs/2402.17177",
    category: ["video", "generation", "research"],
    type: "research",
    impact: "Demonstrated advanced understanding of physics, motion, and object persistence"
  }
];

export const DOCUMENTARY_EXAMPLES: TimelineEvent[] = [
  {
    year: 2020,
    name: "Welcome to Chechnya",
    description: "Used deepfake technology to protect subject identities",
    url: "https://www.welcometochechnya.com/",
    category: ["documentary", "ethics"],
    type: "milestone" as const,
    impact: "Demonstrated ethical use of AI for subject protection in documentaries"
  },
  {
    year: 2023,
    name: "Another Body",
    description: "Used AI to protect vulnerable subjects while maintaining narrative impact",
    url: "https://anotherbodyfilm.com/",
    category: ["documentary", "ethics"],
    type: "milestone" as const,
    impact: "Advanced the ethical use of deepfake technology in documentary filmmaking"
  },
  {
    year: 2024,
    name: "Eno",
    description: "Uses generative AI to create unique versions at each screening",
    company: "Gary Hustwit",
    url: "https://www.youtube.com/watch?v=FSAkRu6bVq8",
    category: ["documentary", "experimental"],
    type: "milestone" as const,
    impact: "Pioneered the use of AI for dynamic documentary experiences"
  }
]; 