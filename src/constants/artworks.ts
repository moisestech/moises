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
}

interface Artist {
    artist_statement: string;
    artist_bio: string;
    artworks: {
        [key: string]: Artwork;
};
}

export const artist: Artist = {
    artist_statement: "My work examines what it means to navigate \"being chronically online\" in an age where digital systems mediate nearly every facet of existence. At the intersection of machine philosophy, digital humanities, and memetics, I explore how technology reshapes our understanding of identity, value, and connection. This inquiry bridges contemporary art and the hyper-accelerated culture of the internet, channeling both humor and critique into conceptual frameworks. Through media such as AI algorithms, physical sculptures, and immersive installations, I create spaces that reflect on the absurdity, beauty, and impact of our entanglement with technology...",

    artist_bio: "Sanabria explores the network effects of automation and artificial intelligence on visual culture through poetic computation. His work encompasses manual techniques, conceptual art, and programming infrastructure, utilizing code and artistic gestures to create a unique aesthetic experience. At the human and emotional level, Sanabria's work emphasizes the creative kernel that is uniquely human, creating artworks that speculate on the value of data and the future of law amid technological change. In contrast, he employs innovative acceleration at a macro level, using the newest technologies to scaffold new forms of aesthetic governance over AI tools and social networks. Sanabria's pursuit of a visual language and aesthetic experience enabled by technology and imagination speaks to the critical importance of steering society's thinking amid incoming changes in techno-capitalism and social tendencies.",
    
    artworks: {
        price_of_existence: {
            title: "Price of Existence",
            year: 2024,
            location: "CONTINUUM at MUNAG, Antigua Guatemala, Fundación Paiz",
            curator: "Waseem A. Syed",
            description: "Price of Existence is a poignant installation that features a human skeleton wrapped in 100 million Venezuelan Bolívares, confronting the transient nature of wealth and the human cost of relentless consumerism. The artwork explores how objects and symbols of value, such as money, become intertwined with our identity and existence. It invites viewers to reflect on the ways in which we, as a society, assign worth to currency and its effect on our lives. In a world dominated by consumption, this piece challenges us to acknowledge the human cost involved in the continuous search for material value. The installation juxtaposes the skeletal representation of human mortality with the ephemeral nature of wealth, symbolizing the fragility of life and the fleeting nature of monetary value. This stark contrast forces viewers to question how deeply consumption and wealth permeate our identities and influence our existence.",
            materials: [
                "Medical anatomical skeleton model",
                "100 Million Venezuelan Bolívares"
            ],
            dimensions: "Life-size (approx. 5'7\" height)",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1738035709/art/moisestech-website/price_of_existence_wideshot.png",
                    caption: "Price of Existence - Full installation view"
                },
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg",
                    caption: "Price of Existence - Detail view"
                }
            ],
            tags: ["installation", "currency", "mortality", "capitalism", "identity", "consumption", "ephemeral wealth"],
            on_view: true
        },
        smartshoppers: {
            title: "Smart Shoppers",
            year: 2024,
            location: "CONTINUUM at MUNAGGT, Fundación Paiz",
            curator: "Waseem A. Syed",
            description: "Smart Shoppers explores the commercialization of human intelligence in the age of capitalism, using the symbol of a glowing 3D-printed brain overflowing from a shopping cart. The artwork critiques how human cognitive value has become commodified, particularly in an era dominated by artificial intelligence (AI). The vibrant, glowing brain juxtaposes the mechanical nature of capitalism with the human essence of thought and intelligence. The shopping cart, a symbol of consumerism, acts as a container for the brain, symbolizing how human capabilities are increasingly reduced to products to be bought, sold, and exploited in the capitalist system. By merging the organic and technological, the artwork highlights the tension between human identity and the digital marketplace. The glowing 3D brain further underscores the commodification of intelligence, while the LED lights evoke the pervasive nature of technology in shaping modern life.",
            materials: [
                "Glowing 3D printed brains",
                "LED bulbs",
                "Paiz shopping cart"
            ],
            dimensions: "L: 42\" x W: 20\" x H: 36\"",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg",
                    caption: "Smart Shoppers - Installation view"
                }
            ],
            tags: ["3D printing", "artificial intelligence", "consumerism", "capitalism", "brain", "shopping cart", "LED lights", "digital culture"],
            on_view: true
        },
        vr_hug: {
            title: "VR Hug",
            year: 2017,
            collaboration: "Tom Galle",
            description: "VR Hug is an artwork that captures the complex relationship between intimacy and technology during a time of increasing virtual connectivity. Two people are depicted hugging, existing in both the virtual world and the physical one. The piece explores the superposition of these realms, suggesting that while technology facilitates connection, it simultaneously creates an emotional void. The subjects, though physically connected in the act of a hug, experience a paradox: feeling everything and nothing at once, immersed in both the virtual and the real. The artwork invites viewers to contemplate the anxieties and emotional disconnection caused by the growing dependence on virtual interactions in an increasingly digital world.",
            medium: "Digital photograph, Acrylic Print",
            dimensions: "80 x 120 cm",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1717962487/art/moisestech-website/vr_hug_moisesdsanabria_tomgalle_2017_csfeef.jpg",
                    caption: "VR Hug - Two people hugging while wearing VR headsets"
                }
  ],
            links: [
                {
                    url: "https://www.datadating.online/vr-hug",
                    label: "Website"
                }
  ],
            tags: ["virtual reality", "intimacy", "technology", "digital culture", "anxiety", "connection", "Data Dating"],
            on_view: false
        },
        vr_bubble_bath: {
            title: "VR Bubble Bath",
            year: 2017,
            description: "This photograph features a Latin man wearing a VR headset while immersed in a bubble bath. It juxtaposes the escapist allure of virtual reality with the intimacy of personal, physical moments, encouraging reflection on how digital experiences overlay private life.",
            medium: "Photography",
            dimensions: "40\" x 30\" (print size)",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/moises-sanabria-vr-headset-bathtub_minlbi.jpg",
                    caption: "VR Bubble Bath - Man in bathtub wearing VR headset"
                }
  ],
            tags: ["photography", "virtual reality", "intimacy", "technology"],
            on_view: false
        },
        eye_plug: {
            title: "Eye Plug",
            year: 2017,
            description: "A provocative photograph showing an iPhone charger being connected to a human iris, commenting on our dependency on technology and digital connectivity.",
            medium: "Photography",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/eye_Moises_Sanabria_x_John_Yuyi_qiezip.jpg",
                    caption: "Eye Plug - iPhone charger connected to human iris"
                }
  ],
            tags: ["photography", "technology", "body", "digital dependency"],
            on_view: false
        },
        baby_agi: {
            title: "Baby AGI",
            year: 2024,
            description: "An exploration of artificial general intelligence through the lens of developmental stages, questioning the nature of machine learning and consciousness.",
            medium: "Digital Installation",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp",
                    caption: "Baby AGI - Digital installation exploring AI development"
                }
            ],
            tags: ["AI", "technology", "consciousness", "digital art"],
            on_view: false
        },
        laptop_face: {
            title: "Laptop Face",
            year: 2017,
            description: "A conceptual photograph depicting a Latin man bound to a laptop by duct tape, symbolizing our dependency and immersion in technology. The self-standing pose amplifies the commentary on how digital devices dominate our gaze and attention, turning them into an extension of our identity.",
            medium: "Photography",
            dimensions: "36\" x 36\"",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/moises-sanabria-laptop-face_k9jzqg.jpg",
                    caption: "Laptop Face - Man with laptop bound to face"
                }
            ],
            tags: ["technology", "dependency", "critique", "digital culture"],
            on_view: false
        },
        digital_divinities: {
            title: "Digital Divinities",
            year: 2024,
            description: "A series of digital sculptures exploring the concept of divinity in the digital age.",
            medium: "Digital Sculpture",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg",
                    caption: "Digital Divinities - Digital sculpture series"
                }
            ],
            tags: ["digital art", "sculpture", "divine", "technology"],
            on_view: true
        },
        corporate_weapons: {
            title: "Corporate Weapons",
            year: 2017,
            description: "Corporate Weapons is a provocative artwork that critiques the commodification of power and violence in corporate culture. The piece features a series of custom-made weapons, each representing a major corporate entity. The McDonald's brass knuckle, Facebook crowbar, Nike knife, and Amazon sword each transform familiar symbols of violence into objects that reflect the power dynamics of these corporations.",
            materials: [
                "Brass knuckles",
                "crowbar",
                "knife",
                "sword (custom-made)"
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/corporate-weapons-1-facebook_rtb6f5.jpg",
                    caption: "Corporate Weapons - Facebook"
                },
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/corporate-weapons-2-mcdonalds_cfg8ha.jpg",
                    caption: "Corporate Weapons - McDonald's"
                }
            ],
            tags: ["corporate critique", "capitalism", "consumerism", "weaponry", "branding", "satire", "power dynamics"],
            on_view: false
        },
        doomscrolling_treadmill: {
            title: "Doom Scrolling Treadmill",
            year: 2024,
            location: "Chroma Film Festival",
            description: "Doom Scrolling Treadmill is a 24-hour performance art piece that explores the tension between digital distraction, productivity, and the human need to reconnect with nature. The artist alternates between walking on a treadmill, coding, and watching TikTok, mirroring the repetitive nature of digital engagement in modern life.",
            materials: [
                "Treadmill",
                "Vertical HD screens",
                "Coding workstation",
                "Grass patch",
                "LED panel"
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg",
                    caption: "Doom Scrolling Treadmill - View 4"
                }
            ],
            tags: ["performance art", "digital distraction", "productivity", "technology", "nature", "hyper-connectivity"],
            on_view: true
        },
        touchgrass_station: {
            title: "Touch Grass Station",
            year: 2024,
            description: "Touch Grass Station is a performance art piece that explores the delicate balance between digital immersion and the need for reconnection with the physical world. Positioned as an antidote to hyper-connectivity, the work invites viewers to step into a tactile experience, offering a moment of respite from the overwhelming presence of the digital realm.",
            materials: [
                "Treadmill",
                "Vertical HD screens",
                "Coding workstation",
                "Grass patch",
                "LED panel"
            ],
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-4_qjc5w3.jpg",
                    caption: "Doom Scrolling Treadmill - View 2"
                },
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831896/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-5_rji3st.jpg",
                    caption: "Doom Scrolling Treadmill - View 3"
                },
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg",
                    caption: "Touch Grass Station - View 1"
                },
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-2_qjc5w3.jpg",
                    caption: "Touch Grass Station - View 2"
                },
            ],
            tags: ["performance art", "digital distraction", "productivity", "technology", "nature", "hyper-connectivity"],
            on_view: true
        },
        ai_everydays: {
            title: "AI Everydays: The First 5000",
            year: 2024,
            description: "AI Everydays: The First 5000 (2022) is a conceptual AI artwork that reflects on the speed of contemporary algorithmic production and the role of the artist in automation. The piece presents a combinatory projection of emerging technologies represented as a set of data maps that speculate on possible futures.",
            medium: "AI-Generated Images, Algorithmic Processing",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg",
                    caption: "AI Everydays - Generated image collection"
                }
            ],
            tags: ["AI art", "conceptual art", "NFT", "automation", "visual culture", "AI creativity", "diffusion models"],
            on_view: false
        },
        cooper_union_vr: {
            title: "Cooper Union VR",
            year: 2017,
            description: "41 Cooper VR (2015) is an interactive installation consisting of three virtual reality chat stations connected to VRchat.net. These stations host a 3D recreation of Gallery 41 Cooper, allowing visitors to the physical exhibition to communicate verbally with online attendees via virtual reality headsets.",
            medium: "Virtual reality headsets, 3D models of Gallery 41 Cooper, VRChat.net platform",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1738040057/art/moisestech-website/tumblr_npjwy8Sdzx1r1ubs7o1_1280_fuyjfc.jpg",
                    caption: "Cooper Union VR - Interactive VR installation"
                }
            ],
            tags: ["virtual reality", "interactive installation", "hybrid space", "VRChat", "technology", "social interaction"],
            on_view: false
        },
        generative_text_art: {
            title: "Generative Text Art",
            year: 2024,
            description: "A series of generative text art exploring the concept of AI in the digital age.",
            medium: "Generative Text Art",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1738040058/art/moisestech-website/tumblr_npjwlisCq31r1ubs7o1_1280_z30nb4.jpg",
                    caption: "Generative Text Art - AI-generated text compositions"
                }
            ],
            tags: ["generative art", "AI", "technology"],
            on_view: false
        },
        google_gradients: {
            title: "Google Gradients",
            year: 2015,
            description: "art404's 'Google Gradients' is a series of large-scale banners created from over half a million images sourced from Google Images. These images were classified by color and intensity using the MatLab algorithm and printed on six 30-foot vinyl banners. The artwork draws inspiration from the physical languages and signs of daily digital interactions, exploring the intersection of AI, algorithms, and digital culture.",
            medium: "Digital images classified by MatLab and Google's Cloud Vision, printed on vinyl banners",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1738040061/art/moisestech-website/tumblr_npjxkgHw7X1r1ubs7o1_1280_sjcvjv.jpg",
                    caption: "Google Gradients - Large-scale banner installation"
                }
            ],
            tags: ["Google Gradients", "AI", "technology", "digital culture", "MatLab", "Cloud Vision", "color gradient", "algorithmic art"],
            on_view: false
        },
        neural_wealth: {
            title: "Neural Wealth",
            year: 2024,
            description: "Neural Wealth captures the essence of humanity's evolving relationship with technology and the mind. In this digital photograph, the artist is depicted in a hospital setting, fully connected to an EEG machine, evoking a surreal, almost Matrix-like aesthetic.",
            medium: "Digital photograph, EEG machine, Custom-designed face mesh, Multiple styles of cables",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/neural-wealth_xiuodf.jpg",
                    caption: "Neural Wealth - Artist connected to EEG machine"
                }
            ],
            tags: ["EEG", "neural link", "digital identity", "futurism", "AI", "technology and consciousness", "Matrix aesthetics"],
            on_view: false
        },
        meditation_battlestation: {
            title: "Meditation Battlestation",
            year: 2024,
            description: "Meditation Battlestation is an original artwork that forms part of the online performance series created by Tom Galle, Moises Sanabria, and Eva Papamargariti between 2016 and 2018. The piece explores the intersection of digital culture, technology, and mindfulness in the context of modern life.",
            materials: [
                "Digital installation",
                "Interactive screens",
                "Soundscapes",
                "Meditation tools",
                "LED lights"
            ],
            dimensions: "Variable (installation)",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831875/art/moisestech-website/meditation-battlestation_b7ne15.jpg",
                    caption: "Meditation Battlestation - Installation view"
                }
            ],
            tags: ["online performance", "meditation", "digital art", "technology", "mindfulness", "installation"],
            on_view: false
        },
        pc_liquid_cooled_nike: {
            title: "PC Liquid Cooled Nike Air Max Deluxe",
            year: 2018,
            description: "PC Liquid Cooled Nike Air Max Deluxe is a provocative artwork that merges high-performance technology with iconic consumer fashion. The piece features a pair of Nike Air Max Deluxe sneakers outfitted with liquid cooling components typically used in custom PC builds. By incorporating cooling systems designed for computers into a fashion item, the artwork explores the relationship between consumer culture, technology, and the body. It juxtaposes the functionality of computer hardware with the aesthetic appeal of luxury footwear, creating a hybrid object that questions the limits of innovation and design.",
            materials: [
                "Nike Air Max Deluxe",
                "PC liquid cooling components (pipes, coolant, fittings)"
            ],
            dimensions: "Life-size (approx. 12\" x 15\" x 7\")",
            images: [
                {
                    url: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/pc-liquid-cool-nike-shoe_isqxjd.jpg",
                    caption: "PC Liquid Cooled Nike Air Max Deluxe"
                }
            ],
            tags: ["fashion", "technology", "sneakers", "consumer culture", "Nike", "liquid cooling", "mixed media"],
            on_view: false
        }
    }
};
