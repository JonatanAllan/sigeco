import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvimentoRoutingModule } from './desenvolvimento-routing.module';
import { DesenvolvimentoComponent } from './desenvolvimento.component';

@NgModule({
  imports: [
    CommonModule,
    DesenvolvimentoRoutingModule
  ],
  declarations: [DesenvolvimentoComponent]
})
export class DesenvolvimentoModule { }
