import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { PaginasModule } from './paginas/paginas.module';

import { NgaModule } from './shared/nga.module';
import { AppRoutingModule } from './app-routing.module';

import { GlobalState } from './global.state';
import { AppState } from './app.service';


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    PaginasModule
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
