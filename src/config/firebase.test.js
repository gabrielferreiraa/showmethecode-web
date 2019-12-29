import { expect } from "chai"

import { loginProviders } from "./firebase"

describe("config/firebase", () => {
  describe("loginProviders", () => {
    test("should be a object", () => {
      expect(loginProviders).to.be.a("object")
    })

    test("should have 2 properties", () => {
      expect(Object.keys(loginProviders)).to.have.lengthOf(2)
    })

    test("should have github property", () => {
      expect(loginProviders).to.have.property("github")
    })

    test("should have google property", () => {
      expect(loginProviders).to.have.property("google")
    })
  })
})
