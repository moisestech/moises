'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { GlitchText } from '@/components/common/GlitchText';

interface ProcessFragmentProps {
  text: string;
  glitchTerm?: string;
}

export function ProcessFragment({ text, glitchTerm }: ProcessFragmentProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = glitchTerm && text.includes(glitchTerm) ? (
    <>
      {text.split(glitchTerm).map((part, i) => (
        <span key={i}>
          {part}
          {i === 0 && (
            <GlitchText as="span" className="italic">
              {glitchTerm}
            </GlitchText>
          )}
        </span>
      ))}
    </>
  ) : (
    text
  );

  return (
    <p
      className={`py-6 text-center italic text-sm ${
        isDark ? 'text-gray-500' : 'text-gray-500'
      }`}
    >
      {content}
    </p>
  );
}
