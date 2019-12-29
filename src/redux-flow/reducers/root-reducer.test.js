import { expect } from "chai"
import { createStore } from "redux"
import { createMemoryHistory } from "history"

import auth from "./auth"
import user from "./user"
import rootReducer from "./root-reducer"

describe("reducers/root-reducer", () => {
  describe("reducers/auth", () => {
    test("should return initial state", () => {
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

      expect(store.getState().auth).to.be.deep.equal(
        auth(undefined, {
          type: "unknown",
        })
      )
    })

    test("should dispatch action `auth/REQUEST`", () => {
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

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
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

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
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

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
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

      expect(store.getState().user).to.be.deep.equal(
        user(undefined, {
          type: "unknown",
        })
      )
    })

    test("should dispatch action `user/SYNC_REQUEST`", () => {
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

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
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

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
      const history = createMemoryHistory()
      const store = createStore(rootReducer(history))

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
