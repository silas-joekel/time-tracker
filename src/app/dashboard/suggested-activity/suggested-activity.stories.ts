import { SuggestedActivityComponent } from './suggested-activity.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export default {
    component: SuggestedActivityComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
        }),
    ],
    title: 'Suggested Activity Component',
};

export const Basic = () => ({
    component: SuggestedActivityComponent,
    props: {
        activity: 'Work',
    },
});
