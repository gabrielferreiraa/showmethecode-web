import { handleActions } from 'redux-actions';
import types from './types';

export const initialState = {
    isFetching: false,
    data: null,
    error: null,
};

export default handleActions({
    [types.SYNC_REQUEST]: (state, { payload: { isFetching } }) => ({
        ...state,
        isFetching,
    }),
    [types.SYNC_SUCCESS]: (state, { payload: { isFetching, data } }) => ({
        ...state,
        isFetching,
        data,
    }),
    [types.SYNC_FAILURE]: (state, { payload: { isFetching, error} }) => ({
        ...state,
        isFetching,
        error,
    }),
}, initialState);

