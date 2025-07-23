"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/common/LanguageSelector';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';

const intro = {
  en: `This talk explores the value and future of the image in art, technology, and society. From modernism to the age of AI, we examine how images shape culture, perception, and meaning in a rapidly changing world.`,
  es: `Esta charla explora el valor y el futuro de la imagen en el arte, la tecnología y la sociedad. Desde el modernismo hasta la era de la IA, examinamos cómo las imágenes moldean la cultura, la percepción y el significado en un mundo que cambia rápidamente.`,
  fr: `Cette conférence explore la valeur et l'avenir de l'image dans l'art, la technologie et la société. Du modernisme à l'ère de l'IA, nous examinons comment les images façonnent la culture, la perception et le sens dans un monde en évolution rapide.`
};

const titles = {
  en: 'The Value and Future of the Image',
  es: 'El Valor y Futuro de la Imagen',
  fr: `La Valeur et l'Avenir de l'Image`
};

const placeholderImage = "https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628542/art/moisestech-website/talks/24_artec_moises-sanabria_valor-de-la-imagen_dfbhqb.webp";

const slides: Array<{
  en: { title: string; text: string };
  es: { title: string; text: string };
  fr: { title: string; text: string };
  video: string;
}> = [
  {
    en: {
      title: "Hello",
      text: `I'm Moises Sanabria, glad to be here today. Thank you for your attention and for joining me. I'm a resident at Bakehouse Art Complex in Miami. Thanks to Fundación Paiz for their support. Thanks to everyone from ArtTec for coming and exploring these topics. I'm an interdisciplinary artist and creative technologist. This talk is experimental and theoretical, focused on speculating about the future. It's inspired by my experience and artistic process, and is a work in progress I'll explore for the rest of my life.`
    },
    es: {
      title: "Hola",
      text: `Soy Moises Sanabria, encantado de estar aquí hoy. Gracias por su atención y por acompañarme. Soy residente en Bakehouse Art Complex en Miami. Agradezco a Fundación Paiz por su apoyo. Gracias a todos de ArtTec por venir e indagar en estos temas. Soy un artista interdisciplinario y tecnólogo creativo. Esta charla es muy experimental y teórica, enfocada en especular sobre el futuro. Está inspirada en mi experiencia y proceso artístico, y es un trabajo en progreso que exploraré el resto de mi vida.`
    },
    fr: {
      title: "Bonjour",
      text: `Je suis Moises Sanabria, ravi d'être ici aujourd'hui. Merci pour votre attention et de m'accompagner. Je suis résident au Bakehouse Art Complex à Miami. Merci à la Fundación Paiz pour son soutien. Merci à tous d'ArtTec d'être venus et d'explorer ces sujets. Je suis un artiste interdisciplinaire et un technologue créatif. Cette conférence est très expérimentale et théorique, axée sur la spéculation sur l'avenir. Elle est inspirée par mon expérience et mon processus artistique, et c'est un travail en cours que j'explorerai toute ma vie.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Value and Future of the Image",
      text: `Let's explore the value of the image: its evolution over time, its importance in art and society, its transformation with artificial intelligence, and how distribution and verification work in the digital era.`
    },
    es: {
      title: "Valor y Futuro de la Imagen",
      text: `Vamos a explorar el valor de la imagen, su evolución a lo largo del tiempo, su importancia en el arte y la sociedad, su transformación con la inteligencia artificial, y cómo funciona la distribución y verificación en la era digital.`
    },
    fr: {
      title: "La Valeur et l'Avenir de l'Image",
      text: `Explorons la valeur de l'image : son évolution au fil du temps, son importance dans l'art et la société, sa transformation avec l'intelligence artificielle, et comment la distribution et la vérification fonctionnent dans l'ère numérique.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Art is Observed",
      text: `The image directly impacts our senses and emotions. Our eyes are the windows to much of our visual content. The image reflects and shapes cultural values and beliefs. For the creator, creating has intrinsic and significant value. The appreciation of the image varies according to the viewer's experience. On the internet, the image spreads and acquires new meanings. Greater diffusion and accessibility on digital platforms expands its reach. More likes indicate more value; memes can surpass contemporary works. The image connects creator and viewer in a continuous dialogue, transcending cultural and technological barriers, framing our perceptions.`
    },
    es: {
      title: "El Arte Se Observa",
      text: `La imagen impacta directamente nuestros sentidos y emociones. Los ojos son las ventanas a gran parte del contenido visual. La imagen refleja y moldea los valores y creencias culturales. Para el creador, crear tiene un valor intrínseco y significativo. La apreciación de la imagen varía según la experiencia del espectador. En internet, la imagen se disemina y adquiere nuevos significados. Mayor difusión y accesibilidad en plataformas digitales amplía su alcance. Más likes indican más valor; los memes pueden superar obras contemporáneas. La imagen conecta creador y espectador en un diálogo continuo. Trasciende barreras culturales y tecnológicas, enmarcando nuestras percepciones.`
    },
    fr: {
      title: "L'Art Se Observe",
      text: `L'image a un impact direct sur nos sens et nos émotions. Nos yeux sont les fenêtres pour beaucoup de notre contenu visuel. L'image reflète et modèle les valeurs et les croyances culturelles. Pour le créateur, créer a une valeur intrinsèque et significative. L'appréciation de l'image varie en fonction de l'expérience de l'observateur. Sur internet, l'image se diffuse et acquiert de nouveaux sens. Une diffusion et une accessibilité accrue sur les plateformes numériques augmentent son rayon d'action. Plus de likes indiquent plus de valeur ; les memes peuvent surpasser les œuvres contemporaines. L'image connecte le créateur et l'observateur dans un dialogue continu. Elle transcende les barrières culturelles et technologiques, englobant nos perceptions.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Modernism",
      text: `The value of art during modernism was slow and centralized, and the dissemination of content varied considerably. Movements like Impressionism, Expressionism, and Futurism reflected social and technological changes. With Pop Art, the union between general content and art began, using mass media like magazines and television, thus expanding the diffusion and cultural impact of art. Other types of images, such as photographs in newspapers and magazines, and television advertising, also played an important role in the dissemination of visual content and its value in society. Photography also had a great impact at this time, becoming a parallel medium to traditional painting and playing a crucial role in the spread of visual content.`
    },
    es: {
      title: "Modernismo",
      text: `El valor del arte durante el modernismo era lento y centralizado, y la diseminación del contenido variaba considerablemente. Movimientos como el Impresionismo, Expresionismo y Futurismo reflejaron los cambios sociales y tecnológicos. Con el Pop Art, comenzó la unión entre el mundo del contenido general y el arte, usando medios de comunicación masivos como revistas y televisión, ampliando así la difusión y el impacto cultural del arte. Además, otros tipos de imágenes, como fotografías en periódicos y revistas, y la publicidad en televisión, también jugaron un papel importante en la difusión del contenido visual y su valor en la sociedad. La fotografía también tuvo un gran impacto en este momento, convirtiéndose en un medio paralelo a la imagen tradicional con pintura y desempeñando un papel crucial en la difusión del contenido visual.`
    },
    fr: {
      title: "Le Modernisme",
      text: `La valeur de l'art au cours du modernisme était lente et centralisée, et la diffusion du contenu variait considérablement. Des mouvements comme l'Impressionnisme, l'Expressionnisme et le Futurisme ont reflété les changements sociaux et technologiques. Avec le Pop Art, la réunion entre le contenu général et l'art a commencé, en utilisant des médias de masse comme des magazines et la télévision, ce qui a augmenté la diffusion et l'impact culturel de l'art. D'autres types d'images, comme des photographies dans les journaux et les magazines, et la publicité à la télévision, ont également joué un rôle important dans la diffusion du contenu visuel et sa valeur dans la société. La photographie a également eu un grand impact à ce moment, devenant un média parallèle à l'image traditionnelle avec la peinture et jouant un rôle crucial dans la diffusion du contenu visuel.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Modernism Continued",
      text: `Modernism not only introduced a break with previous traditions, but also expanded the media and techniques available to artists. Each medium—from painting to video art—found ways to disseminate itself both in the artistic and commercial realms. These media influenced not only contemporary art but also commercial areas, showing the continuous relationship and flow between art and society.`
    },
    es: {
      title: "Modernismo Continuado",
      text: `El modernismo no solo introdujo una ruptura con las tradiciones anteriores, sino que también expandió los medios y técnicas disponibles para los artistas. Cada medio — desde la pintura hasta el video arte — encontró maneras de diseminarse tanto en el ámbito artístico como en el comercial. Estos medios no solo influenciaron el arte contemporáneo sino también áreas comerciales, mostrando la relación y el flujo continuo entre arte y sociedad.`
    },
    fr: {
      title: "Le Modernisme Continué",
      text: `Le modernisme n'a pas seulement introduit une rupture avec les traditions précédentes, mais a également élargi les médias et les techniques disponibles pour les artistes. Chaque média — de la peinture au vidéo-art — a trouvé des façons de se diffuser à la fois dans le domaine artistique et commercial. Ces médias ont influencé non seulement l'art contemporain, mais aussi les domaines commerciaux, montrant la relation et le flux continu entre l'art et la société.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Value Perspectives",
      text: `The value of an image can be perceived from various perspectives. It includes aesthetic and technical value, focusing on the visual and technical quality of the work, and historical and cultural value, highlighting its relevance in the history and culture of a society. It also encompasses emotional and symbolic value, referring to the emotional connection and deep meaning of the image, and market and authenticity value, which determines its price and authenticity. Other important factors are social and political impact, innovation and originality, the creator's personal connection, individual appreciation, accessibility and dissemination, and the context and narrative behind the artwork.`
    },
    es: {
      title: "Valor Perspectivas",
      text: `El valor de una imagen se puede percibir desde diversas perspectivas. Incluye el valor estético y técnico, que se enfoca en la calidad visual y técnica de la obra, y el valor histórico y cultural, que destaca su relevancia en la historia y cultura de una sociedad. También abarca el valor emocional y simbólico, que se refiere a la conexión emocional y el significado profundo de la imagen, y el valor de mercado y autenticidad, que determina su precio en el mercado y su autenticidad. Otros factores importantes son el impacto social y político, la innovación y originalidad, la conexión personal del creador, la apreciación individual del espectador, la accesibilidad y difusión de la imagen, y el contexto y narrativa detrás de la obra artística.`
    },
    fr: {
      title: "Les Perspectives de Valeur",
      text: `La valeur d'une image peut être perçue de diverses perspectives. Elle comprend la valeur esthétique et technique, qui se concentre sur la qualité visuelle et technique de l'œuvre, et la valeur historique et culturelle, qui met en évidence sa pertinence dans l'histoire et la culture d'une société. Elle comprend également la valeur émotionnelle et symbolique, qui fait référence à la connexion émotionnelle et au sens profond de l'image, et la valeur de marché et d'authenticité, qui détermine son prix sur le marché et son authenticité. D'autres facteurs importants sont l'impact social et politique, l'innovation et l'originalité, la connexion personnelle du créateur, l'appréciation individuelle de l'observateur, l'accessibilité et la diffusion de l'image, et le contexte et la narration derrière l'œuvre d'art.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Readymade Art",
      text: `Readymade art, introduced by Marcel Duchamp, revolutionized the way art is perceived. By elevating everyday objects to the category of art, Duchamp challenged traditional norms with works like "Bicycle Wheel" in 1913. "Fountain" (Urinal) as an iconic readymade (1917) became a symbol of artistic provocation. This movement protested against the excessive importance of technique and transformed the perception of what can be considered art. By questioning and redefining the boundaries of art, readymade art laid the foundation for innovation in conceptual art and had a lasting impact on contemporary art.`
    },
    es: {
      title: "Readymade Art",
      text: `El readymade art, introducido por Marcel Duchamp, revolucionó la manera en que se percibe el arte. Elevando objetos cotidianos a la categoría de arte, Duchamp desafió las normas tradicionales con obras como "Bicycle Wheel" en 1913. "Fountain" (Urinal) como readymade icónico (1917): Símbolo de la provocación artística. Este movimiento protestó contra la importancia excesiva de la técnica y transformó la percepción de lo que puede ser considerado arte. Al cuestionar y redefinir los límites del arte, el readymade art sentó las bases para la innovación en el arte conceptual y tuvo un impacto duradero en el arte contemporáneo.`
    },
    fr: {
      title: "L'Art Readymade",
      text: `L'art readymade, introduit par Marcel Duchamp, a révolutionné la façon dont l'art est perçu. En élevant les objets quotidiens à la catégorie de l'art, Duchamp a défié les normes traditionnelles avec des œuvres comme "Roue de vélo" en 1913. "Fontaine" (Urinoir) comme readymade iconique (1917) est devenu un symbole de provocation artistique. Ce mouvement a protesté contre l'importance excessive de la technique et a transformé la perception de ce qui peut être considéré comme art. En posant des questions et en redéfinissant les limites de l'art, l'art readymade a posé les bases pour l'innovation dans l'art conceptuel et a eu une influence durable sur l'art contemporain.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Conceptual Art",
      text: `Conceptual art focuses on the primacy of the idea over form, revolutionizing the traditional understanding of art. Figures like Sol LeWitt were crucial in this movement, highlighting the dematerialization of the art object and art as a mental process. This approach questions established artistic norms, prioritizing language and writing as means to convey ideas. Conceptual art invites viewer interaction and active participation in interpreting the work. With its emphasis on documentation and instructions, it has significantly influenced contemporary art, offering a reevaluation of artistic value and a new perspective on what constitutes a work of art.`
    },
    es: {
      title: "Arte Conceptual",
      text: `El arte conceptual se centra en la primacía de la idea sobre la forma, revolucionando la comprensión tradicional del arte. Figuras como Sol LeWitt fueron cruciales en este movimiento, destacando la desmaterialización del objeto artístico y el arte como un proceso mental. Este enfoque cuestiona las normas artísticas establecidas, priorizando el lenguaje y la escritura como medios para transmitir ideas. El arte conceptual invita a la interacción del espectador y a la participación activa en la interpretación de la obra. Con su énfasis en la documentación y las instrucciones, ha influido significativamente en el arte contemporáneo, ofreciendo una reevaluación del valor artístico y una nueva perspectiva sobre lo que constituye una obra de arte.`
    },
    fr: {
      title: "L'Art Conceptuel",
      text: `L'art conceptuel se concentre sur la primauté de l'idée sur la forme, révolutionnant la compréhension traditionnelle de l'art. Des figures comme Sol LeWitt ont été cruciales dans ce mouvement, mettant en évidence la dématerialisation de l'objet artistique et l'art comme un processus mental. Cette approche pose des questions aux normes artistiques établies, privilégiant le langage et l'écriture comme moyens de transmettre des idées. L'art conceptuel invite l'interaction de l'observateur et la participation active à l'interprétation de l'œuvre. Avec son emphase sur la documentation et les instructions, il a significativement influencé l'art contemporain, offrant une réévaluation de la valeur artistique et une nouvelle perspective sur ce qui constitue une œuvre d'art.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Conceptual Art Continued",
      text: `"One and Three Chairs" by Joseph Kosuth is an emblematic work of conceptual art that reflects on representation and reality. This piece challenges traditional definitions of art, prioritizing the idea over the physical object. In conceptual art, viewer interaction is crucial, as their active participation in interpreting the work is essential. The use of everyday objects elevates the ordinary to the conceptual, highlighting the importance of context and how it influences the perception of the work. Art becomes a language that uses signs and symbols to communicate ideas, and this approach has significantly influenced art education, rethinking methods and pedagogical approaches. The influence of conceptual art endures, impacting generations of artists and subsequent movements.`
    },
    es: {
      title: "Arte Conceptual Continuado",
      text: `"One and Three Chairs" de Joseph Kosuth es una obra emblemática del arte conceptual que reflexiona sobre la representación y la realidad. Esta pieza desafía las definiciones tradicionales del arte, priorizando la idea sobre el objeto físico. En el arte conceptual, la interacción del espectador es crucial, ya que su participación activa en la interpretación de la obra es esencial. El uso de objetos cotidianos eleva lo común a lo conceptual, destacando la importancia del contexto y cómo influye en la percepción de la obra. El arte se convierte en un lenguaje que emplea signos y símbolos para comunicar ideas, y este enfoque ha influido significativamente en la educación artística, replanteando métodos y enfoques pedagógicos. La influencia del arte conceptual perdura, impactando a generaciones de artistas y movimientos posteriores.`
    },
    fr: {
      title: "L'Art Conceptuel Continué",
      text: `"One and Three Chairs" de Joseph Kosuth est une œuvre emblématique de l'art conceptuel qui réfléchit sur la représentation et la réalité. Cette œuvre défie les définitions traditionnelles de l'art, privilégiant l'idée sur l'objet physique. Dans l'art conceptuel, l'interaction de l'observateur est cruciale, car leur participation active à l'interprétation de l'œuvre est essentielle. L'utilisation d'objets quotidiens élève le commun au conceptuel, mettant en évidence l'importance du contexte et de son influence sur la perception de l'œuvre. L'art devient une langue qui utilise des signes et des symboles pour communiquer des idées, et cette approche a significativement influencé l'éducation artistique, réévaluant les méthodes et les approches pédagogiques. L'influence de l'art conceptuel perdure, impactant les générations d'artistes et les mouvements suivants.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Conceptualism Values the Idea",
      text: `Conceptualism values the idea over execution, highlighting the importance of the artist's intention. Works like "One and Three Chairs" by Joseph Kosuth exemplify this primacy of conceptualization. This perspective has deeply influenced my artistic practice, motivating me to focus on ideas and concepts. In the era of artificial intelligence, the relationship between art and technology allows for the materialization of innovative concepts, transforming the value of the image. The fusion of technology and art challenges traditional norms and changes our artistic perception, showing new ways to value and understand images in the digital context.`
    },
    es: {
      title: "Conceptualismo Valora La Idea",
      text: `El conceptualismo valora la idea sobre la ejecución, destacando la importancia de la intención del artista. Obras como "One and Three Chairs" de Joseph Kosuth ejemplifican esta primacía de la conceptualización. Esta perspectiva ha influido profundamente en mi práctica artística, motivándome a centrarme en ideas y conceptos. En la era de la inteligencia artificial, la relación entre arte y tecnología permite materializar conceptos innovadores, transformando el valor de la imagen. La fusión de tecnología y arte desafía las normas tradicionales y cambia nuestra percepción artística, mostrando nuevas formas de valorar y entender las imágenes en el contexto digital.`
    },
    fr: {
      title: "Le Conceptualisme Valorise l'Idée",
      text: `Le conceptualisme valorise l'idée sur l'exécution, mettant en évidence l'importance de l'intention de l'artiste. Des œuvres comme "One and Three Chairs" de Joseph Kosuth illustrent cette primauté de la conceptualisation. Cette perspective a profondément influencé ma pratique artistique, m'incitant à me concentrer sur les idées et les concepts. Dans l'ère de l'intelligence artificielle, la relation entre l'art et la technologie permet la matérialisation de concepts innovants, transformant la valeur de l'image. La fusion de la technologie et de l'art défie les normes traditionnelles et change notre perception de l'art, montrant de nouvelles façons de valoriser et de comprendre les images dans le contexte numérique.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Minkowski Space Time Diagram",
      text: `The Minkowski Space Time Diagram is a visual representation of the theory of space-time that shows the relationship between art and science. This intersection explores dimensions and perceptions, influencing concepts of time and space in art. The fusion of physics and creativity inspires new forms of artistic representation. Throughout history, images have evolved from classical paintings to scientific representations, and in the digital age, advanced technology transforms creative possibilities. As observers, we interpret and understand these complex images, reflecting the continuous change in visual creation. In the future, innovation in the representation of time and space will continue to expand the boundaries of what is possible in art and science.`
    },
    es: {
      title: "Minkowski Space Time Diagram",
      text: `El Minkowski Space Time Diagram es una representación visual de la teoría del espacio-tiempo que muestra la relación entre arte y ciencia. Esta intersección explora dimensiones y percepciones, influenciando conceptos de tiempo y espacio en el arte. La fusión de la física y la creatividad inspira nuevas formas de representación artística. A lo largo de la historia, las imágenes han evolucionado desde las pinturas clásicas hasta las representaciones científicas, y en la era digital, la tecnología avanzada transforma las posibilidades creativas. Como observadores, interpretamos y comprendemos estas imágenes complejas, reflejando el continuo cambio en la creación visual. En el futuro, la innovación en la representación del tiempo y el espacio continuará ampliando los límites de lo que es posible en el arte y la ciencia.`
    },
    fr: {
      title: "Diagramme d'Espace-Temps de Minkowski",
      text: `Le Diagramme d'Espace-Temps de Minkowski est une représentation visuelle de la théorie de l'espace-temps qui montre la relation entre l'art et la science. Cette intersection explore les dimensions et les perceptions, influençant les concepts de temps et d'espace dans l'art. La fusion de la physique et de la créativité inspire de nouvelles formes de représentation artistique. Au fil de l'histoire, les images ont évolué des peintures classiques aux représentations scientifiques, et dans l'ère numérique, la technologie avancée transforme les possibilités créatives. Comme observateurs, nous interprétons et comprenons ces images complexes, reflétant le changement continu dans la création visuelle. Dans le futur, l'innovation dans la représentation du temps et de l'espace continuera d'élargir les limites de ce qui est possible dans l'art et la science.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Generative Age",
      text: `The generative age marks a turning point in artistic creation, influenced by pioneers like Arram Sabeti. Creation through algorithms and code has revolutionized digital art production, enabling new forms of artistic expression and expanding creative possibilities. This change reflects an evolution of the creative process, where human-machine interaction facilitates collaboration between artists and technology. The accessibility and democratization of digital tools allow more creators to explore their potential, impacting the perception of art and redefining authorship and originality. The art industry has also changed, with new market and distribution dynamics, and a focus on the unlimited exploration of creative potential in digital art generation.`
    },
    es: {
      title: "Era Generativa",
      text: `La era generativa marca un punto de inflexión en la creación artística, influenciada por pioneros como Arram Sabeti. La creación mediante algoritmos y código ha revolucionado la producción de arte digital, permitiendo nuevas formas de expresión artística y ampliando las posibilidades creativas. Este cambio refleja una evolución del proceso creativo, donde la interacción humano-máquina facilita la colaboración entre artistas y tecnología. La accesibilidad y democratización de herramientas digitales permiten a más creadores explorar su potencial, impactando la percepción del arte y redefiniendo la autoría y la originalidad. La industria del arte también ha cambiado, con nuevas dinámicas de mercado y distribución, y un enfoque en la exploración ilimitada del potencial creativo en la generación de arte digital.`
    },
    fr: {
      title: "L'Âge Génératif",
      text: `L'âge génératif marque un point de rupture dans la création artistique, influencé par des pionniers comme Arram Sabeti. La création par algorithmes et code a révolutionné la production d'art numérique, permettant de nouvelles formes d'expression artistique et d'élargir les possibilités créatives. Ce changement reflète une évolution du processus créatif, où l'interaction homme-machine facilite la collaboration entre artistes et technologie. L'accessibilité et la démocratisation des outils numériques permettent à plus de créateurs d'explorer leur potentiel, impactant la perception de l'art et réévaluant l'auteur et l'originalité. L'industrie de l'art a également changé, avec de nouvelles dynamiques de marché et de distribution, et un focus sur l'exploration illimitée du potentiel créatif dans la génération d'art numérique.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Post-Internet",
      text: `Post-internet art represents a significant evolution in the digital age, marked by the influence of Web 2.0 and social networks. These platforms have amplified artistic creation and dissemination, allowing for global interaction and participation. The emergence and proliferation of memes have redefined creativity, becoming an essential part of viral visual culture. In the information age, art reflects and responds to the constant flow of data, and access to digital tools has democratized artistic creation. This change has modified the perception of art's value, with virality and social impact as new indicators. New forms of exposure, such as virtual galleries, and the fusion of digital and physical, have significantly impacted creative industries, transforming the art economy and culture.`
    },
    es: {
      title: "Post-Internet",
      text: `El arte post-internet representa una evolución significativa en la era digital, marcada por la influencia de Web 2.0 y las redes sociales. Estas plataformas han amplificado la creación y difusión artística, permitiendo la interacción y participación global. El surgimiento y proliferación de memes han redefinido la creatividad, convirtiéndose en una parte esencial de la cultura visual viral. En la era de la información, el arte refleja y responde al flujo constante de datos, y la accesibilidad a herramientas digitales ha democratizado la creación artística. Este cambio ha modificado la percepción del valor del arte, con la viralidad y el impacto social como nuevos indicadores. Las nuevas formas de exposición, como las galerías virtuales, y la fusión de lo digital y lo físico, han impactado significativamente las industrias creativas, transformando la economía del arte y la cultura.`
    },
    fr: {
      title: "Post-Internet",
      text: `L'art post-internet représente une évolution significative dans l'ère numérique, marquée par l'influence de Web 2.0 et les réseaux sociaux. Ces plateformes ont amplifié la création et la diffusion de l'art, permettant l'interaction et la participation mondiale. L'émergence et la prolifération des memes ont réévalué la créativité, devenant une partie essentielle de la culture visuelle virale. Dans l'ère de l'information, l'art reflète et répond au flux constant de données, et l'accessibilité aux outils numériques a démocratisé la création artistique. Ce changement a modifié la perception de la valeur de l'art, avec la viralité et l'impact social comme nouveaux indicateurs. Les nouvelles formes d'exposition, comme les galeries virtuelles, et la fusion du numérique et du physique, ont significativement impacté les industries créatives, transformant l'économie de l'art et la culture.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Post-Internet Continued",
      text: `The post-internet era has transformed digital art, exemplified by works like "Simple Net Art Diagram" that demonstrate global connectivity and real-time interaction. Digitization has introduced new platforms for creation, facilitating tools and virtual spaces for artists. This transformation has had a profound impact on methods, access, and distribution of art, redefining the digital art economy and presenting new models of monetization and distribution. The culture of the ephemeral and the constant evolution of digital art have changed the perception of authorship, promoting collaborations and collective works. In addition, digital archives and art preservation present both challenges and opportunities. The exploration of virtual identities and the use of avatars in digital art reflect ongoing innovation in this field, underscoring the importance of global connectivity and interactivity.`
    },
    es: {
      title: "Post-Internet Continuado",
      text: `La era post-internet ha transformado el arte digital, ejemplificado por obras como "Simple Net Art Diagram" que demuestran la conectividad global y la interacción en tiempo real. La digitalización ha introducido nuevas plataformas para la creación, facilitando herramientas y espacios virtuales para los artistas. Esta transformación ha tenido un impacto profundo en los métodos, el acceso y la distribución del arte, redefiniendo la economía del arte digital y presentando nuevos modelos de monetización y distribución. La cultura de lo efímero y la constante evolución del arte digital han cambiado la percepción de la autoría, promoviendo colaboraciones y obras colectivas. Además, los archivos digitales y la preservación del arte presentan tanto desafíos como oportunidades. La exploración de identidades virtuales y el uso de avatares en el arte digital reflejan la continua innovación en este campo, subrayando la importancia de la conectividad y la interactividad global.`
    },
    fr: {
      title: "Post-Internet Continué",
      text: `L'ère post-internet a transformé l'art numérique, exemplifiée par des œuvres comme "Simple Net Art Diagram" qui démontrent la connectivité mondiale et l'interaction en temps réel. La numérisation a introduit de nouvelles plateformes pour la création, facilitant les outils et les espaces virtuels pour les artistes. Cette transformation a eu un impact profond sur les méthodes, l'accès et la distribution de l'art, réévaluant l'économie de l'art numérique et présentant de nouveaux modèles de monétisation et de distribution. La culture de l'éphémère et l'évolution constante de l'art numérique ont changé la perception de l'auteur, promouvant des collaborations et des œuvres collectives. En outre, les archives numériques et la conservation de l'art présentent à la fois des défis et des opportunités. L'exploration des identités virtuelles et l'utilisation d'avatars dans l'art numérique reflètent l'innovation continue dans ce domaine, soulignant l'importance de la connectivité et de l'interactivité mondiale.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Techno-Romanticism",
      text: `Fusion of technology and romanticism. Nostalgia and futurism in digital art. "Simple Net Art Diagram" as an example. Reflection on the human-technology relationship.`
    },
    es: {
      title: "Techno-Romanticismo",
      text: `Fusión de tecnología y romanticismo. Nostalgia y futurismo en el arte digital. "Simple Net Art Diagram" como ejemplo. Reflexión sobre la relación humano-tecnología.`
    },
    fr: {
      title: "Techno-Romanticisme",
      text: `Fusion de la technologie et du romantisme. Nostalgie et futurisme dans l'art numérique. "Simple Net Art Diagram" comme exemple. Réflexion sur la relation homme-technologie.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "The Image is Generated",
      text: `Tools like DALL-E and Midjourney. Automated image creation. Accessibility and democratization of art. New opportunities and challenges.`
    },
    es: {
      title: "La Imagen es Generada",
      text: `Herramientas como DALL-E y Midjourney. Creación automatizada de imágenes. Accesibilidad y democratización del arte. Nuevas oportunidades y desafíos.`
    },
    fr: {
      title: "L'Image Est Générée",
      text: `Outils comme DALL-E et Midjourney. Création d'images automatisée. Accessibilité et démocratisation de l'art. Nouvelles opportunités et défis.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "AI Image Accessibility",
      text: `Impact on the value of the image. Democratization of artistic creation. New platforms and accessibility. Transformation of the creative process.`
    },
    es: {
      title: "Accesibilidad de Imagen AI",
      text: `Impacto en el valor de la imagen. Democratización de la creación artística. Nuevas plataformas y accesibilidad. Transformación del proceso creativo.`
    },
    fr: {
      title: "Accessibilité de l'Image AI",
      text: `Impact sur la valeur de l'image. Démocratisation de la création artistique. Nouvelles plateformes et accessibilité. Transformation du processus créatif.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Art Prism Paradox",
      text: `Image synthesis is not collage. Image synthesis is art. Collage is art. Reflection on definitions and categories. Image Synth Is Not Collage. Image Synth is Art. Collage is Art. Collage is Not a Banana Taped on a Wall. Image Synth is Not a Banana Taped on a Wall. A Banana Taped on a Wall is Art.`
    },
    es: {
      title: "Paradoja del Prisma del Arte",
      text: `La síntesis de imágenes no es collage. La síntesis de imágenes es arte. El collage es arte. Reflexión sobre definiciones y categorías. Image Synth No Es Collage. Image Synth es Arte. Collage es Arte. Collage no es un plátano pegado a la pared. Image Synth no es un plátano pegado a la pared. Un plátano pegado a la pared es arte.`
    },
    fr: {
      title: "Paradoxe du Prisme de l'Art",
      text: `La synthèse d'images n'est pas un collage. La synthèse d'images est de l'art. Le collage est de l'art. Réflexion sur les définitions et les catégories. Image Synth n'est pas un collage. Image Synth est de l'art. Le collage est de l'art. Le collage n'est pas un banane collée sur un mur. Image Synth n'est pas un banane collée sur un mur. Une banane collée sur un mur est de l'art.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "What is Art?",
      text: `Debate about the definition of art. Evolution of the concept of art. Art in the digital age. Challenges and opportunities.`
    },
    es: {
      title: "¿Qué es el Arte?",
      text: `Debate sobre la definición de arte. Evolución del concepto de arte. Arte en la era digital. Desafíos y oportunidades.`
    },
    fr: {
      title: "Qu'est-ce que l'Art?",
      text: `Débat sur la définition de l'art. Évolution du concept d'art. Art dans l'ère numérique. Défis et opportunités.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "AI Eating Software",
      text: `Artificial intelligence transforming creation. Automation of creative processes. Impact on the software industry. New dynamics in artistic production.`
    },
    es: {
      title: "IA Comiendo Software",
      text: `Inteligencia artificial transformando la creación. Automatización de procesos creativos. Impacto en la industria del software. Nuevas dinámicas en la producción artística.`
    },
    fr: {
      title: "IA Mange le Logiciel",
      text: `L'intelligence artificielle transforme la création. L'automatisation des processus créatifs. L'impact sur l'industrie du logiciel. Nouvelles dynamiques dans la production artistique.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Prompt is Eating Content",
      text: `The role of language in creation. Content generation through prompts. Human-AI collaboration in art. New forms of creative interaction.`
    },
    es: {
      title: "Prompt está Comiéndose el Contenido",
      text: `El rol del lenguaje en la creación. Generación de contenido a través de prompts. Colaboración humano-IA en el arte. Nuevas formas de interacción creativa.`
    },
    fr: {
      title: "Prompt Mange le Contenu",
      text: `Le rôle du langage dans la création. Génération de contenu via des prompts. Collaboration humain-IA dans l'art. Nouvelles formes d'interaction créative.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Content Blackhole Diagram",
      text: `Visual representation of digital content. Impact of information overload. Challenges in distribution and verification. Reflection on the future of content.`
    },
    es: {
      title: "Diagrama del Agujero Negro de Contenido",
      text: `Representación visual del contenido digital. Impacto de la sobrecarga de información. Desafíos en la distribución y verificación. Reflexión sobre el futuro del contenido.`
    },
    fr: {
      title: "Diagramme du Trou Noir de Contenu",
      text: `Représentation visuelle du contenu numérique. Impact de l'encombrement d'informations. Défis dans la distribution et la vérification. Réflexion sur l'avenir du contenu.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Culture Schematic",
      text: `Schematic of cultural evolution. Intersection of technology and culture. Influence of digitalization on culture. Future of culture in the digital age.`
    },
    es: {
      title: "Esquema de la Cultura",
      text: `Esquema de la evolución cultural. Intersección de tecnología y cultura. Influencia de la digitalización en la cultura. Futuro de la cultura en la era digital.`
    },
    fr: {
      title: "Schéma de la Culture",
      text: `Schéma de l'évolution culturelle. Intersection de la technologie et de la culture. Influence de la numérisation sur la culture. Futur de la culture dans l'ère numérique.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "The Value of the Artist",
      text: `Importance of intention and creativity. The artist's role in society. Emotional and symbolic value of art. Recognition and appreciation of artistic work.`
    },
    es: {
      title: "El Valor del Artista",
      text: `Importancia de la intención y creatividad. Rol del artista en la sociedad. Valor emocional y simbólico del arte. Reconocimiento y apreciación del trabajo artístico.`
    },
    fr: {
      title: "La Valeur de l'Artiste",
      text: `Importance de l'intention et de la créativité. Rôle de l'artiste dans la société. Valeur émotionnelle et symbolique de l'art. Reconnaissance et appréciation du travail artistique.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "The Art of the Future",
      text: `Innovation and technology in art. New forms of artistic expression. Impact of artificial intelligence. Future of creativity and collaboration.`
    },
    es: {
      title: "El Arte del Futuro",
      text: `Innovación y tecnología en el arte. Nuevas formas de expresión artística. Impacto de la inteligencia artificial. Futuro de la creatividad y la colaboración.`
    },
    fr: {
      title: "L'Art du Futur",
      text: `Innovation et technologie dans l'art. Nouvelles formes d'expression artistique. Impact de l'intelligence artificielle. Futur de la créativité et de la collaboration.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Supports of Value",
      text: `Network: Networks and connections in art. Authenticity: Verification and originality. Intentionality: Purpose and meaning of art. Dissemination: Reach and distribution of content. Virality: Impact and diffusion on social networks.`
    },
    es: {
      title: "Apoyos de Valor",
      text: `Network: Redes y conexiones en el arte. Autenticidad: Verificación y originalidad. Intencionalidad: Propósito y significado del arte. Diseminación: Alcance y distribución del contenido. Viralidad: Impacto y difusión en redes sociales.`
    },
    fr: {
      title: "Supports de Valeur",
      text: `Réseau : Réseaux et connexions dans l'art. Authentique : Vérification et originalité. Intentionalité : But et sens de l'art. Diffusion : Portée et distribution du contenu. Viralité : Impact et diffusion sur les réseaux sociaux.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  },
  {
    en: {
      title: "Thank You",
      text: `Thank you to Waseem Syed, Fundación Paiz, and ArtTec for their support and for making this talk possible.`
    },
    es: {
      title: "Gracias",
      text: `Gracias a Waseem Syed, Fundación Paiz y ArtTec por su apoyo y por hacer posible esta charla.`
    },
    fr: {
      title: "Merci",
      text: `Merci à Waseem Syed, Fundación Paiz et ArtTec pour leur soutien et pour rendre cette conférence possible.`
    },
    video: "01sFWJUjcOIvJiyAtwHaNYcRsd00d9VTZyHxobiR38Fe00"
  }
];

export default function TheValueAndFutureOfTheImagePage() {
  const { language } = useLanguage();
  const lang: 'en' | 'es' | 'fr' = language === 'es' ? 'es' : language === 'fr' ? 'fr' : 'en';

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">{titles[lang]}</h1>
        <LanguageSelector />
      </div>
      <div className="mb-8">
        <Image src={placeholderImage} alt={titles[lang]} width={1200} height={600} className="rounded-xl object-cover w-full h-64" />
      </div>
      <div className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {intro[lang]}
      </div>
      {/* Remove the global video here */}
      <div className="space-y-12">
        {slides.map((slide, idx) => (
          <section key={idx} className="mb-12">
            {slide.video && (
              <div className="sticky top-0 z-20 bg-black rounded-lg mb-4 max-h-[40vh] sm:max-h-[60vh] flex items-center justify-center">
                <MuxPlayer playbackId={slide.video} streamType="on-demand" style={{ width: '100%', height: '100%', maxHeight: '40vh' }} />
              </div>
            )}
            <div className="rounded-lg p-4 bg-white/80 dark:bg-black/40">
              <h2 className="text-2xl font-semibold mb-2">{slide[lang].title}</h2>
              <p className="text-lg whitespace-pre-line">{slide[lang].text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 