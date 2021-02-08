import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
// import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginform = {
    username: "",
    password: ""
  }

  constructor(private ninjaUserService: UserService, private myRouter: Router) { }

  // onLogin(form: NgForm) {
  //   if(form.invalid) {
  //     return;
  //   }
  //   this.authService.userLogin(form.value.email, form.value.password);
  // }

  ngOnInit() {
  }

  login(){
    console.log(this.loginform);
    this.ninjaUserService.loginUser(this.loginform.username, this.loginform.password).subscribe(ninjaResponseObject => {
      console.log(ninjaResponseObject);
      if(ninjaResponseObject.status === 200){
        // Successful login
        window.alert(ninjaResponseObject.message);
        localStorage.setItem("ninjaToken", ninjaResponseObject.token);
        this.myRouter.navigate(["/dashboard"]);
      } else{
        // Unsuccessful login
        window.alert(ninjaResponseObject.message);
      }
    })
  }

}
