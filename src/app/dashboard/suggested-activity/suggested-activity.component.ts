import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-suggested-activity',
  styleUrls: ['./suggested-activity.component.styl'],
  templateUrl: './suggested-activity.component.html',
})
export class SuggestedActivityComponent implements OnInit {
  @Input() activity: string;

  constructor() { }

  ngOnInit(): void {
  }

}
