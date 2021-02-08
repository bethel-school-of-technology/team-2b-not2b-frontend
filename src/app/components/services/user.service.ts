import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private ninjaHttp: HttpClient) { }

  serverUserURL: string = "http://localhost:5000/api/users/";

  // POST request to /api/users/singup-page
  // provide new user data 
  signupUser(newNinja: User): Observable<any> {
    return this.ninjaHttp.post(this.serverUserURL+"signup-page", newNinja);
  }

  // POST request to /api/users/login-page
  // Passing provided info as JSON 
  loginUser(username: string, password: string): Observable<any>{
    let ninjaInfo = {username, password}
    return this.ninjaHttp.post(this.serverUserURL+"login-page", ninjaInfo);
  }

  // GET request to /api/users/dashboard
  // Need Authorization header with toke from login
  getNinjaInfo(): Observable<any>{
    let myHeaders = {
      Authorization: localStorage.getItem("ninjaToken")
    }
    return this.ninjaHttp.get(this.serverUserURL+"dashboard", {headers: myHeaders});
  }

}
