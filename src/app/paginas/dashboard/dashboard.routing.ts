import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
    path: '',
    component: DashboardComponent
  }
];

export const routingDashboard: ModuleWithProviders = RouterModule.forChild(routes);
