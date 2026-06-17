'use client';

import React from 'react';
import Image from 'next/image';
import { cvData } from '@/constants/cv';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { motion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import EnhancedDescription from '@/components/EnhancedDescription';
import InteractiveText from '@/components/InteractiveText';
import CvExhibitionsSection from '@/components/cv/CvExhibitionsSection';
import { CvCollapsibleSection } from '@/components/cv/CvCollapsibleSection';
import type { CVExhibition } from '@/types/cv';

// Animation variants for list items
const getListItemVariants = (isDark: boolean): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    }
  }),
  hover: {
    scale: 1.01,
    backgroundColor: isDark ? "rgba(55, 65, 81, 0.5)" : "rgba(249, 250, 251, 0.8)",
    transition: { duration: 0.2 }
  }
});

const FadeInSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
);

// Interactive Link component for CV items
const InteractiveLink = ({ title, url, interactiveContent }: { 
  title: string; 
  url?: string;
  interactiveContent?: any[];
}) => {
  if (interactiveContent && interactiveContent.length > 0) {
    return (
      <span className="font-medium">
        {interactiveContent.map((content, idx) => {
          if (content.text === title) {
            return (
              <InteractiveText 
                key={idx}
                type="link" 
                content={content.content}
              >
                {title}
              </InteractiveText>
            );
          }
          return null;
        })}
        {interactiveContent.every(content => content.text !== title) && (
          url ? (
            <Link href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:text-[#67e8f9] dark:hover:text-[#67e8f9] transition-colors">
              {title}
            </Link>
          ) : title
        )}
      </span>
    );
  }
  
  return url ? (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="font-medium underline hover:text-blue-600 dark:text-[#67e8f9] dark:hover:text-[#67e8f9] transition-colors">
      {title}
    </Link>
  ) : (
    <span className="font-medium">{title}</span>
  );
};

// Interactive Description component for CV items with supporting text
const InteractiveDescription = ({ details, interactiveContent }: {
  details?: string;
  interactiveContent?: any[];
}) => {
  if (!details) return null;
  
  if (interactiveContent && interactiveContent.length > 0) {
    return (
      <div className="text-gray-600 dark:text-gray-400">
        <EnhancedDescription 
          description={details} 
          interactiveContent={interactiveContent} 
        />
      </div>
    );
  }
  
  return (
    <div className="text-gray-600 dark:text-gray-400">
      {details}
    </div>
  );
};

const CvClientPage = ({
  airtableExhibitions,
  airtableError,
}: {
  airtableExhibitions?: Record<string, CVExhibition[]>;
  airtableError?: string | null;
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const listItemVariants = getListItemVariants(isDark);
  const hasAirtableExhibitions =
    airtableExhibitions &&
    Object.values(airtableExhibitions).some((items) => items.length > 0);

  return (
    <div className="max-w-7xl px-4 sm:px-6 md:px-11 pt-8 md:pb-6 mx-auto print:py-4 print:px-2">
      <style jsx global>{`
        @media print {
          body {
            font-size: 12px;
            line-height: 1.2;
          }
          header, footer, nav {
            display: none !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          .print\\:m-0 {
            margin: 0 !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }
          h1 {
            font-size: 18px !important;
            margin-bottom: 4px !important;
          }
          h2 {
            font-size: 16px !important;
            margin-top: 12px !important;
            margin-bottom: 8px !important;
          }
          h3 {
            font-size: 14px !important;
            margin-top: 10px !important;
            margin-bottom: 6px !important;
          }
          ul, li {
            margin-bottom: 4px !important;
          }
          @page {
            margin: 1cm;
            size: A4;
          }
        }
        a.underline, a.underline:visited {
          text-decoration: underline;
        }
        /* Highlight color for links on hover/focus */
        a.underline:hover, a.underline:focus {
          color: #2563eb !important;
        }
        /* Base text color for underlined links in dark mode */
        .dark a.underline, .dark a.underline:visited {
          color: #67e8f9 !important;
        }
        .dark a.underline:hover, .dark a.underline:focus {
          color: #67e8f9 !important;
        }
      `}</style>

      <div className="print:flex print:flex-col print:gap-1 mt-8 md:mt-12">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 print:mb-2"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 print:hidden">
            Artist CV
          </p>
          <h1 className="text-3xl font-bold mb-1 print:text-2xl">{cvData.name}</h1>
          <h2 className="text-xl mb-4 print:text-lg print:mb-2">{cvData.title}</h2>
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 print:gap-4 mb-2">
            <a
              href={moisesSanabriaHeadshot}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 print:w-20 print:h-20"
              title="Download headshot (opens full resolution)"
            >
              <Image
                src={moisesSanabriaHeadshot}
                alt="Moises Sanabria — professional headshot"
                fill
                className="object-cover"
                sizes="96px"
              />
            </a>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 print:text-xs">
              <p>
                <span className="font-medium text-gray-900 dark:text-white">Website: </span>
                <Link
                  href={cvData.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-[#67e8f9]"
                >
                  {cvData.contact.website.replace(/^https?:\/\/(www\.)?/, '')}
                </Link>
              </p>
              <p>
                <span className="font-medium text-gray-900 dark:text-white">Email: </span>
                <Link
                  href={`mailto:${cvData.contact.email}`}
                  className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-[#67e8f9]"
                >
                  {cvData.contact.email}
                </Link>
              </p>
              {cvData.contact.socialMedia.map((social) => (
                <p key={social.platform}>
                  <span className="font-medium text-gray-900 dark:text-white">{social.platform}: </span>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-[#67e8f9]"
                  >
                    {social.url.replace(/^https?:\/\/(www\.)?/, '')}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </motion.header>

        <CvCollapsibleSection id="education" title="Education" defaultOpen>
          <ul className="space-y-3 print:space-y-1">
            {cvData.education.map((edu, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{edu.year}</div>
                <div className="flex-1 print:text-xs">
                  <div>{edu.institution}</div>
                  <div className="text-gray-600 dark:text-gray-400">{edu.location}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CvCollapsibleSection>

        <CvCollapsibleSection id="experience" title="Professional Experience" defaultOpen={false}>
          <ul className="space-y-5 print:space-y-2">
            {cvData.experience.map((exp, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{exp.period}</div>
                <div className="flex-1 print:text-xs">
                  <div className="font-medium">{exp.role}, {exp.employer}</div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1 print:mt-0">{exp.details}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CvCollapsibleSection>

        <CvCollapsibleSection id="publications" title="Publications" defaultOpen={false}>
          <ul className="space-y-3 print:space-y-1">
            {cvData.publications.map((pub, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{pub.year}</div>
                <div className="flex-1 print:text-xs">
                  <InteractiveLink 
                    title={pub.title} 
                    url={pub.link} 
                    interactiveContent={pub.interactiveContent}
                  />
                  <InteractiveDescription 
                    details={pub.details} 
                    interactiveContent={pub.interactiveContent}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </CvCollapsibleSection>

        <CvCollapsibleSection id="grants-awards" title="Grants and Awards" defaultOpen={false}>
          <ul className="space-y-3 print:space-y-1">
            {cvData.grants.map((grant, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{grant.year}</div>
                <div className="flex-1 print:text-xs">{grant.title}</div>
              </motion.li>
            ))}
            {cvData.awards.map((award, index) => (
              <motion.li 
                key={`award-${index}`} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs"></div>
                <div className="flex-1 print:text-xs">
                  <InteractiveLink 
                    title={`${award.title} — ${award.category} — ${award.project}`} 
                    url={award.url} 
                    interactiveContent={award.interactiveContent}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </CvCollapsibleSection>

        <CvCollapsibleSection id="exhibitions" title="Exhibitions" defaultOpen>

          {process.env.NODE_ENV === 'development' && airtableError ? (
            <p className="text-xs text-red-600 mb-2">{airtableError}</p>
          ) : null}

          {hasAirtableExhibitions ? (
            <>
              <h3 className="text-lg font-medium mb-3 pl-2">Selected Exhibitions</h3>
              <CvExhibitionsSection
                exhibitionsByYear={airtableExhibitions}
                listItemVariants={listItemVariants}
              />
            </>
          ) : (
            <>
              <h3 className="text-lg font-medium mb-3 pl-2">Collective</h3>
              <ul className="space-y-3 print:space-y-1 mb-6">
                {cvData.exhibitions.collective.map((exhibition, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={listItemVariants}
                    className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
                  >
                    <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">
                      {exhibition.year}
                    </div>
                    <div className="flex-1 print:text-xs">
                      <InteractiveLink
                        title={exhibition.title}
                        url={exhibition.url}
                        interactiveContent={exhibition.interactiveContent}
                      />
                      <div className="text-gray-600 dark:text-gray-400">{exhibition.location}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </>
          )}
          
          <h3 className="text-lg font-medium mb-3 pl-2">Screenings</h3>
          <ul className="space-y-3 print:space-y-1 mb-6">
            {cvData.exhibitions.screening.map((screening, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{screening.year}</div>
                <div className="flex-1 print:text-xs">
                  <InteractiveLink 
                    title={screening.title} 
                    url={screening.url} 
                    interactiveContent={screening.interactiveContent}
                  />
                  <div className="text-gray-600 dark:text-gray-400">{screening.location}</div>
                </div>
              </motion.li>
            ))}
          </ul>
          
          <h3 className="text-lg font-medium mb-3 pl-2">Online</h3>
          <ul className="space-y-3 print:space-y-1">
            {cvData.exhibitions.online.map((online, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{online.year}</div>
                <div className="flex-1 print:text-xs">
                  <InteractiveLink 
                    title={online.title} 
                    url={online.url} 
                    interactiveContent={online.interactiveContent}
                  />
                  <div className="text-gray-600 dark:text-gray-400">{online.location}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CvCollapsibleSection>

        <CvCollapsibleSection id="talks" title="Talks and Lectures" defaultOpen={false}>
          <ul className="space-y-3 print:space-y-1">
            {cvData.talks.map((talk, index) => (
              <motion.li 
                key={index} 
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                variants={listItemVariants}
                className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
              >
                <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{talk.year}</div>
                <div className="flex-1 print:text-xs">
                  <InteractiveLink 
                    title={talk.title} 
                    url={talk.url} 
                    interactiveContent={talk.interactiveContent}
                  />
                  <div className="text-gray-600 dark:text-gray-400">{talk.location}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CvCollapsibleSection>

        <CvCollapsibleSection id="press" title="Press and Media" defaultOpen={false}>
          {cvData.press.map((pressYear, yearIndex) => (
            <div key={yearIndex} className="mb-8 print:mb-4">
              <h3 className="text-lg font-medium mb-3 pl-2">{pressYear.year}</h3>
              <ul className="space-y-4 print:space-y-2">
                {pressYear.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    custom={itemIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={listItemVariants}
                    className="p-2 rounded-md transition-colors"
                  >
                    <div className="font-medium mb-2">{item.project}</div>
                    {item.publications ? (
                      <ul className="pl-4 space-y-1 print:space-y-0">
                        {item.publications.map((pub, pubIndex) => (
                          <li key={pubIndex} className="text-sm print:text-xs">
                            {pub.url ? (
                              <Link 
                                href={pub.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                <span className="font-medium">{pub.name}</span> — &ldquo;{pub.title}&rdquo;
                              </Link>
                            ) : (
                              <span>
                                <span className="font-medium">{pub.name}</span> — &ldquo;{pub.title}&rdquo;
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm print:text-xs">
                        {'url' in item && 'interactiveContent' in item ? (
                          <InteractiveLink 
                            title={`${item.publication} — "${item.title}"`} 
                            url={item.url} 
                            interactiveContent={item.interactiveContent}
                          />
                        ) : (
                          <span>
                            <span className="font-medium">{item.publication}</span> — &ldquo;{item.title}&rdquo;
                          </span>
                        )}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </CvCollapsibleSection>
      </div>
      
      <div className="mt-10 flex flex-wrap gap-3 print:hidden">
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05, backgroundColor: isDark ? "#4B5563" : "#333" }}
          onClick={() => window.print()} 
          className="px-4 py-2 bg-black dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          Print artist CV
        </motion.button>
        <Link
          href="/cv/tech"
          className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Technology CV (engineering roles)
        </Link>
      </div>
    </div>
  );
};

export default CvClientPage; 