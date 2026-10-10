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
      'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and AI/full-stack engineer. His work materializes the internet through sculpture, performance, machine learning, and networked systems—making visible the infrastructures that shape how we see, feel, work, and believe. Across installations, public research, and technical experimentation, he examines how digital systems move from being tools into environments that structure collective life.',
  },

  currentInquiry: {
    title: 'Current Inquiry: Who Can Say No?',
    content:
      'Who Can Say No? is a series of material studies about agency, refusal, and distributed technological systems. It starts from one question: what happens to agency when an action can no longer be traced to a single actor, but moves across people, machines, interfaces, institutions, and infrastructures? The working hypothesis is that agency is not only the ability to act. It may also be the ability to interrupt, redirect, decline, or refuse. If systems act for us, then the ability to stop them, slow them, or say no becomes the most fragile form of agency we have. Stepping away does not stop the system.',
  },

  technology: {
    title: 'Technology in the Practice',
    content:
      'Technology in my work is both medium and subject. I use machine learning, software, livestream systems, public interfaces, and sculptural assemblage not simply as tools, but as ways to investigate how computation becomes social form. My practice is interested in the point where infrastructure becomes aesthetic, where interface becomes behavior, and where invisible technical systems become bodily and cultural realities.',
  },

  selectedWorks: [
    {
      slug: 'five_million_dollars',
      title: '5 Million Dollars 1 Terabyte',
      year: 2011,
      medium: 'ART404 (Manuel Palou and Moises Sanabria). Sculpture.',
      description:
        'Manuel Palou and Moises Sanabria met at New World School of the Arts and formed ART404. The hard drive was Moises’s. They traveled to transmediale 2012 together. A store-bought black hard drive on a plinth holds roughly a terabyte of pirated software, games, music, and books.',
      relevance: 'Same method, 2011 to 2024: an invisible system inside a familiar object.',
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
      relevance: 'Same method, 2011 to 2024: a familiar action holds the system.',
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
    bio: 'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist and AI/full-stack engineer. He is Co-founder and Creative Director of AI24 Live, Digital Technical Director at Oolite Arts, and a resident artist at Bakehouse Art Complex. His work spans sculpture, installation, machine learning, and live systems, focusing on how technological infrastructures shape perception, labor, and collective life.',
    closing:
      'For exhibitions, public programs, writing, workshops, or artist-led technology conversations, please get in touch.',
    links: [
      { label: 'CV', href: '/cv/artist' },
      { label: 'Full portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
