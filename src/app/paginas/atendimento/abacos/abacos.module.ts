import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../shared/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routingAtendimentoAbacos } from './abacos.routing';
import { AbacosComponent } from './abacos.component';
import { ConsultaPedidosComponent } from './consulta-pedidos/consulta-pedidos.component';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    routingAtendimentoAbacos
  ],
  declarations: [AbacosComponent, ConsultaPedidosComponent, ConsultaProdutosComponent]
})
export class AbacosModule { }
