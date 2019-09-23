import { takeLatest, put, call } from "redux-saga/effects";
import { push } from 'connected-react-router';

import types from './types';
import * as actions from './actions';
import * as api from 'services/api';

import { loginFailure } from 'redux-flow/reducers/auth/actions';

function* workerUserSyncRequest({ extra: { user } }) {
    try {
        const { data } = yield call(api.upsertUser, user);

        yield put(actions.syncUserSuccess(data));
        yield put(push('/entry'));
    } catch (err) {
        yield put(loginFailure(err));
        yield put(actions.syncUserFailure(err));
    }
}

export default function* authSagas() {
    yield takeLatest(types.SYNC_REQUEST, workerUserSyncRequest);
}
