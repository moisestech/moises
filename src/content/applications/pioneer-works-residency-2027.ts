/**
 * Paste-ready application copy for Pioneer Works 2027 Visual Arts Residency.
 * Source: pioneer-works-2027-cursor-pack/02_APPLICATION_COPY.md
 * Private portal values never live here — status-only completeness is in shared.ts.
 */
import { pioneerWorksMeta } from '@/content/grants/pioneer-works-residency-2027/meta';

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** ≤250 words — How would you use your time at Pioneer Works? */
export const pioneerWorksTimeAtResidency = `At Pioneer Works, I will develop Machine Sentences, a family of sculptural systems in which human language becomes physical orientation, fragmented imagery, sound, and mechanical posture. The central work, Machine Sentence No. 1, will combine a self-standing aluminum armature, multiple displays, custom housings, visible cable circulation, and a constrained AI system. Rather than allowing a model to freely generate form, I will author a finite physical grammar—states such as witness, refusal, compression, aperture, and chorus—and use inference to move the sculpture among them.

The five-month residency would let me move from digital studies into a durable body of objects. I would begin with small screen-clause maquettes, movement tests, and enclosure studies; fabricate a modular full-scale frame; develop safe kinetic and software controls; then revise the work through public encounters. Each Second Sunday would expose a different stage of development: vocabulary, anatomy, movement, collective use, and rest.

Alongside the central sculpture, I will produce smaller grammar studies, diagrams, screen fragments, and failed components that accumulate inside the glass studio as an evolving installation. The residency would culminate in a resolved full-scale prototype, documentation, and a public workshop on building artist-authored AI systems rather than defaulting to generic automation.`;

/** ≤250 words — What interests you in Pioneer Works? */
export const pioneerWorksInterest = `Pioneer Works interests me because it treats the residency studio as both a production space and a public site of exchange. My practice sits between sculpture, software, performance, and critical research; it often falls between the categories and support structures of a conventional studio program. Pioneer Works’ proximity among visual artists, technologists, musicians, scientists, and educators would let Machine Sentences develop through encounters rather than inside a closed technical workflow.

The project specifically needs room for structures, electronics, displays, moving assemblies, sound, and repeated public testing. Access to fabrication resources, technical dialogue, studio visits, and a culture of experimentation would help me resolve both the work’s construction and its conceptual limits. I am especially interested in how a glass-fronted studio changes the project: visitors would witness incomplete anatomy, software failures, revised rules, and the gradual accumulation of form. Second Sundays could function as monthly chapters rather than presentations of a prematurely finished object.

I would contribute an artist-engineer perspective grounded in building public-facing AI and new-media systems. I can share practical methods through workshops and peer exchange while remaining open to collaborators who challenge the project’s assumptions about language, intelligence, authorship, and technological embodiment. Pioneer Works is unusually suited to a project whose subject is not frictionless AI output, but the visible labor of giving machine interpretation a body.`;

/** ≤400 words — Work Samples Description */
export const pioneerWorksWorkSamplesDescription = `Sample 1 — Baby AGI / From Cradle to AGI, 2023. Gaming-computer stroller, robotic hands, electronics, and mixed media; dimensions variable. A speculative infant-machine body treats artificial general intelligence as something culturally raised, consumerized, and cared for before it exists.

Sample 2 — Digital Divinities, 2023, with Fabiola Larios. Interactive AI installation using visitor portraits, custom software, displays, and projected imagery; dimensions variable. Participants’ images become algorithmic muses, connecting contemporary model systems to older rituals of image-making, belief, and devotion.

Sample 3 — Doomscrolling Treadmill, 2024. Twenty-four-hour performance with treadmill, computer, livestream, and TikTok feed; dimensions variable. The artist walks, codes, and consumes an endless vertical feed, turning platform labor and compulsive attention into physical endurance.

Sample 4 — Simulation Faith, 2025. Found religious sculpture, virtual-reality headset, and mixed media; dimensions variable. A baby Jesus figure wearing a VR headset stages faith inside the apparatus of simulation, asking how inherited belief is reformatted by contemporary interfaces.

Sample 5 — Machine Sentence No. 1, 2026. Work-in-progress concept and digital movement study for a kinetic sculpture using displays, a structural armature, custom software, and sound; proposed dimensions approximately 78 × 48 × 36 inches. Human language is translated into a constrained sculptural grammar of attention, refusal, compression, aperture, and contradiction. The physical sculpture has not yet been fabricated.`;

export { pioneerWorksProjectStatement } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export const pioneerWorks2027Application = {
  callId: pioneerWorksMeta.callId,
  deadline: pioneerWorksMeta.deadline,
  deadlineVerification: pioneerWorksMeta.deadlineVerification,
  applyUrl: pioneerWorksMeta.applyUrl,
  callPageUrl: pioneerWorksMeta.callPageUrl,
  hubUrl: `https://moises.tech${pioneerWorksMeta.hubRoute}`,
  proposalUrl: `https://moises.tech${pioneerWorksMeta.proposalRoute}`,
  website: 'https://www.moises.tech',
  email: 'm@moises.tech',
  firstName: 'Moises',
  lastName: 'Sanabria',
  residency: 'Visual Arts',
  answers: {
    timeAtPioneerWorks: {
      prompt: 'How would you use your time at Pioneer Works?',
      text: pioneerWorksTimeAtResidency,
      maxWords: 250,
      wordCount: wordCount(pioneerWorksTimeAtResidency),
    },
    interestInPioneerWorks: {
      prompt: 'What interests you in Pioneer Works?',
      text: pioneerWorksInterest,
      maxWords: 250,
      wordCount: wordCount(pioneerWorksInterest),
    },
    workSamplesDescription: {
      prompt: 'Work Samples Description',
      text: pioneerWorksWorkSamplesDescription,
      maxWords: 400,
      wordCount: wordCount(pioneerWorksWorkSamplesDescription),
    },
  },
  /** Field names only — never values */
  portalOnlyFieldNames: [
    'Date of birth',
    'US citizen or resident confirmation',
    'Current address',
    'Telephone',
    'Optional gender identity',
    'Optional racial/ethnic identity',
    'Availability selection',
    'Have you visited Pioneer Works?',
    'How did you hear about the opportunity?',
    'Required acknowledgements',
  ] as const,
} as const;

export const pioneerWorksAnswerWordCounts = {
  timeAtPioneerWorks: pioneerWorks2027Application.answers.timeAtPioneerWorks.wordCount,
  interestInPioneerWorks: pioneerWorks2027Application.answers.interestInPioneerWorks.wordCount,
  workSamplesDescription: pioneerWorks2027Application.answers.workSamplesDescription.wordCount,
} as const;
