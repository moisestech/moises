/** Scoped visual tokens for the Moonlighter workshop microsite only. */

export const moonlighterTokens = {
  paper: '#F4F1E8',
  ink: '#171916',
  softGray: '#D8D7D0',
  digital: '#277DA8',
  controlled: '#D88A24',
  diagnose: '#CC5A55',
  verified: '#347A52',
  moonlighterAccent: 'var(--ml-accent, #277DA8)',
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
  '--ml-accent': moonlighterTokens.digital,
}
