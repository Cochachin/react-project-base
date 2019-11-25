export class Login{
    token: string;
    user_id: string;
    id: string;
    constructor(data?:any){
        if(!data) data = {}
        this.id = data.id
        this.token = data.token;
        this.user_id = data.user_id
    }
}