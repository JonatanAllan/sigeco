import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingDashboard } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    routingDashboard
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
