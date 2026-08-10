/**
 * Soft field maps for LIFE OS Inbox / Actions / Projects.
 * Confirmed via `npm run life-os:discover` against base apprswzWnLrHBwFcx.
 * Override with AIRTABLE_LIFE_OS_*_FIELD_* if columns rename.
 */

function env(key: string, fallback: string): string {
  return process.env[key]?.trim() || fallback;
}

/** Inbox `tblUQXkg1OTMDsBc9` */
export const INBOX_FIELDS = {
  title: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_TITLE', 'Raw Input'),
  status: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_STATUS', 'Inbox Action State'),
  company: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_COMPANY', 'Sender / Source'),
  role: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_ROLE', 'Processing Target'),
  url: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_URL', 'Email Thread URL'),
  notes: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_NOTES', 'Suggested Summary'),
  priority: () => env('AIRTABLE_LIFE_OS_INBOX_FIELD_PRIORITY', 'Urgency'),
} as const;

/** Actions `tblzQ5bVKCXrsc0IU` (table from the shared Airtable URL) */
export const ACTIONS_FIELDS = {
  title: () => env('AIRTABLE_LIFE_OS_ACTIONS_FIELD_TITLE', 'Action Title'),
  status: () => env('AIRTABLE_LIFE_OS_ACTIONS_FIELD_STATUS', 'Status'),
  project: () => env('AIRTABLE_LIFE_OS_ACTIONS_FIELD_PROJECT', 'Project Name (from Project)'),
  due: () => env('AIRTABLE_LIFE_OS_ACTIONS_FIELD_DUE', 'Due Date'),
  notes: () => env('AIRTABLE_LIFE_OS_ACTIONS_FIELD_NOTES', 'Draft Output'),
  priority: () => env('AIRTABLE_LIFE_OS_ACTIONS_FIELD_PRIORITY', 'Priority'),
} as const;

/** Projects `tblRp4584Q9MXdGiu` */
export const PROJECTS_FIELDS = {
  title: () => env('AIRTABLE_LIFE_OS_PROJECTS_FIELD_TITLE', 'Project Name'),
  status: () => env('AIRTABLE_LIFE_OS_PROJECTS_FIELD_STATUS', 'Status'),
  summary: () => env('AIRTABLE_LIFE_OS_PROJECTS_FIELD_SUMMARY', 'Why It Matters'),
  notes: () => env('AIRTABLE_LIFE_OS_PROJECTS_FIELD_NOTES', 'Next Milestone'),
  url: () => env('AIRTABLE_LIFE_OS_PROJECTS_FIELD_URL', 'Strategic Value'),
} as const;

/**
 * Default view on the shared URL — lives on **Actions**, not Inbox.
 * https://airtable.com/apprswzWnLrHBwFcx/tblzQ5bVKCXrsc0IU/viwCBm6vyBOpjYzFK
 */
export const LIFE_OS_ACTIONS_VIEW_DEFAULT = 'viwCBm6vyBOpjYzFK';

/** @deprecated Use LIFE_OS_ACTIONS_VIEW_DEFAULT — kept for older env docs */
export const LIFE_OS_INBOX_VIEW_DEFAULT = LIFE_OS_ACTIONS_VIEW_DEFAULT;

/** Known table ids (override via env). */
export const LIFE_OS_TABLE_IDS = {
  inbox: 'tblUQXkg1OTMDsBc9',
  actions: 'tblzQ5bVKCXrsc0IU',
  projects: 'tblRp4584Q9MXdGiu',
  opportunities: 'tblaAA3eyXUc1tIrc',
} as const;

/** Opportunities `tblaAA3eyXUc1tIrc` — jobs, grants, residencies, contracts */
export const OPPORTUNITIES_FIELDS = {
  title: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_TITLE', 'Opportunity Name'),
  type: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_TYPE', 'Opportunity Type'),
  stage: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_STAGE', 'Stage'),
  decision: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_DECISION', 'Decision'),
  deadline: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_DEADLINE', 'Deadline'),
  url: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_URL', 'URL'),
  nextAction: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_NEXT_ACTION', 'Next Action'),
  notes: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_NOTES', 'Notes'),
  potentialValue: () => env('AIRTABLE_LIFE_OS_OPP_FIELD_VALUE', 'Potential Value'),
} as const;
