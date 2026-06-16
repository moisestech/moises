export type CVExhibition = {
  id: string;
  title: string;
  institution: string;
  venueFullName?: string;
  city: string;
  stateOrCountry: string;
  year: number;
  type: string;
  url?: string;
  publicDescription?: string;
};

export type CVData = {
  exhibitionsByYear: Record<string, CVExhibition[]>;
};
