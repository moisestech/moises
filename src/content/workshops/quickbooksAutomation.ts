/**
 * QuickBooks Automation for Artists — workshop media + landing extras.
 */

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const QUICKBOOKS_AUTOMATION_WORKSHOP_HREF = '/workshop/quickbooks-automation-for-artists';

export const QUICKBOOKS_AUTOMATION_SLIDES = [
  {
    id: 'quickbooks-ai-1',
    src: `${CDN}/v1786389869/dccmiami/workshops/quickbooks-automation-for-artists/quickbooks-ai-for-artists-1_u8maau.png`,
    alt: 'QuickBooks Automation for Artists — slide introducing AI-assisted studio bookkeeping workflows',
    caption: 'QuickBooks + AI for artists — studio bookkeeping overview',
  },
  {
    id: 'quickbooks-ai-2',
    src: `${CDN}/v1786389868/dccmiami/workshops/quickbooks-automation-for-artists/quickbooks-ai-for-artists-2_enkpgw.png`,
    alt: 'QuickBooks Automation for Artists — slide on automating invoices, expenses, and category routing',
    caption: 'Automating invoices, expenses, and categories',
  },
  {
    id: 'quickbooks-ai-3',
    src: `${CDN}/v1786389867/dccmiami/workshops/quickbooks-automation-for-artists/quickbooks-ai-for-artists-3_gxqls0.png`,
    alt: 'QuickBooks Automation for Artists — slide on human review gates and maintainable studio ops templates',
    caption: 'Human review gates and maintainable studio ops',
  },
] as const;

export const QUICKBOOKS_AUTOMATION_COVER = QUICKBOOKS_AUTOMATION_SLIDES[0];

/** Dedicated 2172×724 workshop strip. */
export const QUICKBOOKS_AUTOMATION_BANNER = {
  src: `${CDN}/v1786719735/jobs/banners/quickbooks-automation-artists-banner_xzffns.png`,
  alt: 'QuickBooks Automation for Artists — studio bookkeeping workshop banner',
};

export const QUICKBOOKS_AUTOMATION_AGENDA = [
  {
    title: 'Map the studio money flow',
    description:
      'Invoices, expenses, reimbursements, sales, and grants — what actually moves money in your practice.',
  },
  {
    title: 'Clean categories that artists keep',
    description:
      'A practical QuickBooks chart of accounts shaped for studios, not corporate templates that get abandoned.',
  },
  {
    title: 'Automate only what should be automated',
    description:
      'Route repeats with light AI assist; keep approvals, tax judgment, and edge cases human.',
  },
  {
    title: 'Leave with a runbook',
    description:
      'Weekly hygiene checklist, review gates, and templates you can reopen after the workshop.',
  },
] as const;

export const QUICKBOOKS_AUTOMATION_AUDIENCE = [
  'Working artists and studio managers who already use (or should use) QuickBooks',
  'Residencies and labs that want a teachable studio-ops module',
  'Small creative businesses drowning in spreadsheet ad hocery',
] as const;

export const QUICKBOOKS_AUTOMATION_FORMATS = [
  {
    label: '2–3 hour workshop',
    detail: 'Hands-on mapping + category cleanup + automation boundaries',
  },
  {
    label: 'Institutional booking',
    detail: 'Digilab / residency format with shared templates for cohorts',
  },
  {
    label: 'Studio consult add-on',
    detail: 'Follow-up to wire a specific QuickBooks file and review gates',
  },
] as const;

export const QUICKBOOKS_AUTOMATION_DELIVERABLES = [
  'Studio money-flow map',
  'Category structure draft for QuickBooks',
  'Automation vs human-approval checklist',
  'One-page bookkeeping hygiene runbook',
] as const;
