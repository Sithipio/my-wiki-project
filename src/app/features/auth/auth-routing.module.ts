import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {SingUpComponent} from "./pages/sing-up/sing-up.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
      { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
      { path: 'sign-up', component: SingUpComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
