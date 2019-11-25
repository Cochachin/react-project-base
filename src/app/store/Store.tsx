import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk';
import LoginReducer from '../reducers/LoginReducer';
import RegisterReducer from '../reducers/RegisterReducer';
import SearchReducer from '../reducers/SearchReducer';

const reducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    SearchReducer
});

const Store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default Store;