import { eventChannel } from 'redux-saga';
import { takeLatest, put, call, select, take } from "redux-saga/effects";

import socket from 'config/websocket';
import * as api from 'services/api';
import { getUser } from 'redux-flow/reducers/user/selectors';
import types from './types';
import events from './events';
import * as actions from './actions';

export function newRoom(socket) {
    return eventChannel(emit => {
        socket.on(events.NEW_ROOM, data => emit(data));

        return () => socket.close();
    });
}

export function* workerStartListener() {
    const channel = yield call(newRoom, socket);

    while (true) {
        const room = yield take(channel);
        yield put(actions.updatedMyRooms(room));
    }
}

export function* workerFetchMyRoomsRequest() {
    try {
        const user = yield select(getUser);
        const { data } = yield call(api.myRooms, user._id);

        yield put(actions.fetchMyRoomsSuccess(data));
    } catch (err) {
        yield put(actions.fetchMyRoomsFailure(err));
    }
}

export default function* roomSagas() {
    yield takeLatest(types.REQUEST, workerFetchMyRoomsRequest);
    yield takeLatest(types.START_SOCKET, workerStartListener);
}
