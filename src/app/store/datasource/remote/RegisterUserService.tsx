import { Base } from "./Base";
import { RegisterUserRequest } from '../../../model/dto/RegisterUserRequest';
import { Header } from './Header';
import { URL_BASE } from './Enviroments';

export class RegistserUserService extends Base{
    private headers: Header;
    private url: string;
    constructor(){
        super();
        this.headers = new Header();
        this.url = URL_BASE;
    }

    public registerUser(request: RegisterUserRequest):Promise<any>{
        return new Promise((resolve, reject) =>{
            this.url = this.url + "/auth/register";
            this.post(this.url, this.headers.getHeader(), request).then((resp: any) =>{
                resolve(resp.data);
            }).catch((error: any) =>{
                reject(error);
            });
        });
    }
}