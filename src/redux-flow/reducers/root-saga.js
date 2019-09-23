import { all, fork } from 'redux-saga/effects';

// Sagas
import authSagas from './auth/sagas';
import userSagas from './user/sagas';
import roomSagas from './room/sagas';

export default function* rootSaga() {
    yield all([
        fork(authSagas),
        fork(roomSagas),
        fork(userSagas),
    ])
}
