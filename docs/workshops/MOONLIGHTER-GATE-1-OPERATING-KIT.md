# Workshop Gate 1 — Operating Kit
Version 1.0 · 2026-10-12 · Owner: Moises / DCC Miami · Moonlighter pilot

## Authority and scope
This document is the single Gate 1 operating contract. The [student guide](/workshop/moonlighter-ai-3d-printing/gate-1) teaches the same reference → image → AI mesh → inspect/repair → scale/orient → slice → instructor approval sequence. Existing session, facilitator and production tools remain the authoritative state systems. The Gate 1 guide's checkboxes and ratings are ephemeral browser-only self-assessment, NOT intake storage, production dispatch or consent capture.

Carol Haggiag's octopus is a PRIVATE WORKFLOW TEST ONLY. Do not publish the reference, likeness, derived mesh, screenshot, attribution, case study or physical print in any public marketing, participant gallery or evidence asset unless Carol grants explicit, documented approval scoped to each use. Demonstrations use original/licensed generic substitutes. Do not commit her media or personally identifying source data to a public repository.

## Gate-locked fields / participant intake
Create/verify before the session:
- session_id, participant_id (internal random ID), display_name, contact_email (private), age/guardian status if required by host, registration status
- project_id, project_title, creation date, facilitator_id, reference_source (owned/licensed/approved/photographed), right_to_use_reference affirmative
- AI image/tool/provider, tool account ownership/credit source, conversion tool, generated asset identifier, print tier, PLA color first/backup
- optional documentation consent separately for: process capture, identifiable portrait/voice, artwork/public attribution, partner channels, DCC channels; default NO, record timestamp and version of consent language; allow withdrawal before publication, log any already-published action separately
- private personal fields must not go to public static pages, public repo, accessible filenames or downloadable manifests. Keep access restricted to authorized staff.

Consent is never implied by workshop attendance or print permission. Rights to use the reference and permission to publicly share the result are independent choices. Offer equally functional participation if documentation consent is denied.

## Canonical workflow and acceptance gates
| Stage | Student evidence | Pass |
| --- | --- | --- |
| 1 Reference | source, cropped working image, reference rights | one clear complete subject, permitted source |
| 2 AI image | prompt v01, option set, selected image | single centered printable concept, connected volumes |
| 3 Conversion | original STL/GLB, tool + generation metadata | recognized front/back/underside and major masses |
| 4 Inspection / repair | five-item rubric; repaired file only if necessary | no red flags; bounded repairs only; otherwise regenerate |
| 5 Scale / orient | dimensions mm, tier, orientation, support rating | stable, plausible thickness, manageable supports |
| 6 Slice | versioned Bambu 3MF, sliced preview, time/grams, profile | correct machine/PLA settings; instructor approval |

Rubric: silhouette, continuity, base/orientation, thickness, surface/slice. GREEN = pass; AMBER = named, bounded instructor-review repair; RED = no approval / regenerate. Instructor makes final decision from actual slicer settings and physical machine. High support, inaccessible support, or extended time requires explicit exception or queue.

Tiers are provisional guides, not guarantees: MINI 35–70 mm (often quicker) and SCULPTURE 80–120 mm (typically queued). Print time classes: quick <60m, standard 60–120m, extended >120m. Actual slice estimate governs.

## Naming and immutable revisions
Project slug: `WKS-[session]-[participant-id]-[project-slug]` using sanitized slug, not a name or email.
Folders: `00_record/`, `01_reference/`, `02_prompts/`, `03_generated_images/`, `04_mesh_original/`, `05_mesh_repair/`, `06_slicer/`, `07_approved/`, `08_evidence_private/`.
Pattern: `[project-id]_[stage]_[descriptor]_vNN.[ext]`, v01 onward. Preserve originals. Approvals lock file SHA256, dimensions, orientation, machine profile, material, duration, and instructor/time. Any change after signoff becomes vNN+1 and requires reapproval.

## One approved print & failure/reprint
One *approved* print attempt per enrolled student; not a guarantee of completion in class. Instructor can reject unsafe/unprintable inputs. One automatic recovery attempt for a documented qualifying production failure or narrowly repairable mesh failure of the approved concept. Log reason, original attempt, repair steps and recovery decision. Redesign, alternate colors, additional copies, scale increases, student-requested revisions and post-pickup damage are NOT automatic reprints; quote separately. Refer to `src/content/workshops/moonlighter-ai-3d-printing/policy.ts` for full reasons. Pickup dates only after Moonlighter confirms capacity and fulfillment.

## Four-printer dispatch board
Machine IDs: ML-P01, ML-P02, ML-P03, ML-P04 are LOGICAL LANES, not confirmed equipment identities. Map each to real machine/model/nozzle/profile at check-in.
Each queue row must contain: project_id, locked artifact SHA256, approval status, instructor, tier, PLA color, g filament, estimated min, support risk, priority/approval timestamp, machine lane, started/finished timestamps, operator, attempt number, failure code, handoff status.
States: DRAFT → READY_FOR_REVIEW → NEEDS_WORK or APPROVED_IN_CLASS / APPROVED_QUEUED → PRINTING → READY_FOR_PICKUP → CLOSED. Failure branches to RECOVERY (qualifying) or separate quote.
Dispatch ONLY approved projects. Sort by approval timestamp within operational fit; short mini jobs may be prioritized to demonstrate class throughput, but announce the rule. One active job per machine. Record paused/offline hardware and never silently move profiles. If four lanes are unavailable, reduce launches and carry approved jobs to managed pickup queue. Instructor retains control of machine access and dispatch.

## DCC evidence manifest
Private manifest schema (JSON/CSV or database-backed): `evidence_id, session_id, project_id, workflow_stage, version, filename, sha256, mime, storage_uri, creator_role, captured_at, consent_scope, publication_status, review_by, approval_timestamp, source_rights, redaction_status, print_attempt, failure_code, pickup_status`.
Capture: reference only when licensed; generated image; mesh screenshot from two or more angles; inspection scores; slice preview and time/material; print-in-progress photo (without faces unless allowed); finished object; learning reflection, troubleshooting and outcome. Record private evidence even if public permission absent; do not publish or auto-send evidence to DCC marketing. Public gallery must filter to explicit artifact-specific permission + cleared underlying source rights. Revocation requires takedown tracking.

## Participant follow-through / feedback
Facilitator-issued private feedback form must cover: project_id (optional anonymous mode), confidence before/after (1–5), success at each stage, AI provider used, where they got stuck, estimated versus actual printing, highest-value demo, one change requested, continued-learning interest, optional permission to contact separately. Do not bundle feedback consent with marketing opt-in.
After class: give each participant their archive/checklist, the print status and pickup contact or date if confirmed, form link and a CTA to `https://dcc.miami/workshops` for repair/finishing and next fabrication workshops. Follow up after confirmed print outcome or pickup; separate service offers from warranty recovery.

## Preflight & go/no-go
- [ ] Host confirms date, 4 usable FDM printers, exact models/nozzles, PLA inventory, slicer profiles, operator, and one workstation per participant.
- [ ] Intake/access/consent routes validated; no default opt-ins.
- [ ] Example reference, generated image, original mesh, repair fallback, and sliced MINI all tested end-to-end *privately*.
- [ ] Session live storage configured (in-memory fallback is NOT durable).
- [ ] Printer lanes and backup queue board initialized, operator assigned.
- [ ] Print approval and reprint policy shown at intake and handoff.
- [ ] Evidence storage is restricted; gallery off unless approved.
- [ ] Feedback URL, pickup method, and DCC continuation CTA verified.
- [ ] QA at 375px phone, 768px tablet, 1440px desktop, keyboard navigation and reduced-motion; no horizontal overflow.
- [ ] Host signs off on price, color, date, pickup language; no unverified public promises.

## Ownership
Participant produces/versions assets and requests review. Facilitator checks rubric and signs approval. Operator maps approved artifacts to physical printer, launches, logs failures and recovery. Moonlighter confirms pickup and host-specific policy. DCC archives de-identified operational evidence, tracks participant outcomes and handles opt-in follow-up.

## Metrics / closeout
Report enrolled, present, selected-image completion, original mesh completion, green/amber/red counts, slicing completion, approved-print ratio, in-class starts, queued, successful first passes, qualifying recovery, on-time handoffs, feedback completion, and opted-in follow-ups. Gate 1 is complete only after an end-to-end dry run, permissions test and host signoff; this document alone does not certify a physical test.
