import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingAtendimento } from './atendimento.routing';

import { AbacosModule } from './abacos/abacos.module';
import { AtendimentoComponent } from './atendimento.component';
import { AbacosComponent } from './abacos/abacos.component';
import { PedidosBarradosComponent } from './pedidos-barrados/pedidos-barrados.component';

@NgModule({
  imports: [
    CommonModule,
    AbacosModule,
    routingAtendimento
  ],
  declarations: [AtendimentoComponent, PedidosBarradosComponent]
})
export class AtendimentoModule { }
