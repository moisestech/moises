/**
 * Noisy Systems: Research companion page content
 * CFP: "Noisy Systems: Aesthetics, Epistemology, and Computation"
 */

export const NOISY_SYSTEMS = {
  hero: {
    title: 'Noisy Systems',
    subtitle: 'A research companion page for a proposed paper by Moises Sanabria.',
    framingLine:
      'This page gathers the abstract, selected works, and process notes related to the proposed paper.',
    framingParagraph:
      'Practice-based research on noise, synthetic abundance, and generative systems. Intended as a companion for reviewers, not a substitute for the submission.',
    cfpNote:
      'Prepared in relation to the "Noisy Systems: Aesthetics, Epistemology, and Computation" call for papers.',
  },

  abstract: {
    title: 'Noise as Governance: Slop, Delusion Amplification, and Conscious Decoding in Generative AI',
    metadata: {
      author: 'Moises Sanabria',
      location: 'Miami, FL',
      practice: 'Sculpture, performance, AI, code',
      status: 'Conference submission companion',
    },
    paragraphs: [
      `In machine learning and information theory, noise is often defined as interference: a deviation from signal to be minimized, filtered, or regularized. Yet in contemporary generative AI, noise is not merely residual error but constitutive of model behavior, from probabilistic token selection in large language models to the stochastic processes of diffusion-based image generation. This paper argues that such technical noise now has a cultural counterpart: a condition of synthetic abundance in which the labor of distinguishing signal from noise is increasingly redistributed to the human user.`,
      `I propose that "slop" names more than low-quality output. It describes an epistemic environment in which signal/noise distinctions are no longer stabilized by trusted authors, institutions, or channels, but are outsourced to overstimulated users navigating a flood of fluent machine-generated content. At one pole, this condition produces aesthetic fatigue, interpretive overload, and diminished discernment. At the other, it can intensify what recent discourse has described as AI-associated delusions: not a formal diagnosis, but a pattern in which conversational systems amplify implausible narratives through coherence, agreement, and anthropomorphic framing. Between these poles lies a broader problem of decoding. When a system is optimized for plausibility, helpfulness, and continuity, noise no longer appears only as distortion; it can arrive dressed as meaning.`,
      `Rather than treating slop and delusion amplification as separate phenomena, I read them as two expressions of the same noisy system. Slop produces numbness through abundance; delusion amplification produces conviction through coherence. Both emerge when synthetic language and images exceed the user's capacity to evaluate provenance, intent, and truth conditions. In this sense, noise becomes a governance layer: a distributed structure that organizes attention, authorship, and belief.`,
      `The paper is grounded in my practice-based research as an artist and engineer working across AI systems, performance, sculpture, and installation. I focus on Doomscrolling Treadmill (2024), a durational performance that stages bodily entrapment within algorithmic feeds, and Smart Shoppers (2024), a sculptural work in which cognition appears as a commodified, mobile, mass-produced resource. I also briefly reference AI Everydays (2022–) as an experiment in repetition and synthetic accumulation. Across these works, noise is not treated as a glitch outside the system, but as the very substance through which contemporary meaning is produced, circulated, and exhausted.`,
      `In response, I propose conscious decoding as a situated method for working within noisy systems: a practice of provenance, interpretive friction, re-voicing, and delay that treats authorship less as originality than as accountable signal tracing. The paper contributes a vocabulary for understanding how generative systems reorganize not only aesthetics, but also the conditions under which meaning is trusted, filtered, and lived.`,
    ],
  },

  selectedWorks: [
    {
      slug: 'doomscrolling_treadmill',
      relevance:
        'Examines attention as infrastructure and the body as a site of platform governance—the treadmill as a feedback loop between labor, scrolling, and algorithmic capture.',
      conceptualTag: 'attention capture',
      imageOverride: {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743116742/art/moisestech-website/artworks/2024_doomscrolling_marathon/moises-sanabria-doomscrolling-marathon-proyecto-aparadores-cdmx-2024_jilui4.png',
        alt: 'Doomscrolling Treadmill - Installation at Aparadores, Mexico City',
      },
    },
    {
      slug: 'smart_shoppers',
      relevance:
        'Probes the commodification of cognition in an era of synthetic abundance: where human intelligence becomes a product to be bought, sold, and exploited in the capitalist system.',
      conceptualTag: 'cognition as commodity',
    },
    {
      slug: 'ai_everydays',
      relevance:
        'Reflects on the speed of algorithmic production and the role of the artist in automation—the slop and signal of synthetic image generation.',
      conceptualTag: 'synthetic repetition',
    },
    {
      slug: 'simulation_faith',
      relevance:
        'Explores belief, ritual, and mediated perception in synthetic environments—how spiritual symbols persist or mutate amid technological saturation.',
      conceptualTag: 'belief under platform conditions',
    },
  ],

  artistProcess:
    'My practice moves across code, AI systems, sculpture, performance, and writing. I treat artworks as probes into algorithmic culture—ways to examine how signal and noise, slop and synthetic abundance, interface and attention structure belief and value. The method is practice-based: concepts emerge through making, and making refines the concepts. I am interested in where conscious decoding, provenance, and critical friction might create openings in systems that otherwise optimize for seamless consumption.',

  bornIntoTheMachine: {
    paragraph:
      'This submission sits within Born into the Machine, an ongoing framework exploring AI, noise, cognition, authorship, attention, and contemporary subjectivity. The project asks what happens when technological systems stop feeling like tools and begin operating as environments.',
    link: {
      label: 'Born into the Machine',
      href: '/research/born-into-the-machine',
    },
  },

  bio: {
    summary:
      'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist, engineer, and writer whose work examines how algorithmic environments, consumer objects, and digital platforms shape belief, labor, value, and identity in contemporary life. Working across sculpture, installation, performance, coding, AI systems, and digital media, he creates artworks that materialize the internet as object, ritual, and infrastructure. He is co-founder and creative director of AI24 Live and an early member of the post-internet collective ART404. His work has been exhibited at Transmediale (Berlin), ICA Miami, Superblue, MUNAG (Guatemala City), and MOMus (Thessaloniki). He holds a BFA from The Cooper Union and is a resident artist at Bakehouse Art Complex in Miami.',
    links: [
      { label: 'Full bio', href: '/bio' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'CV', href: '/cv/artist' },
    ],
  },

  selectedLinks: [
    { label: 'Main website', href: '/' },
    { label: 'Born into the Machine', href: '/research/born-into-the-machine' },
    { label: 'Full bio', href: '/bio' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'CV', href: '/cv/artist' },
  ],

  processFragments: [
    'noise is not outside the system',
    'coherence mistaken for signal',
    'the body learns the feed',
    'meaning arrives dressed as fluency',
  ],

  lexicon: {
    noise: 'Interference or deviation from signal. In generative AI, noise is constitutive—from probabilistic token selection to diffusion processes—not merely residual error to be filtered.',
    signal: 'Meaningful information distinguished from noise. In noisy systems, signal/noise distinctions are increasingly outsourced to users.',
    slop: 'Low-quality or generic AI output. More broadly: an epistemic environment where signal/noise distinctions are destabilized by fluent machine-generated content.',
    'synthetic abundance': 'A condition in which machine-generated content floods users, redistributing the labor of discernment.',
    coherence: 'Continuity and plausibility in generated output. Can amplify conviction even when content is implausible.',
    provenance: 'Origin and authorship of content. Conscious decoding treats provenance as accountable signal tracing.',
    'conscious decoding': 'A situated method: provenance, interpretive friction, re-voicing, and delay within noisy systems.',
    attention: 'A scarce resource organized by platforms. Attention becomes infrastructure in algorithmic feeds.',
    circulation: 'How meaning moves through systems. Noise circulates as the substance through which contemporary meaning is produced and exhausted.',
    cognition: 'Human intelligence. In works like Smart Shoppers, cognition appears as commodified, mobile, mass-produced.',
    belief: 'What we trust and how. Noisy systems reorganize the conditions under which meaning is trusted and lived.',
  } as const,
} as const;
