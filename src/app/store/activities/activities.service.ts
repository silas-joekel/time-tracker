import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Store } from '@ngrx/store';

import { Activity } from './activities.interface';
import * as fromActions from './activities.actions';
import { ActivitiesState } from './activities.state';
import * as fromReducer from './activities.reducer';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor(private store: Store<ActivitiesState>) { }

  startActivity(label: string): void {
    this.store.dispatch(fromActions.startActivity({label}));
  }

  stopActivity(id: string): void {
    this.store.dispatch(fromActions.stopActivity({ id }));
  }

  deleteActivity(id: string): void {
    this.store.dispatch(fromActions.deleteActivity({ id }));
  }

  getActivities(): Observable<Activity[]> {
    return this.store.select(fromReducer.selectAllActivities);
  }

  getRunningActivities(): Observable<Activity[]> {
    return this.store.select(fromReducer.selectRunningActivities);
  }

  getSuggestedActivities(): Observable<string[]> {
    return of(['Eat', 'Sleep', 'Work']);
  }
}
