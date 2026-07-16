/**
 * Private application paste copy for Modal × Gray Area 2026.
 * Copy into https://modal.art/ — not a public UI.
 */
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import { modalGrayAreaArtistStatement } from '@/content/grants/modal-gray-area-2026/shared';
import { incompleteContainmentProjectStatement } from '@/content/grants/modal-gray-area-2026/incomplete-containment-of-a-model';
import { cvData } from '@/constants/cv';

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function charCount(text: string): number {
  return text.length;
}

/** Paste into Modal application — Project description */
export const modalGrayAreaProjectDescription = incompleteContainmentProjectStatement.projectDescription;

/** Paste into Modal application — Explain the project's relationship with AI */
export const modalGrayAreaRelationshipWithAi = incompleteContainmentProjectStatement.relationshipWithAi;

/** Paste into Modal application — Why participate in this show */
export const modalGrayAreaWhyParticipate = incompleteContainmentProjectStatement.whyParticipate;

export const modalGrayArea2026Application = {
  callId: modalGrayAreaMeta.callId,
  deadline: modalGrayAreaMeta.deadline,
  applyUrl: modalGrayAreaMeta.applyUrl,
  callPageUrl: modalGrayAreaMeta.callPageUrl,
  hubUrl: `https://moises.tech${modalGrayAreaMeta.hubRoute}`,
  proposalUrl: `https://moises.tech${modalGrayAreaMeta.proposalRoute}`,
  email: cvData.contact.email,
  website: cvData.contact.website,
  artistStatement: modalGrayAreaArtistStatement,
  answers: {
    projectDescription: {
      prompt: 'Project description',
      text: modalGrayAreaProjectDescription,
      wordCount: wordCount(modalGrayAreaProjectDescription),
      charCount: charCount(modalGrayAreaProjectDescription),
    },
    relationshipWithAi: {
      prompt: "Explain the project's relationship with AI",
      text: modalGrayAreaRelationshipWithAi,
      wordCount: wordCount(modalGrayAreaRelationshipWithAi),
      charCount: charCount(modalGrayAreaRelationshipWithAi),
    },
    whyParticipate: {
      prompt: 'Why participate in this show',
      text: modalGrayAreaWhyParticipate,
      wordCount: wordCount(modalGrayAreaWhyParticipate),
      charCount: charCount(modalGrayAreaWhyParticipate),
    },
  },
  awardSummary: [
    modalGrayAreaMeta.honorarium,
    modalGrayAreaMeta.production,
    modalGrayAreaMeta.compute,
  ],
} as const;

export const modalGrayAreaArtistStatementWordCount = wordCount(modalGrayAreaArtistStatement);
export const modalGrayAreaArtistStatementCharCount = charCount(modalGrayAreaArtistStatement);

export const modalGrayAreaAnswerWordCounts = {
  projectDescription: modalGrayArea2026Application.answers.projectDescription.wordCount,
  relationshipWithAi: modalGrayArea2026Application.answers.relationshipWithAi.wordCount,
  whyParticipate: modalGrayArea2026Application.answers.whyParticipate.wordCount,
} as const;

export const modalGrayAreaAnswerCharCounts = {
  projectDescription: modalGrayArea2026Application.answers.projectDescription.charCount,
  relationshipWithAi: modalGrayArea2026Application.answers.relationshipWithAi.charCount,
  whyParticipate: modalGrayArea2026Application.answers.whyParticipate.charCount,
} as const;

/** @deprecated Use modalGrayArea2026Application.answers */
export const modalGrayAreaProjectStatement = incompleteContainmentProjectStatement;
