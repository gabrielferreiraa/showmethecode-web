import { expect } from "chai"

import events from "./events"

describe("events/room", () => {
  test("should be a object", () => {
    expect(events).to.be.a("object")
  })

  test("should have 1 actions", () => {
    expect(Object.keys(events)).to.have.lengthOf(1)
  })

  describe("NEW_ROOM", () => {
    test("should have a property", () => {
      expect(events).to.have.property("NEW_ROOM")
    })

    test("property should return a string", () => {
      expect(events.NEW_ROOM).to.be.a("string")
    })

    test("property should return correct type", () => {
      expect(events.NEW_ROOM).to.be.equal("newRoom")
    })
  })
})
