import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk';
import LoginReducer from '../reducers/LoginReducer';
import RegisterReducer from '../reducers/RegisterReducer';
import SearchReducer from '../reducers/SearchReducer';
import UserReducer from '../reducers/UserReducer';
import CommentReducer from '../reducers/CommentReducer';

const reducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    SearchReducer,
    UserReducer,
    CommentReducer
});

const Store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default Store;