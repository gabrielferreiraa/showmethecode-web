import { expect } from "chai"

import types from "./types"

describe("types/room", () => {
  test("should be a object", () => {
    expect(types).to.be.a("object")
  })

  test("should have 4 actions", () => {
    expect(Object.keys(types)).to.have.lengthOf(4)
  })

  describe("REQUEST", () => {
    test("should have a property", () => {
      expect(types).to.have.property("REQUEST")
    })

    test("property should return a string", () => {
      expect(types.REQUEST).to.be.a("string")
    })

    test("property should return correct type", () => {
      expect(types.REQUEST).to.be.equal("myRooms/FETCH_REQUEST")
    })
  })

  describe("SUCCESS", () => {
    test("should have a property", () => {
      expect(types).to.have.property("SUCCESS")
    })

    test("property should return a string", () => {
      expect(types.SUCCESS).to.be.a("string")
    })

    test("property should return correct type", () => {
      expect(types.SUCCESS).to.be.equal("myRooms/FETCH_SUCCESS")
    })
  })

  describe("FAILURE", () => {
    test("should have a property", () => {
      expect(types).to.have.property("FAILURE")
    })

    test("property should return a string", () => {
      expect(types.FAILURE).to.be.a("string")
    })

    test("property should return correct type", () => {
      expect(types.FAILURE).to.be.equal("myRooms/FETCH_FAILURE")
    })
  })

  describe("START_SOCKET", () => {
    test("should have a property", () => {
      expect(types).to.have.property("START_SOCKET")
    })

    test("property should return a string", () => {
      expect(types.START_SOCKET).to.be.a("string")
    })

    test("property should return correct type", () => {
      expect(types.START_SOCKET).to.be.equal("myRooms/socket/START")
    })
  })
})
