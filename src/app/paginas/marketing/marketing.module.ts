import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingMarketing } from './marketing.routing';

import { MarketingComponent } from './marketing.component';

@NgModule({
  imports: [
    CommonModule,
    routingMarketing
  ],
  declarations: [MarketingComponent]
})
export class MarketingModule { }
