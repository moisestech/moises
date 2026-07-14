/**
 * Shared artist materials for Pioneer Works 2027 Visual Arts Residency
 */
import type { GrantPlaceholderMedia } from '@/components/grant/shared/GrantProposalUi';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type PrivateFieldStatus = 'completed' | 'incomplete';

export type WorkSampleAsset = {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  context: string;
  slug?: string;
  image?: string;
  collaborator?: string;
  assetVerification: 'verified' | 'placeholder' | 'needs-file-check';
  fileSizeVerification: 'verified' | 'unverified';
  physicallyBuilt: boolean;
};

/** Safer upload order: established works first, proposal study last */
export const pioneerWorksWorkSamples: WorkSampleAsset[] = [
  {
    id: 'baby-agi',
    title: 'Baby AGI (From Cradle to AGI)',
    year: 2023,
    medium: 'Gaming-computer stroller, robotic hands, electronics, and mixed media',
    dimensions: '120 cm × 60 cm × 100 cm (L × W × H)',
    context:
      'A speculative infant-machine body treats artificial general intelligence as something culturally raised, consumerized, and cared for before it exists.',
    slug: 'baby_agi',
    image: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    assetVerification: 'verified',
    fileSizeVerification: 'unverified',
    physicallyBuilt: true,
  },
  {
    id: 'digital-divinities',
    title: 'Digital Divinities',
    year: 2023,
    medium: 'Interactive AI installation using visitor portraits, custom software, displays, and projected imagery',
    dimensions: 'Dimensions variable',
    context:
      'Participants’ images are transformed into algorithmic muses, linking contemporary model systems to older rituals of image-making, belief, and devotion.',
    slug: 'digital_divinities',
    image: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    collaborator: 'Fabiola Larios',
    assetVerification: 'verified',
    fileSizeVerification: 'unverified',
    physicallyBuilt: true,
  },
  {
    id: 'doomscrolling-treadmill',
    title: 'Doomscrolling Treadmill',
    year: 2024,
    medium: 'Twenty-four-hour performance with treadmill, computer, livestream, and TikTok feed',
    dimensions: 'Dimensions variable',
    context:
      'The artist walks, codes, and consumes an endless vertical feed, turning platform labor and compulsive attention into visible physical endurance.',
    slug: 'doomscrolling_treadmill',
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    assetVerification: 'verified',
    fileSizeVerification: 'unverified',
    physicallyBuilt: true,
  },
  {
    id: 'simulation-faith',
    title: 'Simulation Faith',
    year: 2025,
    medium: 'Found religious sculpture, virtual-reality headset, and mixed media',
    dimensions: '3 ft × 2 ft × 1.5 ft (sculpture), variable installation space',
    context:
      'A baby Jesus figure wearing a VR headset stages faith inside the apparatus of simulation, asking how inherited belief is reformatted by contemporary interfaces.',
    slug: 'simulation_faith',
    image: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`,
    assetVerification: 'verified',
    fileSizeVerification: 'unverified',
    physicallyBuilt: true,
  },
  {
    id: 'machine-sentence-no-1',
    title: 'Machine Sentence No. 1 — work-in-progress study',
    year: 2026,
    medium:
      'Kinetic sculpture, displays, aluminum structure, custom software, and sound (digital and fabrication study)',
    dimensions: 'Proposed approximately 78 × 48 × 36 inches — provisional',
    context:
      'Human language is translated into a constrained sculptural grammar of alignment, attention, refusal, compression, and contradiction. Clearly identified as a digital and fabrication study; the physical work has not yet been built.',
    assetVerification: 'placeholder',
    fileSizeVerification: 'unverified',
    physicallyBuilt: false,
  },
];

export const pioneerWorksArtistBio = `Moises Sanabria is a Miami-based interdisciplinary artist whose work examines how algorithmic environments, consumer objects, digital platforms, and networked systems shape belief, labor, value, identity, and desire. His practice moves between sculpture, installation, performance, and research — treating AI, code, and technical systems as mediums within a coherent museum practice rather than as a separate identity. Born in Venezuela and based in South Florida, he develops long-form projects such as Born into the Machine while fabricating physical works that make networked life legible in space.`;

export const pioneerWorksUnverifiedClaims = [
  'Residency has not been awarded.',
  'Final studio assignment and conditions are unknown.',
  'Physical Machine Sentence No. 1 has not yet been built or exhibited.',
  'Exact screen count remains unresolved.',
  'Exact dimensions of the central work are provisional (~78 × 48 × 36 inches proposed).',
  'Motor and enclosure systems remain unresolved pending fabrication.',
  'NYC housing and travel plan are private and not displayed on this page.',
  'Final work-sample dimensions and upload file sizes require verification against form limits.',
  'Public participation design for Second Sundays remains in development.',
  'The $5,000 residency award is not a dedicated fabrication budget; do not invent additional production support.',
] as const;

/** Public hub shows status only — never values */
export const pioneerWorksPrivateFields: {
  id: string;
  label: string;
  status: PrivateFieldStatus;
}[] = [
  { id: 'date-of-birth', label: 'Date of birth', status: 'incomplete' },
  { id: 'us-citizen-or-resident', label: 'US citizen or resident', status: 'incomplete' },
  { id: 'current-address', label: 'Current address', status: 'incomplete' },
  { id: 'telephone', label: 'Telephone', status: 'incomplete' },
  { id: 'gender-identity', label: 'Gender identity (optional)', status: 'incomplete' },
  { id: 'racial-ethnic-identity', label: 'Racial/ethnic identity (optional)', status: 'incomplete' },
  { id: 'nyc-housing-plan', label: 'Five-month New York living plan', status: 'incomplete' },
];

export const pioneerWorksChecklistFields: {
  id: string;
  label: string;
  status: PrivateFieldStatus | 'draft-ready';
  note?: string;
}[] = [
  { id: 'residency-track', label: 'Residency: Visual Arts', status: 'draft-ready' },
  { id: 'availability', label: 'Availability (Feb–Jun / Jul–Dec 2027)', status: 'incomplete' },
  { id: 'visited', label: 'Have you visited Pioneer Works?', status: 'incomplete' },
  { id: 'how-heard', label: 'How did you hear about it?', status: 'incomplete' },
  { id: 'email', label: 'Email (m@moises.tech)', status: 'draft-ready' },
  { id: 'website', label: 'Single website URL', status: 'draft-ready' },
  { id: 'time-at-pw', label: 'How would you use your time at Pioneer Works?', status: 'draft-ready' },
  { id: 'interest', label: 'What interests you in Pioneer Works?', status: 'draft-ready' },
  { id: 'work-samples-desc', label: 'Work samples description', status: 'draft-ready' },
  { id: 'cv', label: 'CV (≤3 pages)', status: 'incomplete', note: 'Verify against /cv/artist before upload' },
];

export const pioneerWorksSubmissionChecklist = [
  'Confirm residency window availability in the form',
  'Confirm visited / not visited',
  'Confirm US citizen or resident (private)',
  'Paste three narrative answers within word limits',
  'Upload five work samples in safer order; verify file sizes',
  'Attach artist CV under three pages',
  'Set single website URL to https://www.moises.tech',
  'Complete private identity/address fields only in the official form',
  'Do not claim residency awarded or studio assigned',
] as const;

export const pioneerWorksHubSeo = {
  title: 'Pioneer Works 2027 — MACHINE SENTENCES | Moises Sanabria',
  description:
    'Application packet for the 2027 Pioneer Works Visual Arts Residency: MACHINE SENTENCES — a five-month studio investigation in which language acquires physical posture.',
} as const;

export type { GrantPlaceholderMedia };
