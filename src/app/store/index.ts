import { ActionReducerMap } from '@ngrx/store';

import { ActivitiesState } from './activities/activities.state';
import { reducer as ActivitiesReducer } from './activities/activities.reducer';
import { ActivitiesEffects } from './activities/activities.effects';

export interface AppState {
    activities: ActivitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
    activities: ActivitiesReducer,
};

export const effects: any[] = [ActivitiesEffects];
