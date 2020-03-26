import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-current-activity',
  styleUrls: ['./current-activity.component.styl'],
  templateUrl: './current-activity.component.html',
})
export class CurrentActivityComponent implements OnInit {
  @Input() activity: { start: Date, id: string };

  constructor() { }

  ngOnInit(): void {
  }

}
