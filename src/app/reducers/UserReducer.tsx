import { Action } from './BaseReducer';
import { ConstantAction } from '../actions/ConstantAction';
import { Person } from '../model/entity/Person';

const defaultState = { 
                        loader: false, 
                        message: "", 
                        response: false, 
                        person: {}, 
                        letter: ""
                    }

const reducer = (state = defaultState, action: Action<any>) =>{
    switch(action.type){
        case ConstantAction.USER_PROFILE:
            let person = new Person(action.payload);
            return {
                ...state,
                response: true,
                person: person,
                letter: person.getFirstLetterName()
            };
        default:
            return state;
    }

}

export default reducer;