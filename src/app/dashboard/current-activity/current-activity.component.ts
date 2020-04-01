import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RunningActivity } from 'src/app/interfaces/activity.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-current-activity',
  styleUrls: ['./current-activity.component.styl'],
  templateUrl: './current-activity.component.html',
})
export class CurrentActivityComponent implements OnInit {
  @Input() activity: RunningActivity;

  @Output() stopActivity = new EventEmitter<string>();

  @Output() deleteActivity = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  stop() {
    this.stopActivity.emit(this.activity.id);
  }

  delete() {
    this.deleteActivity.emit(this.activity.id);
  }

}
