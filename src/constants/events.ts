export interface Events {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  location?: string;
  description?: string;
}

export const events: Events[] = [
  {
    id: 1,
    title: 'Performance in Flux',
    date: 'Feb 21-22',
    imageUrl:
      '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
    location: 'Orlando, FL',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
  },
  {
    id: 2,
    title: 'Bakehouse Open Studios',
    date: 'Mar 11',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    location: 'Miami, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 3,
    title: 'Artweek Satellite Art Show',
    date: 'Dec 6-11',
    imageUrl:
      '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
    location: 'Orlando, FL',
    description:
      'A two-day performance art event exploring the intersection of technology and human expression.',
  },
];
