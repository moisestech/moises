'use client';

import { FC, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { TfiMenuAlt } from 'react-icons/tfi';
import { artistData } from '@/constants/artist';

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
const InfoTable: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`border ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-8 ml-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'} min-w-80 max-h-80`}
    >
      <span className="p-2 font-bold text-lg justify-center w-full flex">
        {artistData.name}
      </span>
      <table className="w-full text-sm dark:bg-gray-900">
        <tbody>
          <tr>
            <th className="text-left p-2 font-bold">Born</th>
            <td className="p-2">{artistData.birth}</td>
          </tr>
          <tr>
            <th className="text-left p-2 font-bold">Nationality</th>
            <td className="p-2">{artistData.nationality}</td>
          </tr>
          <tr>
            <th className="text-left p-2 font-bold">Known For</th>
            <td className="p-2">{artistData.knownFor.join(' · ')}</td>
          </tr>
          <tr>
            <th className="text-left p-2 font-bold">Notable Works</th>
            <td className="p-2">
              <i>{artistData.notableWorks.join(' · ')}</i>
            </td>
          </tr>
          <tr>
            <th className="text-left p-2 font-bold">Awards</th>
            <td className="p-2">{artistData.awards.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Section component for rendering different sections of the page
interface SectionProps {
  id: string;
  title: string;
  content: ReactNode;
  border?: boolean;
}

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
    <div className="font-serif">{content}</div>
  </section>
);

const WikipediaPage: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-5xl mx-auto p-6 mt-40">
        {/* Header with Theme Toggle */}
        <div
          className={`flex justify-between items-center mb-4 border-y-gray-400 ${
            isDark ? 'border-gray-700' : 'border-gray-300'
          }`}
          style={{
            borderBottomWidth: '1px',
          }}
        >
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2 flex items-center">
              <TfiMenuAlt className="mr-2" />
            </h2>
            <h1 className="text-3xl font-serif wiki-font">{artistData.name}</h1>
          </div>
          <span className="font-bold text-sm" style={{ color: '#36c' }}>
            1 language
          </span>
        </div>

        <div
          className={`flex justify-between mb-8 border-y-gray-400 ${
            isDark ? 'border-gray-700' : 'border-gray-300'
          }`}
          style={{
            borderBottomWidth: '1px',
          }}
        >
          <span
            className={`border-b-2 text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
          >
            Article
          </span>
          <span className="text-sm">Read</span>
        </div>

        <article className="flex">
          <Section
            id="bio"
            title=""
            content={artistData.biography}
            border={false}
          />
          <InfoTable />
        </article>

        <Section
          id="early-life"
          title="Early Life and Education"
          content={artistData.earlyLife}
        />
        <Section
          id="art-practice"
          title="Art Practice"
          content={artistData.artPractice}
        />
        <Section
          id="professional-work"
          title="Professional Work"
          content={artistData.professionalWork}
        />
        <Section
          id="exhibitions"
          title="Exhibitions"
          content={
            <ul className="list-disc list-inside">
              {artistData.exhibitions.map((exhibition, index) => (
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
            <ul className="list-disc list-inside">
              {artistData.selectedWorks.map((work, index) => (
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
          content={artistData.pressRecognition}
        />
        <Section
          id="style"
          title="Style and Influences"
          content={artistData.styleAndInfluences}
        />
        <Section
          id="education"
          title="Education"
          content={
            <ul className="list-disc list-inside">
              {artistData.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
        <Section
          id="awards"
          title="Awards & Honors"
          content={
            <ul className="list-disc list-inside">
              {artistData.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          }
        />
        <Section
          id="external-links"
          title="External Links"
          content={
            <ul className="list-disc list-inside">
              {artistData.externalLinks.map((link, index) => (
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
