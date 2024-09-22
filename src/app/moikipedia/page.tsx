'use client';

import type { FC, ReactNode } from 'react';

// REACT
import { useState } from 'react';

// CONTEXT
import { useAppContext } from '@/context/appContext';

import { TfiMenuAlt } from 'react-icons/tfi';

// Define types for the data
type Exhibition = {
  title: string;
  location: string;
  year: string;
};

type Work = {
  title: string;
  year: string;
};

type ExternalLink = {
  label: string;
  url: string;
};

type ArtistData = {
  name: string;
  birth: string;
  nationality: string;
  pronunciation: ReactNode;
  knownFor: ReactNode;
  notableWorks: ReactNode;
  biography: ReactNode;
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
};

// 'Interdisciplinary art, machine philosophy, social media, memetics'

// Define the pronunciation as a separate constant
const pronunciation = (
  <span>
    <span className="IPA-label text-sm">Spanish:</span>{' '}
    <span
      className="IPA nowrap"
      style={{ color: '#36c' }}
      lang="es-Latn-fonipa"
    >
      [moˈises saˈnaβɾia]
    </span>
  </span>
);

// JSON object holding all data
const data: ArtistData = {
  name: 'Moises Sanabria',
  birth: '6 August 1990, (age 34), Caracas, Venezuela',
  nationality: 'Venezuelan-American',
  pronunciation: pronunciation,
  knownFor: (
    <div>
      Sculpture · <span>new media installation art</span>
    </div>
  ),
  notableWorks: (
    <div>
      Sculpture · <span>new media installation art</span>
    </div>
    // ['AI24', 'ART404', '5 Million Dollars 1 Terabyte']
  ),
  biography: (
    <>
      <div className="mb-4">
        <b>Moises Sanabria</b> ({pronunciation}; born 6 August 1990) is a
        Venezuelan-born, Miami-based interdisciplinary artist. Known primarily
        for his exploration of Post-internet{' '}
        <span style={{ color: '#36c' }}>sculptures</span> and new media
        installation art, Sanabria's practice also includes software
        development, curating and publishing. The intersection between machine
        philosophy, social media, and memetics, Sanabria's work spans innovative
        mediums such as artificial intelligence, conceptual sculpture, and new
        media installations.
      </div>
      <div>
        In 2012, the Haus Del Kulturwelt in Berlin curated one of his
        collective's artwork. Some of Sanabria's better known works include{' '}
        <i>5 Million Dollars 1 Terabyte</i>, consisting of a hard drive with 5
        million dollars worth of software; <i>VR Hug</i>, a photo depicting two
        people with VR Headsets hugging; and <i>McDonald Brass Knuckles</i>,
        brass knuckles in the shape of the McDonald's logo.
      </div>
    </>
  ),
  earlyLife:
    'Sanabria was born in Venezuela in the 1990s and later moved to Miami, Florida. Raised amidst the burgeoning digital age, he cultivated a fascination with the intersection of technology and human experience. Without formal training in art, he began exploring digital mediums and meme cultures, gaining insights through self-study and engagement with online communities. He further honed his skills and artistic philosophy by attending the New World School of Art in Miami, followed by studies at the School for Poetic Computation. He later graduated with a Bachelor of Fine Arts from The Cooper Union in New York in 2015. His educational journey also extended to specialized programs such as "The Neural Aesthetic" by Gene Kogan at the School of Machines in Berlin, reinforcing his affinity for merging art with technology.',
  artPractice:
    'His practice, deeply embedded in the digital era, incorporates humor and critique, often placing him in the role of a satirical observer of technological advancement. Sanabria\'s work is characterized by a fusion of digital humanities, social trends, and technology. Utilizing AI, live-streaming, video, and new media installations, his art often delves into themes of memory, value, and human identity within the rapidly evolving technological landscape. He describes his practice as an ongoing conversation between academic aesthetics and internet meme culture. Sanabria’s work is infused with humor and irony, serving as both a critique and a reflection of contemporary digital life. One of his early provocative pieces, "5 Million Dollars 1 Terabyte" (2012), involved the exhibition of a hard drive filled with pirated software, questioning concepts of digital ownership and commercialization in the age of information. His other notable projects include works like "MacBook Selfie Stick" (2016), which humorously critiques society\'s obsession with digital self-presentation. "Originality doesn\'t exist by itself," Sanabria often explains. "It\'s an evolution of what is produced – my capacity to add commentary on the digital world." His projects are not just visual one-liners; they are reflections on the absurdity and beauty found within the digital human experience.',
  professionalWork:
    'Sanabria co-founded the artificial intelligence media channel AI24 and was an active member of the digital art collective ART404. He gained recognition for pushing the boundaries of digital art and media critique.',
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
    'Sanabria’s work has been covered by a variety of media outlets including Rhizome, Wired, The Guardian, and Forbes. In 2012, he received a Webby Award for his project "Social Weird - Sad Tweets," which further solidified his reputation as a critical voice in digital art.',
  styleAndInfluences:
    'His practice is marked by an entanglement with digital newness, social trends, and machine philosophy. Sanabria often addresses the intersection of art, technology, and the human experience, capturing the complexities of modern existence in an increasingly interconnected digital world.',
  education: [
    'New World School of Art, Miami, FL (2009-2011)',
    'School for Poetic Computation (2013)',
    'The Cooper Union, Bachelor of Fine Arts (2011-2015)',
    'Additional studies at the School of Machines, Berlin, and Knight Foundation Art + Research Center',
  ],
  awards: ['Webby Award - "Social Weird - Sad Tweets"'],
  externalLinks: [
    { label: 'Official Website', url: 'URL Placeholder' },
    { label: 'AI24', url: 'URL Placeholder' },
  ],
};

// Table of Contents component
const TableOfContents: FC = () => (
  <div className="my-4 p-4 border rounded bg-gray-200 dark:bg-gray-800">
    <h2 className="text-xl font-bold mb-2 flex items-center">
      <TfiMenuAlt className="mr-2" /> Table of Contents
    </h2>
    <ul className="list-disc list-inside">
      <li>
        <a
          href="#bio"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Biography
        </a>
      </li>
      <li>
        <a
          href="#early-life"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Early Life and Education
        </a>
      </li>
      <li>
        <a
          href="#art-practice"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Art Practice
        </a>
      </li>
      <li>
        <a
          href="#professional-work"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Professional Work
        </a>
      </li>
      <li>
        <a
          href="#exhibitions"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Exhibitions
        </a>
      </li>
      <li>
        <a
          href="#selected-works"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Selected Works
        </a>
      </li>
      <li>
        <a
          href="#press"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Press and Recognition
        </a>
      </li>
      <li>
        <a
          href="#style"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Style and Influences
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#awards"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Awards & Honors
        </a>
      </li>
      <li>
        <a
          href="#external-links"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          External Links
        </a>
      </li>
    </ul>
  </div>
);

// Info Table component
const InfoTable: FC = () => (
  <div className="border border-gray-300 dark:border-gray-700 mb-8 ml-8 bg-gray-100 min-w-80 max-h-80">
    <span className="p-2 font-bold text-lg justify-center w-full flex">
      {data.name}
    </span>
    <table className="w-full text-sm dark:bg-gray-900">
      <tbody>
        <tr>
          <th className="text-left p-2 font-bold">Born</th>
          <td className="p-2">{data.birth}</td>
        </tr>
        <tr>
          <th className="text-left p-2 font-bold">Nationality</th>
          <td className="p-2">{data.nationality}</td>
        </tr>
        <tr>
          <th className="text-left p-2 font-bold">Known For</th>
          <td className="p-2">{data.knownFor}</td>
        </tr>
        <tr>
          <th className="text-left p-2 font-bold">Notable Works</th>
          <td className="p-2">
            {data.notableWorks && <i>{data.notableWorks}</i>}
          </td>
        </tr>
        <tr>
          <th className="text-left p-2 font-bold">Awards</th>
          <td className="p-2">{data.awards.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Section component for rendering different sections of the page
type SectionProps = {
  id: string;
  title: string;
  content: ReactNode;
  border?: boolean;
};

const Section: FC<SectionProps> = ({ id, title, content, border = true }) => (
  <section id={id} className="mb-8">
    <h2
      className="text-2xl wiki-font font-normal font-serif mb-2"
      style={{
        borderBottomWidth: border ? '1px' : '0px',
      }}
    >
      {title}
    </h2>
    {content}
  </section>
);

const WikipediaPage: FC = () => {

  // const { darkMode } = useAppContext();

  const darkMode = false;

  return (
    <section
      className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
    >

      <div className="max-w-5xl mx-auto p-6">
        {/* Header with Theme Toggle */}
        <div
          className="flex justify-between items-center mb-4 border-y-gray-400"
          style={{
            borderBottomWidth: '1px',
          }}
        >
          <div className="flex items-center">
            {/* Table of Contents */}
            <h2 className="text-xl font-bold mr-2 flex items-center">
              <TfiMenuAlt className="mr-2" />
            </h2>
            {/* <TableOfContents /> */}
            <h1 className="text-3xl font-serif wiki-font">{data.name}</h1>
          </div>
          <span className="font-bold text-sm" style={{ color: '#36c' }}>
            1 language
          </span>
        </div>

        <div
          className="flex justify-between mb-8 border-y-gray-400"
          style={{
            borderBottomWidth: '1px',
          }}
        >
          <span className="border-b-2 text-sm">Article</span>

          <span className="border-b-2 text-sm">Read</span>
        </div>

        <article className="flex">
          <Section id="bio" title="" content={data.biography} border={false} />

          {/* Info Table */}
          <InfoTable />
        </article>

        <Section
          id="early-life"
          title="Early Life and Education"
          content={<p className="font-serif">{data.earlyLife}</p>}
        />
        <Section
          id="art-practice"
          title="Art Practice"
          content={<p className="font-serif">{data.artPractice}</p>}
        />
        <Section
          id="professional-work"
          title="Professional Work"
          content={<p className="font-serif">{data.professionalWork}</p>}
        />
        <Section
          id="exhibitions"
          title="Exhibitions"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.exhibitions.map((exhibition, index) => (
                <li key={index}>
                  <strong>{exhibition.title}</strong>, {exhibition.location} (
                  {exhibition.year})
                </li>
              ))}
            </ul>
          }
        />
        <Section
          id="selected-works"
          title="Selected Works"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.selectedWorks.map((work, index) => (
                <li key={index}>
                  <strong>{work.title}</strong> ({work.year})
                </li>
              ))}
            </ul>
          }
        />
        <Section
          id="press"
          title="Press and Recognition"
          content={<p className="font-serif">{data.pressRecognition}</p>}
        />
        <Section
          id="style"
          title="Style and Influences"
          content={<p className="font-serif">{data.styleAndInfluences}</p>}
        />
        <Section
          id="education"
          title="Education"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
        <Section
          id="awards"
          title="Awards & Honors"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          }
        />
        <Section
          id="external-links"
          title="External Links"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-blue-600 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          }
        />

        <Section
          id="exhibitions"
          title="Exhibitions"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.exhibitions.map((exhibition, index) => (
                <li key={index}>
                  <strong>{exhibition.title}</strong>, {exhibition.location} (
                  {exhibition.year})
                </li>
              ))}
            </ul>
          }
        />

        <Section
          id="selected-works"
          title="Selected Works"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.selectedWorks.map((work, index) => (
                <li key={index}>
                  <strong>{work.title}</strong> ({work.year})
                </li>
              ))}
            </ul>
          }
        />

        <Section
          id="press"
          title="Press and Recognition"
          content={<p className="font-serif">{data.pressRecognition}</p>}
        />
        <Section
          id="style"
          title="Style and Influences"
          content={<p className="font-serif">{data.styleAndInfluences}</p>}
        />

        <Section
          id="education"
          title="Education"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />

        <Section
          id="awards"
          title="Awards & Honors"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          }
        />

        <Section
          id="external-links"
          title="External Links"
          content={
            <ul className="list-disc list-inside font-serif">
              {data.externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-blue-600 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
};

export default WikipediaPage;
