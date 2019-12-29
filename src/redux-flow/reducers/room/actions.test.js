import { expect } from "chai"

import * as actions from "./actions"
import types from "./types"

const myRooms = []

describe("actions/room", () => {
  describe("fetchMyRoomsRequest", () => {
    test("should be a function", () => {
      expect(actions.fetchMyRoomsRequest).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.fetchMyRoomsRequest()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.fetchMyRoomsRequest()).to.be.deep.equal({
        type: types.REQUEST,
        payload: { isFetching: true },
      })
    })
  })

  describe("fetchMyRoomsSuccess", () => {
    test("should be a function", () => {
      expect(actions.fetchMyRoomsSuccess).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.fetchMyRoomsSuccess()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.fetchMyRoomsSuccess(myRooms)).to.be.deep.equal({
        type: types.SUCCESS,
        payload: {
          isFetching: false,
          myRooms,
        },
      })
    })
  })

  describe("fetchMyRoomsFailure", () => {
    test("should be a function", () => {
      expect(actions.fetchMyRoomsFailure).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(actions.fetchMyRoomsFailure()).to.be.a("object")
    })

    test("should be return a valid object", () => {
      expect(actions.fetchMyRoomsFailure([])).to.be.deep.equal({
        type: types.FAILURE,
        payload: {
          isFetching: false,
          error: [],
        },
      })
    })
  })
})
