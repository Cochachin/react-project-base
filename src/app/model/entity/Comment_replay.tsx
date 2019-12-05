import { Person } from './Person';

export class Comment_replay{
    message: string;
    id:string;
    user: Person;
    comment_id: string;
    constructor(data?:any){
        if(!data) data = {};
        this.id = data.id;
        this.message = data.message;
        this.comment_id = data.comment_id;
        this.user = new Person(data.user);
    }
}