import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { NgxIndexedDBService } from 'ngx-indexed-db';

import * as ActivitiesActions from './activities.actions';

@Injectable()
export class ActivitiesEffects {
    @Effect()
    startActivity$: Observable<Action> = this.actions$.pipe(
        ofType(ActivitiesActions.startActivity),
        switchMap(action => {
            const newActivity = {
                label: action.label,
                start: new Date(),
            };

            return from(this.dbService.add('activities', newActivity)).pipe(
                map(id => ActivitiesActions.startActivitySuccess({ ...newActivity, id })),
                catchError(() => of(ActivitiesActions.startActivityFailure()))
            );
        })
    );

    @Effect()
    stopActivity$: Observable<Action> = this.actions$.pipe(
        ofType(ActivitiesActions.stopActivity),
        switchMap(action => {
            const updatedActivity = {
                id: action.id,
                label: action.label,
                start: action.start,
                end: new Date(),
            };

            return from(this.dbService.update('activities', updatedActivity)).pipe(
                map(() => ActivitiesActions.stopActivitySuccess(updatedActivity)),
                catchError(() => of(ActivitiesActions.stopActivityFailure()))
            );
        })
    );

    @Effect()
    deleteActivity$: Observable<Action> = this.actions$.pipe(
        ofType(ActivitiesActions.deleteActivity),
        switchMap(action => {
            return from(this.dbService.delete('activities', action.id)).pipe(
                map(() => ActivitiesActions.deleteActivitySuccess({id: action.id})),
                catchError(() => of(ActivitiesActions.deleteActivityFailure()))
            );
        })
    );

    constructor(
        private actions$: Actions,
        private dbService: NgxIndexedDBService
    ) {}
}
