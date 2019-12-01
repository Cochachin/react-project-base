import { Base } from "./Base";
import { Header } from './Header';
import { URL_BASE } from './Enviroments';
import { CommentRequest } from '../../../model/dto/CommentRequest';
import { StorageService } from '../local/StorageService';
import { CommentReplayRequest } from '../../../model/dto/CommentRequest';

export class CommentService extends Base{
    private headers: Header;
    private url: string;
    private storage: StorageService;
    constructor(){
        super();
        this.storage = new StorageService()
        this.headers = new Header();
        this.url = URL_BASE;
    }

    public getCommentRestaurant(id: string):Promise<any>{
        let login = this.storage.getToken();
        return new Promise((resolve, reject) =>{
            this.url = this.url + "/restaurant/comments?restaurant_id=" + id;
            this.get(this.url, this.headers.getAuthenticationHeader(login.token)).then((resp: any) =>{
                resolve(resp.data);
            }).catch((error: any) =>{
                reject(error);
            });
        });
    }

    public postCommentRestaurant(request: CommentRequest):Promise<any>{
        let login = this.storage.getToken();
        request.user_id = login.user_id;
        return new Promise((resolve, reject) =>{
            this.url = this.url + "/restaurant/comments";
            this.post(this.url, this.headers.getAuthenticationHeader(login.token),request).then((resp: any) =>{
                resolve(resp.data);
            }).catch((error: any) =>{
                reject(error);
            });
        });
    }

    public postReplayComment(request: CommentReplayRequest):Promise<any>{
        let login = this.storage.getToken();
        request.user_id = login.user_id;
        return new Promise((resolve, reject) =>{
            this.url = this.url + "/restaurant/comments/replies";
            this.post(this.url, this.headers.getAuthenticationHeader(login.token),request).then((resp: any) =>{
                resolve(resp.data);
            }).catch((error: any) =>{
                reject(error);
            });
        });
    }

}