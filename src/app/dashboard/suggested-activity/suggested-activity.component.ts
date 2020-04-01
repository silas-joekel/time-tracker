import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-suggested-activity',
  styleUrls: ['./suggested-activity.component.styl'],
  templateUrl: './suggested-activity.component.html',
})
export class SuggestedActivityComponent implements OnInit {
  @Input() activity: string;

  @Output() startActivity = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.startActivity.emit(this.activity);
  }

}
