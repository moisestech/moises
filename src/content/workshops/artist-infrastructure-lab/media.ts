import type { TruthKind } from './types';

export type LabMediaAsset = {
  id: string;
  filename: string;
  kind: TruthKind;
  caption: string;
  alt: string;
  /** Hosted landscape or storyboard card. Held photographs stay without a file. */
  src?: string;
  /** Matched 512px mark for the chapter path and compact navigation. */
  iconSrc?: string;
  /** Matched alpha PNG that can sit directly on the paper page. */
  transparentSrc?: string;
  aspect: '3/2' | '4/5' | '16/9';
};

export type LabMarkId =
  | 'overview'
  | 'why'
  | 'path'
  | 'tools'
  | 'instructor'
  | 'codesign';

export type LabMarkAsset = {
  id: LabMarkId;
  alt: string;
  iconSrc: string;
  transparentSrc: string;
};

const LAB_MEDIA_SOURCE: Record<string, LabMediaAsset> = {
  coverB: {
    id: 'RATL-ILL-00-B',
    filename: 'cover-path-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual cover: source, interpretation, a human decision, a build, and a handoff, with one return path for revision. Not a photograph of a workshop.',
    alt: 'A person stands at a five-stage work surface from source tray to handoff case, with one return line for revision.',
    aspect: '3/2',
  },
  coverA: {
    id: 'RATL-ILL-00-A',
    filename: 'cover-split-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Alternate conceptual cover: an archive tray and a patch bay share one surface, with a visible review gate. Not documentary evidence.',
    alt: 'A person beside a work surface split between an archival tray and a small patch bay.',
    aspect: '3/2',
  },
  facilitation: {
    id: 'RATL-FAC-01',
    filename: 'facilitation-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual visualization of the proposed hands-on workshop format.',
    alt: 'A facilitator and four learners work around a metal table with source cards and a review gate. Conceptual scene, not a documented session.',
    aspect: '3/2',
  },
  portrait: {
    id: 'RATL-PHOTO-01',
    filename: 'moises-sanabria-ratcliffe-instructor-portrait.jpg',
    kind: 'documentary-proof',
    caption:
      'AI-assisted portrait edit derived from supplied real photographs. The neutral background is not documentary evidence of a location. Moises Sanabria, instructor.',
    alt: 'Moises Sanabria against a warm neutral background, wearing a black cap, glasses, black shirt, and a narrow tie.',
    aspect: '4/5',
  },
  teaching: {
    id: 'RATL-PROOF-01',
    filename: 'moises-sanabria-workshop-teaching-proof.jpg',
    kind: 'documentary-proof',
    caption:
      'Documentary photograph: Moises Sanabria presenting an Art x Technology workshop in the Oolite Arts Digital Lab. This is not a Ratcliffe session. Exact session date and public-use permission are still being confirmed. Embedded metadata reports 15 November 2025 and is unconfirmed as the session date.',
    alt: 'Moises Sanabria presenting an Art x Technology workshop beside a laptop and a large display in a book-lined lab.',
    aspect: '3/2',
  },
  workflow: {
    id: 'RATL-PROOF-02',
    filename: 'moises-sanabria-workflow-system-proof.png',
    kind: 'documentary-proof',
    caption:
      'Real n8n workflow view: an implemented email-inbox organizer prototype normalizes messages, classifies them with a model, validates the result, and applies an existing Gmail label. Implementation evidence, not proof of production impact. Public-use permission is still being confirmed.',
    alt: 'An n8n editor showing an email inbox organizer from a Gmail trigger through classification to a label.',
    aspect: '16/9',
  },
  artifact: {
    id: 'RATL-PROOF-03',
    filename: 'moises-sanabria-participant-artifact-proof.jpg',
    kind: 'documentary-proof',
    caption:
      'Facilitator-authored planning artifact: page 4 of From Image to Object maps instructor and lab responsibilities, the participant archive, and print policy. Proposed curriculum documentation for Moonlighter FabLab, 2026. Not participant work, and not proof that the workshop occurred.',
    alt: 'A page from a workshop planning document describing instructor duties, a participant archive, and a print policy.',
    aspect: '4/5',
  },
  observe: {
    id: 'RATL-ILL-01',
    filename: 'observe-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual cutaway: a public output depends on source material, annotation, waiting, human judgment, maintenance, and documentation.',
    alt: 'A cutaway filing tray with a finished card above and relays, a cable, and a waiting slot below.',
    aspect: '3/2',
  },
  structure: {
    id: 'RATL-ILL-02',
    filename: 'structure-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual structure study: a responsible schema preserves explicit gaps and keeps uncertain material unassigned.',
    alt: 'An overhead sorting tray with two empty compartments and one piece left outside its slot.',
    aspect: '3/2',
  },
  automate: {
    id: 'RATL-ILL-03',
    filename: 'automate-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual automation study: an open route branches into review and hold, with a manual lever before the exit.',
    alt: 'A small tabletop router with one token stopped before a manual lever, and trays for review and hold.',
    aspect: '3/2',
  },
  judge: {
    id: 'RATL-ILL-04',
    filename: 'judge-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual evidence review: visual confidence does not establish support. A human reviewer decides what the source permits.',
    alt: 'A viewing frame over a source card, with unsupported fragments set aside on a separate mat.',
    aspect: '3/2',
  },
  relate: {
    id: 'RATL-ILL-05',
    filename: 'relate-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual relationship study: confirmed, proposed, restricted, and unknown connections stay distinct and revisable.',
    alt: 'Five suspended modules linked by firm eyelets, a loose clip, a frosted sleeve, and one disconnected end.',
    aspect: '3/2',
  },
  publish: {
    id: 'RATL-ILL-06',
    filename: 'publish-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual publishing assembly: source, metadata, context, interpretation, accessibility, credit, and reuse stay distinct.',
    alt: 'Six separate layers held by one spine, with a hinge on the interpretation layer.',
    aspect: '3/2',
  },
  preserve: {
    id: 'RATL-ILL-07',
    filename: 'preserve-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual preservation kit: source material, documentation, removable storage, and an independent copy remain usable when an external connection fails.',
    alt: 'An open transport case with two independent copies, a removable block, and a disconnected cable beside an empty socket.',
    aspect: '3/2',
  },
  handoff: {
    id: 'RATL-ILL-08',
    filename: 'hand-off-landscape.png',
    kind: 'conceptual-visualization',
    caption:
      'Conceptual handoff: a portable guide, dependency cards, and a matched connection let another person inspect and continue the system.',
    alt: 'A portable case between two workstations, with a cable ready to connect to the receiving side.',
    aspect: '3/2',
  },
  'story-observe': {
    id: 'RATL-STORY-01',
    filename: 'story-observe-landscape.png',
    kind: 'storyboard',
    caption:
      'Storyboard, not a recording: map one finished output back to labor, source, delay, tools, and maintenance.',
    alt: 'A labeled storyboard card for the Observe demonstration. No video is available.',
    aspect: '16/9',
  },
  'story-judge': {
    id: 'RATL-STORY-04',
    filename: 'story-judge-landscape.png',
    kind: 'storyboard',
    caption:
      'Storyboard, not a recording: compare the supplied date with an unsupported exact year, then revise without erasing the uncertainty.',
    alt: 'A labeled storyboard card for the Judge demonstration. No video is available.',
    aspect: '16/9',
  },
  'story-publish': {
    id: 'RATL-STORY-06',
    filename: 'story-publish-landscape.png',
    kind: 'storyboard',
    caption:
      'Storyboard, not a recording: reorder evidence, context, interpretation, accessibility, and credit, and preview the public result.',
    alt: 'A labeled storyboard card for the Publish demonstration. No video is available.',
    aspect: '16/9',
  },
  'story-handoff': {
    id: 'RATL-STORY-08',
    filename: 'story-handoff-landscape.png',
    kind: 'storyboard',
    caption:
      'Storyboard, not a recording: a second person follows the guide, meets a missing dependency, chooses a fallback, and records the repair.',
    alt: 'A labeled storyboard card for the Hand Off demonstration. No video is available.',
    aspect: '16/9',
  },
};

const CDN =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/dccmiami/workshops/artist-infrastructure';

const matchedObjectBase: Record<string, string> = {
  coverB: 'cover-path',
  coverA: 'cover-split',
  facilitation: 'facilitation',
  observe: 'observe',
  structure: 'structure',
  automate: 'automate',
  judge: 'judge',
  relate: 'relate',
  publish: 'publish',
  preserve: 'preserve',
  handoff: 'hand-off',
};

function hosted(filename: string) {
  return `${CDN}/${filename}`;
}

function withHostedFile(key: string, asset: LabMediaAsset): LabMediaAsset {
  const objectBase = matchedObjectBase[key];
  if (objectBase) {
    return {
      ...asset,
      src: hosted(`${objectBase}-landscape.png`),
      iconSrc: hosted(`${objectBase}-icon.png`),
      transparentSrc: hosted(`${objectBase}-transparent.png`),
    };
  }
  if (asset.kind === 'storyboard')
    return { ...asset, src: hosted(asset.filename) };
  return asset;
}

export const LAB_MEDIA: Record<string, LabMediaAsset> = Object.fromEntries(
  Object.entries(LAB_MEDIA_SOURCE).map(([key, asset]) => [
    key,
    withHostedFile(key, asset),
  ])
);

export function labMedia(id: string): LabMediaAsset | undefined {
  return LAB_MEDIA[id];
}

const LAB_MARK_SOURCE: Record<LabMarkId, string> = {
  overview: 'Front door of the proposed lab.',
  why: 'Two equal lenses: humanities and artist infrastructure.',
  path: 'Eight steps forming one inspectable route.',
  tools: 'Inspectable tools arranged in a tray.',
  instructor: 'An anonymous teaching-practice figure.',
  codesign: 'An open decision with room between two sides.',
};

export const LAB_MARKS: Record<LabMarkId, LabMarkAsset> = Object.fromEntries(
  Object.entries(LAB_MARK_SOURCE).map(([id, alt]) => [
    id,
    {
      id,
      alt,
      iconSrc: hosted(`mark-${id}-icon.png`),
      transparentSrc: hosted(`mark-${id}-transparent.png`),
    },
  ])
) as Record<LabMarkId, LabMarkAsset>;

export function labMark(id: LabMarkId): LabMarkAsset {
  return LAB_MARKS[id];
}
