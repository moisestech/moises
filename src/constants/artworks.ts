import { InteractiveContent } from './research';

interface Artwork {
  title: string;
  year: number;
  location?: string;
  curator?: string;
  collaboration?: string;
  description: string;
  materials?: string[];
  medium?: string;
  dimensions?: string;
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

export const artist: Artist = {
  artist_statement:
    'My work examines what it means to navigate "being chronically online" in an age where digital systems mediate nearly every facet of existence. At the intersection of machine philosophy, digital humanities, and memetics, I explore how technology reshapes our understanding of identity, value, and connection. This inquiry bridges contemporary art and the hyper-accelerated culture of the internet, channeling both humor and critique into conceptual frameworks. Through media such as AI algorithms, physical sculptures, and immersive installations, I create spaces that reflect on the absurdity, beauty, and impact of our entanglement with technology...',

  artist_bio:
    "Sanabria explores the network effects of automation and artificial intelligence on visual culture through poetic computation. His work encompasses manual techniques, conceptual art, and programming infrastructure, utilizing code and artistic gestures to create a unique aesthetic experience. At the human and emotional level, Sanabria's work emphasizes the creative kernel that is uniquely human, creating artworks that speculate on the value of data and the future of law amid technological change. In contrast, he employs innovative acceleration at a macro level, using the newest technologies to scaffold new forms of aesthetic governance over AI tools and social networks. Sanabria's pursuit of a visual language and aesthetic experience enabled by technology and imagination speaks to the critical importance of steering society's thinking amid incoming changes in techno-capitalism and social tendencies.",

  artworks: {
    price_of_existence: {
      title: 'Price of Existence',
      year: 2024,
      location: 'CONTINUUM at MUNAG, Antigua Guatemala, Fundación Paiz',
      curator: 'Waseem A. Syed',
      description:
        'Price of Existence is a poignant installation that features a human skeleton wrapped in 100 million Venezuelan Bolívares, confronting the transient nature of wealth and the human cost of relentless consumerism. The artwork explores how objects and symbols of value, such as money, become intertwined with our identity and existence. It invites viewers to reflect on the ways in which we, as a society, assign worth to currency and its effect on our lives. In a world dominated by consumption, this piece challenges us to acknowledge the human cost involved in the continuous search for material value. The installation juxtaposes the skeletal representation of human mortality with the ephemeral nature of wealth, symbolizing the fragility of life and the fleeting nature of monetary value. This stark contrast forces viewers to question how deeply consumption and wealth permeate our identities and influence our existence.',
      materials: [
        'Medical anatomical skeleton model',
        '100 Million Venezuelan Bolívares',
      ],
      medium: 'Sculpture',
      dimensions: 'Life-size (approx. 5\'7" height)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738035709/art/moisestech-website/price_of_existence_wideshot.png',
          caption: 'Price of Existence - Full installation view',
        },
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg',
          caption: 'Price of Existence - Detail view',
        },
      ],
      tags: [
        'installation',
        'currency',
        'mortality',
        'capitalism',
        'identity',
        'consumption',
        'ephemeral wealth',
      ],
      on_view: true,
    },
    smartshoppers: {
      title: 'Smart Shoppers',
      year: 2024,
      location: 'CONTINUUM at MUNAGGT, Fundación Paiz',
      curator: 'Waseem A. Syed',
      description:
        'Smart Shoppers explores the commercialization of human intelligence in the age of capitalism, using the symbol of a glowing 3D-printed brain overflowing from a shopping cart. The artwork critiques how human cognitive value has become commodified, particularly in an era dominated by artificial intelligence (AI). The vibrant, glowing brain juxtaposes the mechanical nature of capitalism with the human essence of thought and intelligence. The shopping cart, a symbol of consumerism, acts as a container for the brain, symbolizing how human capabilities are increasingly reduced to products to be bought, sold, and exploited in the capitalist system. By merging the organic and technological, the artwork highlights the tension between human identity and the digital marketplace. The glowing 3D brain further underscores the commodification of intelligence, while the LED lights evoke the pervasive nature of technology in shaping modern life.',
      materials: [
        'Glowing 3D printed brains',
        'LED bulbs',
        'Paiz shopping cart',
      ],
      medium: 'New Media Installation',
      dimensions: 'L: 42" x W: 20" x H: 36"',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
          caption: 'Smart Shoppers - Installation view',
        },
      ],
      tags: [
        '3D printing',
        'artificial intelligence',
        'consumerism',
        'capitalism',
        'brain',
        'shopping cart',
        'LED lights',
        'digital culture',
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
        'virtual reality',
        'intimacy',
        'technology',
        'digital culture',
        'anxiety',
        'connection',
        'Data Dating',
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
      tags: ['photography', 'virtual reality', 'intimacy', 'technology'],
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
      description:
        'An exploration of artificial general intelligence through the lens of developmental stages, questioning the nature of machine learning and consciousness.',
      medium: 'Digital Installation',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp',
          caption: 'Baby AGI - Digital installation exploring AI development',
        },
      ],
      tags: ['AI', 'technology', 'consciousness', 'digital art'],
      on_view: false,
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
        'Ephemeral Reflections of Digital Divinities (2023) is a provocative installation that examines the evolution of self-representation from ancient Greek mythology to the digital age. This collaborative piece by Fabiola Larios and Moises Sanabria draws upon the timeless inspiration of the Greek Muses, while simultaneously exploring the impact of social media and digital culture on self-perception. The artwork creates AI-generated muses in real-time, using the viewer\'s photograph as the basis for constructing digital identities.',
      materials: [
        'Computer Vision Cameras',
        'Realtime Image Generation Model',
        'TouchDesigner',
        'Custom LED Hardware Panel'
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
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
          caption: 'GAN interpolation of a banknote',
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
      medium:
        "New Media Installation",
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
      collaboration: 'ART404',
      description: 
        'From the look of it, the black external hard drive placed on the plinth is recognizable as an object of desire sold at media stores all over the world. Its cool minimalist aesthetic invokes the authority of technology. It is a black box that efficiently and securely protects what is inside. However, the invisible content tells a different story. The hard drive contains illegally downloaded and collected software worth $5 million, from AutoCAD to fiction books, filling its 1 terabyte capacity. The object embodies a challenge to intellectual property rights, presenting itself as an ambiguous artifact that is simultaneously beautiful, effective, and unlawful - much like the black monolith from Stanley Kubrick\'s 2001: A Space Odyssey (1968).',
      materials: [
        '1TB External Hard Drive',
        'Illegally downloaded software collection ($5M worth)',
        'Custom plinth'
      ],
      medium: 'New Media Installation',
      dimensions: '6.5" x 4.5" x 1.5" (hard drive dimensions)',
      images: [
        {
          url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/5-million-dollars-1-terabyte_art404.jpg',
          caption: '5 Million Dollars 1 Terabyte - Installation view at transmediale 2012. © Genz, Lindner / transmediale',
        }
      ],
      links: [
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
      description: 'A video artwork that employs YOLOv4 object detection with real-time processing to explore pandemic isolation through the lens of everyday grocery items. Curated by Johan Munoz and presented online, this work transforms mundane consumer objects into conceptual artifacts by utilizing YOLOv4\'s grid-based simultaneous prediction mechanism—a computer vision framework that divides video frames into sections while predicting bounding boxes and class probabilities with remarkable efficiency. The artwork leverages this neural network architecture not merely as a technical tool but as a conceptual framework that mirrors how machine perception increasingly mediates human experience in contemporary society.',
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
  },
};
