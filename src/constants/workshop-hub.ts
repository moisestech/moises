/**
 * Workshop / Talk Hub page configuration.
 * Used for QR code landing page at events (e.g. Locust Projects talk).
 */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/moisestech/15-minute-meeting";

export const WORKSHOP_HUB = {
  PAGE_TITLE: "Talk Hub",
  PAGE_SUBTITLE: "Automation Workshop + Partnerships",

  HERO: {
    HEADLINE: "Talk Hub",
    SUBHEADLINE: "Automation & partnerships for artists and orgs",
    VALUE_PROP:
      "Automation, institutional memory, and cognitive offloading—so you can focus on making.",
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
    },
    {
      label: "Example automations",
      href: "/workshop/the-art-of-ai-agents#examples",
      description: "Coming soon",
      external: false,
    },
    {
      label: "Book a discovery call",
      href: CALENDLY_URL,
      description: "15-min meet & greet",
      external: true,
    },
  ],

  ABOUT: {
    BIO: "Moises Sanabria is Technical Director of Digital at Oolite Arts and co-founder of Artist Tech Initiative. He builds automation tools and teaches artists to offload repetitive tasks so they can focus on making. Fabiola Larios leads the SEO / digital presence workshops.",
    TRUST_SIGNALS: [
      { name: "Oolite Arts", logo: null },
      { name: "Locust Projects", logo: null },
      { name: "Bakehouse Art Complex", logo: null },
    ],
  },

  FOOTER: {
    EMAIL: "m@moises.tech",
    NOTE: "This page is the hub — scan the QR at the talk for quick access.",
  },
} as const;
