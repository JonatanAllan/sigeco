import { PedidosBarradosComponent } from './pedidos-barrados/pedidos-barrados.component';
import { AbacosComponent } from './abacos/abacos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
