'use client';

import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { TfiMenuAlt } from 'react-icons/tfi';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections?: Section[];
}

const defaultSections: Section[] = [
  { id: 'bio', title: 'Biography' },
  { id: 'early-life', title: 'Early Life and Education' },
  { id: 'art-practice', title: 'Art Practice' },
  { id: 'professional-work', title: 'Professional Work' },
  { id: 'exhibitions', title: 'Exhibitions' },
  { id: 'selected-works', title: 'Selected Works' },
  { id: 'press', title: 'Press and Recognition' },
  { id: 'style', title: 'Style and Influences' },
  { id: 'education', title: 'Education' },
  { id: 'awards', title: 'Awards & Honors' },
  { id: 'references', title: 'References' },
  { id: 'external-links', title: 'External Links' },
];

export const TableOfContents: FC<TableOfContentsProps> = ({
  sections = defaultSections,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Wikipedia colors
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const bgColor = isDark ? '#202122' : '#f8f9fa';
  const textColor = isDark ? '#f8f9fa' : '#202122';
  const linkColor = isDark ? '#5A9FD4' : '#0645ad';

  return (
    <div
      className="my-4 p-4 border rounded"
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <h2 className="text-lg font-bold mb-2 flex items-center">
        <TfiMenuAlt className="mr-2" /> Contents
      </h2>
      <ul className="list-none pl-0">
        {sections.map((section) => (
          <li key={section.id} className="mb-1">
            <a
              href={`#${section.id}`}
              className="hover:underline"
              style={{ color: linkColor }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
