import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';

const defaultState = { loader: false, message: "", response: false}

const reducer = (state = defaultState, action: Action<any>) =>{
    switch(action.type){
        case ConstantAction.REGISTER_USER:
            return {
                ...state,
                response: true
            };
        default:
            return {
                ...state,
                message: action.payload,
                loader: true
            }; 
    }

}

export default reducer;