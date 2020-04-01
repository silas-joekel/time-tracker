import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';

import { CurrentActivityComponent } from './current-activity/current-activity.component';
import { SuggestedActivityComponent } from './suggested-activity/suggested-activity.component';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

export default {
    component: DashboardComponent,
    decorators: [
        moduleMetadata({
            declarations: [CurrentActivityComponent, SuggestedActivityComponent],
            imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, SharedModule],
        }),
    ],
    title: 'Dashboard',
};

export const Basic = () => ({
    component: DashboardComponent,
});
