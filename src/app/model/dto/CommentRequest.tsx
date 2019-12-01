export class CommentRequest{
    message: string;
    restaurant_id: string;
    user_id: string;
    constructor(data?:any){
        this.message = "";
        this.restaurant_id = "";
        this.user_id = ""
    }
}

export class CommentReplayRequest{
    message: string;
    comment_id: string;
    user_id: string;
    constructor(data?:any){
        this.message = "";
        this.comment_id = "";
        this.user_id = ""
    }
}