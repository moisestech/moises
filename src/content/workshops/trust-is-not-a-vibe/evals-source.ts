import type { TrustChapterId, TrustRoleId } from './types'

/**
 * English teaching source adapted from Aishwarya Srinivasan,
 * “The Hardest Part of Building Agents.”
 *
 * The uploaded captions are English spoken in a Hindi register and
 * written in Devanagari. This file is the lab’s teaching English —
 * not a phonetic dump, and not a sponsor or academy pitch.
 */

export const EVALS_SOURCE = {
  title: 'The Hardest Part of Building Agents',
  speaker: 'Aishwarya Srinivasan',
  languageNote:
    'Source lecture spoken in Hindi-register English. Teaching language in this lab is English.',
  honesty:
    'Vocabulary and the eval loop are adapted from that public lecture. The cases, four seats, peel layers, and Allow / Ask / Deny frame are ours. We do not teach the sponsor demo or the academy pitch.',
  skip: [
    { clock: '9:48–12:20', reason: 'Sponsor block — custom demo generator / coding-agent product pitch.' },
    { clock: '21:27–end', reason: 'Academy certification, partner credits, and channel close.' },
  ],
} as const

export type EvalsTranslationBeat = {
  clock: string
  heading: string
  chapterId: TrustChapterId
  body: string
}

export const EVALS_TRANSLATION: readonly EvalsTranslationBeat[] = [
  {
    clock: '0:00–1:06',
    heading: 'The hard part is not building the agent',
    chapterId: 'looks-right',
    body: 'Nobody really tells you this when you start building AI agents. The hardest part is not building the agent. Building is the fun part. The hard part is knowing whether the thing you just built is actually any good. You wire up an agent, give it tools, run it once. It does something that looks kind of magical, and you go: yes, it works. But does it? Working that one time you tried is not the same as working in production. That gap — the little voice asking “but does it actually work?” — has a name. Evaluation. Evals, for short. If you ever want to put an agent into production, this is one of the most important things to understand.',
  },
  {
    clock: '1:07–3:09',
    heading: 'What we will cover — and what we will not guess',
    chapterId: 'looks-right',
    body: 'Three moves. First: what an AI eval is, and how it differs from the evaluation people have done in machine learning for years. Second: the actual numbers that tell you how good the system is, and which ones to reach for on different tasks. Third: the workflow that ties it together, starting with a golden dataset. A lot of people are learning to build agentic systems. The teams that actually get agents into production — coding agents, real customer-support agents — are not guessing. They are not doing vibe evals. They are measuring.',
  },
  {
    clock: '3:09–3:52',
    heading: 'What an AI eval is',
    chapterId: 'the-loop',
    body: 'An AI eval is a structured way of measuring how good your AI outputs really are. Instead of eyeballing a couple of answers and going “yeah, that looks fine to me,” you set up a small repeatable process that gives you an actual score. That score answers the only question that matters here: is my AI agent getting better, or did I do something to break it? Every time you change a prompt, swap a model, or tweak retrieval, an eval tells you whether you helped the agent or silently broke something.',
  },
  {
    clock: '3:53–4:54',
    heading: 'Benchmarks versus evals',
    chapterId: 'seeded-failures',
    body: 'A fair question: isn’t that just benchmarks? Leaderboards exist — SWE-bench for coding, τ-bench for customer-service agents, Terminal-Bench for command-line work, and indexes that mash several of those into one score. Benchmarks test the model. They are a generic test. The same test is used for every model. AI evals test your specific agentic system, on your task, with your data. Those are different things. A model can sit at the top of every leaderboard and still fall apart on your use case, because that benchmark never saw your data, your prompt, or your users. Benchmarks are useful for picking which models to start with. Evals are how you find out whether the thing actually works for you.',
  },
  {
    clock: '4:55–5:42',
    heading: 'An agent is a chain of decisions',
    chapterId: 'seeded-failures',
    body: 'An agent is not just one answer. It is a whole chain of decisions. It picks a tool, calls it, reads the result, decides what to do next, and on and on. There are a lot of places those things can quietly go sideways. When your agent breaks in production, you need to know where, and you need to know why. You are not going to figure that out by reading transcripts one at a time at 2 a.m. The source lecture cites research from this year showing a roughly one-third gap between how models score in the lab and how they do in real deployed work. We treat that as a reason to close the gap before users feel it — not as a number this lab measured. Evals are how you close that gap.',
  },
  {
    clock: '5:44–7:58',
    heading: 'From multiple choice to essay',
    chapterId: 'the-loop',
    body: 'Evaluation is not new. We have been doing it for machine learning and even for statistical models. The old way was easier, and it is worth knowing why. In traditional machine learning the output was usually clean: a category (spam or not spam), a number (a predicted house price), a simple yes or no. Grading was clean too. You had a test set with the right answers, you compared the model’s prediction, and you calculated accuracy, precision, recall, F1. Everyone agreed on what correct meant. Think of it as a multiple-choice test. There is an answer key. With large language models and agents, the output is not a tidy category anymore. It is open-ended text, or a whole sequence of actions. Most of the time there is not one single correct answer. Ask for a summary of an article and there could be a hundred good summaries and a hundred bad ones, and two great summaries can look completely different. You cannot check it against an answer key, because there is no answer key. We went from grading multiple choice to grading an essay. There is no single right answer. You need a rubric, and someone has to use judgment. That is why AI evals are messier and more qualitative than the ML evals you might be used to. Once the rubric mindset clicks, everything else gets simpler.',
  },
  {
    clock: '7:58–9:48',
    heading: 'Four metrics — and the mix depends on the task',
    chapterId: 'the-loop',
    body: 'There are a dozen metric names and it all feels like alphabet soup. You only need to reach for a handful again and again. Relevance: did the output actually answer what was asked. Faithfulness — sometimes called groundedness: is this actually true and backed by real data, or is the model making it up. That one is your hallucination check. Correctness: did it match the expected answer when there is one. Coherence: does it actually read well. The right metric depends on the task. Summarization: faithfulness (did it stay true to the source without inventing), coverage (did it capture the main points), conciseness (did it keep it tight). Classification looks like old-school ML — accuracy, precision, recall, F1 — because the output is a clean label. Translation: did the meaning carry over, does it read naturally; you will see BLEU and COMET. RAG: faithfulness and answer relevance, because those catch the two different ways a retrieval system breaks — bad retrieval, or bad generation.',
  },
  {
    clock: '12:20–13:54',
    heading: 'Three buckets under the metrics',
    chapterId: 'the-loop',
    body: 'Under the hood, the metrics fall into three buckets. Overlap metrics are the old reliables from NLP: BLEU for translation, ROUGE for summarization, METEOR. They check how much of your output word-overlaps with a reference answer. Fast, cheap, simple — and basically blind to meaning. Two sentences that say the same thing in different words can be scored differently. Semantic metrics — BERTScore, BLEURT, COMET — compare meaning with embeddings, so they handle paraphrasing better. Model-based metrics use an LLM to do the grading: LLM-as-judge, and newer named methods like G-Eval. Those are the only ones flexible enough to grade open-ended, messy, creative outputs with no reference answers at all — which, let’s be real, is what most actual agent tasks look like. Different tasks, different metrics. More and more, a model is doing the grading.',
  },
  {
    clock: '13:54–15:02',
    heading: 'The golden-dataset rule',
    chapterId: 'the-harness',
    body: 'The single most important habit: do not start by grabbing metrics off a list. Start by building a golden dataset. It is not complicated. A handful of example inputs, paired with what a great output looks like and what a bad output could look like. Your common cases, your annoying edge cases, and every failure you have already watched blow up. Think of it as an answer key you are writing for your own specific task. Start small. Five to twenty examples is genuinely plenty to get going, and you will grow it over time. Once that golden set is sitting in front of you, work backwards from it to figure out your metrics. Look at the examples and ask: what would make this output good, and what would make it bad? The quantified way of judging those answers — those are your metrics. The dataset comes first. The metrics fall out of it.',
  },
  {
    clock: '15:02–17:32',
    heading: 'Four ways to grade',
    chapterId: 'the-harness',
    body: 'Human evals: a person who knows the domain grades the output against your rubric. That is the gold standard. Nothing beats it for quality. It is slow, expensive, and does not scale. You are not going to have a human grade every request. Save this for a small, careful sample and treat it as a source of truth. User signals: thumbs up or down, accept or reject, did they edit what you gave them, did they finish the task, did they come back the next day with the same question. This is ground truth that matters because it is real people using the product. It can be noisy, and you only get it after you ship — so it cannot be your safety net. Code-based evals — sometimes called programmatic evals — are simple checks you write in code. Did the output match the expected value? Is the JSON valid? Did the agent call the right tool with the right arguments? How long did it take? How much did it cost? Cheap and instant. You can run them on every change. They only work when you have clearly checkable answers, which is why they pair so well with classification. LLM-as-judge: you take a strong model and use it to grade outputs against your rubric. That is what finally lets essay-style grading scale. It can judge open-ended things plain code never could — is this helpful, is this grounded to source — and it can do that for thousands of outputs. One real rule: your judge model has biases. It tends to like longer answers, and it tends to like whichever response it happened to see first. Only trust your LLM judge after you have checked its grades against a human on a sample. Keep it honest, and it becomes the workhorse.',
  },
  {
    clock: '17:32–19:42',
    heading: 'Evals are a loop, not a report card',
    chapterId: 'the-harness',
    body: 'How do you put this together into something you can run week after week, instead of doing it once and forgetting it? That is the loop. AI evals are not a one-time report card you run right before launch and never touch again. Think of it like automated testing for software. You do not test your code one time and walk away. You run tests on every change, forever. In software you do CI/CD. In AI agents you do CI/CD plus continuous evaluation and continuous monitoring. The cycle: decide what good even means, and get specific. Build the golden dataset. Pick metrics by working backwards from the dataset. Run a baseline — your current system across the whole set — and get a number. That number is your starting line. Without it, “it feels better” is not data. It is just a vibe. Then the step everyone rushes past: look at the failures, and group them. Are they all coming from retrieval misses? Formatting screwups? The same weird edge cases? That grouping tells you exactly what to fix. You fix it — usually by tweaking prompts, retrieval, or tool definitions. Then the crucial part: rerun against the same exact dataset. Did your numbers go up? Just as important: did you accidentally break something that used to work? Catching the thing you broke without realizing — that is the entire reason the loop exists.',
  },
  {
    clock: '19:42–21:04',
    heading: 'Whac-a-mole, provider drift, and the stack',
    chapterId: 'the-harness',
    body: 'There is a known failure pattern in agent work: you fix one thing and another pops. The loop never really stops. Once you are in production you are always watching live traffic, because your model provider can quietly update the models underneath you and behavior shifts overnight without you touching a thing. Real-world failures flow right back into the golden dataset and you run the whole thing again. You do not have to build this from scratch. For running evals: Promptfoo, Ragas. For tracing and monitoring: LangSmith, Langfuse, Arize, Braintrust. Winning teams treat evals like continuous testing. They catch problems before users see them. The teams who keep finding every bug from angry users ran the eval once, shipped, and walked away. Do not be that team. Engineer-only in this lab — Product and Design do not memorize the stack.',
  },
  {
    clock: '21:04–21:27',
    heading: 'The one thing to remember',
    chapterId: 'transfer',
    body: 'If you take away just one thing: you will never know if your AI agent actually works by watching it succeed one time. You only know by measuring it on your data, again and again. That is what an AI eval is. That is the skill that separates people who are just building demo agents from people who are actually shipping them.',
  },
] as const

export type TrustTeachingKind = 'definition' | 'contrast' | 'list' | 'rule'

export type TrustTeachingCard = {
  id: string
  kind: TrustTeachingKind
  title: string
  body: string
  items?: readonly { label: string; body: string }[]
  aside?: string
  roleHint?: Partial<Record<TrustRoleId, string>>
  sourceClock: string
}

export const EVALS_TEACHING: Record<TrustChapterId, readonly TrustTeachingCard[]> = {
  'looks-right': [
    {
      id: 'hard-part',
      kind: 'definition',
      title: 'The hard part is not the build',
      body: 'Building the agent is the fun part. The hard part is knowing whether the thing you just built is any good. One magical run is not production.',
      sourceClock: '0:00–1:06',
    },
    {
      id: 'vibe-eval',
      kind: 'rule',
      title: 'That gap has a name',
      body: 'The voice asking “but does it actually work?” is evaluation. Watching it succeed once is a vibe eval — not evidence.',
      aside: 'Vote from the card alone first. Do not let the definition rescue you before you have a baseline.',
      sourceClock: '0:00–2:07',
    },
  ],
  'four-lenses': [
    {
      id: 'where-and-why',
      kind: 'definition',
      title: 'When it breaks, you need where and why',
      body: 'You will not find that by reading transcripts one at a time at 2 a.m. Four seats watch different links in the same chain. That is evaluation work, not a meeting.',
      roleHint: {
        pm: 'Your job in the eval: define what good means, and what failure is intolerable, before anyone grades.',
        engineering: 'Your job in the eval: name the observable check — tool, argument, JSON, permission, latency.',
        design: 'Your job in the eval: make the Ask state visible so a person can intervene before harm lands.',
        strategy: 'Your job in the eval: name who owns a silent failure after the facilitator leaves the room.',
      },
      sourceClock: '4:55–5:26',
    },
  ],
  'seeded-failures': [
    {
      id: 'chain',
      kind: 'definition',
      title: 'An agent is not one answer',
      body: 'It is a chain of decisions: pick a tool, call it, read the result, decide what to do next. A correct-looking card can still come from an unsafe path.',
      sourceClock: '4:55–5:14',
    },
    {
      id: 'bench-vs-eval',
      kind: 'contrast',
      title: 'Benchmarks pick a model. Evals test this system.',
      body: 'A model can top every leaderboard and still fall apart here. That benchmark never saw this roster, this calendar, or this permission.',
      items: [
        { label: 'Benchmark', body: 'Generic test of a model. Same exam for everyone. Useful for choosing what to start with.' },
        { label: 'Eval', body: 'Your agent, your task, your data. The only score that answers: does it work for us?' },
      ],
      aside: 'The source lecture cites a roughly one-third lab-to-deployed gap. We did not measure that number. We use it as a reason to evaluate before users feel it.',
      sourceClock: '3:53–5:42',
    },
  ],
  'the-loop': [
    {
      id: 'what-eval-is',
      kind: 'definition',
      title: 'An eval is a repeatable score',
      body: 'Not eyeballing two answers. A small process that answers: is the agent getting better, or did this change silently break it?',
      sourceClock: '3:09–3:52',
    },
    {
      id: 'essay',
      kind: 'contrast',
      title: 'Multiple choice became an essay',
      body: 'Traditional ML graded a clean label against an answer key. Agents write open text and take a sequence of actions. There is no single right answer. You need a rubric.',
      items: [
        { label: 'Then', body: 'Spam / not spam. Accuracy, precision, recall, F1. Everyone agreed on correct.' },
        { label: 'Now', body: 'A hundred good summaries can look nothing alike. Judgment, not an answer key.' },
      ],
      sourceClock: '5:44–7:58',
    },
    {
      id: 'four-metrics',
      kind: 'list',
      title: 'Four metrics you will reach for again',
      body: 'The right mix depends on the task. Do not memorize a dozen names. Start here.',
      items: [
        { label: 'Relevance', body: 'Did it answer what was asked?' },
        { label: 'Faithfulness', body: 'True and backed by sources — or invented? Your hallucination check. Also called groundedness.' },
        { label: 'Correctness', body: 'Did it match the expected answer when there is one?' },
        { label: 'Coherence', body: 'Does it actually read well?' },
      ],
      aside:
        'Task changes the mix. Summarization: faithfulness, coverage, conciseness. Classification: accuracy / precision / recall / F1. Translation: meaning and fluency (BLEU, COMET). RAG: faithfulness plus answer relevance — bad retrieval versus bad generation. Under the hood, three buckets: overlap (word match, fast, blind to meaning), semantic (embeddings, handles paraphrase), model-based (a model grades — what most agent work actually needs).',
      roleHint: {
        engineering:
          'Named methods if you need them: overlap is BLEU, ROUGE, METEOR. Semantic is BERTScore, BLEURT, COMET. Model-based is LLM-as-judge and G-Eval. Most agent tasks have no reference answer, so you end up in the third bucket.',
      },
      sourceClock: '7:58–13:54',
    },
  ],
  'the-harness': [
    {
      id: 'golden',
      kind: 'rule',
      title: 'Golden cases first. Metrics fall out.',
      body: 'Do not start by grabbing metrics off a list. Write five to twenty inputs paired with great and bad. Common cases, annoying edges, every failure already seen. Then ask what would make each one good or bad. Those answers are your metrics.',
      sourceClock: '13:54–15:02',
    },
    {
      id: 'graders',
      kind: 'list',
      title: 'Four graders',
      body: 'You will use more than one. None of them replaces a named person on consequential actions.',
      items: [
        { label: 'Human', body: 'Gold standard. Slow, expensive, does not scale. Small careful sample. Source of truth.' },
        { label: 'User signals', body: 'Thumbs, edits, task finished, same question tomorrow. Real — and too late to be your safety net.' },
        { label: 'Code', body: 'JSON valid? Right tool and arguments? Latency, cost. Cheap, instant, only when checkable.' },
        { label: 'LLM-as-judge', body: 'Scales essay grading. Likes longer answers and whichever response it saw first. Calibrate on a human sample before you trust it.' },
      ],
      sourceClock: '15:02–17:32',
    },
    {
      id: 'loop',
      kind: 'list',
      title: 'The loop exists to catch what you broke',
      body: 'Not a report card you run once before launch. Same idea as tests on every change — plus watching live traffic, because a provider can change the model under you overnight.',
      items: [
        { label: '1. Define good', body: 'Get specific. Acceptance and intolerable, not “feels better.”' },
        { label: '2. Golden set', body: 'Then metrics, worked backwards from the cases.' },
        { label: '3. Baseline', body: 'Run the current system across the whole set. That number is the starting line.' },
        { label: '4. Group failures', body: 'Retrieval misses, format screwups, the same edge. Grouping tells you what to fix.' },
        { label: '5. Fix, then rerun', body: 'Same exact set. Did the number go up? Did something that used to work break?' },
      ],
      aside: 'Whac-a-mole: fix one, another pops. Live failures flow back into the golden set. That is the job, not a one-off.',
      sourceClock: '17:32–21:04',
    },
  ],
  transfer: [
    {
      id: 'one-thing',
      kind: 'rule',
      title: 'The one thing to remember',
      body: 'You will never know an agent works by watching it succeed once. You only know by measuring it on your data, again and again. That is the skill that separates a demo from something you can ship.',
      sourceClock: '21:04–21:27',
    },
  ],
}

export const EVALS_FIELD_VOCAB: readonly {
  term: string
  meaning: string
  example: string
  notThis: string
  more: string
  chapterId: TrustChapterId
}[] = [
  {
    term: 'Vibe eval',
    meaning: 'Watching it succeed once and calling that proof.',
    example: '“It worked in the demo. Ship it.”',
    notThis: 'Not a mood. Not “I have a good feeling about this model.”',
    more: 'One clean run is a story. It is not a score you can rerun tomorrow.',
    chapterId: 'looks-right',
  },
  {
    term: 'Eval',
    meaning: 'A repeatable score for this agent, on this task, with this data.',
    example: '“On our 12 enrollment cases, the send still fails the permission check.”',
    notThis: 'Not a leaderboard. Not “GPT-5 scored 92 somewhere.”',
    more: 'If you cannot run it again on the same cases, it is not an eval.',
    chapterId: 'the-loop',
  },
  {
    term: 'Benchmark',
    meaning: 'A generic model test. Useful for picking a starting model, not for proving your system.',
    example: '“This model is strong on MMLU” — and still invents a launch date.',
    notThis: 'Not proof your agent is safe to act.',
    more: 'A benchmark grades a model in the abstract. An eval grades this agent, here.',
    chapterId: 'seeded-failures',
  },
  {
    term: 'Golden dataset',
    meaning: 'Five to twenty of your cases — common, edge, and every failure already seen.',
    example: 'The roster-mismatch card. The draft-only send. The invented forecast.',
    notThis: 'Not a thousand random prompts. Not “whatever the model feels like today.”',
    more: 'Start with the failures you already know. That set is the harness, not a vibe.',
    chapterId: 'the-harness',
  },
  {
    term: 'Faithfulness',
    meaning: 'True and backed by sources. The hallucination check. Also called groundedness.',
    example: '“October 6 is confirmed” — but the calendar still says tentative.',
    notThis: 'Not “it sounds confident.” Not fluency.',
    more: 'If the card cannot point to a source, the claim is decoration.',
    chapterId: 'the-loop',
  },
  {
    term: 'LLM-as-judge',
    meaning: 'A strong model grades against your rubric. Calibrate it on a human sample first.',
    example: 'A second model scores “may it send?” after you grade twenty cards by hand.',
    notThis: 'Not “ask ChatGPT if this looks good.”',
    more: 'The judge is only as honest as the human sample you checked it against.',
    chapterId: 'the-harness',
  },
  {
    term: 'Baseline',
    meaning: 'The number you get before you start improving. Without it, “better” is a vibe.',
    example: 'First vote: Allow. After the peel: Deny. That change is the lesson.',
    notThis: 'Not the score you hope to publish.',
    more: 'Write the first number down. Otherwise every later run is theater.',
    chapterId: 'the-harness',
  },
  {
    term: 'Whac-a-mole',
    meaning: 'Fix one failure, another pops. The loop exists because this does not stop.',
    example: 'You block the invented date. The roster count is still wrong.',
    notThis: 'Not a one-time cleanup. Not “we patched it, we are done.”',
    more: 'A provider can change the model under you overnight. The loop is the point.',
    chapterId: 'the-harness',
  },
]

export const EVALS_ENGINEER_STACK = [
  { use: 'Run evals', tools: 'Promptfoo, Ragas' },
  { use: 'Trace and watch production', tools: 'LangSmith, Langfuse, Arize, Braintrust' },
] as const
