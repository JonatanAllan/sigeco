import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingFinanceiro } from './financeiro.routing';

import { FinanceiroComponent } from './financeiro.component';

@NgModule({
  imports: [
    CommonModule,
    routingFinanceiro
  ],
  declarations: [FinanceiroComponent]
})
export class FinanceiroModule { }
