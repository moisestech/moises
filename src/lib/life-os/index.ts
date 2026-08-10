export {
  getLifeOsConnection,
  isLifeOsConfigured,
  requireLifeOsTable,
  LIFE_OS_BASE_ID_DEFAULT,
  LIFE_OS_LINKED_TABLE_ID,
} from '@/lib/life-os/config';
export { fetchLifeOsRecords, discoverLifeOsTables } from '@/lib/life-os/client';
export { listLifeOsInbox, type LifeOsInboxItem } from '@/lib/life-os/inbox';
export { listLifeOsActions, type LifeOsAction } from '@/lib/life-os/actions';
export { listLifeOsProjects, type LifeOsProject } from '@/lib/life-os/projects';
export { listLifeOsOpportunities, type LifeOsOpportunity } from '@/lib/life-os/opportunities';
export { LIFE_OS_TABLE_IDS } from '@/lib/life-os/fields';
