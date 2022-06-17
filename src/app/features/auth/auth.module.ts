import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SingUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
