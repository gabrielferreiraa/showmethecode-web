import { takeLatest, put, call } from "redux-saga/effects"

import { firebase, loginProviders } from "config/firebase"
import { syncUserRequest } from "redux-flow/reducers/user/actions"
import types from "./types"
import { loginSuccess, loginFailure } from "./actions"

export function* workerLoginRequest({ meta: { provider } }) {
  try {
    const auth = firebase.auth()
    const signInProvider = () => auth.signInWithPopup(loginProviders[provider])

    const result = yield call([auth, signInProvider], {})

    yield put(loginSuccess())
    yield put(syncUserRequest(result.user))
  } catch (err) {
    yield put(loginFailure(err))
  }
}

export default function* authSagas() {
  yield takeLatest(types.REQUEST, workerLoginRequest)
}
