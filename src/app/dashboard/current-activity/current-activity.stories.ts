import { CurrentActivityComponent } from './current-activity.component';

export default {
    component: CurrentActivityComponent,
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
