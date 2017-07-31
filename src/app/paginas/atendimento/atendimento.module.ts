import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingAtendimento } from './atendimento.routing';

import { AtendimentoComponent } from './atendimento.component';
import { AbacosComponent } from './abacos/abacos.component';
import { PedidosBarradosComponent } from './pedidos-barrados/pedidos-barrados.component';

@NgModule({
  imports: [
    CommonModule,
    routingAtendimento
  ],
  declarations: [AtendimentoComponent, AbacosComponent, PedidosBarradosComponent]
})
export class AtendimentoModule { }
