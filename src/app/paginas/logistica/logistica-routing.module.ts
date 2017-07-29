import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogisticaComponent } from './logistica.component';

const routes: Routes = [
  {
    path: '',
    component: LogisticaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticaRoutingModule { }
