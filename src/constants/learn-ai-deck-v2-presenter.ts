/**
 * Presenter toolbox for Learn AI v2 deck — visual direction, bridges, culture
 * sprinkles, and closing CTA. Consumed by /rehearse Guide + optional UI.
 */

export const LEARN_AI_V2_GLOBAL_VISUAL = {
  overallStyle: [
    'Dark editorial presentation design (alternate: light neutral studio when noted).',
    'Photoreal + interface collage + conceptual realism.',
    'Moody but legible; contemporary cultural-tech aesthetic; subtle surrealism.',
    'Premium typography space; high contrast; minimal composition clutter.',
    'Visual metaphor over literal explanation.',
  ],
  avoid: [
    'Glowing blue robot heads; humanoid chrome androids.',
    'Generic stock-office people smiling at laptops.',
    'Obvious “future city” clichés unless used critically.',
    'Anything that looks like a SaaS homepage hero; startup gradient slop.',
  ],
  coreMotifs: [
    'Browser tabs, email windows, floating text layers, interface fragments.',
    'Admin stacks, folders / records / lists, blurred dashboards.',
    'Over-organized calm surfaces; one human figure against systems.',
    'Machine speed vs human lag; false polish; workflow infrastructure.',
    'Synthetic staff / org charts; document stacks; glowing cards / prompts / notifications.',
  ],
  promptSuffixDark:
    'Dark editorial, cinematic realism, subtle interface overlays, premium presentation slide aesthetic, not stock photo, not generic corporate, no obvious robots.',
} as const

export const LEARN_AI_TRANSITION_PHRASES = [
  'So if that’s the help, here’s the cost.',
  'Which sounds useful, until you look one layer lower.',
  'And once you notice that, the next problem becomes obvious.',
  'That’s the convenience. Now here’s the trade.',
  'This is where the tool stops helping and starts reshaping the conditions around the help.',
  'And if that’s true, then the skill we actually need is…',
  'So the machine gives us the surface. The question is what still belongs to us.',
  'That’s the joke. Here’s why it matters.',
  'That’s the efficiency. Here’s the erosion.',
  'And this is where Born into the Machine starts to matter: the tool is not just assisting the act, it is changing the environment of the act.',
] as const

export const LEARN_AI_CULTURE_INSERTS = {
  fruitLoveIsland:
    'Something like Fruit Love Island is helpful because it shows how AI output can be obviously ridiculous and still socially magnetic. It’s absurd, synthetic, sticky, and people still keep watching — which is a good description of a lot of AI culture right now.',
  aiMoviePlausibility:
    'A lot of AI output has the same problem as the current AI-movie debates: technically plausible surface, emotionally unsettled center. It can look convincing long before it feels legitimate.',
  overworkedAssistant:
    'There’s a reason the “what ChatGPT thinks of me based on my prompts” genre lands. People are using one assistant for writing, summarizing, organizing, emotional formatting, and existential cleanup. The meme is funny because it reveals the labor sponge we’ve built.',
} as const

export const LEARN_AI_FUNNEL_CTA = {
  primary: {
    title: 'Continue with Born into the Machine',
    body: 'Notes, diagrams, workshops, and the evolving book project.',
    hrefNote: 'Primary CTA on final slide / footer — book site first.',
  },
  secondary: {
    title: 'Newsletter',
    body: 'Join from the site for new essays, workshop dates, and tools.',
    hrefNote: 'Secondary line under the primary CTA.',
  },
} as const
