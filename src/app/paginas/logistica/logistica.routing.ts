import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { LoginComponent } from './../login/login.component';

const routes: Routes = [
    {
    path: '',
    component: LoginComponent
  }
];

export const routingLogistica: ModuleWithProviders = RouterModule.forChild(routes);
