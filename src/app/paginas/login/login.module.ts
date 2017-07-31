import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../shared/nga.module';

import { routingLogin } from './login.routing';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routingLogin
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
