import { Routes, RouterModule }  from '@angular/router';

import { PedidosBarradosComponent } from './pedidos-barrados/pedidos-barrados.component';
import { AbacosComponent } from './abacos/abacos.component';

import { AtendimentoComponent } from './atendimento.component';

const routes: Routes = [
    {
    path: '',
    component: AtendimentoComponent,
    children: [
      { path: 'abacos', component: AbacosComponent },
      { path: 'pedidos_barrados', component: PedidosBarradosComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
