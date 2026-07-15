/**
 * Shared artist materials for Pioneer Works 2027 Visual Arts Residency
 * Private completeness is status-only — never personal values.
 */
import type { GrantPlaceholderMedia } from '@/components/grant/shared/GrantProposalUi';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Hub pill statuses — never paired with secret values */
export type FieldCompletenessStatus =
  | 'complete'
  | 'incomplete'
  | 'optional'
  | 'verify-in-form'
  | 'draft-ready';

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
  applicationOrder: number;
  proposalOrder: number;
  mimeType?: string;
  fileSizeBytes?: number;
  fileSizeStatus: 'under-50mb-unverified' | 'placeholder' | 'verified';
  formatStatus: 'ready' | 'placeholder' | 'needs-check';
  captionStatus: 'draft-ready' | 'placeholder' | 'needs-check';
  assetVerification: 'verified' | 'placeholder' | 'needs-file-check';
  factualVerification: 'verified' | 'provisional' | 'unverified';
  permissionStatus: 'artist-owned' | 'collaborative' | 'unverified';
  photographer?: string;
  notes: string;
  physicallyBuilt: boolean;
};

/** Safer upload order: established works first, proposal study last */
export const pioneerWorksWorkSamples: WorkSampleAsset[] = [
  {
    id: 'baby-agi',
    title: 'Baby AGI / From Cradle to AGI',
    year: 2023,
    medium: 'Gaming-computer stroller, robotic hands, electronics, and mixed media',
    dimensions: '120 cm × 60 cm × 100 cm (L × W × H) — verify for form',
    context:
      'A speculative infant-machine body treats artificial general intelligence as something culturally raised, consumerized, and cared for before it exists.',
    slug: 'baby_agi',
    image: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    applicationOrder: 1,
    proposalOrder: 2,
    mimeType: 'image/webp',
    fileSizeStatus: 'under-50mb-unverified',
    formatStatus: 'ready',
    captionStatus: 'draft-ready',
    assetVerification: 'verified',
    factualVerification: 'verified',
    permissionStatus: 'artist-owned',
    notes: 'Application order 1. Confirm upload file size under 50 MB.',
    physicallyBuilt: true,
  },
  {
    id: 'digital-divinities',
    title: 'Digital Divinities',
    year: 2023,
    medium:
      'Interactive AI installation using visitor portraits, custom software, displays, and projected imagery',
    dimensions: 'Dimensions variable',
    context:
      'Participants’ images become algorithmic muses, connecting contemporary model systems to older rituals of image-making, belief, and devotion.',
    slug: 'digital_divinities',
    image: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    collaborator: 'Fabiola Larios',
    applicationOrder: 2,
    proposalOrder: 3,
    mimeType: 'image/png',
    fileSizeStatus: 'under-50mb-unverified',
    formatStatus: 'ready',
    captionStatus: 'draft-ready',
    assetVerification: 'verified',
    factualVerification: 'verified',
    permissionStatus: 'collaborative',
    notes: 'Credit Fabiola Larios. Confirm upload file size under 50 MB.',
    physicallyBuilt: true,
  },
  {
    id: 'doomscrolling-treadmill',
    title: 'Doomscrolling Treadmill',
    year: 2024,
    medium: 'Twenty-four-hour performance with treadmill, computer, livestream, and TikTok feed',
    dimensions: 'Dimensions variable',
    context:
      'The artist walks, codes, and consumes an endless vertical feed, turning platform labor and compulsive attention into physical endurance.',
    slug: 'doomscrolling_treadmill',
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    applicationOrder: 3,
    proposalOrder: 4,
    mimeType: 'image/jpeg',
    fileSizeStatus: 'under-50mb-unverified',
    formatStatus: 'ready',
    captionStatus: 'draft-ready',
    assetVerification: 'verified',
    factualVerification: 'verified',
    permissionStatus: 'artist-owned',
    notes: 'Application order 3. Confirm upload file size under 50 MB.',
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
    applicationOrder: 4,
    proposalOrder: 5,
    mimeType: 'image/jpeg',
    fileSizeStatus: 'under-50mb-unverified',
    formatStatus: 'ready',
    captionStatus: 'draft-ready',
    assetVerification: 'verified',
    factualVerification: 'verified',
    permissionStatus: 'artist-owned',
    notes: 'Application order 4. Confirm upload file size under 50 MB.',
    physicallyBuilt: true,
  },
  {
    id: 'machine-sentence-no-1',
    title: 'Machine Sentence No. 1 — work in progress',
    year: 2026,
    medium:
      'Work-in-progress concept and digital movement study: displays, structural armature, custom software, and sound',
    dimensions: 'Proposed approximately 78 × 48 × 36 inches — provisional',
    context:
      'Human language is translated into a constrained sculptural grammar of attention, refusal, compression, aperture, and contradiction. The physical sculpture has not yet been fabricated.',
    applicationOrder: 5,
    proposalOrder: 1,
    fileSizeStatus: 'placeholder',
    formatStatus: 'placeholder',
    captionStatus: 'placeholder',
    assetVerification: 'placeholder',
    factualVerification: 'provisional',
    permissionStatus: 'artist-owned',
    notes:
      'CONCEPT STUDY — WORK NOT YET FABRICATED. [PLACEHOLDER — AUTHENTIC ASSET REQUIRED]',
    physicallyBuilt: false,
  },
];

export const pioneerWorksArtistBio = `Moises Sanabria is a Venezuelan-born, Miami-based artist whose work merges machine philosophy, memetics, and branding to critique networked life. Bridging conceptual art and software engineering, he treats AI, livestreams, interactive installations, and new-media sculpture as one vocabulary. He is co-founder of AI24 Live and an early member of ART404. His work has been presented internationally, including at Transmediale, Haus der Kulturen der Welt, ICA Miami, Superblue, MUNAG, and MOMus. He holds a BFA from The Cooper Union and studied at the School for Poetic Computation.`;

export const pioneerWorksUnverifiedClaims = [
  'Residency has not been awarded.',
  'Portal openness and deadline require manual verification (artist-supplied July 17 vs public listing of July 13 / possible closed portal).',
  'Final studio assignment, access, and conditions are unknown.',
  'Physical Machine Sentence No. 1 has not yet been fabricated or exhibited.',
  'Exact dimensions of the central work are provisional (~78 × 48 × 36 inches proposed).',
  'Exact screen count remains unresolved.',
  'Motors and enclosure systems remain unresolved.',
  'Work-sample dimensions and upload file sizes require verification against form limits.',
  'Facilities access depends on program rules and scheduling — not guaranteed unrestricted access.',
  'Housing and travel plan are not represented publicly.',
  'Public participation design for Second Sundays remains in development.',
  'The $5,000 residency award is not a dedicated fabrication budget.',
] as const;

export const pioneerWorksPrivateFields: {
  id: string;
  label: string;
  status: FieldCompletenessStatus;
}[] = [
  { id: 'date-of-birth', label: 'Date of birth', status: 'incomplete' },
  { id: 'us-citizen-or-resident', label: 'US citizen or resident', status: 'verify-in-form' },
  { id: 'current-address', label: 'Current address', status: 'incomplete' },
  { id: 'telephone', label: 'Telephone', status: 'incomplete' },
  { id: 'gender-identity', label: 'Gender identity', status: 'optional' },
  { id: 'racial-ethnic-identity', label: 'Racial/ethnic identity', status: 'optional' },
  { id: 'availability', label: 'Availability selection', status: 'verify-in-form' },
  { id: 'visited', label: 'Have you visited Pioneer Works?', status: 'verify-in-form' },
  { id: 'how-heard', label: 'How did you hear about the opportunity?', status: 'verify-in-form' },
];

export const pioneerWorksChecklistFields: {
  id: string;
  label: string;
  status: FieldCompletenessStatus;
  note?: string;
}[] = [
  { id: 'residency-track', label: 'Residency: Visual Arts', status: 'complete' },
  { id: 'availability', label: 'Availability (Feb–Jun / Jul–Dec 2027)', status: 'verify-in-form' },
  { id: 'visited', label: 'Have you visited Pioneer Works?', status: 'verify-in-form' },
  { id: 'how-heard', label: 'How did you hear about it?', status: 'verify-in-form' },
  { id: 'email', label: 'Email', status: 'complete' },
  { id: 'website', label: 'Single website URL', status: 'complete' },
  { id: 'time-at-pw', label: 'How would you use your time at Pioneer Works?', status: 'draft-ready' },
  { id: 'interest', label: 'What interests you in Pioneer Works?', status: 'draft-ready' },
  { id: 'work-samples-desc', label: 'Work samples description', status: 'draft-ready' },
  {
    id: 'cv',
    label: 'CV (≤3 pages)',
    status: 'incomplete',
    note: 'Verify against /cv/artist before upload',
  },
  {
    id: 'deadline',
    label: 'Deadline verification',
    status: 'verify-in-form',
    note: 'Conflicting public information — no countdown',
  },
];

export const pioneerWorksSubmissionChecklist = [
  'Manually verify deadline and portal status before treating submission as open',
  'Confirm residency window availability in the form',
  'Confirm visited / not visited',
  'Complete US citizen or resident confirmation only in the official form',
  'Paste three narrative answers within word limits',
  'Upload five work samples in safer order; verify each file under 50 MB',
  'Attach artist CV under three pages',
  'Set single website URL to https://www.moises.tech',
  'Complete private identity/address fields only in the official form',
  'Do not claim residency awarded, studio assigned, or portal open without verification',
] as const;

export const pioneerWorksHubSeo = {
  title: 'Pioneer Works 2027 — MACHINE SENTENCES | Moises Sanabria',
  description:
    'Application packet for the 2027 Pioneer Works Visual Arts Residency: MACHINE SENTENCES — a five-month studio investigation in which language acquires physical posture.',
} as const;

export type { GrantPlaceholderMedia };
