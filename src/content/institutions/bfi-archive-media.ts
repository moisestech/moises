/**
 * BFI archive case-study media.
 *
 * Historical diagrams in Cloudinary use authenticated delivery.
 * Their signed URLs live only in private/bfi-archive-asset-inventory.json
 * (gitignored). Do not render those assets on this site.
 */

export const BFI_ARCHIVE_CLOUD_NAME = 'dck5rzi4h';

export const BFI_ARCHIVE_ROOT = 'art/moisestech-website/tech-nonprofit/bfi-archive';

export type BfiDelivery = 'authenticated' | 'upload';

export type BfiAssetStatus =
  | 'historical-reference'
  | 'missing'
  | 'approved';

export interface BfiMediaAsset {
  id: string;
  publicId: string;
  assetId: string;
  width: number;
  height: number;
  format: 'png';
  bytes: number;
  delivery: BfiDelivery;
  folder: string;
  status: BfiAssetStatus;
  evidenceDate: string;
  alt: string;
  note: string;
}

/** Private design references. Not current evidence. Not for public delivery. */
export const BFI_HISTORICAL_REFERENCES: readonly BfiMediaAsset[] = [
  {
    id: 'reference.archive-relationship-map-2026-09-13',
    publicId: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference/archive-relationship-map-2026-09-13`,
    assetId: '26ac1a38472a00ce4e7ae55ca617f5c4',
    width: 1672,
    height: 941,
    format: 'png',
    bytes: 1964690,
    delivery: 'authenticated',
    folder: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference`,
    status: 'historical-reference',
    evidenceDate: '2026-09-13',
    alt: 'Historical BFI archive relationship map from 13 September 2026.',
    note: 'Superseded on the review page by the schema-backed relationship diagram. September 13 map was not reused.',
  },
  {
    id: 'reference.migration-status-2026-09-13',
    publicId: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference/migration-status-2026-09-13`,
    assetId: 'a2188fef466aba63fd051164f5354840',
    width: 1920,
    height: 1080,
    format: 'png',
    bytes: 86236,
    delivery: 'authenticated',
    folder: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference`,
    status: 'historical-reference',
    evidenceDate: '2026-09-13',
    alt: 'Historical BFI migration status diagram from 13 September 2026.',
    note: 'Status wording is stale. The review page draws the 2 October 2026 architecture in code.',
  },
  {
    id: 'reference.data-ownership-model-2026-07-30',
    publicId: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference/data-ownership-model-2026-07-30`,
    assetId: '906ef808f4ae9379980692576b077b31',
    width: 1672,
    height: 941,
    format: 'png',
    bytes: 1395899,
    delivery: 'authenticated',
    folder: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference`,
    status: 'historical-reference',
    evidenceDate: '2026-07-30',
    alt: 'Proposed BFI data ownership flowchart from 30 July 2026.',
    note: 'Proposed model only. File ownership is not resolved.',
  },
  {
    id: 'reference.strategy-roadmap-2026-07-24',
    publicId: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference/strategy-roadmap-2026-07-24`,
    assetId: 'e717fa74489fbeecc29c8ef3f86a5967',
    width: 1672,
    height: 941,
    format: 'png',
    bytes: 1544833,
    delivery: 'authenticated',
    folder: `${BFI_ARCHIVE_ROOT}/90-drafts-archive/reference`,
    status: 'historical-reference',
    evidenceDate: '2026-07-24',
    alt: 'Earlier BFI archive planning roadmap from 24 July 2026.',
    note: 'Planning reference. Not used on the review page.',
  },
] as const;

export const BFI_APPROVED_FOLDERS = {
  problem: `${BFI_ARCHIVE_ROOT}/01-problem/`,
  approach: `${BFI_ARCHIVE_ROOT}/02-approach/`,
  architecture: `${BFI_ARCHIVE_ROOT}/03-architecture/`,
  evidence: `${BFI_ARCHIVE_ROOT}/04-evidence/`,
  dataModel: `${BFI_ARCHIVE_ROOT}/05-data-model/`,
} as const;

/** Slots the review page can render once an approved public asset exists. */
export const BFI_PENDING_SLOTS = [
  {
    id: 'problem.original-pain',
    folder: BFI_APPROVED_FOLDERS.problem,
    title: 'The archive existed. The connections needed work.',
    status: 'missing' as const,
  },
  {
    id: 'approach.workbench',
    folder: BFI_APPROVED_FOLDERS.approach,
    title: 'Preserve the source. Connect the records. Review the questions.',
    status: 'missing' as const,
  },
  {
    id: 'evidence.dear-miami-montage',
    folder: BFI_APPROVED_FOLDERS.evidence,
    title: 'Dear Miami source, structured record, website, and redacted review excerpt.',
    status: 'missing' as const,
  },
] as const;
