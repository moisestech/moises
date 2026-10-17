/**
 * Level I is a competency. Core and Studio are two ways to deliver it.
 * Studio has no public price in this pass.
 */

export const LEVEL_I_COMPETENCY =
  'Decide what deserves attention today, say why, name what can wait, and leave one friction as evidence.'

export const LEVEL_I_CORE = {
  id: 'core',
  name: 'Core',
  duration: '90 minutes',
  audience: 'Accelerators, institutions, and a first useful version.',
  includes: [
    'One 30-day outcome',
    'Founder Profile',
    'Attention Rules',
    'Daily Operator',
    'One real Daily Operating Brief',
    'A challenge of the first item against the second',
    'Fact, interpretation, and recommendation',
    'One friction',
    'The seven-day experiment',
  ],
} as const

export const LEVEL_I_STUDIO = {
  id: 'studio',
  name: 'Studio',
  duration: '2.5–3 hours',
  audience: 'A deeper room, with more live work and stronger completion support.',
  adds: [
    'More time to build in the room',
    'Deeper tradeoff coaching',
    'A second Daily Operating Brief after the critique',
    'An explicit choice: delegate, retain, redesign, or automate',
    'A peer or facilitator challenge',
    'More help finishing the artifacts',
    'A stronger reflection after the session',
  ],
} as const

export const LEVEL_I_DELIVERY = {
  competency: LEVEL_I_COMPETENCY,
  core: LEVEL_I_CORE,
  studio: LEVEL_I_STUDIO,
} as const
