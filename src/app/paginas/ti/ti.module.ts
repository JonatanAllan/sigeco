import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiRoutingModule } from './ti-routing.module';
import { TiComponent } from './ti.component';

@NgModule({
  imports: [
    CommonModule,
    TiRoutingModule
  ],
  declarations: [TiComponent]
})
export class TiModule { }
