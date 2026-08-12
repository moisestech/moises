import { MOONLIGHTER_PLACEHOLDERS } from './placeholders'

export const printAttemptPolicySummary =
  'Your workshop includes one approved print attempt. If that attempt fails because of a qualifying production problem or a repairable mesh problem, one automatic reprint attempt is included. Redesigns, larger sizes, new colors, extra copies, or changes requested after approval are separate from the included recovery attempt.'

export const qualifyingReprintReasons = [
  'First-layer or bed-adhesion failure under the approved setup',
  'Filament feed, runout, tangle, jam, or nozzle/extrusion failure',
  'Machine, power, network, or file-transfer interruption after approval',
  'Support collapse or print detachment under the approved orientation/settings',
  'A bounded mesh defect revealed during slicing/printing that can be repaired without redesigning the concept',
  'Another documented production failure jointly identified by the instructor and Moonlighter operator',
] as const

export const notIncludedInRecovery = [
  'Participant-requested redesign, pose, color, scale increase, or material change',
  'Additional copies or a second creative iteration',
  'A model changed after approval without instructor/Moonlighter review',
  'A concept whose missing or invented geometry requires substantial remodeling',
  'Damage after successful production or pickup',
  'Failure caused by participant handling outside supervised procedures',
] as const

export const repairableMeshMeans = [
  'The original concept and overall form remain unchanged',
  'The adjustment is limited to closing a hole, fixing normals, removing loose/internal fragments, connecting an obvious main mass, thickening a narrowly bounded fragile feature, or stabilizing the base',
  'The repair can be completed with reasonable production effort',
] as const

export const pickupLanguage = {
  pending: MOONLIGHTER_PLACEHOLDERS.pickupPromise,
  publicSafe:
    'Pickup timing is confirmed with Moonlighter after the pilot date is locked. Until then, the site does not promise a fixed one-week turnaround.',
}

export const approvalStates = [
  { id: 'needs_work', label: 'Needs work', description: 'A named fix is required.' },
  { id: 'ready_for_review', label: 'Ready for review', description: 'Participant requests instructor check.' },
  { id: 'approved_in_class', label: 'Approved / in-class', description: 'Assigned to printer and launch order.' },
  { id: 'approved_queued', label: 'Approved / queued', description: 'Due within one week when operationally confirmed.' },
  { id: 'printing', label: 'Printing', description: 'Production has started.' },
  { id: 'recovery', label: 'Recovery', description: 'First attempt failed; automatic qualifying reprint pending.' },
  { id: 'ready_for_pickup', label: 'Ready for pickup', description: 'Participant notified.' },
  { id: 'closed', label: 'Closed', description: 'Collected or otherwise resolved.' },
] as const

export type ApprovalStateId = (typeof approvalStates)[number]['id']
