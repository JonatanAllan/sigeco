import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../shared/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { routing } from './paginas.routing';
import { PaginasComponent } from './paginas.component';

import { RestClientService } from './../shared/services/restClient/restClient.service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    PaginasComponent
  ], providers: [
    RestClientService
  ]
})

export class PaginasModule {

}
