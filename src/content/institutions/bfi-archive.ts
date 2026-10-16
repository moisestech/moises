/**
 * /bfi-archive — unlisted review case study.
 * Evidence date: 2 October 2026, from the BFI migration repository
 * (branch cursor/batch-40-staging-cp-09l), including the executed
 * additions recorded in that working tree.
 *
 * Not a completed archive migration. Not a website redesign.
 * No Airtable base IDs, record IDs, review-sheet links, or prices.
 */

import { INSTITUTIONAL_CALENDLY_URL, INSTITUTIONAL_EMAIL } from './shared';

export const BFI_ARCHIVE_HREF = '/bfi-archive';

export const BFI_EVIDENCE_DATE = '2 October 2026';
export const BFI_SCHEMA_DATE = '30 September 2026';

const STAGING = 'https://bas-fisher-invitational.webflow.io';

export const bfiArchive = {
  meta: {
    title: 'Archive migration review — Bas Fisher Invitational | Moises Sanabria',
    description:
      'An ongoing archive migration for Bas Fisher Invitational. A first milestone keeps historical sources, recognizes existing records, and publishes selected programs on the staging site for review.',
    url: 'https://moises.tech/bfi-archive',
  },
  visibilityNote:
    'Unlisted review. This page is not in the site index. It is an ongoing migration with a delivered first milestone, not a finished archive or a redesigned website.',
  hero: {
    eyebrow: 'Bas Fisher Invitational · Archive migration',
    headline: 'From scattered archive pages to a collection people can trust, review, and maintain.',
    lead:
      'BFI needed to move historical material forward without losing the source, duplicating pages that already existed, or turning uncertain identities into false certainty. I built a migration and review system that separates what can be reconciled from what still needs a person to decide.',
    status: 'Ongoing migration · first milestone delivered',
    statusNote: `Staging site only, as of ${BFI_EVIDENCE_DATE}. The public custom domain was not changed.`,
    roleLabel: 'My role',
    role: 'Archive systems + migration engineering',
    scope:
      'Source preservation, data reconciliation, canonical records, editorial review gates, safe CMS writes, and a repeatable path from historical evidence to public staging.',
  },
  snapshot: {
    eyebrow: 'At a glance',
    title: 'The migration could move quickly without pretending every record was certain.',
    lead:
      'The useful outcome was not “more pages.” It was a system that could recognize what already existed, preserve where a claim came from, and stop when the evidence was not strong enough.',
    stats: [
      {
        value: '322',
        label: 'canonical records modeled',
        note: '136 event/program records + 186 artist records',
      },
      {
        value: '163',
        label: 'durable HTML source packages',
        note: 'preserved as source evidence before migration',
      },
      {
        value: '1,088',
        label: 'media references inventoried',
        note: '670 checksum-verified; gaps stayed visible',
      },
      {
        value: '41 / 42',
        label: 'selected programs with staging pages',
        note: 'one stayed blocked rather than being invented',
      },
    ],
  },
  problem: {
    eyebrow: 'The original problem',
    title: 'The archive existed. The connections needed work.',
    paragraphs: [
      'The material was already there. Cargo held the historical pages. A workbook held another pass at the same history. Airtable held structured records. Webflow already had a public collection, including many program pages that predate this project.',
      'The same exhibition could appear under slightly different titles, with dates that did not line up, photographs missing from the page a visitor would actually open, or an identity that was not safe to guess. Comparing two cards took care. Nothing about that meant the earlier work should be thrown away.',
    ],
    surfaces: [
      { label: 'Cargo', body: 'Historical website pages and the photographs on them.' },
      { label: 'Workbook', body: 'A second listing of the same events and programs.' },
      { label: 'Airtable', body: 'Structured records for exhibitions, artists, pages, and programs.' },
      { label: 'Webflow', body: 'The website people already use, with pages that needed to be recognized rather than copied.' },
    ],
  },
  approach: {
    eyebrow: 'The approach',
    title: 'Preserve the source. Connect the records. Review the questions.',
    lead:
      'Each system keeps a different job. A change to Airtable or Webflow happens only after a person approves that specific change. Nothing flows back and forth on its own.',
    responsibilities: [
      {
        label: 'Cargo and the workbook',
        role: 'Historical sources',
        body: 'Where the older titles, dates, and page content came from.',
      },
      {
        label: 'Preserved files and manifests',
        role: 'Source evidence',
        body: 'Original HTML and files stay with checksums, so a later edit can be checked against what was saved.',
      },
      {
        label: 'Canonical records',
        role: 'Normalized data',
        body: 'One working record per source, with a stable key, so near-duplicate titles can be compared instead of merged by accident.',
      },
      {
        label: 'Airtable and the review sheet',
        role: 'Editorial review',
        body: 'Structured records, plus a ledger of questions a curator can answer. The sheet is a review tool. It is not a second database.',
      },
      {
        label: 'Webflow',
        role: 'Public presentation',
        body: 'The staging website. Existing pages are updated when the identity is clear. New pages are created only when no page already exists.',
      },
    ],
    tooling:
      'Cursor and GitHub are how the work is written and run. They are not archival databases, and they do not own the files.',
    principle:
      'Most migrations optimize for moving records. This process also optimizes for knowing when not to move one.',
  },
  examples: {
    eyebrow: 'Three examples',
    title: 'What the care looks like on a real record',
    lead: 'Matching a record, restoring images, and calling a page ready for visitors are separate checks.',
    items: [
      {
        id: 'dear-miami',
        kicker: 'Recognized, then restored',
        title: 'Dear Miami',
        body: 'The Cargo page was kept as source evidence. The existing Webflow page was recognized, so a second Dear Miami page was not created. On 1 October 2026, thirteen Cargo photographs were added to that page. The text already on it stayed.',
        href: `${STAGING}/program/dear-miami`,
        hrefLabel: 'Dear Miami on the staging site',
        sourceHref: 'https://basfisherinvitational.com/Sept-29-Dear-Miami-Orlando-Estrada',
        sourceLabel: 'Cargo source',
      },
      {
        id: 'loni-johnson',
        kicker: 'Distinct events stayed distinct',
        title: 'Loni Johnson',
        body: 'The altar-making workshop page received seven photographs from its own Cargo source. The 2021 altar-making page and the What We Hold Sacred exhibition page were not changed. Image work went to the page it belonged to.',
        href: `${STAGING}/program/what-we-hold-sacred-loni-johnsons-altar-making-workshop`,
        hrefLabel: 'Workshop page on the staging site',
        sourceHref: `${STAGING}/program/altar-making-workshop`,
        sourceLabel: '2021 altar page, left as it was',
      },
      {
        id: 'conversation',
        kicker: 'Held for a decision',
        title: 'CONVERSATION',
        body: 'BFI already treats the 2024 workshop, the 2021 altar-making workshop, and the December 3 conversation as three events. The conversation still shares one Webflow page with another December 3 source. That shared page was not merged and was not rewritten.',
        href: `${STAGING}/program/conversation---heat-exchange`,
        hrefLabel: 'Conversation page on the staging site',
        sourceHref: null,
        sourceLabel: null,
      },
    ],
  },
  outcome: {
    eyebrow: 'What changed',
    title: 'BFI gained a safer way to move the archive forward.',
    lead:
      'The technical work reduced uncertainty for the people maintaining the archive. Existing work was recognized instead of overwritten, unresolved questions became visible, and the next batch can reuse the same checks instead of starting from scratch.',
    points: [
      {
        title: 'Lower duplicate risk',
        body: 'Existing Webflow pages are reconciled before a new page is created, so migration does not automatically mean copying.',
      },
      {
        title: 'Human judgment stays explicit',
        body: 'When dates, identities, or event relationships are uncertain, the record moves into review instead of being silently normalized.',
      },
      {
        title: 'The next batch is repeatable',
        body: 'Source evidence, canonical keys, approval gates, and staging checks form a workflow that can be reused as the archive grows.',
      },
    ],
  },
  delivered: {
    eyebrow: 'What was delivered',
    title: 'A first milestone on the staging site',
    dateLine: `Counted on ${BFI_EVIDENCE_DATE}. These figures describe this milestone. They are not a percentage of the whole archive.`,
    groups: [
      {
        label: 'Official set of 40',
        items: [
          '38 reconciled on the staging site: an existing page was compared, and images were appended or already matched.',
          '1 held for review: the December 3 conversation, because its page identity is still uncertain.',
          '1 blocked: Artist Swaps, until BFI supplies the missing context.',
          'On that same set, the review flags read 34 clear, 4 curatorial, 1 identity hold, and 1 excluded.',
        ],
      },
      {
        label: 'Two later additions, outside the 40',
        items: [
          'A Josh Kline conversation and the Weird Miami Anthology Book Launch were migrated beside the official 40. Both are on the staging site. The official 40 was not rewritten to absorb them.',
          '41 of these 42 selected programs have a staging page. Artist Swaps does not.',
        ],
      },
      {
        label: 'What this was not',
        items: [
          'Most program pages already existed. A September inspection listed 105 Programs items in Webflow. This milestone recognized and updated records. It did not create 40 new pages, and it did not audit the whole CMS.',
          'Inside the official 40, the known gaps against unique Cargo photographs were closed by 2 October. Pages outside that set still have missing photographs. Image completeness and visitor readiness are not the same thing.',
          'Publishing stayed on bas-fisher-invitational.webflow.io. Cargo was not edited. The custom domain was not published.',
        ],
      },
    ],
    additions: [
      {
        title: 'Josh Kline and Naomi Fisher in conversation',
        href: `${STAGING}/program/josh-kline-and-naomi-fisher-in-conversation-rethinking-art-infrastructure-in-an-age-of-urgency`,
      },
      {
        title: 'Weird Miami Anthology Book Launch',
        href: `${STAGING}/program/weird-miami-anthology-book-launch`,
      },
    ],
  },
  remains: {
    eyebrow: 'What remains',
    title: 'Editorial decisions, and the rest of the archive',
    items: [
      'The December 3 conversation still needs BFI to confirm whether that Webflow page is the right record.',
      'Artist Swaps stays out until there is context for it.',
      'Pages outside this set still miss Cargo photographs: Marisa Olson / Will It Float, the Joshua Citarella and Holly Jean Buck talk, Clearing, the introductory lecture, and Future Cities.',
      'Inside the 40, the Nightmare Americana tour is otherwise matched and still has an empty hero image.',
      'The event and program archive is 136 canonical records. This milestone selected 42. Another 186 artist records sit in a separate collection and were not part of this batch. The full canonical set is 322 records.',
      'Preserved files and checksums exist for the sources that were saved. That is not custody of the whole archive, and file ownership is not resolved.',
      'Further writes still wait for a person who knows the material. There is no automatic synchronization between Airtable and Webflow.',
    ],
  },
  capability: {
    eyebrow: 'Reusable capability',
    title: 'A way to grow an archive without losing the original',
    lead:
      'The same sequence can take the next batch: keep the source traceable, record the relationship explicitly, repeat a change only where it was approved, and leave the judgment with the people who know the collection.',
    points: [
      { title: 'Traceable sources', body: 'A page can be checked against the file and checksum it came from.' },
      { title: 'Explicit relationships', body: 'Links are named fields between records, not a guess from a similar title.' },
      { title: 'Repeatable changes', body: 'An approved edit can be run again without creating a duplicate page.' },
      { title: 'Human review', body: 'Uncertain identities stay in a review tray until someone answers them.' },
    ],
  },
  cta: {
    eyebrow: 'Next step',
    title: 'Discuss an institutional archive',
    lead: 'If a collection has the same shape — sources worth keeping, records that almost match, and questions only the institution can answer — I can walk through what this milestone did and what it left open.',
    email: INSTITUTIONAL_EMAIL,
    emailSubject: 'Archive migration — institutional conversation',
    calendlyHref: INSTITUTIONAL_CALENDLY_URL,
    calendlyLabel: 'Discuss a project',
    secondaryHref: '/artist-infrastructure#contact',
    secondaryLabel: 'Artist infrastructure',
  },
} as const;
