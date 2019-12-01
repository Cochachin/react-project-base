import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';
import { Restaurant } from '../model/entity/Restaurant';

const defaultState = { 
                        message: "",  
                        list: [],
                        restaurant: {}
                    }

const reducer = (state = defaultState, action: Action<any>) =>{
    let key = 0;
    let restaurant = {};
    switch(action.type){
        case ConstantAction.SEARCH_RESTAURANT:
            let tempList = action.payload.map((item: any) =>{
                key = key + 1;
                item.key = key;
                let temp = new Restaurant(item);
                temp.setStarts();
                return temp;
            });
            return {
                ...state,
                list: tempList
            };
        case ConstantAction.SELECT_RESTAURANT:
            return {
                ...state,
                restaurant: action.payload
            };
        case ConstantAction.LIST_RESTAURANT:
            let list = action.payload.map((item: any) =>{
                key = key + 1;
                item.key = key;
                let temp = new Restaurant(item);
                temp.setStarts();
                return temp;
            });

            if(list.length > 0)
                restaurant = list[0];

            return {
                ...state,
                list: list,
                restaurant: restaurant
            };
        default:
            return state; 
    }

}

export default reducer;