import { SuggestedActivityComponent } from './suggested-activity.component';

export default {
    component: SuggestedActivityComponent,
    title: 'Suggested Activity Component',
};

export const Basic = () => ({
    component: SuggestedActivityComponent,
    props: {
        activity: 'Work',
    },
});

export const ComponentWithoutInput = () => ({
    component: SuggestedActivityComponent,
});
