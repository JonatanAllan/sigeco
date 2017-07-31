import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingTi } from './ti.routing';

import { TiComponent } from './ti.component';

@NgModule({
  imports: [
    CommonModule,
    routingTi
  ],
  declarations: [TiComponent]
})
export class TiModule { }
