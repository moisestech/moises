/**
 * Canonical copy for recent automation / ops projects — shared across CV, career packet, and opportunity dossiers.
 */

export type AutomationProjectStatus = 'ready' | 'partial' | 'gap';

export type AutomationProjectSpec = {
  id: string;
  title: string;
  category: string;
  summary: string;
  skillTags: string[];
  status: AutomationProjectStatus;
  evidenceLine: string;
  gapNote?: string;
  imageSrc: string;
  imageAlt: string;
  imageLocal?: boolean;
  href?: string;
};

export const automationProjectSpecs = {
  'n8n-gmail-intelligence': {
    id: 'n8n-gmail-intelligence',
    title: 'n8n Gmail Intelligence Agent',
    category: 'Automation · agentic ops',
    summary:
      'Production n8n workflow with an AI Agent node that reads incoming Gmail, applies structured label routing, and syncs recruiter/opportunity signals into Airtable — turning inbox volume into triageable pipeline data.',
    skillTags: ['n8n', 'Gmail API', 'AI Agent node', 'Airtable', 'Workflow design', 'LLM routing'],
    status: 'ready',
    evidenceLine:
      'Production n8n workflow: AI Agent node classifies incoming Gmail, applies structured labels, and writes recruiter/opportunity signals to Airtable for pipeline triage.',
    gapNote: '[OPTIONAL: add label taxonomy, daily volume, and error-handling detail for interview depth]',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786386766/dccmiami/workshops/the-art-of-ai-agents/n8n-diagram-email-inbox-organizer_nqwn9r.png',
    imageAlt: 'n8n Email Inbox Organizer — Gmail AI Agent classification and label routing workflow diagram',
    imageLocal: false,
    href: '/workshop/the-art-of-ai-agents/share',
  },
  'bookleggers-commerce-automation': {
    id: 'bookleggers-commerce-automation',
    title: 'Bookleggers — Square · Airtable · Make automation',
    category: 'Client ops · commerce sync',
    summary:
      'Live Make.com scenario connecting Square point-of-sale transactions to Airtable — giving Bookleggers Library staff a sales and inventory visibility layer without manual spreadsheet handoffs.',
    skillTags: ['Make.com', 'Airtable', 'Square', 'Commerce ops', 'Client automation', 'Nonprofit'],
    status: 'ready',
    evidenceLine:
      'Live Make + Airtable + Square automation for Bookleggers Library: Square sales/transactions sync into Airtable for inventory and sales-log visibility.',
    gapNote: '[OPTIONAL: add sync frequency, field mapping, and go-live date for case-study depth]',
    imageSrc:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
    imageAlt: 'Bookleggers Library — Square to Airtable commerce automation',
  },
} as const satisfies Record<string, AutomationProjectSpec>;

export type AutomationProjectId = keyof typeof automationProjectSpecs;
