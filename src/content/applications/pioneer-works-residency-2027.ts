/**
 * Private application paste copy for Pioneer Works 2027 Visual Arts Residency.
 * Copy into the official Pioneer Works / Artwork Archive form — not a public UI for private values.
 */
import { pioneerWorksMeta } from '@/content/grants/pioneer-works-residency-2027/meta';
import { cvData } from '@/constants/cv';

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** ≤250 words — How would you use your time at Pioneer Works? */
export const pioneerWorksTimeAtResidency = `At Pioneer Works, I will develop Machine Sentences, a new family of sculptural systems in which human language becomes physical orientation, fragmented imagery, and mechanical posture. The central work, Machine Sentence No. 1, will combine a self-standing aluminum armature, multiple displays, custom 3D-printed housings, visible cable circulation, sound, and a constrained AI system. Rather than allowing a model to freely generate form, I will author a finite physical grammar—states such as witness, refusal, compression, and chorus—and use inference to move the sculpture among them.

The five-month residency would let me move from digital studies into a durable body of objects. I would begin with small screen-clause maquettes and material tests; fabricate a full-scale modular frame; develop safe kinetic and software controls; then test the work publicly through Second Sundays. Each open studio would expose a different stage: vocabulary, anatomy, movement, and collective use. Visitor language would be processed without retaining personal identity, and the system would remain legible as sculpture while inactive.

Alongside the central work, I will produce smaller grammar studies, diagrams, and screen-based fragments that can occupy the glass studio as an evolving installation. The residency will culminate in a resolved prototype, documentation, and a public workshop on building artist-authored AI systems rather than defaulting to generic automation.`;

/** ≤250 words — What interests you in Pioneer Works? */
export const pioneerWorksInterest = `What interests me about Pioneer Works is that it treats the residency studio as both a production space and a public site of exchange. My work sits between sculpture, software, performance, and critical research; it often falls between the categories and support structures of a conventional studio program. Pioneer Works’ proximity among visual artists, technologists, musicians, scientists, and educators would let Machine Sentences develop through real encounters rather than inside a closed technical workflow.

The project specifically needs room for objects, electronics, screens, moving assemblies, and repeated public testing. Access to 3D printing, laser cutting, large-format printing, the Tech Lab’s engineering support, and regular studio visits would help me resolve both its physical construction and its conceptual limits. I am especially interested in testing how a public-facing glass studio changes the work: visitors would witness the sculpture’s incomplete anatomy, software failures, revised rules, and gradual accumulation of form. Second Sundays could function as monthly chapters rather than a single finished presentation.

I would also contribute an artist-engineer perspective grounded in years of building AI systems and public-facing new-media work. I can share practical methods through workshops and peer exchange while remaining open to collaborators who challenge the project’s assumptions about language, intelligence, and authorship. Pioneer Works’ “museum of process” ethos makes it unusually suited to a project whose subject is not frictionless AI output, but the visible labor of giving machine interpretation a body.`;

/** ≤400 words — Work Samples Description */
export const pioneerWorksWorkSamplesDescription = `Sample 1: Baby AGI (From Cradle to AGI), 2023. Gaming-computer stroller, robotic hands, electronics, and mixed media; dimensions variable. A speculative infant-machine body treats artificial general intelligence as something culturally raised, consumerized, and cared for before it exists.

Sample 2: Digital Divinities, 2023, with Fabiola Larios. Interactive AI installation using visitor portraits, custom software, displays, and projected imagery; dimensions variable. Participants’ images are transformed into algorithmic muses, linking contemporary model systems to older rituals of image-making, belief, and devotion.

Sample 3: Doomscrolling Treadmill, 2024. Twenty-four-hour performance with treadmill, computer, livestream, and TikTok feed; dimensions variable. The artist walks, codes, and consumes an endless vertical feed, turning platform labor and compulsive attention into visible physical endurance.

Sample 4: Simulation Faith, 2025. Found religious sculpture, virtual-reality headset, and mixed media; dimensions variable. A baby Jesus figure wearing a VR headset stages faith inside the apparatus of simulation, asking how inherited belief is reformatted by contemporary interfaces.

Sample 5: Machine Sentence No. 1, 2026. Work-in-progress concept study: kinetic sculpture, displays, aluminum structure, custom software, and sound; proposed dimensions approximately 78 × 48 × 36 inches. Human language is translated into a constrained sculptural grammar of alignment, attention, refusal, compression, and contradiction. The submitted material is clearly identified as a digital and fabrication study; the physical work has not yet been built.`;

export const pioneerWorks2027Application = {
  callId: pioneerWorksMeta.callId,
  deadline: pioneerWorksMeta.deadline,
  applyUrl: pioneerWorksMeta.applyUrl,
  callPageUrl: pioneerWorksMeta.callPageUrl,
  hubUrl: `https://moises.tech${pioneerWorksMeta.hubRoute}`,
  proposalUrl: `https://moises.tech${pioneerWorksMeta.proposalRoute}`,
  website: 'https://www.moises.tech',
  email: 'm@moises.tech',
  firstName: 'Moises',
  lastName: 'Sanabria',
  residency: 'Visual Arts',
  cvContactEmail: cvData.contact.email,
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
  placeholders: {
    availability: '[CONFIRM — Feb–Jun 2027 / Jul–Dec 2027 / both]',
    visitedPioneerWorks: '[CONFIRM]',
    howHeard: '[CONFIRM]',
    dateOfBirth: '[PRIVATE — COMPLETE IN FORM ONLY]',
    usCitizenOrResident: '[CONFIRM IN FORM ONLY]',
    currentAddress: '[PRIVATE — COMPLETE IN FORM ONLY]',
    telephone: '[PRIVATE — COMPLETE IN FORM ONLY]',
    genderIdentity: '[OPTIONAL — LEAVE BLANK UNLESS DECIDED]',
    racialEthnicIdentity: '[OPTIONAL — LEAVE BLANK UNLESS DECIDED]',
  },
} as const;

export const pioneerWorksAnswerWordCounts = {
  timeAtPioneerWorks: pioneerWorks2027Application.answers.timeAtPioneerWorks.wordCount,
  interestInPioneerWorks: pioneerWorks2027Application.answers.interestInPioneerWorks.wordCount,
  workSamplesDescription: pioneerWorks2027Application.answers.workSamplesDescription.wordCount,
} as const;
