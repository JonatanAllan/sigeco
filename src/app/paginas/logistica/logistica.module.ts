import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticaRoutingModule } from './logistica-routing.module';
import { LogisticaComponent } from './logistica.component';

@NgModule({
  imports: [
    CommonModule,
    LogisticaRoutingModule
  ],
  declarations: [LogisticaComponent]
})
export class LogisticaModule { }
