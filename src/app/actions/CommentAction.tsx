import { ConstantAction } from './ConstantAction';
import { BaseAction } from './BaseAction';
import { CommentService } from '../store/datasource/remote/CommentService';
import { CommentRequest, CommentReplayRequest } from '../model/dto/CommentRequest';

export class CommentAction extends BaseAction{
    public static async getComment(dispatch: any, id: string){
        try{
            let service = new CommentService();
            let resp = await service.getCommentRestaurant(id);
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.USER_COMMENT,
                    payload: resp.data
                });
            }
            else{
                return dispatch({
                    type: ConstantAction.REQUEST_ERROR,
                    payload: "Lo siento el servicio esta en mantenimiento"
                });
            }
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Lo siento el servicio esta en mantenimiento"
            })
        }
        
    }

    public static async registerComment(dispatch: any, request: CommentRequest){
        try{
            let service = new CommentService();
            let resp = await service.postCommentRestaurant(request);
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.REGISTER_COMMENT,
                    payload: resp.data
                });
            }
            else{
                return dispatch({
                    type: ConstantAction.REQUEST_ERROR,
                    payload: "Lo siento el servicio esta en mantenimiento"
                });
            }
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Lo siento el servicio esta en mantenimiento"
            })
        }
        
    }

    public static async replayComment(dispatch: any, request: CommentReplayRequest){
        try{
            let service = new CommentService();
            let resp = await service.postReplayComment(request);
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.REPLAY_COMMENT,
                    payload: resp.data
                });
            }
            else{
                return dispatch({
                    type: ConstantAction.REQUEST_ERROR,
                    payload: "Lo siento el servicio esta en mantenimiento"
                });
            }
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Lo siento el servicio esta en mantenimiento"
            })
        }
        
    }
}