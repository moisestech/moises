export const AEP_CAPACITY_LINE =
  'I design the harness around the model: citations fail closed, a person approves writes, and the trail is inspectable.'

export const AEP_THIN_SLICE_LINE =
  'I sit with the workflow, ship a reviewable slice, and leave an owner who can operate it without me.'

export const AEP_HONESTY_LINE =
  'Reference implementation with synthetic fixtures and a fake-provider eval harness — not a hosted product, not Deloitte client work, not a live-model quality claim.'

export const AEP_WORKSHOP_PAGE_PAD =
  'pt-[calc(var(--site-header-expanded-height,10rem)+2rem)] md:pt-[calc(var(--site-header-expanded-height,10rem)+2.75rem)]'

export const AEP_WORKSHOP_SCROLL_MT =
  'scroll-mt-[calc(var(--site-header-height,5rem)+3.5rem)]'

export const AEP_JUMP_NAV = [
  { id: 'capacity', label: 'Capacity', tone: 'inspect' },
  { id: 'harness', label: 'Harness', tone: 'inspect' },
  { id: 'authority', label: 'Authority', tone: 'ask' },
  { id: 'code', label: 'Code', tone: 'deny' },
  { id: 'process', label: 'Thin slice', tone: 'allow' },
  { id: 'repo', label: 'Repo', tone: 'inspect' },
] as const
