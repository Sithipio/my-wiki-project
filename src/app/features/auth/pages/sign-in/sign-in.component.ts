import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { IUserSignIn} from "@core/interfaces/sign-in.interface";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() { }

  onSubmit(): IUserSignIn {
    console.warn(this.signInForm.value);
    return this.signInForm.value;
  }

}
