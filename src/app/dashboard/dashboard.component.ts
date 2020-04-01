import { Component, OnInit } from '@angular/core';
import { RunningActivity } from '../interfaces/activity.interface';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.styl'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  currentActivities: RunningActivity[] = [
    {
      id: '123',
      label: 'Work',
      start: new Date('12 Mar 2020 14:20:00 GMT'),
    },
    {
      id: '1234',
      label: 'Sleep',
      start: new Date('31 Mar 2020 23:45:00 GMT'),
    },
    {
      id: '12345',
      label: 'New',
      start: new Date(),
    },
  ];
  suggestedActivities: string[] = [
    'Work',
    'Sleep',
    'Eat',
  ];
  newActivity: string;

  constructor() { }

  ngOnInit(): void {
  }

  startNewActivity() {
    console.log(this.newActivity);
    this.newActivity = '';
  }

}
