import { Routes } from '@angular/router';
import { ACTIVITIES_ROUTES } from './activities/activities.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { STATISTICS_ROUTES } from './statistics/statistics.routes';

export const APP_ROUTES: Routes = [
    {
        component: DashboardComponent,
        path: '',
        pathMatch: 'full',
    },
    {
        children: ACTIVITIES_ROUTES,
        path: 'activities',
    },
    {
        children: STATISTICS_ROUTES,
        path: 'statistics',
    },
];
