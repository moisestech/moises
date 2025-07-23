"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/common/LanguageSelector';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';

const intro = {
  en: `This talk explores the value and future of the image in art, technology, and society. From modernism to the age of AI, we examine how images shape culture, perception, and meaning in a rapidly changing world.`,
  es: `Esta charla explora el valor y el futuro de la imagen en el arte, la tecnología y la sociedad. Desde el modernismo hasta la era de la IA, examinamos cómo las imágenes moldean la cultura, la percepción y el significado en un mundo que cambia rápidamente.`
};

const placeholderImage = "https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628542/art/moisestech-website/talks/24_artec_moises-sanabria_valor-de-la-imagen_dfbhqb.webp";

const slides: Array<{
    en: { title: string; text: string };
    es: { title: string; text: string };
  }> = [
    {
      en: {
        title: "Hello",
        text: `I'm Moises Sanabria, glad to be here today. Thank you for your attention and for joining me. I'm a resident at Bakehouse Art Complex in Miami. Thanks to Fundación Paiz for their support. Thanks to everyone from ArtTec for coming and exploring these topics. I'm an interdisciplinary artist and creative technologist. This talk is experimental and theoretical, focused on speculating about the future. It's inspired by my experience and artistic process, and is a work in progress I'll explore for the rest of my life.`
      },
      es: {
        title: "Hola",
        text: `Soy Moises Sanabria, encantado de estar aquí hoy. Gracias por su atención y por acompañarme. Soy residente en Bakehouse Art Complex en Miami. Agradezco a Fundación Paiz por su apoyo. Gracias a todos de ArtTec por venir e indagar en estos temas. Soy un artista interdisciplinario y tecnólogo creativo. Esta charla es muy experimental y teórica, enfocada en especular sobre el futuro. Está inspirada en mi experiencia y proceso artístico, y es un trabajo en progreso que exploraré el resto de mi vida.`
      }
    },
    {
      en: {
        title: "Value and Future of the Image",
        text: `Let's explore the value of the image: its evolution over time, its importance in art and society, its transformation with artificial intelligence, and how distribution and verification work in the digital era.`
      },
      es: {
        title: "Valor y Futuro de la Imagen",
        text: `Vamos a explorar el valor de la imagen, su evolución a lo largo del tiempo, su importancia en el arte y la sociedad, su transformación con la inteligencia artificial, y cómo funciona la distribución y verificación en la era digital.`
      }
    },
    {
      en: {
        title: "Art is Observed",
        text: `The image directly impacts our senses and emotions. Our eyes are the windows to much of our visual content. The image reflects and shapes cultural values and beliefs. For the creator, creating has intrinsic and significant value. The appreciation of the image varies according to the viewer's experience. On the internet, the image spreads and acquires new meanings. Greater diffusion and accessibility on digital platforms expands its reach. More likes indicate more value; memes can surpass contemporary works. The image connects creator and viewer in a continuous dialogue, transcending cultural and technological barriers, framing our perceptions.`
      },
      es: {
        title: "El Arte Se Observa",
        text: `La imagen impacta directamente nuestros sentidos y emociones. Los ojos son las ventanas a gran parte del contenido visual. La imagen refleja y moldea los valores y creencias culturales. Para el creador, crear tiene un valor intrínseco y significativo. La apreciación de la imagen varía según la experiencia del espectador. En internet, la imagen se disemina y adquiere nuevos significados. Mayor difusión y accesibilidad en plataformas digitales amplía su alcance. Más likes indican más valor; los memes pueden superar obras contemporáneas. La imagen conecta creador y espectador en un diálogo continuo. Trasciende barreras culturales y tecnológicas, enmarcando nuestras percepciones.`
      }
    },
    {
      en: {
        title: "Modernism",
        text: `The value of art during modernism was slow and centralized, and the dissemination of content varied considerably. Movements like Impressionism, Expressionism, and Futurism reflected social and technological changes. With Pop Art, the union between general content and art began, using mass media like magazines and television, thus expanding the diffusion and cultural impact of art. Other types of images, such as photographs in newspapers and magazines, and television advertising, also played an important role in the dissemination of visual content and its value in society. Photography also had a great impact at this time, becoming a parallel medium to traditional painting and playing a crucial role in the spread of visual content.`
      },
      es: {
        title: "Modernismo",
        text: `El valor del arte durante el modernismo era lento y centralizado, y la diseminación del contenido variaba considerablemente. Movimientos como el Impresionismo, Expresionismo y Futurismo reflejaron los cambios sociales y tecnológicos. Con el Pop Art, comenzó la unión entre el mundo del contenido general y el arte, usando medios de comunicación masivos como revistas y televisión, ampliando así la difusión y el impacto cultural del arte. Además, otros tipos de imágenes, como fotografías en periódicos y revistas, y la publicidad en televisión, también jugaron un papel importante en la difusión del contenido visual y su valor en la sociedad. La fotografía también tuvo un gran impacto en este momento, convirtiéndose en un medio paralelo a la imagen tradicional con pintura y desempeñando un papel crucial en la difusión del contenido visual.`
      }
    },
    {
      en: {
        title: "Modernism Continued",
        text: `Modernism not only introduced a break with previous traditions, but also expanded the media and techniques available to artists. Each medium—from painting to video art—found ways to disseminate itself both in the artistic and commercial realms. These media influenced not only contemporary art but also commercial areas, showing the continuous relationship and flow between art and society.`
      },
      es: {
        title: "Modernismo Continuado",
        text: `El modernismo no solo introdujo una ruptura con las tradiciones anteriores, sino que también expandió los medios y técnicas disponibles para los artistas. Cada medio — desde la pintura hasta el video arte — encontró maneras de diseminarse tanto en el ámbito artístico como en el comercial. Estos medios no solo influenciaron el arte contemporáneo sino también áreas comerciales, mostrando la relación y el flujo continuo entre arte y sociedad.`
      }
    },
    {
      en: {
        title: "Value Perspectives",
        text: `The value of an image can be perceived from various perspectives. It includes aesthetic and technical value, focusing on the visual and technical quality of the work, and historical and cultural value, highlighting its relevance in the history and culture of a society. It also encompasses emotional and symbolic value, referring to the emotional connection and deep meaning of the image, and market and authenticity value, which determines its price and authenticity. Other important factors are social and political impact, innovation and originality, the creator's personal connection, individual appreciation, accessibility and dissemination, and the context and narrative behind the artwork.`
      },
      es: {
        title: "Valor Perspectivas",
        text: `El valor de una imagen se puede percibir desde diversas perspectivas. Incluye el valor estético y técnico, que se enfoca en la calidad visual y técnica de la obra, y el valor histórico y cultural, que destaca su relevancia en la historia y cultura de una sociedad. También abarca el valor emocional y simbólico, que se refiere a la conexión emocional y el significado profundo de la imagen, y el valor de mercado y autenticidad, que determina su precio en el mercado y su autenticidad. Otros factores importantes son el impacto social y político, la innovación y originalidad, la conexión personal del creador, la apreciación individual del espectador, la accesibilidad y difusión de la imagen, y el contexto y narrativa detrás de la obra artística.`
      }
    },
    {
      en: {
        title: "Readymade Art",
        text: `Readymade art, introduced by Marcel Duchamp, revolutionized the way art is perceived. By elevating everyday objects to the category of art, Duchamp challenged traditional norms with works like "Bicycle Wheel" in 1913. "Fountain" (Urinal) as an iconic readymade (1917) became a symbol of artistic provocation. This movement protested against the excessive importance of technique and transformed the perception of what can be considered art. By questioning and redefining the boundaries of art, readymade art laid the foundation for innovation in conceptual art and had a lasting impact on contemporary art.`
      },
      es: {
        title: "Readymade Art",
        text: `El readymade art, introducido por Marcel Duchamp, revolucionó la manera en que se percibe el arte. Elevando objetos cotidianos a la categoría de arte, Duchamp desafió las normas tradicionales con obras como "Bicycle Wheel" en 1913. "Fountain" (Urinal) como readymade icónico (1917): Símbolo de la provocación artística. Este movimiento protestó contra la importancia excesiva de la técnica y transformó la percepción de lo que puede ser considerado arte. Al cuestionar y redefinir los límites del arte, el readymade art sentó las bases para la innovación en el arte conceptual y tuvo un impacto duradero en el arte contemporáneo.`
      }
    },
    {
      en: {
        title: "Conceptual Art",
        text: `Conceptual art focuses on the primacy of the idea over form, revolutionizing the traditional understanding of art. Figures like Sol LeWitt were crucial in this movement, highlighting the dematerialization of the art object and art as a mental process. This approach questions established artistic norms, prioritizing language and writing as means to convey ideas. Conceptual art invites viewer interaction and active participation in interpreting the work. With its emphasis on documentation and instructions, it has significantly influenced contemporary art, offering a reevaluation of artistic value and a new perspective on what constitutes a work of art.`
      },
      es: {
        title: "Arte Conceptual",
        text: `El arte conceptual se centra en la primacía de la idea sobre la forma, revolucionando la comprensión tradicional del arte. Figuras como Sol LeWitt fueron cruciales en este movimiento, destacando la desmaterialización del objeto artístico y el arte como un proceso mental. Este enfoque cuestiona las normas artísticas establecidas, priorizando el lenguaje y la escritura como medios para transmitir ideas. El arte conceptual invita a la interacción del espectador y a la participación activa en la interpretación de la obra. Con su énfasis en la documentación y las instrucciones, ha influido significativamente en el arte contemporáneo, ofreciendo una reevaluación del valor artístico y una nueva perspectiva sobre lo que constituye una obra de arte.`
      }
    },
    {
      en: {
        title: "Conceptual Art Continued",
        text: `"One and Three Chairs" by Joseph Kosuth is an emblematic work of conceptual art that reflects on representation and reality. This piece challenges traditional definitions of art, prioritizing the idea over the physical object. In conceptual art, viewer interaction is crucial, as their active participation in interpreting the work is essential. The use of everyday objects elevates the ordinary to the conceptual, highlighting the importance of context and how it influences the perception of the work. Art becomes a language that uses signs and symbols to communicate ideas, and this approach has significantly influenced art education, rethinking methods and pedagogical approaches. The influence of conceptual art endures, impacting generations of artists and subsequent movements.`
      },
      es: {
        title: "Arte Conceptual Continuado",
        text: `"One and Three Chairs" de Joseph Kosuth es una obra emblemática del arte conceptual que reflexiona sobre la representación y la realidad. Esta pieza desafía las definiciones tradicionales del arte, priorizando la idea sobre el objeto físico. En el arte conceptual, la interacción del espectador es crucial, ya que su participación activa en la interpretación de la obra es esencial. El uso de objetos cotidianos eleva lo común a lo conceptual, destacando la importancia del contexto y cómo influye en la percepción de la obra. El arte se convierte en un lenguaje que emplea signos y símbolos para comunicar ideas, y este enfoque ha influido significativamente en la educación artística, replanteando métodos y enfoques pedagógicos. La influencia del arte conceptual perdura, impactando a generaciones de artistas y movimientos posteriores.`
      }
    },
    {
      en: {
        title: "Conceptualism Values the Idea",
        text: `Conceptualism values the idea over execution, highlighting the importance of the artist's intention. Works like "One and Three Chairs" by Joseph Kosuth exemplify this primacy of conceptualization. This perspective has deeply influenced my artistic practice, motivating me to focus on ideas and concepts. In the era of artificial intelligence, the relationship between art and technology allows for the materialization of innovative concepts, transforming the value of the image. The fusion of technology and art challenges traditional norms and changes our artistic perception, showing new ways to value and understand images in the digital context.`
      },
      es: {
        title: "Conceptualismo Valora La Idea",
        text: `El conceptualismo valora la idea sobre la ejecución, destacando la importancia de la intención del artista. Obras como "One and Three Chairs" de Joseph Kosuth ejemplifican esta primacía de la conceptualización. Esta perspectiva ha influido profundamente en mi práctica artística, motivándome a centrarme en ideas y conceptos. En la era de la inteligencia artificial, la relación entre arte y tecnología permite materializar conceptos innovadores, transformando el valor de la imagen. La fusión de tecnología y arte desafía las normas tradicionales y cambia nuestra percepción artística, mostrando nuevas formas de valorar y entender las imágenes en el contexto digital.`
      }
    },
    {
      en: {
        title: "Minkowski Space Time Diagram",
        text: `The Minkowski Space Time Diagram is a visual representation of the theory of space-time that shows the relationship between art and science. This intersection explores dimensions and perceptions, influencing concepts of time and space in art. The fusion of physics and creativity inspires new forms of artistic representation. Throughout history, images have evolved from classical paintings to scientific representations, and in the digital age, advanced technology transforms creative possibilities. As observers, we interpret and understand these complex images, reflecting the continuous change in visual creation. In the future, innovation in the representation of time and space will continue to expand the boundaries of what is possible in art and science.`
      },
      es: {
        title: "Minkowski Space Time Diagram",
        text: `El Minkowski Space Time Diagram es una representación visual de la teoría del espacio-tiempo que muestra la relación entre arte y ciencia. Esta intersección explora dimensiones y percepciones, influenciando conceptos de tiempo y espacio en el arte. La fusión de la física y la creatividad inspira nuevas formas de representación artística. A lo largo de la historia, las imágenes han evolucionado desde las pinturas clásicas hasta las representaciones científicas, y en la era digital, la tecnología avanzada transforma las posibilidades creativas. Como observadores, interpretamos y comprendemos estas imágenes complejas, reflejando el continuo cambio en la creación visual. En el futuro, la innovación en la representación del tiempo y el espacio continuará ampliando los límites de lo que es posible en el arte y la ciencia.`
      }
    },
    {
      en: {
        title: "Generative Age",
        text: `The generative age marks a turning point in artistic creation, influenced by pioneers like Arram Sabeti. Creation through algorithms and code has revolutionized digital art production, enabling new forms of artistic expression and expanding creative possibilities. This change reflects an evolution of the creative process, where human-machine interaction facilitates collaboration between artists and technology. The accessibility and democratization of digital tools allow more creators to explore their potential, impacting the perception of art and redefining authorship and originality. The art industry has also changed, with new market and distribution dynamics, and a focus on the unlimited exploration of creative potential in digital art generation.`
      },
      es: {
        title: "Era Generativa",
        text: `La era generativa marca un punto de inflexión en la creación artística, influenciada por pioneros como Arram Sabeti. La creación mediante algoritmos y código ha revolucionado la producción de arte digital, permitiendo nuevas formas de expresión artística y ampliando las posibilidades creativas. Este cambio refleja una evolución del proceso creativo, donde la interacción humano-máquina facilita la colaboración entre artistas y tecnología. La accesibilidad y democratización de herramientas digitales permiten a más creadores explorar su potencial, impactando la percepción del arte y redefiniendo la autoría y la originalidad. La industria del arte también ha cambiado, con nuevas dinámicas de mercado y distribución, y un enfoque en la exploración ilimitada del potencial creativo en la generación de arte digital.`
      }
    },
    {
      en: {
        title: "Post-Internet",
        text: `Post-internet art represents a significant evolution in the digital age, marked by the influence of Web 2.0 and social networks. These platforms have amplified artistic creation and dissemination, allowing for global interaction and participation. The emergence and proliferation of memes have redefined creativity, becoming an essential part of viral visual culture. In the information age, art reflects and responds to the constant flow of data, and access to digital tools has democratized artistic creation. This change has modified the perception of art's value, with virality and social impact as new indicators. New forms of exposure, such as virtual galleries, and the fusion of digital and physical, have significantly impacted creative industries, transforming the art economy and culture.`
      },
      es: {
        title: "Post-Internet",
        text: `El arte post-internet representa una evolución significativa en la era digital, marcada por la influencia de Web 2.0 y las redes sociales. Estas plataformas han amplificado la creación y difusión artística, permitiendo la interacción y participación global. El surgimiento y proliferación de memes han redefinido la creatividad, convirtiéndose en una parte esencial de la cultura visual viral. En la era de la información, el arte refleja y responde al flujo constante de datos, y la accesibilidad a herramientas digitales ha democratizado la creación artística. Este cambio ha modificado la percepción del valor del arte, con la viralidad y el impacto social como nuevos indicadores. Las nuevas formas de exposición, como las galerías virtuales, y la fusión de lo digital y lo físico, han impactado significativamente las industrias creativas, transformando la economía del arte y la cultura.`
      }
    },
    {
      en: {
        title: "Post-Internet Continued",
        text: `The post-internet era has transformed digital art, exemplified by works like "Simple Net Art Diagram" that demonstrate global connectivity and real-time interaction. Digitization has introduced new platforms for creation, facilitating tools and virtual spaces for artists. This transformation has had a profound impact on methods, access, and distribution of art, redefining the digital art economy and presenting new models of monetization and distribution. The culture of the ephemeral and the constant evolution of digital art have changed the perception of authorship, promoting collaborations and collective works. In addition, digital archives and art preservation present both challenges and opportunities. The exploration of virtual identities and the use of avatars in digital art reflect ongoing innovation in this field, underscoring the importance of global connectivity and interactivity.`
      },
      es: {
        title: "Post-Internet Continuado",
        text: `La era post-internet ha transformado el arte digital, ejemplificado por obras como "Simple Net Art Diagram" que demuestran la conectividad global y la interacción en tiempo real. La digitalización ha introducido nuevas plataformas para la creación, facilitando herramientas y espacios virtuales para los artistas. Esta transformación ha tenido un impacto profundo en los métodos, el acceso y la distribución del arte, redefiniendo la economía del arte digital y presentando nuevos modelos de monetización y distribución. La cultura de lo efímero y la constante evolución del arte digital han cambiado la percepción de la autoría, promoviendo colaboraciones y obras colectivas. Además, los archivos digitales y la preservación del arte presentan tanto desafíos como oportunidades. La exploración de identidades virtuales y el uso de avatares en el arte digital reflejan la continua innovación en este campo, subrayando la importancia de la conectividad y la interactividad global.`
      }
    },
    {
      en: {
        title: "Techno-Romanticism",
        text: `Fusion of technology and romanticism. Nostalgia and futurism in digital art. "Simple Net Art Diagram" as an example. Reflection on the human-technology relationship.`
      },
      es: {
        title: "Techno-Romanticismo",
        text: `Fusión de tecnología y romanticismo. Nostalgia y futurismo en el arte digital. "Simple Net Art Diagram" como ejemplo. Reflexión sobre la relación humano-tecnología.`
      }
    },
    {
      en: {
        title: "The Image is Generated",
        text: `Tools like DALL-E and Midjourney. Automated image creation. Accessibility and democratization of art. New opportunities and challenges.`
      },
      es: {
        title: "La Imagen es Generada",
        text: `Herramientas como DALL-E y Midjourney. Creación automatizada de imágenes. Accesibilidad y democratización del arte. Nuevas oportunidades y desafíos.`
      }
    },
    {
      en: {
        title: "AI Image Accessibility",
        text: `Impact on the value of the image. Democratization of artistic creation. New platforms and accessibility. Transformation of the creative process.`
      },
      es: {
        title: "Accesibilidad de Imagen AI",
        text: `Impacto en el valor de la imagen. Democratización de la creación artística. Nuevas plataformas y accesibilidad. Transformación del proceso creativo.`
      }
    },
    {
      en: {
        title: "Art Prism Paradox",
        text: `Image synthesis is not collage. Image synthesis is art. Collage is art. Reflection on definitions and categories. Image Synth Is Not Collage. Image Synth is Art. Collage is Art. Collage is Not a Banana Taped on a Wall. Image Synth is Not a Banana Taped on a Wall. A Banana Taped on a Wall is Art.`
      },
      es: {
        title: "Paradoja del Prisma del Arte",
        text: `La síntesis de imágenes no es collage. La síntesis de imágenes es arte. El collage es arte. Reflexión sobre definiciones y categorías. Image Synth No Es Collage. Image Synth es Arte. Collage es Arte. Collage no es un plátano pegado a la pared. Image Synth no es un plátano pegado a la pared. Un plátano pegado a la pared es arte.`
      }
    },
    {
      en: {
        title: "What is Art?",
        text: `Debate about the definition of art. Evolution of the concept of art. Art in the digital age. Challenges and opportunities.`
      },
      es: {
        title: "¿Qué es el Arte?",
        text: `Debate sobre la definición de arte. Evolución del concepto de arte. Arte en la era digital. Desafíos y oportunidades.`
      }
    },
    {
      en: {
        title: "AI Eating Software",
        text: `Artificial intelligence transforming creation. Automation of creative processes. Impact on the software industry. New dynamics in artistic production.`
      },
      es: {
        title: "IA Comiendo Software",
        text: `Inteligencia artificial transformando la creación. Automatización de procesos creativos. Impacto en la industria del software. Nuevas dinámicas en la producción artística.`
      }
    },
    {
      en: {
        title: "Prompt is Eating Content",
        text: `The role of language in creation. Content generation through prompts. Human-AI collaboration in art. New forms of creative interaction.`
      },
      es: {
        title: "Prompt está Comiéndose el Contenido",
        text: `El rol del lenguaje en la creación. Generación de contenido a través de prompts. Colaboración humano-IA en el arte. Nuevas formas de interacción creativa.`
      }
    },
    {
      en: {
        title: "Content Blackhole Diagram",
        text: `Visual representation of digital content. Impact of information overload. Challenges in distribution and verification. Reflection on the future of content.`
      },
      es: {
        title: "Diagrama del Agujero Negro de Contenido",
        text: `Representación visual del contenido digital. Impacto de la sobrecarga de información. Desafíos en la distribución y verificación. Reflexión sobre el futuro del contenido.`
      }
    },
    {
      en: {
        title: "Culture Schematic",
        text: `Schematic of cultural evolution. Intersection of technology and culture. Influence of digitalization on culture. Future of culture in the digital age.`
      },
      es: {
        title: "Esquema de la Cultura",
        text: `Esquema de la evolución cultural. Intersección de tecnología y cultura. Influencia de la digitalización en la cultura. Futuro de la cultura en la era digital.`
      }
    },
    {
      en: {
        title: "The Value of the Artist",
        text: `Importance of intention and creativity. The artist's role in society. Emotional and symbolic value of art. Recognition and appreciation of artistic work.`
      },
      es: {
        title: "El Valor del Artista",
        text: `Importancia de la intención y creatividad. Rol del artista en la sociedad. Valor emocional y simbólico del arte. Reconocimiento y apreciación del trabajo artístico.`
      }
    },
    {
      en: {
        title: "The Art of the Future",
        text: `Innovation and technology in art. New forms of artistic expression. Impact of artificial intelligence. Future of creativity and collaboration.`
      },
      es: {
        title: "El Arte del Futuro",
        text: `Innovación y tecnología en el arte. Nuevas formas de expresión artística. Impacto de la inteligencia artificial. Futuro de la creatividad y la colaboración.`
      }
    },
    {
      en: {
        title: "Supports of Value",
        text: `Network: Networks and connections in art. Authenticity: Verification and originality. Intentionality: Purpose and meaning of art. Dissemination: Reach and distribution of content. Virality: Impact and diffusion on social networks.`
      },
      es: {
        title: "Apoyos de Valor",
        text: `Network: Redes y conexiones en el arte. Autenticidad: Verificación y originalidad. Intencionalidad: Propósito y significado del arte. Diseminación: Alcance y distribución del contenido. Viralidad: Impacto y difusión en redes sociales.`
      }
    },
    {
      en: {
        title: "Thank You",
        text: `Thank you to Waseem Syed, Fundación Paiz, and ArtTec for their support and for making this talk possible.`
      },
      es: {
        title: "Gracias",
        text: `Gracias a Waseem Syed, Fundación Paiz y ArtTec por su apoyo y por hacer posible esta charla.`
      }
    }
  ];

export default function TheValueAndFutureOfTheImagePage() {
  const { language } = useLanguage();
  const lang: 'en' | 'es' = language === 'es' ? 'es' : 'en';

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">The Value and Future of the Image</h1>
        <LanguageSelector />
      </div>
      <div className="mb-8">
        <Image src={placeholderImage} alt="Value of the Image" width={1200} height={600} className="rounded-xl object-cover w-full h-64" />
      </div>
      <div className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {intro[lang]}
      </div>
      <div className="mb-8">
        <MuxPlayer playbackId="placeholder-playback-id" streamType="on-demand" />
      </div>
      <div className="space-y-8">
        {slides.map((slide, idx) => (
          <div key={idx} className="rounded-lg p-4 bg-white/80 dark:bg-black/40">
            <h2 className="text-2xl font-semibold mb-2">{slide[lang].title}</h2>
            <p className="text-lg whitespace-pre-line">{slide[lang].text}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 