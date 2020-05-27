import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RunningActivity, Activity } from '../../store/activities/activities.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-current-activity',
  styleUrls: ['./current-activity.component.styl'],
  templateUrl: './current-activity.component.html',
})
export class CurrentActivityComponent implements OnInit {
  @Input() activity: RunningActivity;

  @Output() stopActivity = new EventEmitter<RunningActivity>();

  @Output() deleteActivity = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  stop() {
    this.stopActivity.emit(this.activity);
  }

  delete() {
    this.deleteActivity.emit(this.activity.id);
  }

}
