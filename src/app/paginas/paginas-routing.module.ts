import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasComponent } from './paginas.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
