export class BaseAction{
    public static checkResponse(data: any):boolean{
        let response = true;
        
        if(data.state == -1)
            response = false;
        else if(data.state == 0)
            response = false;

        return response;
    }
}