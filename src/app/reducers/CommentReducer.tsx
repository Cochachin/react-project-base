import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';
import { Comment } from '../model/entity/Comment';

const defaultState = { comments: new Array<Comment>() }

const reducer = (state = defaultState, action: Action<any>) =>{

    switch(action.type){
        case ConstantAction.USER_COMMENT:
            let k = 0;
            let tempList = action.payload.map((item:any) =>{
                k = k + 1;
                let comment = new Comment(item);
                comment.setKey(k);
                comment.setCommentReplay(item.comment_replay);
                return comment;
            });
            return {
                ...state,
                comments: tempList
            };
        case ConstantAction.REGISTER_COMMENT:
            let comment = new Comment(action.payload);
            let addList = state.comments;
            addList.push(comment)
            return {
                ...state,
                comments: addList
            };

        default:
            return state; 
    }

}

export default reducer;