import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingLogistica } from './logistica.routing';

import { LogisticaComponent } from './logistica.component';

@NgModule({
  imports: [
    CommonModule,
    routingLogistica
  ],
  declarations: [LogisticaComponent]
})
export class LogisticaModule { }
