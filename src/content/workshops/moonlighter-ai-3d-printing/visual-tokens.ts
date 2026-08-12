/** Scoped visual tokens for the Moonlighter workshop microsite only. */

export const moonlighterTokens = {
  paper: '#FFFFFF',
  ink: '#1A1A1A',
  softGray: '#E8E8E8',
  digital: '#277DA8',
  controlled: '#D88A24',
  diagnose: '#CC5A55',
  verified: '#347A52',
  /** FabLab coral — provisional until official brand hex arrives */
  coral: '#FF6B5A',
  charcoal: '#1A1A1A',
  moonlighterAccent: 'var(--ml-accent, #FF6B5A)',
  blackFilament: '#1a1a1a',
  whiteFilament: '#f7f7f5',
} as const

export const moonlighterCssVars: Record<string, string> = {
  '--ml-paper': moonlighterTokens.paper,
  '--ml-ink': moonlighterTokens.ink,
  '--ml-soft-gray': moonlighterTokens.softGray,
  '--ml-digital': moonlighterTokens.digital,
  '--ml-controlled': moonlighterTokens.controlled,
  '--ml-diagnose': moonlighterTokens.diagnose,
  '--ml-verified': moonlighterTokens.verified,
  '--ml-coral': moonlighterTokens.coral,
  '--ml-charcoal': moonlighterTokens.charcoal,
  '--ml-accent': moonlighterTokens.coral,
}
