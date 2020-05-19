import { createAction, props } from '@ngrx/store';

export const startActivity = createAction('[ACTIVITY] Start Activity', props<{label: string}>());

export const stopActivity = createAction('[ACTIVITY] Stop Activity', props<{id: string}>());

export const deleteActivity = createAction('[ACTIVITY] Delete Activity', props<{id: string}>());
