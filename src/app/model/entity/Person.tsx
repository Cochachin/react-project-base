export class Person{
    fullName: string;
    sureName: string;
    phone: string;
    email: string;
    constructor(data?:any){
        if(!data) data = {};
        this.fullName = data.fullName || "";
        this.sureName = data.sureName || "";
        this.phone = data.phone || "";
        this.email = data.email || "";
    }

    public getFirstLetterName():string{
        return this.fullName[0].toUpperCase();
    }
}