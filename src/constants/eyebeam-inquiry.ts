/**
 * Eyebeam inquiry page copy
 * Curated continuation of an email — research dossier tone
 */

export const EYEBEAM_INQUIRY = {
  hero: {
    headline: 'Materializing the Internet',
    subheadline:
      'Who Can Say No? Material studies of agency, refusal, and distributed technological systems.',
    intro:
      'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and software engineer. His work materializes the Internet through sculpture, performance, moving image, and computational systems. Across his practice, he examines how networked technologies transform value, labor, attention, identity, and belief—and how digital systems move from tools into environments that increasingly act on physical and social life.',
  },

  currentInquiry: {
    title: 'Current Inquiry: Who Can Say No?',
    proposition: 'Efficiency is not the same as agency.',
    content:
      'Who Can Say No? grows from a long-running question in my practice: how the Internet transforms the value of objects, labor, and attention by routing them through systems that are increasingly automated. AI changes the stakes because software can now move beyond organizing information toward recommending, generating, communicating, routing, scheduling, and executing increasingly complex actions. AI is collapsing the distance between intention and execution while making the chain of responsibility between them longer. The project asks where agency remains inside those chains: who initiates, frames, recommends, decides, executes, alters, refuses, and bears the consequences.',
    method:
      'I begin with a real delegated action, map the actors and decision points around it, identify one contradiction, and translate that contradiction into a materially simple sculpture or performance. The map is not the artwork; it is a research instrument for finding where optimization, responsibility, consent, hesitation, and refusal become unstable. Peer disagreement is part of the method: if another reading relocates agency, the map changes, and so does what I materialize next.',
  },

  technology: {
    title: 'From Systems to Material',
    content:
      'Because I also build technological systems, I am interested in translating relationships I understand through software into physical situations that do not require technical expertise to encounter. Rather than reproduce the complexity of an AI model, CRM, fabrication workflow, or automated communication chain, I reduce a system to a familiar object, gesture, or contradiction. This lets me ask a practical question with artistic stakes: can automation increase human agency rather than simply increase output? The work looks for the point where efficiency expands capacity, where it redistributes responsibility, and where it begins to optimize away reflection, consent, memory, or the ability to say no.',
  },

  selectedWorks: [
    {
      slug: 'five_million_dollars',
      title: '5 Million Dollars 1 Terabyte',
      year: 2011,
      medium: 'ART404 (Manuel Palou and Moises Sanabria). Sculpture.',
      description:
        'A store-bought black hard drive on a plinth holds roughly a terabyte of pirated software, games, music, and books valued at approximately five million dollars, compressing questions of ownership, copying, scarcity, and value into an ordinary object.',
      relevance: 'An early example of the method: an invisible digital economy becomes legible through a materially simple contradiction.',
      images: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791657685/art/moisestech-website/artworks/2011_5_million_1_terabyte/art404_5-million-dollars-1-terabyte_02_pedestal-angle_4180px.jpg',
          caption: '5 Million Dollars 1 Terabyte, 2011.',
        },
        {
          type: 'image',
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791657657/art/moisestech-website/artworks/2011_5_million_1_terabyte/art404_5-million-dollars-1-terabyte_06_moises-sanabria-with-the-work_941px.jpg',
          caption: 'Moises Sanabria with the work.',
          alt: 'Moises Sanabria standing beside the hard drive on its plinth.',
        },
        {
          type: 'image',
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791657652/art/moisestech-website/artworks/2011_5_million_1_terabyte/art404_5-million-dollars-1-terabyte_01_transmediale-2012-vitrine_photo-genz-lindner_4928px.jpg',
          caption:
            'Installation view, Dark Drives, transmediale 2012, Berlin. © Genz, Lindner / transmediale, CC BY-NC-SA.',
        },
      ],
    },
    {
      slug: 'doomscrolling_treadmill',
      title: 'Doom Scrolling Treadmill',
      year: 2024,
      medium: '24-hour durational performance.',
      description:
        'Doom Scrolling Treadmill turns the feed into a bodily loop, collapsing work, entertainment, movement, and attention into the same repetitive action.',
      relevance: 'The same method moves from the object to the body: platform attention becomes physical labor, repetition, and time.',
      images: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791558664/art/moisestech-website/artworks/2024-doomscrolling-treadmill-touch-grass-station/moises-sanabria-doom-scrolling-treadmill-11_v04wjo.jpg',
          caption: 'Treadmill facing a coding workstation and three vertical screens.',
        },
        {
          type: 'image',
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791558667/art/moisestech-website/artworks/2024-doomscrolling-treadmill-touch-grass-station/moises-sanabria-doom-scrolling-treadmill-12_yr8vyk.jpg',
          caption: 'The performer on the treadmill at the workstation, with the grass station to the left.',
        },
        {
          type: 'image',
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791558668/art/moisestech-website/artworks/2024-doomscrolling-treadmill-touch-grass-station/moises-sanabria-doom-scrolling-treadmill-9_w0niny.jpg',
          caption: 'The treadmill, three screens, and a grass patch outlined in green light. The LED sign reads TOUCH GRASS.',
        },
      ],
    },
  ],

  contact: {
    bio: 'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and software engineer whose work materializes the Internet through sculpture, performance, moving image, and computational systems. His practice examines how networked technologies transform value, labor, attention, identity, and belief. He is Co-founder and Creative Director of AI24 Live and works across art, software, fabrication, and education in Miami.',
    closing:
      'For exhibitions, public programs, writing, workshops, or artist-led technology conversations, please get in touch.',
    links: [
      { label: 'CV', href: '/cv/artist' },
      { label: 'Full portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
