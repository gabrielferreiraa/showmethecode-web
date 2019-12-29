import { expect } from "chai"

import { PROVIDERS } from "./constants"
import { USER_TYPE } from "../room/constants"

describe("constants/auth", () => {
  describe("PROVIDERS", () => {
    test("should be a object", () => {
      expect(PROVIDERS).to.be.a("object")
    })

    test("should have 2 actions", () => {
      expect(Object.keys(PROVIDERS)).to.have.lengthOf(2)
    })

    describe("github", () => {
      test("should have a github property", () => {
        expect(PROVIDERS).to.have.property("github")
      })

      test("property should return a string", () => {
        expect(PROVIDERS.github).to.be.a("string")
      })

      test("property should return a correct value", () => {
        expect(PROVIDERS.github).to.be.deep.equal("github")
      })
    })
    describe("google", () => {
      test("should have a google property", () => {
        expect(PROVIDERS).to.have.property("google")
      })

      test("property should return a string", () => {
        expect(PROVIDERS.google).to.be.a("string")
      })

      test("property should return a correct value", () => {
        expect(PROVIDERS.google).to.be.deep.equal("google")
      })
    })
  })
})
