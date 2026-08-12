'use client';

import type { Opportunity } from '@/content/opportunities/types';
import { opp } from '@/components/opportunities/opportunityTheme';

type Props = {
  opportunity: Opportunity;
  framed?: boolean;
};

export function OpportunityApplicationAnswers({ opportunity, framed = false }: Props) {
  const { applicationAnswers, applicationAnswersSectionTitle, applicationAnswersIntro } =
    opportunity;
  if (!applicationAnswers?.length) return null;

  return (
    <section id="application-answers" className={framed ? 'scroll-mt-32' : opp.section}>
      <h2 className={opp.h2}>
        {applicationAnswersSectionTitle ?? 'Application answers'}
      </h2>
      {applicationAnswersIntro ? (
        <p className={`mt-3 max-w-3xl ${opp.body}`}>{applicationAnswersIntro}</p>
      ) : null}
      <dl className="mt-8 space-y-6">
        {applicationAnswers.map((item) => (
          <div
            key={item.question}
            className="border-t border-stone-200/80 pt-5 dark:border-stone-700/60"
          >
            <dt className={`text-sm font-medium ${opp.label}`}>{item.question}</dt>
            <dd className={`mt-2 max-w-3xl text-sm leading-relaxed sm:text-base ${opp.body}`}>
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
