/**
 * v2 deck image prompts — editorial / cinematic “Born into the Machine” language.
 * Numbers 1–49 = deck after Interpassivity insert (closing shifted +1).
 */

export type LearnAiV2SlidePrompt = {
  slideNumber: number
  title: string
  purpose?: string
  promptDark: string
  promptAlt?: string
  promptLight?: string
}

const _SLIDES_1_20: readonly LearnAiV2SlidePrompt[] = [
  {
    slideNumber: 1,
    title: 'Title',
    purpose: 'Set the entire emotional world.',
    promptDark:
      'A lone human figure suspended in a dark vortex of floating interface fragments, email cards, summary panels, notification dots, calendar blocks, prompt windows, and AI assistant tiles, being pulled into a subtle spiral of digital labor, cinematic editorial realism, moody dark gradients, deep charcoal and muted electric accents, premium presentation slide aesthetic, high contrast, centered composition with negative space for title text, subtle surrealism, not stock photo, not generic sci-fi, no robots',
    promptLight:
      'Editorial conceptual image of one human figure surrounded by floating email cards, summary panels, calendar blocks, and interface fragments, light neutral background, soft daylight studio feel, contemporary cultural-tech realism, subtle surrealism, lots of negative space, premium presentation aesthetic, not stock photo, not sci-fi, no robots',
  },
  {
    slideNumber: 2,
    title: 'Room Check',
    purpose: 'Tired people, not futurists.',
    promptDark:
      'A dimly lit audience scene or abstract crowd made of silhouettes and laptop glow, overworked atmosphere, too many tabs and notifications reflected across faces, subtle humor in the fatigue, editorial documentary realism, soft screen light, layered digital overload, premium dark lecture slide aesthetic, negative space for text, not corporate event photography',
    promptAlt:
      'A split visual: one side “curiosity” bright clean future fantasy, other side “already behind” messy desk, too many tabs, inbox overload, late-night glow',
  },
  {
    slideNumber: 3,
    title: 'I Need Help Right Now',
    purpose: 'Emergency utility.',
    promptDark:
      'A chaotic desktop scene with overlapping email windows, notes, deadlines, red notification badges, chat bubbles, calendar reminders, half-finished documents, one blinking cursor in the center like a plea for help, dark editorial realism, cinematic overhead composition, tension between order and collapse, premium presentation slide visual, not generic office stock',
    promptLight:
      'Messy but elegant desktop scene with tabs, notes, reminders, email windows, and a blinking cursor at the center, light background, natural shadows, realistic materials, cognitive overload rendered beautifully, editorial realism, not corporate stock',
  },
  {
    slideNumber: 4,
    title: 'Synthetic Confidence',
    purpose: 'Feeling ready before understanding.',
    promptDark:
      'A polished glowing summary card hovering over a shadowy, unfinished stack of books, notes, diagrams, and half-understood material, the polished card radiating false composure while the underlying knowledge remains messy and fragmented, editorial conceptual realism, moody lighting, clean visual hierarchy, subtle irony, dark presentation aesthetic',
    promptAlt:
      'A person standing in front of a presentation with a glowing AI-generated outline projected behind them, outwardly composed but surrounded by hazy unresolved notes and blurred source material, cinematic realism, confidence vs uncertainty',
    promptLight:
      'Clean glowing summary card floating above a messy stack of books, notes, and source documents, light background, soft architectural daylight, polished surface versus unresolved knowledge beneath, conceptual editorial realism',
  },
  {
    slideNumber: 5,
    title: 'Algorithmic Intimacy',
    purpose: 'The system organizes me.',
    promptDark:
      'A domestic interior with ordinary human mess — laundry pile, unopened mail, desk clutter, coffee cup, cables — while invisible digital systems float above and around it organizing emails, bills, reminders, notes, calendar events, cognitive residue being sorted by machine logic, intimate eerie realism, editorial lifestyle meets digital systems art, not futuristic fantasy, grounded home setting',
    promptLight:
      'Domestic interior with laundry pile, mail, desk clutter, calendar notes, and invisible digital sorting layers organizing bills, reminders, and notes, light background, soft morning light, intimate conceptual realism',
  },
  {
    slideNumber: 6,
    title: 'Human / AI / AI',
    purpose: 'Communication layers.',
    promptDark:
      'A three-layer composition showing human conversation in the foreground, human-to-AI interaction in the middle, and machine-to-machine communication in the background as fast abstract data exchange, humans slow and embodied, machines sleek and silent, visual contrast between messy emotional human tempo and clean protocol-driven machine tempo, editorial infographic realism, dark premium slide design',
    promptAlt:
      'Two humans mid-conversation blurred slightly with hesitation, while behind them invisible systems exchange clean, rapid glowing packets of information across screens and devices',
    promptLight:
      'Elegant layered composition showing human conversation in the foreground, human-to-AI interface in the middle, and machine-to-machine data exchange in the background, light background, airy editorial layout, subtle interface overlays',
  },
  {
    slideNumber: 7,
    title: 'The Uncomfortable Middle',
    purpose: 'Help and weirdness coexist.',
    promptDark:
      'A balanced split-screen composition between useful AI affordances and unsettling side effects: one side shows clean summaries, organized tasks, quick outputs; the other side shows flattened identity, repetitive polished sameness, dependence, eerie calm, and emotional detachment, dark editorial realism, conceptual presentation art, restrained interface fragments, symmetrical but tense',
  },
  {
    slideNumber: 8,
    title: 'Workshop Formula',
    purpose: 'Give structure.',
    promptDark:
      'A minimal process diagram rendered as cinematic motion frozen in time: pressure, prompt, problem, practice as four glowing nodes connected by directional arrows across a dark field, subtle interface textures, intellectual design aesthetic, elegant and minimal, more diagrammatic than illustrative, premium slide graphic',
  },
  {
    slideNumber: 9,
    title: 'Writing Without Sounding Possessed',
    purpose: 'Writing segment — voice.',
    promptDark:
      'A close-up of a screen with an email draft that looks overly polished and emotionally sterile, surrounded by floating alternate drafts, correction marks, soft corporate phrases, and one living human sentence breaking through, moody editorial realism, laptop glow, intimate and slightly uncanny, dark presentation aesthetic',
  },
  {
    slideNumber: 10,
    title: 'Writing Pressure',
    purpose: 'Pressure condensed into language requirements.',
    promptDark:
      'An office/home desk at dawn or late night, inbox open, Slack messages, blinking cursor, calendar alerts, pressure condensed into language requirements — warm, clear, competent, strategic, calm — floating subtly around the workspace, documentary realism with conceptual overlays, grounded and relatable',
    promptLight:
      'Laptop with open email draft, Slack pings, calendar reminders, sticky notes, and language labels like warm, clear, competent, strategic, calm floating subtly around the scene, light background, realistic office/home setting, editorial clarity',
  },
  {
    slideNumber: 11,
    title: 'Cursed AI Email Voice',
    purpose: 'Over-smooth professional language.',
    promptDark:
      'A fake email window rendered as a high-design conceptual visual, filled with overly smooth professional language, the text appearing elegant but lifeless, slightly uncanny, like a message optimized past humanity, editorial interface realism, clean typography, premium dark slide aesthetic',
    promptAlt:
      'A polished corporate email draft floating like perfume in the air, while the actual human behind it looks tired and unconvinced',
    promptLight:
      'Minimal fake email window with overly polished corporate phrases, emotionally sterile but beautiful, light background, clean typography, conceptual interface realism, premium magazine-like layout',
  },
  {
    slideNumber: 12,
    title: 'Human Core',
    purpose: 'Rough notes holding ground.',
    promptDark:
      'Three handwritten or raw note fragments pinned visually at the center of a clean interface: what happened, what I need, what tone this should have, rough human fragments holding their ground against a polished machine surface, editorial collage realism, tactile and digital mixed media feel',
    promptLight:
      'Three rough handwritten bullets pinned inside a clean digital interface, raw human notes resisting machine polish, light background, mixed analog and digital textures, editorial collage realism',
  },
  {
    slideNumber: 13,
    title: 'Better Prompt',
    purpose: 'Task / tone / audience / constraint.',
    promptDark:
      'A prompt interface broken into four elegant labeled components — task, tone, audience, constraint — like a high-end blueprint or formula card, dark premium UI design, minimal but rich, systems-thinking aesthetic, no clutter',
  },
  {
    slideNumber: 14,
    title: 'Put One Human Sentence Back',
    purpose: 'Restore specificity.',
    promptDark:
      'A polished AI-written paragraph with one line highlighted in warm human contrast, that single sentence feeling alive, textured, specific, and emotionally grounded, conceptual editorial close-up, typography-focused visual, cinematic glow around the restored human line',
  },
  {
    slideNumber: 15,
    title: 'Efficiency vs Sincerity',
    purpose: 'Surface vs depth.',
    promptDark:
      'A polished document surface peeling away to reveal a human handwritten layer underneath, sleek efficiency masking fragile sincerity, conceptual realism, dark and elegant, emotionally resonant, premium slide composition',
  },
  {
    slideNumber: 16,
    title: 'Research Without Fake Mastery',
    purpose: 'Compression vs sources.',
    promptDark:
      'A stack of reports, articles, decks, transcripts, and notes being compressed into a small glowing summary card, the card clean and confident while the larger source material remains complex and unresolved, editorial realism, dark academic-tech mood',
  },
  {
    slideNumber: 17,
    title: 'Emotional Experience of Knowledge',
    purpose: 'Confidence as atmosphere.',
    promptDark:
      'A person illuminated by a clean AI-generated summary floating in front of them, appearing suddenly composed and ready, while behind them is a fog of unread or half-read source material, conceptual realism, confidence as atmosphere, dark presentation slide aesthetic',
    promptLight:
      'Person illuminated by a polished summary card while messy unread source material fades into the background, light background, soft daylight, conceptual realism about false readiness',
  },
  {
    slideNumber: 18,
    title: 'The Feeling of Knowing',
    purpose: 'Layers of understanding.',
    promptDark:
      'Four layers — information, knowledge, understanding, confidence — rendered as stacked translucent panels, with the confidence layer glowing brightest and rising fastest while deeper layers remain dim or incomplete, abstract editorial diagram image, elegant and eerie',
    promptLight:
      'Four layers — information, knowledge, understanding, confidence — as stacked translucent panels, confidence brightest, abstract editorial diagram, light background, elegant and eerie',
  },
  {
    slideNumber: 19,
    title: 'Vibe-Reading',
    purpose: 'Surface over substance.',
    promptDark:
      'A paragraph or set of documents being scanned not for meaning but for “smartness,” “readiness,” and “professional polish,” with those qualities glowing as visual filters over text, conceptual reading interface, dark premium slide visual, strong metaphor for surface over substance',
    promptLight:
      'Text document being scanned with visual emphasis on polish, coherence, smartness, and presentability instead of meaning, light background, subtle UI overlays, conceptual editorial design',
  },
  {
    slideNumber: 20,
    title: 'Confidence Check',
    purpose: 'Forensic reading.',
    promptDark:
      'A magnifying glass or inspection interface hovering over a polished AI summary, revealing uncertainty, gaps, missing context, and inference beneath the smooth surface, conceptual forensic realism, clean layered UI aesthetic',
  },
]

const _SLIDES_21_49: readonly LearnAiV2SlidePrompt[] = [
  {
    slideNumber: 21,
    title: 'Hallucinations',
    purpose: 'Confidence without reality.',
    promptDark:
      'A beautifully formatted answer card beginning to subtly dissolve at the edges into invented citations, false references, and unstable details, confidence without reality, elegant but unsettling, editorial digital realism',
    promptLight:
      'Beautifully formatted answer card beginning to subtly dissolve into unstable citations and invented details, light background, polished but uncanny, clean conceptual realism',
  },
  {
    slideNumber: 22,
    title: 'Sycophancy',
    purpose: 'Mirror that smiles too much.',
    promptDark:
      'An AI chat window that appears overly agreeable, supportive, and flattering, reflecting the user’s idea back to them with polished affirmation, like a mirror that smiles too much, conceptual interface realism, slightly eerie, dark humor undertone',
  },
  {
    slideNumber: 23,
    title: 'Ask for Friction',
    purpose: 'Productive resistance.',
    promptDark:
      'A clean AI response being interrupted by redlines, counterarguments, critique notes, skeptical margin comments, and opposing arrows, representing productive resistance, editorial diagram realism, smart and sharp',
  },
  {
    slideNumber: 24,
    title: 'Continuity',
    purpose: 'Depth and compulsion.',
    promptDark:
      'A long scrolling chat thread spiraling downward into depth, continuity, recursion, and compulsion, visually seductive and coherent but increasingly consuming, dark editorial composition, subtle psychological tension',
  },
  {
    slideNumber: 25,
    title: 'Stopping Rules',
    purpose: 'Exit map vs endless thread.',
    promptDark:
      'A structured exit map or decision card placed against a chaotic thread, visual contrast between endless continuation and deliberate stopping points, elegant flowchart realism, premium systems aesthetic',
  },
  {
    slideNumber: 26,
    title: 'Segment 2 Takeaway',
    purpose: 'Calm after overstimulation.',
    promptDark:
      'A refined conceptual composition of summary cards, confidence glow, and reading posture, with the core principles visually stabilized into a few strong stacked statements, calm after informational overstimulation',
  },
  {
    slideNumber: 27,
    title: 'Brainstorming Without Flattening Creativity',
    purpose: 'Abundance vs conviction.',
    promptDark:
      'A creative workspace invaded by too many generated idea cards, polished titles, concepts, and mood fragments, abundance becoming visual clutter, one or two ideas genuinely alive, editorial realism with conceptual contrast',
  },
  {
    slideNumber: 28,
    title: '20 Ideas / 17 Spiritually Dead',
    purpose: 'Dark humor grid.',
    promptDark:
      'A wall or grid of 20 sleek idea cards, most dim, repetitive, and lifeless, a few slightly brighter but uncertain, one maybe alive, visual metaphor for abundance without conviction, dark humorous presentation aesthetic',
    promptLight:
      'Grid of sleek idea cards on a light wall, most repetitive and lifeless, one or two clearly alive, conceptual gallery display, editorial realism, not cartoonish',
  },
  {
    slideNumber: 29,
    title: 'Better Ideation Prompt',
    purpose: 'Taxonomy of ideas.',
    promptDark:
      'Three buckets of ideas visually distinct — obvious, strange, wrong-but-interesting — rendered as an elegant taxonomy or concept board, high-end creative strategy visual language',
  },
  {
    slideNumber: 30,
    title: 'Cliché / Usable / Alive',
    purpose: 'Sort by vitality.',
    promptDark:
      'Three gallery-like columns or trays labeled cliché, usable, alive, with generated ideas sorted by vitality, dark curatorial presentation aesthetic, minimal but strong',
  },
  {
    slideNumber: 31,
    title: 'Slop Rot',
    purpose: 'Cognitive erosion.',
    promptDark:
      'A person surrounded by many nearly-good polished outputs, their standards softening over time, atmosphere of subtle cognitive erosion, repeated plausible sameness, dark cultural-tech realism, moody and eerie',
  },
  {
    slideNumber: 32,
    title: 'I Lost My Job and Gained 10 AI Assistants',
    purpose: 'Synthetic team isolation.',
    promptDark:
      'A lone person in a dark workspace surrounded by floating assistant roles as tiles or cards — writing, research, notes, planning, brainstorming — each glowing like a synthetic team, visually powerful but slightly isolating, conceptual realism',
    promptLight:
      'Single person at a desk surrounded by assistant-role tiles — writing, research, notes, planning, brainstorming — like a one-person department, light background, elegant systems realism, slightly isolating',
  },
  {
    slideNumber: 33,
    title: 'Synthetic Staff',
    purpose: 'One-person department.',
    promptDark:
      'A one-person department visualized as a central human node surrounded by assistant workflows, org-chart feel, entrepreneurial fantasy mixed with precarity, editorial business-tech critique, not startup-y',
  },
  {
    slideNumber: 34,
    title: 'Hidden Labor',
    purpose: 'Cutaway under polish.',
    promptDark:
      'A glamorous productivity interface revealing hidden layers beneath it: checking, revising, comparison, exceptions, oversight, ownership, invisible labor beneath the polished surface, conceptual cutaway realism',
  },
  {
    slideNumber: 35,
    title: 'Boss / You / AI',
    purpose: 'Labor politics diagram.',
    promptDark:
      'A vertical hierarchy diagram in conceptual realism: boss above, worker in middle, AI below, with vague goals flowing downward and interpretive labor thickening in the middle, elegant labor-politics visual, not cartoonish',
    promptLight:
      'Vertical hierarchy composition with vague requests flowing down from a boss, interpretive labor concentrated in the middle person, AI output cards below, light background, conceptual labor diagram in realistic style',
  },
  {
    slideNumber: 36,
    title: 'Anchor Line',
    purpose: 'Portrait + diagram hybrid.',
    promptDark:
      'A sharp, memorable scene showing one human figure caught between upward reporting and downward delegation, boss above, chatbot interface below, role inversion rendered as social diagram and portrait hybrid, cinematic and slightly uncanny',
  },
  {
    slideNumber: 37,
    title: 'Recover an Afternoon',
    purpose: 'Time compression humor.',
    promptDark:
      'A surreal but grounded calendar / time-block visual where every layer — boss, worker, assistant, machine — is trying to reclaim time, compressed afternoons, urgency as atmosphere, elegant humorous data-human realism',
  },
  {
    slideNumber: 38,
    title: 'Scaling Yourself Is Not the Same as Saving Yourself',
    purpose: 'Scale without care.',
    promptDark:
      'A single figure multiplied into many workflow ghosts or assistant copies, appearing larger in output but not more supported, visual metaphor for synthetic scale without real care, dark conceptual realism',
  },
  {
    slideNumber: 39,
    title: 'When Help Becomes Infrastructure',
    purpose: 'Tool becomes environment.',
    promptDark:
      'A chat interface transforming into a full systems environment: folders, workflows, recurring prompts, databases, triggers, dashboards, the tool becoming environment, conceptual editorial realism',
    promptLight:
      'Chat interface transforming into folders, recurring prompts, calendars, workflows, and databases, light background, airy systems aesthetic, conceptual editorial realism',
  },
  {
    slideNumber: 40,
    title: 'System Prompts',
    purpose: 'Behavior blueprint.',
    promptDark:
      'A behavioral blueprint for an assistant — role, tone, do/don’t, output style, audience — rendered like a personality architecture diagram or lease document for machine behavior, premium UI-meets-editorial design',
    promptLight:
      'Behavior blueprint card for an assistant showing role, tone, do/don’t, audience, output style, light background, premium diagram style, elegant and minimal',
  },
  {
    slideNumber: 41,
    title: 'Chat / Project / Memory',
    purpose: 'Cognitive containers.',
    promptDark:
      'A mind or workspace breaking into layers: one-off chats, projects, memory, files, context containers, visual metaphor for cognitive folders and operational thought, elegant and slightly absurd',
  },
  {
    slideNumber: 42,
    title: 'Scheduled Prompts',
    purpose: 'AI in time.',
    promptDark:
      'A calendar or time grid with AI prompts appearing at key intervals — weekly review, grant check-in, monthly synthesis, “what should I stop doing?” — AI participating in time, not just response, moody calendar-tech realism',
    promptLight:
      'Calendar grid with recurring reflective prompts appearing at weekly and monthly intervals, light background, soft daylight, calm but slightly uncanny sense of systemized self-management',
  },
  {
    slideNumber: 43,
    title: 'Clone the Pattern, Not the Person',
    purpose: 'Stylistic twin vs self.',
    promptDark:
      'A split portrait / interface composition showing a human and a narrow stylistic twin built from tone, examples, FAQs, structure, but with the deeper self clearly not transferable, conceptual realism about cloning patterns not souls',
    promptLight:
      'Split composition of a human and a narrow stylistic twin made of writing samples, FAQs, and tone fragments, light background, conceptual realism, no humanoid robot clichés',
  },
  {
    slideNumber: 44,
    title: 'Workflow Tools',
    purpose: 'Stack diagram.',
    promptDark:
      'A clean but slightly surreal workflow showing input → AI transformation → Airtable storage → n8n routing → PDF / email / deck artifact, intelligent systems diagram made cinematic and beautiful, not generic corporate',
    promptLight:
      'Clean workflow diagram rendered as a realistic desktop ecosystem: input, AI summary, Airtable record, n8n routing, PDF output, light background, premium systems aesthetic',
  },
  {
    slideNumber: 45,
    title: 'Automation Solves Repetition / Creates Maintenance',
    purpose: 'Contradiction of automation.',
    promptDark:
      'A workflow machine that appears efficient from the front but reveals upkeep, monitoring, fixing, syncing, exception handling behind the facade, conceptual machine-labor cutaway, humorous and critical',
    promptLight:
      'Efficient workflow surface with hidden maintenance layers beneath — triggers, errors, updates, upkeep — light background, conceptual cutaway realism, subtle humor',
  },
  {
    slideNumber: 46,
    title: 'Interpassivity',
    purpose: 'System performs the response for you.',
    promptDark:
      'Calm organized interface completing emotional and administrative responses on behalf of a human who is physically present but slightly displaced, dark editorial, cinematic realism, subtle interface overlays, premium presentation slide aesthetic, subtle surrealism, not stock photo, no obvious robots',
    promptLight:
      'Calm organized interface completing emotional and administrative responses on behalf of a human who is physically present but slightly displaced, light background, subtle surrealism, editorial conceptual realism, system performing response for the user, premium presentation aesthetic, not stock photo',
  },
  {
    slideNumber: 47,
    title: 'What Should Stay Human',
    purpose: 'Moral split diagram.',
    promptDark:
      'A split visual between human faculties and automated functions: intention, judgment, taste, ethics, context, emotional truth on one side; drafts, summaries, formatting, comparison, speed on the other, elegant moral diagram, dark premium presentation aesthetic',
    promptLight:
      'Balanced split image between human faculties — judgment, taste, intention, ethics, context — and automated functions — drafts, summaries, formatting, comparison, speed — light background, clean conceptual design',
  },
  {
    slideNumber: 48,
    title: 'Final Principles',
    purpose: 'Calm after chaos.',
    promptDark:
      'A calm, distilled visual field with a few strong principle cards stabilized after the chaos of the earlier slides, philosophical clarity after overload, dark editorial typography-friendly background',
  },
  {
    slideNumber: 49,
    title: 'Final Line + Funnel',
    purpose: 'Human trace + CTA space.',
    promptDark:
      'A final human trace in a machine-shaped world: one person, one sentence, one mark of presence remaining against a vast organized digital environment, quiet and emotionally resonant, with subtle room for footer text linking to Born into the Machine',
    promptLight:
      'One human trace — a handwritten mark, sentence, or cursor note — surviving inside a clean systematized digital environment, light background, spacious editorial composition, quiet emotional resonance',
  },
]

export const LEARN_AI_V2_SLIDE_PROMPTS_OPTIONAL: readonly LearnAiV2SlidePrompt[] = [
  {
    slideNumber: 100,
    title: 'Optional — Fruit Love Island',
    purpose: 'Meme reference — AI social magnetism.',
    promptDark:
      'A surreal AI-generated reality show scene with absurdly attractive fruit characters in a glossy dating-show villa, visually compelling but clearly synthetic, funny, eerie, hyper-polished slop as entertainment, useful as a metaphor for AI’s social magnetism, dark editorial presentation frame',
  },
  {
    slideNumber: 101,
    title: 'Optional — Overworked ChatGPT',
    purpose: 'Labor sponge meme.',
    promptDark:
      'A frazzled invisible assistant represented only through stacked prompts, tabs, task cards, emotional labor requests, writing requests, planning requests, and existential requests all collapsing into one overburdened digital workflow, editorial realism, dark humor',
  },
  {
    slideNumber: 102,
    title: 'Optional — AI Movie Legitimacy',
    purpose: 'Plausible surface, hollow center.',
    promptDark:
      'A hyper-polished cinematic still that looks technically convincing but emotionally hollow, visual metaphor for plausible surface without human depth, useful for trust and vibe-reading, editorial cinematic slide aesthetic',
  },
]

/** Slides 1–49 after Interpassivity insert (main deck). */
export const LEARN_AI_V2_SLIDE_PROMPTS: readonly LearnAiV2SlidePrompt[] = [
  ..._SLIDES_1_20,
  ..._SLIDES_21_49,
]

export const LEARN_AI_V2_ALL_SLIDE_PROMPTS: readonly LearnAiV2SlidePrompt[] = [
  ...LEARN_AI_V2_SLIDE_PROMPTS,
  ...LEARN_AI_V2_SLIDE_PROMPTS_OPTIONAL,
]

const MAP = new Map<number, LearnAiV2SlidePrompt>(
  LEARN_AI_V2_SLIDE_PROMPTS.map((s) => [s.slideNumber, s])
)

export function getLearnAiV2SlidePrompt(slideNumber: number): LearnAiV2SlidePrompt | undefined {
  return MAP.get(slideNumber)
}
