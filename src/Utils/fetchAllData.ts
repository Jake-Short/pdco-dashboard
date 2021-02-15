import { fetchAllDataReal } from './fetchAllDataReal';
import { fetchAllDataMock } from './fetchAllDataMock';

/**
 * Choose data source depending on environment
 */
export const fetchAllData =
  process.env.NODE_ENV === 'production' ? fetchAllDataReal : fetchAllDataMock;