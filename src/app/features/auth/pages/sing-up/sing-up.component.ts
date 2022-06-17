import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {IUserSignUp} from "@core/interfaces/sign-up.interface";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required,
   /* control => this.validatePasswords(control, 'confirmPassword')*/]),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

/*  validatePasswords(control: AbstractControl, name: string) {
    if (
      this.signUpForm === undefined ||
      this.signUpForm.value.password === '' ||
      this.signUpForm.value.confirmPassword === ''
    ) {
      return null;
    } else if (this.password.value === this.confirmPassword.value) {
      if (
        name === 'password' &&
        this.confirmPassword.hasError('passwordMismatch')
      ) {
        this.password.setErrors(null);
        this.confirmPassword.updateValueAndValidity();
      } else if (
        name === 'confirmPassword' &&
        this.password.hasError('passwordMismatch')
      ) {
        this.confirmPassword.setErrors(null);
        this.password.updateValueAndValidity();
      }
      return null;
    } else {
      return {
        passwordMismatch: { value: 'The provided passwords do not match' }
      };
    }
  }*/

  onSubmit(): IUserSignUp {
    console.warn(this.signUpForm.value);
    return this.signUpForm.value;
  }
}
