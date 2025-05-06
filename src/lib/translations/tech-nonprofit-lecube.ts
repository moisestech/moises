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
      description1: "Le Cube Garges already leads the way in creative innovation, transforming how we engage with digital culture, community, and the future. But what if every exhibition had a custom-built, lightweight digital companion? What if artists and audiences could connect online just as meaningfully as they do in person?",
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
        "An artist dashboard with workshop materials in both French and English",
        "A browser app where a family can see what's happening next weekend",
        "A prompt-based generative art tool for youth in your FabLab",
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
      conclusion: "A pôle of cultural innovation, open to all audiences."
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
      description1: "Le Cube Garges est déjà à l'avant-garde de l'innovation créative, transformant notre façon d'interagir avec la culture numérique, la communauté et l'avenir. Et si chaque exposition avait son compagnon numérique sur mesure ? Et si les artistes et le public pouvaient se connecter en ligne aussi significativement qu'en personne ?",
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
        "Un tableau de bord artiste avec des supports d'atelier en français et en anglais",
        "Une application navigateur où une famille peut voir ce qui se passe le week-end prochain",
        "Un outil d'art génératif basé sur des prompts pour les jeunes de votre FabLab",
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
      conclusion: "Un pôle d'innovation culturelle, ouvert à tous les publics."
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
  es: {
    navigation: {
      home: "Inicio",
      services: "Servicios",
      workshops: "Talleres",
      contact: "Contacto",
    },
    hero: {
      title: "Innovación Creativa",
      subtitle: "Necesita un Aliado Digital",
      description: "Imaginemos lo que las instituciones culturales podrían hacer con su propio equipo tecnológico — personalizado, reflexivo y construido para amplificar su impacto en exposiciones, talleres y eventos comunitarios.",
      exploreServices: "Explorar Nuestros Servicios",
      scheduleCall: "Programar una Llamada",
      cta: "Programar una Llamada"
    },
    story: {
      title: "¿Qué Sucede Cuando la Visión Cultural Se Une al Poder Digital?",
      description1: "Le Cube Garges ya lidera el camino en innovación creativa, transformando nuestra forma de interactuar con la cultura digital, la comunidad y el futuro. ¿Y si cada exposición tuviera un compañero digital personalizado? ¿Y si los artistas y el público pudieran conectarse en línea de manera tan significativa como lo hacen en persona?",
      description2: "Hemos visto lo que es posible cuando instituciones artísticas como Bakehouse empoderan a sus artistas con talleres y tecnología. Desde sitios web DIY hasta optimización de rendimiento, e incluso alcance de contenido automatizado—construimos las herramientas que artistas, personal y audiencias realmente utilizan.",
      quote: "La tecnología, en su mejor momento, es invisible—se siente solo en la claridad de la comunicación y la facilidad de creación.",
      quoteAuthor: "Moises Sanabria"
    },
    services: {
      title: "Soporte Personalizado para Organizaciones Creativas",
      subtitle: "Piensa en nosotros como tu socio tecnológico flexible y alineado con tu misión. Sin gastos generales. Solo soluciones específicas y escalables para apoyar tu programación, audiencias y personal.",
      items: [
        {
          title: "App de Comunicación Basada en Navegador",
          description: "Sistema integrado de mensajería y transmisión de eventos. Personal, artistas y asistentes permanecen conectados durante festivales, exposiciones y talleres—sin necesidad de WhatsApp o Slack."
        },
        {
          title: "Paneles para Artistas y Personal",
          description: "Inicia sesión, publica actualizaciones, confirma asistencia a eventos y accede a recursos internos. Una experiencia unificada y limpia con roles y permisos."
        },
        {
          title: "Infraestructura de Talleres",
          description: "Construimos la capa tecnológica detrás de eventos presenciales e híbridos: flujos de registro, encuestas de retroalimentación, co-pilotos de IA e incluso resúmenes post-evento."
        },
        {
          title: "Microherramientas Personalizadas",
          description: "¿Necesitas un mapa de eventos ligero? ¿Una herramienta para que los niños remezclen arte con IA? ¿Un chatbot para tu programa de cine? Podemos hacerlo, y hacerlo simple."
        }
      ],
      conclusion: "Creemos que la cultura merece una gran tecnología. Por eso ofrecemos servicios fraccionados — solo lo que necesitas, cuando lo necesitas."
    },
    workshops: {
      title: "Enseñando a los Artistas a Prosperar en Línea",
      subtitle: "Hemos impartido talleres digitales prácticos en instituciones como Bakehouse, el ICA y más—enfocados en ayudar a los artistas a desarrollar su presencia digital, visibilidad y alcance. Todos nuestros talleres están diseñados para no programadores, artistas y educadores.",
      items: [
        {
          title: "Domina tu Presencia Digital",
          description: "Construcción de Sitios Web, Rendimiento, Accesibilidad"
        },
        {
          title: "IA para Artistas",
          description: "Prompting, Co-creación, Ética del Arte Generativo"
        },
        {
          title: "Redes Sociales Creativas y Branding de Memes",
          description: "Involucra a tu audiencia con estrategias de contenido creativo"
        },
        {
          title: "Automatización de Marketing para Orgs Culturales",
          description: "Optimiza tu alcance y participación"
        },
        {
          title: "Construye tu Portfolio",
          description: "Diseño, UX y narrativa para artistas"
        }
      ],
      conclusion: "No solo enseñamos a los artistas a programar — les enseñamos a conectar."
    },
    caseStudies: {
      title: "Un Espacio tan Audaz como tu Misión Merece un Socio Tecnológico que lo Entienda",
      subtitle: "Ya estás haciendo la parte difícil: llegar a la comunidad, apoyar la creación interdisciplinaria y abordar el cambio social. Nuestro objetivo es amplificar eso con tecnología reflexiva y humana.",
      description: "Imaginemos juntos:",
      examples: [
        "Un panel de artista con materiales de taller en francés e inglés",
        "Una aplicación de navegador donde una familia puede ver qué sucederá el próximo fin de semana",
        "Una herramienta de arte generativo basada en prompts para jóvenes en tu FabLab",
        "Una automatización mensual de contenido que programa todo tu calendario en Instagram y correo electrónico con un clic"
      ]
    },
    contact: {
      title: "¿Listo para Prototipar un Mejor Futuro?",
      subtitle: "Nos encantaría empezar pequeño — un taller co-organizado, una experiencia de navegador personalizada para tu próxima exposición, o una serie de capacitación digital para tu personal y artistas.",
      description: "Construyamos algo para tu próxima temporada.",
      buildSomething: "Programa una llamada de descubrimiento para discutir tus necesidades y cómo podemos ayudar.",
      scheduleCall: "Programar una Llamada",
      resources: "Recursos",
      resourcesList: [
        {
          title: "Descargar el One-Pager (PDF)",
          description: ""
        },
        {
          title: "Ver Ejemplo de Programa de Taller",
          description: ""
        },
        {
          title: "Demo en Vivo Disponible",
          description: "Recorrido de la app + Plan de taller"
        }
      ],
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar"
      },
      conclusion: "Un polo de innovación cultural, abierto a todos los públicos."
    },
    footer: {
      tagline: "Empoderando artistas con tecnología",
      links: {
        home: "Inicio",
        workshops: "Talleres",
        moises: "Moises Sanabria"
      },
      copyright: "© {year} Artist Tech Initiative. Todos los derechos reservados."
    }
  },
}; 