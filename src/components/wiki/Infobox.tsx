'use client';

import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { artistData } from '@/constants/artist';
import Image from 'next/image';

export const Infobox: FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Wikipedia colors
  const borderColor = isDark ? '#54595d' : '#a2a9b1';
  const bgColor = isDark ? '#202122' : '#f8f9fa';
  const textColor = isDark ? '#f8f9fa' : '#202122';
  const headerBgColor = isDark ? '#27292d' : '#eaecf0';
  const headerTextColor = isDark ? '#f8f9fa' : '#202122';

  return (
    <div
      className="float-none lg:float-right lg:ml-4 mb-4 border text-sm w-full lg:w-auto"
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: textColor,
        maxWidth: '22em',
        minWidth: '300px',
      }}
    >
      {/* Header */}
      <div
        className="p-2 font-bold text-base text-center border-b"
        style={{
          backgroundColor: headerBgColor,
          color: headerTextColor,
          borderColor: borderColor,
        }}
      >
        {artistData.name}
      </div>

      {/* Image */}
      <div className="w-full flex justify-center items-center h-64 relative border-b" style={{ borderColor: borderColor }}>
        <Image
          src={artistData.image}
          alt={artistData.name}
          fill
          className="object-cover"
          sizes="(max-width: 300px) 100vw, 300px"
        />
      </div>

      {/* Info Table */}
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b" style={{ borderColor: borderColor }}>
            <th
              className="text-left p-2 font-bold align-top"
              style={{ color: textColor, width: '35%' }}
            >
              Born
            </th>
            <td className="p-2" style={{ color: textColor }}>
              {artistData.birth}
            </td>
          </tr>
          <tr className="border-b" style={{ borderColor: borderColor }}>
            <th
              className="text-left p-2 font-bold align-top"
              style={{ color: textColor }}
            >
              Nationality
            </th>
            <td className="p-2" style={{ color: textColor }}>
              {artistData.nationality}
            </td>
          </tr>
          <tr className="border-b" style={{ borderColor: borderColor }}>
            <th
              className="text-left p-2 font-bold align-top"
              style={{ color: textColor }}
            >
              Known&nbsp;for
            </th>
            <td className="p-2" style={{ color: textColor }}>
              {artistData.knownFor.join(', ')}
            </td>
          </tr>
          <tr className="border-b" style={{ borderColor: borderColor }}>
            <th
              className="text-left p-2 font-bold align-top"
              style={{ color: textColor }}
            >
              Notable&nbsp;works
            </th>
            <td className="p-2" style={{ color: textColor }}>
              <i>{artistData.notableWorks.join(', ')}</i>
            </td>
          </tr>
          <tr className="border-b" style={{ borderColor: borderColor }}>
            <th
              className="text-left p-2 font-bold align-top"
              style={{ color: textColor }}
            >
              Education
            </th>
            <td className="p-2" style={{ color: textColor }}>
              {artistData.education.map((edu, idx) => (
                <div key={idx} className={idx > 0 ? 'mt-1' : ''}>
                  {edu}
                </div>
              ))}
            </td>
          </tr>
          <tr>
            <th
              className="text-left p-2 font-bold align-top"
              style={{ color: textColor }}
            >
              Website
            </th>
            <td className="p-2" style={{ color: textColor }}>
              <a
                href={artistData.externalLinks[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: isDark ? '#5A9FD4' : '#0645ad' }}
              >
                {artistData.externalLinks[0]?.label || 'Official Website'}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
