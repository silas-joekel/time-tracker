import { CurrentActivityComponent } from './current-activity.component';

export default {
    component: CurrentActivityComponent,
    title: 'Current Activity Component',
};

export const ComponentWithoutActivity = () => ({
    component: CurrentActivityComponent,
});

export const ComponentWithSimpleActivity = () => ({
    component: CurrentActivityComponent,
    props: {
        activity: {
            id: 'Work',
            start: Date.parse('12 Mar 2020 14:20:00 GMT'),
        },
    },
});

export const ComponentWithPluginActivity = () => ({
    component: CurrentActivityComponent,
    props: {
        activity: {
            id: 'Sleep',
            start: Date.parse('13 Mar 2020 00:30:00 GMT'),
        },
    },
});
