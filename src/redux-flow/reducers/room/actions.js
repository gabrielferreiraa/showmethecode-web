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

export const startListener = () => ({
   type: types.START_SOCKET,
});

export const updatedMyRooms = (room) => ({
    type: 'UPDATED_MY_ROOMS',
    params: {
        room,
    },
});
