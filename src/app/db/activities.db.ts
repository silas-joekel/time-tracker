import { ObjectStoreMeta } from 'ngx-indexed-db';

export const activitiesStoreMeta: ObjectStoreMeta = {
    store: 'activities',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
        {
            name: 'label',
            keypath: 'label',
            options: { unique: false },
        },
        {
            name: 'start',
            keypath: 'start',
            options: { unique: false },
        },
        {
            name: 'end',
            keypath: 'end',
            options: { unique: false },
        },
    ],
};
