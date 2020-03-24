import { Routes } from '@angular/router';
import { StatisticsComponent } from './statistics.component';

export const STATISTICS_ROUTES: Routes = [
    {
        component: StatisticsComponent,
        path: '',
        pathMatch: 'full',
    },
];
