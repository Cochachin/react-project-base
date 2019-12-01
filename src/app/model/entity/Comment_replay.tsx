import { Person } from './Person';

export class Comment_replay{
    message: string;
    user: Person;
    constructor(data?:any){
        if(!data) data = {};
        this.message = data.message;
        this.user = new Person(data.user);
    }
}