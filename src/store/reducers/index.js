import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import bayiReducer from './bayiReducer';

export default combineReducers({
  userReducer,
  bayiReducer,
});
