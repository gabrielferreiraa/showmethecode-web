import { expect } from "chai"
import { createStore } from "redux"
import { createMemoryHistory } from "history"

import auth from "./auth"
import user from "./user"
import rootReducer from "./root-reducer"

describe("reducers/root-reducer", () => {
  let store
  beforeEach(() => {
    const history = createMemoryHistory()
    store = createStore(rootReducer(history))
  })

  describe("reducers/auth", () => {
    test("should return initial state", () => {
      expect(store.getState().auth).to.be.deep.equal(
        auth(undefined, {
          type: "unknown",
        })
      )
    })

    test("should dispatch action `auth/REQUEST`", () => {
      const authRequestAction = {
        type: "auth/REQUEST",
        payload: {
          isFetching: true,
        },
      }
      store.dispatch(authRequestAction)

      expect(store.getState().auth).to.be.deep.equal(
        auth(undefined, authRequestAction)
      )
    })

    test("should dispatch action `auth/SUCCESS`", () => {
      const authSuccessAction = {
        type: "auth/SUCCESS",
        payload: {
          isFetching: false,
          token: "TOKEN",
        },
      }
      store.dispatch(authSuccessAction)

      expect(store.getState().auth).to.be.deep.equal(
        auth(undefined, authSuccessAction)
      )
    })

    test("should dispatch action `auth/FAILURE`", () => {
      const authFailureAction = {
        type: "auth/FAILURE",
        payload: {
          isFetching: false,
        },
      }
      store.dispatch(authFailureAction)

      expect(store.getState().auth).to.be.deep.equal(
        auth(undefined, authFailureAction)
      )
    })
  })

  describe("reducers/user", () => {
    test("should return initial state", () => {
      expect(store.getState().user).to.be.deep.equal(
        user(undefined, {
          type: "unknown",
        })
      )
    })

    test("should dispatch action `user/SYNC_REQUEST`", () => {
      const syncRequestAction = {
        type: "user/SYNC_REQUEST",
        payload: {
          isFetching: true,
        },
      }
      store.dispatch(syncRequestAction)

      expect(store.getState().user).to.be.deep.equal(
        user(undefined, syncRequestAction)
      )
    })

    test("should dispatch action `user/SYNC_SUCCESS`", () => {
      const syncSuccessAction = {
        type: "user/SYNC_SUCCESS",
        payload: {
          isFetching: false,
        },
      }
      store.dispatch(syncSuccessAction)

      expect(store.getState().user).to.be.deep.equal(
        user(undefined, syncSuccessAction)
      )
    })

    test("should dispatch action `user/SYNC_FAILURE`", () => {
      const syncFailureAction = {
        type: "user/SYNC_FAILURE",
        payload: {
          isFetching: false,
        },
      }
      store.dispatch(syncFailureAction)

      expect(store.getState().user).to.be.deep.equal(
        user(undefined, syncFailureAction)
      )
    })
  })
})
