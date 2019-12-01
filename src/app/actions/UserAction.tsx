import { ConstantAction } from './ConstantAction';
import { BaseAction } from './BaseAction';
import { UserService } from '../store/datasource/remote/UserService';

export class UserAction extends BaseAction{
    public static async getUser(dispatch: any){
        try{
            let service = new UserService();
            let resp = await service.getUser();
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.USER_PROFILE,
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