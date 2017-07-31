import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { DesenvolvimentoComponent } from './desenvolvimento.component';

const routes: Routes = [
    {
    path: '',
    component: DesenvolvimentoComponent
  }
];

export const routingDesenvolvimento: ModuleWithProviders = RouterModule.forChild(routes);
