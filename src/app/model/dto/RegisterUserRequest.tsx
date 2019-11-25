export class RegisterUserRequest{
    fullnames: string;
    surnames: string;
    phone: string;
    email: string;
    password: string;
    constructor(data?: any){
        if(!data) data = {};
        this.fullnames = data.fullnames;
        this.surnames = data.surnames;
        this.phone = data.phone;
        this.email = data.email;
        this.password = data.password;
    }
}