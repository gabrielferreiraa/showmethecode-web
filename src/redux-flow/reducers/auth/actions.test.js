import { expect } from "chai"

import * as actions from "./actions"

describe("actions/auth", () => {
  describe("loginRequest", () => {
    test("should be a function", () => {
      expect(actions.loginRequest).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.loginRequest("github")).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.loginRequest("github")).to.be.deep.equal({
        type: "auth/REQUEST",
        payload: { isFetching: true },
        extra: { provider: "github" },
      })
    })
  })

  describe("loginSuccess", () => {
    test("should be a function", () => {
      expect(actions.loginSuccess).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.loginSuccess()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.loginSuccess()).to.be.deep.equal({
        type: "auth/SUCCESS",
        payload: {
          isFetching: false,
        },
      })
    })
  })

  describe("loginFailure", () => {
    test("should be a function", () => {
      expect(actions.loginFailure).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.loginFailure()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.loginFailure()).to.be.deep.equal({
        type: "auth/FAILURE",
        payload: {
          isFetching: false,
          error: null,
        },
      })
    })
  })
})
