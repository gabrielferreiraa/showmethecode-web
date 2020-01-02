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
      const action = {
        type: "auth/REQUEST",
        payload: {
          isFetching: true,
        },
      }
      store.dispatch(action)

      expect(store.getState().auth).to.be.deep.equal(auth(undefined, action))
    })

    test("should dispatch action `auth/SUCCESS`", () => {
      const action = {
        type: "auth/SUCCESS",
        payload: {
          isFetching: false,
          token: "TOKEN",
        },
      }
      store.dispatch(action)

      expect(store.getState().auth).to.be.deep.equal(auth(undefined, action))
    })

    test("should dispatch action `auth/FAILURE`", () => {
      const action = {
        type: "auth/FAILURE",
        payload: {
          isFetching: false,
        },
      }
      store.dispatch(action)

      expect(store.getState().auth).to.be.deep.equal(auth(undefined, action))
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
      const action = {
        type: "user/SYNC_REQUEST",
        payload: {
          isFetching: true,
        },
      }
      store.dispatch(action)

      expect(store.getState().user).to.be.deep.equal(user(undefined, action))
    })

    test("should dispatch action `user/SYNC_SUCCESS`", () => {
      const action = {
        type: "user/SYNC_SUCCESS",
        payload: {
          isFetching: false,
        },
      }
      store.dispatch(action)

      expect(store.getState().user).to.be.deep.equal(user(undefined, action))
    })

    test("should dispatch action `user/SYNC_FAILURE`", () => {
      const action = {
        type: "user/SYNC_FAILURE",
        payload: {
          isFetching: false,
        },
      }
      store.dispatch(action)

      expect(store.getState().user).to.be.deep.equal(user(undefined, action))
    })
  })
})
