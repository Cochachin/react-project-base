export class Restaurant{
    key: number;
    id: string;
    name: string;
    address: string;
    region: string;
    district: string;
    ranking: number;
    openClose: string;
    comment_negative: number;
    comment_positive: number;
    starts: Array<any>
    constructor(data?:any){
        if(!data) data = {};
        this.key = data.key;
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.district = data.district;
        this.region = data.region;
        this.ranking = data.ranking;
        this.openClose = data.open_close;
        this.comment_negative = data.comment_negative;
        this.comment_positive = data.comment_positive;
        this.starts = new Array();
    }

    public setStarts():void{
        for(let i = 0; i < this.ranking; i++)
            this.starts.push(i);
    }
}