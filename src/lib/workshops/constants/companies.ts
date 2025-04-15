export interface Company {
  name: string;
  url: string;
  description: string;
  category: string[];
  founded?: string;
  type: 'company' | 'platform' | 'tool' | 'research';
}

export const VIDEO_COMPANIES: Company[] = [
  {
    name: "Runway",
    url: "https://runwayml.com/",
    description: "AI-powered creative tools for video generation and editing",
    category: ["video", "editing", "generation"],
    type: "platform"
  },
  {
    name: "Pika Labs",
    url: "https://pika.art/",
    description: "Accessible AI video generation platform",
    category: ["video", "generation"],
    type: "platform"
  },
  {
    name: "OpenAI",
    url: "https://openai.com/sora/",
    description: "Advanced AI research company behind Sora",
    category: ["video", "generation", "research"],
    type: "company"
  },
  {
    name: "Kling AI",
    url: "https://klingai.com/",
    description: "AI-powered image-to-video animation platform",
    category: ["video", "animation"],
    type: "platform"
  },
  {
    name: "Stability AI",
    url: "https://stability.ai/",
    description: "Open-source AI company behind Stable Video Diffusion",
    category: ["video", "generation", "research"],
    type: "company"
  }
];

export const MUSIC_COMPANIES: Company[] = [
  {
    name: "Suno",
    url: "https://suno.com/",
    description: "AI music generation platform",
    category: ["music", "generation"],
    type: "platform"
  },
  {
    name: "Udio",
    url: "https://www.udio.com/",
    description: "AI-powered music creation tools",
    category: ["music", "creation"],
    type: "platform"
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/voice-cloning",
    description: "AI voice cloning and synthesis platform",
    category: ["voice", "audio"],
    type: "platform"
  },
  {
    name: "LALAL.AI",
    url: "https://www.lalal.ai/",
    description: "AI-powered music source separation",
    category: ["music", "audio", "separation"],
    type: "tool"
  }
];

export const WRITING_TOOLS: Company[] = [
  {
    name: "Sudowrite",
    url: "https://www.sudo.ws/",
    description: "AI-assisted creative writing platform",
    category: ["writing", "creativity"],
    type: "tool"
  },
  {
    name: "AI Dungeon",
    url: "https://aidungeon.com/",
    description: "AI-powered interactive fiction platform",
    category: ["writing", "games", "interactive"],
    type: "platform"
  },
  {
    name: "Lorem Machine",
    url: "https://www.loremachine.world/",
    description: "AI-generated visual sequences from scripts",
    category: ["storyboarding", "visualization"],
    type: "tool"
  }
]; 