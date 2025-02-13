'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Partner {
  name: string;
  logo: string;
}

interface PartnerCategory {
  title: string;
  partners: Partner[];
}

// Placeholder data - this should eventually come from artist.ts
const partnerData: PartnerCategory[] = [
  {
    title: 'Free Admission Partner',
    partners: [
      { name: 'Bakehouse Art Complex', logo: '/partners/bac-logo.jpg' },
    ],
  },
  {
    title: 'Exhibition Support',
    partners: [
      { name: 'Bakehouse Art Complex', logo: '/partners/bac-logo.jpg' },
    ],
  },
  {
    title: 'Neighborhood Partner',
    partners: [
      {
        name: 'Miami-Dade County Department of Cultural Affairs',
        logo: '/partners/mia-date-cultural-affairs.avif',
      },
    ],
  },
  {
    title: 'Leadership Partner',
    partners: [
      { name: 'Bakehouse Art Complex', logo: '/partners/bac-logo.jpg' },
    ],
  },
];

// Flatten all partners into a single array
const allPartners = partnerData.flatMap((category) =>
  category.partners.map((partner) => ({
    ...partner,
    category: category.title,
  }))
);

export default function SpecialThanks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allPartners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentPartner = allPartners[currentIndex];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-md font-['MoMA_Sans'] text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Moises would like to thank our major partners
        </motion.h2>

        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPartner.name + '-container'}
              className="flex justify-start items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-48 h-[100px] relative bg-white dark:bg-black rounded-sm">
                <Image
                  src={currentPartner.logo}
                  alt={currentPartner.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </motion.div>

            <motion.h3
              key={currentPartner.category + '-title'}
              className="text-xl md:text-2xl font-bold text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentPartner.category}
            </motion.h3>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
