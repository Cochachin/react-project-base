import axios from 'axios';

export class Base{
    
    public get(url: string, headers: any):Promise<any>{
        return axios({
            method: 'GET',
            url: url,
            headers: headers
        });
    }

    public post(url:string, headers: any, data: any):Promise<any>{
        return axios({
            method: 'POST',
            url: url,
            headers: headers,
            data: JSON.stringify(data)
        });
    }

}