/**
 * Shared artist materials for Modal × Gray Area 2026
 */
const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const modalGrayAreaArtistBio = `Moises Sanabria is a Miami-based interdisciplinary artist whose work treats algorithmic environments, language, and computational systems as material conditions of embodiment. His practice moves between sculpture, installation, performance, and research — asking what forms inference is allowed to take when intelligence becomes infrastructure. Born in Venezuela and based in South Florida, he develops long-form projects such as Born into the Machine and Machine Sentences while fabricating physical works that make networked life legible in public space.`;

export const modalGrayAreaArtistStatement = `I live and work inside chronically online conditions: feeds that metabolize attention, models that rewrite language before it reaches the body, interfaces that pretend to understand what they only rearrange. My practice does not treat AI as a novelty generator. It treats AI as studio and civic infrastructure — a substrate that reshapes how people speak, remember, desire, and decide.

INCOMPLETE CONTAINMENT OF A MODEL extends this inquiry into a civic-forensic listening structure. The visitor offers one sentence they want heard, not answered. Inference maps testimony into constrained values; a local controller selects only from artist-authored aperture positions; a thermal printer issues forensic evidence of retention and unresolved marks. The model may interpret language, but I author the finite vocabulary of forms interpretation is permitted to occupy.

I am an artist who also builds computational systems. That dual authorship matters for this call: intentional inference across speech — not automation, not diagnosis, and not an attraction that performs understanding.`;

export const modalGrayAreaWorkSamples = [
  {
    title: 'Baby AGI / From Cradle to AGI',
    year: 2023,
    image: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    slug: 'baby_agi',
    blurb: 'Technological materiality staged as sculptural metaphor — intelligence as something assembled and wheeled into the room.',
  },
  {
    title: 'Simulation Faith',
    year: 2025,
    image: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`,
    slug: 'simulation_faith',
    blurb: 'Sacred form rewired by mediation — belief under continuous technical adjustment.',
  },
  {
    title: 'Digital Divinities',
    year: 2023,
    image: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    slug: 'digital_divinities',
    blurb: 'Live installation systems where belief and mediation share a visual field.',
  },
  {
    title: 'AI Everydays: The First 5000',
    year: 2022,
    image: `${CDN}/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg`,
    slug: 'ai_everydays',
    blurb: 'Repetition and synthetic accumulation as conceptual engine for machine image labor.',
  },
  {
    title: 'Doom Scrolling Treadmill',
    year: 2024,
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    slug: 'doomscrolling_treadmill',
    blurb: 'Durational embodiment of the feed — the body trapped in algorithmic continuity.',
  },
] as const;

export const modalGrayAreaHubSeo = {
  title: 'Modal × Gray Area 2026 Proposal — Moises Sanabria',
  description:
    'Application packet for INCOMPLETE CONTAINMENT OF A MODEL — a civic-forensic listening structure for Modal × Gray Area, October 2026.',
} as const;

/** Unverified / application-stage notes for reviewers */
export const modalGrayAreaUnverifiedClaims = [
  'Physical listening structure has not been fabricated or exhibited.',
  'Proposal images are production-realistic concept renderings; kinetic-screen studies are archived as superseded.',
  'Actuator, membrane material, and exact dimensions remain subject to fabrication review after selection.',
  'Modal endpoint deployment is optional for the web prototype; mock mode is submission-complete.',
  'Exhibition floor plan and Gray Area sightlines are not yet surveyed — context studies are conceptual.',
] as const;
