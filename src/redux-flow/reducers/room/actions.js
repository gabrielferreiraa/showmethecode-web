import types from './types';

export const fetchMyRoomsRequest = () => ({
    type: types.REQUEST,
    payload: {
        isFetching: true,
    },
});

export const fetchMyRoomsSuccess = myRooms => ({
    type: types.SUCCESS,
    payload: {
        isFetching: false,
        myRooms,
    },
});

export const fetchMyRoomsFailure = (error = null) => ({
    type: types.FAILURE,
    payload: {
        isFetching: false,
        error
    },
});
