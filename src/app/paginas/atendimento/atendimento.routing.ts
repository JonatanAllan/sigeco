import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { PedidosBarradosComponent } from './pedidos-barrados/pedidos-barrados.component';
import { AbacosComponent } from './abacos/abacos.component';

import { AtendimentoComponent } from './atendimento.component';

const routes: Routes = [
    {
    path: '',
    component: AtendimentoComponent,
    children: [
      { path: 'abacos', loadChildren: './abacos/abacos.module#AbacosModule'},
      { path: 'pedidos-barrados', component: PedidosBarradosComponent },
    ]
  }
];

export const routingAtendimento: ModuleWithProviders = RouterModule.forChild(routes);
