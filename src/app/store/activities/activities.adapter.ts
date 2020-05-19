import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Activity } from './activities.interface';

export function sortByStartDate(a: Activity, b: Activity): number {
    return a.start.getTime() - b.start.getTime();
}

export const adapter: EntityAdapter<Activity> = createEntityAdapter<Activity>({
    sortComparer: sortByStartDate,
});

export const {
    selectIds: selectActivityIds,
    selectEntities: selectActivityEntities,
    selectAll: selectAllActivities,
    selectTotal: selectActivityCount,
} = adapter.getSelectors();
