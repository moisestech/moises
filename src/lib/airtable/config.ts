export const AIRTABLE_TABLES = {
  exhibitions: 'tblS6sQIFKY8EVxWw',
  works: 'tblCszBYabJtjyTDz',
} as const;

export const EXHIBITION_FIELDS = {
  title: 'Exhibition Title',
  institution: 'Institution',
  venueFullName: 'Venue Full Name',
  city: 'City',
  stateOrCountry: 'State / Country',
  year: 'Year',
  type: 'Type',
  includeInPublicCV: 'Include in Public CV',
  includeInApplicationCV: 'Include in Application CV',
  includeInBio: 'Include in Bio',
  bioPriority: 'Bio Priority',
  cvPriority: 'CV Priority',
  url: 'URL',
  publicDescription: 'Public Description',
} as const;
