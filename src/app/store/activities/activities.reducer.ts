import { createReducer, Action, on, createSelector, createFeatureSelector } from '@ngrx/store';

import { startActivitySuccess, stopActivitySuccess, deleteActivitySuccess, loadActivitiesSuccess } from './activities.actions';
import * as fromAdapter from './activities.adapter';
import { ActivitiesState, initialState } from './activities.state';
import { Activity } from './activities.interface';
import { Dictionary } from '@ngrx/entity';

const activityReducer = createReducer(
    initialState,
    on(loadActivitiesSuccess, (state, props) => {
        const runningActivityIds = props.activities.filter(a => !a.end).map(a => a.id);

        return {
            ...fromAdapter.adapter.setAll(props.activities, state),
            runningActivityIds,
        };
    }),
    on(startActivitySuccess, (state, activity) => {
        const newActivity = {
            id: activity.id,
            label: activity.label,
            start: activity.start,
        };

        return {
            ...fromAdapter.adapter.addOne(newActivity, state),
            runningActivityIds: [...state.runningActivityIds, activity.id],
        };
    }),
    on(stopActivitySuccess, (state, { id, end }) => {
        const update = {
            id,
            changes: {
                end,
            },
        };

        return {
            ...fromAdapter.adapter.updateOne(update, state),
            runningActivityIds: [...state.runningActivityIds.filter(e => e !== id)],
        };
    }),
    on(deleteActivitySuccess, (state, { id }) => {
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
    (entities: Dictionary<Activity>, ids: number[]) => {
        return ids.map(id => entities[id]);
    }
);

export const selectActivityCountByLabel = createSelector(
    selectAllActivities,
    (activities: Activity[]) => activities.reduce((acc, activity) => {
        acc[activity.label] = acc[activity.label] + 1 || 1;
        return acc;
    }, {})
);
export const selectSuggestedActivities = createSelector(
    selectActivityCountByLabel,
    (groups: { [key: string]: number}) => Object.keys(groups).sort((a: string, b: string) => groups[a] - groups[b]).slice(0, 3)
);
