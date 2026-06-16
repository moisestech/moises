/**
 * Private application copy for NEW INC — Media and Fabrication Lab Manager (Req. 1063).
 * Public dossier: /opportunities/new-inc-media-fabrication-lab-manager
 */
import { cvData } from '@/constants/cv';

export const newIncLabManagerMeta = {
  requisitionId: '1063',
  roleTitle: 'Media and Fabrication Lab Manager',
  company: 'NEW INC (New Museum)',
  location: 'New York, NY',
  schedule: 'Full-time, Tuesday–Saturday, 10am–6pm',
  salary: '$72,340.39 annually',
  reportsTo: 'NEW INC Deputy Director',
  applyUrl: 'https://www.newmuseum.org/jobs', // update when direct posting URL is available
  website: cvData.contact.website,
  email: cvData.contact.email,
} as const;

/** Paste into application cover letter or “additional information” field */
export const newIncCoverLetter = `Dear NEW INC hiring team,

I am applying for the Media and Fabrication Lab Manager role (Requisition 1063). I am a Miami-based interdisciplinary artist and Technical Director of Digital at Oolite Arts, where I help run the Knight-funded Digital Lab—workshops, equipment workflows, and artist-facing systems for a community of creative practitioners who do not want to become engineers.

That work sits alongside a studio practice I fabricate myself: modular electronics, 3D-printed assemblies, projection and display systems, and durational installations shown at institutions including the Whitney Museum (production assist), Fundación Paiz, and festivals across Miami and Central America. I have spent more than a decade translating between artists, institutions, and technical infrastructure—the same interface NEW INC needs between members, museum facilities, and lab operations.

For NEW INC’s expanded Media and Fabrication Labs, I would bring hands-on fluency in the tools your posting describes—projection and capture workflows, ML and generative media pipelines, 3D printing and prototyping, audio/video production—and the operational habits to match: inventory tracking, booking systems, member onboarding, troubleshooting, and documentation that keeps a high-traffic lab usable. I am comfortable owning a budget line, teaching lab capabilities in plain language, and improving processes when friction appears.

NEW INC’s move into dedicated space at the New Museum in March 2026 is exactly the kind of inflection point where lab culture gets set: access norms, safety, equipment lifecycle, and how members learn to work at institutional scale. I would welcome the chance to help build that foundation with a community I already admire.

Thank you for your consideration. A supporting dossier with role-fit evidence and selected work is at moises.tech/opportunities/new-inc-media-fabrication-lab-manager.

Sincerely,
Moises Sanabria`;

export const newIncTalkingPoints = {
  strongestAngles: [
    'Oolite Digital Lab — Technical Director of Digital; Knight-funded lab serving Miami artists with workshops and production support.',
    'Artist who fabricates own work — electronics, 3D printing, projection, durational AV — not a separate “tech consultant” identity.',
    'Whitney Museum production experience (Jared Madere, 2015; Wang Shui, 2021–22) — museum-scale install support and custom AV.',
    'Public teaching — AI agents, digital presence, critical AI literacy — same pedagogical muscle as onboarding lab members.',
    'Institutional bridge-building — DCC Miami, Oolite, festival and museum partners; comfortable interfacing across departments.',
  ],
  honestGaps: [
    'Based in Miami, not NYC — must address relocation or commute explicitly in application.',
    'Title history is artist / lab director, not “Fab Lab Manager” — emphasize transferable ops, not keyword matching.',
    'Traditional woodworking / laser-cutter daily ops less documented than digital media — lead with media lab + prototyping, show willingness on dirty-room equipment.',
    'Salary ($72k) is modest for NYC full-time; union Tue–Sat schedule is a lifestyle commitment.',
  ],
  recommendedFraming:
    'Lead as an artist-technologist who already runs a member-facing lab for creative practitioners—NEW INC is the national-scale version of work you do at Oolite, inside the museum ecosystem you know from production roles.',
} as const;
