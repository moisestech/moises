export interface Event {
  image: string;
  title: string;
  description: string;
  tag: string;
}

export interface EventCategory {
  title: string;
  image: string;
}

const events: Event[] = [
  {
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    title: 'Films',
    description: 'Films',
    tag: 'Films',
  },
  {
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    title: 'Families',
    description: 'Families',
    tag: 'Families',
  },
  {
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    title: 'Members',
    description: 'Members',
    tag: 'Members',
  },
  {
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
    title: 'Talks',
    description: 'Talks',
    tag: 'Talks',
  },
];

const eventCategories: EventCategory[] = [
  {
    title: 'Films',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
  },
  {
    title: 'Families',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
  },
  {
    title: 'Members',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
  },
  {
    title: 'Talks',
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739126832/art/moisestech-website/events/moises-sanabria-open-studios-red-world-eye_nagdb6.jpg',
  },
];

export { events, eventCategories };
