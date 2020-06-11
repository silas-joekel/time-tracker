import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl } from '@angular/forms';

import { RunningActivity } from '../store/activities/activities.interface';
import { ActivitiesService } from '../store/activities/activities.service';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.styl'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  currentActivities: Observable<RunningActivity[]> = this.activitiesService.getRunningActivities();
  suggestedActivities: Observable<string[]> = this.activitiesService.getSuggestedActivities();

  newActivity = new FormControl('');

  // rxjs is actually pretty awesome :D
  filteredLabels: Observable<string[]> = combineLatest([
      this.activitiesService.getSortedLabels(),
      this.newActivity.valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([labels, partial]) => labels.filter((label: string) => label.toLowerCase().includes(partial.toLowerCase())))
    );

  constructor(private readonly activitiesService: ActivitiesService) {}

  startActivity(label: string): void {
    this.activitiesService.startActivity(label);
  }

  stopActivity(activity: RunningActivity): void {
    this.activitiesService.stopActivity(activity);
  }

  deleteActivity(id: number): void {
    this.activitiesService.deleteActivity(id);
  }

  startNewActivity() {
    const newActivity = this.newActivity.value.trim();
    if (newActivity !== '') {
      this.activitiesService.startActivity(newActivity);
    }
    this.newActivity.setValue('');
  }

}
