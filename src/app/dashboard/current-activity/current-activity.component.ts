import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RunningActivity } from 'src/app/interfaces/activity.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-current-activity',
  styleUrls: ['./current-activity.component.styl'],
  templateUrl: './current-activity.component.html',
})
export class CurrentActivityComponent implements OnInit {
  @Input() activity: RunningActivity;

  constructor() { }

  ngOnInit(): void {
  }

}
