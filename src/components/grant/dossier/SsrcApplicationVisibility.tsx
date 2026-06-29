'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  dossierTypography,
  grantCardClass,
  grantLinkClass,
  StatusPill,
} from '@/components/grant/dossier/GrantDossierUi';
import {
  ssrcAiUseDisclosure,
  ssrcApplicationAnswerCards,
  ssrcApplicationAnswersIntro,
  ssrcApplicationMaterialsDashboard,
  ssrcPersonalStatement,
  ssrcSupportingProjectPage,
  ssrcWorkProposal,
  type SsrcApplicationMaterialRow,
} from '@/content/grants/ssrc-just-tech-fellowship-2027';

function MaterialStatusPill({ status }: { status: SsrcApplicationMaterialRow['status'] }) {
  const mapped =
    status === 'Pending PDF' || status === 'Needs gathering' || status === 'Needs recording'
      ? ('Needs edit' as const)
      : status === 'Drafted'
        ? ('Drafting' as const)
        : status;
  return <StatusPill status={mapped} />;
}

export function ApplicationAnswersIndex({
  onNavigate,
}: {
  onNavigate: (zoneId: string) => void;
}) {
  return (
    <div>
      <p className={cn(dossierTypography.body, dossierTypography.prose)}>{ssrcApplicationAnswersIntro}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {ssrcApplicationAnswerCards.map((card) => (
          <article key={card.id} className={cn('flex flex-col p-4 sm:p-5', grantCardClass)}>
            <p className={dossierTypography.eyebrow}>{card.prompt}</p>
            <h3 className={cn('mt-2 text-base font-semibold text-stone-900 dark:text-stone-100')}>{card.label}</h3>
            <p className={cn('mt-3 flex-1', dossierTypography.body)}>{card.preview}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate(card.zoneTarget)} className={grantLinkClass}>
                Read full answer →
              </button>
              {card.pdfPath ? (
                <Link href={card.pdfPath} className={cn('text-sm', grantLinkClass)}>
                  PDF (when ready)
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PersonalStatementSection() {
  return (
    <div id="personal-statement" className="mt-12">
      <p className={dossierTypography.eyebrow}>Full application response</p>
      <h3 className={cn('mt-2', dossierTypography.h3)}>{ssrcPersonalStatement.label}</h3>
      <p className={cn('mt-1', dossierTypography.meta)}>{ssrcPersonalStatement.prompt}</p>
      <p className={cn('mt-4', dossierTypography.body, dossierTypography.prose)}>{ssrcPersonalStatement.summary}</p>
      <details className={cn('mt-4', grantCardClass)}>
        <summary className={cn('cursor-pointer px-4 py-3 font-medium text-stone-900 dark:text-stone-100', dossierTypography.meta)}>
          Read full personal statement
        </summary>
        <div className={cn('space-y-4 border-t border-stone-200 px-4 py-4 dark:border-stone-700', dossierTypography.body)}>
          {ssrcPersonalStatement.fullParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </details>
      {ssrcPersonalStatement.pdfPath ? (
        <p className={cn('mt-3', dossierTypography.meta)}>
          PDF:{' '}
          <Link href={ssrcPersonalStatement.pdfPath} className={grantLinkClass}>
            {ssrcPersonalStatement.pdfPath}
          </Link>{' '}
          (upload when final)
        </p>
      ) : null}
    </div>
  );
}

export function WorkProposalAccordion() {
  return (
    <div id="work-proposal" className="mt-12">
      <p className={dossierTypography.eyebrow}>Full application response</p>
      <details className={grantCardClass}>
        <summary className={cn('cursor-pointer px-4 py-3 font-semibold text-stone-900 dark:text-stone-100', dossierTypography.meta)}>
          {ssrcWorkProposal.label}
        </summary>
        <div className="border-t border-stone-200 px-4 py-4 dark:border-stone-700">
          <p className={cn(dossierTypography.meta)}>{ssrcWorkProposal.prompt}</p>
          <p className={cn('mt-4', dossierTypography.body)}>{ssrcWorkProposal.summary}</p>
          <div className="mt-6 space-y-6">
            {ssrcWorkProposal.sections.map((section) => (
              <div key={section.id}>
                <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{section.label}</h4>
                <p className={cn('mt-1', dossierTypography.meta)}>{section.prompt}</p>
                <p className={cn('mt-3', dossierTypography.body)}>{section.answer}</p>
              </div>
            ))}
          </div>
          {ssrcWorkProposal.pdfPath ? (
            <p className={cn('mt-6', dossierTypography.meta)}>
              PDF:{' '}
              <Link href={ssrcWorkProposal.pdfPath} className={grantLinkClass}>
                {ssrcWorkProposal.pdfPath}
              </Link>{' '}
              (upload when final)
            </p>
          ) : null}
        </div>
      </details>
    </div>
  );
}

export function AiUseDisclosureBlock() {
  return (
    <div id="ai-use-disclosure" className={cn('mt-12 p-5', grantCardClass)}>
      <p className={dossierTypography.eyebrow}>Application requirement</p>
      <h3 className={cn('mt-2', dossierTypography.h3)}>{ssrcAiUseDisclosure.label}</h3>
      <p className={cn('mt-1', dossierTypography.meta)}>{ssrcAiUseDisclosure.prompt}</p>
      <p className={cn('mt-4', dossierTypography.body, dossierTypography.prose)}>{ssrcAiUseDisclosure.text}</p>
    </div>
  );
}

export function SupportingProjectPageBlock() {
  return (
    <div className={cn('mt-12 p-5', grantCardClass)}>
      <p className={dossierTypography.eyebrow}>For reviewers</p>
      <h3 className={cn('mt-2', dossierTypography.h3)}>{ssrcSupportingProjectPage.label}</h3>
      <p className={cn('mt-1', dossierTypography.meta)}>{ssrcSupportingProjectPage.prompt}</p>
      <p className={cn('mt-4', dossierTypography.body, dossierTypography.prose)}>{ssrcSupportingProjectPage.summary}</p>
      <ul className={cn('mt-4 space-y-2', dossierTypography.body)}>
        <li>
          Primary:{' '}
          <Link href={ssrcSupportingProjectPage.primaryUrl} className={grantLinkClass}>
            {ssrcSupportingProjectPage.primaryUrl}
          </Link>
        </li>
        <li>
          Short URL:{' '}
          <Link href={ssrcSupportingProjectPage.shortUrl} className={grantLinkClass}>
            {ssrcSupportingProjectPage.shortUrl}
          </Link>
        </li>
        {ssrcSupportingProjectPage.archiveLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={grantLinkClass}>
              {link.label}
            </Link>
            {link.status === 'coming-soon' ? (
              <span className={cn('ml-2 text-xs', dossierTypography.meta)}>(coming soon)</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ApplicationMaterialsDashboard({
  onNavigate,
}: {
  onNavigate: (zoneId: string) => void;
}) {
  return (
    <div>
      <div className="space-y-3 md:hidden">
        {ssrcApplicationMaterialsDashboard.map((row) => (
          <article key={row.id} className={cn('p-4', grantCardClass)}>
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{row.label}</p>
              <MaterialStatusPill status={row.status} />
            </div>
            <p className={cn('mt-2', dossierTypography.meta)}>{row.requirement}</p>
            <p className={cn('mt-2', dossierTypography.body)}>{row.notes}</p>
            <div className="mt-3">
              {row.pdfPath ? (
                <Link href={row.pdfPath} className={cn('text-sm', grantLinkClass)}>
                  PDF slot →
                </Link>
              ) : row.zoneTarget ? (
                <button type="button" onClick={() => onNavigate(row.zoneTarget!)} className={cn('text-sm', grantLinkClass)}>
                  On this page →
                </button>
              ) : row.inlineText ? (
                <span className={cn('text-sm', dossierTypography.meta)}>Visible below</span>
              ) : (
                <span className={cn('text-sm', dossierTypography.meta)}>—</span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-stone-300 dark:border-stone-600">
            <th className={cn('py-3 pr-4 font-semibold', dossierTypography.eyebrow)}>Material</th>
            <th className={cn('py-3 pr-4 font-semibold', dossierTypography.eyebrow)}>Requirement</th>
            <th className={cn('py-3 pr-4 font-semibold', dossierTypography.eyebrow)}>Status</th>
            <th className={cn('py-3 pr-4 font-semibold', dossierTypography.eyebrow)}>Link / file</th>
            <th className={cn('py-3 font-semibold', dossierTypography.eyebrow)}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {ssrcApplicationMaterialsDashboard.map((row) => (
            <tr key={row.id} className="border-b border-stone-200 dark:border-stone-800">
              <td className="py-4 pr-4 align-top font-medium text-stone-900 dark:text-stone-100">{row.label}</td>
              <td className={cn('py-4 pr-4 align-top', dossierTypography.meta)}>{row.requirement}</td>
              <td className="py-4 pr-4 align-top">
                <MaterialStatusPill status={row.status} />
              </td>
              <td className="py-4 pr-4 align-top">
                {row.pdfPath ? (
                  <Link href={row.pdfPath} className={cn('text-sm', grantLinkClass)}>
                    PDF slot
                  </Link>
                ) : row.zoneTarget ? (
                  <button type="button" onClick={() => onNavigate(row.zoneTarget!)} className={cn('text-sm', grantLinkClass)}>
                    On this page →
                  </button>
                ) : row.inlineText ? (
                  <span className={cn('text-sm', dossierTypography.meta)}>Visible below</span>
                ) : (
                  <span className={cn('text-sm', dossierTypography.meta)}>—</span>
                )}
              </td>
              <td className={cn('py-4 align-top', dossierTypography.meta)}>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
