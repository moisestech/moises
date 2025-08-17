import { Language } from "@/contexts/LanguageContext"

export interface TechNonprofitTranslations {
  navigation: {
    home: string;
    services: string;
    workshops: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    exploreServices: string;
    scheduleCall: string;
    cta: string;
  };
  story: {
    title: string;
    description1: string;
    description2: string;
    quote: string;
    quoteAuthor: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    conclusion: string;
  };
  workshops: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    conclusion: string;
  };
  caseStudies: {
    title: string;
    subtitle: string;
    description: string;
    examples: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    buildSomething: string;
    scheduleCall: string;
    resources: string;
    resourcesList: Array<{
      title: string;
      description: string;
    }>;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    conclusion: string;
  };
  footer: {
    tagline: string;
    links: {
      home: string;
      workshops: string;
      moises: string;
    };
    copyright: string;
  };
}

export const translations: Record<Language, TechNonprofitTranslations> = {
  en: {
    navigation: {
      home: "Home",
      services: "Services",
      workshops: "Workshops",
      contact: "Contact",
    },
    hero: {
      title: "Creative Innovation",
      subtitle: "Needs a Digital Ally",
      description: "Let's imagine what cultural institutions could do with their own tech arm — tailored, thoughtful, and built to amplify your impact across exhibitions, workshops, and community-led events.",
      exploreServices: "Explore Our Services",
      scheduleCall: "Schedule a Call",
      cta: "Schedule a Call"
    },
    story: {
      title: "What Happens When Cultural Vision Meets Digital Power?",
      description1: "Oolite Arts already leads the way in creative innovation, transforming how we engage with digital culture, community, and the future. But what if every exhibition had a custom-built, lightweight digital companion? What if artists and audiences could connect online just as meaningfully as they do in person?",
      description2: "We've seen what's possible when art institutions like Bakehouse empower their artists with workshops and tech. From DIY websites to performance optimization, and even automated content outreach—we build the tools that artists, staff, and audiences actually use.",
      quote: "Technology, at its best, is invisible—felt only in the clarity of communication and the ease of creation.",
      quoteAuthor: "Moises Sanabria"
    },
    services: {
      title: "Custom Support for Creative Organizations",
      subtitle: "Think of us as your flexible, mission-aligned tech partner. No overhead. Just targeted, scalable solutions to support your programming, audiences, and staff.",
      items: [
        {
          title: "Browser-Based Communication App",
          description: "Built-in messaging and event broadcasting system. Staff, artists, and attendees stay connected during festivals, exhibitions, and workshops—without needing WhatsApp or Slack."
        },
        {
          title: "Artist & Staff Dashboards",
          description: "Log in, post updates, RSVP to events, and access internal resources. A unified, clean experience with roles and permissions."
        },
        {
          title: "Workshop Infrastructure",
          description: "We build the tech layer behind live and hybrid events: registration flows, feedback surveys, AI co-pilots, and even post-event recaps."
        },
        {
          title: "Custom Microtools",
          description: "Need a light event map? A tool for kids to remix art with AI? A drop-in chatbot for your cinema program? We can make it, and make it simple."
        }
      ],
      conclusion: "We believe culture deserves great technology. So we offer fractional services — only what you need, when you need it."
    },
    workshops: {
      title: "Teaching Artists to Thrive Online",
      subtitle: "We've delivered hands-on digital workshops at institutions like Bakehouse, the ICA, and more—focused on helping artists grow their digital presence, visibility, and reach. All of our workshops are designed for non-coders, artists, and educators.",
      items: [
        {
          title: "Own Your Digital Presence",
          description: "Website Building, Performance, Accessibility"
        },
        {
          title: "AI for Artists",
          description: "Prompting, Co-creation, Ethics of Generative Art"
        },
        {
          title: "Creative Social Media & Meme Branding",
          description: "Engage your audience with creative content strategies"
        },
        {
          title: "Marketing Automation for Cultural Orgs",
          description: "Streamline your outreach and engagement"
        },
        {
          title: "Build Your Portfolio",
          description: "Design, UX, and storytelling for artists"
        }
      ],
      conclusion: "We don't just teach artists how to code — we teach them how to connect."
    },
    caseStudies: {
      title: "A Space as Bold as Your Mission Deserves a Tech Partner Who Gets It",
      subtitle: "You're already doing the hard part: reaching the community, supporting interdisciplinary creation, and tackling societal change. Our goal is to amplify that with thoughtful, human tech.",
      description: "Let's imagine together:",
      examples: [
        "An artist dashboard with workshop materials in multiple languages",
        "A browser app where a family can see what's happening next weekend",
        "A prompt-based generative art tool for youth in your studio spaces",
        "A monthly content automation that schedules your entire calendar on Instagram and email in one click"
      ]
    },
    contact: {
      title: "Ready to Prototype a Better Future?",
      subtitle: "We'd love to start small — a co-hosted workshop, a custom browser experience for your next exhibition, or a digital training series for your staff and artists.",
      description: "Let's build something for your next season.",
      buildSomething: "Schedule a discovery call to discuss your needs and how we can help.",
      scheduleCall: "Schedule a Call",
      resources: "Resources",
      resourcesList: [
        {
          title: "Download the One-Pager (PDF)",
          description: ""
        },
        {
          title: "View Sample Workshop Curriculum",
          description: ""
        },
        {
          title: "Live Demo Available",
          description: "App walkthrough + Workshop plan"
        }
      ],
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit"
      },
      conclusion: "A center of cultural innovation, open to all audiences."
    },
    footer: {
      tagline: "Empowering artists with technology",
      links: {
        home: "Home",
        workshops: "Workshops",
        moises: "Moises Sanabria"
      },
      copyright: "© {year} Artist Tech Initiative. All rights reserved."
    }
  },
  es: {
    navigation: {
      home: "Inicio",
      services: "Servicios",
      workshops: "Talleres",
      contact: "Contacto",
    },
    hero: {
      title: "Innovación Digital",
      subtitle: "Para el Impacto Social",
      description: "Transformamos organizaciones sin fines de lucro con tecnología accesible y herramientas digitales que amplifican su impacto en la comunidad.",
      exploreServices: "Explorar Servicios",
      scheduleCall: "Agendar Llamada",
      cta: "Agendar Llamada"
    },
    story: {
      title: "¿Qué Sucede Cuando la Visión Social Se Une al Poder Digital?",
      description1: "Oolite Arts lidera el camino en innovación creativa, transformando la manera en que interactuamos con la cultura digital, la comunidad y el futuro. Imagina cada iniciativa con un componente digital personalizado, cada programa con alcance amplificado.",
      description2: "Hemos visto el impacto cuando las organizaciones empoderan a sus equipos con tecnología accesible. Desde plataformas web hasta automatización de procesos—construimos herramientas que realmente funcionan para tu misión.",
      quote: "La tecnología, en su mejor expresión, es invisible—se siente solo en la claridad de la comunicación y la facilidad de creación.",
      quoteAuthor: "Moises Sanabria"
    },
    services: {
      title: "Soluciones Digitales para ONGs",
      subtitle: "Somos tu aliado tecnológico flexible y alineado con tu misión. Sin complicaciones. Solo soluciones específicas y escalables para potenciar tu impacto.",
      items: [
        {
          title: "Plataforma de Comunicación",
          description: "Sistema integrado de mensajería y difusión de eventos. Mantén conectados a tu equipo, voluntarios y beneficiarios sin necesidad de WhatsApp o Slack."
        },
        {
          title: "Paneles de Control",
          description: "Acceso personalizado para equipo y voluntarios. Una experiencia unificada y simple con roles y permisos."
        },
        {
          title: "Infraestructura Digital",
          description: "Construimos la base tecnológica para tus eventos y programas: registro, encuestas, asistentes virtuales y más."
        },
        {
          title: "Herramientas a Medida",
          description: "¿Necesitas un mapa de impacto? ¿Un sistema de registro de beneficiarios? Lo hacemos simple y efectivo."
        }
      ],
      conclusion: "Creemos que el sector social merece tecnología de calidad. Por eso ofrecemos servicios flexibles — solo lo que necesitas, cuando lo necesitas."
    },
    workshops: {
      title: "Capacitación Digital para ONGs",
      subtitle: "Ofrecemos talleres prácticos enfocados en ayudar a organizaciones sociales a desarrollar su presencia digital, visibilidad e impacto. Diseñados para equipos sin experiencia técnica.",
      items: [
        {
          title: "Presencia Digital",
          description: "Optimiza tu visibilidad en línea"
        },
        {
          title: "IA para el Bien Social",
          description: "Tecnología con propósito social"
        },
        {
          title: "Comunidad Digital",
          description: "Construye y fortalece tu comunidad"
        },
        {
          title: "Métricas de Impacto",
          description: "Mide y comunica tus resultados"
        },
        {
          title: "Automatización",
          description: "Optimiza procesos y operaciones"
        }
      ],
      conclusion: "No solo enseñamos tecnología — empoderamos organizaciones."
    },
    caseStudies: {
      title: "Tu Misión Merece Tecnología que la Potencie",
      subtitle: "Ya estás haciendo el trabajo importante: impactando en la comunidad y generando cambio social. Nuestro objetivo es amplificar ese impacto con tecnología accesible.",
      description: "Imagina las posibilidades:",
      examples: [
        "Un panel de control multilingüe para tu equipo y voluntarios",
        "Una aplicación donde los beneficiarios pueden ver programas y eventos",
        "Automatización de reportes de impacto y comunicaciones",
        "Herramientas digitales que hacen tu trabajo más efectivo"
      ]
    },
    contact: {
      title: "¿Listo para Potenciar tu Impacto?",
      subtitle: "Empecemos con algo simple — un taller conjunto, una herramienta digital para tu próximo programa, o capacitación para tu equipo.",
      description: "Construyamos algo para tu organización.",
      buildSomething: "Agenda una llamada para discutir tus necesidades y cómo podemos ayudar.",
      scheduleCall: "Agendar Llamada",
      resources: "Recursos",
      resourcesList: [
        {
          title: "Descargar Presentación (PDF)",
          description: ""
        },
        {
          title: "Ver Programa de Talleres",
          description: ""
        },
        {
          title: "Demo Disponible",
          description: "Demostración y plan de implementación"
        }
      ],
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar"
      },
      conclusion: "Tecnología accesible para amplificar el impacto social."
    },
    footer: {
      tagline: "Empoderando organizaciones sociales con tecnología",
      links: {
        home: "Inicio",
        workshops: "Talleres",
        moises: "Moises Sanabria"
      },
      copyright: "© {year} Artist Tech Initiative. Todos los derechos reservados."
    }
  },
  fr: {
    navigation: {
      home: "Accueil",
      services: "Services",
      workshops: "Ateliers",
      contact: "Contact",
    },
    hero: {
      title: "Innovation Créative",
      subtitle: "A Besoin d'un Allié Numérique",
      description: "Imaginons ce que les institutions culturelles pourraient accomplir avec leur propre équipe tech — sur mesure, réfléchie et conçue pour amplifier votre impact à travers les expositions, ateliers et événements communautaires.",
      exploreServices: "Découvrir Nos Services",
      scheduleCall: "Planifier un Appel",
      cta: "Planifier un Appel"
    },
    story: {
      title: "Que Se Passe-t-il Quand la Vision Culturelle Rencontre la Puissance Numérique ?",
      description1: "Oolite Arts est déjà à l'avant-garde de l'innovation créative, transformant notre façon d'interagir avec la culture numérique, la communauté et l'avenir. Et si chaque exposition avait son compagnon numérique sur mesure ? Et si les artistes et le public pouvaient se connecter en ligne aussi significativement qu'en personne ?",
      description2: "Nous avons vu ce qui est possible quand les institutions artistiques comme Bakehouse donnent à leurs artistes les outils technologiques. Des sites web DIY à l'optimisation des performances, en passant par l'automatisation du contenu — nous créons les outils que les artistes, le personnel et le public utilisent réellement.",
      quote: "La technologie, à son meilleur, est invisible — ressentie uniquement dans la clarté de la communication et la facilité de création.",
      quoteAuthor: "Moises Sanabria"
    },
    services: {
      title: "Support Sur Mesure pour les Organisations Créatives",
      subtitle: "Considérez-nous comme votre partenaire technologique flexible et aligné avec votre mission. Sans frais généraux. Juste des solutions ciblées et évolutives pour soutenir votre programmation, votre public et votre personnel.",
      items: [
        {
          title: "Application de Communication Navigateur",
          description: "Système intégré de messagerie et de diffusion d'événements. Le personnel, les artistes et les participants restent connectés pendant les festivals, expositions et ateliers — sans avoir besoin de WhatsApp ou Slack."
        },
        {
          title: "Tableaux de Bord Artistes & Personnel",
          description: "Connectez-vous, publiez des mises à jour, répondez aux événements et accédez aux ressources internes. Une expérience unifiée et claire avec des rôles et des permissions."
        },
        {
          title: "Infrastructure d'Ateliers",
          description: "Nous construisons la couche technologique derrière les événements en présentiel et hybrides : flux d'inscription, enquêtes de satisfaction, co-pilotes IA, et même des résumés post-événement."
        },
        {
          title: "Micro-outils Sur Mesure",
          description: "Besoin d'une carte d'événement légère ? D'un outil pour que les enfants remixent l'art avec l'IA ? D'un chatbot pour votre programme cinéma ? Nous pouvons le créer, et le rendre simple."
        }
      ],
      conclusion: "Nous croyons que la culture mérite une excellente technologie. C'est pourquoi nous proposons des services fractionnés — uniquement ce dont vous avez besoin, quand vous en avez besoin."
    },
    workshops: {
      title: "Apprendre aux Artistes à S'épanouir en Ligne",
      subtitle: "Nous avons animé des ateliers numériques pratiques dans des institutions comme Bakehouse, l'ICA, et d'autres — axés sur l'aide aux artistes pour développer leur présence numérique, leur visibilité et leur portée. Tous nos ateliers sont conçus pour les non-codeurs, les artistes et les éducateurs.",
      items: [
        {
          title: "Maîtriser sa Présence Numérique",
          description: "Création de Site Web, Performance, Accessibilité"
        },
        {
          title: "IA pour les Artistes",
          description: "Prompting, Co-création, Éthique de l'Art Génératif"
        },
        {
          title: "Réseaux Sociaux Créatifs & Branding Mème",
          description: "Engagez votre audience avec des stratégies de contenu créatives"
        },
        {
          title: "Automatisation Marketing pour les Orgs Culturelles",
          description: "Rationalisez votre communication et votre engagement"
        },
        {
          title: "Construire son Portfolio",
          description: "Design, UX et storytelling pour les artistes"
        }
      ],
      conclusion: "Nous n'apprenons pas seulement aux artistes à coder — nous leur apprenons à se connecter."
    },
    caseStudies: {
      title: "Un Espace aussi Audacieux que votre Mission Mérite un Partenaire Tech qui Comprend",
      subtitle: "Vous faites déjà la partie difficile : atteindre la communauté, soutenir la création interdisciplinaire et relever les défis sociétaux. Notre objectif est d'amplifier cela avec une technologie réfléchie et humaine.",
      description: "Imaginons ensemble :",
      examples: [
        "Un tableau de bord artiste avec des supports d'atelier en plusieurs langues",
        "Une application navigateur où une famille peut voir ce qui se passe le week-end prochain",
        "Un outil d'art génératif basé sur des prompts pour les jeunes de vos espaces studio",
        "Une automatisation mensuelle de contenu qui planifie votre calendrier entier sur Instagram et email en un clic"
      ]
    },
    contact: {
      title: "Prêt à Prototyper un Meilleur Avenir ?",
      subtitle: "Nous aimerions commencer petit — un atelier co-animé, une expérience navigateur sur mesure pour votre prochaine exposition, ou une série de formations numériques pour votre personnel et vos artistes.",
      description: "Construisons quelque chose pour votre prochaine saison.",
      buildSomething: "Planifiez un appel de découverte pour discuter de vos besoins et de la façon dont nous pouvons vous aider.",
      scheduleCall: "Planifier un Appel",
      resources: "Ressources",
      resourcesList: [
        {
          title: "Télécharger la Fiche (PDF)",
          description: ""
        },
        {
          title: "Voir le Programme d'Atelier Exemple",
          description: ""
        },
        {
          title: "Démo en Direct Disponible",
          description: "Visite guidée de l'app + Plan d'atelier"
        }
      ],
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Soumettre"
      },
      conclusion: "Un centre d'innovation culturelle, ouvert à tous les publics."
    },
    footer: {
      tagline: "Donner du pouvoir aux artistes grâce à la technologie",
      links: {
        home: "Accueil",
        workshops: "Ateliers",
        moises: "Moises Sanabria"
      },
      copyright: "© {year} Artist Tech Initiative. Tous droits réservés."
    }
  },
  ht: {
    navigation: {
      home: "Kay",
      services: "Sèvis",
      workshops: "Atelye",
      contact: "Kontak",
    },
    hero: {
      title: "Inovasyon Kreyatif",
      subtitle: "Bezwen yon Alye Dijital",
      description: "Ann imajine sa enstitisyon kiltirèl yo ta ka fè ak pwòp branch teknoloji yo — pèsonalize, reflechi, ak bati pou anplifye enpak ou atravè ekspozisyon, atelye, ak evènman ki dirije pa kominote a.",
      exploreServices: "Eksplore Sèvis Nou yo",
      scheduleCall: "Pwograme yon Apèl",
      cta: "Pwograme yon Apèl"
    },
    story: {
      title: "Kisa ki Rive Lè Vizyon Kiltirèl Rankontre Pouvwa Dijital?",
      description1: "Oolite Arts deja dirije wout la nan inovasyon kreyatif, transfòme kijan nou angaje ak kilti dijital, kominote, ak lavni an. Men sa ki ta rive si chak ekspozisyon te gen yon konpayon dijital lejè ki bati sou koutim? Sa ki ta rive si atis yo ak odyans yo ta ka konekte an liy menm jan ki siyifikatif tankou yo fè an pèsonè?",
      description2: "Nou te wè sa ki posib lè enstitisyon atizay tankou Bakehouse bay atis yo pouvwa ak atelye ak teknoloji. Soti nan sit entènèt DIY rive nan optimizasyon pèfòmans, e menm otomatik kontni outreach—nou bati zouti ke atis, pèsonèl, ak odyans yo reyèlman itilize.",
      quote: "Teknoloji, nan pi bon li, envizib—santi sèlman nan klète kominikasyon ak fasilite kreyasyon.",
      quoteAuthor: "Moises Sanabria"
    },
    services: {
      title: "Sipò Koutim pou Òganizasyon Kreyatif",
      subtitle: "Panse nan nou kòm patnè teknoloji fleksib, aliyen ak misyon ou. Pa gen depans jeneral. Sèlman solisyon sib ak eskale pou sipòte pwogramasyon ou, odyans, ak pèsonèl.",
      items: [
        {
          title: "Aplikasyon Kominikasyon ki Baze sou Navigatè",
          description: "Sistèm mesaj ak emisyon evènman entegre. Pèsonèl, atis, ak patisipan rete konekte pandan festival, ekspozisyon, ak atelye—san bezwen WhatsApp oswa Slack."
        },
        {
          title: "Tablodbò pou Atis ak Pèsonèl",
          description: "Konekte, pote ajou, konfime evènman, ak aksè resous entèn. Yon eksperyans inifye, pwòp ak wòl ak pèmisyon."
        },
        {
          title: "Enfrastrikti Atelye",
          description: "Nou bati kouch teknoloji dèyè evènman an dirèk ak ibrid: flou anrejistreman, sondaj fidbak, ko-pilòt IA, e menm rezime pòs-evènman."
        },
        {
          title: "Mikwo-zouti Koutim",
          description: "Bezwen yon kat evènman lejè? Yon zouti pou timoun yo remiks atizay ak IA? Yon chatbot pou pwogram sinema ou? Nou ka fè li, epi fè li senp."
        }
      ],
      conclusion: "Nou kwè kilti merite gwo teknoloji. Se poutèt sa nou ofri sèvis fraksyonèl — sèlman sa ou bezwen, lè ou bezwen li."
    },
    workshops: {
      title: "Anseye Atis yo Pou yo Pwospere An Liy",
      subtitle: "Nou te bay atelye dijital pratik nan enstitisyon tankou Bakehouse, ICA, ak plis—konsantre sou ede atis yo grandi prezans dijital yo, vizibilite, ak rive. Tout atelye nou yo fèt pou moun ki pa pwogramatè, atis, ak edikatè.",
      items: [
        {
          title: "Pwopriyete Prezans Dijital Ou",
          description: "Bati Sit Entènèt, Pèfòmans, Aksesibilite"
        },
        {
          title: "IA pou Atis",
          description: "Prompting, Ko-kreyasyon, Etik Atizay Jenèratif"
        },
        {
          title: "Rezo Sosyal Kreyatif ak Branding Mem",
          description: "Angaje odyans ou ak estrateji kontni kreyatif"
        },
        {
          title: "Otomatizasyon Maketing pou Òganizasyon Kiltirèl",
          description: "Optimize outreach ak angajman ou"
        },
        {
          title: "Bati Portfolio Ou",
          description: "Konsepsyon, UX, ak istwa pou atis"
        }
      ],
      conclusion: "Nou pa sèlman anseye atis yo kijan pou pwograme — nou anseye yo kijan pou konekte."
    },
    caseStudies: {
      title: "Yon Espas ki Odyas kòm Misyon Ou Merite yon Patnè Teknoloji ki Konprann Li",
      subtitle: "Ou deja ap fè pati difisil la: rive nan kominote a, sipòte kreyasyon entèdisiplinè, ak atake chanjman sosyete. Objektif nou an se anplifye sa ak teknoloji reflechi ak imen.",
      description: "Ann imajine ansanm:",
      examples: [
        "Yon tablodbò atis ak materyèl atelye an plizyè lang",
        "Yon aplikasyon navigatè kote yon fanmi ka wè sa ki ap rive pwochen wikenn nan",
        "Yon zouti atizay jenèratif ki baze sou prompt pou jèn nan espas estidyo ou",
        "Yon otomatizasyon kontni chak mwa ki pwograme tout kalandriye ou sou Instagram ak imèl nan yon sèl klike"
      ]
    },
    contact: {
      title: "Ou Pare pou Pwototip yon Pi Bon Lavni?",
      subtitle: "Nou ta renmen kòmanse ti — yon atelye ko-òganize, yon eksperyans navigatè koutim pou pwochen ekspozisyon ou, oswa yon seri fòmasyon dijital pou pèsonèl ou ak atis.",
      description: "Ann bati yon bagay pou pwochen sezon ou.",
      buildSomething: "Pwograme yon apèl dekouvèt pou diskite bezwen ou yo ak kijan nou ka ede.",
      scheduleCall: "Pwograme yon Apèl",
      resources: "Resous",
      resourcesList: [
        {
          title: "Telechaje One-Pager la (PDF)",
          description: ""
        },
        {
          title: "Wè Egzanp Pwogram Atelye",
          description: ""
        },
        {
          title: "Demo An Dirèk Disponib",
          description: "Toune aplikasyon an + Plan atelye"
        }
      ],
      form: {
        name: "Non",
        email: "Imèl",
        message: "Mesaj",
        submit: "Voye"
      },
      conclusion: "Yon pòl inovasyon kiltirèl, ouvè a tout piblik."
    },
    footer: {
      tagline: "Bay atis yo pouvwa ak teknoloji",
      links: {
        home: "Kay",
        workshops: "Atelye",
        moises: "Moises Sanabria"
      },
      copyright: "© {year} Artist Tech Initiative. Tout dwa rezève."
    }
  }
}; 