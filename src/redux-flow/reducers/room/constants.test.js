import { expect } from "chai"

import { USER_TYPE } from "./constants"

describe("constants/room", () => {
  describe("USER_TYPE", () => {
    test("should be a object", () => {
      expect(USER_TYPE).to.be.a("object")
    })

    test("should have 2 actions", () => {
      expect(Object.keys(USER_TYPE)).to.have.lengthOf(2)
    })

    describe("guest", () => {
      test("should have a github property", () => {
        expect(USER_TYPE).to.have.property("guest")
      })

      test("property should return a string", () => {
        expect(USER_TYPE.guest).to.be.a("string")
      })

      test("property should return a correct value", () => {
        expect(USER_TYPE.guest).to.be.deep.equal("g")
      })
    })
    describe("owner", () => {
      test("should have a google property", () => {
        expect(USER_TYPE).to.have.property("owner")
      })

      test("property should return a string", () => {
        expect(USER_TYPE.owner).to.be.a("string")
      })

      test("property should return a correct value", () => {
        expect(USER_TYPE.owner).to.be.deep.equal("o")
      })
    })
  })
})
