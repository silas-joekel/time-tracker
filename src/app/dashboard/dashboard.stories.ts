import { moduleMetadata } from '@storybook/angular';

import { CurrentActivityComponent } from './current-activity/current-activity.component';
import { SuggestedActivityComponent } from './suggested-activity/suggested-activity.component';

import { DashboardComponent } from './dashboard.component';

export default {
    component: DashboardComponent,
    decorators: [
        moduleMetadata({
            declarations: [CurrentActivityComponent, SuggestedActivityComponent],
        }),
    ],
    title: 'Dashboard',
};

export const Basic = () => ({
    component: DashboardComponent,
});
