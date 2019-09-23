import { connectRouter } from 'connected-react-router'
import { combineReducers } from "redux";

import auth from './auth';
import room from './room';
import user from './user';

export default (history) => combineReducers({
    router: connectRouter(history),
    auth,
    room,
    user,
});
