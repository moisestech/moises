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
      'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and software engineer whose work materializes the Internet as object, performance, and infrastructure. Working between academic aesthetics and internet culture, he uses familiar objects, humor, and computational systems to examine how networked technologies reorganize value, labor, attention, belief, and identity. His technical background is not separate from the artistic practice; it is one of the materials of the work.',
  },

  currentInquiry: {
    title: 'Current Inquiry: Who Can Say No?',
    proposition: 'Efficiency is not the same as agency.',
    content:
      'Who Can Say No? grows from a long-running question in my practice: how the Internet transforms the value of objects, labor, and attention by routing them through systems that are increasingly automated. AI changes the stakes because software can now move beyond organizing information toward recommending, generating, communicating, routing, scheduling, and executing increasingly complex actions. AI is collapsing the distance between intention and execution while making the chain of responsibility between them longer. I am interested in the agency gap between convenience and meaningful control, consent, and responsibility: who initiates, frames, recommends, decides, executes, alters, refuses, and bears the consequences.',
    method:
      'I begin with a real delegated action, map the actors and decision points around it, identify one contradiction, and translate that contradiction into a materially simple sculpture or performance. These works are material arguments, not illustrations of technology. The map is a research instrument for finding where optimization, responsibility, consent, hesitation, and refusal become unstable. Peer disagreement is part of the method: if another reading relocates agency, the map changes, and so does what I materialize next.',
  },

  technology: {
    title: 'From Systems to Material',
    content:
      'Because I also build technological systems, I am interested in translating relationships I understand through software into physical situations that do not require technical expertise to encounter. Rather than reproduce the complexity of an AI model, CRM, fabrication workflow, or automated communication chain, I reduce a system to a familiar object, gesture, or contradiction. As intelligence becomes cheaper, faster, and more widely distributed through platforms, I am interested in what remains distinctly human: judgment, context, embodiment, trust, responsibility, care, and refusal. The practical question is whether automation can regenerate human agency rather than simply increase output.',
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
    bio: 'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and software engineer whose work materializes the Internet as object, performance, and infrastructure. Working between academic aesthetics and internet culture, he uses familiar objects, humor, and computational systems to examine how networked technologies reorganize value, labor, attention, belief, and identity. He is Co-founder and Creative Director of AI24 Live and works across art, software, fabrication, and education in Miami.',
    closing:
      'For exhibitions, public programs, writing, workshops, or artist-led technology conversations, please get in touch.',
    links: [
      { label: 'CV', href: '/cv/artist' },
      { label: 'Full portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
