import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';
import { Comment } from '../model/entity/Comment';
import { CommentList } from '../model/entity/Comment_list';
import { Comment_replay } from '../model/entity/Comment_replay';

const defaultState = { comments: new CommentList() }

const reducer = (state = defaultState, action: Action<any>) =>{

    switch(action.type){
        case ConstantAction.USER_COMMENT:
            let tempList = action.payload.map((item:any) =>{
                let comment = new Comment(item);
                comment.setCommentReplay(item.comment_replay);
                return comment;
            });
            let temp = new CommentList();
            temp.setComment(tempList)
            return {
                ...state,
                comments: temp
            };
        case ConstantAction.REGISTER_COMMENT:
            let comment = new Comment(action.payload);
            let tempComment = state.comments;
            tempComment.addComment(comment);
            return {
                ...state,
                comments: tempComment
            };
        case ConstantAction.REPLAY_COMMENT:
            let commentReplay = new Comment_replay(action.payload);
            let curent = state.comments;
            curent.addReplayComment(commentReplay);
            return{
                ...state,
                comments: curent
            }
        default:
            return state; 
    }

}

export default reducer;