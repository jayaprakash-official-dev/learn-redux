import {applyMiddleware, combineReducers, createStore} from 'redux';
import {userReducer} from './reducer/UserReducer';
import thunk from 'redux-thunk';
import {PostReducer} from './reducer/PostReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: PostReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
