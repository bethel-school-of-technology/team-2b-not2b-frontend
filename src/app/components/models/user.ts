export class User {
    id!: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    pathChoice: number;
    
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.pathChoice = 1;
    }
}
