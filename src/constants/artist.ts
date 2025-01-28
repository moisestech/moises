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
  knownFor: string[];
  notableWorks: string[];
  biography: string;
  earlyLife: string;
  artPractice: string;
  professionalWork: string;
  exhibitions: Exhibition[];
  selectedWorks: Work[];
  pressRecognition: string;
  styleAndInfluences: string;
  education: string[];
  awards: string[];
  externalLinks: ExternalLink[];
}

export const artistData: ArtistData = {
  name: 'Moises Sanabria',
  birth: '6 August 1990, (age 34), Caracas, Venezuela',
  nationality: 'Venezuelan-American',
  knownFor: ['Sculpture', 'New media installation art'],
  notableWorks: ['5 Million Dollars 1 Terabyte', 'VR Hug', 'McDonald Brass Knuckles'],
  biography: 'Moises Sanabria (born 6 August 1990) is a Venezuelan-born, Miami-based interdisciplinary artist. Known primarily for his exploration of Post-internet sculptures and new media installation art, Sanabria\'s practice also includes software development, curating and publishing. In 2012, the Haus Del Kulturwelt in Berlin curated one of his collective\'s artwork. Some of Sanabria\'s better known works include "5 Million Dollars 1 Terabyte", consisting of a hard drive with 5 million dollars worth of software; "VR Hug", a photo depicting two people with VR Headsets hugging; and "McDonald Brass Knuckles", brass knuckles in the shape of the McDonald\'s logo.',
  earlyLife: 'Sanabria was born in Venezuela in the 1990s and later moved to Miami, Florida. Raised amidst the burgeoning digital age, he cultivated a fascination with the intersection of technology and human experience. Without formal training in art, he began exploring digital mediums and meme cultures, gaining insights through self-study and engagement with online communities. He further honed his skills and artistic philosophy by attending the New World School of Art in Miami, followed by studies at the School for Poetic Computation. He later graduated with a Bachelor of Fine Arts from The Cooper Union in New York in 2015. His educational journey also extended to specialized programs such as "The Neural Aesthetic" by Gene Kogan at the School of Machines in Berlin, reinforcing his affinity for merging art with technology.',
  artPractice: 'His practice, deeply embedded in the digital era, incorporates humor and critique, often placing him in the role of a satirical observer of technological advancement. Sanabria\'s work is characterized by a fusion of digital humanities, social trends, and technology. Utilizing AI, live-streaming, video, and new media installations, his art often delves into themes of memory, value, and human identity within the rapidly evolving technological landscape. He describes his practice as an ongoing conversation between academic aesthetics and internet meme culture.',
  professionalWork: 'Sanabria co-founded the artificial intelligence media channel AI24 and was an active member of the digital art collective ART404. He gained recognition for pushing the boundaries of digital art and media critique.',
  exhibitions: [
    { title: 'Transmediale 2k+12', location: 'Berlin', year: '2012' },
    { title: 'Institute of Contemporary Art Miami', location: 'Miami', year: '2015' },
    { title: 'Kunsthalle Giessen', location: 'Berlin', year: '2018' },
    { title: 'Untitled Art Fair', location: 'Miami', year: '2022' },
    { title: 'HODLER Gallery', location: 'Miami', year: '2023' }
  ],
  selectedWorks: [
    { title: '5 Million Dollars 1 Terabyte', year: '2012' },
    { title: 'Avatar Apparel', year: '2014' },
    { title: 'All Flags', year: '2015' },
    { title: 'Netflix and Chill Suite', year: '2015' },
    { title: 'MacBook Selfie Stick', year: '2016' }
  ],
  pressRecognition: 'Sanabria\'s work has been covered by a variety of media outlets including Rhizome, Wired, The Guardian, and Forbes. In 2012, he received a Webby Award for his project "Social Weird - Sad Tweets," which further solidified his reputation as a critical voice in digital art.',
  styleAndInfluences: 'His practice is marked by an entanglement with digital newness, social trends, and machine philosophy. Sanabria often addresses the intersection of art, technology, and the human experience, capturing the complexities of modern existence in an increasingly interconnected digital world.',
  education: [
    'New World School of Art, Miami, FL (2009-2011)',
    'School for Poetic Computation (2013)',
    'The Cooper Union, Bachelor of Fine Arts (2011-2015)',
    'Additional studies at the School of Machines, Berlin, and Knight Foundation Art + Research Center'
  ],
  awards: ['Webby Award - "Social Weird - Sad Tweets"'],
  externalLinks: [
    { label: 'Official Website', url: 'https://moisessanabria.com' },
    { label: 'AI24', url: 'https://ai24.tv' }
  ]
};
