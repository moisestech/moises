/**
 * Three bookable institutional workshop offerings for /workshops and outreach.
 * Lead with studio automation, vibe coding as method, and creative-tech infrastructure.
 * Artist websites are one vibe-coding output—not the primary promise (complements Ratcliffe).
 * Pricing mirrors current Oolite Arts Digital Lab public rates.
 */

import { INSTITUTIONAL_CALENDLY_URL, PILOT_PRICING } from './shared';

export const institutionalWorkshopOfferings = {
  intro: {
    eyebrow: 'Bookable offerings',
    title: 'Three modules institutions can pilot',
    lead:
      'Designed for incubators, cultural organizations, and artist communities. Operational and technical layers under artistic practice—complementary to existing digital-presence curricula.',
    calendlyLabel: PILOT_PRICING.calendlyLabel,
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Oolite-aligned pilot rates',
    lead: PILOT_PRICING.sourceNote,
    sourceUrl: PILOT_PRICING.sourceUrl,
    sourceLabel: 'Oolite Arts — public workshop listing',
    packages: [
      {
        id: 'seat',
        label: 'Public / participant seat',
        price: PILOT_PRICING.seat.display,
        detail: PILOT_PRICING.seat.unit,
        note: PILOT_PRICING.seat.capacityTypical,
      },
      {
        id: 'hosted',
        label: 'Institutional host — single session',
        price: PILOT_PRICING.hostedFlat.display,
        detail: PILOT_PRICING.hostedFlat.unit,
        note: PILOT_PRICING.hostedFlat.mathNote,
      },
      {
        id: 'two-part',
        label: 'Two-part institutional pilot',
        price: PILOT_PRICING.twoPart.display,
        detail: PILOT_PRICING.twoPart.unit,
        note: PILOT_PRICING.twoPart.mathNote,
      },
    ],
  },
  offerings: [
    {
      id: 'studio-automation',
      title: 'Studio Automation for Artists',
      promise:
        'Automate repetitive administrative, research, documentation, and production tasks while keeping human review and authorship intact.',
      body:
        'Capture → summarize → publish patterns, agent literacy, and review gates so automation serves the studio instead of erasing authorship.',
      audience: 'Artists, residents, studio managers; no computer-science background required.',
      prerequisites: 'Everyday digital literacy (email, Drive/Notion, browser tools).',
      duration: '90 min · half-day · or 2 × 3 hours (recommended pilot)',
      capacity: '8–10 participants',
      outcomes: [
        'Map one real studio workflow worth automating',
        'Design a review gate before anything publishes or sends',
        'Leave with a reusable recipe, not a black-box bot',
      ],
      artifact: 'A documented automation recipe for one studio workflow.',
      agenda: [
        'Studio pain points and what not to automate',
        'Pattern library: capture, triage, draft, publish',
        'Hands-on recipe build with human review',
        'Share-back and maintenance habits',
      ],
      setup: 'Laptops, projector, Wi-Fi; optional shared Drive/Notion/email for demos.',
      formats: ['Guest session', 'Co-taught module', 'Two-part pilot'],
      priceLabel: `${PILOT_PRICING.twoPart.display} hosted two-part · or ${PILOT_PRICING.hostedFlat.display} single`,
      fits: 'Artist incubators · MAD Arts · NWSA · institutional PD',
      toolkitLabel: 'Related AI agents workshop',
      toolkitHref: '/workshop/the-art-of-ai-agents',
      relatedHref: '/artist-infrastructure#curriculum',
      relatedLabel: 'See incubator curriculum',
      inquiryHref: INSTITUTIONAL_CALENDLY_URL,
      inquiryLabel: 'Inquire about this module',
    },
    {
      id: 'vibe-coding',
      title: 'Vibe Coding and Net Art',
      promise:
        'Build small interfaces, tools, and experimental net-art projects without a traditional CS path—websites are one possible output, not the lead promise.',
      body:
        'Method-first creative coding for artists: interfaces, generative pages, and lightweight tools artists can maintain. Complements entrepreneurial / web-presence curricula rather than competing with them.',
      audience: 'Artists and creative practitioners new to code.',
      prerequisites: 'Curiosity and a laptop; no prior programming required.',
      duration: '90 min guest · or 3 hours workshop · multi-session lab optional',
      capacity: '8–10 participants',
      outcomes: [
        'Ship a shareable interactive piece or tool',
        'Understand vibe coding as artistic method, not product tutorial',
        'Know how to iterate without becoming a full-stack engineer',
      ],
      artifact: 'A published or exportable interactive project (site, tool, or net-art page).',
      agenda: [
        'Net art and interface as medium',
        'Prompted / assisted coding with critique',
        'Personalization: text, image, behavior',
        'Publish / export and next steps',
      ],
      setup: 'Laptops, browsers, projector; optional GitHub / hosting accounts.',
      formats: ['Guest session', 'Co-taught module', 'Studio lab series'],
      priceLabel: `${PILOT_PRICING.seat.display} / seat · or ${PILOT_PRICING.hostedFlat.display} hosted`,
      fits: 'Incubators · FIU / RA+DI · NWSA Visual Arts · MAD Arts',
      toolkitLabel: 'Related digital presence program',
      toolkitHref: '/workshop/own-your-digital-presence',
      relatedHref: '/artist-infrastructure#curriculum',
      relatedLabel: 'See incubator curriculum',
      inquiryHref: INSTITUTIONAL_CALENDLY_URL,
      inquiryLabel: 'Inquire about this module',
    },
    {
      id: 'prototyping',
      title: 'Creative Technology Prototyping and Digital Fabrication',
      promise:
        'From idea to shared-facility prototype: fabrication literacy, documentation, and production workflows for institutional labs.',
      body:
        'Practical workflows around digital fabrication, AI-assisted prep, equipment readiness, and collaborative production—so tools become artist infrastructure.',
      audience: 'Digital labs, fabrication programs, and artists using shared facilities.',
      prerequisites: 'Interest in making physical or hybrid prototypes; safety orientation provided.',
      duration: '3 hours · one session · multi-session curriculum available',
      capacity: '8 participants typical for supervised fabrication',
      outcomes: [
        'Walk a file → tool → finish → hand-off path',
        'Document a repeatable workflow for the host lab',
        'Know when to ask for supervised print or consultation',
      ],
      artifact: 'A documented workflow map tied to the host facility (and optional small prototype).',
      agenda: [
        'Facility tour and safety framing',
        'File readiness and tool choice',
        'Supervised demo / making block',
        'Documentation templates and open-lab habits',
      ],
      setup: 'Access to lab tools under supervision; projector; printed or digital guides.',
      formats: ['Guest session', 'Co-taught module', 'Program co-design sprint'],
      priceLabel: `${PILOT_PRICING.seat.display} / seat · or ${PILOT_PRICING.hostedFlat.display} hosted`,
      fits: 'Digital labs · NWSA · fabrication programs · public workshops',
      toolkitLabel: 'Oolite Digital Lab proof',
      toolkitHref: '/oolite-arts',
      relatedHref: '/artist-infrastructure#curriculum',
      relatedLabel: 'See incubator curriculum',
      inquiryHref: INSTITUTIONAL_CALENDLY_URL,
      inquiryLabel: 'Inquire about this module',
    },
  ],
} as const;
