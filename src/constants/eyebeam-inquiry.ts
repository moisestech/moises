/**
 * Eyebeam inquiry page copy
 * Curated continuation of an email — research dossier tone
 */

export const EYEBEAM_INQUIRY = {
  hero: {
    headline: 'Materializing the Internet',
    subheadline:
      'Works and inquiries by Moises Sanabria on platform logic, attention, belief, and networked life.',
    intro:
      'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and AI/full-stack engineer. His work materializes the internet through sculpture, performance, machine learning, and networked systems—making visible the infrastructures that shape how we see, feel, work, and believe. Across installations, public research, and technical experimentation, he examines how digital systems move from being tools into environments that structure collective life.',
  },

  currentInquiry: {
    title: 'Current Inquiry: Born into the Machine',
    content:
      'Born into the Machine is an ongoing artistic and research framework exploring what happens when technological systems stop feeling like external tools and begin operating as environments. The project looks at how platforms, algorithms, interfaces, and networked infrastructures shape labor, attention, ritual, memory, identity, and belief. Through artworks, writing, talks, and experimental systems, this inquiry asks how digital life becomes lived reality.',
  },

  technology: {
    title: 'Technology in the Practice',
    content:
      'Technology in my work is both medium and subject. I use machine learning, software, livestream systems, public interfaces, and sculptural assemblage not simply as tools, but as ways to investigate how computation becomes social form. My practice is interested in the point where infrastructure becomes aesthetic, where interface becomes behavior, and where invisible technical systems become bodily and cultural realities.',
  },

  selectedWorks: [
    {
      slug: 'doomscrolling_treadmill',
      title: 'Doomscrolling Treadmill',
      year: 2024,
      medium: 'Performance installation with treadmill, screens, workstation, and live platform interface.',
      description:
        'A durational work centered on bodily exhaustion, remote labor, and algorithmic attention capture. While walking on a treadmill, I code, scroll, and work within a mediated environment that collapses labor, performance, and platform dependency into one continuous loop.',
      relevance: 'Examines attention as infrastructure and the body as a site of platform governance.',
      imageUrl:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
    },
    {
      slug: 'simulation_faith',
      title: 'Simulation Faith',
      year: 2025,
      medium: 'Sculptural installation.',
      description:
        'A devotional figure reimagined through synthetic mediation, asking how spiritual symbols persist, mutate, or become absorbed into technologically saturated reality.',
      relevance: 'Explores belief, ritual, and mediated perception in synthetic environments.',
      imageUrl:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
    },
    {
      slug: 'price_of_existence',
      title: 'Price of Existence',
      year: 2024,
      medium: 'Sculpture.',
      description:
        'A human skeleton wrapped in devalued Venezuelan currency, reflecting on collapse, value, extraction, and the instability of material and symbolic systems.',
      relevance: 'Connects economic systems, memory, and embodied precarity.',
      imageUrl:
        'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738035709/art/moisestech-website/price_of_existence_wideshot.png',
    },
  ],

  contact: {
    bio: 'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and AI/full-stack engineer. He is Co-founder and Creative Director of AI24 Live, Digital Technical Director at Oolite Arts, and a resident artist at Bakehouse Art Complex. His work spans sculpture, installation, machine learning, and live systems, focusing on how technological infrastructures shape perception, labor, and collective life.',
    closing:
      'For exhibitions, public programs, writing, workshops, or artist-led technology conversations, please get in touch.',
    links: [
      { label: 'CV', href: '/resume' },
      { label: 'Full portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
