import { BaseStorage } from './BaseStorage';
import { Login } from '../../../model/entity/Login';
import { Constant } from '../../../model/constant/Constant';

export class StorageService{
    private data: BaseStorage;

    constructor(){
        this.data = new BaseStorage();
    }
    public setToken(login: Login): void{
        this.data.save(Constant.LOGIN, login);
    }

    public getToken(): Login{
        let login = new Login(this.data.load<any>(Constant.LOGIN));
        return login;
    }

    public deleteToken(): void{
        this.data.remove<string>(Constant.LOGIN);
    }

    public clearStorage(): void{
        this.data.clear();
    }
}