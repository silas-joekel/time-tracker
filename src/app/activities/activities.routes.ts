import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

export const ACTIVITIES_ROUTES: Routes = [
    {
        component: ActivitiesComponent,
        path: '',
        pathMatch: 'full',
    },
];
