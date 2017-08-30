import { Component, OnInit } from '@angular/core';

import { User } from 'app/models/user';
import { UserService } from "app/services/user.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'stream-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Router: Router;
  loginError: any;
  loginErrorOpacity: number;
  signupError: any;
  signupErrorOpacity: number;
  
  UserService: UserService;

  constructor(UserService: UserService, Router: Router) {

    this.UserService = UserService;
    this.Router = Router;

  }

  onLogin(loginForm: NgForm) {
    this.UserService.login(loginForm.value)
      .subscribe((resp: any) => {
        this.Router.navigateByUrl('/')
      }, err => {
        this.loginError = err.json().errors;
        this.loginErrorOpacity = 1;
      })
  }

  onSignup(signupForm: NgForm) {
    this.UserService.signup(signupForm.value)
      .subscribe((resp: any) => {
        this.Router.navigateByUrl('/')
      }, err => {
        this.signupError = err.json().errors;
        this.signupErrorOpacity = 1;
      })
  }

  ngOnInit() {

  }

}
