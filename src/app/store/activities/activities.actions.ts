import { createAction, props } from '@ngrx/store';
import { Activity, RunningActivity } from './activities.interface';

export const loadActivities = createAction('[ACTIVITY] Load Activities');
export const loadActivitiesSuccess = createAction('[ACTIVITIES] Load Activities Success', props<{activities: Activity[]}>());
export const loadActivitiesFailure = createAction('[ACTIVITIES] Load Activities Failure');

export const startActivity = createAction('[ACTIVITY] Start Activity', props<Pick<Activity, 'label'>>());
export const startActivitySuccess = createAction('[ACTIVITIES] Start Activity Success', props<RunningActivity>());
export const startActivityFailure = createAction('[ACTIVITIES] Start Activity Failure');

export const stopActivity = createAction('[ACTIVITY] Stop Activity', props<RunningActivity>());
export const stopActivitySuccess = createAction('[ACTIVITIES] Stop Activity Success', props<Activity>());
export const stopActivityFailure = createAction('[ACTIVITIES] Stop Activity Failure');

export const deleteActivity = createAction('[ACTIVITY] Delete Activity', props<Pick<Activity, 'id'>>());
export const deleteActivitySuccess = createAction('[ACTIVITY] Delete Activity Success', props<Pick<Activity, 'id'>>());
export const deleteActivityFailure = createAction('[ACTIVITY] Delete Activity Failure');
