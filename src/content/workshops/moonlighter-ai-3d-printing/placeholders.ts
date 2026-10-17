/**
 * Moonlighter asset/info register — provisional until partner supplies values.
 * Never present pending values as confirmed operational promises.
 */

export const MOONLIGHTER_SLUG = 'moonlighter-ai-3d-printing' as const

export const MOONLIGHTER_PLACEHOLDERS = {
  dateTime: '[MOONLIGHTER TO CONFIRM], 10:00 AM–4:00 PM',
  registrationUrl: '[REGISTRATION URL PENDING]',
  brandHex: '#FF6B5A',
  brandName: 'Moonlighter FabLab',
  printerModels: 'Bambu Lab P1S (assumed, pending confirmation)',
  nozzlePlateDefaults: '[PENDING MACHINE VALIDATION]',
  plaAccentName: 'Moonlighter coral (provisional)',
  computerCount: '[COMPUTER COUNT PENDING]',
  pickupPromise: '[PICKUP PROMISE PENDING OPERATIONAL SIGN-OFF]',
  additionalPrintBookingUrl: '[MOONLIGHTER LINK PENDING]',
  accessibilityContact: '[ACCESSIBILITY CONTACT PENDING]',
  under18Procedure: '[UNDER-18 WAIVER/MEDIA PROCEDURE PENDING]',
  staffOperator: '[STAFF OPERATOR PENDING]',
  ticketPrice: 150,
  workshopBase: 125,
  markupPercent: 20,
  pilotCapacity: 8,
  conditionalMax: 10,
  ages: '16+',
  durationHours: 6,
} as const

export type MoonlighterPlaceholderKey = keyof typeof MOONLIGHTER_PLACEHOLDERS

/** Instructor working assumption. Not a confirmed Moonlighter fleet inventory. */
export const printerAssumption = {
  status: 'Instructor assumption, pending Moonlighter confirmation.',
  primary: {
    name: 'Bambu Lab P1S',
    role: 'Assumed slicer target for the pilot.',
    note: 'Enclosed FDM. The class slices for this profile unless Moonlighter names a different machine.',
  },
  alternate: {
    name: 'Bambu Lab H2D',
    role: 'Possible, not the default.',
    note: 'Larger bed and a different profile. Used only if Moonlighter confirms one is on the floor.',
  },
  stationNote:
    'The four-printer still shows a supervised station. It is not a confirmed photograph of a P1S or an H2D.',
  settingsNote:
    'Nozzle, plate, and PLA profile stay as whatever this computer shows. Naming the P1S does not publish a Moonlighter-approved layer height.',
} as const
