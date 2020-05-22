import { DBConfig } from 'ngx-indexed-db';

import { activitiesStoreMeta } from './activities.db';

export const dbConfig: DBConfig = {
    name: 'timetrackerDB',
    version: 1,
    objectStoresMeta: [activitiesStoreMeta],
};
