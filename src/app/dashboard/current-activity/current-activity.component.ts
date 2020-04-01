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

  @Output() stop = new EventEmitter<string>();

  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  stopActivity() {
    this.stop.emit(this.activity.id);
  }

  deleteActivity() {
    this.delete.emit(this.activity.id);
  }

}
