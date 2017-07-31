import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingDesenvolvimento } from './desenvolvimento.routing';

import { DesenvolvimentoComponent } from './desenvolvimento.component';

@NgModule({
  imports: [
    CommonModule,
    routingDesenvolvimento
  ],
  declarations: [DesenvolvimentoComponent]
})
export class DesenvolvimentoModule { }
