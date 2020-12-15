import {combineReducers} from 'redux';

import bayiReducer from './bayiReducer';
import userReducer from './userReducer';

const reducer = combineReducers({bayiReducer, userReducer});

export default reducer;
