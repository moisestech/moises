/**
 * Workshop / Talk Hub page configuration.
 * Used for QR code landing page at events (e.g. Locust Projects talk).
 */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/moisestech/15-minute-meeting";

export const WORKSHOP_HUB = {
  PAGE_TITLE: "Art & Technology Workshops",
  PAGE_SUBTITLE: "Talk Hub",

  HERO: {
    HEADLINE: "Art & Technology Workshops",
    SUBHEADLINE: "Talk Hub — Automation & partnerships for artists and orgs",
  },

  CTA_INSTITUTIONS: {
    TITLE: "Work with me (Institutions)",
    BULLETS: [
      "Automation audits & workflow design",
      "Institutional memory systems",
      "Custom agents for your org",
    ],
    BUTTON_LABEL: "Schedule a discovery call",
    LINK: "/contact",
  },

  CTA_WORKSHOP: {
    TITLE: "Join the Workshop Waitlist",
    BULLETS: [
      "n8n automations & agent patterns",
      "Capture → summarize → publish pipelines",
      "Hands-on workflow templates",
    ],
    BUTTON_LABEL: "Join waitlist",
  },

  WHAT_YOU_LEAVE_WITH: [
    "Clear automation roadmap for your practice",
    "Hands-on workflow templates",
    "Community of artist-automators",
  ],

  RESOURCES: [
    {
      label: "Download: AI Agents Packet",
      href: "/workshop/the-art-of-ai-agents",
      description: "Slides, notes, and resources",
      external: false,
      icon: "package",
    },
    {
      label: "Example automations",
      href: "/workshop/the-art-of-ai-agents#examples",
      description: "Coming soon",
      external: false,
      icon: "cog",
    },
    {
      label: "Book a discovery call",
      href: CALENDLY_URL,
      description: "15-min meet & greet",
      external: true,
      icon: "phone",
    },
  ],

  ABOUT: {
    MOISES: {
      name: "Moises Sanabria",
      role: "Technical Director of Digital at Oolite Arts",
      bio: "Builds automation tools, institutional digital infrastructure, and teaches artists to offload repetitive tasks.",
      avatar: "https://ui-avatars.com/api/?name=Moises+Sanabria&background=7f5af0&color=fff&size=128",
      instagram: "moisesdsanabria",
    },
    FABIOLA: {
      name: "Fabiola Larios",
      role: "Director of Digital at Oolite Arts",
      bio: "SEO & digital presence workshops. 360 Lead Director of Digital. Immersive 360° captures of exhibitions and studios.",
      avatar: "https://ui-avatars.com/api/?name=Fabiola+Larios&background=ff6ac1&color=fff&size=128",
      instagram: "fabiolalariosm",
    },
    TRUST_SIGNALS: [
      { name: "Oolite Arts", logo: null },
      { name: "Locust Projects", logo: null },
      { name: "Bakehouse Art Complex", logo: null },
    ],
  },

  FOOTER: {
    EMAIL: "m@moises.tech",
  },
} as const;
