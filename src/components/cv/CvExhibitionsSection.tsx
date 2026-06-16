'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { formatExhibitionLocation } from '@/lib/cv/format';
import type { CVExhibition } from '@/types/cv';

type CvExhibitionsSectionProps = {
  exhibitionsByYear: Record<string, CVExhibition[]>;
  listItemVariants: Variants;
};

export default function CvExhibitionsSection({
  exhibitionsByYear,
  listItemVariants,
}: CvExhibitionsSectionProps) {
  let itemIndex = 0;

  return (
    <ul className="space-y-3 print:space-y-1 mb-6">
      {Object.entries(exhibitionsByYear).map(([year, exhibitions]) =>
        exhibitions.map((exhibition) => {
          const index = itemIndex++;
          const location = formatExhibitionLocation(exhibition);

          return (
            <motion.li
              key={exhibition.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              variants={listItemVariants}
              className="flex flex-col sm:flex-row print:flex-row p-2 rounded-md transition-colors"
            >
              <div className="w-full sm:w-32 font-medium print:w-24 print:text-xs">{year}</div>
              <div className="flex-1 print:text-xs">
                {exhibition.url ? (
                  <Link
                    href={exhibition.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-blue-600 dark:text-[#67e8f9] dark:hover:text-[#67e8f9] transition-colors"
                  >
                    <em>{exhibition.title}</em>, {location}
                  </Link>
                ) : (
                  <span className="font-medium">
                    <em>{exhibition.title}</em>, {location}
                  </span>
                )}
                {exhibition.publicDescription ? (
                  <div className="text-gray-600 dark:text-gray-400 mt-1 print:mt-0">
                    {exhibition.publicDescription}
                  </div>
                ) : null}
              </div>
            </motion.li>
          );
        }),
      )}
    </ul>
  );
}
