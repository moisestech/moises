export interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  tag: string;
  link: string;
}

export interface EventCategory {
  title: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Performance in Flux',
    date: 'Feb 21-22',
    image:
      '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
    location: 'Orlando, FL',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
    link: 'https://www.bacfl.org/events/performance-in-flux-february-2025',
    tag: 'Gallery experience',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    title: 'Bakehouse Open Studios',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
    date: 'Mar 11',
    location: 'Wynwood, Miami, USA',
    link: 'https://www.bacfl.org/events/open-studios-march-2025',
    tag: 'Gallery experience',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739627138/art/moisestech-website/events/logo-swiss-creator-academy_xquotg.jpg',
    title: 'Swiss Creator Academy',
    description:
      'Hear artist, proffesionals, and researchers about contemporary content creation in the image economy',
      date: 'Mar 11',
      location: 'Winterthur, Switzerland',
      link: 'https://www.swisscreatoracademy.com',
      tag: 'Lecture',
  },
];

const eventCategories: EventCategory[] = [
  {
    title: 'Films',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628341/art/moisestech-website/films/2013_all-studios-everything_a03n0i.jpg',
  },
  {
    title: 'Families',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628821/art/moisestech-website/families/families-moises-sanabria_zx5ege.jpg',
  },
  {
    title: 'Members',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628645/art/moisestech-website/members/bakehouse-membership_xpajj5.jpg',
  },
  {
    title: 'Talks',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739628542/art/moisestech-website/talks/24_artec_moises-sanabria_valor-de-la-imagen_dfbhqb.webp',
  },
];

export { events, eventCategories };
