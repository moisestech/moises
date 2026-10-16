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

const CDN = `https://res.cloudinary.com/${BFI_ARCHIVE_CLOUD_NAME}/image/upload`;

/** Institutional accents already used on the site. */
export const BFI_SYSTEMS = {
  cargo: { label: 'Cargo', accent: 'copper' },
  airtable: { label: 'Airtable', accent: 'teal' },
  webflow: { label: 'Webflow', accent: 'violet' },
  files: { label: 'Preserved files', accent: 'emerald' },
  tooling: { label: 'Tooling', accent: 'ink' },
} as const;

export type BfiSystemId = keyof typeof BFI_SYSTEMS;

export interface BfiPageImage {
  id: string;
  publicId: string;
  assetId: string;
  width: number;
  height: number;
  bytes: number;
  alt: string;
  caption: string;
  src: string;
}

function pageImage(
  image: Omit<BfiPageImage, 'src'> & { version: string; transform?: string },
): BfiPageImage {
  const transform = image.transform ?? 'c_limit,w_1600,f_auto,q_auto';
  return {
    id: image.id,
    publicId: image.publicId,
    assetId: image.assetId,
    width: image.width,
    height: image.height,
    bytes: image.bytes,
    alt: image.alt,
    caption: image.caption,
    src: `${CDN}/${transform}/v${image.version}/${image.publicId}.png`,
  };
}

/**
 * Public uploads in bas-fisher-invitational/, added 16 October 2026.
 * Address bars are cropped in the delivery URL. Originals are not overwritten.
 */
export const BFI_PAGE_IMAGES = {
  logo: pageImage({
    id: 'logo',
    publicId: 'bas-fisher-invitational/bfi-logo_aksmut',
    assetId: 'fa21f1697d9a07625b635cbbdf444f8f',
    width: 224,
    height: 224,
    bytes: 5119,
    version: '1792166656',
    transform: 'f_auto,q_auto',
    alt: 'Bas Fisher Invitational',
    caption: 'Bas Fisher Invitational mark.',
  }),
  cover: pageImage({
    id: 'cover',
    publicId: 'bas-fisher-invitational/BFI_Archive_Migration_Cover_amt7mf',
    assetId: '7957783db274f19134bba7396cfc1c01',
    width: 1536,
    height: 1024,
    bytes: 1982045,
    version: '1792166656',
    alt: 'Illustration of loose photographs and film frames gathering into archive drawers.',
    caption: 'Illustration. Scattered records being gathered. Not a photograph of the archive.',
  }),
  cargoFiles: pageImage({
    id: 'cargo-files',
    publicId: 'bas-fisher-invitational/bfi-cargo-raw-data_wlmend',
    assetId: 'f7cfcdbe32437bfbf380d7203b930f24',
    width: 2010,
    height: 1106,
    bytes: 417679,
    version: '1792166632',
    alt: 'Preserved Cargo website files, with an HTML page and a files folder for each event.',
    caption: 'Preserved Cargo pages and their files.',
  }),
  driveFolder: pageImage({
    id: 'drive-folder',
    publicId: 'bas-fisher-invitational/bfi-google-drive-shared-archive-folder_ey5t0m',
    assetId: 'd9580972d96e8ede7eb62f5923818f8b',
    width: 2106,
    height: 1122,
    bytes: 209887,
    version: '1792166632',
    transform: 'c_crop,x_0,y_104,w_2106,h_1018/c_limit,w_1600,f_auto,q_auto',
    alt: 'Shared archive folder containing manifest.json and original.html.',
    caption: 'A preserved source file and its manifest. The browser address bar is cropped out.',
  }),
  githubRepo: pageImage({
    id: 'github-repo',
    publicId: 'bas-fisher-invitational/bfi-github-private-repo-migration_tdjfok',
    assetId: 'fd11ccbc6cf63f21e1f2501656b98252',
    width: 3412,
    height: 2488,
    bytes: 881302,
    version: '1792166632',
    alt: 'The private migration repository. It runs the work and is not the archive.',
    caption: 'GitHub runs the work. It is not an archival store.',
  }),
  earlierBoard: pageImage({
    id: 'earlier-board',
    publicId: 'bas-fisher-invitational/bfi-archive-migration_n2wx39',
    assetId: 'a0230470476b9794e3143fa39c7a72f2',
    width: 1672,
    height: 941,
    bytes: 1926333,
    version: '1792166656',
    alt: 'An earlier migration board showing Cargo, a preserved file, and two linked records.',
    caption:
      'Earlier working board. It is cropped, and the counts printed on it are not the 2 October 2026 milestone.',
  }),
  dearMiamiCargo: pageImage({
    id: 'dear-miami-cargo',
    publicId: 'bas-fisher-invitational/bfi-dear-miami-cargo-source-page_g1zeub',
    assetId: '2204294a020bd8dbf790f5a27d087c57',
    width: 4042,
    height: 2395,
    bytes: 4079410,
    version: '1792166633',
    alt: 'Cargo page for Sept 29: Dear Miami, Orlando Estrada, with the billboard photograph.',
    caption: 'Cargo source page.',
  }),
  dearMiamiAirtable: pageImage({
    id: 'dear-miami-airtable',
    publicId: 'bas-fisher-invitational/bfi-dear-miami-airtable-exhibition_l2th7n',
    assetId: 'cb583ba2bdb5c26fd26a35146d8659dc',
    width: 4102,
    height: 2486,
    bytes: 778545,
    version: '1792166632',
    transform: 'c_crop,x_0,y_110,w_4102,h_2376/c_limit,w_1600,f_auto,q_auto',
    alt: 'Airtable exhibitions grid. Dear Miami is the last visible row, Orlando Estrada, 2020.',
    caption:
      'Exhibitions grid. Dear Miami is one row in that list, not a separate record view. The browser address bar is cropped out.',
  }),
  earlierRelationships: pageImage({
    id: 'earlier-relationships',
    publicId: 'bas-fisher-invitational/BFI_Airtable_ERD_Current_State_aol0uo',
    assetId: 'bbcaa7c2b95ce1f9b1cfab28a7685fa9',
    width: 1672,
    height: 941,
    bytes: 1964690,
    version: '1792166642',
    alt: 'Earlier relationship study. Exhibitions link to archival pages. Artists and programs are drawn as not yet linked.',
    caption:
      'Earlier study. Artists and Programs are drawn as not yet linked. The cards above are the links verified on 30 September 2026.',
  }),
} as const;

/** Slots that still have no approved screenshot. */
export const BFI_PENDING_SLOTS = [
  {
    id: 'evidence.loni-johnson',
    folder: `${BFI_APPROVED_FOLDERS.evidence}loni-johnson/`,
    title: 'Loni Johnson',
    note: 'Workshop page with the seven restored photographs. The 2021 altar page stays out.',
  },
  {
    id: 'evidence.conversation',
    folder: `${BFI_APPROVED_FOLDERS.evidence}conversation/`,
    title: 'CONVERSATION',
    note: 'The shared staging page, labeled as held. No private ledger.',
  },
] as const;
