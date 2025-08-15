export const AGENT_COLORS = {
  Polly: "var(--polly)",
  Grit: "var(--grit)",
  Spec: "var(--spec)",
  SysAdmin: "var(--sys)",
  A404: "var(--g404)",
  Fault: "var(--fault)",
} as const;

export type AgentKey = keyof typeof AGENT_COLORS;

export const AGENT_LINES: Record<string, string> = {
  Polly: "Tools amplify care—if we steer them.",
  Grit: "Credit the hands. Share the gains.",
  Spec: "The system dreams in color. We choose the frame.",
  SysAdmin: "Name limits. Add guardrails. Ship.",
  A404: "Break the loop. Start over, better.",
  Fault: "System safeguard engaged. Refusing that request.",
};

export const AGENT_DESCRIPTIONS = {
  Polly: "Optimist - believes in the positive potential of automation",
  Grit: "Historian - focuses on labor, credit, and fair compensation",
  Spec: "Artist - explores creative and aesthetic dimensions",
  SysAdmin: "Literalist - practical, technical, implementation-focused",
  A404: "Glitch - disrupts, questions, breaks patterns",
  Fault: "Moderator - enforces safety, shows system limits",
} as const;
