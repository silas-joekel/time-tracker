import { ActionReducerMap } from '@ngrx/store';

import { ActivitiesState } from './activities/activities.state';
import { reducer as ActivitiesReducer } from './activities/activities.reducer';

export interface AppState {
    activitiesState: ActivitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
    activitiesState: ActivitiesReducer,
};
