export type Agent = "Polly"|"Grit"|"Spec"|"SysAdmin"|"A404"|"Fault";

export type Cue =
  | { type: "line"; t: number; agent: Agent; text: string; credit?: {prompt?: string; edit?: string; performer?: string} }
  | { type: "segment"; t: number; name: "BOOT"|"AUTHORSHIP"|"LABOR"|"LOCAL"|"INTERLUDE"|"CHAOS"|"RESOLUTION"|"SIGNOFF" }
  | { type: "rotate"; t: number; show: Agent[] }
  | { type: "bumper"; t: number; text: string };

export const SCRIPT: Cue[] = [
  { type: "segment", t: 0.0, name: "BOOT" },
  { type: "rotate", t: 0.0, show: ["Polly", "Grit", "Spec"] },
  { type: "bumper", t: 0.5, text: "On Air — Locust Projects // Artist in the Automation" },
  { type: "line", t: 1.0, agent: "Polly", text: "Good evening, Miami. Who steers the feed?",
    credit: {prompt: "Moises", edit: "Workshop Team A", performer: "Polly"} },
  { type: "line", t: 4.0, agent: "Grit", text: "Credit the hands. Share the gains.",
    credit: {prompt: "Ana", edit: "Moises", performer: "Grit"} },
  { type: "line", t: 7.0, agent: "Spec", text: "Neon water. Our reflections write the rules.",
    credit: {prompt: "Luis", edit: "Team B", performer: "Spec"} },

  { type: "segment", t: 10.0, name: "AUTHORSHIP" },
  { type: "bumper", t: 10.2, text: "Segment: Authorship — Shared work, shared credit." },
  { type: "line", t: 11.0, agent: "SysAdmin", text: "Pick a license now. Avoid mystery rights.",
    credit: {prompt: "Moises", edit: "SysAdmin", performer: "SysAdmin"} },

  { type: "segment", t: 18.0, name: "LABOR" },
  { type: "line", t: 18.2, agent: "Polly", text: "Automate drudgery. Keep critique human.",
    credit: {prompt: "Jess", edit: "Team C", performer: "Polly"} },

  { type: "segment", t: 24.0, name: "LOCAL" },
  { type: "line", t: 24.2, agent: "Grit", text: "Fair pay tiers. Post credits, not just content.",
    credit: {prompt: "Gabo", edit: "Moises", performer: "Grit"} },

  { type: "segment", t: 30.0, name: "INTERLUDE" },
  { type: "bumper", t: 30.1, text: "Interlude — Human-only minute." },

  { type: "segment", t: 36.0, name: "CHAOS" },
  { type: "rotate", t: 36.0, show: ["Polly", "A404", "SysAdmin"] },
  { type: "line", t: 36.3, agent: "A404", text: "Break the loop. Start over, better.",
    credit: {prompt: "Public", edit: "Moises", performer: "A404"} },

  { type: "segment", t: 46.0, name: "RESOLUTION" },
  { type: "line", t: 46.3, agent: "Spec", text: "Some care resists automation. Keep it close.",
    credit: {prompt: "Moises", edit: "Spec", performer: "Spec"} },

  { type: "segment", t: 55.0, name: "SIGNOFF" },
  { type: "bumper", t: 55.1, text: "Sign-off — Download the template. Office hours next week." },
];

// Sample prompts for workshop
export const WORKSHOP_PROMPS = {
  authorship: [
    "Write one sentence on who should get credit—and why.",
    "Name one task you'd automate; one you never will.",
    "Describe Miami nightlife with five concrete images.",
  ],
  labor: [
    "What work should stay human? What can we safely automate?",
    "How do we measure the value of creative labor?",
    "Describe a fair system for crediting collaborative work.",
  ],
  miami: [
    "What makes Miami's creative scene unique?",
    "How does technology shape Miami's cultural identity?",
    "Describe a Miami-specific automation challenge.",
  ],
} as const;
