import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-suggested-activity',
  styleUrls: ['./suggested-activity.component.styl'],
  templateUrl: './suggested-activity.component.html',
})
export class SuggestedActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
