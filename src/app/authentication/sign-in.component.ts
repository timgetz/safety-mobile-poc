import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'st-sign-in',
  template: `
    <h3>Please sign in to use all features</h3>
    <form [formGroup]="myForm" (ngSubmit)="onSignin()">
      <div class="form-group">
          <label for="email">E-Mail</label>
          <input formControlName="email" type="email" id="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input formControlName="password" type="password" id="password" class="form-control">
      </div>
      <button type="submit" [disabled]="!myForm.valid" class ="btn btn-primary"> Sign In</button>
    </form>
  `,
  styles: []
})
export class SignInComponent implements OnInit {

  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  onSignin() {
    this.authService.signinUser(this.myForm.value);
  }

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
