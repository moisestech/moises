/** Hero / banner for The Art of AI Agents workshop page */
export const ART_OF_AI_AGENTS_HERO_IMAGE =
  'https://res.cloudinary.com/du1ysiumj/image/upload/v1774829074/the-art-of-ai-agents-locust-projects-the-dill-2026_xjb76m.jpg'

/** Canonical n8n mark for workshop + automation surfaces */
export const N8N_LOGO = {
  src: '/images/tech-logos/n8n.svg',
  alt: 'n8n',
  href: 'https://n8n.io',
} as const

export const ART_OF_AI_AGENTS_WORKSHOP_HREF = '/workshop/the-art-of-ai-agents'
export const ART_OF_AI_AGENTS_EMAIL_SORTER_HREF = '/workshop/the-art-of-ai-agents/share'

/** Locust / DCC Miami — Artist Task Automation + Email Inbox Organizer workshop assets. */
export const ART_OF_AI_AGENTS_SCREENSHOTS = [
  {
    id: 'email-inbox-organizer-diagram',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786386766/dccmiami/workshops/the-art-of-ai-agents/n8n-diagram-email-inbox-organizer_nqwn9r.png',
    alt: 'n8n Email Inbox Organizer workflow diagram — Gmail trigger, AI Agent classification, label routing, and structured outputs.',
    caption: 'Email Inbox Organizer — n8n workflow diagram',
  },
  {
    id: 'artist-task-automation-1',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786386093/dccmiami/workshops/the-art-of-ai-agents/The-Art-of-AI-Agents-Artist-Task-Automation-1_qy9zl2.png',
    alt: 'The Art of AI Agents — Artist Task Automation slide: map studio work into human-supervised agent workflows (n8n, Make, Airtable, Notion).',
    caption: 'Artist Task Automation — mapping studio work into agent-ready workflows',
  },
  {
    id: 'artist-task-automation-2',
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786386094/dccmiami/workshops/the-art-of-ai-agents/The-Art-of-AI-Agents-Artist-Task-Automation-2_yormr5.png',
    alt: 'The Art of AI Agents — Artist Task Automation slide: turn studio chaos into a readable AI agent system with human review gates.',
    caption: 'From studio chaos to a readable AI agent system',
  },
] as const

/** Primary Email Inbox Organizer diagram (Locust workshop build). */
export const ART_OF_AI_AGENTS_EMAIL_INBOX_DIAGRAM = ART_OF_AI_AGENTS_SCREENSHOTS[0]
