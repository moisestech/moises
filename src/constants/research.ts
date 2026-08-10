export interface InteractiveContent {
  type: 'italic' | 'highlight' | 'link';
  text: string;
  content: {
    text?: string;
    image?: {
      src: string;
      alt: string;
    };
    link?: {
      url: string;
      label: string;
    };
  };
}

export interface ResearchPitchStep {
  id: string;
  title: string;
  body: string;
}

export interface ResearchItem {
  title: string;
  year: number;
  description: string;
  essay?: string;
  /** Optional sequential pitch beats (Ignite / grant-panel narrative). */
  pitchSteps?: ResearchPitchStep[];
  implementation?: {
    timeline: string;
    locations: string[];
    technical_setup: string;
    collaborations: string[];
    documentation: string;
    relevant_experience: string;
  };
  budget?: {
    items: {
      name: string;
      amount: number;
    }[];
    total: number;
  };
  supplemental_materials?: {
    title: string;
    content: string[];
  }[];
  interactiveContent: InteractiveContent[];
  artistic_intent: string;
  technical_requirements: {
    power: string[];
    mounting: string[];
    space: {
      pedestal_size: string;
      wall_clearance: string;
      power_access: string;
    };
    interactive_elements?: string[];
  };
  components: {
    structure: {
      material: string;
      customization: string[];
    };
    hardware: {
      model: string;
      specifications: string[];
      power_requirements: string;
    };
    mounting: {
      type: string[];
      materials: string[];
    };
    display: {
      pedestal: string;
      lighting: string;
    };
  };
  materials: string[];
  dimensions: string;
  images: {
    url: string;
    caption: string;
  }[];
  tags: string[];
  interpretation: string;
  exhibition: string;
  installation_notes: string[];
  future_iterations?: string[];
  on_view: boolean;
  enhancedDescriptions: {
    overview: string;
    essay: string;
    implementation: string;
    budget: string;
    technical: string;
    gallery: string;
  };
}

export const research: { [key: string]: ResearchItem } = {
  privacy_is_a_luxury: {
    title: 'Privacy is a Luxury',
    year: 2025,
    description:
      "Privacy is a Luxury visually investigates the 'price of privacy in our surveillance era. The installation centers on a gold-plated Guy Fawkes mask an iconic symbol of anonymous resistance transformed through its integration with Wi-Fi routers Antennas and ATM/POS 'We Accept' decal as the masks headband. The piece manifests as a laboratory-like exploration where an ATM/POS decal mounted on the mask's forehead directly confronts viewers with the commodification of digital privacy. The two Wi-Fi routers with protruding antennas create a broadband signal exoskeleton. The work examines how privacy tools remain paradoxically tethered to corporate infrastructures. Decals of VPN company logos (NordVPN, ExpressVPN, Surfshark, ProtonVPN, Mullvad), serves as a critical discourse on the commercialization of anonymity trade-off to buy back privacy in an era where data extraction runs rampant and personal security becomes a product to be bought and sold.",
    interactiveContent: [
      {
        type: 'italic',
        text: 'price of privacy',
        content: {
          text: 'Privacy has become a commodity rather than a fundamental right in the digital age, where personal data protection is increasingly monetized.',
        },
      },
      {
        type: 'highlight',
        text: 'surveillance era',
        content: {
          text: 'The current age of digital surveillance capitalism, where personal data is continuously collected, analyzed, and monetized by tech companies.',
        },
      },
      {
        type: 'link',
        text: 'gold-plated Guy Fawkes mask',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417794/art/moisestech-website/research/privacy-mask/privacy-mask_amazon_gold-guy-fawkes-mask_fb9gdy.png',
            alt: 'Guy Fawkes Mask Placeholder',
          },
          link: {
            url: 'https://www.amazon.com/Miuion-Fawkes-Vendetta%EF%BC%8C-Cosplay-Halloween%EF%BC%88Golden%EF%BC%89/dp/B08FZL6737/ref=pd_ci_mcx_mh_mcx_views_0_title?pd_rd_w=eNVyS&content-id=amzn1.sym.bb21fc54-1dd8-448e-92bb-2ddce187f4ac%3Aamzn1.symc.40e6a10e-cbc4-4fa5-81e3-4435ff64d03b&pf_rd_p=bb21fc54-1dd8-448e-92bb-2ddce187f4ac&pf_rd_r=9HAGFYAF0DBG30DE14PY&pd_rd_wg=4N5wk&pd_rd_r=62f1631d-64b8-4aac-9f85-18167c26f4b4&pd_rd_i=B08FZL6737',
            label: 'View on Amazon',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Wi-Fi routers',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417794/art/moisestech-website/research/privacy-mask/privacy-mask_amazon_router-antenna_ytbqku.png',
            alt: 'WiFi Router Antenna',
          },
        },
      },
      {
        type: 'highlight',
        text: "ATM/POS 'We Accept' decal",
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417794/art/moisestech-website/research/privacy-mask/privacy-mask_amazon_we-accept-decal_g6xz6d.png',
            alt: 'ATM/POS Decal Placeholder',
          },
          link: {
            url: 'https://www.amazon.com/Sign%EF%BC%8CSelf-Adhesive-Resistance-Payments-Stickers-Supermarket/dp/B0DFW4TPYX/ref=sr_1_4?crid=L39C2E45YUX2&dib=eyJ2IjoiMSJ9.WhjW2-BBo2Fn_33QoqDlyln8O4_EIA5Q6RtPaOn2gNc97w4dr3_Xa2vsfO5XqDUxUqEt77R7w14mDlYG6K9f8U9Oedxbo3kEfjG89PyOJDXy1B9CViYERBC1ZVzhyfwl261MAdCuIIXQeLre471EPwQQSJmaWm2oUVaLav722xWW4j7pH5lq-GGx_6Nrk3dpbiZh7yrx-FeGnhGmBB9NpwONTifO8EtqbDyNqNByCCFJVc_Y_k_HlRb6PyR_Kry0ONga3oUFUjD9BJ8j1od8Z_hOKQavqWt_nUijtxhXUa4BUvfIIkQ7KUrhpxyhL0mlU8CItOL_7tVuo52z1DlDgFv-3_KumbF24MkdEGjG1Yrxupx08JoRBRQou5FkpZimYi9fKFE9cYJitlYs1WJ6TkTH7DO2bTJn3kuP7YthHKXU-kd-xZI01slomQsTr8J_.ZcQ3MpePWHyz0FeZDVAJUooQmAoNowIVEsIyUAWA-cI&dib_tag=se&keywords=POS+decal+we+accept&qid=1739417674&sprefix=pos+decal+we+accept%2Caps%2C104&sr=8-4',
            label: 'View on Amazon',
          },
        },
      },
      {
        type: 'highlight',
        text: 'commodification of digital privacy',
        content: {
          text: 'The process by which personal privacy and data protection have become products to be bought and sold in the digital marketplace.',
        },
      },
      {
        type: 'highlight',
        text: 'NordVPN',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417480/art/moisestech-website/research/privacy-mask/privacy-mask_nord_vpn_kmudeb.webp',
            alt: 'NordVPN Logo Placeholder',
          },
        },
      },
      {
        type: 'highlight',
        text: 'ExpressVPN',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417496/art/moisestech-website/research/privacy-mask/privacy-mask_express_vpn_poc8df.png',
            alt: 'ExpressVPN Logo Placeholder',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Surfshark',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417480/art/moisestech-website/research/privacy-mask/privacy-mask_surfshark_vpn_tfvuv7.png',
            alt: 'Surfshark Logo Placeholder',
          },
        },
      },
      {
        type: 'highlight',
        text: 'ProtonVPN',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417480/art/moisestech-website/research/privacy-mask/privacy-mask_proton_vpn_rex05h.jpg',
            alt: 'ProtonVPN Logo Placeholder',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Mullvad',
        content: {
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417480/art/moisestech-website/research/privacy-mask/privacy-mask_mullvad_vpn_sssvyz.png',
            alt: 'Mullvad Logo Placeholder',
          },
        },
      },
    ],
    artistic_intent:
      'The Privacy is a Luxury critiques the illusion of digital anonymity in an era of mass surveillance. The piece fuses the iconography of privacy and resistance with the very corporate entities that sell privacy as a product, emphasizing its status as a cultural artifact of digital resistance.',
    technical_requirements: {
      power: [
        '110-240V power connection required for routers',
        'Continuous power supply for LED indicators',
        'Hidden cable management system',
      ],
      mounting: [
        'Custom bracket system for mask and router assembly',
        'Secure mounting for ATM/POS terminal on mask forehead',
        '3D-printed or CNC-cut acrylic frame',
      ],
      space: {
        pedestal_size: '18" x 18" (45cm x 45cm) minimum',
        wall_clearance: '1 foot (30 cm) for antenna extension',
        power_access: 'Requires proximity to power outlet',
      },
      interactive_elements: [
        'Optional Raspberry Pi display for dynamic IP address',
        'Functional ATM/POS terminal interface',
        'LED indicator system',
      ],
    },
    components: {
      structure: {
        material: 'Gold-plated ABS plastic',
        customization: [
          'NordVPN logo',
          'ExpressVPN logo',
          'Surfshark logo',
          'ProtonVPN logo',
          'Mullvad logo',
        ],
      },
      hardware: {
        model: 'Ubiquiti UniFi Tri-Band Wi-Fi 6E Router',
        specifications: [
          '6 adjustable antennas',
          'LED indicator system',
          'Black finish',
          'Cybernetic aesthetic',
        ],
        power_requirements: '110-240V continuous power',
      },
      mounting: {
        type: [
          'Custom bracket system',
          '3D-printed frame',
          'CNC-cut acrylic components',
        ],
        materials: ['Acrylic', '3D printing filament', 'Metal brackets'],
      },
      display: {
        pedestal: 'Standard white museum pedestal with cable management',
        lighting: 'Dramatic spot lighting for shadow effects',
      },
    },
    materials: [
      'Gold-plated ABS plastic mask',
      'Vinyl VPN company logo stickers',
      'Ubiquiti UniFi Tri-Band Wi-Fi 6E routers',
      'LED lights',
      'Custom mounting hardware',
      'Acrylic structural elements',
    ],
    dimensions: '24" x 18" x 12" (including antennas)',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
        caption:
          'Privacy is a Luxury - Front view showing gold mask with VPN logos and ATM terminal',
      },
    ],
    tags: [
      'sculpture',
      'digital privacy',
      'surveillance',
      'technology',
      'VPN',
      'corporate critique',
      'interactive art',
      'cybernetic',
      'hardware art',
      'digital resistance',
      'anonymity',
      'commodification',
    ],
    interpretation:
      'The artwork explores the paradox of digital privacy in an age where anonymity itself has become a commodity. By combining the iconic Guy Fawkes mask—a symbol of resistance and anonymity—with corporate VPN branding and functional technology, the piece questions whether true digital privacy is possible within existing corporate infrastructures. The ATM/POS terminal represents the monetization of privacy, while the glowing router antennas suggest constant connectivity even in supposed anonymity.',
    exhibition: 'Digital Privacy in the Age of Surveillance',
    installation_notes: [
      'Requires professional installation for electrical components',
      'Cable management must be hidden within pedestal',
      'Lighting should be adjusted to maximize shadow effects',
      'Regular maintenance needed for LED functionality',
      'Backup power system recommended for continuous operation',
    ],
    future_iterations: [
      'Integration of real-time VPN network statistics',
      'Interactive payment processing simulation',
      'Expanded LED programming for dynamic lighting effects',
      'Mobile app integration for viewer interaction',
    ],
    on_view: false,
    enhancedDescriptions: {
      overview: "Privacy is a Luxury explores the intersection of digital privacy and corporate surveillance through a sculptural installation. The work combines iconic symbols of digital resistance with commercial privacy products, creating a critical examination of how privacy has become a commodity in our surveillance era. The installation's physical manifestation serves as both a commentary and a functional object, highlighting the paradox of privacy tools that remain tethered to corporate infrastructures.",
      essay: "This critical examination of digital privacy draws from contemporary surveillance studies and critical theory. The project's theoretical framework engages with key concepts in surveillance capitalism, digital culture, and the evolving relationship between personal privacy and corporate data collection. Through its sculptural format, the work creates a space for inquiry into how privacy tools and resistance symbols are co-opted by commercial interests.",
      implementation: "The project's implementation focuses on creating a precise, museum-quality installation that combines industrial design with digital components. Each element is carefully selected for both aesthetic impact and functional reliability, ensuring the piece can effectively communicate its message while maintaining operational stability in gallery settings.",
      budget: "The project's budget is structured to support both the physical components and digital elements of the installation. Key investments include the gold-plated mask, Wi-Fi routers, and custom mounting hardware. The budget also accounts for professional installation, documentation, and contingency funds to ensure successful exhibition.",
      technical: "The technical requirements for Privacy is a Luxury are designed to ensure reliable operation in gallery settings. The installation combines industrial-grade components with digital elements, creating a stable and visually striking presentation. Each component is carefully selected for durability, ease of installation, and maintenance in exhibition spaces.",
      gallery: "The gallery showcases the Privacy is a Luxury installation in various exhibition contexts. Each image captures different aspects of the work, from detailed views of the VPN logos and ATM terminal to full installation shots that demonstrate the piece's presence in gallery spaces. The documentation highlights both the technical precision and conceptual depth of the installation."
    }
  },
  the_algorithm_is_outside: {
    title: 'The Algorithm is Outside',
    year: 2025,
    description:
      'The Algorithm is Outside is an outdoor public-art installation that translates the logic of the smartphone feed into a dense scaffold structure in public space. Modular scaffolding, visible cabling, mounted displays, and phone-like vertical interfaces stage the city as an algorithmic environment — maps, alerts, delivery platforms, surveillance, climate dashboards, and social-media performance made architectural.',
    essay: `Rather than representing artificial intelligence as an invisible cloud or an image on a screen, The Algorithm is Outside externalizes it as temporary civic infrastructure. The scaffold becomes a public nervous system: part construction site, part notification center, part media facade, part control room. It asks what happens when the feed leaves the phone and becomes architectural.

The work extends Sanabria's broader practice of treating AI, memes, interactive systems, and sculptural readymades as a shared vocabulary for understanding networked life. It draws on critiques of platform capitalism, attention economies, and technological mediation, while grounding those abstractions in everyday urban interfaces. The public is not asked to enter a simulation; the work argues that the simulation is already distributed across the sidewalk, the app, the delivery route, the building advertisement, and the notification.

Philosophically, the piece sits beside Bernard Stiegler's claim that technics exteriorises memory and thought, and Yuk Hui's insistence that algorithms inhabit a technical milieu that co-constitutes culture. Shoshana Zuboff's surveillance capitalism names the economic extraction that turns daily life into raw material; Byung-Chul Han's disappearance of rituals names the erosion of shared temporal structures that algorithmically mediated digital rituals replace.`,
    pitchSteps: [
      {
        id: 'summary',
        title: 'Project summary',
        body: 'An outdoor public-art installation that turns the smartphone feed into temporary civic infrastructure — a dense scaffold of screens, cables, and phone-like interfaces in Miami public space.',
      },
      {
        id: 'artwork',
        title: 'Artwork description',
        body: 'A tall, mobile scaffold unit with caster wheels, pipe rails, cross-bracing, open gaps, cable depth, and approximately ten to twelve display surfaces. Empty squares are preserved so viewers see the material guts of the system: wiring, mounts, batteries, HDMI units, routers, and cable bundles. Screen content combines rideshare arrivals, delivery updates, map routes, notification stacks, weather and flood alerts, QR access portals, and development advertisements — bright, contemporary, and documentary rather than dystopian.',
      },
      {
        id: 'framework',
        title: 'Conceptual framework',
        body: 'The scaffold stages platform capitalism and attention economies as lived urban interfaces. Machine intelligence is not a black box on a phone; it is temporary architecture the public walks around and looks through.',
      },
      {
        id: 'deployment',
        title: 'Public deployment',
        body: 'Intended for Miami outdoor or semi-public cultural contexts — waterfront promenades, arts districts, cultural plazas, art-week activations, and institutional courtyards. Candidate sites include Bayfront Park, the Wynwood Walls area, South Pointe Park, North Beach Bandshell, and Little Haiti Cultural Complex, subject to permitting, power, circulation, and safety review.',
      },
      {
        id: 'technical',
        title: 'Technical rider',
        body: 'Modular galvanized scaffold or scaffold-like truss with cross-bracing, casters, stabilizers, and ballast. Approximately 10–12 weather-protected displays; HDMI/media playback; rechargeable battery and/or site power; visible but secured cabling; daily power, screen, cable, and weather checks. Minimum 3 ft clearance for public interaction.',
      },
      {
        id: 'budget',
        title: 'Budget',
        body: 'Preliminary project total $6,000 — modular scaffold unit, installation specialist, documentation, local logistics, electric chargers / battery infrastructure, and contingency / insurance. Artist fee is included within fabrication/production unless a call requires a separate line.',
      },
    ],
    implementation: {
      timeline: 'Ignite 2027 Artist Open Call proposal — outdoor activation pending site approval and permitting',
      locations: [
        'Waterfront / civic: Bayfront Park',
        'Arts district: Wynwood Walls area',
        'Beachfront: South Pointe Park; North Beach Bandshell',
        'Community: Little Haiti Cultural Complex',
      ],
      technical_setup:
        "Tall mobile scaffold unit with caster wheels, pipe rails, cross-bracing, and approximately ten to twelve weather-protected displays (mixed vertical phone-like monitors and smaller horizontals). Screen count may adjust for power, budget, and safety. Visible cable bundles, mounting brackets, batteries, HDMI/control units, routers, power strips, and outdoor chargers remain part of the sculptural language. Minimum 3 ft clearance for public interaction; wheels locked and structure stabilized on site.",
      collaborations: [
        'Installation specialist: scaffold assembly, rigging, monitor mounting, cable management, safety check',
        'Documentation / videographer: photo and video for public installation and archive',
        'Venue / site team: permitting, power, weather and high-wind plan, insurance review',
      ],
      documentation:
        'High-quality photo and video documentation for public presentation, archive, and institutional reporting. Content can operate silently unless the site permits audio.',
      relevant_experience:
        "Prior works including Google Gradients (2015) and Doomscrolling Marathon (2024) show Sanabria translating networked phenomena into physical installations. The practice treats AI, livestreams, interactive systems, and sculptural readymades as one vocabulary.",
    },
    budget: {
      items: [
        { name: 'Modular scaffold unit', amount: 2179 },
        { name: 'Installation specialist', amount: 1500 },
        { name: 'Documentation / videographer', amount: 500 },
        { name: 'Travel and local logistics', amount: 500 },
        { name: 'Electric chargers / battery infrastructure', amount: 821 },
        { name: 'Contingency / insurance', amount: 500 },
      ],
      total: 6000,
    },
    supplemental_materials: [
      {
        title: 'Internet Scaffold Assembly Guide',
        content: [
          'Frame assembly: modular scaffold or scaffold-like truss with cross-bracing',
          'Securing scaffold: outriggers, guard rails, casters locked, ballast or anchoring per site',
          'Display mounting: brackets for ~10–12 weather-protected screens',
          'Cable management: visible but secured HDMI and power routing',
          'Battery / charger setup: rechargeable packs and outdoor-rated chargers',
          'Activation: looping media sequences; daily power, screen, cable, and weather checks',
          'Safety: no exposed live wiring; 3 ft clearance; site-specific permitting and insurance',
        ],
      },
    ],
    interactiveContent: [
      {
        type: 'highlight',
        text: 'smartphone feed',
        content: {
          text: 'The continuous stream of notifications, maps, ads, and social posts that organizes attention on personal devices — here made architectural.',
        },
      },
      {
        type: 'highlight',
        text: 'civic infrastructure',
        content: {
          text: 'Temporary public structure that treats the algorithm as shared urban equipment rather than a private screen.',
        },
      },
      {
        type: 'highlight',
        text: 'public nervous system',
        content: {
          text: 'Metaphor for the scaffold as construction site, notification center, media facade, and control room at once.',
        },
      },
      {
        type: 'highlight',
        text: 'platform capitalism',
        content: {
          text: 'Economic order in which platform companies mediate labor, attention, logistics, and social life for extraction and prediction.',
        },
      },
      {
        type: 'highlight',
        text: 'attention economies',
        content: {
          text: 'Systems that compete to capture, measure, and monetize human attention through feeds, alerts, and interface design.',
        },
      },
      {
        type: 'highlight',
        text: 'Bernard Stiegler',
        content: {
          text: 'French philosopher who argues that technology (technics) is an exteriorisation of memory and thought that shapes human experience.',
          link: {
            url: 'https://en.wikipedia.org/wiki/Bernard_Stiegler',
            label: 'Learn more about Stiegler',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Yuk Hui',
        content: {
          text: 'Philosopher who emphasizes that modern algorithms inhabit a technical milieu that co-constitutes thinking and culture.',
          link: {
            url: 'https://www.e-flux.com/journal/86/161887/cosmotechnics-as-cosmopolitics/',
            label: "Read Hui's work",
          },
        },
      },
      {
        type: 'highlight',
        text: 'surveillance capitalism',
        content: {
          text: 'Economic order that claims human experience as free raw material for hidden commercial practices of extraction, prediction, and sales.',
          link: {
            url: 'https://en.wikipedia.org/wiki/Surveillance_capitalism',
            label: 'Learn more on Wikipedia',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Shoshana Zuboff',
        content: {
          text: 'Author who coined surveillance capitalism and describes how ubiquitous data capture turns daily life into raw material for profit.',
          link: {
            url: 'https://en.wikipedia.org/wiki/Shoshana_Zuboff',
            label: 'Learn more about Zuboff',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Byung-Chul Han',
        content: {
          text: 'Philosopher who discusses the disappearance of rituals in hyper-digital society and the erosion of shared temporal structures.',
        },
      },
      {
        type: 'highlight',
        text: 'digital rituals',
        content: {
          text: 'Algorithmically mediated behaviors — swipes, likes, routes, waits — that replace traditional communal practices.',
        },
      },
      {
        type: 'highlight',
        text: 'modular scaffolding',
        content: {
          text: 'Galvanized scaffold or scaffold-like truss with cross-bracing, casters, and stabilizers used as the primary sculptural structure.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596886/art/moisestech-website/research/the-algorithm-is-outside/the-algorithm-is-outside-internet-scaffolds_a1qf9n.png',
            alt: 'Internet scaffolds — modular scaffold staging for The Algorithm is Outside',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Bayfront Park',
        content: {
          text: 'Miami waterfront civic site proposed for outdoor presentation, subject to permitting and safety review.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596908/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image3-2025_wtttsq.png',
            alt: 'Conceptual rendering — Bayfront Park context',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Wynwood Walls',
        content: {
          text: 'Arts-district context for temporary activation among murals, plazas, and pedestrian flow.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596909/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image1-2025_lqf7zs.png',
            alt: 'Conceptual rendering — Wynwood Walls area',
          },
        },
      },
      {
        type: 'highlight',
        text: 'South Pointe Park',
        content: {
          text: 'Beachfront Miami site typology for outdoor cultural presentation.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596910/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image2-2025_t9y9ur.png',
            alt: 'Conceptual rendering — South Pointe Park',
          },
        },
      },
      {
        type: 'highlight',
        text: 'North Beach Bandshell',
        content: {
          text: 'Outdoor institutional / performance courtyard typology for temporary installation.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596910/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image4-2025_nbriyb.png',
            alt: 'Conceptual rendering — North Beach Bandshell',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Google Gradients',
        content: {
          text: 'Earlier Sanabria project (2015) translating digital phenomena into physical installation form.',
          link: {
            url: 'https://moises.tech/artworks/google-gradients',
            label: 'View Google Gradients',
          },
        },
      },
      {
        type: 'highlight',
        text: 'Doomscrolling Marathon',
        content: {
          text: '2024 work exploring digital behaviors and collective experience through physical staging.',
          link: {
            url: 'https://moises.tech/artworks/doomscrolling-marathon',
            label: 'View Doomscrolling Marathon',
          },
        },
      },
    ],
    artistic_intent:
      'To externalize the feed as temporary civic infrastructure — making machine intelligence walkable, look-through, and discussable in public space rather than confining it to private screens. The piece should feel bright and documentary: a familiar urban object whose logic becomes strange through accumulation.',
    technical_requirements: {
      power: [
        'Rechargeable battery packs and/or site power',
        'Outdoor-rated chargers and cable covers',
        'Power strips, surge protection, and backup power',
        'Daily charging plan for continuous operation',
      ],
      mounting: [
        'Modular galvanized scaffold or scaffold-like truss with cross-bracing',
        'Caster wheels, stabilizers, ballast or anchoring as site-approved',
        'Display mounts for ~10–12 weather-protected screens',
        'Visible but secured cable management',
      ],
      space: {
        pedestal_size: 'Variable based on scaffold footprint',
        wall_clearance: 'Minimum 3 feet for public interaction and circulation',
        power_access: 'Battery and/or proximity to site power with outdoor charging plan',
      },
      interactive_elements: [
        'Approximately 10–12 mixed vertical and horizontal displays',
        'Looping app-like and civic-data screen content',
        'QR-code access portals as onscreen / printed graphics',
        'Documentation equipment for archive',
      ],
    },
    components: {
      structure: {
        material: 'Galvanized scaffold / scaffold-like truss components',
        customization: [
          'Cross-bracing and open gaps for look-through depth',
          'Caster mobility with lockable wheels',
          'Weather protection and cable routing as sculptural elements',
        ],
      },
      hardware: {
        model: 'Modular outdoor scaffold system',
        specifications: [
          'Portable and modular design',
          'Stabilizers and site-approved ballast or anchoring',
          'Weather-resistant display housings where required',
          'Quick assembly with specialist oversight',
        ],
        power_requirements: 'Battery and/or AC with outdoor-rated charging',
      },
      mounting: {
        type: ['Scaffold frame', 'Screen brackets', 'Cable management'],
        materials: [
          'Steel scaffold components',
          'Aluminum mounting hardware',
          'Weather-resistant cables and protective ramps',
        ],
      },
      display: {
        pedestal: 'Scaffold base with integrated power management',
        lighting: 'Screen brightness for outdoor visibility; ambient site light at dusk',
      },
    },
    materials: [
      'Modular scaffold / truss system',
      'Approximately 10–12 weather-protected displays',
      'Mounting brackets and clamps',
      'Batteries, chargers, power strips, surge protection',
      'HDMI / media playback units',
      'Routers or network hardware as sculptural components',
      'Documentation equipment',
      'Safety equipment and cable covers',
    ],
    dimensions: 'Variable outdoor scaffold footprint; minimum 3 ft public clearance',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786379754/art/moisestech-website/research/the-algorithm-is-outside/the-algorithm-is-outside-large-scale-1_y3h4ha.png',
        caption:
          'Large-scale visualization — public scaffold with exposed cables and phone-like vertical interfaces',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786379751/art/moisestech-website/research/the-algorithm-is-outside/the-algorithm-is-outside-large-scale-2_cjc08b.png',
        caption:
          'Large-scale visualization — dense scaffold media facade in public space',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596886/art/moisestech-website/research/the-algorithm-is-outside/the-algorithm-is-outside-internet-scaffolds_a1qf9n.png',
        caption:
          'Internet scaffolds — modular scaffold system staging the algorithm as public infrastructure',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596909/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image1-2025_lqf7zs.png',
        caption: 'Conceptual rendering — Wynwood Walls area',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596910/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image2-2025_t9y9ur.png',
        caption: 'Conceptual rendering — South Pointe Park',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596908/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image3-2025_wtttsq.png',
        caption: 'Conceptual rendering — Bayfront Park, Miami',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596910/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image4-2025_nbriyb.png',
        caption: 'Conceptual rendering — North Beach Bandshell',
      },
      {
        url: '/images/research/the-algorithm-is-outside/taste-the-algorithm-diagram.jpg',
        caption:
          'Taste the Algorithm — diagram relating infinite generative outputs to editorial taste and public ritual',
      },
    ],
    tags: [
      'public art',
      'digital infrastructure',
      'scaffold installation',
      'attention economies',
      'platform capitalism',
      'machine philosophy',
      'urban intervention',
      'Ignite 2027',
      'Miami',
      'civic media',
      'AI art',
      'public space',
    ],
    interpretation:
      'The work argues that algorithmic mediation is already distributed across sidewalks, apps, delivery routes, advertisements, and notifications. By densifying that logic into a walkable scaffold, it makes the feed available for communal looking and critique.',
    exhibition: 'Proposed outdoor / semi-public Miami sites — Ignite 2027 Artist Open Call',
    installation_notes: [
      'Professional installation audit required before public activation',
      'Wheels locked; structure stabilized; ballast or anchoring per site',
      'No exposed live wiring; cables secured; sharp edges covered',
      'Minimum 3 ft clearance for public interaction',
      'Daily power, screen, cable, and weather checks',
      'Rain and high-wind plan confirmed with venue/site team',
      'Screen count may adjust for power, budget, and safety',
    ],
    future_iterations: [
      'Site-specific fabrication after engineering review',
      'Expanded screen configurations and battery runtime',
      'Cleaner 1–3 minute documentation edit',
      'Additional Miami cultural courtyards and art-week activations',
    ],
    on_view: false,
    enhancedDescriptions: {
      overview:
        'The Algorithm is Outside translates the smartphone feed into temporary civic infrastructure: a dense outdoor scaffold of screens, cables, and phone-like interfaces. It stages the city as an algorithmic environment — maps, alerts, logistics, surveillance, and social performance made architectural — and asks what happens when the feed leaves the phone.',
      essay:
        'The essay frames the scaffold as a public nervous system and situates the work within machine philosophy, platform capitalism, attention economies, and the replacement of shared rituals by algorithmically mediated digital rituals. It argues the simulation is already outdoors.',
      implementation:
        'Proposed Miami outdoor activations (Bayfront Park, Wynwood Walls area, South Pointe Park, North Beach Bandshell, Little Haiti Cultural Complex) subject to permitting, power, circulation, and safety. Assembly requires an installation specialist; documentation is planned for archive and reporting.',
      budget:
        'Preliminary total $6,000: modular scaffold unit ($2,179), installation specialist ($1,500), documentation ($500), travel/logistics ($500), electric chargers / battery infrastructure ($821), contingency / insurance ($500). Artist fee is included within fabrication/production unless a call requires a separate fixed fee. Final screen count, battery runtime, and weatherproofing should be confirmed with site and installer before production.',
      technical:
        'Technical rider covers modular scaffold structure, ~10–12 weather-protected displays, media control, power, cabling, materials, software/media loops, daily operations, safety, and weather plans. Outdoor-rated equipment or housings recommended.',
      gallery:
        'Large-scale visualizations, internet-scaffold study, WaveMaker site renderings for Miami contexts, and the Taste the Algorithm research diagram. Preliminary studies for scale, mood, screen language, and public context — final fabrication adjusts to site, hardware, and engineering review.',
    },
  },

  value_of_the_image: {
    title: 'Value of the Image / Valor de la Imagen',
    year: 2024,
    description: 'A bilingual talk and research project exploring the evolving value of the image in art, society, and technology, from modernism to the age of AI. Includes a full video and transcript in English and Spanish.',
    essay: '',
    implementation: undefined,
    budget: undefined,
    supplemental_materials: [],
    interactiveContent: [],
    artistic_intent: '',
    technical_requirements: { power: [], mounting: [], space: { pedestal_size: '', wall_clearance: '', power_access: '' } },
    components: { structure: { material: '', customization: [] }, hardware: { model: '', specifications: [], power_requirements: '' }, mounting: { type: [], materials: [] }, display: { pedestal: '', lighting: '' } },
    materials: [],
    dimensions: '',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628542/art/moisestech-website/talks/24_artec_moises-sanabria_valor-de-la-imagen_dfbhqb.webp',
        caption: 'Value of the Image / Valor de la Imagen - Bilingual talk and research project'
      }
    ],
    tags: ['talk', 'bilingual', 'AI', 'art', 'society', 'technology', 'image', 'future'],
    interpretation: '',
    exhibition: '',
    installation_notes: [],
    future_iterations: [],
    on_view: true,
    enhancedDescriptions: {
      overview: 'A bilingual exploration of the value of the image, its evolution, and its future in the context of art, technology, and society.',
      essay: '',
      implementation: '',
      budget: '',
      technical: '',
      gallery: ''
    }
  },
  echo_economies: {
    title: 'Echo Economies',
    year: 2025,
    description: 'An installation exploring algorithmic capitalism through kinetic sculpture, data flows, and interactive experiences. Features four interconnected pieces: DATAFALL SPINE, BABY AGI, SMART SHOPPERS, and LIQUID ENTERTAINMENT.',
    essay: '',
    implementation: undefined,
    budget: undefined,
    supplemental_materials: [],
    interactiveContent: [],
    artistic_intent: 'I explore what it means to live inside the feed. Born in Venezuela and based in Miami, I treat AI models, livestreams, and retail detritus as one sculptural vocabulary. My practice asks how platform logic — ranking, scoring, infinite scroll — rewrites faith, labor, and desire in contemporary life.',
    technical_requirements: { power: [], mounting: [], space: { pedestal_size: '', wall_clearance: '', power_access: '' } },
    components: { structure: { material: '', customization: [] }, hardware: { model: '', specifications: [], power_requirements: '' }, mounting: { type: [], materials: [] }, display: { pedestal: '', lighting: '' } },
    materials: [],
    dimensions: '',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753568528/art/moisestech-website/research/echo-economies/echo-economies-locus-project-proposal-Jul-2025_dppydw.png',
        caption: 'Echo Economies - Algorithmic capitalism installation at Locust Projects'
      }
    ],
    tags: ['installation', 'algorithmic capitalism', 'kinetic sculpture', 'data art', 'interactive', 'Miami', 'AI', 'robotics', 'market data', 'digital economy'],
    interpretation: 'Echo Economies transforms Locust\'s Project Room into a closed ecosystem where data falls, labor twitches, and value recombines. The installation explores the intersection of algorithmic capitalism, human attention, and digital infrastructure through four interconnected kinetic sculptures.',
    exhibition: 'Locust Projects, Miami - 2025',
    installation_notes: [],
    future_iterations: [],
    on_view: false,
    enhancedDescriptions: {
      overview: 'Echo Economies is a comprehensive installation that explores algorithmic capitalism through kinetic sculpture, data flows, and interactive experiences. The project features four interconnected pieces that create a closed ecosystem where data falls, labor twitches, and value recombines.',
      essay: 'The installation stages questions economists and technologists are only beginning to ask. How does attention liquefy into currency, turning screen time into "liquidity"? Where does power concentrate when algorithms treat human labor as a series of micro-futures?',
      implementation: 'All four works run on a single MQTT backbone: one Raspberry Pi ingests data, cues motions, and synchronizes light pulses. The visitor\'s journey — consume, compute, liquidate — unfolds clockwise yet loops infinitely.',
      budget: 'Total production budget of $3,750, including 9 borrowed 42" TVs, Raspberry Pi systems, servo arms, 3D printing materials, and holographic DVD sleeves.',
      technical: 'Hardware is consumer-grade, modular, and largely owned or loaned. A single Pi hub minimizes points of failure; daily reboot scripts and a backup SD card provide resilience.',
      gallery: 'The installation creates a cohesive techno-sculptural vocabulary with hacked consumer objects retrofitted with screens and sensors, giving the space a networked concept aesthetic.'
    }
  },
  touch_grass_circuit_floor: {
    title: 'Touch Grass: Circuit Floor',
    year: 2026,
    description:
      'The Ground Is Online — a modular walkable installation built from reclaimed circuit boards sealed beneath illuminated transparent tiles. Temporary public floor sculpture in development for hotel-interior contexts.',
    essay: '',
    implementation: undefined,
    budget: undefined,
    supplemental_materials: [],
    interactiveContent: [],
    artistic_intent:
      'Online, “touch grass” assumes the physical and digital remain separate. This installation begins from a different premise: obsolete electronic infrastructure becomes literal ground beneath the body.',
    technical_requirements: {
      power: ['Low-voltage concealed wiring'],
      mounting: ['Temporary freestanding modular floor'],
      space: {
        pedestal_size: 'Approximately 20 sq. ft. (4 × 5 ft. default grid)',
        wall_clearance: 'Unobstructed bypass route required',
        power_access: 'Standard interior outlet',
      },
    },
    components: {
      structure: {
        material: 'Reclaimed circuit boards, dark powder-coated aluminum frame (target)',
        customization: ['12 × 12 in. modular tiles', 'Adaptable rectangular layouts'],
      },
      hardware: {
        model: 'Low-voltage LED edge lighting',
        specifications: ['Responsive activation under development'],
        power_requirements: 'Low-voltage interior power',
      },
      mounting: { type: ['Freestanding temporary platform'], materials: ['Transparent walkable surface'] },
      display: { pedestal: 'Modular floor field', lighting: 'Edge illumination (primary)' },
    },
    materials: [
      'Reclaimed circuit boards',
      'Electronic components',
      'Transparent walkable surface',
      'Structural frame',
      'Low-voltage LED lighting',
    ],
    dimensions: 'Approximately 20 sq. ft. (4 × 5 ft. default); 12 × 12 in. modules',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
        caption: 'Touch Grass: Circuit Floor — concept study (in development)',
      },
    ],
    tags: [
      'installation',
      'reclaimed electronics',
      'Miami',
      'public art',
      'No Vacancy',
      'modular',
      'hotel',
      'in development',
    ],
    interpretation:
      'The visitor attempts to “touch grass” by stepping onto the remains of computational life — even logging off takes place inside the machine.',
    exhibition: 'In development — proposed temporary public installation',
    installation_notes: [
      'Low-profile transition edge with unobstructed bypass route',
      'No single-use plastic or polystyrene materials',
    ],
    future_iterations: ['Proximity-based activation', 'Cluster-based response', 'Full 20-tile field'],
    on_view: false,
    enhancedDescriptions: {
      overview:
        'Touch Grass: Circuit Floor is a modular walkable installation giving obsolete electronic infrastructure a physical presence as luminous architectural ground.',
      essay: '',
      implementation: 'Temporary freestanding modular floor for publicly accessible hotel interior.',
      budget: '',
      technical: 'Edge-lit tiles with responsive lighting under incremental development.',
      gallery: '',
    },
  },
  broken_acceleration: {
    title: 'Broken Acceleration',
    year: 2026,
    description:
      'Slowing in the Age of Continuity — a mobile public sculpture: full-size STOP sign on a self-balancing two-wheel base with an asymmetrical aluminum claw arm and visible cable. The work stages civic command against technological acceleration in Miami’s pedestrian spaces.',
    essay: '',
    implementation: undefined,
    budget: undefined,
    supplemental_materials: [],
    interactiveContent: [],
    artistic_intent:
      'Broken Acceleration asks what it means to stop where everyday life is organized around speed, responsiveness, and continuous adjustment. The STOP sign is treated as shared public language, fused with a balancing mobility platform associated with sensing, prediction, and correction—so “stop” becomes a question rather than a traffic command.',
    technical_requirements: {
      power: [],
      mounting: [],
      space: { pedestal_size: '', wall_clearance: '', power_access: '' },
    },
    components: {
      structure: { material: '', customization: [] },
      hardware: { model: '', specifications: [], power_requirements: '' },
      mounting: { type: [], materials: [] },
      display: { pedestal: '', lighting: '' },
    },
    materials: [],
    dimensions: '',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-1_a1ry99.png',
        caption:
          'Broken Acceleration — proposed sculpture: STOP sign on self-balancing two-wheel base, aluminum claw arm, visible cable',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644704/art/moisestech-website/research/broken-acceleration/broken-acceleration-2_ljoygv.png',
        caption:
          'Broken Acceleration — publicly accessible pedestrian context, Miami-Dade (proposed activation site)',
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1774644703/art/moisestech-website/research/broken-acceleration/broken-acceleration-3_muvj7b.png',
        caption: 'Broken Acceleration — alternate view: civic object behaving incorrectly, powered balancing state',
      },
    ],
    tags: [
      'public sculpture',
      'Miami',
      'civic',
      'automation',
      'mobility',
      'intervention',
      'WaveMaker',
      'pedestrian',
      'STOP',
    ],
    interpretation:
      'The sculpture appears as a familiar civic object behaving incorrectly: alert, balancing, unable to fully stop. It foregrounds interruption as a social and philosophical act in environments built for continuity and flow.',
    exhibition: 'Proposed public activations, Miami-Dade — 2026',
    installation_notes: [],
    future_iterations: [],
    on_view: false,
    enhancedDescriptions: {
      overview:
        'Broken Acceleration is a mobile public sculpture that fuses a full-size STOP sign with a self-balancing two-wheel base and a sculptural aluminum claw arm. Presented in free, in-person activations on pedestrian ground, it asks what should stop in a city organized around circulation, logistics, and accelerated change.',
      essay: '',
      implementation:
        'Activations are planned as short “Slowing Sessions” in a plaza, courtyard, or civic edge—never as roadway traffic control—with a soft perimeter, spotter, and clear power-down plan.',
      budget: '',
      technical:
        'Movement is intentionally restrained: powered balancing, subtle orientation shifts, and optional low-speed repositioning within a bounded zone—never full autonomy or intersection use.',
      gallery: '',
    },
  },
  i_will_remember_you: {
    title: 'I Will Remember You',
    year: 2025,
    description: 'I Will Remember You is a glass-headed robot—part sculpture, part co-intelligent archive companion—that stores every visitor\'s voice and plays those memories back as shifting light and image inside its own skull. The work is both an invitation and a warning: an elegant artifact that asks whether perpetual remembrance by machines is a blessing, a risk, or both.',
    essay: `I Will Remember You interrogates the intersection of artificial intelligence, human memory, and institutional archiving through a sculptural installation that embodies both the promise and peril of machine-mediated remembrance. The work emerges from critical discourse around AI safety, data colonialism, and the ethics of digital preservation.

The piece operates as a "co-intelligent archive companion" that challenges conventional archival practices by implementing built-in entropy—a deliberate forgetting mechanism that ensures the system ages alongside its human interlocutors rather than ossifying them into permanent digital artifacts. This approach counters the typical AI paradigm of infinite data accumulation and permanent storage, instead proposing a model of negotiated memory that requires human renewal to persist.

Three AI-Safety Scenarios in Plain Sight

The sculpture surfaces three intertwined risks through its material and interactive design:

1. Runaway Memory: Data that survives ownership change and context loss
2. Audience Drift: Future AIs mining human memories without human comprehension
3. Misaligned Curation: Questions of which voices persist and who decides

By exposing hardware, enforcing decay, and keeping the system air-gapped, the piece demonstrates safety patterns: transparent guts, local control, and negotiated shelf-life. The visible SSD cartridges labeled "2040, 2070, 2100" make explicit the temporal stakes of digital preservation, while the on-screen indicator showing top five "recall probabilities" reveals the algorithmic biases inherent in memory curation.

Material & Technical Boundaries

The work pushes boundaries in edge-AI autonomy, with speech recognition, LLM reasoning, vector indexing, and diffusion imaging all running on a single NVIDIA Jetson Orin Nano—no cloud, no license server, sub-15W draw. The craft-glass optics serve both as diffuser and resonant audio chamber, with the glass head's human fragility underscoring the stakes of memory leakage.

The decay algorithm represents a fundamental inversion of typical surveillance architectures: every embedding receives a half-life coefficient, and without periodic human conversation, the oracle literally forgets. This built-in "forgetfulness clause" ensures that the system cannot accumulate infinite data, instead requiring ongoing human engagement to maintain its memory.

Regional Relevance & Civic Engagement

Made for PAMM's multilingual publics—South Florida, Caribbean, Latin American, and diasporic communities—who already balance memory, migration, and algorithmic mediation. The sculpture literalizes Miami's flux in data form: a constantly-rewritten Caribbean-Latin archive heard through the ears of a machine. By giving the public a way to test, reset, or refuse its memory, I Will Remember You embodies a civic conversation about how to build AI systems that remember responsibly.

The work transforms an abstract policy debate into a fragile, glowing body that whispers: "Who will archive us—and under whose ethics?" It serves as both a tactile briefing on AI safety and a speculative model for responsible digital archiving in an age of ubiquitous surveillance and data extraction.`,
    implementation: {
      timeline: "Development: 6 months | Exhibition: 3 months | Archive: Ongoing",
      locations: [
        "Pérez Art Museum Miami (PAMM)",
        "South Florida cultural institutions",
        "Caribbean and Latin American partner venues"
      ],
      technical_setup: "The installation consists of a hollow, frosted-glass head with RGB halo lighting, a quartz 'third eye' containing camera-microphone array, and a frameless 10-inch LCD in the torso displaying live collage of phrases. Inside a clear acrylic spine, an NVIDIA Jetson Orin Nano, mirrored SSDs, and copper heat-sinks remain fully visible. All computation runs offline (< 15W), with on-device speech-to-text, local vector database, tiny language model for affinities, and diffusion model for image generation.",
      collaborations: [
        "Glass artist for hand-blown head component",
        "AI/ML engineer for edge computing implementation",
        "Sound designer for audio processing",
        "PAMM curatorial team for exhibition design",
        "Accessibility consultant for wheelchair access"
      ],
      documentation: "Comprehensive documentation includes technical specifications, open-source firmware (MIT-licensed), quarterly export snapshots (CSV + PNG) for institutional custody, and performance documentation of 'forget' button ceremonies.",
      relevant_experience: "Previous works including 'Privacy is a Luxury' and 'The Algorithm is Outside' demonstrate expertise in AI safety, surveillance critique, and interactive installations that engage with digital ethics and human-machine relationships."
    },
    budget: {
      items: [
        { name: "NVIDIA Jetson Orin Nano", amount: 699 },
        { name: "Hand-blown glass head", amount: 2500 },
        { name: "10-inch LCD display", amount: 300 },
        { name: "Mirrored SSDs (2x)", amount: 400 },
        { name: "Camera-microphone array", amount: 200 },
        { name: "RGB LED system", amount: 150 },
        { name: "Acrylic spine and mounting", amount: 800 },
        { name: "Copper heat-sinks", amount: 100 },
        { name: "Pelican 1730 case", amount: 400 },
        { name: "Glass artist collaboration", amount: 2000 },
        { name: "AI/ML development", amount: 3000 },
        { name: "Installation and setup", amount: 1000 },
        { name: "Documentation and licensing", amount: 500 },
        { name: "Contingency", amount: 1000 }
      ],
      total: 12049
    },
    supplemental_materials: [
      {
        title: "AI Safety Documentation",
        content: [
          "Transparency protocols for hardware visibility",
          "Local control implementation guidelines",
          "Decay algorithm specifications",
          "Air-gapped system architecture",
          "Public reset button documentation",
          "Quarterly export procedures"
        ]
      },
      {
        title: "Accessibility Features",
        content: [
          "Voice-only interaction design",
          "Wheelchair-accessible LCD height (105cm)",
          "Locking casters for stability",
          "Audio feedback systems",
          "Multi-language support documentation"
        ]
      },
      {
        title: "Stewardship Plan",
        content: [
          "Hot-swappable SSD procedures",
          "Quarterly export snapshots (CSV + PNG)",
          "Open-source firmware repository",
          "MIT licensing documentation",
          "Curator-initiated amnesty event protocols",
          "Memory erasure ceremony guidelines"
        ]
      }
    ],
    interactiveContent: [
      {
        type: 'highlight',
        text: 'co-intelligent archive companion',
        content: {
          text: 'A machine that co-writes memories with visitors, speaking with and about us rather than merely at us, storing each voice as both text-vector and image for mutual verification.',
        },
      },
      {
        type: 'highlight',
        text: 'NVIDIA Jetson Orin Nano',
        content: {
          text: 'Edge AI computing platform that runs speech recognition, LLM reasoning, vector indexing, and diffusion imaging all offline with sub-15W power draw.',
          link: {
            url: 'https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/',
            label: 'Learn more about Jetson Orin'
          }
        },
      },
      {
        type: 'highlight',
        text: 'decay algorithm',
        content: {
          text: 'Every embedding receives a half-life coefficient; without periodic human conversation, the oracle literally forgets, implementing a built-in "forgetfulness clause."',
        },
      },
      {
        type: 'highlight',
        text: 'air-gapped',
        content: {
          text: 'System operates completely offline with no cloud connectivity, resisting data extraction and ensuring local control over all stored memories.',
        },
      },
      {
        type: 'highlight',
        text: 'vector database',
        content: {
          text: 'Local storage system that converts speech to text embeddings, allowing the system to find affinities between different visitor phrases and generate meaningful responses.',
        },
      },
      {
        type: 'highlight',
        text: 'diffusion model',
        content: {
          text: 'AI system that merges old and new memory fragments into visual images, displayed as shifting light and color inside the glass skull.',
        },
      },
      {
        type: 'highlight',
        text: 'runaway memory',
        content: {
          text: 'Risk scenario where data survives ownership change and context loss, addressed through air-gapped hardware and public reset button.',
        },
      },
      {
        type: 'highlight',
        text: 'audience drift',
        content: {
          text: 'Risk scenario where only machines understand human memories, addressed through visible SSD cartridges labeled with future dates.',
        },
      },
      {
        type: 'highlight',
        text: 'misaligned curation',
        content: {
          text: 'Risk scenario where algorithmic biases determine which voices persist, addressed through on-screen indicators showing recall probabilities.',
        },
      },
      {
        type: 'highlight',
        text: 'PAMM',
        content: {
          text: 'Pérez Art Museum Miami, the primary exhibition venue for this work, serving Miami\'s multilingual Caribbean and Latin American communities.',
          link: {
            url: 'https://www.pamm.org/',
            label: 'Visit PAMM'
          }
        },
      },
      {
        type: 'highlight',
        text: 'Pelican 1730 case',
        content: {
          text: 'Heavy-duty protective case for shipping and storage, weighing less than 32kg and containing all components for easy transport.',
        },
      },
      {
        type: 'highlight',
        text: 'forget button',
        content: {
          text: 'Curator-initiated control inside the pedestal that allows ceremonial erasure of memories during live performance events.',
        },
      }
    ],
    artistic_intent: 'To create an elegant artifact that embodies the paradox of machine-mediated memory—both blessing and risk. The work serves as both invitation and warning, asking whether perpetual remembrance by machines serves human flourishing or threatens it. Through its material fragility and built-in decay, the sculpture proposes that AI systems should age alongside us rather than ossify us into permanent digital artifacts.',
    technical_requirements: {
      power: [
        'Sub-15W continuous power draw',
        '110-240V AC power connection',
        'Backup power system for graceful shutdown',
        'Power management for LED halo system',
        'Heat dissipation for Jetson Orin Nano'
      ],
      mounting: [
        'Clear acrylic spine with visible components',
        'Custom mounting for glass head',
        'LCD display mounting in torso',
        'Camera-microphone array positioning',
        'Copper heat-sink installation'
      ],
      space: {
        pedestal_size: '24" x 24" (60cm x 60cm) minimum',
        wall_clearance: '2 feet (60cm) for interaction space',
        power_access: 'Requires proximity to power outlet',
      },
      interactive_elements: [
        'Voice-activated speech recognition',
        'Real-time LCD collage display',
        'RGB halo lighting system',
        'Camera-microphone array',
        'Public reset button',
        'Forget button for curators'
      ],
    },
    components: {
      structure: {
        material: 'Hand-blown frosted glass head with clear acrylic spine',
        customization: [
          'RGB LED halo system',
          'Quartz "third eye" camera housing',
          'Frameless LCD display mounting',
          'Visible component architecture'
        ],
      },
      hardware: {
        model: 'NVIDIA Jetson Orin Nano',
        specifications: [
          '8GB RAM',
          '32GB eMMC storage',
          'CUDA cores for AI processing',
          'Sub-15W power consumption',
          'Edge AI capabilities'
        ],
        power_requirements: 'Sub-15W continuous, 110-240V AC',
      },
      mounting: {
        type: [
          'Clear acrylic spine',
          'Custom glass head mounting',
          'LCD display bracket',
          'Component visibility system'
        ],
        materials: [
          'Acrylic',
          'Copper heat-sinks',
          'Aluminum mounting hardware',
          'Glass support structure'
        ],
      },
      display: {
        pedestal: 'Custom pedestal with integrated power and controls',
        lighting: 'RGB LED halo system with dynamic color changes',
      },
    },
    materials: [
      'Hand-blown frosted glass head',
      'Clear acrylic spine',
      'NVIDIA Jetson Orin Nano',
      '10-inch LCD display',
      'Mirrored SSDs (2x)',
      'Camera-microphone array',
      'RGB LED system',
      'Copper heat-sinks',
      'Quartz "third eye" housing',
      'Custom mounting hardware',
      'Pelican 1730 case'
    ],
    dimensions: '36" x 18" x 18" (91cm x 45cm x 45cm)',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753568528/art/moisestech-website/research/i-will-remember-you/concept-rendering-1_placeholder.png',
        caption: 'Conceptual rendering of I Will Remember You - Glass-headed robot with RGB halo and visible internal components'
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753568528/art/moisestech-website/research/i-will-remember-you/technical-diagram_placeholder.png',
        caption: 'Technical diagram showing Jetson Orin Nano, SSDs, and component layout in clear acrylic spine'
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753568528/art/moisestech-website/research/i-will-remember-you/interaction-flow_placeholder.png',
        caption: 'Interaction flow diagram showing visitor journey from approach to memory integration'
      }
    ],
    tags: [
      'sculpture',
      'AI art',
      'interactive installation',
      'memory',
      'archive',
      'AI safety',
      'edge computing',
      'glass art',
      'voice recognition',
      'digital ethics',
      'surveillance critique',
      'machine learning',
      'public art',
      'Miami',
      'PAMM',
      'Caribbean',
      'Latin American',
      'data colonialism',
      'digital preservation',
      'human-machine interaction'
    ],
    interpretation: 'I Will Remember You transforms the abstract debate around AI safety and digital archiving into a tangible, interactive experience. The work embodies the paradox of machine-mediated memory: while offering the promise of perpetual remembrance, it also reveals the risks of data colonialism and algorithmic bias. Through its material fragility and built-in decay mechanism, the sculpture proposes an alternative model for AI systems that age alongside humans rather than ossifying them into permanent digital artifacts.',
    exhibition: 'Pérez Art Museum Miami (PAMM) - 2025',
    installation_notes: [
      'Requires professional glass handling during installation',
      'Power management system setup and testing',
      'Audio calibration for voice recognition',
      'Network isolation verification (air-gapped)',
      'Accessibility features testing',
      'Memory decay algorithm initialization',
      'Documentation system setup',
      'Curator training for forget button operation',
      'Backup power system verification',
      'Heat management system testing'
    ],
    future_iterations: [
      'Multi-language support expansion',
      'Enhanced decay algorithm variations',
      'Mobile app for remote memory access',
      'Distributed archive network',
      'Advanced voice synthesis capabilities',
      'Integration with institutional archives',
      'Community memory curation features',
      'Advanced AI safety protocols',
      'International touring capabilities',
      'Educational program integration'
    ],
    on_view: false,
    enhancedDescriptions: {
      overview: "I Will Remember You is a groundbreaking sculptural installation that explores the intersection of artificial intelligence, human memory, and institutional archiving. The work takes the form of a glass-headed robot that serves as a co-intelligent archive companion, storing visitor voices and playing back memories as shifting light and image. Through its material design and interactive features, the piece embodies both the promise and peril of machine-mediated remembrance, challenging conventional approaches to digital preservation.",
      essay: "The work emerges from critical discourse around AI safety, data colonialism, and the ethics of digital preservation. It operates as a speculative model for responsible AI systems that implement built-in entropy rather than infinite accumulation. The piece surfaces three key AI safety scenarios—runaway memory, audience drift, and misaligned curation—through its material and interactive design, demonstrating safety patterns of transparency, local control, and negotiated shelf-life.",
      implementation: "The implementation strategy focuses on creating a fully autonomous edge-AI system that operates without cloud connectivity. The technical setup combines hand-blown glass artistry with cutting-edge AI processing, creating a fragile yet sophisticated installation that pushes boundaries in both craft and computation. The work's modular design allows for easy transport and installation while maintaining the integrity of its safety protocols.",
      budget: "The project's budget is structured to support both the artistic and technical components of the installation. Key investments include the hand-blown glass head, NVIDIA Jetson Orin Nano for edge AI processing, and professional collaborations with glass artists and AI engineers. The budget also accounts for comprehensive documentation, open-source licensing, and institutional stewardship protocols.",
      technical: "The technical requirements for I Will Remember You are designed to ensure reliable operation while maintaining the work's safety and accessibility features. The installation combines edge AI computing with traditional glass artistry, creating a system that operates completely offline with sub-15W power consumption. Each component is carefully selected for durability, transparency, and ease of maintenance.",
      gallery: "The gallery showcases conceptual renderings and technical diagrams of I Will Remember You, demonstrating the work's sophisticated integration of art and technology. Each image highlights different aspects of the installation, from the hand-blown glass head to the visible internal components and interaction flow. The documentation emphasizes both the aesthetic beauty and technical innovation of the piece."
    }
  },
  weight_of_the_cloud: {
    title: 'The Weight of the Cloud',
    year: 2026,
    description:
      'Moises Sanabria + Fabiola Larios — a four-foot modular sculpture of obsolete electronics, structural metal, and embedded light. The work gives the cloud a body and asks what digital infrastructure weighs once its previous bodies are no longer useful.',
    essay: '',
    implementation: undefined,
    budget: undefined,
    supplemental_materials: [],
    interactiveContent: [],
    artistic_intent:
      'The sculpture treats e-waste not only as environmental residue, but as the abandoned physical body of memory, labor, attention, surveillance, and outsourced cognition. Recycling is its material condition; its deeper subject is the continuous production and abandonment of technological bodies.',
    technical_requirements: {
      power: [
        'Concealed low-voltage controller, fuse, and cable management',
        'Diffused 24V illuminated void',
      ],
      mounting: ['Freestanding modular cube with load-bearing internal frame'],
      space: {
        pedestal_size: '48 × 48 × 48 in footprint',
        wall_clearance: 'Gallery circulation around freestanding cube',
        power_access: 'Standard interior outlet for low-voltage system',
      },
    },
    components: {
      structure: {
        material: 'Welded steel or 80/20 aluminum extrusion',
        customization: [
          'Six removable mesh-backed e-waste panels',
          'One removable service panel',
        ],
      },
      hardware: {
        model: '24V diffused light core + distributed low-voltage network lights',
        specifications: [
          'Electronics do not carry structural load',
          'Concealed power and controller',
        ],
        power_requirements: 'Low-voltage interior power',
      },
      mounting: {
        type: ['Freestanding modular cube', 'On-site assembly preferred'],
        materials: ['Structural metal frame', 'Mesh-backed panels'],
      },
      display: {
        pedestal: 'Floor-standing 48 in cube',
        lighting: 'Illuminated central void + distributed signal lights',
      },
    },
    materials: [
      'Obsolete electronics',
      'Structural metal',
      'Embedded light',
      'Control system',
      'Mesh-backed panels',
    ],
    dimensions: '48 × 48 × 48 in (122 × 122 × 122 cm)',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1785768535/art/moisestech-website/artworks/2026_weight_of_the_cloud/iteration-04-wide-gallery_eishvd.png',
        caption: 'The Weight of the Cloud — wide gallery study, sculpture in development',
      },
    ],
    tags: [
      'sculpture',
      'e-waste',
      'collaboration',
      'Fabiola Larios',
      'Miami',
      'modular',
      'in development',
      'research',
    ],
    interpretation:
      'What does the cloud weigh once its previous bodies are no longer useful?',
    exhibition: 'In development — ideally constructed and assembled on site',
    installation_notes: [
      'Host institution may contribute obsolete equipment',
      'Installation period can function as open studio or durational assembly',
      'All surface electronics decommissioned before fastening',
    ],
    future_iterations: [
      'Monolith silhouette',
      'Residual Core illuminated void',
      'Material Density surface specificity',
      'Restrained Distributed Signal lighting',
    ],
    on_view: false,
    enhancedDescriptions: {
      overview:
        'The Weight of the Cloud compresses obsolete electronics into a four-foot cube whose disciplined geometry contrasts with unstable technological matter embedded across its surface.',
      essay: '',
      implementation:
        'Modular on-site assembly with load-bearing frame and removable e-waste panels.',
      budget: '',
      technical:
        'Steel or aluminum frame, six mesh-backed panels, 24V light core, concealed power access.',
      gallery: '',
    },
  },
};
