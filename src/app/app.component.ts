import { Component } from '@angular/core';
import { ActivitiesService } from './store/activities/activities.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.styl'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(readonly activitiesService: ActivitiesService) {
    activitiesService.loadActivities();
  }
}
