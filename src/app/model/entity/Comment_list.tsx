import { Comment } from './Comment';
import { Comment_replay } from '../entity/Comment_replay';

export class CommentList{
    list: Array<Comment>;
    constructor(){
        this.list = new Array();
    }

    public setComment(list: Array<Comment>):void{
        this.list = list;
    }

    public addComment(data: Comment):void{
        this.list.unshift(data);
    }

    public addReplayComment(data: Comment_replay):void{
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].id == data.comment_id){
                this.list[i].addReplayComment(data);
                break
            }
        }
    }
}