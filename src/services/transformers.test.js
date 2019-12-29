import { expect } from "chai"

import { transformUserToSave } from "./transformers"

describe("services/transformers", () => {
  describe("transformUserToSave", () => {
    const user = {
      displayName: "Silvio Santos",
      email: " silvio@email.com",
      avatar: "http://sbt.com.br/photo.png",
      firebase: {},
    }

    test("should be a function", () => {
      expect(transformUserToSave).to.be.a("function")
    })

    test("should be return a object", () => {
      expect(transformUserToSave(user)).to.be.a("object")
    })

    test("should be return a correct object", () => {
      expect(transformUserToSave(user)).to.be.deep.equal({
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        firebase: user.providerData,
      })
    })
  })
})

// export const transformUserToSave = user => ({
//     name: user.displayName,
//     email: user.email,
//     avatar: user.photoURL,
//     firebase: user.providerData,
// });
