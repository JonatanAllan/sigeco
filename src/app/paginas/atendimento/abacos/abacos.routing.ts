import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { AbacosComponent } from './abacos.component';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';
import { ConsultaPedidosComponent } from './consulta-pedidos/consulta-pedidos.component';

const routes: Routes = [
    {
    path: '',
    component: AbacosComponent,
    children: [
      { path: 'consulta-pedidos', component: ConsultaPedidosComponent},
      { path: 'consulta-produtos', component: ConsultaProdutosComponent },
    ]
  }
];

export const routingAtendimentoAbacos: ModuleWithProviders = RouterModule.forChild(routes);
