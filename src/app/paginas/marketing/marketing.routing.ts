import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { MarketingComponent } from './marketing.component';

const routes: Routes = [
    {
    path: '',
    component: MarketingComponent
  }
];

export const routingMarketing: ModuleWithProviders = RouterModule.forChild(routes);
