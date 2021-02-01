import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  onLogin(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.authService.userLogin(form.value.email, form.value.password);
  }

  ngOnInit() {
  }

}
