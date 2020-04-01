import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CurrentActivityComponent } from './current-activity/current-activity.component';
import { SuggestedActivityComponent } from './suggested-activity/suggested-activity.component';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentActivityComponent,
    SuggestedActivityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
  ],
})
export class DashboardModule { }
