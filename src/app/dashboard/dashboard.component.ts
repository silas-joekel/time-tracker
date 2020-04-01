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
  ];
  suggestedActivities: string[] = [
    'Work',
    'Sleep',
    'Eat',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
