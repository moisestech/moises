/**
 * Private application copy for Playwire return outreach.
 * Public dossier: /opportunities/playwire (noindex, unlisted)
 */
import { cvData } from '@/constants/cv';

export const playwireApplicationMeta = {
  company: 'Playwire',
  dossierUrl: 'https://moises.tech/opportunities/playwire',
  website: cvData.contact.website,
  email: cvData.contact.email,
  contacts: {
    jarrettAbello: {
      name: 'Jarrett Abello',
      title: 'Chief Technologist',
      email: 'jabello@playwire.com',
    },
    toniSumenek: {
      name: 'Toni Marie Sumenek',
      title: 'VP, Human Resources',
    },
    jaysonDubin: {
      name: 'Jayson Dubin',
      title: 'CEO & Chairman',
    },
  },
  formerRoles: [
    { title: 'Solutions Engineer', period: 'January 2021 – December 2021' },
    { title: 'Data Analyst', period: 'January 2022 – December 2022' },
  ],
} as const;

/** Email 1 — Jarrett Abello (primary warm contact) */
export const playwireEmailToJarrett = {
  subject: 'Former Playwire data/solutions — quick demo I built for RAMP',
  body: `Hi Jarrett,

Hope you're well. I worked at Playwire on Solutions Engineering (2021) and the Data team (2022) — migrating Kinesis/Athena pipelines into Snowflake, building Tableau views on auction performance, and setting up Slack alerting for data consistency. I remember your leadership on the engineering side during that stretch.

Since then I've been in Miami building as a founding engineer at Lore Machine (real-time AI storytelling on Vercel), and institutional stacks through AI24 and DCC Miami — still full-stack product work, but with a lot more publisher-adjacent thinking about transparency, dashboards, and who the user actually is.

I've been following RAMP's dual model (Managed + Self-Service), Flex Suite scale with Magnite and Arena Group, and the PARMM maturity framing. I'd love to find a way back — flexible across Data, Solutions, or Product Engineering, wherever the team has appetite.

I put together a short private dossier with an interactive publisher journey demo (PARMM-lite, service model, mock revenue dashboard) to show how I think about the questions publishers ask before switching stacks:

https://moises.tech/opportunities/playwire

Would you have 20 minutes for a call to hear what's hiring and where my Snowflake + publisher-facing background might fit?

Best,
Moises Sanabria
m@moises.tech`,
} as const;

/** Email 2 — Toni Sumenek (HR / rehire routing) */
export const playwireEmailToToni = {
  subject: 'Rehire inquiry — Moises Sanabria (former Data & Solutions, 2021–2022)',
  body: `Hi Toni,

I'm reaching out regarding a potential return to Playwire. I was previously on the Solutions Engineering team (2021) and Data team (2022) in Boca Raton / Miami.

I'm now Miami-based and open to Data, Solutions Engineering, or Product Engineering roles — remote or hybrid if there's a fit. I've reconnected with Jarrett Abello and shared a supporting dossier here:

https://moises.tech/opportunities/playwire

Could you point me to the right requisition or internal referral path if Playwire is open to former employees returning?

Thank you,
Moises Sanabria
m@moises.tech
linkedin.com/in/moisesdsanabria`,
} as const;

/** Email 3 — Jayson Dubin (optional, executive) */
export const playwireEmailToJayson = {
  subject: 'Former Playwire — publisher-facing demo + interest in returning',
  body: `Hi Jayson,

I worked at Playwire in Solutions and Data (2021–2022) and have since built AI product and institutional platforms in Miami. I'm interested in returning where publisher transparency and real-time systems are the product — the direction RAMP and Flex Suite represent.

I built a short concept demo reflecting publisher-first questions (private link): https://moises.tech/opportunities/playwire

If there's appetite for returning talent with data, solutions, and product depth, I'd value 15 minutes to learn where the team is hiring.

Best,
Moises Sanabria`,
} as const;

export const playwireTalkingPoints = {
  strongestAngles: [
    'Two years in-house: Solutions Engineer (publisher integrations, JS debugging, client timelines) + Data Analyst (Kinesis → Snowflake, Tableau auction BI, Slack alerts).',
    'Stack overlap: Snowflake, Tableau, AWS/Kinesis, JavaScript/TypeScript, React — matches Playwire’s published tooling signals.',
    'Since Playwire: Lore Machine founding engineer (real-time product, APIs, Vercel); AI24/DCC institutional dashboards and automation.',
    'Demo artifact: interactive PARMM-lite + RAMP metrics mock — shows publisher UX thinking, not generic portfolio.',
    'Warm path: Jarrett Abello (Chief Technologist) — former engineering leadership contact.',
  ],
  honestGaps: [
    'No production ML model ownership at scale — adjacent via Lore Machine/AI24, not Sr ML Engineer profile.',
    'Ad-tech domain is 2021–2022 vintage — demo and homework show current RAMP/PARMM/Flex narrative.',
    'Careers page has limited public reqs — warm intro is primary path.',
  ],
  recommendedFraming:
    'Returning alum who already shipped publisher solutions and data pipelines — now brings full-stack/AI product depth and a concrete publisher-journey demo.',
} as const;
