import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  newNinja: User = new User();

  constructor(private ninjaUserService: UserService, private myRouter: Router) {}


  ngOnInit(): void {
  }

  signup() {
    console.log(this.newNinja)
    this.ninjaUserService.signupUser(this.newNinja).subscribe(ninjaResponseObject => {
      console.log(ninjaResponseObject);
      if(ninjaResponseObject.status === 200){
        // Successful Signup
        window.alert(ninjaResponseObject.message);
        localStorage.setItem("ninjaToken", ninjaResponseObject.token);
        this.myRouter.navigate(["/decision-page"]);
      } else {
        // Unsuccessful Signup
        window.alert(ninjaResponseObject.message);
      }
    })
  }

}
