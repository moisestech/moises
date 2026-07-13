/**
 * Shared Submittable artist statement + work samples for both No Vacancy proposals.
 */
import {
  noVacancyArtistStatement,
  noVacancyArtistStatementWordCount,
  noVacancyWorkSamples,
  noVacancy2026Meta,
} from '@/content/applications/no-vacancy-2026';

export {
  noVacancyArtistStatement,
  noVacancyArtistStatementWordCount,
  noVacancyWorkSamples,
};

export const noVacancySharedContact = {
  website: noVacancy2026Meta.website,
  email: noVacancy2026Meta.email,
  instagram: noVacancy2026Meta.instagram,
  headshotUrl: noVacancy2026Meta.headshotUrl,
} as const;

export const noVacancyArtistBioShort = `Moises Sanabria is a Miami-based interdisciplinary artist whose work materializes what it feels like to live inside algorithmic networks. Born in Venezuela and based in South Florida, he treats reclaimed electronics, consumer objects, and code as sculptural vocabulary within a coherent installation practice.`;

export const noVacancyHubSeo = {
  title: 'No Vacancy Miami Beach 2026 — Dual Proposals | Moises Sanabria',
  description:
    'Application packet for No Vacancy Miami Beach 2026: Volver a Valer (migrating value) and Touch Grass: Circuit Floor. Temporary hotel installations. Deadline July 16, 2026.',
} as const;
