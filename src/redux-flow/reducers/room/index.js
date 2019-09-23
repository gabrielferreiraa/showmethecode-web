import { handleActions } from 'redux-actions';
import types from './types';

export const initialState = {
    isFetching: false,
    myRooms: [],
};

export default handleActions({
    [types.REQUEST]: (state, { payload: { isFetching } }) => ({
        ...state,
        isFetching,
    }),
    [types.SUCCESS]: (state, { payload: { isFetching, myRooms } }) => ({
        ...state,
        isFetching,
        myRooms,
    }),
    [types.FAILURE]: (state, { payload: { isFetching, error } }) => ({
        ...state,
        isFetching,
        error,
    }),
}, initialState);

