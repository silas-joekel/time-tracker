import { createReducer, Action, on, createSelector, createFeatureSelector } from '@ngrx/store';

import { startActivity, stopActivity, deleteActivity } from './activities.actions';
import * as fromAdapter from './activities.adapter';
import { ActivitiesState, initialState } from './activities.state';
import { Activity } from './activities.interface';
import { Dictionary } from '@ngrx/entity';

const activityReducer = createReducer(
    initialState,
    on(startActivity, (state, { label }) => {
        const activity = {
            id: Math.random().toString(36).substring(7),
            start: new Date(),
            label,
        };

        return {
            ...fromAdapter.adapter.addOne(activity, state),
            runningActivityIds: [...state.runningActivityIds, activity.id],
        };
    }),
    on(stopActivity, (state, { id }) => {
        const update = {
            id,
            changes: {
                end: new Date(),
            },
        };

        return {
            ...fromAdapter.adapter.updateOne(update, state),
            runningActivityIds: [...state.runningActivityIds.filter(e => e !== id)],
        };
    }),
    on(deleteActivity, (state, { id }) => {
        return {
            ...fromAdapter.adapter.removeOne(id, state),
            runningActivityIds: [...state.runningActivityIds.filter(e => e !== id)],
        };
    })
);

export function reducer(state: ActivitiesState | undefined, action: Action) {
    return activityReducer(state, action);
}

export const getActivitiesState = createFeatureSelector<ActivitiesState>('activities');

export const selectActivityIds = createSelector(getActivitiesState, fromAdapter.selectActivityIds);
export const selectActivityEntities = createSelector(getActivitiesState, fromAdapter.selectActivityEntities);
export const selectAllActivities = createSelector(getActivitiesState, fromAdapter.selectAllActivities);
export const selectActivityCount = createSelector(getActivitiesState, fromAdapter.selectActivityCount);

export const selectRunningActivityIds = createSelector(
    getActivitiesState,
    (state: ActivitiesState) => state.runningActivityIds
);
export const selectRunningActivities = createSelector(
    selectActivityEntities,
    selectRunningActivityIds,
    (entities: Dictionary<Activity>, ids: string[]) => {
        return ids.map(id => entities[id]);
    }
);
