import { takeLatest, put, call, select } from "redux-saga/effects";

import types from './types';
import * as actions from './actions';
import * as api from 'services/api';
import { getUser } from 'redux-flow/reducers/user/selectors';

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
}
