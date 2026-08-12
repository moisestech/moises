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
  printerModels: '[PRINTER MODELS PENDING]',
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
