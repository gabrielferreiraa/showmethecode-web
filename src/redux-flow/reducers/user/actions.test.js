import { expect } from "chai"

import * as actions from "./actions"

describe("actions/user", () => {
  describe("asyncUserRequest", () => {
    test("should be a function", () => {
      expect(actions.syncUserRequest).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.syncUserRequest()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      const user = {}

      expect(actions.syncUserRequest(user)).to.be.deep.equal({
        type: "user/SYNC_REQUEST",
        payload: { isFetching: true },
        meta: { user },
      })
    })
  })

  describe("asyncUserSuccess", () => {
    test("should be a function", () => {
      expect(actions.syncUserSuccess).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.syncUserSuccess([])).to.be.a("object")
    })

    test("should be return a valid object", () => {
      const data = []
      expect(actions.syncUserSuccess(data)).to.be.deep.equal({
        type: "user/SYNC_SUCCESS",
        payload: {
          isFetching: false,
          data,
        },
      })
    })
  })

  describe("asyncUserFailure", () => {
    test("should be a function", () => {
      expect(actions.syncUserFailure).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.syncUserFailure()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.syncUserFailure()).to.be.deep.equal({
        type: "user/SYNC_FAILURE",
        payload: {
          isFetching: false,
          error: null,
        },
      })
    })
  })
})
