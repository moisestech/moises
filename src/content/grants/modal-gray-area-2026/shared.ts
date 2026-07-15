/**
 * Shared artist materials for Modal × Gray Area 2026
 */
import type { GrantPlaceholderMedia } from '@/components/grant/shared/GrantProposalUi';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const modalGrayAreaArtistBio = `Moises Sanabria is a Miami-based interdisciplinary artist and AI/web systems builder whose work treats algorithmic environments, language, and computational systems as material conditions of embodiment. His practice moves between sculpture, installation, performance, and research — asking what forms inference is allowed to take when intelligence becomes infrastructure. Born in Venezuela and based in South Florida, he develops long-form projects such as Born into the Machine while fabricating physical works that make networked life legible in space.`;

export const modalGrayAreaArtistStatement = `I live and work inside chronically online conditions: feeds that metabolize attention, models that rewrite language before it reaches the body, interfaces that pretend to understand what they only rearrange. My practice does not treat AI as a novelty generator. It treats AI as studio and civic infrastructure — a substrate that reshapes how people speak, remember, desire, and decide.

Machine Sentence No. 1 extends this inquiry into a self-standing sculptural grammar. Screens become clauses. A rigid lattice becomes syntax. Orientation becomes punctuation. Distributed imagery becomes semantic pressure. The central void between screen clusters makes latent space physically consequential without claiming that abstract representations have cones or consciousness.

I am an artist who also builds computational systems. That dual authorship matters for this call: the model may interpret language, but I author the finite vocabulary of forms interpretation is permitted to occupy. The goal is intentional inference across speech and text — not automation, not homogeneous output, and not an attraction that performs emotion.`;

export const modalGrayAreaWorkSamples = [
  {
    title: 'Baby AGI / From Cradle to AGI',
    year: 2023,
    image: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    slug: 'baby_agi',
    blurb: 'Technological materiality staged as sculptural metaphor — intelligence as something assembled and wheeled into the room.',
  },
  {
    title: 'Digital Divinities',
    year: 2023,
    image: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    slug: 'digital_divinities',
    blurb: 'Live installation systems where belief and mediation share a visual field.',
  },
  {
    title: 'Doom Scrolling Treadmill',
    year: 2024,
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    slug: 'doomscrolling_treadmill',
    blurb: 'Durational embodiment of the feed — the body trapped in algorithmic continuity.',
  },
  {
    title: 'Simulation Faith',
    year: 2025,
    image: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`,
    slug: 'simulation_faith',
    blurb: 'Sacred form rewired by mediation — belief under continuous technical adjustment.',
  },
  {
    title: 'AI Everydays: The First 5000',
    year: 2022,
    image: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`,
    slug: 'ai_everydays',
    blurb: 'Repetition and synthetic accumulation as conceptual engine for machine image labor.',
  },
] as const;

export const modalGrayAreaHubSeo = {
  title: 'Modal × Gray Area 2026 Proposal — Moises Sanabria',
  description:
    'Application packet for MACHINE SENTENCE NO. 1 — a proposed self-standing cubic inference sculpture for Modal × Gray Area, October 2026.',
} as const;

/** Unverified / application-stage notes for reviewers */
export const modalGrayAreaUnverifiedClaims = [
  'Physical sculpture has not been fabricated or exhibited.',
  'Screen count (preferred seven / minimum four–six) is a budget-contingent proposal, not a purchased inventory.',
  'Motor count and enclosure materials remain subject to fabrication review after selection.',
  'Modal endpoint deployment is optional for the web prototype; mock mode is submission-complete.',
  'Exhibition floor plan and Gray Area sightlines are not yet surveyed — context studies are conceptual.',
] as const;

export type { GrantPlaceholderMedia };
