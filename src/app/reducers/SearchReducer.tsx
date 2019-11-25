import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';
import { Restaurant } from '../model/entity/Restaurant';

const defaultState = { loader: false, message: "", response: false, list: []}

const reducer = (state = defaultState, action: Action<any>) =>{
    switch(action.type){
        case ConstantAction.SEARCH_RESTAURANT:
            let key = 0;
            let tempList = action.payload.map((item: any) =>{
                key = key + 1;
                item.key = key;
                let temp = new Restaurant(item);
                temp.setStarts();
                return temp;
            })
            return {
                ...state,
                list: tempList,
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