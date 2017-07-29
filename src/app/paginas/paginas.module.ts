import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { NgaModule } from '../shared/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';

@NgModule({
  imports: [
    CommonModule, 
    AppTranslationModule, 
    NgaModule,
    PaginasRoutingModule
  ],
  declarations: [
    PaginasComponent
  ]
})

export class PaginasModule { 
  
}
