export class Header{

    public getHeader():any{
        return{
            "Content-Type": "application/json"
        }
    }
    
    public getAuthenticationHeader(authentication: string):any{
        return{
            "Content-Type": "application/json",
            "Authorization": authentication
        }
    }

}