import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { TiComponent } from './ti.component';

const routes: Routes = [
    {
    path: '',
    component: TiComponent
  }
];

export const routingTi: ModuleWithProviders = RouterModule.forChild(routes);
