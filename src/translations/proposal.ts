export const proposalTranslations = {
  en: {
    // Page header
    pageTitle: "AI24 Mobile AI Laboratory",
    pageSubtitle: "Knight Art + Tech Expansion Fund Proposal",
    backToOverview: "Back to Overview",
    readyToSupport: "Ready to Support Digital Capacity?",
    readyToSupportSubtitle: "Join us in building Miami's first sustainable creative-tech infrastructure",
    viewBudgetDetails: "View Budget Details",

    // Section titles
    aboutTitle: "Tell us more about yourself or your organization (150 words)",
    oneSentenceTitle: "How would you describe your project in a sentence? (50 words)",
    activitiesTitle: "Describe the activities that would be carried out with support from the Knight Art + Tech Expansion Fund. (250 words)",
    outcomesTitle: "Describe the outcomes that would result from successful implementation of the activities described above. (250 words)",
    measurementTitle: "How will you know this project led to those outcomes?",
    sustainabilityTitle: "How will you sustain the positive outcomes of the effort beyond the funding period? If this is not intended to be a sustainable effort, please explain why.",
    partnersTitle: "Who are your partners in this project?",
    budgetTitle: "Budget & Revenue Summary",

    // Content
    about: `AI24 is an artist-run tech studio launched by Moises Sanabria (Venezuelan-born AI engineer / new-media artist) and Fabiola Larios (Mexican new-media artist). From a micro-lab inside the Bakehouse Art Complex we build bilingual, ethics-first creative tools that Latinx and Afro-Caribbean artists can actually afford. Since 2020 we've:
run free AI-art workshop sessions in English & Spanish,
built web apps (AI art, event signage and learning management systems), and
helped cultural organizations broadcast their programs.
Our model is "open core, sustainable extras": the base code is released for non-profit use, while premium hosting and analytics fund updates. Tutorials are CC BY-NC so teachers can share them freely. Small by choice, we iterate fast and test in the wild—first at Bakehouse, then Locust Projects (Little Haiti). These partnerships give our AI lab real neighborhood reach without big overhead.`,

    oneSentence: `Launch a mobile AI laboratory that deploys 2 museum-grade Smart Signs, a 12 AI mobile learning stations, and a bilingual Learning Management System across Bakehouse, Locust Projects, and beyond—equipping Miami artists with open, ethical creative-tech and a self-funded skill & communications pipeline that keeps growing long after the grant.`,

    measurement: `A public Data Analytics (Looker Studio dashboard) pulls live data from three automated feeds:
1. Product Analytics (PostHog) logs screen views and QR-code hits for both Smart Signs and the web application.
2. Database (Supabase) captures LMS course completions plus anonymous language and gender tags from an opt-in sign-in form.
3. YouTube / Streamlabs adds total livestream minutes watched and peak-concurrent viewers.
A Supabase Edge Function refreshes the source sheet every every day and pushes a weekly CSV snapshot to a public GitHub repo. GitHub's API also lists outside pull-requests and forks, giving Knight an open-source score in real time. The dashboard link is pinned on both Smart Signs once a day so visitors can verify the numbers themselves. No paid software, no hidden data—anyone can audit, remix, or research the figures.`,

    sustainability: `Bakehouse Art Complex hosts the lab studio, assigns three staff stewards, and donates A/V for four Skill Sprints.
Locust Projects provides lobby display space, pushes calls to its 12 K-subscriber list, and co-leads the second workshop block.
We're also expanding ties—built through prior workshops—with five Miami institutions:
Miami Dade College AI Center, New World School of the Arts, Code/Art, FIU College of Communication, Edge Zones.
This network spans four Miami neighborhoods and the full K-12-to-graduate pipeline, amplifying impact without adding cost to the Knight budget.`,

    // Activity sections
    techBuild: "Tech Build",
    hardwareRollout: "Hardware Roll-out",
    staffTraining: "Staff & Training",
    communityEngagement: "Community Engagement",
    logistics: "Logistics",

    // Outcome sections
    accessSkills: "Access & Skills",
    visibility: "Visibility",
    equity: "Equity",
    openTech: "Open Tech",
    sustainabilityOutcomes: "Sustainability",
    scalability: "Scalability",

    // Partner sections
    bakehouse: "Bakehouse Art Complex",
    locustProjects: "Locust Projects",
    expandingNetwork: "Expanding Network",
    networkImpact: "Network Impact",

    // Budget items
    totalBudget: "Total project budget: $24 850",
    knightEligible: "Knight-eligible cash items (hardware, infra, dev, archive, contingency): $24 850",
    fundingRequested: "Funding requested from Knight: $24 850",
    otherRevenue: "How other revenue will be raised: The three host venues have confirmed in-kind support letters covering space rental, snacks, and volunteer camera ops"
  },

  es: {
    // Page header
    pageTitle: "Laboratorio Móvil de IA AI24",
    pageSubtitle: "Propuesta para el Fondo de Expansión de Arte + Tecnología Knight",
    backToOverview: "Volver al Resumen",
    readyToSupport: "¿Listo para Apoyar la Capacidad Digital?",
    readyToSupportSubtitle: "Únete a nosotros en la construcción de la primera infraestructura de tecnología creativa sostenible de Miami",
    viewBudgetDetails: "Ver Detalles del Presupuesto",

    // Section titles
    aboutTitle: "Cuéntanos más sobre ti o tu organización (150 palabras)",
    oneSentenceTitle: "¿Cómo describirías tu proyecto en una oración? (50 palabras)",
    activitiesTitle: "Describe las actividades que se llevarían a cabo con el apoyo del Fondo de Expansión de Arte + Tecnología Knight. (250 palabras)",
    outcomesTitle: "Describe los resultados que resultarían de la implementación exitosa de las actividades descritas anteriormente. (250 palabras)",
    measurementTitle: "¿Cómo sabrás que este proyecto llevó a esos resultados?",
    sustainabilityTitle: "¿Cómo sostendrás los resultados positivos del esfuerzo más allá del período de financiamiento? Si este no está destinado a ser un esfuerzo sostenible, explica por qué.",
    partnersTitle: "¿Quiénes son tus socios en este proyecto?",
    budgetTitle: "Resumen de Presupuesto e Ingresos",

    // Content
    about: `AI24 es un estudio de tecnología dirigido por artistas lanzado por Moises Sanabria (ingeniero de IA venezolano / artista de nuevos medios) y Fabiola Larios (artista mexicana de nuevos medios). Desde un micro-laboratorio dentro del Bakehouse Art Complex construimos herramientas creativas bilingües y éticas que los artistas latinos y afro-caribeños pueden realmente permitirse. Desde 2020 hemos:
ejecutado sesiones gratuitas de talleres de IA-arte en inglés y español,
construido aplicaciones web (arte de IA, señalización de eventos y sistemas de gestión de aprendizaje), y
ayudado a organizaciones culturales a transmitir sus programas.
Nuestro modelo es "núcleo abierto, extras sostenibles": el código base se libera para uso sin fines de lucro, mientras que el alojamiento premium y las analíticas financian actualizaciones. Los tutoriales son CC BY-NC para que los maestros puedan compartirlos libremente. Pequeños por elección, iteramos rápido y probamos en la naturaleza—primero en Bakehouse, luego en Locust Projects (Little Haiti). Estas asociaciones dan a nuestro laboratorio de IA un alcance real de vecindario sin grandes gastos generales.`,

    oneSentence: `Lanzar un laboratorio móvil de IA que despliega 2 Señales Inteligentes de nivel museo, 12 estaciones móviles de aprendizaje de IA, y un Sistema de Gestión de Aprendizaje bilingüe a través de Bakehouse, Locust Projects, y más allá—equipando a los artistas de Miami con tecnología creativa abierta y ética y una tubería de habilidades y comunicaciones autofinanciada que sigue creciendo mucho después de la subvención.`,

    measurement: `Un panel de análisis de datos público (Looker Studio dashboard) extrae datos en vivo de tres fuentes automatizadas:
1. Análisis de Producto (PostHog) registra vistas de pantalla y clics de códigos QR tanto para las Señales Inteligentes como para la aplicación web.
2. Base de Datos (Supabase) captura completaciones de cursos LMS más etiquetas anónimas de idioma y género de un formulario de inicio de sesión opcional.
3. YouTube / Streamlabs agrega minutos totales de transmisión en vivo vistos y espectadores concurrentes máximos.
Una Función Edge de Supabase actualiza la hoja de origen todos los días y envía una instantánea CSV semanal a un repositorio público de GitHub. La API de GitHub también enumera las solicitudes de pull externas y bifurcaciones, dando a Knight una puntuación de código abierto en tiempo real. El enlace del panel se fija en ambas Señales Inteligentes una vez al día para que los visitantes puedan verificar los números ellos mismos. Sin software pagado, sin datos ocultos—cualquiera puede auditar, remezclar o investigar las cifras.`,

    sustainability: `Bakehouse Art Complex alberga el estudio del laboratorio, asigna tres administradores de personal, y dona A/V para cuatro Sprints de Habilidades.
Locust Projects proporciona espacio de exhibición en el lobby, envía llamadas a su lista de 12K suscriptores, y co-lidera el segundo bloque de talleres.
También estamos expandiendo lazos—construidos a través de talleres previos—con cinco instituciones de Miami:
Centro de IA de Miami Dade College, New World School of the Arts, Code/Art, FIU College of Communication, Edge Zones.
Esta red abarca cuatro vecindarios de Miami y la tubería completa de K-12 a graduado, amplificando el impacto sin agregar costo al presupuesto de Knight.`,

    // Activity sections
    techBuild: "Construcción Tecnológica",
    hardwareRollout: "Despliegue de Hardware",
    staffTraining: "Personal y Entrenamiento",
    communityEngagement: "Compromiso Comunitario",
    logistics: "Logística",

    // Outcome sections
    accessSkills: "Acceso y Habilidades",
    visibility: "Visibilidad",
    equity: "Equidad",
    openTech: "Tecnología Abierta",
    sustainabilityOutcomes: "Sostenibilidad",
    scalability: "Escalabilidad",

    // Partner sections
    bakehouse: "Bakehouse Art Complex",
    locustProjects: "Locust Projects",
    expandingNetwork: "Red en Expansión",
    networkImpact: "Impacto de la Red",

    // Budget items
    totalBudget: "Presupuesto total del proyecto: $24 850",
    knightEligible: "Elementos de efectivo elegibles para Knight (hardware, infraestructura, desarrollo, archivo, contingencia): $24 850",
    fundingRequested: "Financiamiento solicitado a Knight: $24 850",
    otherRevenue: "Cómo se recaudarán otros ingresos: Los tres lugares anfitriones han confirmado cartas de apoyo en especie cubriendo alquiler de espacio, refrigerios y operadores de cámara voluntarios"
  },

  fr: {
    // Page header
    pageTitle: "Laboratoire Mobile d'IA AI24",
    pageSubtitle: "Proposition pour le Fonds d'Expansion Art + Technologie Knight",
    backToOverview: "Retour à l'Aperçu",
    readyToSupport: "Prêt à Soutenir la Capacité Numérique?",
    readyToSupportSubtitle: "Rejoignez-nous dans la construction de la première infrastructure de technologie créative durable de Miami",
    viewBudgetDetails: "Voir les Détails du Budget",

    // Section titles
    aboutTitle: "Parlez-nous plus de vous ou de votre organisation (150 mots)",
    oneSentenceTitle: "Comment décririez-vous votre projet en une phrase? (50 mots)",
    activitiesTitle: "Décrivez les activités qui seraient menées avec le soutien du Fonds d'Expansion Art + Technologie Knight. (250 mots)",
    outcomesTitle: "Décrivez les résultats qui résulteraient de la mise en œuvre réussie des activités décrites ci-dessus. (250 mots)",
    measurementTitle: "Comment saurez-vous que ce projet a mené à ces résultats?",
    sustainabilityTitle: "Comment soutiendrez-vous les résultats positifs de l'effort au-delà de la période de financement? Si cela n'est pas destiné à être un effort durable, expliquez pourquoi.",
    partnersTitle: "Qui sont vos partenaires dans ce projet?",
    budgetTitle: "Résumé du Budget et des Revenus",

    // Content
    about: `AI24 est un studio technologique dirigé par des artistes lancé par Moises Sanabria (ingénieur IA vénézuélien / artiste nouveaux médias) et Fabiola Larios (artiste mexicaine nouveaux médias). Depuis un micro-laboratoire à l'intérieur du Bakehouse Art Complex, nous construisons des outils créatifs bilingues et éthiques que les artistes latinos et afro-caribéens peuvent réellement se permettre. Depuis 2020, nous avons:
exécuté des sessions d'ateliers d'art-IA gratuites en anglais et espagnol,
construit des applications web (art IA, signalisation d'événements et systèmes de gestion d'apprentissage), et
aidé les organisations culturelles à diffuser leurs programmes.
Notre modèle est "noyau ouvert, extras durables": le code de base est libéré pour un usage à but non lucratif, tandis que l'hébergement premium et les analyses financent les mises à jour. Les tutoriels sont CC BY-NC pour que les enseignants puissent les partager librement. Petits par choix, nous itérons rapidement et testons dans la nature—d'abord à Bakehouse, puis à Locust Projects (Little Haiti). Ces partenariats donnent à notre laboratoire d'IA une portée réelle de quartier sans gros frais généraux.`,

    oneSentence: `Lancer un laboratoire mobile d'IA qui déploie 2 Panneaux Intelligents de niveau musée, 12 stations d'apprentissage mobile d'IA, et un Système de Gestion d'Apprentissage bilingue à travers Bakehouse, Locust Projects, et au-delà—équipant les artistes de Miami avec une technologie créative ouverte et éthique et un pipeline de compétences et de communications autofinancé qui continue de croître longtemps après la subvention.`,

    measurement: `Un tableau de bord d'analyse de données public (Looker Studio dashboard) tire des données en direct de trois flux automatisés:
1. Analyse de Produit (PostHog) enregistre les vues d'écran et les clics de codes QR pour les Panneaux Intelligents et l'application web.
2. Base de Données (Supabase) capture les achèvements de cours LMS plus les balises anonymes de langue et de genre d'un formulaire de connexion optionnel.
3. YouTube / Streamlabs ajoute les minutes totales de diffusion en direct regardées et les spectateurs concurrents de pointe.
Une Fonction Edge Supabase rafraîchit la feuille source tous les jours et pousse un instantané CSV hebdomadaire vers un repo GitHub public. L'API GitHub liste aussi les pull-requests externes et les forks, donnant à Knight un score open-source en temps réel. Le lien du tableau de bord est épinglé sur les deux Panneaux Intelligents une fois par jour pour que les visiteurs puissent vérifier les chiffres eux-mêmes. Pas de logiciel payé, pas de données cachées—n'importe qui peut auditer, remixer ou rechercher les chiffres.`,

    sustainability: `Bakehouse Art Complex héberge le studio du laboratoire, assigne trois administrateurs de personnel, et fait don d'A/V pour quatre Sprints de Compétences.
Locust Projects fournit l'espace d'affichage du lobby, pousse les appels à sa liste de 12K abonnés, et co-dirige le deuxième bloc d'ateliers.
Nous étendons aussi les liens—construits à travers des ateliers précédents—avec cinq institutions de Miami:
Centre IA de Miami Dade College, New World School of the Arts, Code/Art, FIU College of Communication, Edge Zones.
Ce réseau couvre quatre quartiers de Miami et le pipeline complet K-12-à-gradué, amplifiant l'impact sans ajouter de coût au budget Knight.`,

    // Activity sections
    techBuild: "Construction Technologique",
    hardwareRollout: "Déploiement Matériel",
    staffTraining: "Personnel et Formation",
    communityEngagement: "Engagement Communautaire",
    logistics: "Logistique",

    // Outcome sections
    accessSkills: "Accès et Compétences",
    visibility: "Visibilité",
    equity: "Équité",
    openTech: "Technologie Ouverte",
    sustainabilityOutcomes: "Durabilité",
    scalability: "Évolutivité",

    // Partner sections
    bakehouse: "Bakehouse Art Complex",
    locustProjects: "Locust Projects",
    expandingNetwork: "Réseau en Expansion",
    networkImpact: "Impact du Réseau",

    // Budget items
    totalBudget: "Budget total du projet: $24 850",
    knightEligible: "Éléments en espèces éligibles Knight (matériel, infrastructure, développement, archive, contingence): $24 850",
    fundingRequested: "Financement demandé à Knight: $24 850",
    otherRevenue: "Comment d'autres revenus seront levés: Les trois lieux hôtes ont confirmé des lettres de soutien en nature couvrant la location d'espace, les collations et les opérateurs de caméra volontaires"
  }
}; 