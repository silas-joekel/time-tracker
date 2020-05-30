import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import { Activity, RunningActivity } from './activities.interface';
import * as fromActions from './activities.actions';
import { ActivitiesState } from './activities.state';
import * as fromReducer from './activities.reducer';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor(private store: Store<ActivitiesState>) { }

  loadActivities(): void {
    this.store.dispatch(fromActions.loadActivities());
  }

  startActivity(label: string): void {
    this.store.dispatch(fromActions.startActivity({ label }));
  }

  stopActivity(activity: RunningActivity): void {
    this.store.dispatch(fromActions.stopActivity(activity));
  }

  deleteActivity(id: number): void {
    this.store.dispatch(fromActions.deleteActivity({id}));
  }

  getActivities(): Observable<Activity[]> {
    return this.store.select(fromReducer.selectAllActivities);
  }

  getRunningActivities(): Observable<Activity[]> {
    return this.store.select(fromReducer.selectRunningActivities);
  }

  getSuggestedActivities(): Observable<string[]> {
    return this.store.select(fromReducer.selectSuggestedActivities);
  }
}
