import { ConstantAction } from './ConstantAction';
import { BaseAction } from './BaseAction';
import { RegisterUserRequest } from '../model/dto/RegisterUserRequest';
import { RegistserUserService } from '../store/datasource/remote/RegisterUserService';

export class RegisterUserAction extends BaseAction{
    public static async register(dispatch: any, request: RegisterUserRequest){
        try{
            let service = new RegistserUserService();
            let resp = await service.registerUser(request);
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.REGISTER_USER,
                    payload: resp.data
                });
            }
            else{
                return dispatch({
                    type: ConstantAction.REQUEST_ERROR,
                    payload: "Lo siento en este momento no podemos registrar su solicitud"
                });
            }
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Lo siento en este momento no podemos registrar su solicitud"
            })
        }
        
    }
}