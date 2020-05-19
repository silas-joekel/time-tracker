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
  activities: Activity[] = [
    {
      id: '123',
      label: 'Work',
      start: new Date('12 Mar 2020 14:20:00 GMT'),
    },
    {
      id: '1234',
      label: 'Sleep',
      start: new Date('31 Mar 2020 23:45:00 GMT'),
      end: new Date('1 April 2020 06:30:00 GMT'),
    },
    {
      id: '12345',
      label: 'Eat',
      start: new Date(),
    },
  ];

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

  getActivityById(id: string): Observable<Activity> {
    return of(this.activities.find(a => a.id === id));
  }

  getActivities(): Observable<Activity[]> {
    return this.store.select(fromReducer.selectAllActivities);
  }

  getRunningActivities(): Observable<Activity[]> {
    // TODO: Running activities functionality
    return this.getActivities();
  }

  getSuggestedActivities(): Observable<string[]> {
    return of(['Eat', 'Sleep', 'Work']);
  }
}
