import { Base } from "./Base";
import { RegisterUserRequest } from '../../../model/dto/RegisterUserRequest';
import { Header } from './Header';
import { URL_BASE } from './Enviroments';
import { StorageService } from '../local/StorageService';

export class SearchService extends Base{
    private headers: Header;
    private url: string;
    private storage: StorageService;
    constructor(){
        super();
        this.storage = new StorageService()
        this.headers = new Header();
        this.url = URL_BASE;
    }

    public searchRestaurant(search: string):Promise<any>{
        return new Promise((resolve, reject) =>{
            let login = this.storage.getToken();
            this.url = this.url + "/restaurant/?search=" + search;
            this.get(this.url, this.headers.getAuthenticationHeader(login.token)).then((resp: any) =>{
                resolve(resp.data);
            }).catch((error: any) =>{
                reject(error);
            });
        });
    }
}