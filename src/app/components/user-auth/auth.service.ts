import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData, LoginAuthData } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: "root" })

export class AuthService {

    private token:string;

    constructor(private http: HttpClient, private myrouter: Router) {}

    getToken() {
        return this.token;
    }

    // Method that send an HTTP Request 
    createUser(firstName: string, lastName: string, email: string, username: string, password: string){
        const authData: AuthData = {firstName:firstName, lastName:lastName, email:email, username:username, password:password};
        this.http.post("http://localhost:5000/api/users/signup-page", authData)
            .subscribe(response => {
                console.log(response);
            })
                
        }


    userLogin(email: string, password: string) {
        const authData: LoginAuthData = {email:email, password:password};
        this.http.post<{token:string}>("http://localhost:5000/api/users/login-page", authData)
            .subscribe((res:any) => {
                const token = res.token
                this.token = token;
                if(res.status = 200){
                    this.myrouter.navigate(["decision-page"])
                }
            });
    }
}