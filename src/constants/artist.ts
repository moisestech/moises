import { ReactNode } from 'react';

export interface Exhibition {
  title: string;
  location: string;
  year: string;
}

export interface Work {
  title: string;
  year: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface ArtistData {
  name: string;
  birth: string;
  nationality: string;
  image: string;
  knownFor: string[];
  notableWorks: string[];
  biography: string;
  biography_es: string;
  earlyLife: string;
  earlyLife_es: string;
  artPractice: string;
  artPractice_es: string;
  professionalWork: string;
  professionalWork_es: string;
  exhibitions: Exhibition[];
  selectedWorks: Work[];
  pressRecognition: string;
  pressRecognition_es: string;
  styleAndInfluences: string;
  styleAndInfluences_es: string;
  education: string[];
  awards: string[];
  externalLinks: ExternalLink[];
}

export const artistData: ArtistData = {
  name: 'Moises Sanabria',
  birth: '6 August 1990, (age 34), Caracas, Venezuela',
  nationality: 'Venezuelan-American',
  image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1747486394/art/moisestech-website/bio/moises-pfp-test-user-face-3_exmerc.jpg',
  knownFor: ['Sculpture', 'New media installation art'],
  notableWorks: [
    '5 Million Dollars 1 Terabyte',
    'VR Hug',
    'McDonald Brass Knuckles',
  ],
  biography:
    'Moises Sanabria (born 6 August 1990) is a Venezuelan-born, Miami-based interdisciplinary artist. Known primarily for his exploration of Post-internet sculptures and new media installation art, Sanabria\'s practice also includes software development, curating and publishing. In 2012, the Haus Del Kulturwelt in Berlin curated one of his collective\'s artwork. Some of Sanabria\'s better known works include "5 Million Dollars 1 Terabyte", consisting of a hard drive with 5 million dollars worth of software; "VR Hug", a photo depicting two people with VR Headsets hugging; and "McDonald Brass Knuckles", brass knuckles in the shape of the McDonald\'s logo.',
  biography_es:
    'Moises Sanabria (nacido el 6 de agosto de 1990) es un artista interdisciplinario venezolano-estadounidense radicado en Miami. Conocido principalmente por su exploración de esculturas post-internet e instalaciones de nuevos medios, la práctica de Sanabria también incluye desarrollo de software, curaduría y publicación. En 2012, el Haus Del Kulturwelt en Berlín curó una de las obras de su colectivo. Algunas de las obras más conocidas de Sanabria incluyen "5 Million Dollars 1 Terabyte", que consiste en un disco duro con software por valor de 5 millones de dólares; "VR Hug", una foto que muestra a dos personas con cascos de realidad virtual abrazándose; y "McDonald Brass Knuckles", nudillos de latón con la forma del logo de McDonald\'s.',
  earlyLife:
    'Sanabria was born in Venezuela in the 1990s and later moved to Miami, Florida. Raised amidst the burgeoning digital age, he cultivated a fascination with the intersection of technology and human experience. Without formal training in art, he began exploring digital mediums and meme cultures, gaining insights through self-study and engagement with online communities. He further honed his skills and artistic philosophy by attending the New World School of Art in Miami, followed by studies at the School for Poetic Computation. He later graduated with a Bachelor of Fine Arts from The Cooper Union in New York in 2015. His educational journey also extended to specialized programs such as "The Neural Aesthetic" by Gene Kogan at the School of Machines in Berlin, reinforcing his affinity for merging art with technology.',
  earlyLife_es:
    'Sanabria nació en Venezuela en la década de 1990 y posteriormente se mudó a Miami, Florida. Criado en medio de la era digital emergente, cultivó una fascinación por la intersección entre la tecnología y la experiencia humana. Sin formación formal en arte, comenzó a explorar medios digitales y culturas de memes, obteniendo conocimientos a través del autoestudio y la participación en comunidades en línea. Perfeccionó sus habilidades y filosofía artística asistiendo a la New World School of Art en Miami, seguido de estudios en la School for Poetic Computation. Más tarde se graduó con una Licenciatura en Bellas Artes de The Cooper Union en Nueva York en 2015. Su trayectoria educativa también se extendió a programas especializados como "The Neural Aesthetic" de Gene Kogan en la School of Machines en Berlín, reforzando su afinidad por fusionar el arte con la tecnología.',
  artPractice:
    "His practice, deeply embedded in the digital era, incorporates humor and critique, often placing him in the role of a satirical observer of technological advancement. Sanabria's work is characterized by a fusion of digital humanities, social trends, and technology. Utilizing AI, live-streaming, video, and new media installations, his art often delves into themes of memory, value, and human identity within the rapidly evolving technological landscape. He describes his practice as an ongoing conversation between academic aesthetics and internet meme culture.",
  artPractice_es:
    "Su práctica, profundamente arraigada en la era digital, incorpora humor y crítica, colocándolo a menudo en el papel de observador satírico del avance tecnológico. El trabajo de Sanabria se caracteriza por una fusión de humanidades digitales, tendencias sociales y tecnología. Utilizando IA, transmisión en vivo, video e instalaciones de nuevos medios, su arte a menudo profundiza en temas de memoria, valor e identidad humana dentro del panorama tecnológico en rápida evolución. Describe su práctica como una conversación continua entre la estética académica y la cultura de memes de internet.",
  professionalWork:
    'Sanabria co-founded the artificial intelligence media channel AI24 and was an active member of the digital art collective ART404. He gained recognition for pushing the boundaries of digital art and media critique.',
  professionalWork_es:
    'Sanabria cofundó el canal de medios de inteligencia artificial AI24 y fue miembro activo del colectivo de arte digital ART404. Ganó reconocimiento por empujar los límites del arte digital y la crítica mediática.',
  exhibitions: [
    { title: 'Transmediale 2k+12', location: 'Berlin', year: '2012' },
    {
      title: 'Institute of Contemporary Art Miami',
      location: 'Miami',
      year: '2015',
    },
    { title: 'Kunsthalle Giessen', location: 'Berlin', year: '2018' },
    { title: 'Untitled Art Fair', location: 'Miami', year: '2022' },
    { title: 'HODLER Gallery', location: 'Miami', year: '2023' },
  ],
  selectedWorks: [
    { title: '5 Million Dollars 1 Terabyte', year: '2012' },
    { title: 'Avatar Apparel', year: '2014' },
    { title: 'All Flags', year: '2015' },
    { title: 'Netflix and Chill Suite', year: '2015' },
    { title: 'MacBook Selfie Stick', year: '2016' },
  ],
  pressRecognition:
    'Sanabria\'s work has been covered by a variety of media outlets including Rhizome, Wired, The Guardian, and Forbes. In 2012, he received a Webby Award for his project "Social Weird - Sad Tweets," which further solidified his reputation as a critical voice in digital art.',
  pressRecognition_es:
    'El trabajo de Sanabria ha sido cubierto por una variedad de medios de comunicación incluyendo Rhizome, Wired, The Guardian y Forbes. En 2012, recibió un Webby Award por su proyecto "Social Weird - Sad Tweets," lo que consolidó aún más su reputación como una voz crítica en el arte digital.',
  styleAndInfluences:
    'His practice is marked by an entanglement with digital newness, social trends, and machine philosophy. Sanabria often addresses the intersection of art, technology, and the human experience, capturing the complexities of modern existence in an increasingly interconnected digital world.',
  styleAndInfluences_es:
    'Su práctica está marcada por un enredo con la novedad digital, las tendencias sociales y la filosofía de las máquinas. Sanabria a menudo aborda la intersección del arte, la tecnología y la experiencia humana, capturando las complejidades de la existencia moderna en un mundo digital cada vez más interconectado.',
  education: [
    'New World School of Art, Miami, FL (2009-2011)',
    'School for Poetic Computation (2013)',
    'The Cooper Union, Bachelor of Fine Arts (2011-2015)',
    'Additional studies at the School of Machines, Berlin, and Knight Foundation Art + Research Center',
  ],
  awards: ['Webby Award - "Social Weird - Sad Tweets"'],
  externalLinks: [
    { label: 'Official Website', url: 'https://moisessanabria.com' },
    { label: 'AI24', url: 'https://ai24.tv' },
  ],
};
