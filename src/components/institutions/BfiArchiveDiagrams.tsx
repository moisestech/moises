import { BFI_EVIDENCE_DATE, BFI_SCHEMA_DATE } from '@/content/institutions/bfi-archive';
import { BFI_PAGE_IMAGES } from '@/content/institutions/bfi-archive-media';
import { cn } from '@/lib/utils';

const held = 'border-dashed border-amber-800 bg-amber-50';

const ZONE_CLASS = {
  cargo: 'border-amber-800 bg-amber-50',
  files: 'border-emerald-800 bg-emerald-50',
  canonical: 'border-neutral-400 bg-white',
  airtable: 'border-teal-800 bg-teal-50',
  webflow: 'border-violet-800 bg-violet-50',
  tooling: 'border-neutral-950 bg-neutral-100',
} as const;

export function BfiArchitectureDiagram() {
  return (
    <div className="mt-8">
      <p className="max-w-3xl text-sm leading-relaxed text-neutral-700">
        How a record moves, as of {BFI_EVIDENCE_DATE}. Solid boxes are in place for this milestone.
        Dashed boxes are not done. Arrows are one direction, and only after a person approves the change.
      </p>
      <div className="mt-5 border border-neutral-300 bg-[#fbfaf7] p-4 sm:p-6">
        <div className="grid gap-3 lg:grid-cols-5">
          <Zone
            kicker="Sources"
            title="Cargo + workbook"
            body="Historical pages and the workbook listing."
            tone="cargo"
          />
          <Zone
            kicker="Preservation"
            title="Files + manifests"
            body="Original HTML, checksums, and the media manifest."
            tone="files"
          />
          <Zone
            kicker="Canonical data"
            title="Normalized records"
            body="One working record per source, with a stable key."
            tone="canonical"
          />
          <Zone
            kicker="Editorial review"
            title="Airtable + review sheet"
            body="Structured records and the questions still open."
            tone="airtable"
          />
          <Zone
            kicker="Presentation"
            title="Webflow staging"
            body="The webflow.io site. Not the custom domain."
            tone="webflow"
          />
        </div>
        <ol className="mt-4 grid gap-2 text-sm text-neutral-800 sm:grid-cols-2">
          <li className="border border-neutral-950 bg-white px-3 py-2">
            <span className="font-semibold">Human approval</span> sits before any write to Airtable or Webflow.
            There is no automatic two-way sync.
          </li>
          <li className={`border px-3 py-2 ${ZONE_CLASS.tooling}`}>
            <span className="font-semibold">Cursor / GitHub</span> sit beside this path. They run the work.
            They are not archival stores.
          </li>
          <li className={`border px-3 py-2 ${held}`}>
            <span className="font-semibold">Not done.</span> Publish to the custom domain.
          </li>
          <li className={`border px-3 py-2 ${held}`}>
            <span className="font-semibold">Not done.</span> The rest of the event and program archive, and file ownership.
          </li>
        </ol>
      </div>
      <figure className="mt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BFI_PAGE_IMAGES.earlierBoard.src}
          alt={BFI_PAGE_IMAGES.earlierBoard.alt}
          className="w-full border border-neutral-300 bg-white"
        />
        <figcaption className="mt-2 text-sm leading-relaxed text-neutral-600">
          {BFI_PAGE_IMAGES.earlierBoard.caption}
        </figcaption>
      </figure>
    </div>
  );
}

function Zone({
  kicker,
  title,
  body,
  tone,
}: {
  kicker: string;
  title: string;
  body: string;
  tone: keyof typeof ZONE_CLASS | 'held';
}) {
  return (
    <div className={cn('border p-3', tone === 'held' ? held : ZONE_CLASS[tone])}>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{kicker}</p>
      <p className="mt-2 text-base font-semibold leading-snug text-neutral-950">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{body}</p>
    </div>
  );
}

const LINKED = [
  ['Exhibitions', 'Artists/Groups', 'Artists', 'Exhibitions Participated'],
  ['Exhibitions', 'Archival Page', 'Archival Pages', 'Exhibitions'],
  ['Exhibitions', 'Program/Initiative', 'Programs', 'Exhibitions'],
  ['Archival Pages', 'Related Indexes', 'Indexes', 'Related Archival Page'],
  ['Archival Pages', 'Referenced Media', 'Media Manifest Entries', 'Referenced On Pages'],
  ['Indexes', 'Related Media Manifest Entries', 'Media Manifest Entries', 'Referenced In Indexes'],
] as const;

export function BfiRelationshipDiagram() {
  return (
    <div className="mt-8 space-y-8">
      <section aria-labelledby="bfi-linked-records">
        <h3 id="bfi-linked-records" className="font-['MoMA_Sans'] text-xl font-semibold">
          Airtable linked records
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-700">
          Verified from the live Institutional Memory schema on {BFI_SCHEMA_DATE}. Later work added program
          rows and three ordinary fields — Blocker, QA Status, and Staging URL. It did not add a new link type.
          A link field existing does not mean every artist or program is connected.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {LINKED.map(([from, field, to, inverse]) => (
            <li key={`${from}-${field}`} className="border border-teal-800 bg-teal-50 p-3">
              <p className="text-base font-semibold text-neutral-950">
                {from}
                <span className="px-2 font-normal text-neutral-400" aria-hidden>
                  —
                </span>
                {to}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                Field <span className="font-medium text-neutral-950">{field}</span>
                {' · '}
                inverse <span className="font-medium text-neutral-950">{inverse}</span>
              </p>
            </li>
          ))}
        </ul>
        <figure className="mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BFI_PAGE_IMAGES.earlierRelationships.src}
            alt={BFI_PAGE_IMAGES.earlierRelationships.alt}
            className="w-full border border-teal-800 bg-white"
          />
          <figcaption className="mt-2 text-sm leading-relaxed text-neutral-600">
            {BFI_PAGE_IMAGES.earlierRelationships.caption}
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="bfi-provenance">
        <h3 id="bfi-provenance" className="font-['MoMA_Sans'] text-xl font-semibold">
          Source and provenance
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-700">
          These are values stored on a record so it can be traced. They are not links between Airtable tables.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          <li className="border border-neutral-300 bg-white p-3 text-sm leading-relaxed">
            <span className="font-semibold">Exhibitions, artists, programs.</span> Cargo URL, source key, and source hash.
          </li>
          <li className="border border-neutral-300 bg-white p-3 text-sm leading-relaxed">
            <span className="font-semibold">Archival pages.</span> Durable archive URL and raw HTML checksum, where a file was saved.
          </li>
          <li className="border border-neutral-300 bg-white p-3 text-sm leading-relaxed">
            <span className="font-semibold">Media manifest.</span> Checksum, download status, and preservation class.
          </li>
        </ul>
      </section>

      <section aria-labelledby="bfi-webflow-refs">
        <h3 id="bfi-webflow-refs" className="font-['MoMA_Sans'] text-xl font-semibold">
          Webflow references
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-700">
          Webflow Item ID is text stored on the Airtable record. Staging URL is a URL field on Programs, added
          1 October 2026. Neither one is a linked record, and Webflow does not write back into Airtable.
        </p>
      </section>
    </div>
  );
}
