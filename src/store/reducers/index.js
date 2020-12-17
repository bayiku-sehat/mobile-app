import {combineReducers} from 'redux';
//import userReducerFire from './userReducerFire';
//import bayiReducer from './bayiReducer';
//import userReducer from './userReducer';

//export default combineReducers({
//userReducer,
//bayiReducer,
//userReducerFire,
import {userReducer} from './userReducer';
import bayiReducer from './bayiReducer';

export default combineReducers({
  userReducer,
  bayiReducer,
});
