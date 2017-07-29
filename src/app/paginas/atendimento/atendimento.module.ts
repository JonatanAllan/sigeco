import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoComponent } from './atendimento.component';
import { AbacosComponent } from './abacos/abacos.component';
import { PedidosBarradosComponent } from './pedidos-barrados/pedidos-barrados.component';

@NgModule({
  imports: [
    CommonModule,
    AtendimentoRoutingModule
  ],
  declarations: [AtendimentoComponent, AbacosComponent, PedidosBarradosComponent]
})
export class AtendimentoModule { }
