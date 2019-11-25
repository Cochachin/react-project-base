export class Restaurant{
    key: number;
    id: string;
    name: string;
    address: string;
    region: string;
    district: string;
    ranking: number;
    openClose: string;
    starts: Array<any>
    constructor(data?:any){
        if(!data) data = {};
        this.key = data.key;
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.district = data.district;
        this.region = data.region;
        this.ranking = 3;
        this.openClose = data.open_close;
        this.starts = new Array();
    }

    public setStarts():void{
        for(let i = 0; i < this.ranking; i++)
            this.starts.push(i);
    }
}