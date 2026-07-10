'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { bitmConditionTimeline } from '@/content/born-into-the-machine/bitm-keywords';
import { bitmPage } from '@/content/born-into-the-machine/bitm-page';
import { getBitmChapterAccent } from '@/config/born-into-the-machine-theme';
import { BitmSectionHeader } from '@/components/born-into-the-machine/BitmSectionHeader';
import { BitmConceptualIcon } from '@/components/born-into-the-machine/icons/BitmConceptualIcons';
import { BitmLaborReveal } from '@/components/born-into-the-machine/BitmLaborReveal';
import { useBitm, useBitmChapterObserver } from '@/components/born-into-the-machine/BitmContext';

export function BitmConditionTimeline() {
  const ref = useRef<HTMLElement>(null);
  useBitmChapterObserver('condition', ref);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const { reducedMotion } = useBitm();
  const accent = getBitmChapterAccent('condition');

  return (
    <section
      id="condition"
      ref={ref}
      className="mb-16 scroll-mt-44 border-b border-[#dedede] pb-16 dark:border-neutral-800 md:mb-20 md:pb-20 md:scroll-mt-52"
    >
      <BitmSectionHeader
        eyebrow="Chapter 02"
        title="The Condition"
        iconKey="model"
        accent={accent}
      />
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#111111] dark:text-neutral-200">
        {bitmPage.conditionIntro}
      </p>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {bitmConditionTimeline.map((item, index) => (
          <motion.li
            key={item.id}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={inView || reducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reducedMotion ? 0 : index * 0.08, duration: 0.4 }}
            className="flex items-center gap-3 border border-[#dedede] bg-white/80 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-950/80"
          >
            <span className={accent.iconTint}>
              <BitmConceptualIcon iconKey={item.iconKey} />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#111111] dark:text-neutral-200">
              {item.label}
            </span>
          </motion.li>
        ))}
      </ol>

      <BitmLaborReveal chapterId="condition" />
    </section>
  );
}
