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

interface ResearchItem {
  title: string;
  year: number;
  description: string;
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
    mask: {
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
}

export const research: { [key: string]: ResearchItem } = {
  privacy_mask: {
    title: 'Privacy Mask',
    year: 2025,
    description:
      "Privacy Mask visually investigates the 'price of privacy in our surveillance era. The installation centers on a gold-plated Guy Fawkes mask an iconic symbol of anonymous resistance transformed through its integration with Wi-Fi routers Antennas and ATM/POS 'We Accept' decal as the masks headband. The piece manifests as a laboratory-like exploration where an ATM/POS decal mounted on the mask's forehead directly confronts viewers with the commodification of digital privacy. The two Wi-Fi routers with protruding antennas create a broadband signal exoskeleton. The work examines how privacy tools remain paradoxically tethered to corporate infrastructures. Decals of VPN company logos (NordVPN, ExpressVPN, Surfshark, ProtonVPN, Mullvad), serves as a critical discourse on the commercialization of anonymity trade-off to buy back privacy in an era where data extraction runs rampant and personal security becomes a product to be bought and sold.",
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
      'The Privacy Mask critiques the illusion of digital anonymity in an era of mass surveillance. The piece fuses the iconography of privacy and resistance with the very corporate entities that sell privacy as a product, emphasizing its status as a cultural artifact of digital resistance.',
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
      mask: {
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
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739160442/art/moisestech-website/research/moises-sanabria-privacy-mask-net-gala-proposal-25_pgepj6.png',
        caption:
          'Privacy Mask - Front view showing gold mask with VPN logos and ATM terminal',
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
  },
  vr_jesus_mary: {
    title: 'VR Jesus Mary',
    year: 2025,
    description: "VR Jesus Mary investigates the intersection of religious iconography and virtual reality technology. The installation features a life-sized religious figure constructed from salvaged VR headsets, LED matrices, and discarded tech components. The piece transforms as viewers approach, with motion sensors triggering different visual experiences through the headsets' displays. This work explores themes of digital worship, technological spirituality, and the evolution of religious experience in our increasingly virtual world.",
    interactiveContent: [
      {
        type: 'highlight',
        text: 'VR headsets',
        content: {
          text: 'Repurposed virtual reality headsets serve as both structural elements and symbolic windows into digital spirituality.',
        },
      },
      {
        type: 'italic',
        text: 'digital worship',
        content: {
          text: 'The emerging phenomenon of religious and spiritual practices taking place in virtual spaces.',
        },
      }
    ],
    artistic_intent: "The piece examines how traditional religious iconography adapts to and is transformed by digital technology, questioning whether virtual experiences can facilitate genuine spiritual connection.",
    technical_requirements: {
      power: [
        '120V power supply for LED matrices',
        'USB power for motion sensors',
        'Backup power system for continuous operation'
      ],
      mounting: [
        'Steel framework for structural support',
        'Wall-mounted components',
        'Secure mounting for VR headsets'
      ],
      space: {
        pedestal_size: '6ft x 6ft base',
        wall_clearance: '3 feet for viewer interaction',
        power_access: 'Floor and wall power access required'
      },
      interactive_elements: [
        'Motion sensors for proximity detection',
        'LED matrix displays',
        'Optional sound components'
      ]
    },
    components: {
      mask: {
        material: 'Recycled VR headsets and electronic components',
        customization: [
          'LED matrix integration',
          'Motion sensor system',
          'Custom power distribution'
        ]
      },
      hardware: {
        model: 'Various recycled VR headsets',
        specifications: [
          'Modified display panels',
          'Custom LED controllers',
          'Arduino-based sensor system'
        ],
        power_requirements: '120V AC, converted to 5V DC'
      },
      mounting: {
        type: [
          'Steel framework',
          'Wall mounts',
          'Custom brackets'
        ],
        materials: [
          'Steel tubing',
          'Aluminum brackets',
          '3D printed components'
        ]
      },
      display: {
        pedestal: 'Custom steel base with cable management',
        lighting: 'Programmable LED ambient lighting'
      }
    },
    materials: [
      'Recycled VR headsets',
      'LED matrices',
      'Motion sensors',
      'Steel framework',
      'Electronic components',
      'Power distribution system'
    ],
    dimensions: '6ft x 6ft x 8ft (including base)',
    images: [
      {
        url: 'https://placeholder-url.com/vr-jesus-mary-concept',
        caption: 'VR Jesus Mary - Conceptual rendering showing LED integration'
      }
    ],
    tags: [
      'interactive installation',
      'religious art',
      'virtual reality',
      'electronic sculpture',
      'recycled technology',
      'digital spirituality',
      'motion sensing',
      'LED art'
    ],
    interpretation: "VR Jesus Mary challenges viewers to consider how traditional religious imagery and experience translate into the digital age. Through its use of recycled VR technology, the piece suggests both the potential and limitations of digital spiritual experiences while questioning the role of technology in modern religious practice.",
    exhibition: 'Digital Devotion: Technology and Spirituality',
    installation_notes: [
      'Requires professional electrical installation',
      'Motion sensor calibration needed',
      'Regular LED matrix maintenance',
      'Careful cable management essential',
      'Climate control recommended for electronics'
    ],
    future_iterations: [
      'Integration with live VR experiences',
      'Enhanced interactive elements',
      'Expanded sensor capabilities',
      'Mobile app integration'
    ],
    on_view: false
  },
  immortal_obsolescence_2025: {
    title: 'Immortal Obsolescence',
    year: 2025,
    description: 
      "A year-long initiative exploring the intersection of technology, spirituality, and environmental impact in Miami's emerging tech art scene. The project transforms e-waste into interactive sculptures and performances, questioning the permanence of digital culture while creating new meaning from technological debris.",
    interactiveContent: [
      {
        type: 'highlight',
        text: 'e-waste transformation',
        content: {
          text: 'The process of converting discarded electronic components into artistic works, challenging the concept of technological obsolescence.'
        }
      },
      {
        type: 'italic',
        text: 'digital worship',
        content: {
          text: 'The emerging phenomenon of spiritual practices mediated through technology, examining how digital tools influence religious and contemplative experiences.'
        }
      }
    ],
    artistic_intent: 
      "To establish a new framework for considering obsolescence, sustainability, and digital culture in contemporary art while fostering a community of practitioners at the intersection of technology and artistic expression.",
    technical_requirements: {
      power: [
        'Various voltage requirements for different installations',
        'Sustainable power management systems',
        'Battery backup systems for continuous operation'
      ],
      mounting: [
        'Custom mounting solutions for each sculpture',
        'Mobile display systems for TV Bicycle',
        'Floor installation infrastructure for Touch Grass Circuit'
      ],
      space: {
        pedestal_size: 'Variable depending on installation',
        wall_clearance: 'Minimum 3 feet for interactive works',
        power_access: 'Multiple power points required'
      },
      interactive_elements: [
        'Motion sensors for VR Jesus Mary',
        'Pressure sensors for Touch Grass Circuit',
        'LED matrices and displays',
        'Animatronic components'
      ]
    },
    components: {
      mask: {
        material: 'Salvaged VR headsets and electronic components',
        customization: [
          'LED integration',
          'Motion sensor systems',
          'Custom power distribution'
        ]
      },
      hardware: {
        model: 'Various recycled electronics',
        specifications: [
          'Modified display panels',
          'Custom LED controllers',
          'Arduino-based sensor systems',
          'Animatronic control units'
        ],
        power_requirements: '110-240V AC with DC conversion'
      },
      mounting: {
        type: [
          'Custom steel frameworks',
          'Mobile platforms',
          'Floor mounting systems'
        ],
        materials: [
          'Recycled metal',
          'Sustainable composites',
          '3D printed components'
        ]
      },
      display: {
        pedestal: 'Various custom bases with integrated cable management',
        lighting: 'Programmable LED systems'
      }
    },
    materials: [
      'Salvaged VR headsets',
      'Vintage television sets',
      'Circuit boards',
      'Keyboards',
      'Calculators',
      'LED components',
      'Motion sensors',
      'Pressure sensors',
      'Animatronic parts'
    ],
    dimensions: 'Variable installation sizes',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739417794/art/moisestech-website/research/immortal-obsolescence/concept-render.jpg',
        caption: 'Concept rendering of Immortal Obsolescence installations'
      }
    ],
    tags: [
      'e-waste',
      'interactive installation',
      'sustainability',
      'digital culture',
      'animatronics',
      'virtual reality',
      'religious art',
      'technology',
      'community engagement',
      'Miami tech art'
    ],
    interpretation: 
      "The project series examines the lifecycle of technology through artistic transformation, creating a dialogue between obsolescence and innovation. Each installation approaches this theme from a different angle: religious iconography, market dynamics, personal interaction, and human-machine integration.",
    exhibition: 'Multiple venues throughout Miami, 2025-2026',
    installation_notes: [
      'Requires specialized technical setup for each piece',
      'Community workshop integration',
      'Documentation throughout process',
      'Regular maintenance schedules',
      'Sustainable power management'
    ],
    future_iterations: [
      'Expanded animatronic capabilities',
      'Enhanced interactive elements',
      'Community contribution features',
      'Mobile workshop units',
      'Online documentation platform'
    ],
    on_view: false
  }
};
