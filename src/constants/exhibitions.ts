export interface Exhibitions {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  location?: string;
  description?: string;
}

export const exhibitions: Exhibitions[] = [
  {
    id: 1,
    title: 'Performance in Flux',
    date: 'February 21-22',
    imageUrl:
      '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
    location: 'Orlando, USA',
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
    title: 'Low Resolution',
    date: 'Oct 23',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483432/art/moisestech-website/exhibitions/oct_2024_post_masters_low_resolution/oct_2024_post_masters_low_resolution_poster_utzgio.png',
    location: 'NY, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  {
    id: 5,
    title: 'Notions of Home',
    date: '2024',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg',
    location: 'Miami, USA',
    description:
      'ICA Miami X Dminti presents Notions of Home, a group exhibition featuring works by artists from across the globe.',
  },
  {
    id: 6,
    title: 'Breadbytes',
    date: '2023',
    imageUrl:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1739483633/art/moisestech-website/exhibitions/dec_2023_bakehouse_breadbytes/exhibition_shot_2_nbx7ky.jpg',
    location: 'Miami, USA',
    description:
      'Join us for the first open studio event of the year! Visit Bakehouse artists in their studios, groove to tunes by local DJs',
  },
  // {
  //   id: 6,
  //   title: 'Artweek Satellite Art Show',
  //   date: 'Dec 6-11, 2024',
  //   imageUrl:
  //     '/events/performance-in-flux-feb/performance-in-flux-feb21-22-orlando.png',
  //   location: 'Orlando, FL',
  //   description:
  //     'A two-day performance art event exploring the intersection of technology and human expression.',
  // },
];
