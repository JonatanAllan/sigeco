import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiComponent } from './ti.component';

const routes: Routes = [
  {
    path: '',
    component: TiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiRoutingModule { }
