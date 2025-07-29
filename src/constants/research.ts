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

export interface ResearchItem {
  title: string;
  year: number;
  description: string;
  essay?: string;
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
    description: "The Algorithm is Outside, an art project by Moises Sanabria, interrogates how machine intelligence permeates daily life, public space, and collective behavior. This work can be framed within contemporary machine philosophy and critical theory that question the blurring of human and technological realms.",
    essay: `The Algorithm is Outside, an art project by Moises Sanabria, interrogates how machine intelligence permeates daily life, public space, and collective behavior. This work can be framed within contemporary machine philosophy and critical theory that question the blurring of human and technological realms. Philosopher Bernard Stiegler asserts that technology (technics) is not external to humanity but an essential part of it – an exteriorisation of memory and thought that fundamentally shapes human experience.

Similarly, Yuk Hui emphasizes that modern algorithms are more than tools; they inhabit a technical milieu that co-constitutes our thinking and culture. In this view, the "algorithm outside" is literally an externalized mind, a cognitive architecture in the public domain that we continuously interact with and "permanently negotiate" as it changes us.

AI, Infrastructure, and Everyday Life as Technological Habitat
As algorithms migrate from laboratories into infrastructure and public space, theorists warn of new power dynamics. Shoshana Zuboff's notion of surveillance capitalism details how ubiquitous AI and data capture turn daily life into a raw material for profit, "exploiting human nature" just as industrial capitalism once exploited nature. The algorithmic systems that govern social media feeds, smart city sensors, or navigation maps now actively shape our movements and choices.

Digital Behavior and Collective Rituals in the Public Sphere
Beyond infrastructure, The Algorithm is Outside delves into the social and ritualistic dimensions of our entanglement with AI. Byung-Chul Han laments the "disappearance of rituals" in hyper-digital society – the erosion of shared temporal structures and communal practices that ground meaning. In place of traditional rituals, we witness the rise of algorithmically mediated behaviors: the swipes, likes, and navigation routes that millions perform in unison, guided by the gentle coercion of code.`,
    implementation: {
      timeline: "Starting in September 2025",
      locations: [
        "Urban Parks: Bayfront Park, Maurice A. Ferré Park",
        "Community Spaces: Wynwood Walls area, Little Haiti Cultural Complex",
        "Beachfront Locations: South Pointe Park, North Beach Bandshell"
      ],
      technical_setup: "The installation will be constructed using accessible 'Pro-Jax' scaffold systems, either 12' or 18' units with guardrails and outriggers, to securely hold six vertically-mounted screens. An industrial engineer will audit the scaffolding to ensure structural integrity, portability, and rapid installation, enabling two people to fully assemble the structure in less than one hour.",
      collaborations: [
        "Installation Specialist: Ensuring structural safety and ease of assembly",
        "Documentation Team: Professional videographers and photographers",
        "Local Organizations: Community arts groups and neighborhood associations"
      ],
      documentation: "High-quality video and photography documentation will be integral, creating an interactive online archive and promoting dialogue around digital and physical community interactions.",
      relevant_experience: "Previous projects, including 'Google Gradients' (2015) and 'Doomscrolling Marathon' (2024), demonstrate Sanabria's ability to effectively transform complex digital phenomena into engaging physical installations."
    },
    budget: {
      items: [
        { name: "Scaffold unit", amount: 2179 },
        { name: "Installation Specialist", amount: 1500 },
        { name: "Documentation & Videographer", amount: 500 },
        { name: "Travel and Logistics", amount: 500 },
        { name: "Electric chargers", amount: 821 },
        { name: "Contingency/Insurance", amount: 500 }
      ],
      total: 6000
    },
    supplemental_materials: [
      {
        title: "Internet Scaffold Assembly Guide",
        content: [
          "Frame Assembly: Illustration of assembling the Pro-Jax scaffold unit",
          "Securing Scaffold: Image showing how to firmly secure outriggers and guard rails",
          "TV Mounting: Illustration detailing the attachment of mounting brackets",
          "Cable Management: Depiction of neatly routing HDMI and power cables",
          "Battery Setup: Illustration showing placement of rechargeable battery units",
          "Activation: Final image of completed assembly with all TVs powered on",
          "Safety Notice: Important: Consult installation specialist for assembly audit prior to public activation."
        ]
      }
    ],
    interactiveContent: [
      {
        type: 'highlight',
        text: 'machine philosophy',
        content: {
          text: 'Contemporary philosophical framework examining the relationship between human consciousness and technological systems, particularly how machines extend and transform human capabilities.',
          link: {
            url: 'https://www.e-flux.com/journal/86/161887/cosmotechnics-as-cosmopolitics/',
            label: 'Read more on e-flux'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Bernard Stiegler',
        content: {
          text: 'French philosopher who argues that technology (technics) is not external to humanity but an essential part of it – an exteriorisation of memory and thought that fundamentally shapes human experience.',
          link: {
            url: 'https://en.wikipedia.org/wiki/Bernard_Stiegler',
            label: 'Learn more about Stiegler'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Yuk Hui',
        content: {
          text: 'Philosopher who emphasizes that modern algorithms are more than tools; they inhabit a technical milieu that co-constitutes our thinking and culture.',
          link: {
            url: 'https://www.e-flux.com/journal/86/161887/cosmotechnics-as-cosmopolitics/',
            label: 'Read Hui\'s work'
          }
        }
      },
      {
        type: 'highlight',
        text: 'surveillance capitalism',
        content: {
          text: 'A new economic order that claims human experience as free raw material for hidden commercial practices of extraction, prediction, and sales.',
          link: {
            url: 'https://en.wikipedia.org/wiki/Surveillance_capitalism',
            label: 'Learn more on Wikipedia'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Shoshana Zuboff',
        content: {
          text: 'Professor and author who coined the term "surveillance capitalism" and details how ubiquitous AI and data capture turn daily life into a raw material for profit.',
          link: {
            url: 'https://en.wikipedia.org/wiki/Shoshana_Zuboff',
            label: 'Learn more about Zuboff'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Byung-Chul Han',
        content: {
          text: 'Philosopher who discusses the "disappearance of rituals" in hyper-digital society and the erosion of shared temporal structures.',
          link: {
            url: 'https://english.elpais.com/',
            label: 'Read Han\'s analysis'
          }
        }
      },
      {
        type: 'highlight',
        text: 'digital rituals',
        content: {
          text: 'The emergence of algorithmically mediated behaviors that replace traditional communal practices, creating new forms of collective experience.',
          link: {
            url: 'https://english.elpais.com/',
            label: 'Read more about digital rituals'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Pro-Jax scaffold systems',
        content: {
          text: 'Industrial-grade scaffold systems used for the installation, providing a modular and portable infrastructure for public display.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596908/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image3-2025_wtttsq.png',
            alt: 'Pro-Jax scaffold system in use'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Google Gradients',
        content: {
          text: 'Previous project by Moises Sanabria (2015) that demonstrated effective transformation of digital phenomena into physical installations.',
          link: {
            url: 'https://moises.tech/artworks/google-gradients',
            label: 'View Google Gradients'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Doomscrolling Marathon',
        content: {
          text: 'Recent project by Moises Sanabria (2024) exploring digital behaviors and collective experiences.',
          link: {
            url: 'https://moises.tech/artworks/doomscrolling-marathon',
            label: 'View Doomscrolling Marathon'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Bayfront Park',
        content: {
          text: 'One of the key installation locations in Miami, representing the intersection of public space and digital infrastructure.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596908/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image3-2025_wtttsq.png',
            alt: 'Installation at Bayfront Park'
          }
        }
      },
      {
        type: 'highlight',
        text: 'Wynwood Walls',
        content: {
          text: 'Community space where the installation will be displayed, highlighting the intersection of art, technology, and public engagement.',
          image: {
            src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596909/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image1-2025_lqf7zs.png',
            alt: 'Installation at Wynwood Walls'
          }
        }
      }
    ],
    artistic_intent: "To make visible the invisible workings of AI in public space, treating the algorithm as an embodied actor in our shared environment rather than a black-box confined to screens. The project aims to transform the algorithm from an occult mechanism of control into an object of communal inquiry and ritual.",
    technical_requirements: {
      power: [
        'Rechargeable battery packs for mobile units',
        'Outdoor electric chargers',
        'HDMI control units for content management',
        'Backup power systems for continuous operation'
      ],
      mounting: [
        'Pro-Jax scaffold systems (12\' or 18\' units)',
        'Guardrails and outriggers',
        'TV mounting brackets',
        'Cable management system'
      ],
      space: {
        pedestal_size: 'Variable based on scaffold unit',
        wall_clearance: 'Minimum 3 feet for public interaction',
        power_access: 'Requires proximity to power source or battery charging station'
      },
      interactive_elements: [
        'Six vertically-mounted screens',
        'QR code submission system',
        'Content curation interface',
        'Documentation equipment'
      ]
    },
    components: {
      structure: {
        material: 'Industrial-grade scaffold components',
        customization: [
          'Screen mounting system',
          'Cable routing channels',
          'Weather protection elements'
        ]
      },
      hardware: {
        model: 'Pro-Jax scaffold system',
        specifications: [
          'Portable and modular design',
          'Safety-certified components',
          'Weather-resistant materials',
          'Quick-assembly system'
        ],
        power_requirements: 'Multiple power options (battery/AC)'
      },
      mounting: {
        type: [
          'Scaffold frame',
          'Screen brackets',
          'Cable management'
        ],
        materials: [
          'Steel scaffold components',
          'Aluminum mounting hardware',
          'Weather-resistant cables'
        ]
      },
      display: {
        pedestal: 'Scaffold base with integrated power management',
        lighting: 'Ambient lighting for evening visibility'
      }
    },
    materials: [
      'Pro-Jax scaffold system',
      'Six TV screens',
      'Mounting brackets',
      'Power management system',
      'HDMI control units',
      'Documentation equipment',
      'Safety equipment',
      'Transportation materials'
    ],
    dimensions: 'Variable based on scaffold unit (12\' or 18\')',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596908/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image3-2025_wtttsq.png',
        caption: 'Conceptual rendering of the installation in Bayfront Park, Miami'
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596909/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image1-2025_lqf7zs.png',
        caption: 'Conceptual rendering of the installation in Wynwood Walls area'
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596910/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image2-2025_t9y9ur.png',
        caption: 'Conceptual rendering of the installation in South Pointe Park'
      },
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743596910/art/moisestech-website/research/the-algorithm-is-outside/WaveMaker-NewProject-MoisesSanabria-TheAlgorithmIsOutside-Image4-2025_nbriyb.png',
        caption: 'Conceptual rendering of the installation in North Beach Bandshell'
      }
    ],
    tags: [
      'public art',
      'digital infrastructure',
      'surveillance capitalism',
      'machine philosophy',
      'interactive installation',
      'social media',
      'urban intervention',
      'community engagement',
      'digital culture',
      'critical theory',
      'scaffold installation',
      'public space',
      'AI art',
      'urban technology',
      'social practice'
    ],
    interpretation: "The project examines how algorithms have become embedded in our physical environment, transforming public space into a technological habitat. Through its public installation format, it makes visible the invisible forces that shape our daily lives and collective behaviors.",
    exhibition: 'Multiple public locations in Miami, 2025',
    installation_notes: [
      'Requires professional installation audit',
      'Regular power management monitoring',
      'Weather protection measures',
      'Safety protocol implementation',
      'Community engagement coordination',
      'Scaffold assembly verification',
      'Screen calibration and testing',
      'Power system maintenance',
      'Documentation setup'
    ],
    future_iterations: [
      'Expanded location network',
      'Enhanced interactive features',
      'Community content curation platform',
      'Documentation archive development',
      'Mobile app integration',
      'Additional screen configurations',
      'Advanced weather protection',
      'Solar power integration',
      'Extended battery life systems'
    ],
    on_view: false,
    enhancedDescriptions: {
      overview: "The Algorithm is Outside explores the intersection of digital infrastructure and public space. Through its conceptual framework and physical manifestation, the project examines how algorithms shape our collective behavior and transform urban environments into technological habitats. The installation's modular design allows for flexible deployment across various public locations, creating a network of algorithmic interventions that make visible the invisible forces shaping our daily lives.",
      essay: "This critical examination of algorithmic influence in public space draws from contemporary machine philosophy and critical theory. The project's theoretical framework engages with key concepts in surveillance capitalism, digital culture, and the evolving relationship between human consciousness and technological systems. Through its public installation format, the work creates a space for communal inquiry into the ways algorithms mediate our experience of urban environments.",
      implementation: "The project's implementation strategy focuses on creating a scalable, modular system that can be deployed across multiple public locations in Miami. Each installation site is carefully selected to maximize public engagement and create meaningful interactions with the surrounding urban context. The technical setup combines industrial-grade scaffolding with digital displays, creating a temporary infrastructure that transforms public space into a site of algorithmic intervention.",
      budget: "The project's budget is structured to support both the physical infrastructure and the digital components of the installation. Key investments include the scaffold system, display technology, and power management solutions. The budget also accounts for professional installation, documentation, and contingency funds to ensure successful deployment across multiple locations.",
      technical: "The technical requirements for The Algorithm is Outside are designed to ensure reliable operation in various outdoor conditions. The installation combines industrial-grade scaffolding with weather-resistant digital displays and power management systems. Each component is carefully selected for durability, ease of installation, and maintenance in public spaces.",
      gallery: "The gallery showcases conceptual renderings of The Algorithm is Outside in various public locations throughout Miami. Each image represents a different site-specific installation, demonstrating how the work adapts to and transforms different urban contexts. The renderings highlight the project's modular design and its potential to create meaningful interactions between digital infrastructure and public space."
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
  }
};
