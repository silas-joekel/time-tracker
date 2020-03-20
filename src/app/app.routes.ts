import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ACTIVITIES_ROUTES } from './activities/activities.routes';
import { STATISTICS_ROUTES } from './statistics/statistics.routes';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'activities',
        children: ACTIVITIES_ROUTES
    },
    {
        path: 'statistics',
        children: STATISTICS_ROUTES
    }
];
