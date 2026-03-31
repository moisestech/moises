/** Public landing page content for Digital Divinities — extend gallery and exhibitions as assets grow. */

export const DIGITAL_DIVINITIES_PROJECT = {
  heroImage:
    'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
  heroImageAlt:
    'Digital Divinities interactive installation: LED panel and bust sculpture in a gallery setting',

  /** Open Graph / social — same as hero unless you add a dedicated 1200×630 asset */
  ogImage:
    'https://res.cloudinary.com/dck5rzi4h/image/upload/f_auto,q_auto,w_1200,h_630,c_fill,g_center/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',

  mailto: {
    email: 'm@moises.tech',
    subject: 'Inquiry: Digital Divinities — exhibition or program',
  },

  gallery: [
    {
      url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      alt: 'Installation view: Digital Divinities with LED display and sculpted bust',
      caption: 'Installation view',
    },
    {
      url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/c_fill,w_900,h_900,g_auto,q_auto/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      alt: 'Detail of the Digital Divinities LED panel and surrounding installation',
      caption: 'Display & sculpture detail',
    },
    {
      url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/c_fill,w_900,h_900,g_north,q_auto/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg',
      alt: 'Alternate crop: Digital Divinities installation documentation',
      caption: 'Spatial context',
    },
  ] as { url: string; alt: string; caption: string }[],

  technical: [
    { label: 'Footprint', value: 'Modular — wall or booth-style presentation. Exact dimensions provided on request for your venue.' },
    { label: 'Power', value: 'Standard AC; LED / compute load estimated per production spec (available to tech riders).' },
    { label: 'Internet', value: 'Stable connection recommended for live generative workflows; offline or cached modes negotiable.' },
    { label: 'Audience interaction', value: 'Visitors submit a portrait capture; optional facilitated queue for schools and public programs.' },
    { label: 'Setup time', value: 'Typically partial day to full day depending on venue AV and staffing (detailed schedule on booking).' },
    { label: 'Display format', value: 'Custom LED hardware panel plus sculptural element; adaptable to institutional display norms.' },
    { label: 'Staffing / facilitation', value: 'Can run attended or lightly staffed; workshop and literacy formats available with lead time.' },
  ] as { label: string; value: string }[],

  exhibitions: [
    {
      title: 'Art Week Miami / Lincoln Road context',
      detail:
        'Presented in dialogue with Miami’s art-week public, connecting street-facing audiences with real-time AI portraiture.',
    },
    {
      title: 'Bakehouse Art Complex — Open Studios (Spring 2024)',
      detail: 'Documented installation view with collaborative presentation (Fabiola Larios & Moises Sanabria).',
    },
    {
      title: 'Public programming fit',
      detail:
        'Suitable for festivals, museum lobbies, university galleries, AI literacy nights, and art-and-technology showcases.',
    },
  ],
} as const;

export function digitalDivinitiesMailtoHref(): string {
  const { email, subject } = DIGITAL_DIVINITIES_PROJECT.mailto;
  const q = new URLSearchParams({ subject });
  return `mailto:${email}?${q.toString()}`;
}
