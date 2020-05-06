import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

import { Activity } from '../interfaces/activity.interface';

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

  constructor() { }

  startActivity(label: string): void {
    const activity = {
      id: Math.random().toString(36).substring(7),
      start: new Date(),
      label,
    };

    this.activities.push(activity);
  }

  stopActivity(id: string): void {
    console.log('stopping activities is not possible by now');
  }

  deleteActivity(id: string): void {
    console.log('deleting activities is not possible by now');
  }

  getActivityById(id: string): Observable<Activity> {
    return of(this.activities.find(a => a.id === id));
  }

  getActivities(): Observable<Activity[]> {
    return of(this.activities);
  }

  getRunningActivities(): Observable<Activity[]> {
    return of(this.activities.filter(a => !a.end));
  }

  getSuggestedActivities(): Observable<string[]> {
    return of(['Eat', 'Sleep', 'Work']);
  }
}
