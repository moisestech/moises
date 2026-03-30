/**
 * Live talk script: Part 1 (intro funnel) + Part 2 (opening monologue beats).
 * Replace `imageSrc` / `videoPosterSrc` when assets are ready; placeholders render until set.
 */
export type MonologueMediaKind = 'none' | 'image' | 'video'

export interface MonologueBlock {
  id: string
  part: 1 | 2
  /** Shown in UI, e.g. "Slide 0" or "Beat 4" */
  label: string
  media: MonologueMediaKind
  /** Optional Cloudinary or remote URL — leave undefined for placeholder */
  imageSrc?: string
  videoPosterSrc?: string
  title: string
  subtitle?: string
  paragraphs: string[]
  /** Delivery notes, e.g. "(pause)" — styled distinctly */
  stageNotes?: string[]
}

export const ART_OF_AI_AGENTS_MONOLOGUE_PART1: MonologueBlock[] = [
  {
    id: 'p1-s0',
    part: 1,
    label: 'Slide 0',
    media: 'video',
    title: 'Opening monologue',
    subtitle: 'Artist in the automation',
    paragraphs: [
      'Use this beat for your opening video or live moment. Drop in embed or poster image when the file is ready.',
    ],
    stageNotes: ['Video · replace placeholder when you have the cut.'],
  },
  {
    id: 'p1-s1',
    part: 1,
    label: 'Slide 1',
    media: 'image',
    title: 'Thanks',
    paragraphs: [
      'Thanks everyone for being here tonight, and huge thanks to Locust Projects for hosting this. Also a big thank you to Andrew and the Locust Project team for producing it and making the space for this kind of work.',
    ],
  },
  {
    id: 'p1-s2',
    part: 1,
    label: 'Slide 2',
    media: 'image',
    title: 'Context — school — art practice — institutions',
    paragraphs: [
      "I'm Moises Sanabria. I'm a Venezuelan-born, Miami-based interdisciplinary artist. I went to New World School of the Arts, then transferred to The Cooper Union, where I graduated in 2015. I also attended the School for Poetic Computation in New York. I hold a studio space at Bakehouse Art Complex as part of their digital tech initiative.",
      "Throughout my art practice I've focused on new media sculpture while also taking engineering and coding classes. I've always been interested in how contemporary art and information systems together shape culture, value, and attention.",
      'Today my practice is basically: materializing the internet — making the invisible software and systems we live inside feel tangible and visceral, so we can talk about them, argue with them, and redesign them.',
      'I also work inside institutions. My wife Fabiola Larios and I are the Director of Digital and Technical Director of Digital at Oolite Arts. Together we run the Digital Lab through a Knight Foundation grant, building tools and workflows that support artists without asking them to become engineers.',
    ],
  },
  {
    id: 'p1-s3',
    part: 1,
    label: 'Slide 3',
    media: 'video',
    title: 'Title',
    paragraphs: [
      'The talk today is called: The Art of AI Agents: Artist Task Automation.',
    ],
    stageNotes: ['Video · title card or motion graphic.'],
  },
  {
    id: 'p1-s4',
    part: 1,
    label: 'Slide 4',
    media: 'image',
    title: 'Disclaimer',
    paragraphs: [
      'To be clear: this is not a talk about replacing artists with machines.',
      "It's about reclaiming your agency and time over the systems we already depend on.",
    ],
    stageNotes: ['⚠️ On-screen disclaimer moment.'],
  },
  {
    id: 'p1-s5',
    part: 1,
    label: 'Slide 5',
    media: 'image',
    title: 'Talk overview',
    subtitle: 'n8n',
    paragraphs: [
      "So tonight I'm going to do two things:",
      "First, I'll deliver a short visual thesis monologue — a way to name what happens when tools become persistent, automated, and attention-shaping.",
      "Then I'll open the tool n8n, a web application, and build a simple, real AI agent live, using drag-and-drop interfaces and no code, so you can see the exact moment a tool becomes delegated intelligence: a system that watches, decides, and acts before you touch anything.",
      'Okay.',
    ],
  },
]

export const ART_OF_AI_AGENTS_MONOLOGUE_PART2: MonologueBlock[] = [
  {
    id: 'p2-b1',
    part: 2,
    label: 'Beat 1 · Slide 6',
    media: 'image',
    title: 'We live in a moment',
    subtitle: 'Intelligence as climate · surrounded intelligence',
    paragraphs: [
      "We live in a moment where intelligence is no longer something we occasionally use. Instead, it's something we are increasingly surrounded by.",
    ],
  },
  {
    id: 'p2-b2',
    part: 2,
    label: 'Beat 2 · Slide 7',
    media: 'image',
    title: 'For a long time',
    paragraphs: [
      'For a long time, we understood tools as things we picked up and put down.',
    ],
  },
  {
    id: 'p2-b3',
    part: 2,
    label: 'Beat 3 · Slide 8',
    media: 'image',
    title: 'Tools era',
    paragraphs: [
      'A hammer. A camera. A piece of software. You used it, you finished, you walked away.',
      'But something has shifted.',
    ],
  },
  {
    id: 'p2-b4',
    part: 2,
    label: 'Beat 4 · Slide 9',
    media: 'image',
    title: 'When intelligence becomes',
    paragraphs: [
      'When intelligence becomes persistent, scheduled, remembered, and automated, it stops behaving like a tool and starts behaving like an environment.',
    ],
  },
  {
    id: 'p2-b5',
    part: 2,
    label: 'Beat 5 · Slide 10',
    media: 'image',
    title: 'Live weather',
    paragraphs: ['Like weather.'],
    stageNotes: ['(pause)', "You don't argue with the weather. You don't negotiate with it. You learn how to dress, how to move, how to build shelter inside it.", "That's where we are with AI."],
  },
  {
    id: 'p2-b6',
    part: 2,
    label: 'Beat 6 · Slide 11',
    media: 'image',
    title: 'Most people encounter',
    paragraphs: [
      'Most people encounter AI today as a conversation. A chat window. A question and an answer.',
      "That's an interactive relationship.",
    ],
  },
  {
    id: 'p2-b7',
    part: 2,
    label: 'Beat 7 · Slide 12',
    media: 'image',
    title: 'Inside that interaction',
    paragraphs: [
      "And inside that interaction, something subtle is already happening. We're offloading thinking outside ourselves.",
      'Memory. Drafting. Summarization. Decision scaffolding.',
      'This is cognitive offloading.',
      'At first, it still requires us to be present. We ask. It answers. The thinking moves outside ourselves, but the responsibility stays with us.',
    ],
  },
  {
    id: 'p2-b8',
    part: 2,
    label: 'Beat 8 · Slide 13',
    media: 'image',
    title: 'Offloading acceleration',
    paragraphs: [
      "However, cognitive offloading didn't start with AI. Books were cognitive offloading. Lists were cognitive offloading. Calendars were cognitive offloading.",
      "What's different now is speed, scale, and persistence.",
      "Speed: you don't have to search for the answer (whether it's right or wrong) — it arrives in seconds.",
      'Scale: it can do this for dozens of tasks at once — emails, summaries, drafts, plans.',
      "Persistence: it doesn't just help once — it keeps running, keeps remembering, keeps updating.",
      "And there's also frequency and proximity: we offload more often, and we do it at arm's length — in our pocket, in our inbox, inside the tools we already use.",
      "So cognitive offloading doesn't just store information — it processes it, reshapes it, and prepares the information in advance.",
    ],
  },
  {
    id: 'p2-b9',
    part: 2,
    label: 'Beat 9 · Slide 14',
    media: 'image',
    title: 'From interaction to delegation',
    paragraphs: [
      'And at a certain point, these tools and conversations stop being interactive.',
      'Intelligence becomes embedded in systems. It becomes delegation.',
      'When intelligence runs without you, remembers without you, and begins to shape what reaches your attention before you make a choice — interaction gives way to something else.',
    ],
  },
  {
    id: 'p2-b10',
    part: 2,
    label: 'Beat 10 · Slide 15',
    media: 'image',
    title: 'Interpassivity',
    subtitle: 'Research framing',
    paragraphs: [
      'It transitions into what researchers call interpassivity. Not passivity — but delegation.',
      'The system feels urgency on your behalf. Remembers and decides when something matters — on your behalf.',
    ],
  },
  {
    id: 'p2-b11',
    part: 2,
    label: 'Beat 11 · Slide 16',
    media: 'image',
    title: 'Defining the AI agent',
    subtitle: 'Critical beat',
    paragraphs: [
      'This is the moment a tool becomes an AI agent.',
      'The AI agent begins where the conversation stops.',
      'An AI agent is intelligence you delegate a job to — with memory, context, and the ability to act without you being present.',
      "It doesn't wait for a question. It has a task. Connected to tools, running in a loop, able to notice, decide, and act repeatedly.",
      'This is the moment the tool no longer waits for you, and you gain back your attention.',
    ],
  },
  {
    id: 'p2-b12',
    part: 2,
    label: 'Beat 12 · Slide 17',
    media: 'image',
    title: 'Attention is not neutral',
    paragraphs: [
      'This matters because attention is not neutral.',
      'Attention is a resource. And in platform capitalism, attention is routed.',
      'Not just captured — pre-sorted.',
      'By the time you open your inbox, urgency has already been decided for you. By the time you see a notification, a priority has already been assigned.',
    ],
  },
  {
    id: 'p2-b13',
    part: 2,
    label: 'Beat 13 · Slide 18',
    media: 'image',
    title: 'Burnout and decision density',
    paragraphs: [
      "Burnout doesn't come from working too much. Burnout comes from living inside too many parallel systems that all believe they deserve an immediate response.",
      "Technological acceleration isn't just speed. It's decision density.",
      'Too many demands, too close together, all framed as necessary, all framed as now.',
    ],
  },
  {
    id: 'p2-b14',
    part: 2,
    label: 'Beat 14 · Slide 19',
    media: 'image',
    title: 'The inbox',
    paragraphs: [
      "The inbox is where this decision density becomes bodily.",
      'Contracts. Shipping. Money. Visibility. Obligation.',
      "It's where abstract systems make direct claims on your time, your nervous system, your sense of self.",
      'And artists are not outside of this.',
      'Contemporary art circulates through emails, logistics, PDFs, invoices, deadlines, and platforms.',
      'Artistic meaning is inseparable from the system infrastructure underlying it.',
    ],
    stageNotes: ['(gesture toward inbox, but don’t open it yet)'],
  },
  {
    id: 'p2-b15',
    part: 2,
    label: 'Beat 15 · Slide 20',
    media: 'image',
    title: 'The real question',
    paragraphs: [
      'So the question is not: “Can AI help me work faster?”',
      'The real question is: Who is designing the systems that shape what I pay attention to?',
    ],
  },
  {
    id: 'p2-b16',
    part: 2,
    label: 'Beat 16 · Slide 21',
    media: 'image',
    title: 'Platforms vs. the hacker position',
    paragraphs: [
      'Today, platforms design those systems for profit.',
      'But there is another position — the hacker position, the creative position — which is not about escaping systems, but about rewriting their internal logic.',
      'About rerouting attention toward meaning instead of extraction.',
    ],
  },
  {
    id: 'p2-b17',
    part: 2,
    label: 'Beat 17 · Slide 22',
    media: 'image',
    title: 'Why n8n — and how we continue',
    paragraphs: [
      'Tools like n8n matter not because they are powerful, but because they let individuals build small infrastructures.',
      'Systems that decide what repeats. Systems that decide what waits. Systems that decide what reaches you, and what doesn’t.',
      "This workshop is not about automating your life.",
      "It's about learning to recognize when tools become environments and how to intervene in those environments thoughtfully, ethically, and with intention.",
      "We are born into systems we didn't choose.",
      'But we can learn how they work. We can name them. And we can begin to design small climates of our own — climates that give us back focus, judgment, and time.',
    ],
    stageNotes: [
      '(pause)',
      'From here, we’ll move from theory into a live system. Not as a solution. But as a way to make these forces visible, and negotiable.',
    ],
  },
]

export const ART_OF_AI_AGENTS_MONOLOGUE_ALL: MonologueBlock[] = [
  ...ART_OF_AI_AGENTS_MONOLOGUE_PART1,
  ...ART_OF_AI_AGENTS_MONOLOGUE_PART2,
]
