import types from './types';

export const syncUserRequest = user => ({
    type: types.SYNC_REQUEST,
    payload: {
        isFetching: true,
    },
    extra: { user }
});

export const syncUserSuccess = data => ({
    type: types.SYNC_SUCCESS,
    payload: {
        isFetching: false,
        data,
    },
});

export const syncUserFailure = (error = null) => ({
  type: types.SYNC_FAILURE,
    payload: {
        isFetching: false,
        error,
    },
});
