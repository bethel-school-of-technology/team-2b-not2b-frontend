import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData, LoginAuthData } from './auth-data.model';

@Injectable({ providedIn: "root" })

export class AuthService {
    constructor(private http: HttpClient) {}

    // Method that send an HTTP Request 
    createUser(firstName: string, lastName: string, email: string, username: string, password: string){
        const authData: AuthData = {firstName:firstName, lastName:lastName, email:email, username:username, password:password};
        this.http.post("http://localhost:5000/api/users/signup-page", authData)
            .subscribe(res => {
                console.log(res);
            });
    }

    userLogin(email: string, password: string) {
        const authData: LoginAuthData = {email:email, password:password};
        this.http.post("http://localhost:5000/api/users/login-page", authData)
            .subscribe(res => {
                console.log(res);
            });
    }
}