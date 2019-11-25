import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';
import { StorageService } from '../store/datasource/local/StorageService';
import { Login } from '../model/entity/Login';

const defaultState = { loader: false, message: "", response: false}

const reducer = (state = defaultState, action: Action<any>) =>{
    switch(action.type){
        case ConstantAction.LOGIN_POST:
            let storage = new StorageService();
            let login = new Login(action.payload);
            storage.setToken(login);
            return {
                ...state,
                response: true
            }
        default:
            return {
                ...state,
                message: action.payload,
                loader: true
            }   
    }

}

export default reducer;