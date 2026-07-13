/**
 * Private Submittable copy for No Vacancy 2026 (CTA-2026-002).
 * Not routed publicly — copy/paste into http://cityofmiamibeach.submittable.com/submit
 */
import { cvData } from '@/constants/cv';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';

export type NoVacancyWorkSample = {
  title: string;
  medium: string;
  dimensions: string;
  date: string;
  location: string;
  client: string;
  budget?: string;
  description: string;
  cloudinaryUrl: string;
  slug: string;
};

export const noVacancy2026Meta = {
  callId: 'CTA-2026-002',
  projectName: 'No Vacancy, Miami Beach',
  deadline: 'Thursday, July 16, 2026, 5:00 pm EST',
  submittableUrl: 'http://cityofmiamibeach.submittable.com/submit',
  stipend: '$10,000 all-inclusive per selected artist',
  researchPageUrl: 'https://moises.tech/grant/no-vacancy-2026/volver-a-valer',
  hubPageUrl: 'https://moises.tech/grant/no-vacancy-2026',
  touchGrassGrantUrl: 'https://moises.tech/grant/no-vacancy-2026/touch-grass',
  touchGrassResearchUrl: 'https://moises.tech/research/touch-grass-circuit-floor',
  website: cvData.contact.website,
  email: cvData.contact.email,
  instagram: cvData.contact.socialMedia[0]?.url ?? 'https://www.instagram.com/moisesdsanabria/',
  headshotUrl: moisesSanabriaHeadshot,
  contacts: [
    {
      name: 'Danielle Bender',
      role: 'Cultural Affairs Manager',
      phone: '305-673-7577 Ext. 26256',
      email: 'daniellebender@miamibeachfl.gov',
    },
    {
      name: 'Oscar Rieveling Sanchez',
      role: 'Art in Public Places Coordinator',
      phone: '305-673-7577 Ext. 22711',
      email: 'oscarrievelingsanchez@miamibeachfl.gov',
    },
  ],
} as const;

/** ≤250 words — paste into Submittable Artist Statement field */
export const noVacancyArtistStatement = `I am a Miami-based interdisciplinary artist whose work materializes what it feels like to live inside algorithmic networks. Born in Venezuela and based in South Florida, I treat reclaimed electronics, consumer objects, and code as sculptural vocabulary—not as a separate technical identity, but as integrated mediums within a coherent installation practice.

My work asks how platform logic, attention economies, and digital labor rewrite trust, desire, and the body. Early installations such as Doomscrolling Treadmill (2024) and Touch Grass Station (2024) staged durational encounters with the feed: viewers walked, scrolled, or paused between screen life and physical ground. Sculptures including Smart Shoppers (2024), Price of Existence (2024), Privacy Is a Luxury (2025), and Simulation Faith (2025) transform familiar hardware into polished, symbolically dense objects that make networked life legible in public space.

I fabricate and install my own work, from modular electronics to full-scale sculptural assemblies. I am interested in artworks that make complexity felt first—in the gut—and parsed intellectually second. That friction between digital infrastructure and lived emotion is where my practice lives.`;

/** Paste into Submittable Project Statement field — primary proposal: Volver a Valer */
export const noVacancyProjectStatement = {
  interestAndApproach: `No Vacancy offers a rare context: Miami Beach hotels as temporary public galleries during Art Week, when the city’s hospitality architecture becomes a stage for contemporary art. I am drawn to this program because it places work inside spaces of transit, leisure, and spectacle—where visitors already negotiate desire, consumption, and image—while keeping the work free and accessible to the public.

For this application I propose Volver a Valer: A Study in Migrating Value. A hotel waiting or check-in environment is transformed into a field of money, receipts, reflective surfaces, and objects associated with movement and exchange. Venezuelan bolívares form the primary material; remittance receipts, U.S. currency fragments, hotel pricing, and shipping labels broaden the work toward Latin American migration experienced as systems—not as a pan-Latin collage of national symbols.

From a distance the installation reads as abundance. At closer range that abundance destabilizes: currencies do not hold equal value, receipts describe care and labor, and the hotel’s own prices become part of the artwork. Visitors encounter themselves reflected in an oil-black surface. The hopeful layer: currency can collapse without collapsing the value of the people who carried it. Full proposal: https://moises.tech/grant/no-vacancy-2026/volver-a-valer`,

  idealSiteConditions: `Ideal placement is a publicly accessible waiting alcove, check-in adjacent wall, or lounge edge where a partial wrap or long currency field can occupy enough architecture to read as an environment—not a tabletop object—without blocking required circulation. The work includes a clear bypass route and mechanically fastened modular panels designed for temporary installation. Final layout will be determined collaboratively with Cultural Affairs staff and the assigned property.`,
} as const;

export const noVacancyWorkSamples: NoVacancyWorkSample[] = [
  {
    title: 'Smart Shoppers',
    medium: 'New Media Installation',
    dimensions: '42 × 20 × 36 in.',
    date: '2024',
    location: 'CONTINUUM at MUNAGGT, Antigua Guatemala',
    client: 'Fundación Paiz',
    description:
      'Glowing 3D-printed brains overflow a shopping cart—cognition staged as a consumer product in the age of AI.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    slug: 'smart_shoppers',
  },
  {
    title: 'Baby AGI',
    medium: 'Mixed Media Installation with Generative Animation',
    dimensions: '120 × 60 × 100 cm (L × W × H)',
    date: '2023',
    location: 'Swenson Gallery, Bakehouse Art Complex, Miami',
    client: 'Breadbytes: Artmaking for the Next Generation',
    description:
      'Smart baby stroller assembled from gaming components and AI-enhanced GPUs—technological materiality as sculptural metaphor.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
    slug: 'baby_agi',
  },
  {
    title: 'Doom Scrolling Treadmill',
    medium: 'Durational Performance Installation',
    dimensions: 'Variable installation footprint',
    date: '2024',
    location: 'Chroma Art Film Festival, Miami',
    client: 'Chroma Art Film Festival',
    description:
      '24-hour performance trapping the body in the feed—walking, coding, and scrolling as embodied participation.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
    slug: 'doomscrolling_treadmill',
  },
  {
    title: 'Privacy Is a Luxury',
    medium: 'Mixed-media sculpture',
    dimensions: '24 × 18 × 14 in. (incl. router antennas)',
    date: '2025',
    location: 'Studio / exhibition documentation',
    client: 'Self-produced',
    description:
      'Gold Guy Fawkes mask with VPN terminal and Wi-Fi routers—privacy transformed from right into purchasable product.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
    slug: 'privacy_is_a_luxury',
  },
  {
    title: 'Price of Existence',
    medium: 'Sculpture',
    dimensions: '170 × 45 × 30 cm',
    date: '2024',
    location: 'CONTINUUM at MUNAG, Antigua Guatemala',
    client: 'Fundación Paiz',
    description:
      'Human skeleton wrapped in 100 million Venezuelan Bolívares—mortality and ephemeral wealth in public installation.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg',
    slug: 'price_of_existence',
  },
  {
    title: 'Simulation Faith',
    medium: 'Mixed-media installation',
    dimensions: '3 × 2 × 1.5 ft. sculpture; variable installation space',
    date: '2025',
    location: 'Studio / exhibition documentation',
    client: 'Self-produced',
    description:
      'Suspended baby Jesus with glowing VR headset—sacred iconography rewired by technological mediation.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
    slug: 'simulation_faith',
  },
  {
    title: 'Touch Grass Station',
    medium: 'Performance installation',
    dimensions: 'Variable installation footprint',
    date: '2024',
    location: 'Chroma Art Film Festival, Miami',
    client: 'Chroma Art Film Festival',
    description:
      'Internet-native “touch grass” command staged as tactile counterpoint to Doomscrolling Treadmill—conceptual precedent for Circuit Floor.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
    slug: 'touchgrass_station',
  },
  {
    title: 'Price of Existence (detail)',
    medium: 'Sculpture',
    dimensions: '170 × 45 × 30 cm',
    date: '2024',
    location: 'CONTINUUM at MUNAG, Antigua Guatemala',
    client: 'Fundación Paiz',
    description: 'Detail view—currency wrapping skeletal form, material transformation at institutional scale.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg',
    slug: 'price_of_existence',
  },
  {
    title: 'Doom Scrolling Treadmill (alternate view)',
    medium: 'Durational Performance Installation',
    dimensions: 'Variable installation footprint',
    date: '2024',
    location: 'Chroma Art Film Festival, Miami',
    client: 'Chroma Art Film Festival',
    description: 'Alternate documentation—paired stations staging screen life against physical ground.',
    cloudinaryUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-4_qjc5w3.jpg',
    slug: 'doomscrolling_treadmill',
  },
];

/** Word count helper for artist statement verification */
export const noVacancyArtistStatementWordCount = noVacancyArtistStatement.split(/\s+/).filter(Boolean).length;
