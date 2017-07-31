import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { FinanceiroComponent } from './financeiro.component';

const routes: Routes = [
    {
    path: '',
    component: FinanceiroComponent
  }
];

export const routingFinanceiro: ModuleWithProviders = RouterModule.forChild(routes);
