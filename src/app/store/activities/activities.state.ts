import { EntityState } from '@ngrx/entity';

import { Activity } from './activities.interface';
import { adapter } from './activities.adapter';

export interface ActivitiesState extends EntityState<Activity> {
    runningActivityIds: string[];
}

export const initialState: ActivitiesState = adapter.getInitialState({
    runningActivityIds: [],
});
