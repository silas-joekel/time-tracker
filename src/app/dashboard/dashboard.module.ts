import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurrentActivityComponent } from './current-activity/current-activity.component';
import { SuggestedActivityComponent } from './suggested-activity/suggested-activity.component';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentActivityComponent,
    SuggestedActivityComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class DashboardModule { }
