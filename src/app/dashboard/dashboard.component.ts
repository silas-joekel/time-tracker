import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { RunningActivity } from '../interfaces/activity.interface';
import { ActivitiesService } from '../store/activities.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.styl'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  currentActivities: Observable<RunningActivity[]> = this.activitiesService.getRunningActivities();
  suggestedActivities: Observable<string[]> = this.activitiesService.getSuggestedActivities();
  newActivity: string;

  constructor(private readonly activitiesService: ActivitiesService) {}

  ngOnInit(): void {
  }

  startActivity(label: string): void {
    this.activitiesService.startActivity(label);
  }

  stopActivity(id: string): void {
    this.activitiesService.stopActivity(id);
  }

  deleteActivity(id: string): void {
    this.activitiesService.deleteActivity(id);
  }

  startNewActivity() {
    this.activitiesService.startActivity(this.newActivity);
    this.newActivity = '';
  }

}
