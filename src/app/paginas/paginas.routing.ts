import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PaginasComponent } from './paginas.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'paginas',
    component: PaginasComponent,
    children: [
      { path: '', redirectTo: 'atendimento', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'atendimento', loadChildren: './atendimento/atendimento.module#AtendimentoModule' },
      { path: 'financeiro', loadChildren: './financeiro/financeiro.module#FinanceiroModule' },
      { path: 'logistica', loadChildren: './logistica/logistica.module#LogisticaModule' },
      { path: 'marketing', loadChildren: './marketing/marketing.module#MarketingModule' },
      { path: 'ti', loadChildren: './ti/ti.module#TiModule' },
      { path: 'desenvolvimento', loadChildren: './desenvolvimento/desenvolvimento.module#DesenvolvimentoModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
