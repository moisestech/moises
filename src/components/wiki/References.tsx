'use client';

import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Reference {
  id: number;
  text: string;
}

interface ReferencesProps {
  references: Reference[];
}

export const References: FC<ReferencesProps> = ({ references }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Wikipedia colors
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const textColor = isDark ? '#f8f9fa' : '#202122';
  const linkColor = isDark ? '#5A9FD4' : '#0645ad';

  if (references.length === 0) {
    return null;
  }

  return (
    <section id="references" className="mt-8">
      <h2
        className="text-2xl wiki-font font-normal font-serif mb-4 border-b pb-2"
        style={{
          borderColor: borderColor,
          color: textColor,
        }}
      >
        References
      </h2>
      <ol className="list-decimal list-inside space-y-2" style={{ color: textColor }}>
        {references.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`} className="pl-2">
            <a
              href={`#cite-note-${ref.id}`}
              className="hover:underline"
              style={{ color: linkColor }}
            >
              ^
            </a>{' '}
            {ref.text}
          </li>
        ))}
      </ol>
    </section>
  );
};
