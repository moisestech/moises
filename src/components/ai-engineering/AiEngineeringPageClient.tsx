'use client';

import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { CopyBlurbButton } from '@/components/ai-engineering/CopyBlurbButton';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityHero } from '@/components/opportunities/OpportunityHero';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { InnovationProcess } from '@/components/opportunities/InnovationProcess';
import { RoleMatchMatrix } from '@/components/opportunities/RoleMatchMatrix';
import { SkillsMatrix } from '@/components/opportunities/SkillsMatrix';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { ProofProjectsGrid } from '@/components/ai-engineering/ProofProjectsGrid';
import { RecruiterSnapshotSection } from '@/components/ai-engineering/RecruiterSnapshotSection';
import { opp } from '@/components/opportunities/opportunityTheme';
import { aiEngineeringDossier } from '@/content/ai-engineering/dossier';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

function trackCta(kind: string) {
  track('ai_engineering_cta_click', { kind });
}

export function AiEngineeringPageClient() {
  const dossier = aiEngineeringDossier;
  const { proofProjects, recruiterSnapshot, recruiterBlurb, recruiterLinksBlock, careerPacketPath, fullDossierPath } =
    aiEngineeringPacket;

  return (
    <OpportunityShell navItems={dossier.navItems}>
      <>
        <OpportunityApplicationBanner banner={dossier.applicationBanner} />
        <main className={cn(opp.main, 'pt-4 sm:pt-6')}>
          {dossier.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={dossier.audienceKeywords} />
          ) : null}
          <OpportunityHero opportunity={dossier} />
          <RecruiterSnapshotSection rows={[...recruiterSnapshot]} />
          <RoleMatchMatrix opportunity={dossier} />
          <SkillsMatrix opportunity={dossier} />
          <ProofProjectsGrid
            projects={[...proofProjects]}
            intro={dossier.caseStudiesIntro}
            title={dossier.caseStudiesSectionTitle ?? 'Proof projects'}
          />
          <InnovationProcess opportunity={dossier} sectionId="process" />
          <section id="packet" className={opp.section} aria-labelledby="packet-heading">
            <h2 id="packet-heading" className={opp.h2}>
              Recruiter packet
            </h2>
            <p className={`mt-2 max-w-3xl ${opp.muted}`}>
              Copy-ready blurb and links for Gmail replies. Full forwardable hub at{' '}
              <Link href={careerPacketPath} className={opp.linkAccent} onClick={() => trackCta('career_packet')}>
                /career-packet
              </Link>
              . Deeper role dossier:{' '}
              <Link href={fullDossierPath} className={opp.linkAccent} onClick={() => trackCta('full_dossier')}>
                GenAI engineering dossier
              </Link>
              .
            </p>
            <blockquote className={`${opp.callout} mt-6 max-w-3xl`}>
              <p className={opp.body}>{recruiterBlurb}</p>
            </blockquote>
            <CopyBlurbButton text={recruiterBlurb} onCopy={() => trackCta('copy_blurb')} />
            <div className={`${opp.callout} mt-6 max-w-3xl`}>
              <p className={opp.label}>Send-ready link block</p>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                {recruiterLinksBlock}
              </pre>
              <CopyBlurbButton
                text={recruiterLinksBlock}
                className="mt-3"
                onCopy={() => trackCta('copy_links')}
              />
            </div>
            <div className="mt-6">
              <Link href={careerPacketPath} className={opp.btnSecondary} onClick={() => trackCta('career_packet_cta')}>
                <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
                Open career packet
              </Link>
            </div>
          </section>
          <ResumeCTA opportunity={dossier} />
        </main>
      </>
    </OpportunityShell>
  );
}
