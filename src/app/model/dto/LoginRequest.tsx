export class LoginRequest{
    email: string;
    password: string;
    constructor(data?: any){
        if(!data) data = {};
        this.email = '';
        this.password = '';
    }
}