export const sfccMeta = {
  program: 'FY 2026–2027 Visual and Media Artists Grant',
  organization: 'South Florida Cultural Consortium',
  shortName: 'SFCC',
  applicant: 'Moises Sanabria',
  route: '/grant/sfcc-2026',
  shortRoute: '/grant/sfcc',
  canonicalUrl: 'https://moises.tech/grant/sfcc-2026',
  shortUrl: 'https://moises.tech/grant/sfcc',
  website: 'https://moises.tech',
  selectedWorksHref: '/selected-works',
  email: 'm@moises.tech',
} as const;

export const sfccSeo = {
  title: 'Support materials | South Florida Cultural Consortium | Moises Sanabria',
  description:
    'Work samples and supporting video for Moises Sanabria’s FY 2026–2027 South Florida Cultural Consortium Visual and Media Artists Grant application.',
} as const;

export const sfccIntro = {
  eyebrow: `${sfccMeta.organization} · ${sfccMeta.program}`,
  headline: 'Support materials',
  lede: 'Video documentation of recent studio practice and the Bakehouse community that hosts it.',
  bio: 'Moises Sanabria is a Venezuelan-born, Miami-based interdisciplinary artist. His work examines how algorithmic environments, consumer objects, digital platforms, and networked systems shape belief, labor, value, identity, and desire. He is a resident artist at Bakehouse Art Complex.',
} as const;

export const sfccWorkSamples = [
  {
    id: 'vernissage-studio-visit',
    kind: 'youtube' as const,
    videoId: '_8UDJ-n-PB0',
    title: 'Studio Visit: Moises Sanabria / Bakehouse Art Complex, Miami',
    source: 'VernissageTV',
    year: '2025',
    href: 'https://www.youtube.com/watch?v=_8UDJ-n-PB0',
    caption:
      'On-site studio visit documenting Studio 43 at Bakehouse Art Complex — production environment, works in progress, and how recent propositions become material practice.',
  },
  {
    id: 'bakehouse-community-documentary',
    kind: 'vimeo' as const,
    videoId: '1154842944',
    title: 'Bakehouse Art Complex: On Community, Affordability, and Impact',
    source: 'Bakehouse Art Complex',
    year: '2026',
    href: 'https://vimeo.com/1154842944',
    caption:
      'Bakehouse 40th-anniversary documentary on community, affordability, and studio infrastructure. Created by Juan Luis Matos and Monica Sorelle (Preguntas Studio); produced and commissioned by Bakehouse Art Complex.',
  },
] as const;

export const sfccOgImage = {
  url: 'https://i.ytimg.com/vi/_8UDJ-n-PB0/maxresdefault.jpg',
  alt: 'Studio visit still: Moises Sanabria at Bakehouse Art Complex, Miami. VernissageTV, 2025.',
} as const;
