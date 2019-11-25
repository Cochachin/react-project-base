import { ConstantAction } from './ConstantAction';
import { LoginRequest } from '../model/dto/LoginRequest';
import { AuthenticationService } from '../store/datasource/remote/AuthenticationService';
import { BaseAction } from './BaseAction';

export class LoginAction extends BaseAction{
    public static async auth(dispatch: any, request: LoginRequest){
        try{
            let service = new AuthenticationService();
            let resp = await service.authentication(request);
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.LOGIN_POST,
                    payload: resp.data
                });
            }
            else{
                return dispatch({
                    type: ConstantAction.REQUEST_ERROR,
                    payload: "Lo siento no cuenta con un acceso"
                });
            }
            
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Error de aplicación"
            })
        }
        
    }
}