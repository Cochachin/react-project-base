export class BaseStorage{

    public save(key:string, value: object | string): void{
        localStorage.setItem(key, JSON.stringify(value));
    }

    public load<T>(key: string): T | any{
        let loaded = localStorage.getItem(key) || "";
        try{
            return JSON.parse(loaded);
        }
        catch(ex){
            return loaded;
        }
    }

    public remove<T>(key:any): T | string{
        let remove = this.load<T>(key);
        localStorage.removeItem(key);
        return remove;
    }

    public clear():void{
        localStorage.clear();
    }
}