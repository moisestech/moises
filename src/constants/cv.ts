import { InteractiveContent } from './research';

export const cvData = {
  name: "Moises Sanabria",
  title: "Artist CV",
  contact: {
    website: "https://www.moises.tech",
    email: "m@moises.tech",
    phone: "+9545884680",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/moisesdsanabria/" }
    ]
  },
  education: [
    {
      year: "2020",
      institution: "The Knight Foundation Art + Research Center (A+RC) program ICA",
      location: "Miami, US"
    },
    {
      year: "2020",
      institution: "RunwayML - Deep Dive Course by Derrick Shultz",
      location: "Online Course"
    },
    {
      year: "2020",
      institution: "Stylegan2 - Deep Dive Course by Derrick Shultz",
      location: "Online Course"
    },
    {
      year: "2018",
      institution: "The Neural Aesthetic by Artist and Professor Gene Kogan, School of Machines",
      location: "Berlin, Germany"
    },
    {
      year: "2013",
      institution: "School for Poetic Computation",
      location: "Fall/Winter"
    },
    {
      year: "2011 – 2015",
      institution: "The Cooper Union for the Advancement of Science and Art, School of Art",
      location: "Bachelor in Fine Arts"
    },
    {
      year: "2009 – 2011",
      institution: "New World School of Art",
      location: "Miami, FL, School of Art"
    }
  ],
  experience: [
    {
      role: "Remote Production Assistant",
      employer: "Wang Shui",
      period: "April 2021 – April 2022",
      details: "Hammerman Museum 2021 & Whitney Museum Biennial 2022. Creation of datasets, GAN training, image generation, interpolation videos, TouchDesigner features."
    },
    {
      role: "Remote Production Assistant",
      employer: "Jared Madere",
      period: "Oct 16, 2015–Jan 3, 2016",
      details: "Whitney Museum of American Art, responsible for the electronic component of Jared's installation, creating custom videos that were magnified and played through waterproof LED strips intertwined throughout the installation."
    }
  ],
  publications: [
    {
      year: "2024",
      title: "Oolite Media Art Salon series",
      details: "Curated by Kelani Nicole, Miami, FL, USA",
      link: "https://drive.google.com/file/d/16AJTphGcx4crHOeLI6PH2Yr9ywbX5gUh/view?usp=drive_link",
      interactiveContent: [
        {
          type: "link",
          text: "Oolite Media Art Salon series",
          content: {
            text: "A curated dialogue series focusing on contemporary media art practices and digital culture",
            link: {
              url: "https://drive.google.com/file/d/16AJTphGcx4crHOeLI6PH2Yr9ywbX5gUh/view?usp=drive_link",
              label: "View Media Art Salon documentation"
            }
          }
        },
        {
          type: "link",
          text: "Kelani Nicole",
          content: {
            text: "Curator and founder of TRANSFER Gallery, specializing in computer-based practices",
            link: {
              url: "https://www.transfergallery.com/about",
              label: "Learn more about Kelani Nicole"
            }
          }
        }
      ]
    },
    {
      year: "2021",
      title: "Data Dating (Love, Technology, Desire)",
      details: "Curated by Valentina Peri",
      link: "https://intellectdiscover.com/content/books/9781789384956",
      interactiveContent: [
        {
          type: "link",
          text: "Data Dating",
          content: {
            text: "An exhibition and publication exploring the impact of technology on love and intimacy in the digital age",
            link: {
              url: "https://www.datadating.online",
              label: "Visit the Data Dating exhibition website"
            }
          }
        },
        {
          type: "link",
          text: "Valentina Peri",
          content: {
            text: "Independent curator focused on the intersection of art, technology, and society",
            link: {
              url: "https://intellectdiscover.com/content/books/9781789384956",
              label: "View publication"
            }
          }
        }
      ]
    }
  ],
  grants: [
    {
      year: "2024",
      title: "Miami Grant Program"
    },
    {
      year: "2012",
      title: "Cooper Union Free Tuition Grant"
    },
    {
      year: "2011",
      title: "CADIVI Venezuela Federal Semester Grant"
    }
  ],
  exhibitions: {
    collective: [
      { 
        year: "2025", 
        title: "Net Art Gala", 
        location: "New York City, NY, USA",
        url: "https://netartgala.com",
        interactiveContent: [{
          type: "link",
          text: "Net Art Gala",
          content: {
            text: "A celebration of internet art and digital culture",
            link: {
              url: "https://netartgala.com",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { 
        year: "2025", 
        title: "Technofetishism", 
        location: "MOMus, Greece",
        url: "https://www.momus.gr/en/exhibitions/tehnofetihismos-whip-it-shape",
        interactiveContent: [{
          type: "link",
          text: "Technofetishism",
          content: {
            text: "An exploration of the relationship between humans and technology, examining how digital devices have evolved beyond tools to become objects of desire",
            link: {
              url: "https://www.momus.gr/en/exhibitions/tehnofetihismos-whip-it-shape",
              label: "View exhibition details"
            }
          }
        }]
      },
      { 
        year: "2024", 
        title: "Chroma Art Film Festival", 
        location: "Interactive Installation at SuperBlue, Miami, FL, USA",
        url: "https://vimeo.com/1009954393",
        interactiveContent: [{
          type: "link",
          text: "Chroma Art Film Festival",
          content: {
            text: "A festival celebrating innovative digital and interactive art installations",
            link: {
              url: "https://vimeo.com/1009954393",
              label: "Watch installation documentation"
            }
          }
        }]
      },
      { 
        year: "2024", 
        title: "Satellite Art Fair", 
        location: "exhibition during Art Week, Miami, FL, USA" 
      },
      { 
        year: "2024", 
        title: "CONTINUUM", 
        location: "Exhibition at MUNAG, Guatemala",
        url: "https://fundacionpaiz.org.gt/continuum-una-exposicion-sobre-futuros-y-tradiciones-mutantes/",
        interactiveContent: [{
          type: "link",
          text: "CONTINUUM",
          content: {
            text: "An exhibition exploring futures and mutating traditions in contemporary art",
            link: {
              url: "https://fundacionpaiz.org.gt/continuum-una-exposicion-sobre-futuros-y-tradiciones-mutantes/",
              label: "Learn more about the exhibition"
            }
          }
        }]
      },
      { 
        year: "2024", 
        title: "Doom Scrolling Marathon", 
        location: "Aparador, CDMX, Mexico",
        url: "https://www.instagram.com/p/DEA9GIrJxao/",
        interactiveContent: [{
          type: "link",
          text: "Doom Scrolling Marathon",
          content: {
            text: "A durational performance exploring digital distraction and information consumption",
            link: {
              url: "https://www.instagram.com/p/DEA9GIrJxao/",
              label: "View documentation on Instagram"
            }
          }
        }]
      },
      { 
        year: "2024", 
        title: "Notions of Home", 
        location: "exhibited at ICA, Miami, FL, USA",
        url: "https://spotlight.tezos.com/art-on-tezos-2024-miami-art-week/",
        interactiveContent: [{
          type: "link",
          text: "Notions of Home",
          content: {
            text: "A collaborative exhibition exploring concepts of home in the digital age",
            link: {
              url: "https://spotlight.tezos.com/art-on-tezos-2024-miami-art-week/",
              label: "View exhibition documentation"
            }
          }
        }]
      },
      { 
        year: "2024", 
        title: "Doom Scrolling Treadmill", 
        location: "Performance in Flux, Miami Art Society, Miami, FL, USA" 
      },
      { 
        year: "2023", 
        title: "Breadbytes", 
        location: "curated by Shawn Clybor at Bakehouse Art Complex, Miami, FL, USA",
        url: "https://www.bacfl.org/exhibitions/breadbytes-artmaking-for-the-next-generation",
        interactiveContent: [{
          type: "link",
          text: "Breadbytes",
          content: {
            text: "An exhibition presenting four site-specific installations that integrate art with technology to consider our future",
            link: {
              url: "https://www.bacfl.org/exhibitions/breadbytes-artmaking-for-the-next-generation",
              label: "Visit exhibition page"
            }
          }
        }]
      },
      { 
        year: "2023", 
        title: "Instagram Takeover", 
        location: "for the Kunsthalle-giessen Museum",
        url: "https://www.instagram.com/p/Cll0JsJoIFu/?img_index=1",
        interactiveContent: [{
          type: "link",
          text: "Instagram Takeover",
          content: {
            text: "A digital intervention exploring the museum's online presence",
            link: {
              url: "https://www.instagram.com/p/Cll0JsJoIFu/?img_index=1",
              label: "View on Instagram"
            }
          }
        }]
      },
      { 
        year: "2023", 
        title: "AI Internet Yami-Ichi", 
        location: "HODLER Gallery, Miami, FL, USA",
        url: "https://drive.google.com/file/d/1vly3Vf0ENue9nbRdqipBSf9OeyafK6zJ/view?usp=share_link",
        interactiveContent: [{
          type: "link",
          text: "AI Internet Yami-Ichi",
          content: {
            text: "A participatory market exploring the intersection of AI and internet culture",
            link: {
              url: "https://drive.google.com/file/d/1vly3Vf0ENue9nbRdqipBSf9OeyafK6zJ/view?usp=share_link",
              label: "View documentation"
            }
          }
        }]
      },
      { 
        year: "2023", 
        title: "Chroma Art Film Festival", 
        location: "Interactive Installation at SuperBlue in Miami, FL, USA" 
      },
      { 
        year: "2022", 
        title: "Data Dating Desire", 
        location: "Mo.Ca, Brescia, Italy",
        url: "https://vimeo.com/802681199",
        interactiveContent: [{
          type: "link",
          text: "Data Dating Desire",
          content: {
            text: "An exhibition exploring the intersection of technology, love, and desire",
            link: {
              url: "https://vimeo.com/802681199",
              label: "Watch exhibition documentation"
            }
          }
        }]
      },
      { 
        year: "2022", 
        title: "Techno Romance, Data Dating Desire", 
        location: "Le Commun, Electron Festival, Geneva, Italy",
        url: "https://www.datadating.online/",
        interactiveContent: [{
          type: "link",
          text: "Techno Romance",
          content: {
            text: "Part of the Data Dating exhibition series exploring digital intimacy",
            link: {
              url: "https://www.datadating.online/",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { 
        year: "2022", 
        title: "SWIPE RIGHT! Data Dating Desire", 
        location: "iMAL, Brussels",
        url: "https://www.datadating.online/",
        interactiveContent: [{
          type: "link",
          text: "SWIPE RIGHT!",
          content: {
            text: "An exhibition examining the impact of dating apps on contemporary relationships",
            link: {
              url: "https://www.datadating.online/",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { 
        year: "2020", 
        title: "Data Dating", 
        location: "Watermans, London, UK",
        url: "https://www.datadating.online/",
        interactiveContent: [{
          type: "link",
          text: "Data Dating",
          content: {
            text: "An exhibition exploring digital intimacy and modern relationships",
            link: {
              url: "https://www.datadating.online/",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { year: "2020", title: "Digital Gravity", location: "at Mana Contemporary, Miami, USA" },
      { year: "2019", title: "Sky High Tech", location: "San Valenteens, Bikini Wax, CDMX, Mexico" },
      { 
        year: "2019", 
        title: "Data Dating", 
        location: "Zkm, Karlsruhe",
        url: "https://www.datadating.online/",
        interactiveContent: [{
          type: "link",
          text: "Data Dating",
          content: {
            text: "Exhibition exploring the impact of technology on love and relationships",
            link: {
              url: "https://www.datadating.online/",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { 
        year: "2018", 
        title: "Data Dating", 
        location: "Galerie Charlot, London, United Kingdom",
        url: "https://www.datadating.online/",
        interactiveContent: [{
          type: "link",
          text: "Data Dating",
          content: {
            text: "London iteration of the Data Dating exhibition series",
            link: {
              url: "https://www.datadating.online/",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { 
        year: "2018", 
        title: "Data Dating", 
        location: "Galerie Charlot, Tel Aviv",
        url: "https://www.datadating.online/",
        interactiveContent: [{
          type: "link",
          text: "Data Dating",
          content: {
            text: "Tel Aviv iteration of the Data Dating exhibition series",
            link: {
              url: "https://www.datadating.online/",
              label: "Visit exhibition website"
            }
          }
        }]
      },
      { 
        year: "2018", 
        title: "Terms and Conditions May Apply", 
        location: "Annka Kultys Gallery, London, United Kingdom",
        url: "https://www.annkakultys.com/exhibitions/terms-and-conditions-may-apply/",
        interactiveContent: [{
          type: "link",
          text: "Terms and Conditions May Apply",
          content: {
            text: "Exhibition exploring the implications of digital agreements and privacy policies",
            link: {
              url: "https://www.annkakultys.com/exhibitions/terms-and-conditions-may-apply/",
              label: "View exhibition details"
            }
          }
        }]
      },
      { 
        year: "2016", 
        title: "Whisper to me in HTML", 
        location: "Prelim Projects, London, United Kingdom",
        url: "http://thisistomorrow.info/articles/prelim-projects-01-whisper-to-me-in-html",
        interactiveContent: [{
          type: "link",
          text: "Whisper to me in HTML",
          content: {
            text: "Exhibition exploring the language of code as intimate communication",
            link: {
              url: "http://thisistomorrow.info/articles/prelim-projects-01-whisper-to-me-in-html",
              label: "Read exhibition review"
            }
          }
        }]
      },
      { year: "2015", title: "Gucci Vuitton", location: "ICA Miami, Miami, FL, USA" },
      { year: "2015", title: "F* Real Life", location: "Cooper Union, New York City, New York" },
      { 
        year: "2013", 
        title: "In Real Life", 
        location: "Gucci Vuitton, Miami, FL, USA",
        url: "https://miamirail.org/reviews/art404-irl-in-real-life/",
        interactiveContent: [{
          type: "link",
          text: "In Real Life",
          content: {
            text: "Exhibition exploring the intersection of digital and physical reality",
            link: {
              url: "https://miamirail.org/reviews/art404-irl-in-real-life/",
              label: "Read exhibition review"
            }
          }
        }]
      },
      { year: "2013", title: "School for Poetic Computation The First Class", location: "Eyebeam, New York City, New York, USA" },
      { 
        year: "2012", 
        title: "In/Compatible", 
        location: "Transmediale 2k+12, Hause Der Kulturen Der Welt, Berlin, Germany", 
        url: "https://archive.transmediale.de/content/5-million-dollars-1-terabyte", 
        interactiveContent: [{
          type: "link",
          text: "In/Compatible",
          content: {
            text: "Transmediale festival exploring digital culture and technological developments",
            link: {
              url: "https://archive.transmediale.de/content/5-million-dollars-1-terabyte",
              label: "View archive documentation"
            }
          }
        }]
      }
    ],
    screening: [
      { 
        year: "2024", 
        title: "Low Resolution", 
        location: "curated by Kelani Nichole, Postmasters Gallery, New York, New York, USA",
        url: "https://www.instagram.com/transfergallery/p/DBCSRYHRQz1/?img_index=2",
        interactiveContent: [{
          type: "link",
          text: "Low Resolution",
          content: {
            text: "A screening program exploring digital aesthetics and compression artifacts",
            link: {
              url: "https://www.instagram.com/transfergallery/p/DBCSRYHRQz1/?img_index=2",
              label: "View on Instagram"
            }
          }
        }]
      }
    ],
    online: [
      { 
        year: "2022", 
        title: "Maquinaturalis 2", 
        location: "Metaverse Exhibition, toplap.MX" 
      },
      { 
        year: "2021", 
        title: "Maquinaturalis", 
        location: "Metaverse Exhibition, toplap.MX",
        url: "https://www.maquinaturalis.art/",
        interactiveContent: [{
          type: "link",
          text: "Maquinaturalis",
          content: {
            text: "A virtual exhibition exploring the intersection of nature and technology",
            link: {
              url: "https://www.maquinaturalis.art/",
              label: "Visit virtual exhibition"
            }
          }
        }]
      },
      { year: "2014", title: "Gallery 404", location: "Online" }
    ]
  },
  talks: [
    { 
      year: "2023", 
      title: "AI and the Arts: A Masterclass", 
      location: "Miami, FL, USA",
      url: "https://oolitearts.org/event/ai-and-the-arts-a-masterclass/",
      interactiveContent: [{
        type: "link",
        text: "AI and the Arts: A Masterclass",
        content: {
          text: "An intensive workshop exploring artificial intelligence in artistic practice",
          link: {
            url: "https://oolitearts.org/event/ai-and-the-arts-a-masterclass/",
            label: "View event details"
          }
        }
      }]
    },
    { 
      year: "2023", 
      title: "AI Images, Class 21: Artist Talk with Moises Sanabria and Erik Salvaggio", 
      location: "Remote",
      url: "https://www.youtube.com/watch?v=DH273DuESzM&ab_channel=ErykSalvaggio",
      interactiveContent: [{
        type: "link",
        text: "AI Images, Class 21",
        content: {
          text: "A discussion on contemporary AI art practices and tools",
          link: {
            url: "https://www.youtube.com/watch?v=DH273DuESzM&ab_channel=ErykSalvaggio",
            label: "Watch on YouTube"
          }
        }
      }]
    },
    { 
      year: "2023", 
      title: "Text to Video: Creating Experimental Art with Generative AI", 
      location: "University of Columbia, NYC, USA",
      url: "https://www.tc.columbia.edu/events/info/text-to-video-creating-experimental-art-with-generative-ai-11373138/",
      interactiveContent: [{
        type: "link",
        text: "Text to Video",
        content: {
          text: "A workshop on creating experimental video art using text-to-video AI systems",
          link: {
            url: "https://www.tc.columbia.edu/events/info/text-to-video-creating-experimental-art-with-generative-ai-11373138/",
            label: "View event details"
          }
        }
      }]
    },
    { 
      year: "2022", 
      title: "AI Roundtable", 
      location: "Refraction Summit co-hosted with Water + Music, Miami, FL, USA",
      url: "https://www.refractionfestival.com/editorial/rewind-refraction-x-miami-art-week",
      interactiveContent: [{
        type: "link",
        text: "AI Roundtable",
        content: {
          text: "A panel discussion on artificial intelligence in creative industries",
          link: {
            url: "https://www.refractionfestival.com/editorial/rewind-refraction-x-miami-art-week",
            label: "View event details"
          }
        }
      }]
    },
    { 
      year: "2022", 
      title: "History of AI Art", 
      location: "University of Florida, Miami, FL, USA",
      url: "https://youtu.be/xtFp9RBSc6M",
      interactiveContent: [{
        type: "link",
        text: "History of AI Art",
        content: {
          text: "A lecture on the evolution of artificial intelligence in art making",
          link: {
            url: "https://youtu.be/xtFp9RBSc6M",
            label: "Watch on YouTube"
          }
        }
      }]
    },
    { 
      year: "2021", 
      title: "Taller - Reflexiones a través de las máquinas", 
      location: "Centro de Cultura Digital, CDMX, Remote",
      url: "https://centroculturadigital.mx/actividad/Taller-Reflexiones-a-traves-de-las-maquinas-eIj_zYydI",
      interactiveContent: [{
        type: "link",
        text: "Taller - Reflexiones a través de las máquinas",
        content: {
          text: "A workshop exploring human-machine reflection and artistic creation",
          link: {
            url: "https://centroculturadigital.mx/actividad/Taller-Reflexiones-a-traves-de-las-maquinas-eIj_zYydI",
            label: "View workshop details"
          }
        }
      }]
    },
    { 
      year: "2021", 
      title: "Meetup: Máquinas que aprenden", 
      location: "Centro de Cultura Digital, CDMX, Remote",
      url: "https://centroculturadigital.mx/actividad/Meet-up-Maquinas-que-aprenden-NTFz41riB",
      interactiveContent: [{
        type: "link",
        text: "Meetup: Máquinas que aprenden",
        content: {
          text: "A discussion on machine learning techniques and applications in art",
          link: {
            url: "https://centroculturadigital.mx/actividad/Meet-up-Maquinas-que-aprenden-NTFz41riB",
            label: "View event details"
          }
        }
      }]
    },
    { 
      year: "2021", 
      title: "Reflections with machines", 
      location: "School of Machines, Berlin, Remote",
      url: "https://www.schoolofma.org/reflections-with-machines",
      interactiveContent: [{
        type: "link",
        text: "Reflections with machines",
        content: {
          text: "A workshop exploring human-machine collaboration and reflection",
          link: {
            url: "https://www.schoolofma.org/reflections-with-machines",
            label: "View workshop details"
          }
        }
      }]
    },
    { 
      year: "2021", 
      title: "Reflexiones a través de las máquinas", 
      location: "School of Machines, Berlin, Remote",
      url: "https://www.schoolofma.org/reflexiones-a-traves-de-las-maquinas",
      interactiveContent: [{
        type: "link",
        text: "Reflexiones a través de las máquinas",
        content: {
          text: "A Spanish-language workshop on machine-assisted reflection and art making",
          link: {
            url: "https://www.schoolofma.org/reflexiones-a-traves-de-las-maquinas",
            label: "View workshop details"
          }
        }
      }]
    }
  ],
  awards: [
    { 
      title: "Webby Award", 
      category: "Social Weird", 
      project: "Sad Tweets",
      url: "https://winners.webbyawards.com/2015/social/social-content-series-campaigns/weird/158993/sad-tweet",
      interactiveContent: [{
        type: "link",
        text: "Webby Award — Social Weird — Sad Tweets",
        content: {
          text: "Recognized for excellence in social media content",
          link: {
            url: "https://winners.webbyawards.com/2015/social/social-content-series-campaigns/weird/158993/sad-tweet",
            label: "View award details"
          }
        }
      }]
    }
  ],
  press: [
    {
      year: "2024",
      items: [
        { 
          project: "The Price of Existence & Smart Shoppers", 
          publications: [
            { 
              name: "eP Investiga", 
              title: "Continuum, una mirada a los avances en la expresión artística",
              url: "https://epinvestiga.com/dominical/continuum-una-mirada-a-los-avances-en-la-expresion-artistica/"
            }
          ]
        }
      ]
    },
    {
      year: "2016",
      items: [
        { 
          project: "Call Trump", 
          publication: "Complex", 
          title: "This Website Let's You Call Donald Trump",
          url: "https://www.complex.com/pop-culture/a/angel-diaz/call-trump-website-bill-gates-close-up-internet",
          interactiveContent: [{
            type: "link",
            text: "This Website Let's You Call Donald Trump",
            content: {
              text: "A digital art project allowing people to call Donald Trump",
              link: {
                url: "https://www.complex.com/pop-culture/a/angel-diaz/call-trump-website-bill-gates-close-up-internet",
                label: "Read article on Complex"
              }
            }
          }]
        },
        { 
          project: "Macbook Selfie Stick", 
          publications: [
            { 
              name: "The Guardian", 
              title: "The MacBook Selfie Stick is the art project Apple lovers deserve",
              url: "http://www.theguardian.com/technology/2016/feb/26/macbook-selfie-stick-apple"
            },
            { 
              name: "Gizmodo", 
              title: "MacBook Selfie Stick Is an Innovation the World Desperately Needs",
              url: "http://gizmodo.com/macbook-selfie-stick-is-an-innovation-the-world-despera-1761513651"
            },
            { 
              name: "Time", 
              title: "There's a MacBook Selfie Stick and It's as Amazing as It Sounds",
              url: "http://time.com/4239212/macbook-selfie-stick/"
            },
            { 
              name: "Mashable", 
              title: "MacBook selfie sticks are even more cringeworthy than photos with an iPad",
              url: "http://mashable.com/2016/02/25/macbook-selfie-sticks/"
            },
            { 
              name: "Cult of Mac", 
              title: "New MacBook selfie sticks are a nightmare mashup of nope",
              url: "http://www.cultofmac.com/414523/new-macbook-selfie-sticks-are-a-nightmare-mashup-of-nope/"
            },
            { 
              name: "Tech Insider", 
              title: "A giant selfie stick for your MacBook — just what you've always wanted!",
              url: "http://www.techinsider.io/macbook-selfie-stick-photo-series-tom-galle-2016-2"
            },
            { 
              name: "The Source", 
              title: "Check Out the New Macbook Selfie Stick",
              url: "http://thesource.com/2016/02/26/check-out-the-new-macbook-selfie-stick/?utm_source=YAakaVA&utm_medium=twitter"
            },
            { 
              name: "Huffington Post", 
              title: "MacBook Selfie Sticks Will Make You Look Even Stupider Than You Ever Imagined",
              url: "http://www.huffingtonpost.co.uk/2016/02/26/macbook-selfie-sticks-will-make-you-look-even-stupider-than-you-ever-imagined_n_9325194.html"
            },
            { 
              name: "Daily Dot", 
              title: "These people actually made a MacBook selfie stick",
              url: "http://www.dailydot.com/lol/macbook-selfie-stick/"
            }
          ]
        },
        { 
          project: "Devon Halfnight Lefluffy", 
          publications: [
            { 
              name: "W Magazine", 
              title: "Devon Halfnight Leflufy Tapped Into Virtual Reality for Spring 2017",
              url: "https://www.wmagazine.com/fashion/selena-gomez-benny-blanco-spring-breakers-screening-new-york"
            },
            { 
              name: "Vogue", 
              title: "Spring 2017 Menswear Devon Halfnight LeFlufy",
              url: "https://www.vogue.com/fashion-shows/spring-2017-menswear/devon-halfnight-leflufy"
            },
            { 
              name: "Interview - Adobe Creative Cloud Blog", 
              title: "Social Media Day: How Social-First Artists Bring Creativity to Today's Hottest Social Media Platforms"
            }
          ]
        }
      ]
    },
    {
      year: "2015",
      items: [
        { 
          project: "All Flags", 
          publications: [
            { 
              name: "Tech Insider", 
              title: "You can now add the flag of every country victimized by ISIS to your profile picture",
              url: "http://www.techinsider.io/facebook-profile-picture-lebanon-all-flags-2015-11"
            },
            { 
              name: "The Creators Project", 
              title: "Here's That All Flags Profile Pic Converter You Wanted",
              url: "http://thecreatorsproject.vice.com/blog/heres-that-all-flags-profile-pic-converter-you-wanted"
            },
            { 
              name: "Techly", 
              title: "You can now add the flag of every country victimized by ISIS to your profile picture",
              url: "http://www.techly.com.au/2015/11/20/there-is-now-an-all-flags-overlay-for-your-facebook-profile-picture/"
            }
          ]
        },
        { 
          project: "Netflix and Chill", 
          publications: [
            { 
              name: "Forbes", 
              title: "Dedicated 'Netflix And Chill' Suite On Airbnb Can Be Yours For $400 A Night",
              url: "http://www.forbes.com/sites/janetwburns/2016/01/29/dedicated-netflix-and-chill-suite-can-be-yours-for-400-a-night/#596bb65b687d"
            },
            { 
              name: "BuzzFeed", 
              title: "This Airbnb Is A 'Netflix And Chill' Utopia",
              url: "http://www.buzzfeed.com/juliareinstein/this-netflix-and-chill-airbnb-is-either-the-best-or-worst-th"
            },
            { 
              name: "Mashable", 
              title: "This New York City Airbnb listing takes Netflix and Chill very seriously",
              url: "http://mashable.com/2016/01/27/netflix-and-chill-airbnb/#BSmG027W7kqI"
            },
            { 
              name: "Tech Insider", 
              title: "There's a dedicated 'Netflix and chill' room in New York City and you can rent it for $400 a night",
              url: "http://www.techinsider.io/netflix-and-chill-airbnb-in-new-york-city-2016-1"
            },
            { 
              name: "Refinery 29", 
              title: "This AirBnB Is Designed Specifically For Netflix & Chill",
              url: "http://www.refinery29.com/2016/01/102164/this-airbnb-is-designed-specifically-for-netflix-and-chill"
            },
            { 
              name: "Ny Daily News", 
              title: "Get your 'Netflix and Chill' on in this Manhattan apartment",
              url: "http://www.nydailynews.com/new-york/manhattan/netflix-chill-manhattan-apartment-article-1.2511835"
            },
            { 
              name: "Complex", 
              title: "The \"Netflix and Chill\" Airbnb Is Here to Get You Laid",
              url: "http://www.complex.com/pop-culture/2016/01/netflix-and-chill-airbnb"
            }
          ]
        }
      ]
    },
    {
      year: "2012-2014",
      items: [
        { 
          project: "5M1T (5 Million Dollars 1 Terabyte)", 
          publications: [
            { 
              name: "Rhizome", 
              title: "5 Million Dollars 1 Terabyte",
              url: "http://rhizome.org/editorial/2011/aug/16/5-million-dollars-1-terabyte-2011/"
            },
            { 
              name: "Huffington Post", 
              title: "5 Million Dollars 1 Terabyte: Pirated Data Displayed As Art",
              url: "http://www.huffingtonpost.com/2011/09/06/five-million-dollars-of-s_n_951150.html"
            },
            { 
              name: "Gizmodo", 
              title: "This $5 Million Piece of Art Is a 1 Terabyte Hard Drive Filled with Pirated Software",
              url: "http://gizmodo.com/5833654/this-5-million-piece-of-art-is-a-1-terabyte-hard-drive-filled-with-pirated-software-songs-and-more"
            },
            { 
              name: "Wired", 
              title: "Illegal Downloads As Art",
              url: "http://www.wired.co.uk/news/archive/2011-08/24/illegal-downloads-as-art"
            },
            { 
              name: "ART404 in Transmediale 5 Million Dollars 1 Terabyte", 
              title: "",
              url: "https://archive.transmediale.de/content/art-404"
            }
          ]
        },
        { 
          project: "Interview", 
          publication: "Rhizome", 
          title: "Post-Trolling: A Conversation with Art404",
          url: "http://rhizome.org/editorial/2012/apr/09/post-trolling-conversation-art-404/"
        },
        { 
          project: "Exhibition", 
          publication: "The Miami Rail", 
          title: "Art404 In Real Life - Gucci Vuitton",
          url: "http://miamirail.org/reviews/art404-irl-in-real-life/"
        },
        { 
          project: "Exhibition Review", 
          publication: "The Miami Rail", 
          title: "Art404 In Real Life - Gucci Vuitton",
          url: "http://miamirail.org/reviews/art404-irl-in-real-life/"
        },
        { 
          project: "Avatar Apparel", 
          publication: "Yahoo Tech", 
          title: "How to Print Out and Wear Your Own Google Image Search Results",
          url: "https://www.yahoo.com/tech/how-to-print-out-and-wear-your-own-google-image-search-85128968189.html"
        },
        { 
          project: "LDR Song Generator", 
          publication: "Billboard", 
          title: "Make Your Own Lana Del Rey Song Title",
          url: "https://www.vfiles.com/ldrgenerator"
        },
        { 
          project: "Telfar Takeover", 
          publication: "Dazed Magazine", 
          title: "Dazed has been hacked",
          url: "http://www.dazeddigital.com/fashion/article/21098/1/dazed-has-been-hacked-by-telfar"
        }
      ]
    }
  ]
}; 