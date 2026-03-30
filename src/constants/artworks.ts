import { InteractiveContent } from './research';

/** Optional venue / funder block for artwork detail footer */
export interface ArtworkExhibitionSupport {
  text: string;
  sponsors?: {
    name: string;
    href?: string;
    logoUrl?: string;
    logoAlt?: string;
  }[];
}

interface Artwork {
  title: string;
  year: number;
  location?: string;
  /** When set, the Location line links here (e.g. official exhibition page). */
  location_url?: string;
  curator?: string;
  collaboration?: string;
  description: string;
  description_es?: string;
  materials?: string[];
  medium?: string;
  dimensions?: string;
  weight?: string;
  price?: string;
  role?: string;
  images: {
    url: string;
    caption?: string;
  }[];
  links?: {
    url: string;
    label: string;
  }[];
  tags: string[];
  interpretation?: string;
  exhibition?: string;
  /** Renders below the page body when present; omit on works without a single venue/funder story. */
  exhibition_support?: ArtworkExhibitionSupport;
  on_view: boolean;
  interactiveContent?: InteractiveContent[];
  technical_requirements?: {
    power?: string[];
    mounting?: string[];
    space?: {
      dimensions?: string;
      requirements?: string[];
    };
  };
  video?: {
    type: string;
    id: string;
    url: string;
    title: string;
    caption: string;
    duration?: string;
    format?: string;
    resolution?: string;
    technical_details?: string;
  };
}

interface Artist {
  artist_statement: string;
  artist_bio: string;
  artworks: {
    [key: string]: Artwork;
  };
}

/** Canon works for Selected Works page — institutional entry point */
export const SELECTED_WORK_SLUGS: string[] = [
  'privacy_is_a_luxury',
  'taste_the_algorithm',
  'simulation_faith',
  'price_of_existence',
  'doomscrolling_treadmill',
  'smart_shoppers',
  'vr_hug',
  'beyond_money',
];

export const artist: Artist = {
  artist_statement:
    'My work examines what it means to navigate "being chronically online" in an age where digital systems mediate nearly every facet of existence. At the intersection of machine philosophy, digital humanities, and memetics, I explore how technology reshapes our understanding of identity, value, and connection. This inquiry bridges contemporary art and the hyper-accelerated culture of the internet, channeling both humor and critique into conceptual frameworks. Through media such as AI algorithms, physical sculptures, and immersive installations, I create spaces that reflect on the absurdity, beauty, and impact of our entanglement with technology...',

  artist_bio:
    "Sanabria explores the network effects of automation and artificial intelligence on visual culture through poetic computation. His work encompasses manual techniques, conceptual art, and programming infrastructure, utilizing code and artistic gestures to create a unique aesthetic experience. At the human and emotional level, Sanabria's work emphasizes the creative kernel that is uniquely human, creating artworks that speculate on the value of data and the future of law amid technological change. In contrast, he employs innovative acceleration at a macro level, using the newest technologies to scaffold new forms of aesthetic governance over AI tools and social networks. Sanabria's pursuit of a visual language and aesthetic experience enabled by technology and imagination speaks to the critical importance of steering society's thinking amid incoming changes in techno-capitalism and social tendencies.",

  artworks: {
    privacy_is_a_luxury: {
      title: 'Privacy is a Luxury',
      year: 2025,
      description:
        'A critique of how privacy is no longer a right but a luxury, this sculpture reconfigures the iconic protest mask into a shrine of monetized privacy[ A gold Guy Fawkes mask. Attached to the mask\'s forehead, a mounted ATM/POS terminal with a keypad and card reader symbolizes the monetization of privacy, displaying fake transactions, subscription plans, and randomized IP addresses. Behind the mask, two Ubiquiti UniFi Tri-Band Wi-Fi 6E routers extend their four antennas like a cybernetic exoskeleton, their LED lights glowing, highlighting the paradox of corporate-controlled anonymity. The sterile white backdrop and dramatic lighting cast sharp shadows, emphasizing the fusion of surveillance, commerce, and digital resistance in the modern age.',
      // TODO: covered in VPN company logos (NordVPN, ExpressVPN, Surfshark, ProtonVPN, Mullvad), sits on a museum pedestal in a stark white contemporary gallery.
      medium: 'Mixed-media sculpture',
      materials: [
        'Gold-plated resin Guy Fawkes mask',
        'ATM/POS terminal',
        'Ubiquiti UniFi Tri-Band Wi-Fi 6E routers',
        'Custom LED display',
        'Corporate VPN logo decals'
      ],
      dimensions: '24" x 18" x 14" (incl. router antennas)',
      role: 'Concept and Fabrication',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
          caption: 'Corporate Anonymity - Gold Guy Fawkes mask with VPN logos and hardware'
        }
      ],
      tags: [
        'surveillance art',
        'privacy sculpture',
        'technofetishism',
        'capitalism critique art',
        'digital capitalism',
        'consumerism art',
        'cybernetic aesthetics',
        'new media art'
      ],
      interpretation: 
        'The piece creates a striking visual paradox that challenges viewers to consider how corporate interests have co-opted privacy technology and online anonymity. By transforming the Guy Fawkes mask—a symbol of anti-establishment resistance—into a gold-plated corporate billboard, the work highlights the commercialization of digital privacy and the uncomfortable reality that our attempts to escape surveillance often funnel through commercial gatekeepers.',
      interactiveContent: [
        {
          type: "link",
          text: "Guy Fawkes mask",
          content: {
            text: "A stylized depiction of Guy Fawkes that became a symbol of protest and anonymity, particularly through its association with the hacktivist group Anonymous",
            link: {
              url: "https://en.wikipedia.org/wiki/Guy_Fawkes_mask",
              label: "Learn about Guy Fawkes mask symbolism"
            }
          }
        },
        {
          type: "link",
          text: "monetization of privacy",
          content: {
            text: "The business practice of selling privacy as a commercial service rather than treating it as a fundamental right",
            link: {
              url: "https://en.wikipedia.org/wiki/Privacy_as_a_service",
              label: "Explore privacy as a service"
            }
          }
        }
      ],
      on_view: true,
      technical_requirements: {
        power: ['Standard 120V outlet for router and display functionality'],
        mounting: ['Museum pedestal (white, 36" height)'],
        space: {
          dimensions: '4 ft x 4 ft area minimum',
          requirements: ['Spotlighting', 'White gallery walls']
        }
      }
    },
    taste_the_algorithm: {
      title: 'Taste the Algorithm',
      year: 2026,
      location: 'F*ck Art: Nature & Artifice, Museum of Sex, Miami',
      curator: 'Tam Gryn',
      description:
        'Taste the Algorithm is a sculpture that explores how algorithmic systems shape desire, preference, and the ways we learn to want. In an age where recommendation engines curate our appetites—from what we watch to what we buy to who we desire—the work interrogates the intimate feedback loop between human taste and machine learning. The piece materializes this relationship, asking viewers to consider how much of what we "like" has been learned from us, refined by us, and fed back to us. Presented in the context of Miami\'s highly sexualized urban landscape, the work connects algorithmic mediation to broader questions of desire, identity, and the body in digital culture.',
      medium: 'Mixed-media sculpture with video component',
      materials: [
        'Sculptural elements',
        'Video documentation',
      ],
      dimensions: 'Variable',
      role: 'Concept and Fabrication',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
          caption: 'Taste the Algorithm - Installation view at Museum of Sex. Photo: Mateo SeZa/SeZa Studios. Update with your photos when available.',
        }
      ],
      tags: [
        'algorithmic art',
        'sculpture',
        'desire',
        'recommendation systems',
        'digital culture',
        'Miami',
        'new media art',
        'technofetishism',
      ],
      interpretation:
        'The work extends Sanabria\'s ongoing inquiry into how technology mediates human experience. By framing algorithmic influence through the lens of "taste"—a word that bridges sensory pleasure, aesthetic judgment, and cultural preference—the sculpture makes visible the invisible systems that increasingly shape what we want and how we want it.',
      exhibition: 'F*ck Art: Nature & Artifice',
      on_view: true,
      // Add video when available: { type: 'vimeo', id: 'YOUR_VIMEO_ID', url: 'https://vimeo.com/YOUR_VIMEO_ID', title: '...', caption: '...' }
    },
    simulation_faith: {
      title: 'Simulation Faith',
      year: 2025,
      description:
        'Blurring the sacred with the synthetic, the work becomes a symbol of a generation whose spiritual frameworks are now mediated by technology. A minimalist installation featuring a suspended baby Jesus adorned with a glowing VR headset, exploring themes of faith, simulation, and technological transcendence. The work interrogates the intersection of spirituality and digital illusion, casting light on the ways belief systems evolve in an era mediated by screens and artificial experiences. By merging religious iconography with virtual immersion, the piece questions whether digital realities will become the new sacred spaces of the future.',
      medium: 'Mixed-media installation',
      materials: [
        'Porcelain-like resin',
        'VR headset',
        'Interactive lighting'
      ],
      dimensions: '3 ft x 2 ft x 1.5 ft (sculpture), variable installation space',
      role: 'Concept, Design, and Fabrication',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg',
          caption: 'Simulation Faith - Suspended baby Jesus sculpture with VR headset'
        }
      ],
      tags: [
        'virtual reality art',
        'post-internet sculpture',
        'cybernetic aesthetics',
        'interactive installation art',
        'new media art',
        'spirituality',
        'digital culture',
      ],
      interactiveContent: [
        {
          type: "link",
          text: "digital realities",
          content: {
            text: "Immersive computer-generated environments that simulate physical presence",
            link: {
              url: "https://en.wikipedia.org/wiki/Virtual_reality",
              label: "Learn about virtual reality"
            }
          }
        },
        {
          type: "link",
          text: "religious iconography",
          content: {
            text: "Visual symbols and images used in religious art and devotion",
            link: {
              url: "https://en.wikipedia.org/wiki/Religious_art",
              label: "Explore religious art history"
            }
          }
        }
      ],
      on_view: true,
      technical_requirements: {
        power: ['120V outlet', 'Low-voltage LED transformer'],
        mounting: ['Ceiling suspension system', 'Steel cables'],
        space: {
          dimensions: 'Minimum 8 ft x 8 ft area, 10 ft ceiling height',
          requirements: ['Dimmed ambient lighting', 'White or neutral walls']
        }
      }
    },
    price_of_existence: {
      title: 'Price of Existence',
      year: 2024,
      location: 'CONTINUUM at MUNAG, Antigua Guatemala, Fundación Paiz',
      curator: 'Waseem A. Syed',
      description:
        'Price of Existence is a poignant installation that features a human skeleton wrapped in 100 million Venezuelan Bolívares, confronting the transient nature of wealth and the human cost of relentless consumerism. The artwork explores how objects and symbols of value, such as money, become intertwined with our identity and existence. It invites viewers to reflect on the ways in which we, as a society, assign worth to currency and its effect on our lives. In a world dominated by consumption, this piece challenges us to acknowledge the human cost involved in the continuous search for material value. The installation juxtaposes the skeletal representation of human mortality with the ephemeral nature of wealth, symbolizing the fragility of life and the fleeting nature of monetary value. This stark contrast forces viewers to question how deeply consumption and wealth permeate our identities and influence our existence.',
      description_es:
        'Price of Existence es una instalación conmovedora que presenta un esqueleto humano envuelto en 100 millones de Bolívares venezolanos, confrontando la naturaleza transitoria de la riqueza y el costo humano del consumismo despiadado. La obra de arte explora cómo los objetos y símbolos de valor, como el dinero, se entrelazan con nuestra identidad y existencia. Invita a los espectadores a reflexionar sobre las formas en que, como sociedad, asignamos valor a la moneda y su efecto en nuestras vidas. En un mundo dominado por el consumo, esta pieza nos desafía a reconocer el costo humano involucrado en la búsqueda continua de valor material. La instalación yuxtapone la representación esquelética de la mortalidad humana con la naturaleza efímera de la riqueza, simbolizando la fragilidad de la vida y la naturaleza fugaz del valor monetario. Este contraste marcado obliga a los espectadores a cuestionar qué tan profundamente el consumo y la riqueza impregnan nuestras identidades e influyen en nuestra existencia.',
      materials: [
        'Medical anatomical skeleton model',
        '100 Million Venezuelan Bolívares',
      ],
      medium: 'Sculpture',
      dimensions: '170 cm height x 45 cm width x 30 cm depth',
      weight: 'Approximately 8-12 kg',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738035709/art/moisestech-website/price_of_existence_wideshot.png',
          caption: 'Price of Existence - Full installation view',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg',
          caption: 'Price of Existence - Detail view',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg',
          caption: 'Price of Existence - 2024 installation at MUNAG, Antigua Guatemala',
        },
      ],
      tags: [
        'capitalism critique art',
        'consumerism art',
        'ephemeral wealth',
        'mortality',
        'currency',
        'identity',
        'installation',
        'new media art'
      ],
      on_view: true,
    },
    smart_shoppers: {
      title: 'Smart Shoppers',
      year: 2024,
      location: 'CONTINUUM at MUNAGGT, Fundación Paiz',
      curator: 'Waseem A. Syed',
      description:
        'Smart Shoppers explores the commercialization of human intelligence in the age of capitalism, using the symbol of a glowing 3D-printed brain overflowing from a shopping cart. The artwork critiques how human cognitive value has become commodified, particularly in an era dominated by artificial intelligence (AI). The vibrant, glowing brain juxtaposes the mechanical nature of capitalism with the human essence of thought and intelligence. The shopping cart, a symbol of consumerism, acts as a container for the brain, symbolizing how human capabilities are increasingly reduced to products to be bought, sold, and exploited in the capitalist system. By merging the organic and technological, the artwork highlights the tension between human identity and the digital marketplace. The glowing 3D brain further underscores the commodification of intelligence, while the LED lights evoke the pervasive nature of technology in shaping modern life.',
      description_es:
        'Smart Shoppers explora la comercialización de la inteligencia humana en la era del capitalismo, utilizando el símbolo de un cerebro brillante impreso en 3D que se desborda de un carrito de compras. La obra de arte critica cómo el valor cognitivo humano se ha convertido en una mercancía, particularmente en una era dominada por la inteligencia artificial (IA). El cerebro vibrante y brillante yuxtapone la naturaleza mecánica del capitalismo con la esencia humana del pensamiento y la inteligencia. El carrito de compras, símbolo del consumismo, actúa como un contenedor para el cerebro, simbolizando cómo las capacidades humanas se reducen cada vez más a productos para ser comprados, vendidos y explotados en el sistema capitalista. Al fusionar lo orgánico y lo tecnológico, la obra de arte destaca la tensión entre la identidad humana y el mercado digital. El cerebro 3D brillante subraya aún más la mercantilización de la inteligencia, mientras que las luces LED evocan la naturaleza omnipresente de la tecnología en la configuración de la vida moderna.',
      materials: [
        'Glowing 3D printed brains',
        'LED bulbs',
        'Paiz shopping cart',
      ],
      medium: 'New Media Installation',
      dimensions: '107 cm x 51 cm x 91 cm (L x W x H)',
      weight: 'Approximately 15-25 kg',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
          caption: 'Smart Shoppers - Installation view',
        },
      ],
      tags: [
        'ai art',
        'ai sculpture',
        'consumerism art',
        'capitalism critique art',
        'digital capitalism',
        'brain rot meme',
        'new media art',
        'shopping cart'
      ],
      on_view: true,
    },
    vr_hug: {
      title: 'VR Hug',
      year: 2017,
      collaboration: 'Tom Galle',
      description:
        'VR Hug is an artwork that captures the complex relationship between intimacy and technology during a time of increasing virtual connectivity. Two people are depicted hugging, existing in both the virtual world and the physical one. The piece explores the superposition of these realms, suggesting that while technology facilitates connection, it simultaneously creates an emotional void. The subjects, though physically connected in the act of a hug, experience a paradox: feeling everything and nothing at once, immersed in both the virtual and the real. The artwork invites viewers to contemplate the anxieties and emotional disconnection caused by the growing dependence on virtual interactions in an increasingly digital world.',
      medium: 'Digital photograph, Acrylic Print',
      dimensions: '80 x 120 cm',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717962487/art/moisestech-website/vr_hug_moisesdsanabria_tomgalle_2017_csfeef.jpg',
          caption: 'VR Hug - Two people hugging while wearing VR headsets',
        },
      ],
      links: [
        {
          url: 'https://www.datadating.online/vr-hug',
          label: 'Website',
        },
      ],
      tags: [
        'virtual reality art',
        'intimacy',
        'technology',
        'digital culture',
        'connection',
        'contemporary art miami',
        'new media art'
      ],
      on_view: false,
    },
    vr_bubble_bath: {
      title: 'VR Bubble Bath',
      year: 2017,
      description:
        'This photograph features a Latin man wearing a VR headset while immersed in a bubble bath. It juxtaposes the escapist allure of virtual reality with the intimacy of personal, physical moments, encouraging reflection on how digital experiences overlay private life.',
      medium: 'Photography',
      dimensions: '40" x 30" (print size)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/moises-sanabria-vr-headset-bathtub_minlbi.jpg',
          caption: 'VR Bubble Bath - Man in bathtub wearing VR headset',
        },
      ],
      tags: [
        'virtual reality art',
        'technology',
        'intimacy',
        'digital culture',
        'contemporary art miami',
        'new media art'
      ],
      on_view: false,
    },
    eye_plug: {
      title: 'Eye Plug',
      year: 2017,
      description:
        'A provocative photograph showing an iPhone charger being connected to a human iris, commenting on our dependency on technology and digital connectivity.',
      medium: 'Photography',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/eye_Moises_Sanabria_x_John_Yuyi_qiezip.jpg',
          caption: 'Eye Plug - iPhone charger connected to human iris',
        },
      ],
      tags: ['photography', 'technology', 'body', 'digital dependency'],
      on_view: false,
    },
    baby_agi: {
      title: 'Baby AGI',
      year: 2023,
      location:
        'Swenson Gallery, Bakehouse Art Complex, Miami — Breadbytes: Artmaking for the Next Generation (Nov 2023–Feb 2024)',
      location_url:
        'https://www.bacfl.org/exhibitions/breadbytes-artmaking-for-the-next-generation',
      curator: 'Shawn Clybor',
      description: 'Captures the nascent stages of Artificial General Intelligence (AGI), symbolizing the impending paradigm shift towards harmonious coexistence with advanced AI. This ready-made assembly—a smart baby stroller, intricately crafted from PC gaming components and AI-enhanced GPUs—epitomizes the Pre-Natal Genesis of AGI, highlighting the profound influence of such technologies on Generation Alpha, those born amidst the AI revolution. The robotic hands, delicately guiding the stroller, underscore our collective voyage into the AI epoch, while subtly emphasizing humanity\'s pivotal role in shaping AI\'s formative years.',
      description_es:
        'Captura las etapas incipientes de la Inteligencia General Artificial (AGI), simbolizando el cambio de paradigma inminente hacia la coexistencia armoniosa con IA avanzada. Este ensamblaje ready-made—un cochecito inteligente, intrincadamente elaborado con componentes de PC gaming y GPUs mejoradas con IA—epitomiza el Génesis Pre-Natal de AGI, destacando la profunda influencia de tales tecnologías en la Generación Alpha, aquellos nacidos en medio de la revolución de IA. Las manos robóticas, guiando delicadamente el cochecito, subrayan nuestro viaje colectivo hacia la época de IA, mientras enfatizan sutilmente el papel fundamental de la humanidad en dar forma a los años formativos de la IA.',
      materials: [
        'Baby Stroller',
        'TV Display',
        'Custom PC Components',
        'AI-enhanced GPUs',
        'Robotic Hands',
        'Custom Electronics'
      ],
      medium: 'Mixed Media Installation with Generative Animation',
      dimensions: '120 cm x 60 cm x 100 cm (L x W x H)',
      weight: 'Approximately 25-35 kg',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
          caption: 'Baby AGI - Digital installation exploring AI development',
        },
      ],
      tags: [
        'AI',
        'AGI',
        'technology',
        'consciousness',
        'digital art',
        'Generation Alpha',
        'accelerationism',
        'synthetic cognition',
        'algorithmic growth',
        'generative art'
      ],
      interpretation: 'A looping generative animation maps the transition from birth to Artificial General Intelligence, questioning the linearity of human development versus synthetic cognition. The work serves as a meditation on accelerationism, questioning what happens when machines not only mimic but complete the arc of human growth faster than we can comprehend. It engages with the idea that Gen Alpha is growing up in a reality fundamentally altered by AI, exploring the cognition gap emerging between generations—a generational digital divide.',
      exhibition: 'Breadbytes: Artmaking for the Next Generation',
      exhibition_support: {
        text:
          'Shown in Breadbytes at Bakehouse Art Complex. Per the host institution, workshops that led to the exhibition received support from the John S. and James L. Knight Foundation, with additional support from Miami-Dade County Department of Cultural Affairs and other partners listed on the exhibition page.',
        sponsors: [
          {
            name: 'Bakehouse Art Complex',
            href: 'https://www.bacfl.org',
            logoUrl:
              'https://images.squarespace-cdn.com/content/v1/53ad8347e4b04c5fb2ec922d/3d6ccf31-c424-42e9-942d-23c69b9fc015/BakehouseLogo.png?format=500w',
            logoAlt: 'Bakehouse Art Complex',
          },
        ],
      },
      on_view: false,
      video: {
        type: 'vimeo',
        id: '1079770763',
        url: 'https://vimeo.com/1079770763',
        title: 'Baby AGI - Generative Loop Animation',
        caption: 'A generative loop from birth to AGI questions if we\'re still the smartest species.',
        technical_details: 'Looping generative animation exploring synthetic childhood and algorithmic growth'
      },
      interactiveContent: [
        {
          type: "link",
          text: "Artificial General Intelligence",
          content: {
            text: "A hypothetical type of artificial intelligence that would have the ability to understand, learn, and apply knowledge in ways similar to humans",
            link: {
              url: "https://en.wikipedia.org/wiki/Artificial_general_intelligence",
              label: "Learn about AGI"
            }
          }
        },
        {
          type: "link",
          text: "Generation Alpha",
          content: {
            text: "The demographic cohort succeeding Generation Z, including those born from the early 2010s",
            link: {
              url: "https://en.wikipedia.org/wiki/Generation_Alpha",
              label: "Learn about Generation Alpha"
            }
          }
        },
        {
          type: "link",
          text: "accelerationism",
          content: {
            text: "A philosophical and political movement emphasizing the role of technological change in social transformation",
            link: {
              url: "https://en.wikipedia.org/wiki/Accelerationism",
              label: "Explore accelerationism"
            }
          }
        }
      ]
    },
    laptop_face: {
      title: 'Laptop Face',
      year: 2017,
      description:
        'A conceptual photograph depicting a Latin man bound to a laptop by duct tape, symbolizing our dependency and immersion in technology. The self-standing pose amplifies the commentary on how digital devices dominate our gaze and attention, turning them into an extension of our identity.',
      medium: 'Photography',
      dimensions: '36" x 36"',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/moises-sanabria-laptop-face_k9jzqg.jpg',
          caption: 'Laptop Face - Man with laptop bound to face',
        },
      ],
      tags: ['technology', 'dependency', 'critique', 'digital culture'],
      on_view: false,
    },
    digital_divinities: {
      title: 'Ephemeral Reflections of Digital Divinities',
      year: 2023,
      location: 'Lincoln Road, Miami, USA',
      collaboration: 'Fabiola Larios',
      description:
        'Viewers become muses in real-time, generating new digital divinities that echo ancient mythology through the lens of algorithmic identity. Ephemeral Reflections of Digital Divinities (2023) is a provocative installation that examines the evolution of self-representation from ancient Greek mythology to the digital age. This collaborative piece by Fabiola Larios and Moises Sanabria draws upon the timeless inspiration of the Greek Muses, while simultaneously exploring the impact of social media and digital culture on self-perception. The artwork creates AI-generated muses in real-time, using the viewer\'s photograph as the basis for constructing digital identities.',
      materials: [
        'Computer Vision Cameras',
        'Realtime Image Generation Model',
        'TouchDesigner',
        'Custom LED Hardware Panel',
        'Bust Statue'
      ],
      medium: 'New Media Interactive Installation',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
          caption: 'Ephemeral Reflections of Digital Divinities - Interactive installation view'
        }
      ],
      tags: [
        'interactive installation',
        'artificial intelligence',
        'computer vision',
        'Greek mythology',
        'digital identity',
        'real-time generation',
        'LED display',
        'social media',
        'self-representation',
        'Art Week',
        'Adobe'
      ],
      interpretation: 
        'The installation bridges ancient mythology with contemporary digital culture, exploring how self-representation has evolved from classical ideals to modern digital identities. Through real-time AI generation, it questions the nature of divine inspiration in an age of algorithmic creation.',
      exhibition: 'Art Week Miami',
      role: 'Artist, Technical Director, Operations',
      on_view: true,
    },
    corporate_weapons: {
      title: 'Corporate Weapons',
      year: 2017,
      description:
        "Corporate Weapons is a provocative artwork that critiques the commodification of power and violence in corporate culture. The piece features a series of custom-made weapons, each representing a major corporate entity. The McDonald's brass knuckle, Facebook crowbar, Nike knife, and Amazon sword each transform familiar symbols of violence into objects that reflect the power dynamics of these corporations.",
      materials: ['Brass knuckles', 'crowbar', 'knife', 'sword (custom-made)'],
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/corporate-weapons-1-facebook_rtb6f5.jpg',
          caption: 'Corporate Weapons - Facebook',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/corporate-weapons-2-mcdonalds_cfg8ha.jpg',
          caption: "Corporate Weapons - McDonald's",
        },
      ],
      medium: 'Metal Object',
      tags: [
        'corporate critique',
        'capitalism',
        'consumerism',
        'weaponry',
        'branding',
        'satire',
        'power dynamics',
      ],
      on_view: false,
    },
    doomscrolling_treadmill: {
      title: 'Doom Scrolling Treadmill',
      year: 2024,
      location: 'Chroma Film Festival',
      description:
        'Doom Scrolling Treadmill is a 24-hour performance art piece that explores the tension between digital distraction, productivity, and the human need to reconnect with nature. The artist alternates between walking on a treadmill, coding, and watching TikTok, mirroring the repetitive nature of digital engagement in modern life.',
      materials: [
        'Treadmill',
        'Vertical HD screens',
        'Coding workstation',
        'Grass patch',
        'LED panel',
      ],
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
          caption: 'Doom Scrolling Treadmill - View 4',
        },
      ],
      tags: [
        'performance art',
        'digital distraction',
        'productivity',
        'technology',
        'nature',
        'hyper-connectivity',
      ],
      on_view: true,
    },
    beyond_money: {
      title: 'Beyond Money',
      year: 2022,
      location: 'Foundation',
      description:
        '',
      materials: [
        'GANs',
        'AI',
        'NFT',
        'capitalism',
      ],
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1752671997/art/moisestech-website/artworks/2021_beyond_money/moises-sanabria-beyond-money-1_2021_deslxp.png',
          caption: 'GAN interpolation of a banknote',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1752671997/art/moisestech-website/artworks/2021_beyond_money/moises-sanabria-beyond-money-2_2021_rphxi6.png',
          caption: 'GAN interpolgration of a banknote'
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1752671997/art/moisestech-website/artworks/2021_beyond_money/moises-sanabria-beyond-money-3_2021_ui5zar.png',
          caption: 'GAN interpolgration of a banknote'
        },
      ],
      tags: [
        'performance art',
        'digital distraction',
        'productivity',
        'technology',
        'nature',
        'hyper-connectivity',
      ],
      on_view: true,
    },
    touchgrass_station: {
      title: 'Touch Grass Station',
      year: 2024,
      description:
        'Touch Grass Station is a performance art piece that explores the delicate balance between digital immersion and the need for reconnection with the physical world. Positioned as an antidote to hyper-connectivity, the work invites viewers to step into a tactile experience, offering a moment of respite from the overwhelming presence of the digital realm.',
      materials: [
        'Treadmill',
        'Vertical HD screens',
        'Coding workstation',
        'Grass patch',
        'LED panel',
      ],
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-4_qjc5w3.jpg',
          caption: 'Doom Scrolling Treadmill - View 2',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831896/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-5_rji3st.jpg',
          caption: 'Doom Scrolling Treadmill - View 3',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
          caption: 'Touch Grass Station - View 1',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-2_qjc5w3.jpg',
          caption: 'Touch Grass Station - View 2',
        },
      ],
      tags: [
        'performance art',
        'digital distraction',
        'productivity',
        'technology',
        'nature',
        'hyper-connectivity',
      ],
      on_view: true,
    },
    ai_everydays: {
      title: 'AI Everydays: The First 5000',
      year: 2022,
      description:
        'AI Everydays: The First 5000 (2022) is a conceptual AI artwork that reflects on the speed of contemporary algorithmic production and the role of the artist in automation. The piece presents a combinatory projection of emerging technologies represented as a set of data maps that speculate on possible futures.',
      medium: 'AI-Generated Images, Algorithmic Processing',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg',
          caption: 'AI Everydays - Generated image collection',
        },
      ],
      tags: [
        'AI art',
        'conceptual art',
        'NFT',
        'automation',
        'visual culture',
        'AI creativity',
        'diffusion models',
      ],
      on_view: false,
    },
    cooper_union_vr: {
      title: 'Cooper Union VR',
      year: 2017,
      description:
        '41 Cooper VR (2015) is an interactive installation consisting of three virtual reality chat stations connected to VRchat.net. These stations host a 3D recreation of Gallery 41 Cooper, allowing visitors to the physical exhibition to communicate verbally with online attendees via virtual reality headsets.',
      medium:
        'Virtual reality headsets, 3D models of Gallery 41 Cooper, VRChat.net platform',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738040057/art/moisestech-website/tumblr_npjwy8Sdzx1r1ubs7o1_1280_fuyjfc.jpg',
          caption: 'Cooper Union VR - Interactive VR installation',
        },
      ],
      tags: [
        'virtual reality',
        'interactive installation',
        'hybrid space',
        'VRChat',
        'technology',
        'social interaction',
      ],
      interactiveContent: [
        {
          type: "link",
          text: "VRchat.net",
          content: {
            text: "A free-to-play massively multiplayer online virtual reality social platform",
            link: {
              url: "https://vrchat.com/",
              label: "Visit VRChat website"
            }
          }
        },
        {
          type: "link",
          text: "Gallery 41 Cooper",
          content: {
            text: "An exhibition space at Cooper Union for the Advancement of Science and Art in New York City",
            link: {
              url: "https://cooper.edu/art/gallery",
              label: "Learn about Cooper Union Gallery"
            }
          }
        },
        {
          type: "link",
          text: "virtual reality",
          content: {
            text: "A simulated experience that can be similar to or completely different from the real world",
            link: {
              url: "https://en.wikipedia.org/wiki/Virtual_reality",
              label: "Read about virtual reality"
            }
          }
        }
      ],
      on_view: false,
    },
    generative_text_art: {
      title: 'Generative Text Art',
      year: 2015,
      description:
        'A series of generative text art exploring the concept of AI in the digital age.',
      medium: 'Generative Text Art',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738040058/art/moisestech-website/tumblr_npjwlisCq31r1ubs7o1_1280_z30nb4.jpg',
          caption: 'Generative Text Art - AI-generated text compositions',
        },
      ],
      tags: ['generative art', 'AI', 'technology'],
      on_view: false,
    },
    google_gradients: {
      title: 'Google Gradients',
      year: 2015,
      description:
        "art404's 'Google Gradients' is a series of large-scale banners created from over half a million images sourced from Google Images. These images were classified by color and intensity using the MatLab algorithm and printed on six 30-foot vinyl banners. The artwork draws inspiration from the physical languages and signs of daily digital interactions, exploring the intersection of AI, algorithms, and digital culture. Digital images classified by MatLab and Google's Cloud Vision, printed on vinyl banners.",
      description_es:
        "Los 'Google Gradients' de art404 son una serie de banners a gran escala creados a partir de más de medio millón de imágenes obtenidas de Google Images. Estas imágenes fueron clasificadas por color e intensidad usando el algoritmo MatLab e impresas en seis banners de vinilo de 30 pies. La obra de arte se inspira en los lenguajes físicos y signos de las interacciones digitales cotidianas, explorando la intersección entre IA, algoritmos y cultura digital. Imágenes digitales clasificadas por MatLab y Google Cloud Vision, impresas en banners de vinilo.",
      medium:
        "New Media Installation",
      dimensions: '6 banners: 914 cm height x 250 cm width each (30 ft x 8.2 ft)',
      weight: 'Approximately 45-60 kg total (7.5-10 kg per banner)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738040061/art/moisestech-website/tumblr_npjxkgHw7X1r1ubs7o1_1280_sjcvjv.jpg',
          caption: 'Google Gradients - Large-scale banner installation',
        },
      ],
      tags: [
        'Google Gradients',
        'AI',
        'technology',
        'digital culture',
        'MatLab',
        'Cloud Vision',
        'color gradient',
        'algorithmic art',
      ],
      on_view: false,
    },
    neural_wealth: {
      title: 'Neural Wealth',
      year: 2018,
      description:
        "Neural Wealth captures the essence of humanity's evolving relationship with technology and the mind. In this digital photograph, the artist is depicted in a hospital setting, fully connected to an EEG machine, evoking a surreal, almost Matrix-like aesthetic.",
      medium:
        'Digital photograph, EEG machine, Custom-designed face mesh, Multiple styles of cables',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/neural-wealth_xiuodf.jpg',
          caption: 'Neural Wealth - Artist connected to EEG machine',
        },
      ],
      tags: [
        'EEG',
        'neural link',
        'digital identity',
        'futurism',
        'AI',
        'technology and consciousness',
        'Matrix aesthetics',
      ],
      on_view: false,
    },
    meditation_battlestation: {
      title: 'Meditation Battlestation',
      year: 2018,
      description:
        'Meditation Battlestation is an original artwork that forms part of the online performance series created by Tom Galle, Moises Sanabria, and Eva Papamargariti between 2016 and 2018. The piece explores the intersection of digital culture, technology, and mindfulness in the context of modern life.',
      materials: [
        'Digital installation',
        'Interactive screens',
        'Soundscapes',
        'Meditation tools',
        'LED lights',
      ],
      medium: 'Photography',
      dimensions: 'Variable (installation)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/meditation-battlestation_b7ne15.jpg',
          caption: 'Meditation Battlestation - Installation view',
        },
      ],
      tags: [
        'online performance',
        'meditation',
        'digital art',
        'technology',
        'mindfulness',
        'installation',
      ],
      on_view: false,
    },
    pc_liquid_cooled_nike: {
      title: 'PC Liquid Cooled Nike Air Max Deluxe',
      year: 2018,
      description:
        'PC Liquid Cooled Nike Air Max Deluxe is a provocative artwork that merges high-performance technology with iconic consumer fashion. The piece features a pair of Nike Air Max Deluxe sneakers outfitted with liquid cooling components typically used in custom PC builds. By incorporating cooling systems designed for computers into a fashion item, the artwork explores the relationship between consumer culture, technology, and the body. It juxtaposes the functionality of computer hardware with the aesthetic appeal of luxury footwear, creating a hybrid object that questions the limits of innovation and design.',
      materials: [
        'Nike Air Max Deluxe',
        'PC liquid cooling components (pipes, coolant, fittings)',
      ],
      medium: 'Photography',
      dimensions: 'Life-size (approx. 12" x 15" x 7")',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/pc-liquid-cool-nike-shoe_isqxjd.jpg',
          caption: 'PC Liquid Cooled Nike Air Max Deluxe',
        },
      ],
      tags: [
        'fashion',
        'technology',
        'sneakers',
        'consumer culture',
        'Nike',
        'liquid cooling',
        'mixed media',
      ],
      on_view: false,
    },
    five_million_dollars: {
      title: '5 Million Dollars 1 Terabyte',
      year: 2011,
      location: 'Dark Drives: Uneasy Energies in Technological Times, transmediale 2012 in/compatible, Berlin',
      curator: 'Jacob Lillemose',
      collaboration: 'ART404, Manuel Palou',
      description: 
        'From the look of it, the black external hard drive placed on the plinth is recognizable as an object of desire sold at media stores all over the world. Its cool minimalist aesthetic invokes the authority of technology. It is a black box that efficiently and securely protects what is inside. However, the invisible content tells a different story. The hard drive contains illegally downloaded and collected software worth $5 million, from AutoCAD to fiction books, filling its 1 terabyte capacity. The object embodies a challenge to intellectual property rights, presenting itself as an ambiguous artifact that is simultaneously beautiful, effective, and unlawful - much like the black monolith from Stanley Kubrick\'s 2001: A Space Odyssey (1968).',
      description_es:
        'A primera vista, el disco duro externo negro colocado en el pedestal es reconocible como un objeto de deseo vendido en tiendas de medios de todo el mundo. Su estética minimalista fría invoca la autoridad de la tecnología. Es una caja negra que protege de manera eficiente y segura lo que hay dentro. Sin embargo, el contenido invisible cuenta una historia diferente. El disco duro contiene software descargado y recopilado ilegalmente por valor de $5 millones, desde AutoCAD hasta libros de ficción, llenando su capacidad de 1 terabyte. El objeto encarna un desafío a los derechos de propiedad intelectual, presentándose como un artefacto ambiguo que es simultáneamente hermoso, efectivo e ilegal - muy parecido al monolito negro de 2001: Una Odisea del Espacio (1968) de Stanley Kubrick.',
      materials: [
        '1TB External Hard Drive',
        'Illegally downloaded software collection ($5M worth)',
        'Custom plinth'
      ],
      medium: 'New Media Installation',
      dimensions: '16.5 cm x 11.4 cm x 3.8 cm (hard drive) + pedestal base',
      weight: 'Approximately 2-3 kg (including pedestal)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751681091/art/moisestech-website/artworks/2011_5_million_1_terabyte/five-million-dollars-1-terabyte-2011-art404_daxvlx.jpg',
          caption: '5 Million Dollars 1 Terabyte - Installation view at transmediale 2012. © Genz, Lindner / transmediale',
        }
      ],
      links: [
        {
          url: 'https://rhizome.org/editorial/2011/aug/16/5-million-dollars-1-terabyte-2011/',
          label: 'Rhizome Editorial - 5 Million Dollars 1 Terabyte'
        },
        {
          url: 'https://archive.transmediale.de/content/5-million-dollars-1-terabyte',
          label: 'Transmediale Archive - Artwork Documentation'
        },
        {
          url: 'https://archive.transmediale.de/content/5-million-dollars-1-terabyte-by-art-404',
          label: 'Transmediale Archive - Installation Photography'
        },
        {
          url: 'https://archive.transmediale.de/content/art-404',
          label: 'Art 404 Artist Profile'
        },
        {
          url: 'https://archive.transmediale.de/festival-2012/exhibition',
          label: 'Dark Drives Exhibition Documentation'
        }
      ],
      tags: [
        'conceptual art',
        'digital property',
        'piracy',
        'value',
        'minimalism',
        'intellectual property',
        'data storage',
        'Art 404',
        'transmediale',
        'in/compatible',
        'uneasy energies',
        'dark drives'
      ],
      interpretation: 
        'The work exemplifies the "uneasy energies in technological times" that defined transmediale 2012\'s exhibition theme. As part of "Dark Drives," curated by Jacob Lillemose, the piece represents one of the "distortions, ambiguities, irritations, ironies, and unrest" that characterize our relationship with modern technology. The hard drive\'s contents challenge standardized perceptions of technology and property, creating an unresolvable tension between the object\'s legitimate exterior and its illicit contents - a perfect embodiment of the exhibition\'s exploration of "in/compatible" elements in digital culture.',
      exhibition: 'Dark Drives: Uneasy Energies in Technological Times, transmediale 2012 in/compatible',
      on_view: false,
    },
    groceries_quarantine: {
      title: 'Groceries in the Times of Quarantine',
      year: 2020,
      curator: 'Johann C. Muñoz',
      location: 'a_part: A Quarantine Collaboration',
      description: `Your phone just judged your groceries—welcome to First-person machine learning shopping, Game Mode. The moment when human appetite meets algorithmic recognition and both call the same thing "value."\n\nThe piece turns Farocki's operational images into a grocery-store showdown: AI isn't just identifying consumer goods, it's rehearsing the grammar of capitalist desire—categorize, quantify, optimize. When the machine eye never blinks, even survival shopping becomes a high-score screen.\n\nAs Byung-Chul Han warns, gamification is soft control: it makes self-surveillance feel like play. When an algorithm awards micro-rewards for simply feeding yourself, who's really leveling up—you or the market?\n\nA video artwork that employs YOLOv4 object detection with real-time processing to explore pandemic isolation through the lens of everyday grocery items. Curated by Johann C. Muñoz and presented online, this work transforms mundane consumer objects into conceptual artifacts by utilizing YOLOv4's grid-based simultaneous prediction mechanism—a computer vision framework that divides video frames into sections while predicting bounding boxes and class probabilities with remarkable efficiency. The artwork leverages this neural network architecture not merely as a technical tool but as a conceptual framework that mirrors how machine perception increasingly mediates human experience in contemporary society.\n\nConceived for a_part: A Quarantine Collaboration (curated by Johann C. Muñoz, 2020).`,
      interpretation: 'The video gains particular relevance within the context of COVID-19, when digital surveillance and algorithmic systems became more prominent in daily life. By implementing real-time object detection, the work engages with what Harun Farocki termed "operational images"—visuals that serve functional purposes within digital infrastructures rather than purely representational ones. This approach positions the video at the intersection of creative expression and technological critique, highlighting how computational seeing transforms ordinary objects into data points categorized by confidence scores.',
      medium: 'Video with Real-time Object Detection',
      interactiveContent: [
        {
          type: 'link',
          text: 'YOLOv4',
          content: {
            text: 'Real-time object detection system',
            link: {
              url: 'https://en.wikipedia.org/wiki/You_Only_Look_Once',
              label: 'Learn more about YOLO'
            }
          }
        },
        {
          type: 'link',
          text: 'pandemic isolation',
          content: {
            text: 'Social distancing during COVID-19',
            link: {
              url: 'https://en.wikipedia.org/wiki/Social_distancing',
              label: 'Learn about social distancing'
            }
          }
        },
        {
          type: 'link',
          text: 'class probabilities',
          content: {
            text: 'Statistical likelihood in machine learning',
            link: {
              url: 'https://en.wikipedia.org/wiki/Probability',
              label: 'Understanding probability'
            }
          }
        },
        {
          type: 'link',
          text: 'neural network',
          content: {
            text: 'AI system architecture',
            link: {
              url: 'https://en.wikipedia.org/wiki/Artificial_neural_network',
              label: 'Neural networks explained'
            }
          }
        },
        {
          type: 'link',
          text: 'machine perception',
          content: {
            text: 'Computer vision systems',
            link: {
              url: 'https://en.wikipedia.org/wiki/Computer_vision',
              label: 'About computer vision'
            }
          }
        },
        {
          type: 'link',
          text: 'COVID-19',
          content: {
            text: 'Global pandemic context',
            link: {
              url: 'https://en.wikipedia.org/wiki/COVID-19_pandemic',
              label: 'COVID-19 pandemic overview'
            }
          }
        },
        {
          type: 'link',
          text: 'Harun Farocki',
          content: {
            text: 'Media artist and theorist',
            link: {
              url: 'https://en.wikipedia.org/wiki/Harun_Farocki',
              label: 'About Harun Farocki'
            }
          }
        }
      ],
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1741546765/art/moisestech-website/artworks/2020_groceries_in_the_times_of_quarantine/moises-sanabria-groceries-in-the-times-of-quarantine-2020_bhiwwg.png',
          caption: 'Groceries Quarantine - Smartphone recording with object detection overlay',
        }
      ],
      links: [
        {
          url: 'https://e-issues.globalartdaily.com/a_part-Gives-Artists-36-Hours-to-React',
          label: 'Global Art Daily Coverage'
        },
        {
          url: 'https://www.johanncmunoz.com/quarantine-collaboration-main',
          label: 'a_part Exhibition Documentation'
        }
      ],
      tags: [
        'digital art',
        'pandemic',
        'isolation',
        'COVID-19',
        'computer vision',
        'machine learning',
        'YOLOv4',
        'object detection',
        'surveillance',
        'interactive',
        'algorithmic perception'
      ],
      exhibition: 'a_part: A Quarantine Collaboration',
      on_view: false,
      video: {
        type: 'vimeo',
        id: '430192355',
        url: 'https://vimeo.com/430192355',
        title: 'Groceries in the Times of Quarantine',
        caption: 'Real-time object detection video artwork exploring pandemic isolation',
        duration: '3:24',
        format: 'HD Video',
        resolution: '1920x1080',
        technical_details: 'Real-time YOLOv4 object detection, H.264 codec'
      },
    },
    doomscrolling_marathon: {
      title: 'Doomscrolling Marathon',
      year: 2024,
      location: 'Aparadores, Mexico City, Mexico',
      curator: 'Alonso Cedillo',
      description: 'By transforming a personal TikTok scroll into a collective urban spectacle, Doomscrolling Marathon reflects on the fragility of attention in an age of infinite feed. The work turns private digital behavior into shared emotional overload, asking how we perform, absorb, and lose ourselves in algorithmic rituals.',
      materials: [
        'Large-format LED screen',
        'Curated TikTok video stream',
        'Public plaza infrastructure'
      ],
      medium: 'New Media Installation',
      dimensions: 'Approx. 10 ft x 6 ft screen display (site-specific)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1743116742/art/moisestech-website/artworks/2024_doomscrolling_marathon/moises-sanabria-doomscrolling-marathon-proyecto-aparadores-cdmx-2024_jilui4.png',
          caption: 'Doomscrolling Marathon - Installation view at Aparadores, Mexico City'
        }
      ],
      links: [
        {
          url: 'https://www.instagram.com/p/DEA9GIrJxao/',
          label: 'Instagram Video'
        }
      ],
      tags: [
        'installation',
        'digital art',
        'social media',
        'public art',
        'TikTok',
        'attention economy',
        'urban spectacle',
        'algorithmic culture',
        'Mexico City',
        'Aparadores'
      ],
      interpretation: 'The work creates a powerful commentary on how private digital behaviors become public spectacles in our hyperconnected world. By displaying a curated TikTok feed on a large public screen, it transforms individual scrolling into a collective experience, highlighting both the performative nature of social media consumption and the overwhelming nature of infinite content streams.',
      exhibition: 'Aparadores, Mexico City',
      on_view: true,
      video: {
        type: 'instagram',
        id: 'DEA9GIrJxao',
        url: 'https://www.instagram.com/p/DEA9GIrJxao/',
        title: 'Doomscrolling Marathon',
        caption: 'Installation documentation at Aparadores, Mexico City',
        format: 'Instagram Video'
      }
    },
    in_crypto_we_trust: {
      title: 'In Crypto We Trust',
      year: 2024,
      collaboration: 'Fabiola Larios',
      description:
        'Our Crypto who art in Blockchain, decentralized be thy governance; Ethereum come, thy mint be done IRL as it is in IPFS. Shill us this day our daily Gas; and forgive us our CO2 Emissions as we forgive those who Fiat money against us; and lead us not into a market bubble, but deliver us from centralization. Send >\n\nThe 3D glTF crypto coin results from a StyleGAN2 model trained on 500+ cryptocurrency logos. The two sides of the coin are the Bitcoin and Ethereum logos reinterpreted by the machine learning model.\n\nThe work "In Crypto We Trust" symbolizes the connection between crypto communities and a strong belief system around collective economic salvation. Faith mantras such as, "we are all going to make it" (wagmi), "crypto is real", "to the moon", and many more, are based on technological ideology and financial speculation. Through the work we are interested in highlighting how new generations are building new techno-denomination founded through decentralization.\n\nBlockchain is a decentralized technology allowing mass collectivity around crypto economies, far beyond many other type of organizations. The tightness of crypto communities is grounded in shared technological faith and economic optimism.',
      description_es:
        'Un cubo de acero de 1 metro por 1 metro que contiene cadenas de bloques de acero, con un holograma en su interior que proyecta una moneda criptográfica 3D generada por un modelo StyleGAN2 entrenado con más de 500 logos de criptomonedas. Los dos lados de la moneda son los logos de Bitcoin y Ethereum reinterpretados por el modelo de aprendizaje automático.\n\nLa obra "In Crypto We Trust" simboliza la conexión entre las comunidades cripto y un fuerte sistema de creencias en torno a la salvación económica colectiva. Mantras de fe como "todos vamos a lograrlo" (wagmi), "crypto es real", "a la luna", y muchos más, se basan en ideología tecnológica y especulación financiera. A través de la obra nos interesa destacar cómo las nuevas generaciones están construyendo una nueva tecno-denominación fundada en la descentralización.',
      materials: [
        'Lightweight steel frame structure',
        'Steel block chains',
        'Holographic projection system',
        'StyleGAN2 trained model',
        '500+ cryptocurrency logos dataset',
        '3D glTF model generation',
        'Bitcoin and Ethereum logo reinterpretations'
      ],
      medium: 'Mixed Media Installation - Lightweight Steel Cube with Holographic Projection',
      dimensions: '100 cm x 100 cm x 100 cm (1m cube)',
      weight: 'Approximately 15-25 kg',
      price: '$10,000 USD (~$200,000 MXN)',
      role: 'Concept, AI Model Training, and 3D Generation',
      images: [
        {
          url: '/placeholder.jpg',
          caption: 'In Crypto We Trust - 3D glTF crypto coin generated by StyleGAN2'
        }
      ],
      tags: [
        'cryptocurrency art',
        'blockchain art',
        'AI-generated art',
        'StyleGAN2',
        '3D modeling',
        'digital currency',
        'techno-religion',
        'decentralization',
        'machine learning art',
        'crypto culture',
        'wagmi',
        'bitcoin',
        'ethereum'
      ],
      interpretation: 
        'This work explores the intersection of technology, faith, and economics in cryptocurrency communities. By using StyleGAN2 to reinterpret Bitcoin and Ethereum logos, the piece questions how machine learning can generate new forms of digital iconography that reflect the techno-spiritual aspects of crypto culture. The work examines how decentralized technologies create new forms of collective belief systems and economic optimism.',
      interactiveContent: [
        {
          type: "link",
          text: "StyleGAN2",
          content: {
            text: "A generative adversarial network architecture for generating high-quality images",
            link: {
              url: "https://en.wikipedia.org/wiki/StyleGAN",
              label: "Learn about StyleGAN2"
            }
          }
        },
        {
          type: "link",
          text: "glTF",
          content: {
            text: "A 3D file format for efficient transmission and loading of 3D scenes and models",
            link: {
              url: "https://en.wikipedia.org/wiki/GlTF",
              label: "About glTF format"
            }
          }
        },
        {
          type: "link",
          text: "wagmi",
          content: {
            text: "Crypto community acronym meaning 'We're All Gonna Make It'",
            link: {
              url: "https://www.coindesk.com/learn/what-does-wagmi-mean-in-crypto/",
              label: "Learn about WAGMI"
            }
          }
        },
        {
          type: "link",
          text: "IPFS",
          content: {
            text: "InterPlanetary File System - a distributed file storage protocol",
            link: {
              url: "https://en.wikipedia.org/wiki/InterPlanetary_File_System",
              label: "About IPFS"
            }
          }
        }
      ],
      on_view: true,
      technical_requirements: {
        power: ['Standard electrical outlet for holographic projection system', 'LED lighting system'],
        mounting: ['Floor installation - lightweight structure (15-25kg)', 'Stable surface for 1m cube'],
        space: {
          dimensions: 'Minimum 2m x 2m area for proper viewing',
          requirements: ['Controlled lighting environment', 'Access to electrical outlet', 'Clear viewing angles around cube']
        }
      }
    },
    netflix_n_chill_airbnb: {
      title: 'Netflix n Chill AirBnb',
      year: 2016,
      location: 'Materialising the Internet, MU Artspace, Dutch Design Week',
      curator: 'Nadine Roestenburg',
      description:
        'A groundbreaking 2016 digital art piece that explores the intersection of streaming culture, hospitality, and digital intimacy. This work exemplifies the innovative approach to materializing internet culture into physical spaces. The piece examines how our digital behaviors and expectations are reshaping physical environments and social interactions, particularly through the lens of the "Netflix and Chill" phenomenon and the rise of short-term rental platforms like Airbnb.',
      materials: [
        'Digital photography',
        'Mixed media installation',
        'Interactive elements'
      ],
      medium: 'Digital Art / Installation',
      dimensions: 'Variable installation dimensions',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751215753/art/moisestech-website/artworks/2016_netflix_and_chill_airbnb/netflix-n-chill-airbnb_materializing-the-internet-1_2016_ltlwz9.jpg',
          caption: 'Netflix n Chill AirBnb - Main installation view'
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751215755/art/moisestech-website/artworks/2016_netflix_and_chill_airbnb/netflix-n-chill-airbnb_materializing-the-internet-2_2016_lsbsvk.jpg',
          caption: 'Netflix n Chill AirBnb - Detail view 1'
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751215744/art/moisestech-website/artworks/2016_netflix_and_chill_airbnb/netflix-n-chill-airbnb_materializing-the-internet-6_2016_yzjudj.jpg',
          caption: 'Netflix n Chill AirBnb - Detail view 2'
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751215749/art/moisestech-website/artworks/2016_netflix_and_chill_airbnb/netflix-n-chill-airbnb_materializing-the-internet-5_2016_mhbfeq.jpg',
          caption: 'Netflix n Chill AirBnb - Detail view 3'
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751215748/art/moisestech-website/artworks/2016_netflix_and_chill_airbnb/netflix-n-chill-airbnb_materializing-the-internet-3_2016_dplwhk.jpg',
          caption: 'Netflix n Chill AirBnb - Detail view 4'
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1751215746/art/moisestech-website/artworks/2016_netflix_and_chill_airbnb/netflix-n-chill-airbnb_materializing-the-internet-7_2016_swgets.jpg',
          caption: 'Netflix n Chill AirBnb - Detail view 5'
        }
      ],
      links: [
        {
          url: 'https://digicult.it/articles/web/materialising-the-internet/',
          label: 'Exhibition Review on Digicult'
        }
      ],
      tags: [
        'digital art',
        'post-internet art',
        'streaming culture',
        'hospitality art',
        'digital intimacy',
        'airbnb culture',
        'netflix and chill',
        'materializing the internet',
        'dutch design week',
        'contemporary art'
      ],
      interpretation: 
        'The work explores the intersection of digital streaming culture and physical hospitality spaces. It examines how our digital behaviors and expectations are reshaping physical environments and social interactions. The piece was part of a larger exploration of how the internet transcends screens to become tangible in our physical world, demonstrating that virtual and real are no longer separate spheres.',
      interactiveContent: [
        {
          type: "link",
          text: "Materialising the Internet",
          content: {
            text: "An exhibition featuring over 20 international artists and designers who turned the internet into something tangible",
            link: {
              url: "https://digicult.it/articles/web/materialising-the-internet/",
              label: "Read exhibition review"
            }
          }
        },
        {
          type: "link",
          text: "Dutch Design Week",
          content: {
            text: "An annual design event in Eindhoven, Netherlands, showcasing innovative design and technology",
            link: {
              url: "https://dutchdesignweek.nl/",
              label: "Visit Dutch Design Week"
            }
          }
        }
      ],
      exhibition: 'Materialising the Internet at MU Artspace, Dutch Design Week 2017',
      on_view: false
    },
  },
};
