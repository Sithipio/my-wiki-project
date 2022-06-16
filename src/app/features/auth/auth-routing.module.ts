import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./pages/log-in/log-in.component";
import {SingUpComponent} from "./pages/sing-up/sing-up.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'log-in' },
      { path: 'log-in', component: LogInComponent, pathMatch: 'full' },
      { path: 'sign-up', component: SingUpComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
