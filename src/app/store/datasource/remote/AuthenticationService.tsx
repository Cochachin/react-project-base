import { Base } from "./Base";
import { LoginRequest } from '../../../model/dto/LoginRequest';
import { Header } from './Header';
import { URL_BASE } from './Enviroments';

export class AuthenticationService extends Base{
    private headers: Header;
    private url: string;
    constructor(){
        super();
        this.headers = new Header();
        this.url = URL_BASE;
    }

    public authentication(request: LoginRequest):Promise<any>{
        return new Promise((resolve, reject) =>{
            this.url = this.url + "/auth/login";
            this.post(this.url, this.headers.getHeader(), request).then((resp: any) =>{
                resolve(resp.data);
            }).catch((error: any) =>{
                reject(error);
            });
        });
    }
}