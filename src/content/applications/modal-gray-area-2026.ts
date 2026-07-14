/**
 * Private application paste copy for Modal × Gray Area 2026.
 * Copy into https://modal.art/ — not a public UI.
 */
import { modalGrayAreaMeta } from '@/content/grants/modal-gray-area-2026/meta';
import {
  modalGrayAreaArtistStatement,
} from '@/content/grants/modal-gray-area-2026/shared';
import { machineSentenceProjectStatement } from '@/content/grants/modal-gray-area-2026/machine-sentence-no-1';
import { cvData } from '@/constants/cv';

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
  projectStatement: machineSentenceProjectStatement,
  awardSummary: [
    modalGrayAreaMeta.honorarium,
    modalGrayAreaMeta.production,
    modalGrayAreaMeta.compute,
  ],
} as const;

export const modalGrayAreaArtistStatementWordCount = modalGrayAreaArtistStatement
  .split(/\s+/)
  .filter(Boolean).length;
