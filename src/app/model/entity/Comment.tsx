import { Person } from './Person';
import { Constant } from '../constant/Constant';
import { Comment_replay } from './Comment_replay';

export class Comment{
    id: string;
    message: string;
    person: Person;
    type: string;
    comment_replay: Array<Comment_replay>;
    constructor(data?:any){
        if(!data) data = {};
        this.id = data.id;
        this.message = data.message;
        this.person = new Person(data.user);
        this.type = data.type;
        this.comment_replay = new Array();
    }

    public setCommentReplay(list: any[]):void{
        for(let item of list)
            this.comment_replay.push(new Comment_replay(item));
    }

    public getMotionIcon():string{
        let response = "";
        
        if(this.type == Constant.HAPPY)
            response = Constant.MOTIONICON_HAPPY;
        else if(this.type == Constant.SAD)
            response = Constant.MOTIONICON_SAD;

        return response;
    }

    public addReplayComment(data: Comment_replay):void{
        this.comment_replay.unshift(data);
    }
}