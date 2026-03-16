'use client';

import { FC, ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { artistData } from '@/constants/artist';
import {
  WikiLink,
  CitationTooltip,
  Infobox,
  TableOfContents,
  References,
} from '@/components/wiki';

// Section component for rendering different sections of the page
interface SectionProps {
  id: string;
  title: string;
  content: ReactNode;
  border?: boolean;
}

const Section: FC<SectionProps> = ({ id, title, content, border = true }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const textColor = isDark ? '#f8f9fa' : '#202122';

  return (
    <section id={id} className="mb-6">
      {title && (
        <h2
          className="text-2xl wiki-font font-normal font-serif mb-3"
          style={{
            borderBottomWidth: border ? '1px' : '0px',
            borderBottomColor: borderColor,
            borderBottomStyle: border ? 'solid' : 'none',
            color: textColor,
            paddingBottom: border ? '0.25rem' : '0',
          }}
        >
          {title}
        </h2>
      )}
      <div className="wiki-font text-[15px] leading-7" style={{ color: textColor }}>
        {content}
      </div>
    </section>
  );
};

const WikipediaPage: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Wikipedia colors
  const linkColor = isDark ? '#5A9FD4' : '#0645ad';
  const visitedColor = isDark ? '#9A9AFF' : '#0b0080';
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const bgColor = isDark ? '#000000' : '#ffffff';
  const textColor = isDark ? '#f8f9fa' : '#202122';
  const subtitleColor = isDark ? '#a7d7f9' : '#54595d';

  // Citations data
  const citations: Record<number, string> = {
    1: 'Artist CV, exhibition history, and educational background compiled from the studio archive.',
    2: 'Exhibition records and press coverage from institutional archives and media databases.',
    3: 'Work descriptions and artistic practice statements from artist interviews and studio documentation.',
  };

  // References for the References section
  const references = [
    {
      id: 1,
      text: 'Artist CV, exhibition history, and educational background compiled from the studio archive.',
    },
    {
      id: 2,
      text: 'Exhibition records and press coverage from institutional archives and media databases.',
    },
    {
      id: 3,
      text: 'Work descriptions and artistic practice statements from artist interviews and studio documentation.',
    },
  ];

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-[1000px] mx-auto px-4 pt-32 pb-12">
        {/* Page Title */}
        <div className="mb-4">
          <h1 className="text-[32px] wiki-font font-normal mb-1" style={{ color: textColor }}>
            {artistData.name}
          </h1>
          <p className="text-sm italic" style={{ color: subtitleColor }}>
            From the networked public record
          </p>
        </div>

        {/* Article Tabs */}
        <div
          className="flex justify-between items-center mb-6 pb-2 border-b"
          style={{ borderColor: borderColor }}
        >
          <div className="flex gap-4 text-sm">
            <span
              className="border-b-2 pb-1 font-medium"
              style={{ borderColor: linkColor, color: linkColor }}
            >
              Article
            </span>
            <span className="text-sm" style={{ color: textColor }}>
              Talk
            </span>
          </div>
          <span className="text-sm" style={{ color: textColor }}>
            Read
          </span>
        </div>

        {/* Main Article Layout */}
        <article className="relative">
          {/* Lead Section with Infobox */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="flex-1">
              <Section
                id="bio"
                title=""
                content={
                  <p>
                    <WikiLink term="Moises Sanabria">Moises Sanabria</WikiLink> (born 6 August
                    1990) is a Venezuelan-born, Miami-based interdisciplinary artist. Known
                    primarily for his exploration of{' '}
                    <WikiLink term="Post-internet">Post-internet</WikiLink> sculptures and new
                    media installation art, Sanabria's practice also includes software
                    development, curating and publishing
                    <CitationTooltip number={1} text={citations[1]} />. In 2012, the{' '}
                    <WikiLink term="Haus Del Kulturwelt">Haus Del Kulturwelt</WikiLink> in Berlin
                    curated one of his collective's artwork. Some of Sanabria's better known works
                    include "<WikiLink term="5 Million Dollars 1 Terabyte">
                      5 Million Dollars 1 Terabyte
                    </WikiLink>
                    ", consisting of a hard drive with 5 million dollars worth of software; "
                    <WikiLink term="VR Hug">VR Hug</WikiLink>", a photo depicting two people with
                    VR Headsets hugging; and "<WikiLink term="McDonald Brass Knuckles">
                      McDonald Brass Knuckles
                    </WikiLink>
                    ", brass knuckles in the shape of the McDonald's logo.
                  </p>
                }
                border={false}
              />
            </div>
            <div className="lg:block">
              <Infobox />
            </div>
          </div>

          {/* Table of Contents */}
          <TableOfContents />

          {/* Early Life Section */}
          <Section
            id="early-life"
            title="Early Life and Education"
            content={
              <p>
                Sanabria was born in Venezuela in the 1990s and later moved to Miami, Florida.
                Raised amidst the burgeoning digital age, he cultivated a fascination with the
                intersection of technology and human experience. Without formal training in art, he
                began exploring digital mediums and meme cultures, gaining insights through
                self-study and engagement with online communities. He further honed his skills and
                artistic philosophy by attending the <WikiLink term="New World School of Art">
                  New World School of Art
                </WikiLink>{' '}
                in Miami, followed by studies at the{' '}
                <WikiLink term="School for Poetic Computation">
                  School for Poetic Computation
                </WikiLink>
                . He later graduated with a Bachelor of Fine Arts from{' '}
                <WikiLink term="The Cooper Union">The Cooper Union</WikiLink> in New York in 2015
                <CitationTooltip number={1} text={citations[1]} />. His educational journey also
                extended to specialized programs such as "<WikiLink term="The Neural Aesthetic">
                  The Neural Aesthetic
                </WikiLink>
                " by <WikiLink term="Gene Kogan">Gene Kogan</WikiLink> at the{' '}
                <WikiLink term="School of Machines">School of Machines</WikiLink> in Berlin,
                reinforcing his affinity for merging art with technology.
              </p>
            }
          />

          {/* Art Practice Section */}
          <Section
            id="art-practice"
            title="Art Practice"
            content={
              <p>
                His practice, deeply embedded in the digital era, incorporates humor and critique,
                often placing him in the role of a satirical observer of technological advancement.
                Sanabria's work is characterized by a fusion of digital humanities, social trends,
                and technology. Utilizing AI, live-streaming, video, and new media installations, his
                art often delves into themes of memory, value, and human identity within the
                rapidly evolving technological landscape
                <CitationTooltip number={3} text={citations[3]} />. He describes his practice as
                an ongoing conversation between academic aesthetics and internet meme culture.
              </p>
            }
          />

          {/* Professional Work Section */}
          <Section
            id="professional-work"
            title="Professional Work"
            content={
              <p>
                Sanabria co-founded the artificial intelligence media channel{' '}
                <WikiLink term="AI24">AI24</WikiLink> and was an active member of the digital art
                collective <WikiLink term="ART404">ART404</WikiLink>. He gained recognition for
                pushing the boundaries of digital art and media critique.
              </p>
            }
          />

          {/* Exhibitions Section */}
          <Section
            id="exhibitions"
            title="Exhibitions"
            content={
              <ul className="list-disc list-inside space-y-1">
                {artistData.exhibitions.map((exhibition, index) => (
                  <li key={index}>
                    <strong>{exhibition.title}</strong>, {exhibition.location} ({exhibition.year}
                    )
                    <CitationTooltip number={2} text={citations[2]} />
                  </li>
                ))}
              </ul>
            }
          />

          {/* Selected Works Section */}
          <Section
            id="selected-works"
            title="Selected Works"
            content={
              <ul className="list-disc list-inside space-y-1">
                {artistData.selectedWorks.map((work, index) => (
                  <li key={index}>
                    <strong>{work.title}</strong> ({work.year})
                  </li>
                ))}
              </ul>
            }
          />

          {/* Press and Recognition Section */}
          <Section
            id="press"
            title="Press and Recognition"
            content={
              <p>
                Sanabria's work has been covered by a variety of media outlets including{' '}
                <WikiLink term="Rhizome">Rhizome</WikiLink>, <WikiLink term="Wired">Wired</WikiLink>
                , <WikiLink term="The Guardian">The Guardian</WikiLink>, and{' '}
                <WikiLink term="Forbes">Forbes</WikiLink>
                <CitationTooltip number={2} text={citations[2]} />. In 2012, he received a{' '}
                <WikiLink term="Webby Award">Webby Award</WikiLink> for his project "
                <WikiLink term="Social Weird - Sad Tweets">
                  Social Weird - Sad Tweets
                </WikiLink>
                ," which further solidified his reputation as a critical voice in digital art.
              </p>
            }
          />

          {/* Style and Influences Section */}
          <Section
            id="style"
            title="Style and Influences"
            content={
              <p>
                His practice is marked by an entanglement with digital newness, social trends, and
                machine philosophy. Sanabria often addresses the intersection of art, technology, and
                the human experience, capturing the complexities of modern existence in an
                increasingly interconnected digital world.
              </p>
            }
          />

          {/* Education Section */}
          <Section
            id="education"
            title="Education"
            content={
              <ul className="list-disc list-inside space-y-1">
                {artistData.education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
          />

          {/* Awards Section */}
          <Section
            id="awards"
            title="Awards & Honors"
            content={
              <ul className="list-disc list-inside space-y-1">
                {artistData.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            }
          />

          {/* References Section */}
          <References references={references} />

          {/* External Links Section */}
          <Section
            id="external-links"
            title="External Links"
            content={
              <ul className="list-disc list-inside space-y-1">
                {artistData.externalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: linkColor }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            }
          />
        </article>
      </div>
    </main>
  );
};

export default WikipediaPage;
