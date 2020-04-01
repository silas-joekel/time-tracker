import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';

import { CurrentActivityComponent } from './current-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';

export default {
    component: CurrentActivityComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, SharedModule],
        }),
    ],
    title: 'Current Activity Component',
};

export const Basic = () => ({
    component: CurrentActivityComponent,
    props: {
        activity: {
            id: 'Work',
            start: Date.parse('12 Mar 2020 14:20:00 GMT'),
        },
    },
});

export const ComponentWithoutActivityInput = () => ({
    component: CurrentActivityComponent,
});
